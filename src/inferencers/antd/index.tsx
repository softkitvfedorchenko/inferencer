import React from "react";
import { useResource } from "@refinedev/core";

import { ShowInferencer } from "./show";
import { ListInferencer } from "./list";
import { CreateInferencer } from "./create";
import { EditInferencer } from "./edit";

import type { InferencerComponentProps } from "../../types";

const AntdInferencer: React.FC<InferencerComponentProps> = ({
    action: actionFromProps,
    id: idFromProps,
    ...props
}) => {
    const { action, id, ...rest } = useResource();

    switch (actionFromProps ?? action) {
        case "show":
            return <ShowInferencer {...props} id={idFromProps ?? id} />;
        case "create":
            return <CreateInferencer {...props} id={idFromProps ?? id} />;
        case "edit":
            return <EditInferencer {...props} id={idFromProps ?? id} />;
        default:
            return <ListInferencer {...props} id={idFromProps ?? id} />;
    }
};

export { AntdInferencer };
export {
    ShowInferencer as ShowInferencer,
    renderer as ShowRenderer,
} from "./show";
export {
    EditInferencer as EditInferencer,
    renderer as EditRenderer,
} from "./edit";
export {
    ListInferencer as ListInferencer,
    renderer as ListRenderer,
} from "./list";
export {
    CreateInferencer as CreateInferencer,
    renderer as CreateRenderer,
} from "./create";
export * from "../../types";
