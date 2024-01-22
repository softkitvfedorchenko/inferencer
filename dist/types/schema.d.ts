import { IResourceItem, DataProvider } from "@refinedev/core";
import React from "react";
export declare type InferType = "relation" | "array" | "object" | "date" | "email" | "image" | "url" | "richtext" | "text" | "number" | "boolean" | "unknown" | `custom_${string}` | null;
export declare type InferField = {
    key: string;
    type: InferType;
    relation?: boolean;
    multiple?: boolean;
    fieldable?: boolean;
    /**
     * Accessor to get the value from the record, if its an array it means multiple values should be concatenated
     */
    accessor?: string | string[];
    resource?: IResourceItem;
    priority?: number;
    relationInfer?: InferField | null | false;
    canRelation?: boolean;
};
export declare type ResourceInferenceAttempt = {
    status: "success" | "error";
    resource: string;
    field: string;
};
export declare type SchemaFieldTransformer = (fields: Array<InferField>, resources: IResourceItem[], resource: IResourceItem, record: Record<string, unknown>, infer: SchemaFieldInferencer, type: "list" | "show" | "edit" | "create") => Array<InferField>;
export declare type SchemaFieldInferencer = (key: string, props: unknown, infer: SchemaFieldInferencer, type?: "list" | "show" | "edit" | "create") => InferField | null | false;
export declare type RecordField = {
    key: string;
    value: unknown;
};
export declare type ImportElement = [
    element: string,
    module: string,
    isDefaultImport?: boolean
];
export declare type CodeViewerProps = {
    code?: string;
    loading?: boolean;
};
export declare type AdditionalScopeType = [
    packageName: string,
    variableName: string,
    module: unknown,
    ignoreReplacement?: boolean
];
export declare type LiveComponentProps = {
    fetchError?: boolean | string;
    code?: string;
    additionalScope?: Array<AdditionalScopeType>;
    errorComponent?: React.FC<{
        error?: string;
    }>;
};
export declare type RendererContext = {
    resource: IResourceItem;
    resources: IResourceItem[];
    fields: Array<InferField | null>;
    meta?: InferencerComponentProps["meta"];
    infer: SchemaFieldInferencer;
    isCustomPage: boolean;
    id?: string | number;
    i18n?: boolean;
};
export declare type CreateSchemaInferencerConfig = {
    /**
     * Inferencer Component Type
     */
    type: "list" | "show" | "edit" | "create";
    /**
     * Additional packages to be included in the scope, by default RefineCore and React is included
     */
    additionalScope?: Array<AdditionalScopeType>;
    /**
     * Custom Elements to be inferred
     */
    customElements?: Array<SchemaFieldInferencer>;
    /**
     * Transformers for the inferred fields
     */
    fieldTransformers?: Array<SchemaFieldTransformer>;
    /**
     *  Custom Code Viewer Component
     */
    codeViewerComponent: React.FC<CodeViewerProps>;
    /**
     * Loading component to be shown while infering
     */
    loadingComponent: React.FC;
    /**
     * Error component to be shown if infering fails or throws an error
     */
    errorComponent: React.FC<{
        error?: string;
    }>;
    /**
     * String renderer, inferred fields and the resource will be passed to this function and the code for the component will be generated.
     */
    renderer: (context: RendererContext) => string;
};
export declare type InferencerComponentProps = {
    /**
     * The resource name to infer from, use this or `resource` prop
     */
    name?: string;
    /**
     * The resource name to infer from, use this or `name` prop
     */
    resource?: string;
    /**
     * The action to infer page
     * @default "list"
     * */
    action?: "list" | "show" | "edit" | "create";
    /**
     * The record to infer from, use this when `action` is `show` or `edit`
     * */
    id?: string | number;
    /**
     * Field transformer function, you can use this to transform the inferred field or ignore it by returning `undefined`, `null` or `false`
     * Example: you can remove a field you want to hide by returning `undefined`, `null` or `false`
     * Example: you can change the `accessor` of an element by returning a new field with the new `accessor` to update the render
     */
    fieldTransformer?: (field: InferField) => InferField | undefined | null | false;
    meta?: {
        [resourceIdentifierOrName: string]: {
            [key in keyof Pick<DataProvider, "getList" | "getMany" | "getOne" | "update"> | "default"]?: Record<string, any>;
        };
    };
    /**
     * Use this prop to hide the code viewer and the information block components in production mode.
     *
     * Keep in mind that Inferencer components are not meant to be used in production.
     */
    hideCodeViewerInProduction?: boolean;
};
export declare type InferencerResultComponent = React.FC<InferencerComponentProps>;
export declare type CreateSchemaInferencer = (config: CreateSchemaInferencerConfig) => InferencerResultComponent;
//# sourceMappingURL=schema.d.ts.map