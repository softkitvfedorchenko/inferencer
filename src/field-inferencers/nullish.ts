import { FieldInferencer } from '../types';

export const nullishInfer: FieldInferencer = (key, props: any) => {
    if (props.nullable === true) {
        return null;
    }

    return false;
};
