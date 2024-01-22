import { InferField } from "../../types";
/**
 * Each field inferencer will run with every property of a record and output a result.
 * In these outputs, one with the highest priority will be picked as the inferred field.
 */
export declare const pickInferredField: (inferredFields: Array<InferField | null | false>) => InferField | null;
//# sourceMappingURL=index.d.ts.map