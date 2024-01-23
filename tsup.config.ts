import { defineConfig } from "tsup";

// import { lodashReplacePlugin } from "../shared/lodash-replace-plugin";
// import { markAsExternalPlugin } from "../shared/mark-as-external-plugin";
// import { removeTestIdsPlugin } from "../shared/remove-test-ids-plugin";

export default defineConfig({
    entry: {
        index: "src/index.tsx",
        antd: "src/inferencers/antd/index.tsx",
    },
    outDir: "dist",
    splitting: false,
    sourcemap: true,
    clean: false,
    platform: "browser",
    // esbuildPlugins: [
    //     removeTestIdsPlugin,
    //     lodashReplacePlugin,
    //     markAsExternalPlugin,
    // ],
    loader: {
        ".svg": "dataurl",
    },
    esbuildOptions(options) {
        options.keepNames = true;
    },
    onSuccess: "tsc --project tsconfig.declarations.json",
});
