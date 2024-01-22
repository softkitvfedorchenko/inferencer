import { IResourceItem } from "@refinedev/core";
/**
 * Picks the data provider for the given resource. Which can be overridden by the resource itself.
 */
export declare function pickDataProvider(resourceName?: string, dataProviderName?: string, resources?: IResourceItem[]): string;
/**
 * Picks the data provider for the given resource. Which can be overridden by the resource itself.
 * This is a simpler version of the above function which works with the resource item instead of the resource name and additional arguments.
 */
export declare const dataProviderFromResource: (resource?: IResourceItem) => string | undefined;
//# sourceMappingURL=index.d.ts.map