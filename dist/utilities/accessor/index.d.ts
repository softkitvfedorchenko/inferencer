import { InferField } from "../../types";
export declare const shouldDotAccess: (property: string) => boolean;
/**
 * Returns a string that can be used to access the given field.
 * @example accessor("myVar", "some", "thing") === "myVar?.some?.thing"
 * @example accessor("myVar", "so-me", th.ing") === "myVar?.['so-me']['th.ing']"
 */
export declare const accessor: (variable: string, key?: string, accessor?: string | string[], joiner?: string | false) => string;
export declare const dotAccessor: (variable: string, key?: string, accessor?: string | string[]) => string;
export declare const getAccessorKey: (field: InferField) => string;
//# sourceMappingURL=index.d.ts.map