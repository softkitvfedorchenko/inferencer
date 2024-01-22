import { InferencerComponentProps } from "../types";
/**
 * This hook will handle the data fetching for the inferencer with `loading` and `initial` states.
 * Data provider functions will be used respectively for the `list`, `show` and `edit` types.
 */
export declare const useInferFetch: (type: "list" | "show" | "edit" | "create", resourceNameOrRouteName?: string, idFromProps?: string | number, meta?: InferencerComponentProps["meta"]) => {
    data: Record<string, unknown> | undefined;
    datas: Record<string, unknown>[] | undefined;
    loading: boolean;
    initial: boolean;
    error: string | undefined;
};
//# sourceMappingURL=index.d.ts.map