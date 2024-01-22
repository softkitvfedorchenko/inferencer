declare type InferencerType = 'create' | 'list' | 'show' | 'edit';
interface ResourceSchema {
    properties: Record<string, any>;
    required: string[];
    type: 'object';
}
interface CrudSchemas {
    [k: string]: Record<'request' | 'response', ResourceSchema | undefined>;
    create: Record<'request' | 'response', ResourceSchema | undefined>;
    edit: Record<'request' | 'response', ResourceSchema | undefined>;
    show: Record<'request' | 'response', ResourceSchema | undefined>;
}
export declare const getSchemaByType: (name: string, type: InferencerType) => CrudSchemas[InferencerType];
export {};
//# sourceMappingURL=find.d.ts.map