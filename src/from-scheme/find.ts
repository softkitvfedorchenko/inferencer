//@ts-ignore
import { cloneDeep, merge, set } from 'lodash';

import scheme from './scheme';

type ObjectIndex = { [k: string]: any };

type SourceScheme = typeof scheme;
type PathList = SourceScheme['paths'] & ObjectIndex;
type Path = SourceScheme['paths'][keyof SourceScheme['paths']] & ObjectIndex;
type Components = SourceScheme['components']['schemas'] & ObjectIndex;
type SingleComponent = SourceScheme['components']['schemas'][keyof SourceScheme['components']['schemas']] & ObjectIndex;

//@ts-ignore
function traverseAndFlatten(currentNode, target, flattenedKey) {
	for (const key in currentNode) {
		if (currentNode.hasOwnProperty(key)) {
            let newKey;
			if (flattenedKey === undefined) {
				newKey = key;
			} else {
				newKey = flattenedKey + '.' + key;
			}

            const value = currentNode[key];
			if (typeof value === "object") {
				traverseAndFlatten(value, target, newKey);
			} else {
				target[newKey] = value;
			}
		}
	}
}

//@ts-ignore
function flatten(obj) {
	const flattenedObject = {};
	//@ts-ignore
	traverseAndFlatten(obj, flattenedObject);
	return flattenedObject;
}

const isSchema = (value: unknown): value is string =>
    typeof value === 'string' ? value.startsWith('#/components/schemas/') : false;

type InferencerType = 'create' | 'list' | 'show' | 'edit';

interface CrudSchemas {
    [k: string]: Record<'request' | 'response', SingleComponent | undefined>;
    create: Record<'request' | 'response', SingleComponent | undefined>;
    edit: Record<'request' | 'response', SingleComponent | undefined>;
    show: Record<'request' | 'response', SingleComponent | undefined>;
}

const operationKeys = [['get', 'show'], ['post', 'create'], ['put', 'edit']];

const getCrudSchemas = (resourceSchema: Path): CrudSchemas => {
    const crudSchemas: CrudSchemas = {
        create: {
            request: undefined,
            response: undefined,
        },
        edit: {
            request: undefined,
            response: undefined,
        },
        show: {
            request: undefined,
            response: undefined,
        },
    };

    operationKeys.forEach(([operationKey, crudKey]) => {
        if (operationKey in resourceSchema) {
            const components: Components = scheme.components.schemas;

            const flattenSchema = flatten(resourceSchema[operationKey]);

            const requestRef = Object.entries(flattenSchema)
                .find(([key, value]) => key.includes('requestBody.content') && isSchema(value)) as [string, string] | undefined;

            if (requestRef) {
                const requestRefName = requestRef[1].split('/').at(-1)!;
                const component = cloneDeep<SingleComponent>(components[requestRefName]);
                set(crudSchemas, `${crudKey}.request`, component);
            }

            const responseRef = Object.entries(flattenSchema)
                .find(([key, value]) => key.includes('responses') && isSchema(value)) as [string, string] | undefined;

            if (responseRef) {
                const responseRefName = responseRef[1].split('/').at(-1)!;
                const component = cloneDeep<SingleComponent>(components[responseRefName]);
                set(crudSchemas, `${crudKey}.response`, component);
            }
        }
    });

    return crudSchemas;
};

export const getSchemaByType = (name: string, type: InferencerType): CrudSchemas[InferencerType]['response' | 'request'] => {
    const crudSchemas = {} as CrudSchemas;
    const pathList: PathList = scheme.paths;
    console.log('scheme: ', scheme);

    Object.keys(pathList)
        .filter((path) => path.includes(name))
        .forEach((pathKey) => {
            const result = getCrudSchemas(pathList[pathKey]);
            merge(crudSchemas, result);
            crudSchemas.list = result.show;
        });

    console.log('crudSchemas: ', crudSchemas);

    if (type === 'list' || type === 'show') {
        return crudSchemas[type].response;
    }

    return crudSchemas[type].request;
};
