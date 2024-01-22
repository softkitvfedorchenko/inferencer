(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../devtools-shared/dist/index.js
  var require_dist = __commonJS({
    "../devtools-shared/dist/index.js"(exports, module) {
      var g = Object.create;
      var l = Object.defineProperty;
      var C = Object.getOwnPropertyDescriptor;
      var I = Object.getOwnPropertyNames;
      var P = Object.getPrototypeOf;
      var f = Object.prototype.hasOwnProperty;
      var N = /* @__PURE__ */ __name((e, t) => {
        for (var o in t)
          l(e, o, { get: t[o], enumerable: true });
      }, "N");
      var E = /* @__PURE__ */ __name((e, t, o, s) => {
        if (t && typeof t == "object" || typeof t == "function")
          for (let a of I(t))
            !f.call(e, a) && a !== o && l(e, a, { get: () => t[a], enumerable: !(s = C(t, a)) || s.enumerable });
        return e;
      }, "E");
      var A = /* @__PURE__ */ __name((e, t, o) => (o = e != null ? g(P(e)) : {}, E(t || !e || !e.__esModule ? l(o, "default", { value: e, enumerable: true }) : o, e)), "A");
      var V = /* @__PURE__ */ __name((e) => E(l({}, "__esModule", { value: true }), e), "V");
      var h = {};
      N(h, { DevToolsContext: () => O, DevToolsContextProvider: () => S, DevtoolsEvent: () => T, hooksByScope: () => D, receive: () => c, scopes: () => p, send: () => d });
      module.exports = V(h);
      var T = ((n) => (n.RELOAD = "devtools:reload", n.DEVTOOLS_INIT = "devtools:init", n.DEVTOOLS_HANDSHAKE = "devtools:handshake", n.DEVTOOLS_ALREADY_CONNECTED = "devtools:already-connected", n.ACTIVITY = "devtools:send-activity", n.DEVTOOLS_ACTIVITY_UPDATE = "devtools:activity-update", n.DEVTOOLS_CONNECTED_APP = "devtools:connected-app", n.DEVTOOLS_DISCONNECTED_APP = "devtools:disconnected-app", n.DEVTOOLS_HIGHLIGHT_IN_MONITOR = "devtools:highlight-in-monitor", n.DEVTOOLS_HIGHLIGHT_IN_MONITOR_ACTION = "devtools:highlight-in-monitor-action", n.DEVTOOLS_LOGIN_SUCCESS = "devtools:login-success", n.DEVTOOLS_RELOAD_AFTER_LOGIN = "devtools:reload-after-login", n))(T || {});
      var p = { useCan: "access-control", useLog: "audit-log", useLogList: "audit-log", useCreate: "data", useCreateMany: "data", useCustom: "data", useCustomMutation: "data", useDelete: "data", useDeleteMany: "data", useInfiniteList: "data", useList: "data", useMany: "data", useOne: "data", useUpdate: "data", useUpdateMany: "data", useForgotPassword: "auth", useGetIdentity: "auth", useIsAuthenticated: "auth", useLogin: "auth", useLogout: "auth", useOnError: "auth", usePermissions: "auth", useRegister: "auth", useUpdatePassword: "auth" };
      var D = Object.entries(p).reduce((e, [t, o]) => (e[o] || (e[o] = []), e[o].push(t), e), {});
      var r = A(__require("react"));
      async function d(e, t, o) {
        if (e.readyState !== e.OPEN) {
          await new Promise((s) => {
            let a = /* @__PURE__ */ __name(() => {
              e.send(JSON.stringify({ event: t, payload: o })), s(), e.removeEventListener("open", a);
            }, "a");
            e.addEventListener("open", a);
          });
          return;
        } else {
          e.send(JSON.stringify({ event: t, payload: o }));
          return;
        }
      }
      __name(d, "d");
      function c(e, t, o) {
        let s = /* @__PURE__ */ __name((a) => {
          let { event: i, payload: v } = JSON.parse(a.data);
          t === i && o(v);
        }, "s");
        return e.addEventListener("message", s), () => {
          e.removeEventListener("message", s);
        };
      }
      __name(c, "c");
      var O = r.default.createContext({ __devtools: false, port: 5002, url: "localhost", secure: false, ws: null });
      var S = /* @__PURE__ */ __name(({ __devtools: e, port: t, children: o }) => {
        let [s, a] = r.default.useState({ __devtools: e ?? false, port: t ?? 5002, url: "localhost", secure: false, ws: null }), [i, v] = r.default.useState(null);
        r.default.useEffect(() => {
          let u = new WebSocket(`${s.secure ? "wss" : "ws"}://localhost:${s.port}`), y = c(u, "devtools:handshake", (_) => {
            a((m) => ({ ...m, devtoolsUrl: _.url })), y();
          });
          return u.addEventListener("open", () => {
            s.__devtools || d(u, "devtools:init", { url: window.location.origin });
          }), v(u), () => {
            y(), u.close(1e3, window.location.origin);
          };
        }, []);
        let L = r.default.useMemo(() => ({ ...s, ws: i }), [s, i]);
        return r.default.createElement(O.Provider, { value: L }, o);
      }, "S");
    }
  });

  // ../devtools-internal/dist/index.js
  var require_dist2 = __commonJS({
    "../devtools-internal/dist/index.js"(exports, module) {
      var D = Object.create;
      var p = Object.defineProperty;
      var N = Object.getOwnPropertyDescriptor;
      var A = Object.getOwnPropertyNames;
      var b = Object.getPrototypeOf;
      var F = Object.prototype.hasOwnProperty;
      var L = /* @__PURE__ */ __name((r, e) => {
        for (var s in e)
          p(r, s, { get: e[s], enumerable: true });
      }, "L");
      var d = /* @__PURE__ */ __name((r, e, s, n) => {
        if (e && typeof e == "object" || typeof e == "function")
          for (let t of A(e))
            !F.call(r, t) && t !== s && p(r, t, { get: () => e[t], enumerable: !(n = N(e, t)) || n.enumerable });
        return r;
      }, "d");
      var E = /* @__PURE__ */ __name((r, e, s) => (s = r != null ? D(b(r)) : {}, d(e || !r || !r.__esModule ? p(s, "default", { value: r, enumerable: true }) : s, r)), "E");
      var M = /* @__PURE__ */ __name((r) => d(p({}, "__esModule", { value: true }), r), "M");
      var K = {};
      L(K, { getTrace: () => l, getXRay: () => I, useQuerySubscription: () => C });
      module.exports = M(K);
      var g = E(__require("error-stack-parser"));
      var O = "renderWithHooks";
      var T = /* @__PURE__ */ __name((r) => {
        let e = r.findIndex((s) => s.functionName === O);
        return e !== -1 ? r.slice(0, e) : r;
      }, "T");
      var u = false ? /node_modules\/refinedev\/(?<name>.*?)\// : /\/refine\/packages\/(?<name>.*?)\//;
      var _ = /* @__PURE__ */ __name((r) => r ? !!r.match(u) : false, "_");
      var R = /* @__PURE__ */ __name((r) => {
        var n;
        if (!r)
          return;
        let e = r.match(u), s = (n = e == null ? void 0 : e.groups) == null ? void 0 : n.name;
        if (s)
          return `@refinedev/${s}`;
      }, "R");
      function l() {
        if (false)
          return [];
        try {
          let r = new Error(), e = g.default.parse(r);
          return T(e).map((t) => ({ file: t.fileName, line: t.lineNumber, column: t.columnNumber, function: t.functionName, isRefine: _(t.fileName), packageName: R(t.fileName) })).filter((t) => t.function).slice(1);
        } catch {
          return [];
        }
      }
      __name(l, "l");
      var m = require_dist();
      var v = /* @__PURE__ */ __name((r, e) => {
        if (m.scopes[r] === "auth")
          return null;
        if (r === "useCan")
          return e ? "key[1].resource" : "key[1]";
        if (m.scopes[r] === "audit-log")
          return r === "useLog" ? "variables.resource" : "key[1]";
        if (m.scopes[r] === "data") {
          if (r === "useCustom" || r === "useCustomMutation")
            return null;
          switch (r) {
            case "useList":
            case "useInfiniteList":
            case "useOne":
            case "useMany":
              return e ? "key[1]" : "key[2]";
            case "useCreate":
            case "useCreateMany":
            case "useDelete":
            case "useDeleteMany":
            case "useUpdate":
            case "useUpdateMany":
              return "variables.resource";
          }
        }
        return null;
      }, "v");
      function I(r, e) {
        if (false)
          return { hookName: "", trace: [], resourcePath: null, legacyKey: false };
        {
          let s = l().slice(1), n = v(r, e);
          return { hookName: r, trace: s, resourcePath: n, legacyKey: e };
        }
      }
      __name(I, "I");
      var x = require_dist();
      var c = E(__require("react"));
      var i = require_dist();
      var y = /* @__PURE__ */ __name((r, e) => {
        let s = e == null ? void 0 : e.map((t) => `${t.file}:${t.line}:${t.column}#${t.function}-${t.packageName}-${t.isRefine ? 1 : 0}`);
        return JSON.stringify([...r ?? [], ...s ?? []]);
      }, "y");
      var P = /* @__PURE__ */ __name((r) => (e) => {
        var n;
        if (!((n = e == null ? void 0 : e.meta) != null && n.trace))
          return;
        let s = e == null ? void 0 : e.meta;
        new Promise((t) => {
          var a, o;
          (0, i.send)(r, i.DevtoolsEvent.ACTIVITY, { type: "mutation", identifier: y(e == null ? void 0 : e.options.mutationKey, (a = e == null ? void 0 : e.meta) == null ? void 0 : a.trace), key: e == null ? void 0 : e.options.mutationKey, status: e == null ? void 0 : e.state.status, state: e == null ? void 0 : e.state, variables: (o = e == null ? void 0 : e.state) == null ? void 0 : o.variables, ...s }), t();
        });
      }, "P");
      var k = /* @__PURE__ */ __name((r) => (e) => {
        var n;
        if (!((n = e == null ? void 0 : e.meta) != null && n.trace))
          return;
        let s = e == null ? void 0 : e.meta;
        new Promise((t) => {
          var a;
          (0, i.send)(r, i.DevtoolsEvent.ACTIVITY, { type: "query", identifier: y(e.queryKey, (a = e.meta) == null ? void 0 : a.trace), key: e.queryKey, status: e.state.status, state: e.state, ...s }), t();
        });
      }, "k");
      var C = false ? () => ({}) : (r) => {
        let { ws: e } = (0, c.useContext)(x.DevToolsContext), s = c.default.useRef(), n = c.default.useRef();
        return c.default.useEffect(() => {
          if (!e)
            return () => 0;
          let t = r.getQueryCache(), a = k(e);
          return t.getAll().forEach(a), s.current = t.subscribe(({ query: o, type: f }) => (f === "added" || f === "updated") && a(o)), () => {
            var o;
            (o = s.current) == null || o.call(s);
          };
        }, [e, r]), c.default.useEffect(() => {
          if (!e)
            return () => 0;
          let t = r.getMutationCache(), a = P(e);
          return t.getAll().forEach(a), n.current = t.subscribe(({ mutation: o, type: f }) => (f === "added" || f === "updated") && a(o)), () => {
            var o;
            (o = n.current) == null || o.call(n);
          };
        }, [e, r]), {};
      };
    }
  });

  // ../core/dist/index.js
  var require_dist3 = __commonJS({
    "../core/dist/index.js"(exports, module) {
      var __create2 = Object.create;
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __getProtoOf2 = Object.getPrototypeOf;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
      var __export = /* @__PURE__ */ __name((target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      }, "__export");
      var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
        }
        return to;
      }, "__copyProps");
      var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
        mod
      )), "__toESM");
      var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
      var src_exports = {};
      __export(src_exports, {
        AccessControlContext: () => AccessControlContext,
        AuthPage: () => AuthPage,
        Authenticated: () => Authenticated,
        AutoSaveIndicator: () => AutoSaveIndicator,
        CanAccess: () => CanAccess,
        ErrorComponent: () => ErrorComponent2,
        GitHubBanner: () => GitHubBanner,
        KeyBuilder: () => KeyBuilder,
        LayoutWrapper: () => LayoutWrapper,
        LoginPage: () => LoginPage,
        ReadyPage: () => ReadyPage,
        Refine: () => Refine,
        ResourceContext: () => ResourceContext,
        RouteChangeHandler: () => RouteChangeHandler,
        TranslationContext: () => TranslationContext2,
        UndoableQueue: () => UndoableQueue,
        WelcomePage: () => WelcomePage,
        createTreeView: () => createTreeView,
        file2Base64: () => file2Base64,
        flattenObjectKeys: () => flattenObjectKeys,
        generateDefaultDocumentTitle: () => generateDefaultDocumentTitle,
        getDefaultFilter: () => getDefaultFilter,
        getDefaultSortOrder: () => getDefaultSortOrder,
        getNextPageParam: () => getNextPageParam,
        getPreviousPageParam: () => getPreviousPageParam,
        handleUseParams: () => handleUseParams,
        importCSVMapper: () => importCSVMapper,
        keys: () => keys,
        legacyResourceTransform: () => legacyResourceTransform,
        matchResourceFromRoute: () => matchResourceFromRoute,
        parseTableParams: () => parseTableParams,
        parseTableParamsFromQuery: () => parseTableParamsFromQuery,
        pickDataProvider: () => pickDataProvider2,
        pickNotDeprecated: () => pickNotDeprecated2,
        propertyPathToArray: () => propertyPathToArray,
        queryKeys: () => queryKeys,
        routeGenerator: () => routeGenerator,
        setInitialFilters: () => setInitialFilters,
        setInitialSorters: () => setInitialSorters,
        stringifyTableParams: () => stringifyTableParams,
        unionFilters: () => unionFilters,
        unionSorters: () => unionSorters,
        useActiveAuthProvider: () => useActiveAuthProvider,
        useApiUrl: () => useApiUrl,
        useAuthenticated: () => useAuthenticated,
        useBack: () => useBack,
        useBreadcrumb: () => useBreadcrumb,
        useCan: () => useCan,
        useCanWithoutCache: () => useCanWithoutCache,
        useCancelNotification: () => useCancelNotification,
        useCheckError: () => useCheckError,
        useCreate: () => useCreate,
        useCreateMany: () => useCreateMany,
        useCustom: () => useCustom,
        useCustomMutation: () => useCustomMutation,
        useDataProvider: () => useDataProvider3,
        useDelete: () => useDelete,
        useDeleteMany: () => useDeleteMany,
        useExport: () => useExport,
        useForgotPassword: () => useForgotPassword,
        useForm: () => useForm3,
        useGetIdentity: () => useGetIdentity,
        useGetLocale: () => useGetLocale,
        useGetToPath: () => useGetToPath,
        useGo: () => useGo,
        useHandleNotification: () => useHandleNotification,
        useImport: () => useImport,
        useInfiniteList: () => useInfiniteList,
        useInvalidate: () => useInvalidate,
        useIsAuthenticated: () => useIsAuthenticated,
        useIsExistAuthentication: () => useIsExistAuthentication,
        useLink: () => useLink,
        useList: () => useList,
        useLiveMode: () => useLiveMode,
        useLoadingOvertime: () => useLoadingOvertime,
        useLog: () => useLog,
        useLogList: () => useLogList,
        useLogin: () => useLogin,
        useLogout: () => useLogout,
        useMany: () => useMany,
        useMenu: () => useMenu,
        useMeta: () => useMeta,
        useModal: () => useModal,
        useMutationMode: () => useMutationMode,
        useNavigation: () => useNavigation,
        useNotification: () => useNotification,
        useOnError: () => useOnError,
        useOne: () => useOne,
        useParse: () => useParse,
        useParsed: () => useParsed,
        usePermissions: () => usePermissions,
        usePublish: () => usePublish,
        useRedirectionAfterSubmission: () => useRedirectionAfterSubmission,
        useRefineContext: () => useRefineContext,
        useRegister: () => useRegister,
        useResource: () => useResource4,
        useResourceSubscription: () => useResourceSubscription,
        useResourceWithRoute: () => useResourceWithRoute,
        useRouterContext: () => useRouterContext,
        useRouterType: () => useRouterType,
        useSelect: () => useSelect,
        useSetLocale: () => useSetLocale,
        useShow: () => useShow,
        useSubscription: () => useSubscription,
        useSyncWithLocation: () => useSyncWithLocation,
        useTable: () => useTable2,
        useTitle: () => useTitle,
        useToPath: () => useToPath,
        useTranslate: () => useTranslate,
        useUpdate: () => useUpdate,
        useUpdateMany: () => useUpdateMany,
        useUpdatePassword: () => useUpdatePassword,
        useUserFriendlyName: () => useUserFriendlyName,
        useWarnAboutChange: () => useWarnAboutChange,
        userFriendlyResourceName: () => userFriendlyResourceName
      });
      module.exports = __toCommonJS(src_exports);
      var import_react62 = __toESM2(__require("react"));
      var import_react_query = __require("@tanstack/react-query");
      var import_devtools_internal = require_dist2();
      var import_qs = __toESM2(__require("qs"));
      var import_unionWith = __toESM2(__require("lodash/unionWith"));
      var import_differenceWith = __toESM2(__require("lodash/differenceWith"));
      var import_warn_once = __toESM2(__require("warn-once"));
      var userFriendlySecond = /* @__PURE__ */ __name2((miliseconds) => {
        return miliseconds / 1e3;
      }, "userFriendlySecond");
      var import_zip = __toESM2(__require("lodash/zip"));
      var import_fromPairs = __toESM2(__require("lodash/fromPairs"));
      var importCSVMapper = /* @__PURE__ */ __name2((data, mapData = (item) => item) => {
        const [headers, ...body] = data;
        return body.map((entry) => (0, import_fromPairs.default)((0, import_zip.default)(headers, entry))).map(
          (item, index, array) => mapData.call(void 0, item, index, array)
        );
      }, "importCSVMapper");
      var import_pluralize5 = __toESM2(__require("pluralize"));
      var userFriendlyResourceName = /* @__PURE__ */ __name2((resource = "", type) => {
        const humanizeResource = humanizeString(resource);
        if (type === "singular") {
          return import_pluralize5.default.singular(humanizeResource);
        }
        return import_pluralize5.default.plural(humanizeResource);
      }, "userFriendlyResourceName");
      var handleUseParams = /* @__PURE__ */ __name2((params = {}) => {
        if (params == null ? void 0 : params.id) {
          return {
            ...params,
            id: decodeURIComponent(params.id)
          };
        }
        return params;
      }, "handleUseParams");
      var pickNotDeprecated2 = /* @__PURE__ */ __name2((...args) => {
        return args.find((arg) => typeof arg !== "undefined");
      }, "pickNotDeprecated");
      function arrayFindIndex(array, slice) {
        return array.findIndex(
          (item, index) => index <= array.length - slice.length && slice.every(
            (sliceItem, sliceIndex) => array[index + sliceIndex] === sliceItem
          )
        );
      }
      __name(arrayFindIndex, "arrayFindIndex");
      __name2(arrayFindIndex, "arrayFindIndex");
      function convertToLegacy(segments) {
        if (segments[0] === "data") {
          const newSegments = segments.slice(1);
          if (newSegments[2] === "many") {
            newSegments[2] = "getMany";
          } else if (newSegments[2] === "infinite") {
            newSegments[2] = "list";
          } else if (newSegments[2] === "one") {
            newSegments[2] = "detail";
          } else if (newSegments[1] === "custom") {
            const newParams = {
              ...newSegments[2]
            };
            delete newParams.method;
            delete newParams.url;
            return [
              newSegments[0],
              newSegments[1],
              newSegments[2].method,
              newSegments[2].url,
              newParams
            ];
          }
          return newSegments;
        }
        if (segments[0] === "audit") {
          if (segments[2] === "list") {
            return ["logList", segments[1], segments[3]];
          }
        }
        if (segments[0] === "access") {
          if (segments.length === 4) {
            return [
              "useCan",
              {
                resource: segments[1],
                action: segments[2],
                ...segments[3]
                // params: { params, enabled }
              }
            ];
          }
        }
        if (segments[0] === "auth") {
          if (arrayFindIndex(segments, ["auth", "login"]) !== -1) {
            return ["useLogin"];
          }
          if (arrayFindIndex(segments, ["auth", "logout"]) !== -1) {
            return ["useLogout"];
          }
          if (arrayFindIndex(segments, ["auth", "identity"]) !== -1) {
            return ["getUserIdentity"];
          }
          if (arrayFindIndex(segments, ["auth", "register"]) !== -1) {
            return ["useRegister"];
          }
          if (arrayFindIndex(segments, ["auth", "forgotPassword"]) !== -1) {
            return ["useForgotPassword"];
          }
          if (arrayFindIndex(segments, ["auth", "check"]) !== -1) {
            return ["useAuthenticated", segments[2]];
          }
          if (arrayFindIndex(segments, ["auth", "onError"]) !== -1) {
            return ["useCheckError"];
          }
          if (arrayFindIndex(segments, ["auth", "permissions"]) !== -1) {
            return ["usePermissions"];
          }
          if (arrayFindIndex(segments, ["auth", "updatePassword"]) !== -1) {
            return ["useUpdatePassword"];
          }
        }
        return segments;
      }
      __name(convertToLegacy, "convertToLegacy");
      __name2(convertToLegacy, "convertToLegacy");
      var BaseKeyBuilder = /* @__PURE__ */ __name(class {
        constructor(segments = []) {
          this.segments = [];
          this.segments = segments;
        }
        key() {
          return this.segments;
        }
        legacy() {
          return convertToLegacy(this.segments);
        }
        get(legacy) {
          return legacy ? this.legacy() : this.segments;
        }
      }, "BaseKeyBuilder");
      __name2(BaseKeyBuilder, "BaseKeyBuilder");
      var ParamsKeyBuilder = /* @__PURE__ */ __name(class extends BaseKeyBuilder {
        constructor(segments) {
          super(segments);
        }
        params(paramsValue) {
          return new BaseKeyBuilder([...this.segments, paramsValue]);
        }
      }, "ParamsKeyBuilder");
      __name2(ParamsKeyBuilder, "ParamsKeyBuilder");
      var DataIdRequiringKeyBuilder = /* @__PURE__ */ __name(class extends BaseKeyBuilder {
        constructor(segments) {
          super(segments);
        }
        id(idValue) {
          return new ParamsKeyBuilder([
            ...this.segments,
            idValue ? String(idValue) : void 0
          ]);
        }
      }, "DataIdRequiringKeyBuilder");
      __name2(DataIdRequiringKeyBuilder, "DataIdRequiringKeyBuilder");
      var DataIdsRequiringKeyBuilder = /* @__PURE__ */ __name(class extends BaseKeyBuilder {
        constructor(segments) {
          super(segments);
        }
        ids(...idsValue) {
          return new ParamsKeyBuilder([
            ...this.segments,
            ...idsValue.length ? [idsValue.map((el) => String(el))] : []
          ]);
        }
      }, "DataIdsRequiringKeyBuilder");
      __name2(DataIdsRequiringKeyBuilder, "DataIdsRequiringKeyBuilder");
      var DataResourceKeyBuilder = /* @__PURE__ */ __name(class extends BaseKeyBuilder {
        constructor(segments) {
          super(segments);
        }
        action(actionType) {
          if (actionType === "one") {
            return new DataIdRequiringKeyBuilder([
              ...this.segments,
              actionType
            ]);
          } else if (actionType === "many") {
            return new DataIdsRequiringKeyBuilder([
              ...this.segments,
              actionType
            ]);
          } else if (["list", "infinite"].includes(actionType)) {
            return new ParamsKeyBuilder([...this.segments, actionType]);
          } else {
            throw new Error("Invalid action type");
          }
        }
      }, "DataResourceKeyBuilder");
      __name2(DataResourceKeyBuilder, "DataResourceKeyBuilder");
      var DataKeyBuilder = /* @__PURE__ */ __name(class extends BaseKeyBuilder {
        constructor(segments) {
          super(segments);
        }
        resource(resourceName) {
          return new DataResourceKeyBuilder([...this.segments, resourceName]);
        }
        mutation(mutationName) {
          return new ParamsKeyBuilder([
            ...mutationName === "custom" ? this.segments : [this.segments[0]],
            mutationName
          ]);
        }
      }, "DataKeyBuilder");
      __name2(DataKeyBuilder, "DataKeyBuilder");
      var AuthKeyBuilder = /* @__PURE__ */ __name(class extends BaseKeyBuilder {
        constructor(segments) {
          super(segments);
        }
        action(actionType) {
          return new ParamsKeyBuilder([...this.segments, actionType]);
        }
      }, "AuthKeyBuilder");
      __name2(AuthKeyBuilder, "AuthKeyBuilder");
      var AccessResourceKeyBuilder = /* @__PURE__ */ __name(class extends BaseKeyBuilder {
        constructor(segments) {
          super(segments);
        }
        action(resourceName) {
          return new ParamsKeyBuilder([...this.segments, resourceName]);
        }
      }, "AccessResourceKeyBuilder");
      __name2(AccessResourceKeyBuilder, "AccessResourceKeyBuilder");
      var AccessKeyBuilder = /* @__PURE__ */ __name(class extends BaseKeyBuilder {
        constructor(segments) {
          super(segments);
        }
        resource(resourceName) {
          return new AccessResourceKeyBuilder([...this.segments, resourceName]);
        }
      }, "AccessKeyBuilder");
      __name2(AccessKeyBuilder, "AccessKeyBuilder");
      var AuditActionKeyBuilder = /* @__PURE__ */ __name(class extends BaseKeyBuilder {
        constructor(segments) {
          super(segments);
        }
        action(actionType) {
          return new ParamsKeyBuilder([...this.segments, actionType]);
        }
      }, "AuditActionKeyBuilder");
      __name2(AuditActionKeyBuilder, "AuditActionKeyBuilder");
      var AuditKeyBuilder = /* @__PURE__ */ __name(class extends BaseKeyBuilder {
        constructor(segments) {
          super(segments);
        }
        resource(resourceName) {
          return new AuditActionKeyBuilder([...this.segments, resourceName]);
        }
        action(actionType) {
          return new ParamsKeyBuilder([...this.segments, actionType]);
        }
      }, "AuditKeyBuilder");
      __name2(AuditKeyBuilder, "AuditKeyBuilder");
      var KeyBuilder = /* @__PURE__ */ __name(class extends BaseKeyBuilder {
        constructor(segments) {
          super(segments);
        }
        data(name) {
          return new DataKeyBuilder(["data", name || "default"]);
        }
        auth() {
          return new AuthKeyBuilder(["auth"]);
        }
        access() {
          return new AccessKeyBuilder(["access"]);
        }
        audit() {
          return new AuditKeyBuilder(["audit"]);
        }
      }, "KeyBuilder");
      __name2(KeyBuilder, "KeyBuilder");
      var keys = /* @__PURE__ */ __name2(() => new KeyBuilder([]), "keys");
      var queryKeys = /* @__PURE__ */ __name2((resource, dataProviderName, meta, metaData) => {
        const providerName = dataProviderName || "default";
        const keys2 = {
          all: [providerName],
          resourceAll: [providerName, resource || ""],
          list: (config) => [
            ...keys2.resourceAll,
            "list",
            {
              ...config,
              ...pickNotDeprecated2(meta, metaData) || {}
            }
          ],
          many: (ids) => [
            ...keys2.resourceAll,
            "getMany",
            ids && ids.map(String),
            { ...pickNotDeprecated2(meta, metaData) || {} }
          ].filter((item) => item !== void 0),
          detail: (id) => [
            ...keys2.resourceAll,
            "detail",
            id == null ? void 0 : id.toString(),
            { ...pickNotDeprecated2(meta, metaData) || {} }
          ],
          logList: (meta2) => ["logList", resource, meta2, metaData].filter(
            (item) => item !== void 0
          )
        };
        return keys2;
      }, "queryKeys");
      var queryKeysReplacement = /* @__PURE__ */ __name2((preferLegacyKeys) => {
        return (resource, dataProviderName, meta, metaData) => {
          const providerName = dataProviderName || "default";
          const keys2 = {
            all: keys().data(providerName).get(preferLegacyKeys),
            resourceAll: keys().data(dataProviderName).resource(resource ?? "").get(preferLegacyKeys),
            list: (config) => keys().data(dataProviderName).resource(resource ?? "").action("list").params({
              ...config,
              ...pickNotDeprecated2(meta, metaData) || {}
            }).get(preferLegacyKeys),
            many: (ids) => keys().data(dataProviderName).resource(resource ?? "").action("many").ids(...ids ?? []).params({
              ...pickNotDeprecated2(meta, metaData) || {}
            }).get(preferLegacyKeys),
            detail: (id) => keys().data(dataProviderName).resource(resource ?? "").action("one").id(id ?? "").params({
              ...pickNotDeprecated2(meta, metaData) || {}
            }).get(preferLegacyKeys),
            logList: (meta2) => [
              ...keys().audit().resource(resource).action("list").params(meta2).get(preferLegacyKeys),
              metaData
            ].filter((item) => item !== void 0)
          };
          return keys2;
        };
      }, "queryKeysReplacement");
      var hasPermission = /* @__PURE__ */ __name2((permissions, action) => {
        if (!permissions || !action) {
          return false;
        }
        return !!permissions.find((i) => i === action);
      }, "hasPermission");
      var isParameter = /* @__PURE__ */ __name2((segment) => {
        return segment.startsWith(":");
      }, "isParameter");
      var splitToSegments = /* @__PURE__ */ __name2((path) => {
        const segments = path.split("/").filter((segment) => segment !== "");
        return segments;
      }, "splitToSegments");
      var isSegmentCountsSame = /* @__PURE__ */ __name2((route, resourceRoute) => {
        const routeSegments = splitToSegments(route);
        const resourceRouteSegments = splitToSegments(resourceRoute);
        return routeSegments.length === resourceRouteSegments.length;
      }, "isSegmentCountsSame");
      var removeLeadingTrailingSlashes = /* @__PURE__ */ __name2((route) => {
        return route.replace(/^\/|\/$/g, "");
      }, "removeLeadingTrailingSlashes");
      var checkBySegments = /* @__PURE__ */ __name2((route, resourceRoute) => {
        const stdRoute = removeLeadingTrailingSlashes(route);
        const stdResourceRoute = removeLeadingTrailingSlashes(resourceRoute);
        if (!isSegmentCountsSame(stdRoute, stdResourceRoute)) {
          return false;
        }
        const routeSegments = splitToSegments(stdRoute);
        const resourceRouteSegments = splitToSegments(stdResourceRoute);
        return resourceRouteSegments.every((segment, index) => {
          return isParameter(segment) || segment === routeSegments[index];
        });
      }, "checkBySegments");
      var getDefaultActionPath = /* @__PURE__ */ __name2((resourceName, action, parentPrefix) => {
        const cleanParentPrefix = removeLeadingTrailingSlashes(parentPrefix || "");
        let path = `${cleanParentPrefix}${cleanParentPrefix ? "/" : ""}${resourceName}`;
        if (action === "list") {
          path = `${path}`;
        } else if (action === "create") {
          path = `${path}/create`;
        } else if (action === "edit") {
          path = `${path}/edit/:id`;
        } else if (action === "show") {
          path = `${path}/show/:id`;
        } else if (action === "clone") {
          path = `${path}/clone/:id`;
        }
        return `/${path.replace(/^\//, "")}`;
      }, "getDefaultActionPath");
      var getParentResource = /* @__PURE__ */ __name2((resource, resources) => {
        var _a, _b;
        const parentName = pickNotDeprecated2(
          (_a = resource.meta) == null ? void 0 : _a.parent,
          (_b = resource.options) == null ? void 0 : _b.parent,
          resource.parentName
        );
        if (!parentName) {
          return void 0;
        }
        const parentResource = resources.find(
          (resource2) => (resource2.identifier ?? resource2.name) === parentName
        );
        return parentResource ?? { name: parentName };
      }, "getParentResource");
      var getParentPrefixForResource = /* @__PURE__ */ __name2((resource, resources, legacy) => {
        const parents = [];
        let parent = getParentResource(resource, resources);
        while (parent) {
          parents.push(parent);
          parent = getParentResource(parent, resources);
        }
        if (parents.length === 0) {
          return void 0;
        }
        return `/${parents.reverse().map((parent2) => {
          var _a;
          const v = legacy ? ((_a = parent2.options) == null ? void 0 : _a.route) ?? parent2.name : parent2.name;
          return removeLeadingTrailingSlashes(v);
        }).join("/")}`;
      }, "getParentPrefixForResource");
      var getActionRoutesFromResource = /* @__PURE__ */ __name2((resource, resources, legacy) => {
        const actions = [];
        const actionList = ["list", "show", "edit", "create", "clone"];
        const parentPrefix = getParentPrefixForResource(
          resource,
          resources,
          legacy
        );
        actionList.forEach((action) => {
          var _a, _b;
          const item = legacy && action === "clone" ? resource.create : resource[action];
          let route = void 0;
          if (typeof item === "function" || legacy) {
            route = getDefaultActionPath(
              legacy ? ((_a = resource.meta) == null ? void 0 : _a.route) ?? ((_b = resource.options) == null ? void 0 : _b.route) ?? resource.name : resource.name,
              action,
              legacy ? parentPrefix : void 0
            );
          } else if (typeof item === "string") {
            route = item;
          } else if (typeof item === "object") {
            route = item.path;
          }
          if (route) {
            actions.push({
              action,
              resource,
              route: `/${route.replace(/^\//, "")}`
            });
          }
        });
        return actions;
      }, "getActionRoutesFromResource");
      var pickMatchedRoute = /* @__PURE__ */ __name2((routes) => {
        var _a;
        if (routes.length === 0) {
          return void 0;
        }
        if (routes.length === 1) {
          return routes[0];
        }
        const sanitizedRoutes = routes.map((route) => ({
          ...route,
          splitted: splitToSegments(removeLeadingTrailingSlashes(route.route))
        }));
        const segmentsCount = ((_a = sanitizedRoutes[0]) == null ? void 0 : _a.splitted.length) ?? 0;
        let eligibleRoutes = [
          ...sanitizedRoutes
        ];
        for (let i = 0; i < segmentsCount; i++) {
          const nonParametrizedRoutes = eligibleRoutes.filter(
            (route) => !isParameter(route.splitted[i])
          );
          if (nonParametrizedRoutes.length === 0) {
            continue;
          }
          if (nonParametrizedRoutes.length === 1) {
            eligibleRoutes = nonParametrizedRoutes;
            break;
          }
          eligibleRoutes = nonParametrizedRoutes;
        }
        return eligibleRoutes[0];
      }, "pickMatchedRoute");
      var matchResourceFromRoute = /* @__PURE__ */ __name2((route, resources) => {
        const allActionRoutes = resources.flatMap((resource) => {
          return getActionRoutesFromResource(resource, resources);
        });
        const allFound = allActionRoutes.filter((actionRoute) => {
          return checkBySegments(route, actionRoute.route);
        });
        const mostEligible = pickMatchedRoute(allFound);
        return {
          found: !!mostEligible,
          resource: mostEligible == null ? void 0 : mostEligible.resource,
          action: mostEligible == null ? void 0 : mostEligible.action,
          matchedRoute: mostEligible == null ? void 0 : mostEligible.route
        };
      }, "matchResourceFromRoute");
      var routeGenerator = /* @__PURE__ */ __name2((item, resourcesFromProps) => {
        var _a;
        let route;
        const parentPrefix = getParentPrefixForResource(
          item,
          resourcesFromProps,
          true
        );
        if (parentPrefix) {
          const meta = pickNotDeprecated2(item.meta, item.options);
          route = `${parentPrefix}/${(meta == null ? void 0 : meta.route) ?? item.name}`;
        } else {
          route = ((_a = item.options) == null ? void 0 : _a.route) ?? item.name;
        }
        return `/${route.replace(/^\//, "")}`;
      }, "routeGenerator");
      var createTreeView = /* @__PURE__ */ __name2((resources) => {
        var _a;
        const tree = [];
        const resourcesRouteObject = {};
        const resourcesNameObject = {};
        let parent;
        let child;
        for (let i = 0; i < resources.length; i++) {
          parent = resources[i];
          const route = parent.route ?? ((_a = pickNotDeprecated2(parent == null ? void 0 : parent.meta, parent.options)) == null ? void 0 : _a.route) ?? "";
          resourcesRouteObject[route] = parent;
          resourcesRouteObject[route]["children"] = [];
          resourcesNameObject[parent.name] = parent;
          resourcesNameObject[parent.name]["children"] = [];
        }
        for (const name in resourcesRouteObject) {
          if (resourcesRouteObject.hasOwnProperty(name)) {
            child = resourcesRouteObject[name];
            if (child.parentName && resourcesNameObject[child.parentName]) {
              resourcesNameObject[child.parentName]["children"].push(child);
            } else {
              tree.push(child);
            }
          }
        }
        return tree;
      }, "createTreeView");
      var humanizeString = /* @__PURE__ */ __name2((text2) => {
        text2 = text2.replace(/([a-z]{1})([A-Z]{1})/g, "$1-$2");
        text2 = text2.replace(/([A-Z]{1})([A-Z]{1})([a-z]{1})/g, "$1-$2$3");
        text2 = text2.toLowerCase().replace(/[_-]+/g, " ").replace(/\s{2,}/g, " ").trim();
        text2 = text2.charAt(0).toUpperCase() + text2.slice(1);
        return text2;
      }, "humanizeString");
      var import_react22 = __toESM2(__require("react"));
      var import_pluralize22 = __toESM2(__require("pluralize"));
      var import_react15 = __toESM2(__require("react"));
      var DefaultLayout = /* @__PURE__ */ __name2(({ children }) => {
        return /* @__PURE__ */ import_react15.default.createElement("div", null, children);
      }, "DefaultLayout");
      var defaultRefineOptions = {
        mutationMode: "pessimistic",
        syncWithLocation: false,
        undoableTimeout: 5e3,
        warnWhenUnsavedChanges: false,
        liveMode: "off",
        redirect: {
          afterCreate: "list",
          afterClone: "list",
          afterEdit: "list"
        },
        overtime: {
          interval: 1e3
        },
        textTransformers: {
          humanize: humanizeString,
          plural: import_pluralize22.default.plural,
          singular: import_pluralize22.default.singular
        },
        disableServerSideValidation: false
      };
      var RefineContext = import_react22.default.createContext({
        hasDashboard: false,
        mutationMode: "pessimistic",
        warnWhenUnsavedChanges: false,
        syncWithLocation: false,
        undoableTimeout: 5e3,
        Title: void 0,
        Sider: void 0,
        Header: void 0,
        Footer: void 0,
        Layout: DefaultLayout,
        OffLayoutArea: void 0,
        liveMode: "off",
        onLiveEvent: void 0,
        options: defaultRefineOptions
      });
      var RefineContextProvider = /* @__PURE__ */ __name2(({
        hasDashboard,
        mutationMode,
        warnWhenUnsavedChanges,
        syncWithLocation,
        undoableTimeout,
        children,
        DashboardPage,
        Title,
        Layout = DefaultLayout,
        Header,
        Sider,
        Footer,
        OffLayoutArea,
        LoginPage: LoginPage3 = LoginPage,
        catchAll,
        liveMode = "off",
        onLiveEvent,
        options
      }) => {
        return /* @__PURE__ */ import_react22.default.createElement(
          RefineContext.Provider,
          {
            value: {
              hasDashboard,
              mutationMode,
              warnWhenUnsavedChanges,
              syncWithLocation,
              Title,
              undoableTimeout,
              Layout,
              Header,
              Sider,
              Footer,
              OffLayoutArea,
              DashboardPage,
              LoginPage: LoginPage3,
              catchAll,
              liveMode,
              onLiveEvent,
              options
            }
          },
          children
        );
      }, "RefineContextProvider");
      var handleRefineOptions = /* @__PURE__ */ __name2(({
        options,
        disableTelemetry,
        liveMode,
        mutationMode,
        reactQueryClientConfig,
        reactQueryDevtoolConfig,
        syncWithLocation,
        undoableTimeout,
        warnWhenUnsavedChanges
      } = {}) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const optionsWithDefaults = {
          breadcrumb: options == null ? void 0 : options.breadcrumb,
          mutationMode: (options == null ? void 0 : options.mutationMode) ?? mutationMode ?? defaultRefineOptions.mutationMode,
          undoableTimeout: (options == null ? void 0 : options.undoableTimeout) ?? undoableTimeout ?? defaultRefineOptions.undoableTimeout,
          syncWithLocation: (options == null ? void 0 : options.syncWithLocation) ?? syncWithLocation ?? defaultRefineOptions.syncWithLocation,
          warnWhenUnsavedChanges: (options == null ? void 0 : options.warnWhenUnsavedChanges) ?? warnWhenUnsavedChanges ?? defaultRefineOptions.warnWhenUnsavedChanges,
          liveMode: (options == null ? void 0 : options.liveMode) ?? liveMode ?? defaultRefineOptions.liveMode,
          redirect: {
            afterCreate: ((_a = options == null ? void 0 : options.redirect) == null ? void 0 : _a.afterCreate) ?? defaultRefineOptions.redirect.afterCreate,
            afterClone: ((_b = options == null ? void 0 : options.redirect) == null ? void 0 : _b.afterClone) ?? defaultRefineOptions.redirect.afterClone,
            afterEdit: ((_c = options == null ? void 0 : options.redirect) == null ? void 0 : _c.afterEdit) ?? defaultRefineOptions.redirect.afterEdit
          },
          overtime: (options == null ? void 0 : options.overtime) ?? defaultRefineOptions.overtime,
          textTransformers: {
            humanize: ((_d = options == null ? void 0 : options.textTransformers) == null ? void 0 : _d.humanize) ?? defaultRefineOptions.textTransformers.humanize,
            plural: ((_e = options == null ? void 0 : options.textTransformers) == null ? void 0 : _e.plural) ?? defaultRefineOptions.textTransformers.plural,
            singular: ((_f = options == null ? void 0 : options.textTransformers) == null ? void 0 : _f.singular) ?? defaultRefineOptions.textTransformers.singular
          },
          disableServerSideValidation: (options == null ? void 0 : options.disableServerSideValidation) ?? defaultRefineOptions.disableServerSideValidation,
          projectId: options == null ? void 0 : options.projectId,
          useNewQueryKeys: options == null ? void 0 : options.useNewQueryKeys
        };
        const disableTelemetryWithDefault = (options == null ? void 0 : options.disableTelemetry) ?? disableTelemetry ?? false;
        const reactQueryWithDefaults = {
          clientConfig: ((_g = options == null ? void 0 : options.reactQuery) == null ? void 0 : _g.clientConfig) ?? reactQueryClientConfig ?? {},
          devtoolConfig: ((_h = options == null ? void 0 : options.reactQuery) == null ? void 0 : _h.devtoolConfig) ?? reactQueryDevtoolConfig ?? {}
        };
        return {
          optionsWithDefaults,
          disableTelemetryWithDefault,
          reactQueryWithDefaults
        };
      }, "handleRefineOptions");
      var redirectPage = /* @__PURE__ */ __name2(({
        redirectFromProps,
        action,
        redirectOptions
      }) => {
        if (redirectFromProps || redirectFromProps === false) {
          return redirectFromProps;
        }
        switch (action) {
          case "clone":
            return redirectOptions.afterClone;
          case "create":
            return redirectOptions.afterCreate;
          case "edit":
            return redirectOptions.afterEdit;
          default:
            return false;
        }
      }, "redirectPage");
      var sequentialPromises = /* @__PURE__ */ __name2(async (promises, onEachResolve, onEachReject) => {
        const results = [];
        for (const [index, promise] of promises.entries()) {
          try {
            const result = await promise();
            results.push(onEachResolve(result, index));
          } catch (error) {
            results.push(onEachReject(error, index));
          }
        }
        return results;
      }, "sequentialPromises");
      var pickResource = /* @__PURE__ */ __name2((identifier, resources = [], legacy = false) => {
        if (!identifier) {
          return void 0;
        }
        if (legacy) {
          const resourceByRoute = resources.find(
            (r) => removeLeadingTrailingSlashes(r.route ?? "") === removeLeadingTrailingSlashes(identifier)
          );
          const resource2 = resourceByRoute ? resourceByRoute : resources.find((r) => r.name === identifier);
          return resource2;
        }
        let resource = resources.find((r) => r.identifier === identifier);
        if (!resource) {
          resource = resources.find((r) => r.name === identifier);
        }
        return resource;
      }, "pickResource");
      var pickDataProvider2 = /* @__PURE__ */ __name2((resourceName, dataProviderName, resources) => {
        if (dataProviderName) {
          return dataProviderName;
        }
        const resource = pickResource(resourceName, resources);
        const meta = pickNotDeprecated2(resource == null ? void 0 : resource.meta, resource == null ? void 0 : resource.options);
        if (meta == null ? void 0 : meta.dataProviderName) {
          return meta.dataProviderName;
        }
        return "default";
      }, "pickDataProvider");
      var handleMultiple = /* @__PURE__ */ __name2(async (promises) => {
        return {
          data: (await Promise.all(promises)).map((res) => res.data)
        };
      }, "handleMultiple");
      var getNextPageParam = /* @__PURE__ */ __name2((lastPage) => {
        const { pagination, cursor } = lastPage;
        if (cursor == null ? void 0 : cursor.next) {
          return cursor.next;
        }
        const current = (pagination == null ? void 0 : pagination.current) || 1;
        const pageSize = (pagination == null ? void 0 : pagination.pageSize) || 10;
        const totalPages = Math.ceil((lastPage.total || 0) / pageSize);
        return current < totalPages ? Number(current) + 1 : void 0;
      }, "getNextPageParam");
      var getPreviousPageParam = /* @__PURE__ */ __name2((lastPage) => {
        const { pagination, cursor } = lastPage;
        if (cursor == null ? void 0 : cursor.prev) {
          return cursor.prev;
        }
        const current = (pagination == null ? void 0 : pagination.current) || 1;
        return current === 1 ? void 0 : current - 1;
      }, "getPreviousPageParam");
      var legacyResourceTransform = /* @__PURE__ */ __name2((resources) => {
        const _resources = [];
        resources.forEach((resource) => {
          var _a, _b;
          _resources.push({
            ...resource,
            label: ((_a = resource.meta) == null ? void 0 : _a.label) ?? ((_b = resource.options) == null ? void 0 : _b.label),
            route: routeGenerator(resource, resources),
            canCreate: !!resource.create,
            canEdit: !!resource.edit,
            canShow: !!resource.show,
            canDelete: resource.canDelete
          });
        });
        return _resources;
      }, "legacyResourceTransform");
      var pickRouteParams = /* @__PURE__ */ __name2((route) => {
        const segments = splitToSegments(removeLeadingTrailingSlashes(route));
        return segments.flatMap((s) => {
          if (isParameter(s)) {
            return [s.slice(1)];
          }
          return [];
        });
      }, "pickRouteParams");
      var prepareRouteParams = /* @__PURE__ */ __name2((routeParams, meta = {}) => {
        return routeParams.reduce((acc, key) => {
          const value = meta[key];
          if (typeof value !== "undefined") {
            acc[key] = value;
          }
          return acc;
        }, {});
      }, "prepareRouteParams");
      var composeRoute = /* @__PURE__ */ __name2((designatedRoute, resourceMeta = {}, parsed = {}, meta = {}) => {
        const routeParams = pickRouteParams(designatedRoute);
        const preparedRouteParams = prepareRouteParams(routeParams, {
          ...resourceMeta,
          ...typeof (parsed == null ? void 0 : parsed.id) !== "undefined" ? { id: parsed.id } : {},
          ...typeof (parsed == null ? void 0 : parsed.action) !== "undefined" ? { action: parsed.action } : {},
          ...typeof (parsed == null ? void 0 : parsed.resource) !== "undefined" ? { resource: parsed.resource } : {},
          ...parsed == null ? void 0 : parsed.params,
          ...meta
        });
        return designatedRoute.replace(/:([^\/]+)/g, (match, key) => {
          const fromParams = preparedRouteParams[key];
          if (typeof fromParams !== "undefined") {
            return `${fromParams}`;
          }
          return match;
        });
      }, "composeRoute");
      var import_react32 = __toESM2(__require("react"));
      var LegacyAuthContext = import_react32.default.createContext({});
      var LegacyAuthContextProvider = /* @__PURE__ */ __name2(({ children, isProvided, ...authOperations }) => {
        const { replace } = useNavigation();
        const loginFunc = /* @__PURE__ */ __name2(async (params) => {
          var _a;
          try {
            const result = await ((_a = authOperations.login) == null ? void 0 : _a.call(authOperations, params));
            return result;
          } catch (error) {
            return Promise.reject(error);
          }
        }, "loginFunc");
        const registerFunc = /* @__PURE__ */ __name2(async (params) => {
          var _a;
          try {
            const result = await ((_a = authOperations.register) == null ? void 0 : _a.call(authOperations, params));
            return result;
          } catch (error) {
            return Promise.reject(error);
          }
        }, "registerFunc");
        const logoutFunc = /* @__PURE__ */ __name2(async (params) => {
          var _a;
          try {
            const redirectPath = await ((_a = authOperations.logout) == null ? void 0 : _a.call(authOperations, params));
            return redirectPath;
          } catch (error) {
            return Promise.reject(error);
          }
        }, "logoutFunc");
        const checkAuthFunc = /* @__PURE__ */ __name2(async (params) => {
          var _a;
          try {
            await ((_a = authOperations.checkAuth) == null ? void 0 : _a.call(authOperations, params));
            return Promise.resolve();
          } catch (error) {
            if (error == null ? void 0 : error.redirectPath) {
              replace(error.redirectPath);
            }
            return Promise.reject(error);
          }
        }, "checkAuthFunc");
        return /* @__PURE__ */ import_react32.default.createElement(
          LegacyAuthContext.Provider,
          {
            value: {
              ...authOperations,
              login: loginFunc,
              logout: logoutFunc,
              checkAuth: checkAuthFunc,
              register: registerFunc,
              isProvided
            }
          },
          children
        );
      }, "LegacyAuthContextProvider");
      var AuthBindingsContext = import_react32.default.createContext({});
      var AuthBindingsContextProvider = /* @__PURE__ */ __name2(({ children, isProvided, ...authBindings }) => {
        const handleLogin = /* @__PURE__ */ __name2(async (params) => {
          var _a;
          try {
            const result = await ((_a = authBindings.login) == null ? void 0 : _a.call(authBindings, params));
            return result;
          } catch (error) {
            console.warn(
              "Unhandled Error in login: refine always expects a resolved promise.",
              error
            );
            return Promise.reject(error);
          }
        }, "handleLogin");
        const handleRegister = /* @__PURE__ */ __name2(async (params) => {
          var _a;
          try {
            const result = await ((_a = authBindings.register) == null ? void 0 : _a.call(authBindings, params));
            return result;
          } catch (error) {
            console.warn(
              "Unhandled Error in register: refine always expects a resolved promise.",
              error
            );
            return Promise.reject(error);
          }
        }, "handleRegister");
        const handleLogout = /* @__PURE__ */ __name2(async (params) => {
          var _a;
          try {
            const result = await ((_a = authBindings.logout) == null ? void 0 : _a.call(authBindings, params));
            return result;
          } catch (error) {
            console.warn(
              "Unhandled Error in logout: refine always expects a resolved promise.",
              error
            );
            return Promise.reject(error);
          }
        }, "handleLogout");
        const handleCheck = /* @__PURE__ */ __name2(async (params) => {
          var _a;
          try {
            const result = await ((_a = authBindings.check) == null ? void 0 : _a.call(authBindings, params));
            return Promise.resolve(result);
          } catch (error) {
            console.warn(
              "Unhandled Error in check: refine always expects a resolved promise.",
              error
            );
            return Promise.reject(error);
          }
        }, "handleCheck");
        const handleForgotPassword = /* @__PURE__ */ __name2(async (params) => {
          var _a;
          try {
            const result = await ((_a = authBindings.forgotPassword) == null ? void 0 : _a.call(authBindings, params));
            return Promise.resolve(result);
          } catch (error) {
            console.warn(
              "Unhandled Error in forgotPassword: refine always expects a resolved promise.",
              error
            );
            return Promise.reject(error);
          }
        }, "handleForgotPassword");
        const handleUpdatePassword = /* @__PURE__ */ __name2(async (params) => {
          var _a;
          try {
            const result = await ((_a = authBindings.updatePassword) == null ? void 0 : _a.call(authBindings, params));
            return Promise.resolve(result);
          } catch (error) {
            console.warn(
              "Unhandled Error in updatePassword: refine always expects a resolved promise.",
              error
            );
            return Promise.reject(error);
          }
        }, "handleUpdatePassword");
        return /* @__PURE__ */ import_react32.default.createElement(
          AuthBindingsContext.Provider,
          {
            value: {
              ...authBindings,
              login: handleLogin,
              logout: handleLogout,
              check: handleCheck,
              register: handleRegister,
              forgotPassword: handleForgotPassword,
              updatePassword: handleUpdatePassword,
              isProvided
            }
          },
          children
        );
      }, "AuthBindingsContextProvider");
      var useLegacyAuthContext = /* @__PURE__ */ __name2(() => {
        const context = import_react32.default.useContext(LegacyAuthContext);
        return context;
      }, "useLegacyAuthContext");
      var useAuthBindingsContext = /* @__PURE__ */ __name2(() => {
        const context = import_react32.default.useContext(AuthBindingsContext);
        return context;
      }, "useAuthBindingsContext");
      var useActiveAuthProvider = /* @__PURE__ */ __name2(() => {
        const legacyAuthProvider = useLegacyAuthContext();
        const authProvider = useAuthBindingsContext();
        if (authProvider.isProvided) {
          return { isLegacy: false, ...authProvider };
        }
        if (legacyAuthProvider.isProvided) {
          return {
            isLegacy: true,
            ...legacyAuthProvider,
            check: legacyAuthProvider.checkAuth,
            onError: legacyAuthProvider.checkError,
            getIdentity: legacyAuthProvider.getUserIdentity
          };
        }
        return null;
      }, "useActiveAuthProvider");
      var handlePaginationParams = /* @__PURE__ */ __name2(({
        hasPagination,
        pagination,
        configPagination
      } = {}) => {
        const hasPaginationString = hasPagination === false ? "off" : "server";
        const mode = (pagination == null ? void 0 : pagination.mode) ?? hasPaginationString;
        const current = pickNotDeprecated2(pagination == null ? void 0 : pagination.current, configPagination == null ? void 0 : configPagination.current) ?? 1;
        const pageSize = pickNotDeprecated2(pagination == null ? void 0 : pagination.pageSize, configPagination == null ? void 0 : configPagination.pageSize) ?? 10;
        return {
          current,
          pageSize,
          mode
        };
      }, "handlePaginationParams");
      var import_react42 = __require("react");
      var useMediaQuery = /* @__PURE__ */ __name2((query) => {
        const [matches, setMatches] = (0, import_react42.useState)(false);
        (0, import_react42.useEffect)(() => {
          const media = window.matchMedia(query);
          if (media.matches !== matches) {
            setMatches(media.matches);
          }
          const listener = /* @__PURE__ */ __name2(() => setMatches(media.matches), "listener");
          window.addEventListener("resize", listener);
          return () => window.removeEventListener("resize", listener);
        }, [matches, query]);
        return matches;
      }, "useMediaQuery");
      var safeTranslate = /* @__PURE__ */ __name2((translate, key, defaultMessage, options) => {
        const translated = options ? translate(key, options, defaultMessage) : translate(key, defaultMessage);
        const fallback = defaultMessage ?? key;
        if (translated === key || typeof translated === "undefined") {
          return fallback;
        }
        return translated;
      }, "safeTranslate");
      function generateDefaultDocumentTitle(translate, resource, action, id, resourceName) {
        var _a;
        const actionPrefixMatcher = {
          create: "Create new ",
          clone: `#${id ?? ""} Clone `,
          edit: `#${id ?? ""} Edit `,
          show: `#${id ?? ""} Show `,
          list: ""
        };
        const identifier = (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name);
        const resourceNameFallback = (resource == null ? void 0 : resource.label) ?? ((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.label) ?? userFriendlyResourceName(
          identifier,
          action === "list" ? "plural" : "singular"
        );
        const resourceNameWithFallback = resourceName ?? resourceNameFallback;
        const defaultTitle = safeTranslate(
          translate,
          "documentTitle.default",
          "refine"
        );
        const suffix = safeTranslate(
          translate,
          "documentTitle.suffix",
          " | refine"
        );
        let autoGeneratedTitle = defaultTitle;
        if (action && identifier) {
          autoGeneratedTitle = safeTranslate(
            translate,
            `documentTitle.${identifier}.${action}`,
            `${actionPrefixMatcher[action] ?? ""}${resourceNameWithFallback}${suffix}`,
            { id }
          );
        }
        return autoGeneratedTitle;
      }
      __name(generateDefaultDocumentTitle, "generateDefaultDocumentTitle");
      __name2(generateDefaultDocumentTitle, "generateDefaultDocumentTitle");
      var import_react52 = __require("react");
      var useMutationMode = /* @__PURE__ */ __name2(() => {
        const { mutationMode, undoableTimeout } = (0, import_react52.useContext)(RefineContext);
        return { mutationMode, undoableTimeout };
      }, "useMutationMode");
      var import_react72 = __require("react");
      var import_react63 = __toESM2(__require("react"));
      var UnsavedWarnContext = import_react63.default.createContext({});
      var UnsavedWarnContextProvider = /* @__PURE__ */ __name2(({
        children
      }) => {
        const [warnWhen, setWarnWhen] = (0, import_react63.useState)(false);
        return /* @__PURE__ */ import_react63.default.createElement(UnsavedWarnContext.Provider, { value: { warnWhen, setWarnWhen } }, children);
      }, "UnsavedWarnContextProvider");
      var useWarnAboutChange = /* @__PURE__ */ __name2(() => {
        const { warnWhenUnsavedChanges } = (0, import_react72.useContext)(RefineContext);
        const { warnWhen, setWarnWhen } = (0, import_react72.useContext)(UnsavedWarnContext);
        return {
          warnWhenUnsavedChanges,
          warnWhen: Boolean(warnWhen),
          setWarnWhen: setWarnWhen ?? (() => void 0)
        };
      }, "useWarnAboutChange");
      var import_react82 = __require("react");
      var useSyncWithLocation = /* @__PURE__ */ __name2(() => {
        const { syncWithLocation } = (0, import_react82.useContext)(RefineContext);
        return { syncWithLocation };
      }, "useSyncWithLocation");
      var import_react92 = __require("react");
      var useTitle = /* @__PURE__ */ __name2(() => {
        const { Title } = (0, import_react92.useContext)(RefineContext);
        return Title;
      }, "useTitle");
      var import_react102 = __require("react");
      var useRefineContext = /* @__PURE__ */ __name2(() => {
        const {
          Footer,
          Header,
          Layout,
          OffLayoutArea,
          Sider,
          Title,
          hasDashboard,
          mutationMode,
          syncWithLocation,
          undoableTimeout,
          warnWhenUnsavedChanges,
          DashboardPage,
          LoginPage: LoginPage3,
          catchAll,
          options
        } = (0, import_react102.useContext)(RefineContext);
        return {
          Footer,
          Header,
          Layout,
          OffLayoutArea,
          Sider,
          Title,
          hasDashboard,
          mutationMode,
          syncWithLocation,
          undoableTimeout,
          warnWhenUnsavedChanges,
          DashboardPage,
          LoginPage: LoginPage3,
          catchAll,
          options
        };
      }, "useRefineContext");
      var useUserFriendlyName = /* @__PURE__ */ __name2(() => {
        const {
          options: { textTransformers }
        } = useRefineContext();
        const getFriendlyName = /* @__PURE__ */ __name2((name = "", type) => {
          const humanizeName = textTransformers.humanize(name);
          if (type === "singular") {
            return textTransformers.singular(humanizeName);
          }
          return textTransformers.plural(humanizeName);
        }, "getFriendlyName");
        return getFriendlyName;
      }, "useUserFriendlyName");
      var isNested = /* @__PURE__ */ __name2((obj) => typeof obj === "object" && obj !== null, "isNested");
      var isArray = /* @__PURE__ */ __name2((obj) => Array.isArray(obj), "isArray");
      var flattenObjectKeys = /* @__PURE__ */ __name2((obj, prefix = "") => {
        if (!isNested(obj)) {
          return {
            [prefix]: obj
          };
        }
        return Object.keys(obj).reduce((acc, key) => {
          const currentPrefix = prefix.length ? prefix + "." : "";
          if (isNested(obj[key]) && Object.keys(obj[key]).length) {
            if (isArray(obj[key]) && obj[key].length) {
              obj[key].forEach((item, index) => {
                Object.assign(
                  acc,
                  flattenObjectKeys(
                    item,
                    currentPrefix + key + "." + index
                  )
                );
              });
            } else {
              Object.assign(
                acc,
                flattenObjectKeys(obj[key], currentPrefix + key)
              );
            }
          } else {
            acc[currentPrefix + key] = obj[key];
          }
          return acc;
        }, {});
      }, "flattenObjectKeys");
      var propertyPathToArray = /* @__PURE__ */ __name2((propertyPath) => {
        return propertyPath.split(".").map((item) => !isNaN(Number(item)) ? Number(item) : item);
      }, "propertyPathToArray");
      var parseTableParams = /* @__PURE__ */ __name2((url) => {
        const { current, pageSize, sorter, sorters, filters } = import_qs.default.parse(
          url.substring(1)
          // remove first ? character
        );
        return {
          parsedCurrent: current && Number(current),
          parsedPageSize: pageSize && Number(pageSize),
          parsedSorter: pickNotDeprecated2(sorters, sorter) ?? [],
          parsedFilters: filters ?? []
        };
      }, "parseTableParams");
      var parseTableParamsFromQuery = /* @__PURE__ */ __name2((params) => {
        const url = import_qs.default.stringify(params);
        return parseTableParams(`/${url}`);
      }, "parseTableParamsFromQuery");
      var stringifyTableParams = /* @__PURE__ */ __name2((params) => {
        const options = {
          skipNulls: true,
          arrayFormat: "indices",
          encode: false
        };
        const { pagination, sorter, sorters, filters, ...rest } = params;
        const queryString = import_qs.default.stringify(
          {
            ...rest,
            ...pagination ? pagination : {},
            sorters: pickNotDeprecated2(sorters, sorter),
            filters
          },
          options
        );
        return queryString;
      }, "stringifyTableParams");
      var compareFilters = /* @__PURE__ */ __name2((left, right) => {
        if (left.operator !== "and" && left.operator !== "or" && right.operator !== "and" && right.operator !== "or") {
          return ("field" in left ? left.field : void 0) == ("field" in right ? right.field : void 0) && left.operator == right.operator;
        }
        return ("key" in left ? left.key : void 0) == ("key" in right ? right.key : void 0) && left.operator == right.operator;
      }, "compareFilters");
      var compareSorters = /* @__PURE__ */ __name2((left, right) => left.field == right.field, "compareSorters");
      var unionFilters = /* @__PURE__ */ __name2((permanentFilter, newFilters, prevFilters = []) => {
        const isKeyRequired = newFilters.filter(
          (f) => (f.operator === "or" || f.operator === "and") && !f.key
        );
        if (isKeyRequired.length > 1) {
          (0, import_warn_once.default)(
            true,
            `[conditionalFilters]: You have created multiple Conditional Filters at the top level, this requires the key parameter. 
For more information, see https://refine.dev/docs/advanced-tutorials/data-provider/handling-filters/#top-level-multiple-conditional-filters-usage`
          );
        }
        return (0, import_unionWith.default)(
          permanentFilter,
          newFilters,
          prevFilters,
          compareFilters
        ).filter(
          (crudFilter) => crudFilter.value !== void 0 && crudFilter.value !== null && (crudFilter.operator !== "or" || crudFilter.operator === "or" && crudFilter.value.length !== 0) && (crudFilter.operator !== "and" || crudFilter.operator === "and" && crudFilter.value.length !== 0)
        );
      }, "unionFilters");
      var unionSorters = /* @__PURE__ */ __name2((permanentSorter, newSorters) => (0, import_unionWith.default)(permanentSorter, newSorters, compareSorters).filter(
        (crudSorter) => crudSorter.order !== void 0 && crudSorter.order !== null
      ), "unionSorters");
      var setInitialFilters = /* @__PURE__ */ __name2((permanentFilter, defaultFilter) => [
        ...(0, import_differenceWith.default)(defaultFilter, permanentFilter, compareFilters),
        ...permanentFilter
      ], "setInitialFilters");
      var setInitialSorters = /* @__PURE__ */ __name2((permanentSorter, defaultSorter) => [
        ...(0, import_differenceWith.default)(defaultSorter, permanentSorter, compareSorters),
        ...permanentSorter
      ], "setInitialSorters");
      var getDefaultSortOrder = /* @__PURE__ */ __name2((columnName, sorter) => {
        if (!sorter) {
          return void 0;
        }
        const sortItem = sorter.find((item) => item.field === columnName);
        if (sortItem) {
          return sortItem.order;
        }
        return void 0;
      }, "getDefaultSortOrder");
      var getDefaultFilter = /* @__PURE__ */ __name2((columnName, filters, operatorType = "eq") => {
        const filter = filters == null ? void 0 : filters.find((filter2) => {
          if (filter2.operator !== "or" && filter2.operator !== "and" && "field" in filter2) {
            const { operator, field } = filter2;
            return field === columnName && operator === operatorType;
          }
          return void 0;
        });
        if (filter) {
          return filter.value || [];
        }
        return void 0;
      }, "getDefaultFilter");
      var file2Base64 = /* @__PURE__ */ __name2((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          const resultHandler = /* @__PURE__ */ __name2(() => {
            if (reader.result) {
              reader.removeEventListener("load", resultHandler, false);
              resolve(reader.result);
            }
          }, "resultHandler");
          reader.addEventListener("load", resultHandler, false);
          reader.readAsDataURL(file.originFileObj);
          reader.onerror = (error) => {
            reader.removeEventListener("load", resultHandler, false);
            return reject(error);
          };
        });
      }, "file2Base64");
      var useKeys = /* @__PURE__ */ __name2(() => {
        const {
          options: { useNewQueryKeys }
        } = useRefineContext();
        return {
          keys,
          preferLegacyKeys: !useNewQueryKeys
        };
      }, "useKeys");
      function usePermissions({
        v3LegacyAuthProviderCompatible = false,
        options
      } = {}) {
        const { getPermissions: legacyGetPermission } = useLegacyAuthContext();
        const { getPermissions } = useAuthBindingsContext();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const queryResponse = (0, import_react_query.useQuery)(
          keys2().auth().action("permissions").get(preferLegacyKeys),
          // Enabled check for `getPermissions` is enough to be sure that it's defined in the query function but TS is not smart enough to know that.
          getPermissions ?? (() => Promise.resolve(void 0)),
          {
            enabled: !v3LegacyAuthProviderCompatible && !!getPermissions,
            ...v3LegacyAuthProviderCompatible ? {} : options,
            meta: {
              ...v3LegacyAuthProviderCompatible ? {} : options == null ? void 0 : options.meta,
              ...(0, import_devtools_internal.getXRay)("usePermissions", preferLegacyKeys)
            }
          }
        );
        const legacyQueryResponse = (0, import_react_query.useQuery)(
          [
            ...keys2().auth().action("permissions").get(preferLegacyKeys),
            "v3LegacyAuthProviderCompatible"
          ],
          // Enabled check for `getPermissions` is enough to be sure that it's defined in the query function but TS is not smart enough to know that.
          legacyGetPermission ?? (() => Promise.resolve(void 0)),
          {
            enabled: v3LegacyAuthProviderCompatible && !!legacyGetPermission,
            ...v3LegacyAuthProviderCompatible ? options : {},
            meta: {
              ...v3LegacyAuthProviderCompatible ? options == null ? void 0 : options.meta : {},
              ...(0, import_devtools_internal.getXRay)("usePermissions", preferLegacyKeys)
            }
          }
        );
        return v3LegacyAuthProviderCompatible ? legacyQueryResponse : queryResponse;
      }
      __name(usePermissions, "usePermissions");
      __name2(usePermissions, "usePermissions");
      var import_react_query2 = __require("@tanstack/react-query");
      var import_devtools_internal2 = require_dist2();
      function useGetIdentity({
        v3LegacyAuthProviderCompatible = false,
        queryOptions
      } = {}) {
        const { getUserIdentity: legacyGetUserIdentity } = useLegacyAuthContext();
        const { getIdentity } = useAuthBindingsContext();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const queryResponse = (0, import_react_query2.useQuery)(
          keys2().auth().action("identity").get(preferLegacyKeys),
          // Enabled check for `getIdentity` is enough to be sure that it's defined in the query function but TS is not smart enough to know that.
          getIdentity ?? (() => Promise.resolve({})),
          {
            enabled: !v3LegacyAuthProviderCompatible && !!getIdentity,
            retry: false,
            ...v3LegacyAuthProviderCompatible === true ? {} : queryOptions,
            meta: {
              ...v3LegacyAuthProviderCompatible === true ? {} : queryOptions == null ? void 0 : queryOptions.meta,
              ...(0, import_devtools_internal2.getXRay)("useGetIdentity", preferLegacyKeys)
            }
          }
        );
        const legacyQueryResponse = (0, import_react_query2.useQuery)(
          [
            ...keys2().auth().action("identity").get(preferLegacyKeys),
            "v3LegacyAuthProviderCompatible"
          ],
          // Enabled check for `getUserIdentity` is enough to be sure that it's defined in the query function but TS is not smart enough to know that.
          legacyGetUserIdentity ?? (() => Promise.resolve({})),
          {
            enabled: v3LegacyAuthProviderCompatible && !!legacyGetUserIdentity,
            retry: false,
            ...v3LegacyAuthProviderCompatible ? queryOptions : {},
            meta: {
              ...v3LegacyAuthProviderCompatible ? queryOptions == null ? void 0 : queryOptions.meta : {},
              ...(0, import_devtools_internal2.getXRay)("useGetIdentity", preferLegacyKeys)
            }
          }
        );
        return v3LegacyAuthProviderCompatible ? legacyQueryResponse : queryResponse;
      }
      __name(useGetIdentity, "useGetIdentity");
      __name2(useGetIdentity, "useGetIdentity");
      var import_react_query4 = __require("@tanstack/react-query");
      var import_devtools_internal3 = require_dist2();
      var import_react_query3 = __require("@tanstack/react-query");
      var useInvalidateAuthStore = /* @__PURE__ */ __name2(() => {
        const queryClient = (0, import_react_query3.useQueryClient)();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const invalidate = /* @__PURE__ */ __name2(async () => {
          await Promise.all(
            ["check", "identity", "permissions"].map(
              (action) => queryClient.invalidateQueries(
                keys2().auth().action(action).get(preferLegacyKeys)
              )
            )
          );
        }, "invalidate");
        return invalidate;
      }, "useInvalidateAuthStore");
      function useLogout({
        v3LegacyAuthProviderCompatible,
        mutationOptions
      } = {}) {
        const invalidateAuthStore = useInvalidateAuthStore();
        const routerType = useRouterType();
        const go = useGo();
        const { push } = useNavigation();
        const { open, close } = useNotification();
        const { logout: legacyLogoutFromContext } = useLegacyAuthContext();
        const { logout: logoutFromContext } = useAuthBindingsContext();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const mutation = (0, import_react_query4.useMutation)(keys2().auth().action("logout").get(preferLegacyKeys), logoutFromContext, {
          onSuccess: async (data, variables) => {
            const { success, error, redirectTo } = data;
            const { redirectPath } = variables ?? {};
            const redirect = redirectPath ?? redirectTo;
            if (success) {
              close == null ? void 0 : close("useLogout-error");
            }
            if (error || !success) {
              open == null ? void 0 : open(buildNotification(error));
            }
            if (redirect !== false) {
              if (routerType === "legacy") {
                push(redirect ?? "/login");
              } else {
                if (redirect) {
                  go({ to: redirect });
                }
              }
            }
            await invalidateAuthStore();
          },
          onError: (error) => {
            open == null ? void 0 : open(buildNotification(error));
          },
          ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions,
          meta: {
            ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions == null ? void 0 : mutationOptions.meta,
            ...(0, import_devtools_internal3.getXRay)("useLogout", preferLegacyKeys)
          }
        });
        const v3LegacyAuthProviderCompatibleMutation = (0, import_react_query4.useMutation)(
          [
            ...keys2().auth().action("logout").get(preferLegacyKeys),
            "v3LegacyAuthProviderCompatible"
          ],
          legacyLogoutFromContext,
          {
            onSuccess: async (data, variables) => {
              const redirectPath = (variables == null ? void 0 : variables.redirectPath) ?? data;
              if (redirectPath === false) {
                return;
              }
              if (redirectPath) {
                if (routerType === "legacy") {
                  push(redirectPath);
                } else {
                  go({ to: redirectPath });
                }
                return;
              }
              if (routerType === "legacy") {
                push("/login");
              } else {
                go({ to: "/login" });
              }
              await invalidateAuthStore();
            },
            onError: (error) => {
              open == null ? void 0 : open(buildNotification(error));
            },
            ...v3LegacyAuthProviderCompatible ? mutationOptions : {},
            meta: {
              ...v3LegacyAuthProviderCompatible ? mutationOptions == null ? void 0 : mutationOptions.meta : {},
              ...(0, import_devtools_internal3.getXRay)("useLogout", preferLegacyKeys)
            }
          }
        );
        return v3LegacyAuthProviderCompatible ? v3LegacyAuthProviderCompatibleMutation : mutation;
      }
      __name(useLogout, "useLogout");
      __name2(useLogout, "useLogout");
      var buildNotification = /* @__PURE__ */ __name2((error) => {
        return {
          key: "useLogout-error",
          type: "error",
          message: (error == null ? void 0 : error.name) || "Logout Error",
          description: (error == null ? void 0 : error.message) || "Something went wrong during logout"
        };
      }, "buildNotification");
      var import_react112 = __toESM2(__require("react"));
      var import_react_query5 = __require("@tanstack/react-query");
      var import_devtools_internal4 = require_dist2();
      var import_qs2 = __toESM2(__require("qs"));
      function useLogin({
        v3LegacyAuthProviderCompatible,
        mutationOptions
      } = {}) {
        const invalidateAuthStore = useInvalidateAuthStore();
        const routerType = useRouterType();
        const go = useGo();
        const { replace } = useNavigation();
        const parsed = useParsed();
        const { useLocation } = useRouterContext();
        const { search } = useLocation();
        const { close, open } = useNotification();
        const { login: legacyLoginFromContext } = useLegacyAuthContext();
        const { login: loginFromContext } = useAuthBindingsContext();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const to = import_react112.default.useMemo(() => {
          var _a;
          if (routerType === "legacy") {
            const legacySearch = import_qs2.default.parse(search, {
              ignoreQueryPrefix: true
            });
            return legacySearch.to;
          } else {
            return (_a = parsed.params) == null ? void 0 : _a.to;
          }
        }, [routerType, parsed.params, search]);
        const mutation = (0, import_react_query5.useMutation)(keys2().auth().action("login").get(preferLegacyKeys), loginFromContext, {
          onSuccess: async ({ success, redirectTo, error }) => {
            if (success) {
              close == null ? void 0 : close("login-error");
            }
            if (error || !success) {
              open == null ? void 0 : open(buildNotification2(error));
            }
            if (to && success) {
              if (routerType === "legacy") {
                replace(to);
              } else {
                go({ to, type: "replace" });
              }
            } else if (redirectTo) {
              if (routerType === "legacy") {
                replace(redirectTo);
              } else {
                go({ to: redirectTo, type: "replace" });
              }
            } else {
              if (routerType === "legacy") {
                replace("/");
              }
            }
            await invalidateAuthStore();
          },
          onError: (error) => {
            open == null ? void 0 : open(buildNotification2(error));
          },
          ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions,
          meta: {
            ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions == null ? void 0 : mutationOptions.meta,
            ...(0, import_devtools_internal4.getXRay)("useLogin", preferLegacyKeys)
          }
        });
        const v3LegacyAuthProviderCompatibleMutation = (0, import_react_query5.useMutation)(
          [
            ...keys2().auth().action("login").get(preferLegacyKeys),
            "v3LegacyAuthProviderCompatible"
          ],
          legacyLoginFromContext,
          {
            onSuccess: async (redirectPathFromAuth) => {
              if (to) {
                replace(to);
              }
              if (redirectPathFromAuth !== false && !to) {
                if (typeof redirectPathFromAuth === "string") {
                  if (routerType === "legacy") {
                    replace(redirectPathFromAuth);
                  } else {
                    go({ to: redirectPathFromAuth, type: "replace" });
                  }
                } else {
                  if (routerType === "legacy") {
                    replace("/");
                  } else {
                    go({ to: "/", type: "replace" });
                  }
                }
              }
              await invalidateAuthStore();
              close == null ? void 0 : close("login-error");
            },
            onError: (error) => {
              open == null ? void 0 : open(buildNotification2(error));
            },
            ...v3LegacyAuthProviderCompatible ? mutationOptions : {},
            meta: {
              ...v3LegacyAuthProviderCompatible ? mutationOptions == null ? void 0 : mutationOptions.meta : {},
              ...(0, import_devtools_internal4.getXRay)("useLogin", preferLegacyKeys)
            }
          }
        );
        return v3LegacyAuthProviderCompatible ? v3LegacyAuthProviderCompatibleMutation : mutation;
      }
      __name(useLogin, "useLogin");
      __name2(useLogin, "useLogin");
      var buildNotification2 = /* @__PURE__ */ __name2((error) => {
        return {
          message: (error == null ? void 0 : error.name) || "Login Error",
          description: (error == null ? void 0 : error.message) || "Invalid credentials",
          key: "login-error",
          type: "error"
        };
      }, "buildNotification");
      var import_react_query6 = __require("@tanstack/react-query");
      var import_devtools_internal5 = require_dist2();
      function useRegister({
        v3LegacyAuthProviderCompatible,
        mutationOptions
      } = {}) {
        const invalidateAuthStore = useInvalidateAuthStore();
        const routerType = useRouterType();
        const go = useGo();
        const { replace } = useNavigation();
        const { register: legacyRegisterFromContext } = useLegacyAuthContext();
        const { register: registerFromContext } = useAuthBindingsContext();
        const { close, open } = useNotification();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const mutation = (0, import_react_query6.useMutation)(
          keys2().auth().action("register").get(preferLegacyKeys),
          registerFromContext,
          {
            onSuccess: async ({ success, redirectTo, error }) => {
              if (success) {
                close == null ? void 0 : close("register-error");
              }
              if (error || !success) {
                open == null ? void 0 : open(buildNotification3(error));
              }
              if (redirectTo) {
                if (routerType === "legacy") {
                  replace(redirectTo);
                } else {
                  go({ to: redirectTo, type: "replace" });
                }
              } else {
                if (routerType === "legacy") {
                  replace("/");
                }
              }
              await invalidateAuthStore();
            },
            onError: (error) => {
              open == null ? void 0 : open(buildNotification3(error));
            },
            ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions,
            meta: {
              ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions == null ? void 0 : mutationOptions.meta,
              ...(0, import_devtools_internal5.getXRay)("useRegister", preferLegacyKeys)
            }
          }
        );
        const v3LegacyAuthProviderCompatibleMutation = (0, import_react_query6.useMutation)(
          [
            ...keys2().auth().action("register").get(preferLegacyKeys),
            "v3LegacyAuthProviderCompatible"
          ],
          legacyRegisterFromContext,
          {
            onSuccess: async (redirectPathFromAuth) => {
              if (redirectPathFromAuth !== false) {
                if (redirectPathFromAuth) {
                  if (routerType === "legacy") {
                    replace(redirectPathFromAuth);
                  } else {
                    go({ to: redirectPathFromAuth, type: "replace" });
                  }
                } else {
                  if (routerType === "legacy") {
                    replace("/");
                  } else {
                    go({ to: "/", type: "replace" });
                  }
                }
                await invalidateAuthStore();
                close == null ? void 0 : close("register-error");
              }
            },
            onError: (error) => {
              open == null ? void 0 : open(buildNotification3(error));
            },
            ...v3LegacyAuthProviderCompatible ? mutationOptions : {},
            meta: {
              ...v3LegacyAuthProviderCompatible ? mutationOptions == null ? void 0 : mutationOptions.meta : {},
              ...(0, import_devtools_internal5.getXRay)("useRegister", preferLegacyKeys)
            }
          }
        );
        return v3LegacyAuthProviderCompatible ? v3LegacyAuthProviderCompatibleMutation : mutation;
      }
      __name(useRegister, "useRegister");
      __name2(useRegister, "useRegister");
      var buildNotification3 = /* @__PURE__ */ __name2((error) => {
        return {
          message: (error == null ? void 0 : error.name) || "Register Error",
          description: (error == null ? void 0 : error.message) || "Error while registering",
          key: "register-error",
          type: "error"
        };
      }, "buildNotification");
      var import_react_query7 = __require("@tanstack/react-query");
      var import_devtools_internal6 = require_dist2();
      function useForgotPassword({
        v3LegacyAuthProviderCompatible,
        mutationOptions
      } = {}) {
        const routerType = useRouterType();
        const go = useGo();
        const { replace } = useNavigation();
        const {
          forgotPassword: v3LegacyAuthProviderCompatibleForgotPasswordFromContext
        } = useLegacyAuthContext();
        const { forgotPassword: forgotPasswordFromContext } = useAuthBindingsContext();
        const { close, open } = useNotification();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const mutation = (0, import_react_query7.useMutation)(
          keys2().auth().action("forgotPassword").get(preferLegacyKeys),
          forgotPasswordFromContext,
          {
            onSuccess: ({ success, redirectTo, error }) => {
              if (success) {
                close == null ? void 0 : close("forgot-password-error");
              }
              if (error || !success) {
                open == null ? void 0 : open(buildNotification4(error));
              }
              if (redirectTo) {
                if (routerType === "legacy") {
                  replace(redirectTo);
                } else {
                  go({ to: redirectTo, type: "replace" });
                }
              }
            },
            onError: (error) => {
              open == null ? void 0 : open(buildNotification4(error));
            },
            ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions,
            meta: {
              ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions == null ? void 0 : mutationOptions.meta,
              ...(0, import_devtools_internal6.getXRay)("useForgotPassword", preferLegacyKeys)
            }
          }
        );
        const v3LegacyAuthProviderCompatibleMutation = (0, import_react_query7.useMutation)(
          [
            ...keys2().auth().action("forgotPassword").get(preferLegacyKeys),
            "v3LegacyAuthProviderCompatible"
          ],
          v3LegacyAuthProviderCompatibleForgotPasswordFromContext,
          {
            onSuccess: (redirectPathFromAuth) => {
              if (redirectPathFromAuth !== false) {
                if (redirectPathFromAuth) {
                  if (routerType === "legacy") {
                    replace(redirectPathFromAuth);
                  } else {
                    go({ to: redirectPathFromAuth, type: "replace" });
                  }
                }
              }
              close == null ? void 0 : close("forgot-password-error");
            },
            onError: (error) => {
              open == null ? void 0 : open(buildNotification4(error));
            },
            ...v3LegacyAuthProviderCompatible ? mutationOptions : {},
            meta: {
              ...v3LegacyAuthProviderCompatible ? mutationOptions == null ? void 0 : mutationOptions.meta : {},
              ...(0, import_devtools_internal6.getXRay)("useForgotPassword", preferLegacyKeys)
            }
          }
        );
        return v3LegacyAuthProviderCompatible ? v3LegacyAuthProviderCompatibleMutation : mutation;
      }
      __name(useForgotPassword, "useForgotPassword");
      __name2(useForgotPassword, "useForgotPassword");
      var buildNotification4 = /* @__PURE__ */ __name2((error) => {
        return {
          message: (error == null ? void 0 : error.name) || "Forgot Password Error",
          description: (error == null ? void 0 : error.message) || "Error while resetting password",
          key: "forgot-password-error",
          type: "error"
        };
      }, "buildNotification");
      var import_react122 = __toESM2(__require("react"));
      var import_react_query8 = __require("@tanstack/react-query");
      var import_devtools_internal7 = require_dist2();
      var import_qs3 = __toESM2(__require("qs"));
      function useUpdatePassword({
        v3LegacyAuthProviderCompatible,
        mutationOptions
      } = {}) {
        const routerType = useRouterType();
        const go = useGo();
        const { replace } = useNavigation();
        const { updatePassword: legacyUpdatePasswordFromContext } = useLegacyAuthContext();
        const { updatePassword: updatePasswordFromContext } = useAuthBindingsContext();
        const { close, open } = useNotification();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const parsed = useParsed();
        const { useLocation } = useRouterContext();
        const { search } = useLocation();
        const params = import_react122.default.useMemo(() => {
          if (routerType === "legacy") {
            const queryStrings = import_qs3.default.parse(search, {
              ignoreQueryPrefix: true
            });
            return queryStrings ?? {};
          } else {
            return parsed.params ?? {};
          }
        }, [search, parsed, routerType]);
        const mutation = (0, import_react_query8.useMutation)(
          keys2().auth().action("updatePassword").get(preferLegacyKeys),
          async (variables) => {
            return updatePasswordFromContext == null ? void 0 : updatePasswordFromContext({
              ...params,
              ...variables
            });
          },
          {
            onSuccess: ({ success, redirectTo, error }) => {
              if (success) {
                close == null ? void 0 : close("update-password-error");
              }
              if (error || !success) {
                open == null ? void 0 : open(buildNotification5(error));
              }
              if (redirectTo) {
                if (routerType === "legacy") {
                  replace(redirectTo);
                } else {
                  go({ to: redirectTo, type: "replace" });
                }
              }
            },
            onError: (error) => {
              open == null ? void 0 : open(buildNotification5(error));
            },
            ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions,
            meta: {
              ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions == null ? void 0 : mutationOptions.meta,
              ...(0, import_devtools_internal7.getXRay)("useUpdatePassword", preferLegacyKeys)
            }
          }
        );
        const v3LegacyAuthProviderCompatibleMutation = (0, import_react_query8.useMutation)(
          [
            ...keys2().auth().action("updatePassword").get(preferLegacyKeys),
            "v3LegacyAuthProviderCompatible"
          ],
          async (variables) => {
            return legacyUpdatePasswordFromContext == null ? void 0 : legacyUpdatePasswordFromContext({
              ...params,
              ...variables
            });
          },
          {
            onSuccess: (redirectPathFromAuth) => {
              if (redirectPathFromAuth !== false) {
                if (redirectPathFromAuth) {
                  if (routerType === "legacy") {
                    replace(redirectPathFromAuth);
                  } else {
                    go({ to: redirectPathFromAuth, type: "replace" });
                  }
                }
              }
              close == null ? void 0 : close("update-password-error");
            },
            onError: (error) => {
              open == null ? void 0 : open(buildNotification5(error));
            },
            ...v3LegacyAuthProviderCompatible ? mutationOptions : {},
            meta: {
              ...v3LegacyAuthProviderCompatible ? mutationOptions == null ? void 0 : mutationOptions.meta : {},
              ...(0, import_devtools_internal7.getXRay)("useUpdatePassword", preferLegacyKeys)
            }
          }
        );
        return v3LegacyAuthProviderCompatible ? v3LegacyAuthProviderCompatibleMutation : mutation;
      }
      __name(useUpdatePassword, "useUpdatePassword");
      __name2(useUpdatePassword, "useUpdatePassword");
      var buildNotification5 = /* @__PURE__ */ __name2((error) => {
        return {
          message: (error == null ? void 0 : error.name) || "Update Password Error",
          description: (error == null ? void 0 : error.message) || "Error while updating password",
          key: "update-password-error",
          type: "error"
        };
      }, "buildNotification");
      var import_react_query9 = __require("@tanstack/react-query");
      var import_devtools_internal8 = require_dist2();
      function useIsAuthenticated({
        v3LegacyAuthProviderCompatible = false,
        params
      } = {}) {
        const { checkAuth } = useLegacyAuthContext();
        const { check } = useAuthBindingsContext();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const queryResponse = (0, import_react_query9.useQuery)(
          keys2().auth().action("check").params(params).get(preferLegacyKeys),
          async () => await (check == null ? void 0 : check(params)) ?? {},
          {
            retry: false,
            enabled: !v3LegacyAuthProviderCompatible,
            meta: {
              ...(0, import_devtools_internal8.getXRay)("useIsAuthenticated", preferLegacyKeys)
            }
          }
        );
        const legacyQueryResponse = (0, import_react_query9.useQuery)(
          [
            ...keys2().auth().action("check").params(params).get(preferLegacyKeys),
            "v3LegacyAuthProviderCompatible"
          ],
          async () => await (checkAuth == null ? void 0 : checkAuth(params)) ?? {},
          {
            retry: false,
            enabled: v3LegacyAuthProviderCompatible,
            meta: {
              ...(0, import_devtools_internal8.getXRay)("useIsAuthenticated", preferLegacyKeys)
            }
          }
        );
        return v3LegacyAuthProviderCompatible ? legacyQueryResponse : queryResponse;
      }
      __name(useIsAuthenticated, "useIsAuthenticated");
      __name2(useIsAuthenticated, "useIsAuthenticated");
      var useAuthenticated = useIsAuthenticated;
      var import_react_query10 = __require("@tanstack/react-query");
      var import_devtools_internal9 = require_dist2();
      function useOnError({
        v3LegacyAuthProviderCompatible = false
      } = {}) {
        const routerType = useRouterType();
        const go = useGo();
        const { replace } = useNavigation();
        const { checkError: legacyCheckErrorFromContext } = useLegacyAuthContext();
        const { onError: onErrorFromContext } = useAuthBindingsContext();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const { mutate: legacyLogout } = useLogout({
          v3LegacyAuthProviderCompatible: Boolean(v3LegacyAuthProviderCompatible)
        });
        const { mutate: logout } = useLogout({
          v3LegacyAuthProviderCompatible: Boolean(v3LegacyAuthProviderCompatible)
        });
        const mutation = (0, import_react_query10.useMutation)(
          keys2().auth().action("onError").get(preferLegacyKeys),
          onErrorFromContext,
          {
            onSuccess: ({ logout: shouldLogout, redirectTo }) => {
              if (shouldLogout) {
                logout({ redirectPath: redirectTo });
                return;
              }
              if (redirectTo) {
                if (routerType === "legacy") {
                  replace(redirectTo);
                } else {
                  go({ to: redirectTo, type: "replace" });
                }
                return;
              }
            },
            meta: {
              ...(0, import_devtools_internal9.getXRay)("useOnError", preferLegacyKeys)
            }
          }
        );
        const v3LegacyAuthProviderCompatibleMutation = (0, import_react_query10.useMutation)(
          [
            ...keys2().auth().action("onError").get(preferLegacyKeys),
            "v3LegacyAuthProviderCompatible"
          ],
          legacyCheckErrorFromContext,
          {
            onError: (redirectPath) => {
              legacyLogout({ redirectPath });
            },
            meta: {
              ...(0, import_devtools_internal9.getXRay)("useOnError", preferLegacyKeys)
            }
          }
        );
        return v3LegacyAuthProviderCompatible ? v3LegacyAuthProviderCompatibleMutation : mutation;
      }
      __name(useOnError, "useOnError");
      __name2(useOnError, "useOnError");
      var useCheckError = useOnError;
      var useIsExistAuthentication = /* @__PURE__ */ __name2(() => {
        const { isProvided: legacyIsProvided } = useLegacyAuthContext();
        const { isProvided } = useAuthBindingsContext();
        return Boolean(isProvided || legacyIsProvided);
      }, "useIsExistAuthentication");
      var import_devtools_internal10 = require_dist2();
      var import_react_query11 = __require("@tanstack/react-query");
      var import_react132 = __require("react");
      var useLoadingOvertime = /* @__PURE__ */ __name2(({
        isLoading,
        interval: intervalProp,
        onInterval: onIntervalProp
      }) => {
        const [elapsedTime, setElapsedTime] = (0, import_react132.useState)(
          void 0
        );
        const { options } = useRefineContext();
        const { overtime } = options;
        const interval = intervalProp ?? overtime.interval;
        const onInterval = onIntervalProp ?? (overtime == null ? void 0 : overtime.onInterval);
        (0, import_react132.useEffect)(() => {
          let intervalFn;
          if (isLoading) {
            intervalFn = setInterval(() => {
              setElapsedTime((prevElapsedTime) => {
                if (prevElapsedTime === void 0) {
                  return interval;
                }
                return prevElapsedTime + interval;
              });
            }, interval);
          }
          return () => {
            clearInterval(intervalFn);
            setElapsedTime(void 0);
          };
        }, [isLoading, interval]);
        (0, import_react132.useEffect)(() => {
          if (onInterval && elapsedTime) {
            onInterval(elapsedTime);
          }
        }, [elapsedTime]);
        return {
          elapsedTime
        };
      }, "useLoadingOvertime");
      var useList = /* @__PURE__ */ __name2(({
        resource: resourceFromProp,
        config,
        filters,
        hasPagination,
        pagination,
        sorters,
        queryOptions,
        successNotification,
        errorNotification,
        meta,
        metaData,
        liveMode,
        onLiveEvent,
        liveParams,
        dataProviderName,
        overtimeOptions
      } = {}) => {
        const { resources, resource, identifier } = useResource4(resourceFromProp);
        const dataProvider = useDataProvider3();
        const translate = useTranslate();
        const authProvider = useActiveAuthProvider();
        const { mutate: checkError } = useOnError({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const handleNotification = useHandleNotification();
        const getMeta = useMeta();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const pickedDataProvider = pickDataProvider2(
          identifier,
          dataProviderName,
          resources
        );
        const preferredMeta = pickNotDeprecated2(meta, metaData);
        const prefferedFilters = pickNotDeprecated2(filters, config == null ? void 0 : config.filters);
        const prefferedSorters = pickNotDeprecated2(sorters, config == null ? void 0 : config.sort);
        const prefferedHasPagination = pickNotDeprecated2(
          hasPagination,
          config == null ? void 0 : config.hasPagination
        );
        const prefferedPagination = handlePaginationParams({
          pagination,
          configPagination: config == null ? void 0 : config.pagination,
          hasPagination: prefferedHasPagination
        });
        const isServerPagination = prefferedPagination.mode === "server";
        const combinedMeta = getMeta({ resource, meta: preferredMeta });
        const notificationValues = {
          meta: combinedMeta,
          metaData: combinedMeta,
          filters: prefferedFilters,
          hasPagination: isServerPagination,
          pagination: prefferedPagination,
          sorters: prefferedSorters,
          config: {
            ...config,
            sort: prefferedSorters
          }
        };
        const isEnabled = (queryOptions == null ? void 0 : queryOptions.enabled) === void 0 || (queryOptions == null ? void 0 : queryOptions.enabled) === true;
        const { getList } = dataProvider(pickedDataProvider);
        useResourceSubscription({
          resource: identifier,
          types: ["*"],
          params: {
            meta: combinedMeta,
            metaData: combinedMeta,
            pagination: prefferedPagination,
            hasPagination: isServerPagination,
            sort: prefferedSorters,
            sorters: prefferedSorters,
            filters: prefferedFilters,
            subscriptionType: "useList",
            ...liveParams
          },
          channel: `resources/${resource == null ? void 0 : resource.name}`,
          enabled: isEnabled,
          liveMode,
          onLiveEvent,
          dataProviderName: pickedDataProvider,
          meta: {
            ...meta,
            dataProviderName
          }
        });
        const queryResponse = (0, import_react_query11.useQuery)(
          keys2().data(pickedDataProvider).resource(identifier ?? "").action("list").params({
            ...preferredMeta || {},
            filters: prefferedFilters,
            hasPagination: isServerPagination,
            ...isServerPagination && {
              pagination: prefferedPagination
            },
            ...sorters && {
              sorters
            },
            ...(config == null ? void 0 : config.sort) && {
              sort: config == null ? void 0 : config.sort
            }
          }).get(preferLegacyKeys),
          ({ queryKey, pageParam, signal }) => {
            return getList({
              resource: (resource == null ? void 0 : resource.name) ?? "",
              pagination: prefferedPagination,
              hasPagination: isServerPagination,
              filters: prefferedFilters,
              sort: prefferedSorters,
              sorters: prefferedSorters,
              meta: {
                ...combinedMeta,
                queryContext: {
                  queryKey,
                  pageParam,
                  signal
                }
              },
              metaData: {
                ...combinedMeta,
                queryContext: {
                  queryKey,
                  pageParam,
                  signal
                }
              }
            });
          },
          {
            ...queryOptions,
            enabled: typeof (queryOptions == null ? void 0 : queryOptions.enabled) !== "undefined" ? queryOptions == null ? void 0 : queryOptions.enabled : !!(resource == null ? void 0 : resource.name),
            select: (rawData) => {
              var _a;
              let data = rawData;
              const { current, mode, pageSize } = prefferedPagination;
              if (mode === "client") {
                data = {
                  ...data,
                  data: data.data.slice(
                    (current - 1) * pageSize,
                    current * pageSize
                  ),
                  total: data.total
                };
              }
              if (queryOptions == null ? void 0 : queryOptions.select) {
                return (_a = queryOptions == null ? void 0 : queryOptions.select) == null ? void 0 : _a.call(queryOptions, data);
              }
              return data;
            },
            onSuccess: (data) => {
              var _a;
              (_a = queryOptions == null ? void 0 : queryOptions.onSuccess) == null ? void 0 : _a.call(queryOptions, data);
              const notificationConfig = typeof successNotification === "function" ? successNotification(
                data,
                notificationValues,
                identifier
              ) : successNotification;
              handleNotification(notificationConfig);
            },
            onError: (err) => {
              var _a;
              checkError(err);
              (_a = queryOptions == null ? void 0 : queryOptions.onError) == null ? void 0 : _a.call(queryOptions, err);
              const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, notificationValues, identifier) : errorNotification;
              handleNotification(notificationConfig, {
                key: `${identifier}-useList-notification`,
                message: translate(
                  "notifications.error",
                  { statusCode: err.statusCode },
                  `Error (status code: ${err.statusCode})`
                ),
                description: err.message,
                type: "error"
              });
            },
            meta: {
              ...queryOptions == null ? void 0 : queryOptions.meta,
              ...(0, import_devtools_internal10.getXRay)("useList", preferLegacyKeys)
            }
          }
        );
        const { elapsedTime } = useLoadingOvertime({
          isLoading: queryResponse.isFetching,
          interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
          onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
        });
        return { ...queryResponse, overtime: { elapsedTime } };
      }, "useList");
      var import_devtools_internal11 = require_dist2();
      var import_react_query12 = __require("@tanstack/react-query");
      var useOne = /* @__PURE__ */ __name2(({
        resource: resourceFromProp,
        id,
        queryOptions,
        successNotification,
        errorNotification,
        meta,
        metaData,
        liveMode,
        onLiveEvent,
        liveParams,
        dataProviderName,
        overtimeOptions
      }) => {
        const { resources, resource, identifier } = useResource4(resourceFromProp);
        const dataProvider = useDataProvider3();
        const translate = useTranslate();
        const authProvider = useActiveAuthProvider();
        const { mutate: checkError } = useOnError({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const handleNotification = useHandleNotification();
        const getMeta = useMeta();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const preferredMeta = pickNotDeprecated2(meta, metaData);
        const pickedDataProvider = pickDataProvider2(
          identifier,
          dataProviderName,
          resources
        );
        const { getOne } = dataProvider(pickedDataProvider);
        const combinedMeta = getMeta({ resource, meta: preferredMeta });
        useResourceSubscription({
          resource: identifier,
          types: ["*"],
          channel: `resources/${resource == null ? void 0 : resource.name}`,
          params: {
            ids: id ? [id] : [],
            id,
            meta: combinedMeta,
            metaData: combinedMeta,
            subscriptionType: "useOne",
            ...liveParams
          },
          enabled: typeof (queryOptions == null ? void 0 : queryOptions.enabled) !== "undefined" ? queryOptions == null ? void 0 : queryOptions.enabled : typeof (resource == null ? void 0 : resource.name) !== "undefined" && typeof id !== "undefined",
          liveMode,
          onLiveEvent,
          dataProviderName: pickedDataProvider,
          meta: {
            ...meta,
            dataProviderName
          }
        });
        const queryResponse = (0, import_react_query12.useQuery)(
          keys2().data(pickedDataProvider).resource(identifier ?? "").action("one").id(id ?? "").params({
            ...preferredMeta || {}
          }).get(preferLegacyKeys),
          ({ queryKey, pageParam, signal }) => getOne({
            resource: (resource == null ? void 0 : resource.name) ?? "",
            id,
            meta: {
              ...combinedMeta,
              queryContext: {
                queryKey,
                pageParam,
                signal
              }
            },
            metaData: {
              ...combinedMeta,
              queryContext: {
                queryKey,
                pageParam,
                signal
              }
            }
          }),
          {
            ...queryOptions,
            enabled: typeof (queryOptions == null ? void 0 : queryOptions.enabled) !== "undefined" ? queryOptions == null ? void 0 : queryOptions.enabled : typeof id !== "undefined",
            onSuccess: (data) => {
              var _a;
              (_a = queryOptions == null ? void 0 : queryOptions.onSuccess) == null ? void 0 : _a.call(queryOptions, data);
              const notificationConfig = typeof successNotification === "function" ? successNotification(
                data,
                {
                  id,
                  ...combinedMeta
                },
                identifier
              ) : successNotification;
              handleNotification(notificationConfig);
            },
            onError: (err) => {
              var _a;
              checkError(err);
              (_a = queryOptions == null ? void 0 : queryOptions.onError) == null ? void 0 : _a.call(queryOptions, err);
              const notificationConfig = typeof errorNotification === "function" ? errorNotification(
                err,
                {
                  id,
                  ...combinedMeta
                },
                identifier
              ) : errorNotification;
              handleNotification(notificationConfig, {
                key: `${id}-${identifier}-getOne-notification`,
                message: translate(
                  "notifications.error",
                  { statusCode: err.statusCode },
                  `Error (status code: ${err.statusCode})`
                ),
                description: err.message,
                type: "error"
              });
            },
            meta: {
              ...queryOptions == null ? void 0 : queryOptions.meta,
              ...(0, import_devtools_internal11.getXRay)("useOne", preferLegacyKeys)
            }
          }
        );
        const { elapsedTime } = useLoadingOvertime({
          isLoading: queryResponse.isFetching,
          interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
          onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
        });
        return { ...queryResponse, overtime: { elapsedTime } };
      }, "useOne");
      var import_devtools_internal12 = require_dist2();
      var import_react_query13 = __require("@tanstack/react-query");
      var useMany = /* @__PURE__ */ __name2(({
        resource: resourceFromProp,
        ids,
        queryOptions,
        successNotification,
        errorNotification,
        meta,
        metaData,
        liveMode,
        onLiveEvent,
        liveParams,
        dataProviderName,
        overtimeOptions
      }) => {
        const { resources, resource, identifier } = useResource4(resourceFromProp);
        const dataProvider = useDataProvider3();
        const translate = useTranslate();
        const authProvider = useActiveAuthProvider();
        const { mutate: checkError } = useOnError({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const handleNotification = useHandleNotification();
        const getMeta = useMeta();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const preferredMeta = pickNotDeprecated2(meta, metaData);
        const pickedDataProvider = pickDataProvider2(
          identifier,
          dataProviderName,
          resources
        );
        const isEnabled = (queryOptions == null ? void 0 : queryOptions.enabled) === void 0 || (queryOptions == null ? void 0 : queryOptions.enabled) === true;
        const { getMany, getOne } = dataProvider(pickedDataProvider);
        const combinedMeta = getMeta({ resource, meta: preferredMeta });
        useResourceSubscription({
          resource: identifier,
          types: ["*"],
          params: {
            ids,
            meta: combinedMeta,
            metaData: combinedMeta,
            subscriptionType: "useMany",
            ...liveParams
          },
          channel: `resources/${resource.name}`,
          enabled: isEnabled,
          liveMode,
          onLiveEvent,
          dataProviderName: pickedDataProvider,
          meta: {
            ...meta,
            dataProviderName
          }
        });
        const queryResponse = (0, import_react_query13.useQuery)(
          keys2().data(pickedDataProvider).resource(identifier).action("many").ids(...ids).params({
            ...preferredMeta || {}
          }).get(preferLegacyKeys),
          ({ queryKey, pageParam, signal }) => {
            if (getMany) {
              return getMany({
                resource: resource == null ? void 0 : resource.name,
                ids,
                meta: {
                  ...combinedMeta,
                  queryContext: {
                    queryKey,
                    pageParam,
                    signal
                  }
                },
                metaData: {
                  ...combinedMeta,
                  queryContext: {
                    queryKey,
                    pageParam,
                    signal
                  }
                }
              });
            } else {
              return handleMultiple(
                ids.map(
                  (id) => getOne({
                    resource: resource == null ? void 0 : resource.name,
                    id,
                    meta: {
                      ...combinedMeta,
                      queryContext: {
                        queryKey,
                        pageParam,
                        signal
                      }
                    },
                    metaData: {
                      ...combinedMeta,
                      queryContext: {
                        queryKey,
                        pageParam,
                        signal
                      }
                    }
                  })
                )
              );
            }
          },
          {
            ...queryOptions,
            onSuccess: (data) => {
              var _a;
              (_a = queryOptions == null ? void 0 : queryOptions.onSuccess) == null ? void 0 : _a.call(queryOptions, data);
              const notificationConfig = typeof successNotification === "function" ? successNotification(data, ids, identifier) : successNotification;
              handleNotification(notificationConfig);
            },
            onError: (err) => {
              var _a;
              checkError(err);
              (_a = queryOptions == null ? void 0 : queryOptions.onError) == null ? void 0 : _a.call(queryOptions, err);
              const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, ids, identifier) : errorNotification;
              handleNotification(notificationConfig, {
                key: `${ids[0]}-${identifier}-getMany-notification`,
                message: translate(
                  "notifications.error",
                  { statusCode: err.statusCode },
                  `Error (status code: ${err.statusCode})`
                ),
                description: err.message,
                type: "error"
              });
            },
            meta: {
              ...queryOptions == null ? void 0 : queryOptions.meta,
              ...(0, import_devtools_internal12.getXRay)("useMany", preferLegacyKeys)
            }
          }
        );
        const { elapsedTime } = useLoadingOvertime({
          isLoading: queryResponse.isFetching,
          interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
          onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
        });
        return { ...queryResponse, overtime: { elapsedTime } };
      }, "useMany");
      var import_devtools_internal13 = require_dist2();
      var import_react_query14 = __require("@tanstack/react-query");
      var import_react142 = __toESM2(__require("react"));
      var import_isEqual = __toESM2(__require("lodash/isEqual"));
      var UndoableQueueContext = import_react142.default.createContext({
        notifications: [],
        notificationDispatch: () => false
      });
      var initialState = [];
      var undoableQueueReducer = /* @__PURE__ */ __name2((state, action) => {
        switch (action.type) {
          case "ADD":
            const newState = state.filter(
              (notificationItem) => {
                return !((0, import_isEqual.default)(notificationItem.id, action.payload.id) && notificationItem.resource == action.payload.resource);
              }
            );
            return [
              ...newState,
              {
                ...action.payload,
                isRunning: true
              }
            ];
          case "REMOVE":
            return state.filter(
              (notificationItem) => !((0, import_isEqual.default)(notificationItem.id, action.payload.id) && notificationItem.resource == action.payload.resource)
            );
          case "DECREASE_NOTIFICATION_SECOND":
            return state.map((notificationItem) => {
              if ((0, import_isEqual.default)(notificationItem.id, action.payload.id) && notificationItem.resource == action.payload.resource) {
                return {
                  ...notificationItem,
                  seconds: action.payload.seconds - 1e3
                };
              }
              return notificationItem;
            });
          default:
            return state;
        }
      }, "undoableQueueReducer");
      var UndoableQueueContextProvider = /* @__PURE__ */ __name2(({ children }) => {
        const [notifications, notificationDispatch] = (0, import_react142.useReducer)(
          undoableQueueReducer,
          initialState
        );
        const notificationData = { notifications, notificationDispatch };
        return /* @__PURE__ */ import_react142.default.createElement(UndoableQueueContext.Provider, { value: notificationData }, children, typeof window !== "undefined" && notifications.map((notification) => /* @__PURE__ */ import_react142.default.createElement(
          UndoableQueue,
          {
            key: `${notification.id}-${notification.resource}-queue`,
            notification
          }
        )));
      }, "UndoableQueueContextProvider");
      var useUpdate = /* @__PURE__ */ __name2(({
        mutationOptions,
        overtimeOptions
      } = {}) => {
        const { resources, select } = useResource4();
        const queryClient = (0, import_react_query14.useQueryClient)();
        const dataProvider = useDataProvider3();
        const {
          mutationMode: mutationModeContext,
          undoableTimeout: undoableTimeoutContext
        } = useMutationMode();
        const translate = useTranslate();
        const authProvider = useActiveAuthProvider();
        const { mutate: checkError } = useOnError({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const publish = usePublish();
        const { log } = useLog();
        const { notificationDispatch } = useCancelNotification();
        const handleNotification = useHandleNotification();
        const invalidateStore = useInvalidate();
        const getMeta = useMeta();
        const {
          options: { textTransformers }
        } = useRefineContext();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const mutation = (0, import_react_query14.useMutation)(
          ({
            id,
            values,
            resource: resourceName,
            mutationMode,
            undoableTimeout,
            onCancel,
            meta,
            metaData,
            dataProviderName
          }) => {
            const { resource, identifier } = select(resourceName);
            const combinedMeta = getMeta({
              resource,
              meta: pickNotDeprecated2(meta, metaData)
            });
            const mutationModePropOrContext = mutationMode ?? mutationModeContext;
            const undoableTimeoutPropOrContext = undoableTimeout ?? undoableTimeoutContext;
            if (!(mutationModePropOrContext === "undoable")) {
              return dataProvider(
                pickDataProvider2(identifier, dataProviderName, resources)
              ).update({
                resource: resource.name,
                id,
                variables: values,
                meta: combinedMeta,
                metaData: combinedMeta
              });
            }
            const updatePromise = new Promise(
              (resolve, reject) => {
                const doMutation = /* @__PURE__ */ __name2(() => {
                  dataProvider(
                    pickDataProvider2(
                      identifier,
                      dataProviderName,
                      resources
                    )
                  ).update({
                    resource: resource.name,
                    id,
                    variables: values,
                    meta: combinedMeta,
                    metaData: combinedMeta
                  }).then((result) => resolve(result)).catch((err) => reject(err));
                }, "doMutation");
                const cancelMutation = /* @__PURE__ */ __name2(() => {
                  reject({ message: "mutationCancelled" });
                }, "cancelMutation");
                if (onCancel) {
                  onCancel(cancelMutation);
                }
                notificationDispatch({
                  type: "ADD",
                  payload: {
                    id,
                    resource: identifier,
                    cancelMutation,
                    doMutation,
                    seconds: undoableTimeoutPropOrContext,
                    isSilent: !!onCancel
                  }
                });
              }
            );
            return updatePromise;
          },
          {
            onMutate: async ({
              resource: resourceName,
              id,
              mutationMode,
              values,
              dataProviderName,
              meta,
              metaData,
              optimisticUpdateMap = { list: true, many: true, detail: true }
            }) => {
              const { identifier } = select(resourceName);
              const preferredMeta = pickNotDeprecated2(meta, metaData);
              const queryKey = queryKeysReplacement(preferLegacyKeys)(
                identifier,
                pickDataProvider2(identifier, dataProviderName, resources),
                preferredMeta
              );
              const resourceKeys = keys2().data(
                pickDataProvider2(
                  identifier,
                  dataProviderName,
                  resources
                )
              ).resource(identifier);
              const previousQueries = queryClient.getQueriesData(
                resourceKeys.get(preferLegacyKeys)
              );
              const mutationModePropOrContext = mutationMode ?? mutationModeContext;
              await queryClient.cancelQueries(
                resourceKeys.get(preferLegacyKeys),
                void 0,
                {
                  silent: true
                }
              );
              if (mutationModePropOrContext !== "pessimistic") {
                if (optimisticUpdateMap.list) {
                  queryClient.setQueriesData(
                    resourceKeys.action("list").params(preferredMeta ?? {}).get(preferLegacyKeys),
                    (previous) => {
                      if (typeof optimisticUpdateMap.list === "function") {
                        return optimisticUpdateMap.list(
                          previous,
                          values,
                          id
                        );
                      }
                      if (!previous) {
                        return null;
                      }
                      const data = previous.data.map(
                        (record) => {
                          var _a;
                          if (((_a = record.id) == null ? void 0 : _a.toString()) === (id == null ? void 0 : id.toString())) {
                            return {
                              id,
                              ...record,
                              ...values
                            };
                          }
                          return record;
                        }
                      );
                      return {
                        ...previous,
                        data
                      };
                    }
                  );
                }
                if (optimisticUpdateMap.many) {
                  queryClient.setQueriesData(
                    resourceKeys.action("many").get(preferLegacyKeys),
                    (previous) => {
                      if (typeof optimisticUpdateMap.many === "function") {
                        return optimisticUpdateMap.many(
                          previous,
                          values,
                          id
                        );
                      }
                      if (!previous) {
                        return null;
                      }
                      const data = previous.data.map(
                        (record) => {
                          var _a;
                          if (((_a = record.id) == null ? void 0 : _a.toString()) === (id == null ? void 0 : id.toString())) {
                            record = {
                              id,
                              ...record,
                              ...values
                            };
                          }
                          return record;
                        }
                      );
                      return {
                        ...previous,
                        data
                      };
                    }
                  );
                }
                if (optimisticUpdateMap.detail) {
                  queryClient.setQueriesData(
                    resourceKeys.action("one").id(id).params(preferredMeta ?? {}).get(preferLegacyKeys),
                    (previous) => {
                      if (typeof optimisticUpdateMap.detail === "function") {
                        return optimisticUpdateMap.detail(
                          previous,
                          values,
                          id
                        );
                      }
                      if (!previous) {
                        return null;
                      }
                      return {
                        ...previous,
                        data: {
                          ...previous.data,
                          ...values
                        }
                      };
                    }
                  );
                }
              }
              return {
                previousQueries,
                queryKey
              };
            },
            onSettled: (_data, _error, {
              id,
              resource: resourceName,
              dataProviderName,
              invalidates = ["list", "many", "detail"]
            }) => {
              const { identifier } = select(resourceName);
              invalidateStore({
                resource: identifier,
                dataProviderName: pickDataProvider2(
                  identifier,
                  dataProviderName,
                  resources
                ),
                invalidates,
                id
              });
              notificationDispatch({
                type: "REMOVE",
                payload: { id, resource: identifier }
              });
            },
            onSuccess: (data, {
              id,
              resource: resourceName,
              successNotification,
              dataProviderName: dataProviderNameFromProp,
              values,
              meta,
              metaData
            }, context) => {
              var _a;
              const { resource, identifier } = select(resourceName);
              const resourceSingular = textTransformers.singular(identifier);
              const dataProviderName = pickDataProvider2(
                identifier,
                dataProviderNameFromProp,
                resources
              );
              const combinedMeta = getMeta({
                resource,
                meta: pickNotDeprecated2(meta, metaData)
              });
              const notificationConfig = typeof successNotification === "function" ? successNotification(data, { id, values }, identifier) : successNotification;
              handleNotification(notificationConfig, {
                key: `${id}-${identifier}-notification`,
                description: translate(
                  "notifications.success",
                  "Successful"
                ),
                message: translate(
                  "notifications.editSuccess",
                  {
                    resource: translate(
                      `${identifier}.${identifier}`,
                      resourceSingular
                    )
                  },
                  `Successfully updated ${resourceSingular}`
                ),
                type: "success"
              });
              publish == null ? void 0 : publish({
                channel: `resources/${resource.name}`,
                type: "updated",
                payload: {
                  ids: ((_a = data.data) == null ? void 0 : _a.id) ? [data.data.id] : void 0
                },
                date: /* @__PURE__ */ new Date(),
                meta: {
                  ...combinedMeta,
                  dataProviderName
                }
              });
              let previousData;
              if (context) {
                const queryData = queryClient.getQueryData(context.queryKey.detail(id));
                previousData = Object.keys(values || {}).reduce(
                  (acc, item) => {
                    var _a2;
                    acc[item] = (_a2 = queryData == null ? void 0 : queryData.data) == null ? void 0 : _a2[item];
                    return acc;
                  },
                  {}
                );
              }
              const {
                fields: _fields,
                operation: _operation,
                variables: _variables,
                ...rest
              } = combinedMeta || {};
              log == null ? void 0 : log.mutate({
                action: "update",
                resource: resource.name,
                data: values,
                previousData,
                meta: {
                  id,
                  dataProviderName,
                  ...rest
                }
              });
            },
            onError: (err, { id, resource: resourceName, errorNotification, values }, context) => {
              const { identifier } = select(resourceName);
              if (context) {
                for (const query of context.previousQueries) {
                  queryClient.setQueryData(query[0], query[1]);
                }
              }
              if (err.message !== "mutationCancelled") {
                checkError == null ? void 0 : checkError(err);
                const resourceSingular = textTransformers.singular(identifier);
                const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, { id, values }, identifier) : errorNotification;
                handleNotification(notificationConfig, {
                  key: `${id}-${identifier}-notification`,
                  message: translate(
                    "notifications.editError",
                    {
                      resource: translate(
                        `${identifier}.${identifier}`,
                        resourceSingular
                      ),
                      statusCode: err.statusCode
                    },
                    `Error when updating ${resourceSingular} (status code: ${err.statusCode})`
                  ),
                  description: err.message,
                  type: "error"
                });
              }
            },
            mutationKey: keys2().data().mutation("update").get(preferLegacyKeys),
            ...mutationOptions,
            meta: {
              ...mutationOptions == null ? void 0 : mutationOptions.meta,
              ...(0, import_devtools_internal13.getXRay)("useUpdate", preferLegacyKeys)
            }
          }
        );
        const { elapsedTime } = useLoadingOvertime({
          isLoading: mutation.isLoading,
          interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
          onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
        });
        return { ...mutation, overtime: { elapsedTime } };
      }, "useUpdate");
      var import_devtools_internal14 = require_dist2();
      var import_react_query15 = __require("@tanstack/react-query");
      var useCreate = /* @__PURE__ */ __name2(({
        mutationOptions,
        overtimeOptions
      } = {}) => {
        const authProvider = useActiveAuthProvider();
        const { mutate: checkError } = useOnError({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const dataProvider = useDataProvider3();
        const invalidateStore = useInvalidate();
        const { resources, select } = useResource4();
        const translate = useTranslate();
        const publish = usePublish();
        const { log } = useLog();
        const handleNotification = useHandleNotification();
        const getMeta = useMeta();
        const {
          options: { textTransformers }
        } = useRefineContext();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const mutation = (0, import_react_query15.useMutation)(
          ({
            resource: resourceName,
            values,
            meta,
            metaData,
            dataProviderName
          }) => {
            const { resource, identifier } = select(resourceName);
            const combinedMeta = getMeta({
              resource,
              meta: pickNotDeprecated2(meta, metaData)
            });
            return dataProvider(
              pickDataProvider2(identifier, dataProviderName, resources)
            ).create({
              resource: resource.name,
              variables: values,
              meta: combinedMeta,
              metaData: combinedMeta
            });
          },
          {
            onSuccess: (data, {
              resource: resourceName,
              successNotification: successNotificationFromProp,
              dataProviderName: dataProviderNameFromProp,
              invalidates = ["list", "many"],
              values,
              meta,
              metaData
            }) => {
              var _a, _b;
              const { resource, identifier } = select(resourceName);
              const resourceSingular = textTransformers.singular(identifier);
              const dataProviderName = pickDataProvider2(
                identifier,
                dataProviderNameFromProp,
                resources
              );
              const combinedMeta = getMeta({
                resource,
                meta: pickNotDeprecated2(meta, metaData)
              });
              const notificationConfig = typeof successNotificationFromProp === "function" ? successNotificationFromProp(data, values, identifier) : successNotificationFromProp;
              handleNotification(notificationConfig, {
                key: `create-${identifier}-notification`,
                message: translate(
                  "notifications.createSuccess",
                  {
                    resource: translate(
                      `${identifier}.${identifier}`,
                      resourceSingular
                    )
                  },
                  `Successfully created ${resourceSingular}`
                ),
                description: translate("notifications.success", "Success"),
                type: "success"
              });
              invalidateStore({
                resource: identifier,
                dataProviderName,
                invalidates
              });
              publish == null ? void 0 : publish({
                channel: `resources/${resource.name}`,
                type: "created",
                payload: {
                  ids: ((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.id) ? [data.data.id] : void 0
                },
                date: /* @__PURE__ */ new Date(),
                meta: {
                  ...combinedMeta,
                  dataProviderName
                }
              });
              const {
                fields: _fields,
                operation: _operation,
                variables: _variables,
                ...rest
              } = combinedMeta || {};
              log == null ? void 0 : log.mutate({
                action: "create",
                resource: resource.name,
                data: values,
                meta: {
                  dataProviderName,
                  id: ((_b = data == null ? void 0 : data.data) == null ? void 0 : _b.id) ?? void 0,
                  ...rest
                }
              });
            },
            onError: (err, {
              resource: resourceName,
              errorNotification: errorNotificationFromProp,
              values
            }) => {
              checkError(err);
              const { identifier } = select(resourceName);
              const resourceSingular = textTransformers.singular(identifier);
              const notificationConfig = typeof errorNotificationFromProp === "function" ? errorNotificationFromProp(err, values, identifier) : errorNotificationFromProp;
              handleNotification(notificationConfig, {
                key: `create-${identifier}-notification`,
                description: err.message,
                message: translate(
                  "notifications.createError",
                  {
                    resource: translate(
                      `${identifier}.${identifier}`,
                      resourceSingular
                    ),
                    statusCode: err.statusCode
                  },
                  `There was an error creating ${resourceSingular} (status code: ${err.statusCode})`
                ),
                type: "error"
              });
            },
            mutationKey: keys2().data().mutation("create").get(preferLegacyKeys),
            ...mutationOptions,
            meta: {
              ...mutationOptions == null ? void 0 : mutationOptions.meta,
              ...(0, import_devtools_internal14.getXRay)("useCreate", preferLegacyKeys)
            }
          }
        );
        const { elapsedTime } = useLoadingOvertime({
          isLoading: mutation.isLoading,
          interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
          onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
        });
        return { ...mutation, overtime: { elapsedTime } };
      }, "useCreate");
      var import_devtools_internal15 = require_dist2();
      var import_react_query16 = __require("@tanstack/react-query");
      var useDelete = /* @__PURE__ */ __name2(({
        mutationOptions,
        overtimeOptions
      } = {}) => {
        const authProvider = useActiveAuthProvider();
        const { mutate: checkError } = useOnError({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const dataProvider = useDataProvider3();
        const { resources, select } = useResource4();
        const queryClient = (0, import_react_query16.useQueryClient)();
        const {
          mutationMode: mutationModeContext,
          undoableTimeout: undoableTimeoutContext
        } = useMutationMode();
        const { notificationDispatch } = useCancelNotification();
        const translate = useTranslate();
        const publish = usePublish();
        const { log } = useLog();
        const handleNotification = useHandleNotification();
        const invalidateStore = useInvalidate();
        const getMeta = useMeta();
        const {
          options: { textTransformers }
        } = useRefineContext();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const mutation = (0, import_react_query16.useMutation)(
          ({
            id,
            mutationMode,
            undoableTimeout,
            resource: resourceName,
            onCancel,
            meta,
            metaData,
            dataProviderName,
            values
          }) => {
            const { resource, identifier } = select(resourceName);
            const combinedMeta = getMeta({
              resource,
              meta: pickNotDeprecated2(meta, metaData)
            });
            const mutationModePropOrContext = mutationMode ?? mutationModeContext;
            const undoableTimeoutPropOrContext = undoableTimeout ?? undoableTimeoutContext;
            if (!(mutationModePropOrContext === "undoable")) {
              return dataProvider(
                pickDataProvider2(identifier, dataProviderName, resources)
              ).deleteOne({
                resource: resource.name,
                id,
                meta: combinedMeta,
                metaData: combinedMeta,
                variables: values
              });
            }
            const deletePromise = new Promise(
              (resolve, reject) => {
                const doMutation = /* @__PURE__ */ __name2(() => {
                  dataProvider(
                    pickDataProvider2(
                      identifier,
                      dataProviderName,
                      resources
                    )
                  ).deleteOne({
                    resource: resource.name,
                    id,
                    meta: combinedMeta,
                    metaData: combinedMeta,
                    variables: values
                  }).then((result) => resolve(result)).catch((err) => reject(err));
                }, "doMutation");
                const cancelMutation = /* @__PURE__ */ __name2(() => {
                  reject({ message: "mutationCancelled" });
                }, "cancelMutation");
                if (onCancel) {
                  onCancel(cancelMutation);
                }
                notificationDispatch({
                  type: "ADD",
                  payload: {
                    id,
                    resource: identifier,
                    cancelMutation,
                    doMutation,
                    seconds: undoableTimeoutPropOrContext,
                    isSilent: !!onCancel
                  }
                });
              }
            );
            return deletePromise;
          },
          {
            onMutate: async ({
              id,
              resource: resourceName,
              mutationMode,
              dataProviderName,
              meta,
              metaData
            }) => {
              const { identifier } = select(resourceName);
              const preferredMeta = pickNotDeprecated2(meta, metaData);
              const queryKey = queryKeysReplacement(preferLegacyKeys)(
                identifier,
                pickDataProvider2(identifier, dataProviderName, resources),
                preferredMeta
              );
              const resourceKeys = keys2().data(
                pickDataProvider2(
                  identifier,
                  dataProviderName,
                  resources
                )
              ).resource(identifier);
              const mutationModePropOrContext = mutationMode ?? mutationModeContext;
              await queryClient.cancelQueries(
                resourceKeys.get(preferLegacyKeys),
                void 0,
                {
                  silent: true
                }
              );
              const previousQueries = queryClient.getQueriesData(
                resourceKeys.get(preferLegacyKeys)
              );
              if (mutationModePropOrContext !== "pessimistic") {
                queryClient.setQueriesData(
                  resourceKeys.action("list").params(preferredMeta ?? {}).get(preferLegacyKeys),
                  (previous) => {
                    if (!previous) {
                      return null;
                    }
                    const data = previous.data.filter(
                      (record) => {
                        var _a;
                        return ((_a = record.id) == null ? void 0 : _a.toString()) !== id.toString();
                      }
                    );
                    return {
                      data,
                      total: previous.total - 1
                    };
                  }
                );
                queryClient.setQueriesData(
                  resourceKeys.action("many").get(preferLegacyKeys),
                  (previous) => {
                    if (!previous) {
                      return null;
                    }
                    const data = previous.data.filter(
                      (record) => {
                        var _a;
                        return ((_a = record.id) == null ? void 0 : _a.toString()) !== (id == null ? void 0 : id.toString());
                      }
                    );
                    return {
                      ...previous,
                      data
                    };
                  }
                );
              }
              return {
                previousQueries,
                queryKey
              };
            },
            onSettled: (_data, _error, {
              id,
              resource: resourceName,
              dataProviderName,
              invalidates = ["list", "many"]
            }) => {
              const { identifier } = select(resourceName);
              invalidateStore({
                resource: identifier,
                dataProviderName: pickDataProvider2(
                  identifier,
                  dataProviderName,
                  resources
                ),
                invalidates
              });
              notificationDispatch({
                type: "REMOVE",
                payload: { id, resource: identifier }
              });
            },
            onSuccess: (_data, {
              id,
              resource: resourceName,
              successNotification,
              dataProviderName: dataProviderNameFromProp,
              meta,
              metaData
            }, context) => {
              const { resource, identifier } = select(resourceName);
              const resourceSingular = textTransformers.singular(identifier);
              const dataProviderName = pickDataProvider2(
                identifier,
                dataProviderNameFromProp,
                resources
              );
              const combinedMeta = getMeta({
                resource,
                meta: pickNotDeprecated2(meta, metaData)
              });
              queryClient.removeQueries(context == null ? void 0 : context.queryKey.detail(id));
              const notificationConfig = typeof successNotification === "function" ? successNotification(_data, id, identifier) : successNotification;
              handleNotification(notificationConfig, {
                key: `${id}-${identifier}-notification`,
                description: translate("notifications.success", "Success"),
                message: translate(
                  "notifications.deleteSuccess",
                  {
                    resource: translate(
                      `${identifier}.${identifier}`,
                      resourceSingular
                    )
                  },
                  `Successfully deleted a ${resourceSingular}`
                ),
                type: "success"
              });
              publish == null ? void 0 : publish({
                channel: `resources/${resource.name}`,
                type: "deleted",
                payload: {
                  ids: [id]
                },
                date: /* @__PURE__ */ new Date(),
                meta: {
                  ...combinedMeta,
                  dataProviderName
                }
              });
              const {
                fields: _fields,
                operation: _operation,
                variables: _variables,
                ...rest
              } = combinedMeta || {};
              log == null ? void 0 : log.mutate({
                action: "delete",
                resource: resource.name,
                meta: {
                  id,
                  dataProviderName,
                  ...rest
                }
              });
              queryClient.removeQueries(context == null ? void 0 : context.queryKey.detail(id));
            },
            onError: (err, { id, resource: resourceName, errorNotification }, context) => {
              const { identifier } = select(resourceName);
              if (context) {
                for (const query of context.previousQueries) {
                  queryClient.setQueryData(query[0], query[1]);
                }
              }
              if (err.message !== "mutationCancelled") {
                checkError(err);
                const resourceSingular = textTransformers.singular(identifier);
                const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, id, identifier) : errorNotification;
                handleNotification(notificationConfig, {
                  key: `${id}-${identifier}-notification`,
                  message: translate(
                    "notifications.deleteError",
                    {
                      resource: resourceSingular,
                      statusCode: err.statusCode
                    },
                    `Error (status code: ${err.statusCode})`
                  ),
                  description: err.message,
                  type: "error"
                });
              }
            },
            mutationKey: keys2().data().mutation("delete").get(preferLegacyKeys),
            ...mutationOptions,
            meta: {
              ...mutationOptions == null ? void 0 : mutationOptions.meta,
              ...(0, import_devtools_internal15.getXRay)("useDelete", preferLegacyKeys)
            }
          }
        );
        const { elapsedTime } = useLoadingOvertime({
          isLoading: mutation.isLoading,
          interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
          onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
        });
        return { ...mutation, overtime: { elapsedTime } };
      }, "useDelete");
      var import_devtools_internal16 = require_dist2();
      var import_react_query17 = __require("@tanstack/react-query");
      var useCreateMany = /* @__PURE__ */ __name2(({
        mutationOptions,
        overtimeOptions
      } = {}) => {
        const dataProvider = useDataProvider3();
        const { resources, select } = useResource4();
        const translate = useTranslate();
        const publish = usePublish();
        const handleNotification = useHandleNotification();
        const invalidateStore = useInvalidate();
        const { log } = useLog();
        const getMeta = useMeta();
        const {
          options: { textTransformers }
        } = useRefineContext();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const mutation = (0, import_react_query17.useMutation)(
          ({
            resource: resourceName,
            values,
            meta,
            metaData,
            dataProviderName
          }) => {
            const { resource, identifier } = select(resourceName);
            const combinedMeta = getMeta({
              resource,
              meta: pickNotDeprecated2(meta, metaData)
            });
            const selectedDataProvider = dataProvider(
              pickDataProvider2(identifier, dataProviderName, resources)
            );
            if (selectedDataProvider.createMany) {
              return selectedDataProvider.createMany({
                resource: resource.name,
                variables: values,
                meta: combinedMeta,
                metaData: combinedMeta
              });
            } else {
              return handleMultiple(
                values.map(
                  (val) => selectedDataProvider.create({
                    resource: resource.name,
                    variables: val,
                    meta: combinedMeta,
                    metaData: combinedMeta
                  })
                )
              );
            }
          },
          {
            onSuccess: (response, {
              resource: resourceName,
              successNotification,
              dataProviderName: dataProviderNameFromProp,
              invalidates = ["list", "many"],
              values,
              meta,
              metaData
            }) => {
              const { resource, identifier } = select(resourceName);
              const resourcePlural = textTransformers.plural(identifier);
              const dataProviderName = pickDataProvider2(
                identifier,
                dataProviderNameFromProp,
                resources
              );
              const combinedMeta = getMeta({
                resource,
                meta: pickNotDeprecated2(meta, metaData)
              });
              const notificationConfig = typeof successNotification === "function" ? successNotification(response, values, identifier) : successNotification;
              handleNotification(notificationConfig, {
                key: `createMany-${identifier}-notification`,
                message: translate(
                  "notifications.createSuccess",
                  {
                    resource: translate(
                      `${identifier}.${identifier}`,
                      identifier
                    )
                  },
                  `Successfully created ${resourcePlural}`
                ),
                description: translate("notifications.success", "Success"),
                type: "success"
              });
              invalidateStore({
                resource: identifier,
                dataProviderName,
                invalidates
              });
              const ids = response == null ? void 0 : response.data.filter((item) => (item == null ? void 0 : item.id) !== void 0).map((item) => item.id);
              publish == null ? void 0 : publish({
                channel: `resources/${resource.name}`,
                type: "created",
                payload: {
                  ids
                },
                date: /* @__PURE__ */ new Date(),
                meta: {
                  ...combinedMeta,
                  dataProviderName
                }
              });
              const {
                fields: _fields,
                operation: _operation,
                variables: _variables,
                ...rest
              } = combinedMeta || {};
              log == null ? void 0 : log.mutate({
                action: "createMany",
                resource: resource.name,
                data: values,
                meta: {
                  dataProviderName,
                  ids,
                  ...rest
                }
              });
            },
            onError: (err, { resource: resourceName, errorNotification, values }) => {
              const { identifier } = select(resourceName);
              const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, values, identifier) : errorNotification;
              handleNotification(notificationConfig, {
                key: `createMany-${identifier}-notification`,
                description: err.message,
                message: translate(
                  "notifications.createError",
                  {
                    resource: translate(
                      `${identifier}.${identifier}`,
                      identifier
                    ),
                    statusCode: err.statusCode
                  },
                  `There was an error creating ${identifier} (status code: ${err.statusCode}`
                ),
                type: "error"
              });
            },
            mutationKey: keys2().data().mutation("createMany").get(preferLegacyKeys),
            ...mutationOptions,
            meta: {
              ...mutationOptions == null ? void 0 : mutationOptions.meta,
              ...(0, import_devtools_internal16.getXRay)("useCreateMany", preferLegacyKeys)
            }
          }
        );
        const { elapsedTime } = useLoadingOvertime({
          isLoading: mutation.isLoading,
          interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
          onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
        });
        return { ...mutation, overtime: { elapsedTime } };
      }, "useCreateMany");
      var import_devtools_internal17 = require_dist2();
      var import_react_query18 = __require("@tanstack/react-query");
      var useUpdateMany = /* @__PURE__ */ __name2(({
        mutationOptions,
        overtimeOptions
      } = {}) => {
        const { resources, select } = useResource4();
        const queryClient = (0, import_react_query18.useQueryClient)();
        const dataProvider = useDataProvider3();
        const translate = useTranslate();
        const {
          mutationMode: mutationModeContext,
          undoableTimeout: undoableTimeoutContext
        } = useMutationMode();
        const authProvider = useActiveAuthProvider();
        const { mutate: checkError } = useOnError({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const { notificationDispatch } = useCancelNotification();
        const publish = usePublish();
        const handleNotification = useHandleNotification();
        const invalidateStore = useInvalidate();
        const { log } = useLog();
        const getMeta = useMeta();
        const {
          options: { textTransformers }
        } = useRefineContext();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const mutation = (0, import_react_query18.useMutation)(
          ({
            ids,
            values,
            resource: resourceName,
            onCancel,
            mutationMode,
            undoableTimeout,
            meta,
            metaData,
            dataProviderName
          }) => {
            const { resource, identifier } = select(resourceName);
            const combinedMeta = getMeta({
              resource,
              meta: pickNotDeprecated2(meta, metaData)
            });
            const mutationModePropOrContext = mutationMode ?? mutationModeContext;
            const undoableTimeoutPropOrContext = undoableTimeout ?? undoableTimeoutContext;
            const selectedDataProvider = dataProvider(
              pickDataProvider2(identifier, dataProviderName, resources)
            );
            const mutationFn = /* @__PURE__ */ __name2(() => {
              if (selectedDataProvider.updateMany) {
                return selectedDataProvider.updateMany({
                  resource: resource.name,
                  ids,
                  variables: values,
                  meta: combinedMeta,
                  metaData: combinedMeta
                });
              } else {
                return handleMultiple(
                  ids.map(
                    (id) => selectedDataProvider.update({
                      resource: resource.name,
                      id,
                      variables: values,
                      meta: combinedMeta,
                      metaData: combinedMeta
                    })
                  )
                );
              }
            }, "mutationFn");
            if (!(mutationModePropOrContext === "undoable")) {
              return mutationFn();
            }
            const updatePromise = new Promise(
              (resolve, reject) => {
                const doMutation = /* @__PURE__ */ __name2(() => {
                  mutationFn().then((result) => resolve(result)).catch((err) => reject(err));
                }, "doMutation");
                const cancelMutation = /* @__PURE__ */ __name2(() => {
                  reject({ message: "mutationCancelled" });
                }, "cancelMutation");
                if (onCancel) {
                  onCancel(cancelMutation);
                }
                notificationDispatch({
                  type: "ADD",
                  payload: {
                    id: ids,
                    resource: identifier,
                    cancelMutation,
                    doMutation,
                    seconds: undoableTimeoutPropOrContext,
                    isSilent: !!onCancel
                  }
                });
              }
            );
            return updatePromise;
          },
          {
            onMutate: async ({
              resource: resourceName,
              ids,
              values,
              mutationMode,
              dataProviderName,
              meta,
              metaData,
              optimisticUpdateMap = { list: true, many: true, detail: true }
            }) => {
              const { identifier } = select(resourceName);
              const preferredMeta = pickNotDeprecated2(meta, metaData);
              const queryKey = queryKeysReplacement(preferLegacyKeys)(
                identifier,
                pickDataProvider2(identifier, dataProviderName, resources),
                pickNotDeprecated2(meta, metaData)
              );
              const resourceKeys = keys2().data(
                pickDataProvider2(
                  identifier,
                  dataProviderName,
                  resources
                )
              ).resource(identifier);
              const mutationModePropOrContext = mutationMode ?? mutationModeContext;
              await queryClient.cancelQueries(
                resourceKeys.get(preferLegacyKeys),
                void 0,
                {
                  silent: true
                }
              );
              const previousQueries = queryClient.getQueriesData(resourceKeys.get(preferLegacyKeys));
              if (mutationModePropOrContext !== "pessimistic") {
                if (optimisticUpdateMap.list) {
                  queryClient.setQueriesData(
                    resourceKeys.action("list").params(preferredMeta ?? {}).get(preferLegacyKeys),
                    (previous) => {
                      if (typeof optimisticUpdateMap.list === "function") {
                        return optimisticUpdateMap.list(
                          previous,
                          values,
                          ids
                        );
                      }
                      if (!previous) {
                        return null;
                      }
                      const data = previous.data.map(
                        (record) => {
                          if (record.id !== void 0 && ids.filter(
                            (id) => id !== void 0
                          ).map(String).includes(record.id.toString())) {
                            return {
                              ...record,
                              ...values
                            };
                          }
                          return record;
                        }
                      );
                      return {
                        ...previous,
                        data
                      };
                    }
                  );
                }
                if (optimisticUpdateMap.many) {
                  queryClient.setQueriesData(
                    resourceKeys.action("many").get(preferLegacyKeys),
                    (previous) => {
                      if (typeof optimisticUpdateMap.many === "function") {
                        return optimisticUpdateMap.many(
                          previous,
                          values,
                          ids
                        );
                      }
                      if (!previous) {
                        return null;
                      }
                      const data = previous.data.map(
                        (record) => {
                          if (record.id !== void 0 && ids.filter(
                            (id) => id !== void 0
                          ).map(String).includes(record.id.toString())) {
                            return {
                              ...record,
                              ...values
                            };
                          }
                          return record;
                        }
                      );
                      return {
                        ...previous,
                        data
                      };
                    }
                  );
                }
                if (optimisticUpdateMap.detail) {
                  for (const id of ids) {
                    queryClient.setQueriesData(
                      resourceKeys.action("one").id(id).params(preferredMeta ?? {}).get(preferLegacyKeys),
                      (previous) => {
                        if (typeof optimisticUpdateMap.detail === "function") {
                          return optimisticUpdateMap.detail(
                            previous,
                            values,
                            id
                          );
                        }
                        if (!previous) {
                          return null;
                        }
                        const data = {
                          ...previous.data,
                          ...values
                        };
                        return {
                          ...previous,
                          data
                        };
                      }
                    );
                  }
                }
              }
              return {
                previousQueries,
                queryKey
              };
            },
            onSettled: (_data, _error, { ids, resource: resourceName, dataProviderName }) => {
              const { identifier } = select(resourceName);
              invalidateStore({
                resource: identifier,
                invalidates: ["list", "many"],
                dataProviderName: pickDataProvider2(
                  identifier,
                  dataProviderName,
                  resources
                )
              });
              ids.forEach(
                (id) => invalidateStore({
                  resource: identifier,
                  invalidates: ["detail"],
                  dataProviderName: pickDataProvider2(
                    identifier,
                    dataProviderName,
                    resources
                  ),
                  id
                })
              );
              notificationDispatch({
                type: "REMOVE",
                payload: { id: ids, resource: identifier }
              });
            },
            onSuccess: (data, {
              ids,
              resource: resourceName,
              meta,
              metaData,
              dataProviderName: dataProviderNameFromProp,
              successNotification,
              values
            }, context) => {
              const { resource, identifier } = select(resourceName);
              const resourceSingular = textTransformers.singular(identifier);
              const dataProviderName = pickDataProvider2(
                identifier,
                dataProviderNameFromProp,
                resources
              );
              const combinedMeta = getMeta({
                resource,
                meta: pickNotDeprecated2(meta, metaData)
              });
              const notificationConfig = typeof successNotification === "function" ? successNotification(data, { ids, values }, identifier) : successNotification;
              handleNotification(notificationConfig, {
                key: `${ids}-${identifier}-notification`,
                description: translate(
                  "notifications.success",
                  "Successful"
                ),
                message: translate(
                  "notifications.editSuccess",
                  {
                    resource: translate(
                      `${identifier}.${identifier}`,
                      identifier
                    )
                  },
                  `Successfully updated ${resourceSingular}`
                ),
                type: "success"
              });
              publish == null ? void 0 : publish({
                channel: `resources/${resource.name}`,
                type: "updated",
                payload: {
                  ids: ids.map(String)
                },
                date: /* @__PURE__ */ new Date(),
                meta: {
                  ...combinedMeta,
                  dataProviderName
                }
              });
              const previousData = [];
              if (context) {
                ids.forEach((id) => {
                  const queryData = queryClient.getQueryData(context.queryKey.detail(id));
                  previousData.push(
                    Object.keys(values || {}).reduce(
                      (acc, item) => {
                        var _a;
                        acc[item] = (_a = queryData == null ? void 0 : queryData.data) == null ? void 0 : _a[item];
                        return acc;
                      },
                      {}
                    )
                  );
                });
              }
              const {
                fields: _fields,
                operation: _operation,
                variables: _variables,
                ...rest
              } = combinedMeta || {};
              log == null ? void 0 : log.mutate({
                action: "updateMany",
                resource: resource.name,
                data: values,
                previousData,
                meta: {
                  ids,
                  dataProviderName,
                  ...rest
                }
              });
            },
            onError: (err, { ids, resource: resourceName, errorNotification, values }, context) => {
              const { identifier } = select(resourceName);
              if (context) {
                for (const query of context.previousQueries) {
                  queryClient.setQueryData(query[0], query[1]);
                }
              }
              if (err.message !== "mutationCancelled") {
                checkError == null ? void 0 : checkError(err);
                const resourceSingular = textTransformers.singular(identifier);
                const notificationConfig = typeof errorNotification === "function" ? errorNotification(
                  err,
                  { ids, values },
                  identifier
                ) : errorNotification;
                handleNotification(notificationConfig, {
                  key: `${ids}-${identifier}-updateMany-error-notification`,
                  message: translate(
                    "notifications.editError",
                    {
                      resource: resourceSingular,
                      statusCode: err.statusCode
                    },
                    `Error when updating ${resourceSingular} (status code: ${err.statusCode})`
                  ),
                  description: err.message,
                  type: "error"
                });
              }
            },
            mutationKey: keys2().data().mutation("updateMany").get(preferLegacyKeys),
            ...mutationOptions,
            meta: {
              ...mutationOptions == null ? void 0 : mutationOptions.meta,
              ...(0, import_devtools_internal17.getXRay)("useUpdateMany", preferLegacyKeys)
            }
          }
        );
        const { elapsedTime } = useLoadingOvertime({
          isLoading: mutation.isLoading,
          interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
          onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
        });
        return { ...mutation, overtime: { elapsedTime } };
      }, "useUpdateMany");
      var import_devtools_internal18 = require_dist2();
      var import_react_query19 = __require("@tanstack/react-query");
      var useDeleteMany = /* @__PURE__ */ __name2(({
        mutationOptions,
        overtimeOptions
      } = {}) => {
        const authProvider = useActiveAuthProvider();
        const { mutate: checkError } = useOnError({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const {
          mutationMode: mutationModeContext,
          undoableTimeout: undoableTimeoutContext
        } = useMutationMode();
        const dataProvider = useDataProvider3();
        const { notificationDispatch } = useCancelNotification();
        const translate = useTranslate();
        const publish = usePublish();
        const handleNotification = useHandleNotification();
        const invalidateStore = useInvalidate();
        const { log } = useLog();
        const { resources, select } = useResource4();
        const queryClient = (0, import_react_query19.useQueryClient)();
        const getMeta = useMeta();
        const {
          options: { textTransformers }
        } = useRefineContext();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const mutation = (0, import_react_query19.useMutation)(
          ({
            resource: resourceName,
            ids,
            mutationMode,
            undoableTimeout,
            onCancel,
            meta,
            metaData,
            dataProviderName,
            values
          }) => {
            const { resource, identifier } = select(resourceName);
            const combinedMeta = getMeta({
              resource,
              meta: pickNotDeprecated2(meta, metaData)
            });
            const mutationModePropOrContext = mutationMode ?? mutationModeContext;
            const undoableTimeoutPropOrContext = undoableTimeout ?? undoableTimeoutContext;
            const selectedDataProvider = dataProvider(
              pickDataProvider2(identifier, dataProviderName, resources)
            );
            const mutationFn = /* @__PURE__ */ __name2(() => {
              if (selectedDataProvider.deleteMany) {
                return selectedDataProvider.deleteMany({
                  resource: resource.name,
                  ids,
                  meta: combinedMeta,
                  metaData: combinedMeta,
                  variables: values
                });
              } else {
                return handleMultiple(
                  ids.map(
                    (id) => selectedDataProvider.deleteOne({
                      resource: resource.name,
                      id,
                      meta: combinedMeta,
                      metaData: combinedMeta,
                      variables: values
                    })
                  )
                );
              }
            }, "mutationFn");
            if (!(mutationModePropOrContext === "undoable")) {
              return mutationFn();
            }
            const updatePromise = new Promise(
              (resolve, reject) => {
                const doMutation = /* @__PURE__ */ __name2(() => {
                  mutationFn().then((result) => resolve(result)).catch((err) => reject(err));
                }, "doMutation");
                const cancelMutation = /* @__PURE__ */ __name2(() => {
                  reject({ message: "mutationCancelled" });
                }, "cancelMutation");
                if (onCancel) {
                  onCancel(cancelMutation);
                }
                notificationDispatch({
                  type: "ADD",
                  payload: {
                    id: ids,
                    resource: identifier,
                    cancelMutation,
                    doMutation,
                    seconds: undoableTimeoutPropOrContext,
                    isSilent: !!onCancel
                  }
                });
              }
            );
            return updatePromise;
          },
          {
            onMutate: async ({
              ids,
              resource: resourceName,
              mutationMode,
              dataProviderName,
              meta,
              metaData
            }) => {
              const { identifier } = select(resourceName);
              const preferredMeta = pickNotDeprecated2(meta, metaData);
              const queryKey = queryKeysReplacement(preferLegacyKeys)(
                identifier,
                pickDataProvider2(identifier, dataProviderName, resources),
                preferredMeta
              );
              const resourceKeys = keys2().data(
                pickDataProvider2(
                  identifier,
                  dataProviderName,
                  resources
                )
              ).resource(identifier);
              const mutationModePropOrContext = mutationMode ?? mutationModeContext;
              await queryClient.cancelQueries(
                resourceKeys.get(preferLegacyKeys),
                void 0,
                {
                  silent: true
                }
              );
              const previousQueries = queryClient.getQueriesData(
                resourceKeys.get(preferLegacyKeys)
              );
              if (mutationModePropOrContext !== "pessimistic") {
                queryClient.setQueriesData(
                  resourceKeys.action("list").params(preferredMeta ?? {}).get(preferLegacyKeys),
                  (previous) => {
                    if (!previous) {
                      return null;
                    }
                    const data = previous.data.filter(
                      (item) => item.id && !ids.map(String).includes(item.id.toString())
                    );
                    return {
                      data,
                      total: previous.total - 1
                    };
                  }
                );
                queryClient.setQueriesData(
                  resourceKeys.action("many").get(preferLegacyKeys),
                  (previous) => {
                    if (!previous) {
                      return null;
                    }
                    const data = previous.data.filter(
                      (record) => {
                        if (record.id) {
                          return !ids.map(String).includes(record.id.toString());
                        }
                        return false;
                      }
                    );
                    return {
                      ...previous,
                      data
                    };
                  }
                );
                for (const id of ids) {
                  queryClient.setQueriesData(
                    resourceKeys.action("one").id(id).params(preferredMeta).get(preferLegacyKeys),
                    (previous) => {
                      if (!previous || previous.data.id == id) {
                        return null;
                      }
                      return {
                        ...previous
                      };
                    }
                  );
                }
              }
              return {
                previousQueries,
                queryKey
              };
            },
            // Always refetch after error or success:
            onSettled: (_data, _error, {
              resource: resourceName,
              ids,
              dataProviderName,
              invalidates = ["list", "many"]
            }) => {
              const { identifier } = select(resourceName);
              invalidateStore({
                resource: identifier,
                dataProviderName: pickDataProvider2(
                  identifier,
                  dataProviderName,
                  resources
                ),
                invalidates
              });
              notificationDispatch({
                type: "REMOVE",
                payload: { id: ids, resource: identifier }
              });
            },
            onSuccess: (_data, {
              ids,
              resource: resourceName,
              meta,
              metaData,
              dataProviderName: dataProviderNameFromProp,
              successNotification
            }, context) => {
              const { resource, identifier } = select(resourceName);
              const dataProviderName = pickDataProvider2(
                identifier,
                dataProviderNameFromProp,
                resources
              );
              const combinedMeta = getMeta({
                resource,
                meta: pickNotDeprecated2(meta, metaData)
              });
              ids.forEach(
                (id) => queryClient.removeQueries(context == null ? void 0 : context.queryKey.detail(id))
              );
              const notificationConfig = typeof successNotification === "function" ? successNotification(_data, ids, identifier) : successNotification;
              handleNotification(notificationConfig, {
                key: `${ids}-${identifier}-notification`,
                description: translate("notifications.success", "Success"),
                message: translate(
                  "notifications.deleteSuccess",
                  {
                    resource: translate(
                      `${identifier}.${identifier}`,
                      identifier
                    )
                  },
                  `Successfully deleted ${identifier}`
                ),
                type: "success"
              });
              publish == null ? void 0 : publish({
                channel: `resources/${resource.name}`,
                type: "deleted",
                payload: { ids },
                date: /* @__PURE__ */ new Date(),
                meta: {
                  ...combinedMeta,
                  dataProviderName
                }
              });
              const {
                fields: _fields,
                operation: _operation,
                variables: _variables,
                ...rest
              } = combinedMeta || {};
              log == null ? void 0 : log.mutate({
                action: "deleteMany",
                resource: resource.name,
                meta: {
                  ids,
                  dataProviderName,
                  ...rest
                }
              });
              ids.forEach(
                (id) => queryClient.removeQueries(context == null ? void 0 : context.queryKey.detail(id))
              );
            },
            onError: (err, { ids, resource: resourceName, errorNotification }, context) => {
              const { identifier } = select(resourceName);
              if (context) {
                for (const query of context.previousQueries) {
                  queryClient.setQueryData(query[0], query[1]);
                }
              }
              if (err.message !== "mutationCancelled") {
                checkError(err);
                const resourceSingular = textTransformers.singular(identifier);
                const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, ids, identifier) : errorNotification;
                handleNotification(notificationConfig, {
                  key: `${ids}-${identifier}-notification`,
                  message: translate(
                    "notifications.deleteError",
                    {
                      resource: resourceSingular,
                      statusCode: err.statusCode
                    },
                    `Error (status code: ${err.statusCode})`
                  ),
                  description: err.message,
                  type: "error"
                });
              }
            },
            mutationKey: keys2().data().mutation("deleteMany").get(preferLegacyKeys),
            ...mutationOptions,
            meta: {
              ...mutationOptions == null ? void 0 : mutationOptions.meta,
              ...(0, import_devtools_internal18.getXRay)("useDeleteMany", preferLegacyKeys)
            }
          }
        );
        const { elapsedTime } = useLoadingOvertime({
          isLoading: mutation.isLoading,
          interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
          onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
        });
        return { ...mutation, overtime: { elapsedTime } };
      }, "useDeleteMany");
      var useApiUrl = /* @__PURE__ */ __name2((dataProviderName) => {
        var _a;
        const dataProvider = useDataProvider3();
        const { resource } = useResource4();
        const { getApiUrl } = dataProvider(
          dataProviderName ?? ((_a = pickNotDeprecated2(resource == null ? void 0 : resource.meta, resource == null ? void 0 : resource.options)) == null ? void 0 : _a.dataProviderName)
        );
        return getApiUrl();
      }, "useApiUrl");
      var import_react_query20 = __require("@tanstack/react-query");
      var import_devtools_internal19 = require_dist2();
      var useCustom = /* @__PURE__ */ __name2(({
        url,
        method,
        config,
        queryOptions,
        successNotification,
        errorNotification,
        meta,
        metaData,
        dataProviderName,
        overtimeOptions
      }) => {
        const dataProvider = useDataProvider3();
        const authProvider = useActiveAuthProvider();
        const { mutate: checkError } = useOnError({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const translate = useTranslate();
        const handleNotification = useHandleNotification();
        const getMeta = useMeta();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const preferredMeta = pickNotDeprecated2(meta, metaData);
        const { custom } = dataProvider(dataProviderName);
        const combinedMeta = getMeta({ meta: preferredMeta });
        if (custom) {
          const queryResponse = (0, import_react_query20.useQuery)({
            queryKey: keys2().data(dataProviderName).mutation("custom").params({
              method,
              url,
              ...config,
              ...preferredMeta || {}
            }).get(preferLegacyKeys),
            queryFn: ({ queryKey, pageParam, signal }) => custom({
              url,
              method,
              ...config,
              meta: {
                ...combinedMeta,
                queryContext: {
                  queryKey,
                  pageParam,
                  signal
                }
              },
              metaData: {
                ...combinedMeta,
                queryContext: {
                  queryKey,
                  pageParam,
                  signal
                }
              }
            }),
            ...queryOptions,
            onSuccess: (data) => {
              var _a;
              (_a = queryOptions == null ? void 0 : queryOptions.onSuccess) == null ? void 0 : _a.call(queryOptions, data);
              const notificationConfig = typeof successNotification === "function" ? successNotification(data, {
                ...config,
                ...combinedMeta
              }) : successNotification;
              handleNotification(notificationConfig);
            },
            onError: (err) => {
              var _a;
              checkError(err);
              (_a = queryOptions == null ? void 0 : queryOptions.onError) == null ? void 0 : _a.call(queryOptions, err);
              const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, {
                ...config,
                ...combinedMeta
              }) : errorNotification;
              handleNotification(notificationConfig, {
                key: `${method}-notification`,
                message: translate(
                  "notifications.error",
                  { statusCode: err.statusCode },
                  `Error (status code: ${err.statusCode})`
                ),
                description: err.message,
                type: "error"
              });
            },
            meta: {
              ...queryOptions == null ? void 0 : queryOptions.meta,
              ...(0, import_devtools_internal19.getXRay)("useCustom", preferLegacyKeys)
            }
          });
          const { elapsedTime } = useLoadingOvertime({
            isLoading: queryResponse.isFetching,
            interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
            onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
          });
          return { ...queryResponse, overtime: { elapsedTime } };
        } else {
          throw Error("Not implemented custom on data provider.");
        }
      }, "useCustom");
      var import_react_query21 = __require("@tanstack/react-query");
      var import_devtools_internal20 = require_dist2();
      var useCustomMutation = /* @__PURE__ */ __name2(({
        mutationOptions,
        overtimeOptions
      } = {}) => {
        const authProvider = useActiveAuthProvider();
        const { mutate: checkError } = useOnError({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const handleNotification = useHandleNotification();
        const dataProvider = useDataProvider3();
        const translate = useTranslate();
        const getMeta = useMeta();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const mutation = (0, import_react_query21.useMutation)(
          ({
            url,
            method,
            values,
            meta,
            metaData,
            dataProviderName,
            config
          }) => {
            const combinedMeta = getMeta({
              meta: pickNotDeprecated2(meta, metaData)
            });
            const { custom } = dataProvider(dataProviderName);
            if (custom) {
              return custom({
                url,
                method,
                payload: values,
                meta: combinedMeta,
                metaData: combinedMeta,
                headers: { ...config == null ? void 0 : config.headers }
              });
            }
            throw Error("Not implemented custom on data provider.");
          },
          {
            onSuccess: (data, {
              successNotification: successNotificationFromProp,
              config,
              meta,
              metaData
            }) => {
              const notificationConfig = typeof successNotificationFromProp === "function" ? successNotificationFromProp(data, {
                ...config,
                ...pickNotDeprecated2(meta, metaData) || {}
              }) : successNotificationFromProp;
              handleNotification(notificationConfig);
            },
            onError: (err, {
              errorNotification: errorNotificationFromProp,
              method,
              config,
              meta,
              metaData
            }) => {
              checkError(err);
              const notificationConfig = typeof errorNotificationFromProp === "function" ? errorNotificationFromProp(err, {
                ...config,
                ...pickNotDeprecated2(meta, metaData) || {}
              }) : errorNotificationFromProp;
              handleNotification(notificationConfig, {
                key: `${method}-notification`,
                message: translate(
                  "notifications.error",
                  { statusCode: err.statusCode },
                  `Error (status code: ${err.statusCode})`
                ),
                description: err.message,
                type: "error"
              });
            },
            mutationKey: keys2().data().mutation("customMutation").get(preferLegacyKeys),
            ...mutationOptions,
            meta: {
              ...mutationOptions == null ? void 0 : mutationOptions.meta,
              ...(0, import_devtools_internal20.getXRay)("useCustomMutation", preferLegacyKeys)
            }
          }
        );
        const { elapsedTime } = useLoadingOvertime({
          isLoading: mutation.isLoading,
          interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
          onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
        });
        return { ...mutation, overtime: { elapsedTime } };
      }, "useCustomMutation");
      var import_react16 = __require("react");
      var import_react152 = __toESM2(__require("react"));
      var defaultDataProvider = /* @__PURE__ */ __name2(() => {
        return {
          default: {
            create: () => Promise.resolve({ data: { id: 1 } }),
            createMany: () => Promise.resolve({ data: [] }),
            deleteOne: () => Promise.resolve({ data: { id: 1 } }),
            deleteMany: () => Promise.resolve({ data: [] }),
            getList: () => Promise.resolve({ data: [], total: 0 }),
            getMany: () => Promise.resolve({ data: [] }),
            getOne: () => Promise.resolve({ data: { id: 1 } }),
            update: () => Promise.resolve({ data: { id: 1 } }),
            updateMany: () => Promise.resolve({ data: [] }),
            custom: () => Promise.resolve({ data: {} }),
            getApiUrl: () => ""
          }
        };
      }, "defaultDataProvider");
      var DataContext = import_react152.default.createContext(
        defaultDataProvider()
      );
      var DataContextProvider = /* @__PURE__ */ __name2(({ children, ...rest }) => {
        let dataProviders;
        if (!rest.getList || !rest.getOne) {
          dataProviders = rest;
        } else {
          dataProviders = {
            default: rest
          };
        }
        return /* @__PURE__ */ import_react152.default.createElement(DataContext.Provider, { value: dataProviders }, children);
      }, "DataContextProvider");
      var useDataProvider3 = /* @__PURE__ */ __name2(() => {
        const context = (0, import_react16.useContext)(DataContext);
        const handleDataProvider = (0, import_react16.useCallback)(
          (dataProviderName) => {
            if (dataProviderName) {
              const dataProvider = context[dataProviderName];
              if (!dataProvider) {
                throw new Error(
                  `"${dataProviderName}" Data provider not found`
                );
              }
              return context[dataProviderName];
            }
            if (context.default) {
              return context.default;
            } else
              throw new Error(
                `There is no "default" data provider. Please pass dataProviderName.`
              );
          },
          [context]
        );
        return handleDataProvider;
      }, "useDataProvider");
      var import_devtools_internal21 = require_dist2();
      var import_react_query22 = __require("@tanstack/react-query");
      var useInfiniteList = /* @__PURE__ */ __name2(({
        resource: resourceFromProp,
        config,
        filters,
        hasPagination,
        pagination,
        sorters,
        queryOptions,
        successNotification,
        errorNotification,
        meta,
        metaData,
        liveMode,
        onLiveEvent,
        liveParams,
        dataProviderName,
        overtimeOptions
      }) => {
        const { resources, resource, identifier } = useResource4(resourceFromProp);
        const dataProvider = useDataProvider3();
        const translate = useTranslate();
        const authProvider = useActiveAuthProvider();
        const { mutate: checkError } = useOnError({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const handleNotification = useHandleNotification();
        const getMeta = useMeta();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const pickedDataProvider = pickDataProvider2(
          identifier,
          dataProviderName,
          resources
        );
        const preferredMeta = pickNotDeprecated2(meta, metaData);
        const prefferedFilters = pickNotDeprecated2(filters, config == null ? void 0 : config.filters);
        const prefferedSorters = pickNotDeprecated2(sorters, config == null ? void 0 : config.sort);
        const prefferedHasPagination = pickNotDeprecated2(
          hasPagination,
          config == null ? void 0 : config.hasPagination
        );
        const prefferedPagination = handlePaginationParams({
          pagination,
          configPagination: config == null ? void 0 : config.pagination,
          hasPagination: prefferedHasPagination
        });
        const isServerPagination = prefferedPagination.mode === "server";
        const notificationValues = {
          meta: preferredMeta,
          metaData: preferredMeta,
          filters: prefferedFilters,
          hasPagination: isServerPagination,
          pagination: prefferedPagination,
          sorters: prefferedSorters,
          config: {
            ...config,
            sort: prefferedSorters
          }
        };
        const isEnabled = (queryOptions == null ? void 0 : queryOptions.enabled) === void 0 || (queryOptions == null ? void 0 : queryOptions.enabled) === true;
        const combinedMeta = getMeta({ resource, meta: preferredMeta });
        const { getList } = dataProvider(pickedDataProvider);
        useResourceSubscription({
          resource: identifier,
          types: ["*"],
          params: {
            meta: combinedMeta,
            metaData: combinedMeta,
            pagination: prefferedPagination,
            hasPagination: isServerPagination,
            sort: prefferedSorters,
            sorters: prefferedSorters,
            filters: prefferedFilters,
            subscriptionType: "useList",
            ...liveParams
          },
          channel: `resources/${resource.name}`,
          enabled: isEnabled,
          liveMode,
          onLiveEvent,
          dataProviderName: pickedDataProvider,
          meta: {
            ...combinedMeta,
            dataProviderName
          }
        });
        const queryResponse = (0, import_react_query22.useInfiniteQuery)(
          keys2().data(pickedDataProvider).resource(identifier).action("infinite").params({
            ...preferredMeta || {},
            filters: prefferedFilters,
            hasPagination: isServerPagination,
            ...isServerPagination && {
              pagination: prefferedPagination
            },
            ...sorters && {
              sorters
            },
            ...(config == null ? void 0 : config.sort) && {
              sort: config == null ? void 0 : config.sort
            }
          }).get(preferLegacyKeys),
          ({ queryKey, pageParam, signal }) => {
            const paginationProperties = {
              ...prefferedPagination,
              current: pageParam
            };
            return getList({
              resource: resource.name,
              pagination: paginationProperties,
              hasPagination: isServerPagination,
              filters: prefferedFilters,
              sort: prefferedSorters,
              sorters: prefferedSorters,
              meta: {
                ...combinedMeta,
                queryContext: {
                  queryKey,
                  pageParam,
                  signal
                }
              },
              metaData: {
                ...combinedMeta,
                queryContext: {
                  queryKey,
                  pageParam,
                  signal
                }
              }
            }).then(({ data, total, ...rest }) => {
              return {
                data,
                total,
                pagination: paginationProperties,
                ...rest
              };
            });
          },
          {
            getNextPageParam: (lastPage) => getNextPageParam(lastPage),
            getPreviousPageParam: (lastPage) => getPreviousPageParam(lastPage),
            ...queryOptions,
            onSuccess: (data) => {
              var _a;
              (_a = queryOptions == null ? void 0 : queryOptions.onSuccess) == null ? void 0 : _a.call(queryOptions, data);
              const notificationConfig = typeof successNotification === "function" ? successNotification(
                data,
                notificationValues,
                identifier
              ) : successNotification;
              handleNotification(notificationConfig);
            },
            onError: (err) => {
              var _a;
              checkError(err);
              (_a = queryOptions == null ? void 0 : queryOptions.onError) == null ? void 0 : _a.call(queryOptions, err);
              const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, notificationValues, identifier) : errorNotification;
              handleNotification(notificationConfig, {
                key: `${identifier}-useInfiniteList-notification`,
                message: translate(
                  "notifications.error",
                  { statusCode: err.statusCode },
                  `Error (status code: ${err.statusCode})`
                ),
                description: err.message,
                type: "error"
              });
            },
            meta: {
              ...queryOptions == null ? void 0 : queryOptions.meta,
              ...(0, import_devtools_internal21.getXRay)("useInfiniteList", preferLegacyKeys)
            }
          }
        );
        const { elapsedTime } = useLoadingOvertime({
          isLoading: queryResponse.isFetching,
          interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
          onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
        });
        return { ...queryResponse, overtime: { elapsedTime } };
      }, "useInfiniteList");
      var import_react17 = __toESM2(__require("react"));
      var LiveContext = import_react17.default.createContext(void 0);
      var LiveContextProvider = /* @__PURE__ */ __name2(({
        liveProvider,
        children
      }) => {
        return /* @__PURE__ */ import_react17.default.createElement(LiveContext.Provider, { value: liveProvider }, children);
      }, "LiveContextProvider");
      var import_react27 = __require("react");
      var import_react_query23 = __require("@tanstack/react-query");
      var import_react25 = __require("react");
      var import_react20 = __toESM2(__require("react"));
      var import_react19 = __require("react");
      var import_react18 = __require("react");
      var import_isEqual2 = __toESM2(__require("lodash/isEqual"));
      var useMemoized = /* @__PURE__ */ __name2((value) => {
        const ref = (0, import_react18.useRef)(value);
        if (!(0, import_isEqual2.default)(ref.current, value)) {
          ref.current = value;
        }
        return ref.current;
      }, "useMemoized");
      var useDeepMemo = /* @__PURE__ */ __name2((fn, dependencies) => {
        const memoizedDependencies = useMemoized(dependencies);
        const value = (0, import_react19.useMemo)(fn, memoizedDependencies);
        return value;
      }, "useDeepMemo");
      var ResourceContext = import_react20.default.createContext({
        resources: []
      });
      var ResourceContextProvider = /* @__PURE__ */ __name2(({ resources: providedResources, children }) => {
        const resources = useDeepMemo(() => {
          return legacyResourceTransform(providedResources ?? []);
        }, [providedResources]);
        return /* @__PURE__ */ import_react20.default.createElement(ResourceContext.Provider, { value: { resources } }, children);
      }, "ResourceContextProvider");
      var import_react21 = __toESM2(__require("react"));
      var RouterPickerContext = import_react21.default.createContext("new");
      var RouterPickerProvider = RouterPickerContext.Provider;
      var useRouterType = /* @__PURE__ */ __name2(() => {
        const value = import_react21.default.useContext(RouterPickerContext);
        return value;
      }, "useRouterType");
      var import_react24 = __toESM2(__require("react"));
      var import_react222 = __toESM2(__require("react"));
      var defaultBindings = {};
      var RouterBindingsContext = (0, import_react222.createContext)(defaultBindings);
      var RouterBindingsProvider = /* @__PURE__ */ __name2(({ children, router }) => {
        return /* @__PURE__ */ import_react222.default.createElement(RouterBindingsContext.Provider, { value: router ?? defaultBindings }, children);
      }, "RouterBindingsProvider");
      var import_react23 = __toESM2(__require("react"));
      var useParse = /* @__PURE__ */ __name2(() => {
        const bindings = (0, import_react23.useContext)(RouterBindingsContext);
        const useParse2 = import_react23.default.useMemo(
          () => (bindings == null ? void 0 : bindings.parse) ?? (() => () => {
            return {};
          }),
          [bindings == null ? void 0 : bindings.parse]
        );
        const parse2 = useParse2();
        return parse2;
      }, "useParse");
      var useParsed = /* @__PURE__ */ __name2(() => {
        const parse2 = useParse();
        const parsed = import_react24.default.useMemo(() => parse2(), [parse2]);
        return parsed;
      }, "useParsed");
      function useResource4(args) {
        const { resources } = (0, import_react25.useContext)(ResourceContext);
        const routerType = useRouterType();
        const params = useParsed();
        const oldProps = {
          resourceName: args && typeof args !== "string" ? args.resourceName : args,
          resourceNameOrRouteName: args && typeof args !== "string" ? args.resourceNameOrRouteName : args,
          recordItemId: args && typeof args !== "string" ? args.recordItemId : void 0
        };
        const select = /* @__PURE__ */ __name2((resourceName, force = true) => {
          const isLegacy = routerType === "legacy";
          const pickedResource = pickResource(resourceName, resources, isLegacy);
          if (pickedResource) {
            return {
              resource: pickedResource,
              identifier: pickedResource.identifier ?? pickedResource.name
            };
          }
          if (force) {
            const resource2 = {
              name: resourceName,
              identifier: resourceName
            };
            const identifier2 = resource2.identifier ?? resource2.name;
            return {
              resource: resource2,
              identifier: identifier2
            };
          }
          return void 0;
        }, "select");
        const resourceWithRoute = useResourceWithRoute();
        const { useParams } = useRouterContext();
        const legacyParams = useParams();
        if (routerType === "legacy") {
          const resourceKeyToCheck = oldProps.resourceNameOrRouteName ? oldProps.resourceNameOrRouteName : legacyParams.resource;
          const legacyResource = resourceKeyToCheck ? resourceWithRoute(resourceKeyToCheck) : void 0;
          const legacyId = (oldProps == null ? void 0 : oldProps.recordItemId) ?? legacyParams.id;
          const legacyAction = legacyParams.action;
          const legacyResourceName = (oldProps == null ? void 0 : oldProps.resourceName) ?? (legacyResource == null ? void 0 : legacyResource.name);
          const legacyIdentifier = (legacyResource == null ? void 0 : legacyResource.identifier) ?? (legacyResource == null ? void 0 : legacyResource.name);
          return {
            resources,
            resource: legacyResource,
            resourceName: legacyResourceName,
            id: legacyId,
            action: legacyAction,
            select,
            identifier: legacyIdentifier
          };
        }
        let resource = void 0;
        const identifier = typeof args === "string" ? args : oldProps == null ? void 0 : oldProps.resourceNameOrRouteName;
        if (identifier) {
          const pickedFromProps = pickResource(identifier, resources);
          if (pickedFromProps) {
            resource = pickedFromProps;
          } else {
            resource = {
              name: identifier
            };
          }
        } else if (params == null ? void 0 : params.resource) {
          resource = params.resource;
        }
        return {
          resources,
          resource,
          resourceName: resource == null ? void 0 : resource.name,
          id: params.id,
          action: params.action,
          select,
          identifier: (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name)
        };
      }
      __name(useResource4, "useResource");
      __name2(useResource4, "useResource");
      var import_react26 = __require("react");
      var useResourceWithRoute = /* @__PURE__ */ __name2(() => {
        const { resources } = (0, import_react26.useContext)(ResourceContext);
        const resourceWithRoute = (0, import_react26.useCallback)(
          (route) => {
            const picked = pickResource(route, resources, true);
            if (picked) {
              return picked;
            }
            return { name: route, route };
          },
          [resources]
        );
        return resourceWithRoute;
      }, "useResourceWithRoute");
      var useInvalidate = /* @__PURE__ */ __name2(() => {
        const { resources } = useResource4();
        const queryClient = (0, import_react_query23.useQueryClient)();
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const invalidate = (0, import_react27.useCallback)(
          async ({
            resource,
            dataProviderName,
            invalidates,
            id,
            invalidationFilters = { type: "all", refetchType: "active" },
            invalidationOptions = { cancelRefetch: false }
          }) => {
            if (invalidates === false) {
              return;
            }
            const dp = pickDataProvider2(resource, dataProviderName, resources);
            const queryKey = keys2().data(dp).resource(resource ?? "");
            await Promise.all(
              invalidates.map((key) => {
                switch (key) {
                  case "all":
                    return queryClient.invalidateQueries(
                      keys2().data(dp).get(preferLegacyKeys),
                      invalidationFilters,
                      invalidationOptions
                    );
                  case "list":
                    return queryClient.invalidateQueries(
                      queryKey.action("list").get(preferLegacyKeys),
                      invalidationFilters,
                      invalidationOptions
                    );
                  case "many":
                    return queryClient.invalidateQueries(
                      queryKey.action("many").get(preferLegacyKeys),
                      invalidationFilters,
                      invalidationOptions
                    );
                  case "resourceAll":
                    return queryClient.invalidateQueries(
                      queryKey.get(preferLegacyKeys),
                      invalidationFilters,
                      invalidationOptions
                    );
                  case "detail":
                    return queryClient.invalidateQueries(
                      queryKey.action("one").id(id || "").get(preferLegacyKeys),
                      invalidationFilters,
                      invalidationOptions
                    );
                  default:
                    return;
                }
              })
            );
            return;
          },
          []
        );
        return invalidate;
      }, "useInvalidate");
      var import_react28 = __require("react");
      var useResourceSubscription = /* @__PURE__ */ __name2(({
        resource: resourceFromProp,
        params,
        channel,
        types,
        enabled = true,
        liveMode: liveModeFromProp,
        onLiveEvent,
        dataProviderName: dataProviderNameFromProps,
        meta
      }) => {
        var _a;
        const { resource, identifier } = useResource4(resourceFromProp);
        const liveDataContext = (0, import_react28.useContext)(LiveContext);
        const {
          liveMode: liveModeFromContext,
          onLiveEvent: onLiveEventContextCallback
        } = (0, import_react28.useContext)(RefineContext);
        const liveMode = liveModeFromProp ?? liveModeFromContext;
        const invalidate = useInvalidate();
        const dataProviderName = dataProviderNameFromProps ?? (meta == null ? void 0 : meta.dataProviderName) ?? ((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.dataProviderName);
        (0, import_react28.useEffect)(() => {
          let subscription;
          const callback = /* @__PURE__ */ __name2((event) => {
            if (liveMode === "auto") {
              invalidate({
                resource: identifier,
                dataProviderName,
                invalidates: ["resourceAll"],
                invalidationFilters: {
                  type: "active",
                  refetchType: "active"
                },
                invalidationOptions: { cancelRefetch: false }
              });
            }
            onLiveEvent == null ? void 0 : onLiveEvent(event);
            onLiveEventContextCallback == null ? void 0 : onLiveEventContextCallback(event);
          }, "callback");
          if (liveMode && liveMode !== "off" && enabled) {
            subscription = liveDataContext == null ? void 0 : liveDataContext.subscribe({
              channel,
              params: {
                resource: resource == null ? void 0 : resource.name,
                ...params
              },
              types,
              callback,
              dataProviderName,
              meta: {
                ...meta,
                dataProviderName
              }
            });
          }
          return () => {
            if (subscription) {
              liveDataContext == null ? void 0 : liveDataContext.unsubscribe(subscription);
            }
          };
        }, [enabled]);
      }, "useResourceSubscription");
      var import_react29 = __require("react");
      var useLiveMode = /* @__PURE__ */ __name2((liveMode) => {
        const { liveMode: liveModeFromContext } = (0, import_react29.useContext)(RefineContext);
        return liveMode ?? liveModeFromContext;
      }, "useLiveMode");
      var import_react30 = __require("react");
      var useSubscription = /* @__PURE__ */ __name2(({
        params,
        channel,
        types = ["*"],
        enabled = true,
        onLiveEvent,
        dataProviderName = "default",
        meta
      }) => {
        const liveDataContext = (0, import_react30.useContext)(LiveContext);
        (0, import_react30.useEffect)(() => {
          let subscription;
          if (enabled) {
            subscription = liveDataContext == null ? void 0 : liveDataContext.subscribe({
              channel,
              params,
              types,
              callback: onLiveEvent,
              dataProviderName,
              meta: {
                ...meta,
                dataProviderName
              }
            });
          }
          return () => {
            if (subscription) {
              liveDataContext == null ? void 0 : liveDataContext.unsubscribe(subscription);
            }
          };
        }, [enabled]);
      }, "useSubscription");
      var import_react31 = __require("react");
      var usePublish = /* @__PURE__ */ __name2(() => {
        const liveContext = (0, import_react31.useContext)(LiveContext);
        return liveContext == null ? void 0 : liveContext.publish;
      }, "usePublish");
      var import_react322 = __require("react");
      var useCancelNotification = /* @__PURE__ */ __name2(() => {
        const { notifications, notificationDispatch } = (0, import_react322.useContext)(UndoableQueueContext);
        return { notifications, notificationDispatch };
      }, "useCancelNotification");
      var import_react34 = __require("react");
      var import_react33 = __toESM2(__require("react"));
      var NotificationContext = (0, import_react33.createContext)({});
      var NotificationContextProvider = /* @__PURE__ */ __name2(({ open, close, children }) => {
        return /* @__PURE__ */ import_react33.default.createElement(NotificationContext.Provider, { value: { open, close } }, children);
      }, "NotificationContextProvider");
      var useNotification = /* @__PURE__ */ __name2(() => {
        const { open, close } = (0, import_react34.useContext)(NotificationContext);
        return { open, close };
      }, "useNotification");
      var import_react35 = __require("react");
      var useHandleNotification = /* @__PURE__ */ __name2(() => {
        const { open } = useNotification();
        const handleNotification = (0, import_react35.useCallback)(
          (notification, fallbackNotification) => {
            if (notification !== false) {
              if (notification) {
                open == null ? void 0 : open(notification);
              } else if (fallbackNotification) {
                open == null ? void 0 : open(fallbackNotification);
              }
            }
          },
          []
        );
        return handleNotification;
      }, "useHandleNotification");
      var import_react37 = __require("react");
      var import_react36 = __toESM2(__require("react"));
      var TranslationContext2 = import_react36.default.createContext({});
      var TranslationContextProvider = /* @__PURE__ */ __name2(({ children, i18nProvider }) => {
        return /* @__PURE__ */ import_react36.default.createElement(
          TranslationContext2.Provider,
          {
            value: {
              i18nProvider
            }
          },
          children
        );
      }, "TranslationContextProvider");
      var useSetLocale = /* @__PURE__ */ __name2(() => {
        const { i18nProvider } = (0, import_react37.useContext)(TranslationContext2);
        return (0, import_react37.useCallback)((lang) => i18nProvider == null ? void 0 : i18nProvider.changeLocale(lang), []);
      }, "useSetLocale");
      var import_react38 = __require("react");
      var useTranslate = /* @__PURE__ */ __name2(() => {
        const { i18nProvider } = (0, import_react38.useContext)(TranslationContext2);
        const fn = (0, import_react38.useMemo)(() => {
          function translate(key, options, defaultMessage) {
            return (i18nProvider == null ? void 0 : i18nProvider.translate(key, options, defaultMessage)) ?? defaultMessage ?? (typeof options === "string" && typeof defaultMessage === "undefined" ? options : key);
          }
          __name(translate, "translate");
          __name2(translate, "translate");
          return translate;
        }, [i18nProvider]);
        return fn;
      }, "useTranslate");
      var import_react39 = __require("react");
      var useGetLocale = /* @__PURE__ */ __name2(() => {
        const { i18nProvider } = (0, import_react39.useContext)(TranslationContext2);
        return (0, import_react39.useCallback)(() => i18nProvider == null ? void 0 : i18nProvider.getLocale(), []);
      }, "useGetLocale");
      var import_react40 = __require("react");
      var import_export_to_csv_fix_source_map = __require("export-to-csv-fix-source-map");
      var useExport = /* @__PURE__ */ __name2(({
        resourceName,
        resource: resourceFromProps,
        sorter,
        sorters,
        filters,
        maxItemCount,
        pageSize = 20,
        mapData = /* @__PURE__ */ __name2((item) => item, "mapData"),
        exportOptions,
        meta,
        metaData,
        dataProviderName,
        onError
      } = {}) => {
        const [isLoading, setIsLoading] = (0, import_react40.useState)(false);
        const dataProvider = useDataProvider3();
        const getMeta = useMeta();
        const { resource, resources, identifier } = useResource4(
          pickNotDeprecated2(resourceFromProps, resourceName)
        );
        const getFriendlyName = useUserFriendlyName();
        const filename = `${getFriendlyName(
          identifier,
          "plural"
        )}-${(/* @__PURE__ */ new Date()).toLocaleString()}`;
        const { getList } = dataProvider(
          pickDataProvider2(identifier, dataProviderName, resources)
        );
        const combinedMeta = getMeta({
          resource,
          meta: pickNotDeprecated2(meta, metaData)
        });
        const triggerExport = /* @__PURE__ */ __name2(async () => {
          setIsLoading(true);
          let rawData = [];
          let current = 1;
          let preparingData = true;
          while (preparingData) {
            try {
              const { data, total } = await getList({
                resource: (resource == null ? void 0 : resource.name) ?? "",
                filters,
                sort: pickNotDeprecated2(sorters, sorter),
                sorters: pickNotDeprecated2(sorters, sorter),
                pagination: {
                  current,
                  pageSize,
                  mode: "server"
                },
                meta: combinedMeta,
                metaData: combinedMeta
              });
              current++;
              rawData.push(...data);
              if (maxItemCount && rawData.length >= maxItemCount) {
                rawData = rawData.slice(0, maxItemCount);
                preparingData = false;
              }
              if (total === rawData.length) {
                preparingData = false;
              }
            } catch (error) {
              setIsLoading(false);
              preparingData = false;
              onError == null ? void 0 : onError(error);
              return;
            }
          }
          const csvExporter = new import_export_to_csv_fix_source_map.ExportToCsv({
            filename,
            useKeysAsHeaders: true,
            ...exportOptions
          });
          csvExporter.generateCsv(rawData.map(mapData));
          setIsLoading(false);
        }, "triggerExport");
        return {
          isLoading,
          triggerExport
        };
      }, "useExport");
      var import_react41 = __toESM2(__require("react"));
      var import_warn_once2 = __toESM2(__require("warn-once"));
      var import_debounce = __toESM2(__require("lodash/debounce"));
      var useForm3 = /* @__PURE__ */ __name2(({
        resource: resourceFromProps,
        action: actionFromProps,
        id: idFromProps,
        onMutationSuccess,
        onMutationError,
        redirect: redirectFromProps,
        successNotification,
        errorNotification,
        meta,
        metaData,
        queryMeta,
        mutationMeta,
        mutationMode: mutationModeProp,
        liveMode,
        onLiveEvent,
        liveParams,
        undoableTimeout,
        dataProviderName,
        invalidates,
        queryOptions,
        createMutationOptions,
        updateMutationOptions,
        overtimeOptions,
        autoSave,
        optimisticUpdateMap
      } = {}) => {
        const invalidate = useInvalidate();
        const { options } = useRefineContext();
        const getMeta = useMeta();
        const {
          resource,
          id: idFromRoute,
          action: actionFromRoute,
          identifier
        } = useResource4(resourceFromProps);
        const { identifier: inferredIdentifier } = useResource4();
        const getDefaultId = /* @__PURE__ */ __name2(() => {
          const idFromPropsOrRoute = idFromProps ?? idFromRoute;
          if (resourceFromProps && resourceFromProps !== inferredIdentifier) {
            return idFromProps;
          }
          return idFromPropsOrRoute;
        }, "getDefaultId");
        const defaultId = getDefaultId();
        const [id, setId] = import_react41.default.useState(defaultId);
        import_react41.default.useEffect(() => {
          setId(defaultId);
        }, [defaultId]);
        const getAction = /* @__PURE__ */ __name2(() => {
          if (actionFromProps)
            return actionFromProps;
          else if (actionFromRoute === "edit" || actionFromRoute === "clone")
            return actionFromRoute;
          else
            return "create";
        }, "getAction");
        const action = getAction();
        const combinedMeta = getMeta({
          resource,
          meta: pickNotDeprecated2(meta, metaData)
        });
        const { mutationMode: mutationModeContext } = useMutationMode();
        const mutationMode = mutationModeProp ?? mutationModeContext;
        const isCreate = action === "create";
        const isEdit = action === "edit";
        const isClone = action === "clone";
        (0, import_warn_once2.default)(
          (isClone || isEdit) && Boolean(resourceFromProps) && !Boolean(idFromProps) && (queryOptions == null ? void 0 : queryOptions.enabled) !== false,
          `[useForm]: action: "${action}", resource: "${identifier}", id: ${id} 

If you don't use the \`setId\` method to set the \`id\`, you should pass the \`id\` prop to \`useForm\`. Otherwise, \`useForm\` will not be able to infer the \`id\` from the current URL. 

See https://refine.dev/docs/api-reference/core/hooks/useForm/#resource`
        );
        const designatedRedirectAction = redirectPage({
          redirectFromProps,
          action,
          redirectOptions: options.redirect
        });
        const enableQuery = id !== void 0 && (isEdit || isClone);
        const queryResult = useOne({
          resource: identifier,
          id: id ?? "",
          queryOptions: {
            enabled: enableQuery,
            ...queryOptions
          },
          liveMode,
          onLiveEvent,
          liveParams,
          meta: { ...combinedMeta, ...queryMeta },
          metaData: { ...combinedMeta, ...queryMeta },
          dataProviderName
        });
        const { isFetching: isFetchingQuery } = queryResult;
        const mutationResultCreate = useCreate({
          mutationOptions: createMutationOptions
        });
        const { mutate: mutateCreate, isLoading: isLoadingCreate } = mutationResultCreate;
        const mutationResultUpdate = useUpdate({
          mutationOptions: updateMutationOptions
        });
        const { mutate: mutateUpdate, isLoading: isLoadingUpdate } = mutationResultUpdate;
        const autoSaveMutation = useUpdate(
          {}
        );
        const { setWarnWhen } = useWarnAboutChange();
        const handleSubmitWithRedirect = useRedirectionAfterSubmission();
        const onFinishCreate = /* @__PURE__ */ __name2(async (values) => {
          setWarnWhen(false);
          const onSuccess = /* @__PURE__ */ __name2((id2) => {
            handleSubmitWithRedirect({
              redirect: designatedRedirectAction,
              resource,
              id: id2,
              meta: pickNotDeprecated2(meta, metaData)
            });
          }, "onSuccess");
          if (mutationMode !== "pessimistic") {
            setTimeout(() => {
              onSuccess();
            });
          }
          return new Promise(
            (resolve, reject) => {
              if (mutationMode !== "pessimistic") {
                resolve();
              }
              if (!resource)
                return;
              return mutateCreate(
                {
                  values,
                  resource: identifier ?? resource.name,
                  successNotification,
                  errorNotification,
                  meta: { ...combinedMeta, ...mutationMeta },
                  metaData: { ...combinedMeta, ...mutationMeta },
                  dataProviderName,
                  invalidates
                },
                {
                  onSuccess: (data, _, context) => {
                    var _a;
                    if (onMutationSuccess) {
                      onMutationSuccess(data, values, context);
                    }
                    const responseId = (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.id;
                    onSuccess(responseId);
                    resolve(data);
                  },
                  onError: (error, _, context) => {
                    if (onMutationError) {
                      return onMutationError(error, values, context);
                    }
                    reject();
                  }
                }
              );
            }
          );
        }, "onFinishCreate");
        import_react41.default.useEffect(() => {
          return () => {
            if ((autoSave == null ? void 0 : autoSave.invalidateOnUnmount) && autoSaveMutation.status === "success") {
              invalidate({
                id,
                invalidates: invalidates || ["list", "many", "detail"],
                dataProviderName,
                resource: identifier
              });
            }
          };
        }, [autoSave == null ? void 0 : autoSave.invalidateOnUnmount, autoSaveMutation.status]);
        const onFinishAutoSaveMutation = /* @__PURE__ */ __name2((values) => {
          if (!resource || !isEdit)
            return;
          const variables = {
            id: id ?? "",
            values,
            resource: identifier ?? resource.name,
            successNotification: false,
            errorNotification: false,
            meta: { ...combinedMeta, ...mutationMeta },
            metaData: { ...combinedMeta, ...mutationMeta },
            dataProviderName,
            invalidates: [],
            mutationMode: "pessimistic"
          };
          return autoSaveMutation.mutate(variables, {
            onSuccess: (data, _, context) => {
              if (onMutationSuccess) {
                onMutationSuccess(data, values, context, true);
              }
            },
            onError: (error, _, context) => {
              if (onMutationError) {
                return onMutationError(error, values, context, true);
              }
            }
          });
        }, "onFinishAutoSaveMutation");
        const onFinishAutoSave = (0, import_debounce.default)((allValues) => {
          return onFinishAutoSaveMutation(allValues);
        }, (autoSave == null ? void 0 : autoSave.debounce) || 1e3);
        const onFinishUpdate = /* @__PURE__ */ __name2(async (values) => {
          setWarnWhen(false);
          if (!resource)
            return;
          const variables = {
            id: id ?? "",
            values,
            resource: identifier ?? resource.name,
            mutationMode,
            undoableTimeout,
            successNotification,
            errorNotification,
            meta: { ...combinedMeta, ...mutationMeta },
            metaData: { ...combinedMeta, ...mutationMeta },
            dataProviderName,
            invalidates,
            optimisticUpdateMap
          };
          const onSuccess = /* @__PURE__ */ __name2(() => {
            handleSubmitWithRedirect({
              redirect: designatedRedirectAction,
              resource,
              id,
              meta: pickNotDeprecated2(meta, metaData)
            });
          }, "onSuccess");
          if (mutationMode !== "pessimistic") {
            setTimeout(() => {
              onSuccess();
            });
          }
          return new Promise(
            (resolve, reject) => {
              if (mutationMode !== "pessimistic") {
                resolve();
              }
              return setTimeout(() => {
                mutateUpdate(variables, {
                  onSuccess: (data, _, context) => {
                    if (onMutationSuccess) {
                      onMutationSuccess(data, values, context);
                    }
                    if (mutationMode === "pessimistic") {
                      onSuccess();
                    }
                    resolve(data);
                  },
                  onError: (error, _, context) => {
                    if (onMutationError) {
                      return onMutationError(error, values, context);
                    }
                    reject();
                  }
                });
              });
            }
          );
        }, "onFinishUpdate");
        const createResult = {
          formLoading: isFetchingQuery || isLoadingCreate,
          mutationResult: mutationResultCreate,
          onFinish: onFinishCreate
        };
        const editResult = {
          formLoading: isFetchingQuery || isLoadingUpdate,
          mutationResult: mutationResultUpdate,
          onFinish: onFinishUpdate
        };
        const result = isCreate || isClone ? createResult : editResult;
        const { elapsedTime } = useLoadingOvertime({
          isLoading: result.mutationResult.isLoading || queryResult.isFetching,
          interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
          onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
        });
        return {
          ...result,
          queryResult,
          onFinishAutoSave,
          autoSaveProps: {
            status: autoSaveMutation.status,
            data: autoSaveMutation.data,
            error: autoSaveMutation.error
          },
          id,
          setId,
          redirect: (redirect, idFromFunction) => {
            handleSubmitWithRedirect({
              redirect: redirect !== void 0 ? redirect : isEdit ? "list" : "edit",
              resource,
              id: idFromFunction ?? id,
              meta: pickNotDeprecated2(meta, metaData)
            });
          },
          overtime: {
            elapsedTime
          }
        };
      }, "useForm");
      var import_react422 = __require("react");
      var useRedirectionAfterSubmission = /* @__PURE__ */ __name2(() => {
        const { show, edit, list, create } = useNavigation();
        const handleSubmitWithRedirect = (0, import_react422.useCallback)(
          ({
            redirect,
            resource,
            id,
            meta = {}
          }) => {
            if (redirect && resource) {
              if (!!resource.show && redirect === "show" && id) {
                return show(resource, id, void 0, meta);
              }
              if (!!resource.edit && redirect === "edit" && id) {
                return edit(resource, id, void 0, meta);
              }
              if (!!resource.create && redirect === "create") {
                return create(resource, void 0, meta);
              }
              return list(resource, "push", meta);
            } else {
              return;
            }
          },
          []
        );
        return handleSubmitWithRedirect;
      }, "useRedirectionAfterSubmission");
      var import_react44 = __toESM2(__require("react"));
      var import_react43 = __toESM2(__require("react"));
      var useGetToPath = /* @__PURE__ */ __name2(() => {
        const routerType = useRouterType();
        const { resource: resourceFromRoute, resources } = useResource4();
        const parsed = useParsed();
        const fn = import_react43.default.useCallback(
          ({ resource, action, meta }) => {
            var _a;
            const selectedResource = resource || resourceFromRoute;
            if (!selectedResource) {
              return void 0;
            }
            const actionRoutes = getActionRoutesFromResource(
              selectedResource,
              resources,
              routerType === "legacy"
            );
            const actionRoute = (_a = actionRoutes.find(
              (item) => item.action === action
            )) == null ? void 0 : _a.route;
            if (!actionRoute) {
              return void 0;
            }
            const composed = composeRoute(
              actionRoute,
              selectedResource == null ? void 0 : selectedResource.meta,
              parsed,
              meta
            );
            return composed;
          },
          [resources, resourceFromRoute, parsed]
        );
        return fn;
      }, "useGetToPath");
      var useGo = /* @__PURE__ */ __name2(() => {
        const bindings = (0, import_react44.useContext)(RouterBindingsContext);
        const { select: resourceSelect } = useResource4();
        const getToPath = useGetToPath();
        const useGo2 = import_react44.default.useMemo(
          () => (bindings == null ? void 0 : bindings.go) ?? (() => () => void 0),
          [bindings == null ? void 0 : bindings.go]
        );
        const goFromRouter = useGo2();
        const go = (0, import_react44.useCallback)(
          (config) => {
            if (typeof config.to !== "object") {
              return goFromRouter({ ...config, to: config.to });
            }
            const { resource } = resourceSelect(config.to.resource);
            handleResourceErrors(config.to, resource);
            const newTo = getToPath({
              resource,
              action: config.to.action,
              meta: {
                id: config.to.id
              }
            });
            return goFromRouter({
              ...config,
              to: newTo
            });
          },
          [resourceSelect, goFromRouter]
        );
        return go;
      }, "useGo");
      var handleResourceErrors = /* @__PURE__ */ __name2((to, resource) => {
        if (!(to == null ? void 0 : to.action) || !(to == null ? void 0 : to.resource)) {
          throw new Error(`[useGo]: "action" or "resource" is required.`);
        }
        if (["edit", "show", "clone"].includes(to == null ? void 0 : to.action) && !to.id) {
          throw new Error(
            `[useGo]: [action: ${to.action}] requires an "id" for resource [resource: ${to.resource}]`
          );
        }
        const actionUrl = resource[to.action];
        if (!actionUrl) {
          throw new Error(
            `[useGo]: [action: ${to.action}] is not defined for [resource: ${to.resource}]`
          );
        }
      }, "handleResourceErrors");
      var import_react45 = __toESM2(__require("react"));
      var useBack = /* @__PURE__ */ __name2(() => {
        const bindings = (0, import_react45.useContext)(RouterBindingsContext);
        const useBack2 = import_react45.default.useMemo(
          () => (bindings == null ? void 0 : bindings.back) ?? (() => () => void 0),
          [bindings == null ? void 0 : bindings.back]
        );
        const back = useBack2();
        return back;
      }, "useBack");
      var useNavigation = /* @__PURE__ */ __name2(() => {
        const { resources } = useResource4();
        const routerType = useRouterType();
        const { useHistory } = useRouterContext();
        const history = useHistory();
        const parsed = useParsed();
        const go = useGo();
        const back = useBack();
        const handleUrl = /* @__PURE__ */ __name2((url, type = "push") => {
          if (routerType === "legacy") {
            history[type](url);
          } else {
            go({ to: url, type });
          }
        }, "handleUrl");
        const createUrl = /* @__PURE__ */ __name2((resource, meta = {}) => {
          var _a;
          if (routerType === "legacy") {
            const resourceItem = typeof resource === "string" ? pickResource(resource, resources, true) ?? {
              name: resource,
              route: resource
            } : resource;
            const createActionRoute = getActionRoutesFromResource(
              resourceItem,
              resources,
              true
            ).find((r) => r.action === "create");
            if (!createActionRoute) {
              return "";
            }
            return composeRoute(
              createActionRoute.route,
              resourceItem == null ? void 0 : resourceItem.meta,
              parsed,
              meta
            );
          } else {
            const resourceItem = typeof resource === "string" ? pickResource(resource, resources) ?? { name: resource } : resource;
            const createActionRoute = (_a = getActionRoutesFromResource(
              resourceItem,
              resources
            ).find((r) => r.action === "create")) == null ? void 0 : _a.route;
            if (!createActionRoute) {
              return "";
            }
            return go({
              to: composeRoute(
                createActionRoute,
                resourceItem == null ? void 0 : resourceItem.meta,
                parsed,
                meta
              ),
              type: "path"
            });
          }
        }, "createUrl");
        const editUrl = /* @__PURE__ */ __name2((resource, id, meta = {}) => {
          var _a;
          const encodedId = encodeURIComponent(id);
          if (routerType === "legacy") {
            const resourceItem = typeof resource === "string" ? pickResource(resource, resources, true) ?? {
              name: resource,
              route: resource
            } : resource;
            const editActionRoute = getActionRoutesFromResource(
              resourceItem,
              resources,
              true
            ).find((r) => r.action === "edit");
            if (!editActionRoute) {
              return "";
            }
            return composeRoute(
              editActionRoute.route,
              resourceItem == null ? void 0 : resourceItem.meta,
              parsed,
              {
                ...meta,
                id: encodedId
              }
            );
          } else {
            const resourceItem = typeof resource === "string" ? pickResource(resource, resources) ?? { name: resource } : resource;
            const editActionRoute = (_a = getActionRoutesFromResource(
              resourceItem,
              resources
            ).find((r) => r.action === "edit")) == null ? void 0 : _a.route;
            if (!editActionRoute) {
              return "";
            }
            return go({
              to: composeRoute(editActionRoute, resourceItem == null ? void 0 : resourceItem.meta, parsed, {
                ...meta,
                id: encodedId
              }),
              type: "path"
            });
          }
        }, "editUrl");
        const cloneUrl = /* @__PURE__ */ __name2((resource, id, meta = {}) => {
          var _a;
          const encodedId = encodeURIComponent(id);
          if (routerType === "legacy") {
            const resourceItem = typeof resource === "string" ? pickResource(resource, resources, true) ?? {
              name: resource,
              route: resource
            } : resource;
            const cloneActionRoute = getActionRoutesFromResource(
              resourceItem,
              resources,
              true
            ).find((r) => r.action === "clone");
            if (!cloneActionRoute) {
              return "";
            }
            return composeRoute(
              cloneActionRoute.route,
              resourceItem == null ? void 0 : resourceItem.meta,
              parsed,
              {
                ...meta,
                id: encodedId
              }
            );
          } else {
            const resourceItem = typeof resource === "string" ? pickResource(resource, resources) ?? { name: resource } : resource;
            const cloneActionRoute = (_a = getActionRoutesFromResource(
              resourceItem,
              resources
            ).find((r) => r.action === "clone")) == null ? void 0 : _a.route;
            if (!cloneActionRoute) {
              return "";
            }
            return go({
              to: composeRoute(cloneActionRoute, resourceItem == null ? void 0 : resourceItem.meta, parsed, {
                ...meta,
                id: encodedId
              }),
              type: "path"
            });
          }
        }, "cloneUrl");
        const showUrl = /* @__PURE__ */ __name2((resource, id, meta = {}) => {
          var _a;
          const encodedId = encodeURIComponent(id);
          if (routerType === "legacy") {
            const resourceItem = typeof resource === "string" ? pickResource(resource, resources, true) ?? {
              name: resource,
              route: resource
            } : resource;
            const showActionRoute = getActionRoutesFromResource(
              resourceItem,
              resources,
              true
            ).find((r) => r.action === "show");
            if (!showActionRoute) {
              return "";
            }
            return composeRoute(
              showActionRoute.route,
              resourceItem == null ? void 0 : resourceItem.meta,
              parsed,
              {
                ...meta,
                id: encodedId
              }
            );
          } else {
            const resourceItem = typeof resource === "string" ? pickResource(resource, resources) ?? { name: resource } : resource;
            const showActionRoute = (_a = getActionRoutesFromResource(
              resourceItem,
              resources
            ).find((r) => r.action === "show")) == null ? void 0 : _a.route;
            if (!showActionRoute) {
              return "";
            }
            return go({
              to: composeRoute(showActionRoute, resourceItem == null ? void 0 : resourceItem.meta, parsed, {
                ...meta,
                id: encodedId
              }),
              type: "path"
            });
          }
        }, "showUrl");
        const listUrl = /* @__PURE__ */ __name2((resource, meta = {}) => {
          var _a;
          if (routerType === "legacy") {
            const resourceItem = typeof resource === "string" ? pickResource(resource, resources, true) ?? {
              name: resource,
              route: resource
            } : resource;
            const listActionRoute = getActionRoutesFromResource(
              resourceItem,
              resources,
              true
            ).find((r) => r.action === "list");
            if (!listActionRoute) {
              return "";
            }
            return composeRoute(
              listActionRoute.route,
              resourceItem == null ? void 0 : resourceItem.meta,
              parsed,
              meta
            );
          } else {
            const resourceItem = typeof resource === "string" ? pickResource(resource, resources) ?? { name: resource } : resource;
            const listActionRoute = (_a = getActionRoutesFromResource(
              resourceItem,
              resources
            ).find((r) => r.action === "list")) == null ? void 0 : _a.route;
            if (!listActionRoute) {
              return "";
            }
            return go({
              to: composeRoute(
                listActionRoute,
                resourceItem == null ? void 0 : resourceItem.meta,
                parsed,
                meta
              ),
              type: "path"
            });
          }
        }, "listUrl");
        const create = /* @__PURE__ */ __name2((resource, type = "push", meta = {}) => {
          handleUrl(createUrl(resource, meta), type);
        }, "create");
        const edit = /* @__PURE__ */ __name2((resource, id, type = "push", meta = {}) => {
          handleUrl(editUrl(resource, id, meta), type);
        }, "edit");
        const clone = /* @__PURE__ */ __name2((resource, id, type = "push", meta = {}) => {
          handleUrl(cloneUrl(resource, id, meta), type);
        }, "clone");
        const show = /* @__PURE__ */ __name2((resource, id, type = "push", meta = {}) => {
          handleUrl(showUrl(resource, id, meta), type);
        }, "show");
        const list = /* @__PURE__ */ __name2((resource, type = "push", meta = {}) => {
          handleUrl(listUrl(resource, meta), type);
        }, "list");
        const push = /* @__PURE__ */ __name2((path, ...rest) => {
          if (routerType === "legacy") {
            history.push(path, ...rest);
          } else {
            go({ to: path, type: "push" });
          }
        }, "push");
        const replace = /* @__PURE__ */ __name2((path, ...rest) => {
          if (routerType === "legacy") {
            history.replace(path, ...rest);
          } else {
            go({ to: path, type: "replace" });
          }
        }, "replace");
        const goBack = /* @__PURE__ */ __name2(() => {
          if (routerType === "legacy") {
            history.goBack();
          } else {
            back();
          }
        }, "goBack");
        return {
          create,
          createUrl,
          edit,
          editUrl,
          clone,
          cloneUrl,
          show,
          showUrl,
          list,
          listUrl,
          push,
          replace,
          goBack
        };
      }, "useNavigation");
      var import_react46 = __toESM2(__require("react"));
      var import_warn_once3 = __toESM2(__require("warn-once"));
      var useShow = /* @__PURE__ */ __name2(({
        resource: resourceFromProp,
        id,
        successNotification,
        errorNotification,
        meta,
        metaData,
        liveMode,
        onLiveEvent,
        dataProviderName,
        queryOptions,
        overtimeOptions
      } = {}) => {
        const {
          resource,
          id: idFromRoute,
          identifier
        } = useResource4(resourceFromProp);
        const { identifier: inferredIdentifier } = useResource4();
        const getMeta = useMeta();
        const getDefaultId = /* @__PURE__ */ __name2(() => {
          const idFromPropsOrRoute = id ?? idFromRoute;
          if (resourceFromProp && resourceFromProp !== inferredIdentifier) {
            return id;
          }
          return idFromPropsOrRoute;
        }, "getDefaultId");
        const defaultId = getDefaultId();
        const [showId, setShowId] = (0, import_react46.useState)(defaultId);
        import_react46.default.useEffect(() => {
          setShowId(defaultId);
        }, [defaultId]);
        const combinedMeta = getMeta({
          resource,
          meta: pickNotDeprecated2(meta, metaData)
        });
        (0, import_warn_once3.default)(
          Boolean(resourceFromProp) && !Boolean(id),
          `[useShow]: resource: "${identifier}", id: ${id} 

If you don't use the \`setShowId\` method to set the \`showId\`, you should pass the \`id\` prop to \`useShow\`. Otherwise, \`useShow\` will not be able to infer the \`id\` from the current URL. 

See https://refine.dev/docs/api-reference/core/hooks/show/useShow/#resource`
        );
        const queryResult = useOne({
          resource: identifier,
          id: showId ?? "",
          queryOptions: {
            enabled: showId !== void 0,
            ...queryOptions
          },
          successNotification,
          errorNotification,
          meta: combinedMeta,
          metaData: combinedMeta,
          liveMode,
          onLiveEvent,
          dataProviderName
        });
        const { elapsedTime } = useLoadingOvertime({
          isLoading: queryResult.isFetching,
          interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
          onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
        });
        return {
          queryResult,
          showId,
          setShowId,
          overtime: { elapsedTime }
        };
      }, "useShow");
      var import_react47 = __require("react");
      var import_papaparse = __require("papaparse");
      var import_chunk = __toESM2(__require("lodash/chunk"));
      var useImport = /* @__PURE__ */ __name2(({
        resourceName,
        resource: resourceFromProps,
        mapData = /* @__PURE__ */ __name2((item) => item, "mapData"),
        paparseOptions,
        batchSize = Number.MAX_SAFE_INTEGER,
        onFinish,
        meta,
        metaData,
        onProgress,
        dataProviderName
      } = {}) => {
        const [processedAmount, setProcessedAmount] = (0, import_react47.useState)(0);
        const [totalAmount, setTotalAmount] = (0, import_react47.useState)(0);
        const [isLoading, setIsLoading] = (0, import_react47.useState)(false);
        const { resource, identifier } = useResource4(
          resourceFromProps ?? resourceName
        );
        const getMeta = useMeta();
        const createMany = useCreateMany();
        const create = useCreate();
        const combinedMeta = getMeta({
          resource,
          meta: pickNotDeprecated2(meta, metaData)
        });
        let mutationResult;
        if (batchSize === 1) {
          mutationResult = create;
        } else {
          mutationResult = createMany;
        }
        const handleCleanup = /* @__PURE__ */ __name2(() => {
          setTotalAmount(0);
          setProcessedAmount(0);
          setIsLoading(false);
        }, "handleCleanup");
        const handleFinish = /* @__PURE__ */ __name2((createdValues) => {
          const result = {
            succeeded: createdValues.filter(
              (item) => item.type === "success"
            ),
            errored: createdValues.filter(
              (item) => item.type === "error"
            )
          };
          onFinish == null ? void 0 : onFinish(result);
          setIsLoading(false);
        }, "handleFinish");
        (0, import_react47.useEffect)(() => {
          onProgress == null ? void 0 : onProgress({ totalAmount, processedAmount });
        }, [totalAmount, processedAmount]);
        const handleChange = /* @__PURE__ */ __name2(({ file }) => {
          handleCleanup();
          return new Promise(
            (resolve) => {
              setIsLoading(true);
              (0, import_papaparse.parse)(file, {
                complete: async ({ data }) => {
                  const values = importCSVMapper(data, mapData);
                  setTotalAmount(values.length);
                  if (batchSize === 1) {
                    const valueFns = values.map((value) => {
                      const fn = /* @__PURE__ */ __name2(async () => {
                        const response = await create.mutateAsync({
                          resource: identifier ?? "",
                          values: value,
                          successNotification: false,
                          errorNotification: false,
                          dataProviderName,
                          meta: combinedMeta,
                          metaData: combinedMeta
                        });
                        return { response, value };
                      }, "fn");
                      return fn;
                    });
                    const createdValues = await sequentialPromises(
                      valueFns,
                      ({ response, value }) => {
                        setProcessedAmount((currentAmount) => {
                          return currentAmount + 1;
                        });
                        return {
                          response: [response.data],
                          type: "success",
                          request: [value]
                        };
                      },
                      (error, index) => {
                        return {
                          response: [error],
                          type: "error",
                          request: [values[index]]
                        };
                      }
                    );
                    resolve(createdValues);
                  } else {
                    const chunks = (0, import_chunk.default)(values, batchSize);
                    const chunkedFns = chunks.map((chunkedValues) => {
                      const fn = /* @__PURE__ */ __name2(async () => {
                        const response = await createMany.mutateAsync({
                          resource: identifier ?? "",
                          values: chunkedValues,
                          successNotification: false,
                          errorNotification: false,
                          dataProviderName,
                          meta: combinedMeta,
                          metaData: combinedMeta
                        });
                        return {
                          response,
                          value: chunkedValues,
                          currentBatchLength: chunkedValues.length
                        };
                      }, "fn");
                      return fn;
                    });
                    const createdValues = await sequentialPromises(
                      chunkedFns,
                      ({ response, currentBatchLength, value }) => {
                        setProcessedAmount((currentAmount) => {
                          return currentAmount + currentBatchLength;
                        });
                        return {
                          response: response.data,
                          type: "success",
                          request: value
                        };
                      },
                      (error, index) => {
                        return {
                          response: [error],
                          type: "error",
                          request: chunks[index]
                        };
                      }
                    );
                    resolve(createdValues);
                  }
                },
                ...paparseOptions
              });
            }
          ).then((createdValues) => {
            handleFinish(createdValues);
            return createdValues;
          });
        }, "handleChange");
        return {
          inputProps: {
            type: "file",
            accept: ".csv",
            onChange: (event) => {
              if (event.target.files && event.target.files.length > 0) {
                handleChange({ file: event.target.files[0] });
              }
            }
          },
          mutationResult,
          isLoading,
          handleChange
        };
      }, "useImport");
      var import_react48 = __require("react");
      var useModal = /* @__PURE__ */ __name2(({
        defaultVisible = false
      } = {}) => {
        const [visible, setVisible] = (0, import_react48.useState)(defaultVisible);
        const show = (0, import_react48.useCallback)(() => setVisible(true), [visible]);
        const close = (0, import_react48.useCallback)(() => setVisible(false), [visible]);
        return {
          visible,
          show,
          close
        };
      }, "useModal");
      var useToPath = /* @__PURE__ */ __name2(({
        resource,
        action,
        meta,
        legacy
      }) => {
        const getToPath = useGetToPath();
        return getToPath({ resource, action, meta, legacy });
      }, "useToPath");
      var import_react49 = __toESM2(__require("react"));
      var useLink = /* @__PURE__ */ __name2(() => {
        const bindings = (0, import_react49.useContext)(RouterBindingsContext);
        if (bindings == null ? void 0 : bindings.Link) {
          return bindings.Link;
        }
        const FallbackLink = /* @__PURE__ */ __name2(({
          to,
          ...rest
        }) => /* @__PURE__ */ import_react49.default.createElement("a", { href: to, ...rest }), "FallbackLink");
        return FallbackLink;
      }, "useLink");
      var import_react51 = __require("react");
      var import_react50 = __toESM2(__require("react"));
      var defaultProvider = {
        useHistory: () => false,
        useLocation: () => false,
        useParams: () => ({}),
        Prompt: () => null,
        Link: () => null
      };
      var LegacyRouterContext = import_react50.default.createContext(defaultProvider);
      var RouterContext = LegacyRouterContext;
      var LegacyRouterContextProvider = /* @__PURE__ */ __name2(({
        children,
        useHistory,
        useLocation,
        useParams,
        Prompt,
        Link,
        routes
      }) => {
        return /* @__PURE__ */ import_react50.default.createElement(
          RouterContext.Provider,
          {
            value: {
              useHistory: useHistory ?? defaultProvider.useHistory,
              useLocation: useLocation ?? defaultProvider.useLocation,
              useParams: useParams ?? defaultProvider.useParams,
              Prompt: Prompt ?? defaultProvider.Prompt,
              Link: Link ?? defaultProvider.Link,
              routes: routes ?? defaultProvider.routes
            }
          },
          children
        );
      }, "LegacyRouterContextProvider");
      var useRouterContext = /* @__PURE__ */ __name2(() => {
        const routerContextValues = (0, import_react51.useContext)(RouterContext);
        const { useHistory, useLocation, useParams, Prompt, Link, routes } = routerContextValues ?? defaultProvider;
        return {
          useHistory,
          useLocation,
          useParams,
          Prompt,
          Link,
          routes
        };
      }, "useRouterContext");
      var import_react_query24 = __require("@tanstack/react-query");
      var import_react53 = __require("react");
      var import_react522 = __toESM2(__require("react"));
      var AccessControlContext = import_react522.default.createContext({
        options: {
          buttons: { enableAccessControl: true, hideIfUnauthorized: false }
        }
      });
      var AccessControlContextProvider = /* @__PURE__ */ __name2(({ can, children, options }) => {
        return /* @__PURE__ */ import_react522.default.createElement(
          AccessControlContext.Provider,
          {
            value: {
              can,
              options: options ? {
                ...options,
                buttons: {
                  enableAccessControl: true,
                  hideIfUnauthorized: false,
                  ...options.buttons
                }
              } : {
                buttons: {
                  enableAccessControl: true,
                  hideIfUnauthorized: false
                }
              }
            }
          },
          children
        );
      }, "AccessControlContextProvider");
      var sanitizeResource = /* @__PURE__ */ __name2((resource) => {
        if (!resource) {
          return void 0;
        }
        const {
          icon,
          list,
          edit,
          create,
          show,
          clone,
          children,
          meta,
          options,
          ...restResource
        } = resource;
        const { icon: _metaIcon, ...restMeta } = meta ?? {};
        const { icon: _optionsIcon, ...restOptions } = options ?? {};
        return {
          ...restResource,
          ...meta ? { meta: restMeta } : {},
          ...options ? { options: restOptions } : {}
        };
      }, "sanitizeResource");
      var import_devtools_internal22 = require_dist2();
      var useCan = /* @__PURE__ */ __name2(({
        action,
        resource,
        params,
        queryOptions
      }) => {
        const { can } = (0, import_react53.useContext)(AccessControlContext);
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const { resource: _resource, ...paramsRest } = params ?? {};
        const sanitizedResource = sanitizeResource(_resource);
        const queryResponse = (0, import_react_query24.useQuery)(
          keys2().access().resource(resource).action(action).params({
            params: { ...paramsRest, resource: sanitizedResource },
            enabled: queryOptions == null ? void 0 : queryOptions.enabled
          }).get(preferLegacyKeys),
          // Enabled check for `can` is enough to be sure that it's defined in the query function but TS is not smart enough to know that.
          () => (can == null ? void 0 : can({
            action,
            resource,
            params: { ...paramsRest, resource: sanitizedResource }
          })) ?? Promise.resolve({ can: true }),
          {
            enabled: typeof can !== "undefined",
            ...queryOptions,
            meta: {
              ...queryOptions == null ? void 0 : queryOptions.meta,
              ...(0, import_devtools_internal22.getXRay)("useCan", preferLegacyKeys)
            },
            retry: false
          }
        );
        return typeof can === "undefined" ? { data: { can: true } } : queryResponse;
      }, "useCan");
      var import_react54 = __toESM2(__require("react"));
      var useCanWithoutCache = /* @__PURE__ */ __name2(() => {
        const { can: canFromContext } = import_react54.default.useContext(AccessControlContext);
        const can = import_react54.default.useMemo(() => {
          if (!canFromContext) {
            return void 0;
          }
          const canWithSanitizedResource = /* @__PURE__ */ __name2(async ({ params, ...rest }) => {
            const sanitizedResource = (params == null ? void 0 : params.resource) ? sanitizeResource(params.resource) : void 0;
            return canFromContext({
              ...rest,
              ...params ? {
                params: {
                  ...params,
                  resource: sanitizedResource
                }
              } : {}
            });
          }, "canWithSanitizedResource");
          return canWithSanitizedResource;
        }, [canFromContext]);
        return { can };
      }, "useCanWithoutCache");
      var import_react55 = __require("react");
      var import_uniqBy = __toESM2(__require("lodash/uniqBy"));
      var import_debounce2 = __toESM2(__require("lodash/debounce"));
      var import_get = __toESM2(__require("lodash/get"));
      var useSelect = /* @__PURE__ */ __name2((props) => {
        const [search, setSearch] = (0, import_react55.useState)([]);
        const [options, setOptions] = (0, import_react55.useState)([]);
        const [selectedOptions, setSelectedOptions] = (0, import_react55.useState)([]);
        const {
          resource: resourceFromProps,
          sort,
          sorters,
          filters = [],
          optionLabel = "title",
          optionValue = "id",
          debounce: debounceValue = 300,
          successNotification,
          errorNotification,
          defaultValueQueryOptions: defaultValueQueryOptionsFromProps,
          queryOptions,
          fetchSize,
          pagination,
          hasPagination = false,
          liveMode,
          defaultValue = [],
          onLiveEvent,
          onSearch: onSearchFromProp,
          liveParams,
          meta,
          metaData,
          dataProviderName,
          overtimeOptions
        } = props;
        const { resource, identifier } = useResource4(resourceFromProps);
        const getMeta = useMeta();
        const combinedMeta = getMeta({
          resource,
          meta: pickNotDeprecated2(meta, metaData)
        });
        const defaultValues = Array.isArray(defaultValue) ? defaultValue : [defaultValue];
        const defaultValueQueryOnSuccess = (0, import_react55.useCallback)(
          (data) => {
            setSelectedOptions(
              data.data.map(
                (item) => ({
                  label: (0, import_get.default)(item, optionLabel),
                  value: (0, import_get.default)(item, optionValue)
                })
              )
            );
          },
          [optionLabel, optionValue]
        );
        const defaultValueQueryOptions = defaultValueQueryOptionsFromProps ?? queryOptions;
        const defaultValueQueryResult = useMany({
          resource: identifier,
          ids: defaultValues,
          queryOptions: {
            ...defaultValueQueryOptions,
            enabled: defaultValues.length > 0 && ((defaultValueQueryOptions == null ? void 0 : defaultValueQueryOptions.enabled) ?? true),
            onSuccess: (data) => {
              var _a;
              defaultValueQueryOnSuccess(data);
              (_a = defaultValueQueryOptions == null ? void 0 : defaultValueQueryOptions.onSuccess) == null ? void 0 : _a.call(defaultValueQueryOptions, data);
            }
          },
          meta: combinedMeta,
          metaData: combinedMeta,
          liveMode: "off",
          dataProviderName
        });
        const defaultQueryOnSuccess = (0, import_react55.useCallback)(
          (data) => {
            {
              setOptions(
                data.data.map(
                  (item) => ({
                    label: (0, import_get.default)(item, optionLabel),
                    value: (0, import_get.default)(item, optionValue)
                  })
                )
              );
            }
          },
          [optionLabel, optionValue]
        );
        const queryResult = useList({
          resource: identifier,
          sorters: pickNotDeprecated2(sorters, sort),
          filters: filters.concat(search),
          pagination: {
            current: pagination == null ? void 0 : pagination.current,
            pageSize: (pagination == null ? void 0 : pagination.pageSize) ?? fetchSize,
            mode: pagination == null ? void 0 : pagination.mode
          },
          hasPagination,
          queryOptions: {
            ...queryOptions,
            onSuccess: (data) => {
              var _a;
              defaultQueryOnSuccess(data);
              (_a = queryOptions == null ? void 0 : queryOptions.onSuccess) == null ? void 0 : _a.call(queryOptions, data);
            }
          },
          successNotification,
          errorNotification,
          meta: combinedMeta,
          metaData: combinedMeta,
          liveMode,
          liveParams,
          onLiveEvent,
          dataProviderName
        });
        const onSearch = /* @__PURE__ */ __name2((value) => {
          if (onSearchFromProp) {
            setSearch(onSearchFromProp(value));
            return;
          }
          if (!value) {
            setSearch([]);
            return;
          } else {
            setSearch([
              {
                field: optionLabel,
                operator: "contains",
                value
              }
            ]);
          }
        }, "onSearch");
        const { elapsedTime } = useLoadingOvertime({
          isLoading: queryResult.isFetching || defaultValueQueryResult.isFetching,
          interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
          onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
        });
        const combinedOptions = (0, import_react55.useMemo)(
          () => (0, import_uniqBy.default)([...options, ...selectedOptions], "value"),
          [options, selectedOptions]
        );
        return {
          queryResult,
          defaultValueQueryResult,
          options: combinedOptions,
          onSearch: (0, import_debounce2.default)(onSearch, debounceValue),
          overtime: { elapsedTime }
        };
      }, "useSelect");
      var import_react56 = __toESM2(__require("react"));
      var import_qs4 = __toESM2(__require("qs"));
      var import_differenceWith2 = __toESM2(__require("lodash/differenceWith"));
      var import_isEqual3 = __toESM2(__require("lodash/isEqual"));
      var import_warn_once4 = __toESM2(__require("warn-once"));
      var defaultPermanentFilter = [];
      var defaultPermanentSorter = [];
      function useTable2({
        initialCurrent,
        initialPageSize,
        hasPagination = true,
        pagination,
        initialSorter,
        permanentSorter = defaultPermanentSorter,
        defaultSetFilterBehavior,
        initialFilter,
        permanentFilter = defaultPermanentFilter,
        filters: filtersFromProp,
        sorters: sortersFromProp,
        syncWithLocation: syncWithLocationProp,
        resource: resourceFromProp,
        successNotification,
        errorNotification,
        queryOptions,
        liveMode: liveModeFromProp,
        onLiveEvent,
        liveParams,
        meta,
        metaData,
        dataProviderName,
        overtimeOptions
      } = {}) {
        var _a, _b, _c, _d, _e;
        const { syncWithLocation: syncWithLocationContext } = useSyncWithLocation();
        const syncWithLocation = syncWithLocationProp ?? syncWithLocationContext;
        const liveMode = useLiveMode(liveModeFromProp);
        const routerType = useRouterType();
        const { useLocation } = useRouterContext();
        const { search, pathname } = useLocation();
        const getMeta = useMeta();
        const parsedParams = useParsed();
        const isServerSideFilteringEnabled = ((filtersFromProp == null ? void 0 : filtersFromProp.mode) || "server") === "server";
        const isServerSideSortingEnabled = ((sortersFromProp == null ? void 0 : sortersFromProp.mode) || "server") === "server";
        const hasPaginationString = hasPagination === false ? "off" : "server";
        const isPaginationEnabled = ((pagination == null ? void 0 : pagination.mode) ?? hasPaginationString) !== "off";
        const prefferedCurrent = pickNotDeprecated2(
          pagination == null ? void 0 : pagination.current,
          initialCurrent
        );
        const prefferedPageSize = pickNotDeprecated2(
          pagination == null ? void 0 : pagination.pageSize,
          initialPageSize
        );
        const preferredMeta = pickNotDeprecated2(meta, metaData);
        const { parsedCurrent, parsedPageSize, parsedSorter, parsedFilters } = parseTableParams(search ?? "?");
        const preferredInitialFilters = pickNotDeprecated2(
          filtersFromProp == null ? void 0 : filtersFromProp.initial,
          initialFilter
        );
        const preferredPermanentFilters = pickNotDeprecated2(filtersFromProp == null ? void 0 : filtersFromProp.permanent, permanentFilter) ?? defaultPermanentFilter;
        const preferredInitialSorters = pickNotDeprecated2(
          sortersFromProp == null ? void 0 : sortersFromProp.initial,
          initialSorter
        );
        const preferredPermanentSorters = pickNotDeprecated2(sortersFromProp == null ? void 0 : sortersFromProp.permanent, permanentSorter) ?? defaultPermanentSorter;
        const prefferedFilterBehavior = pickNotDeprecated2(
          filtersFromProp == null ? void 0 : filtersFromProp.defaultBehavior,
          defaultSetFilterBehavior
        ) ?? "merge";
        let defaultCurrent;
        let defaultPageSize;
        let defaultSorter;
        let defaultFilter;
        if (syncWithLocation) {
          defaultCurrent = ((_a = parsedParams == null ? void 0 : parsedParams.params) == null ? void 0 : _a.current) || parsedCurrent || prefferedCurrent || 1;
          defaultPageSize = ((_b = parsedParams == null ? void 0 : parsedParams.params) == null ? void 0 : _b.pageSize) || parsedPageSize || prefferedPageSize || 10;
          defaultSorter = ((_c = parsedParams == null ? void 0 : parsedParams.params) == null ? void 0 : _c.sorters) || (parsedSorter.length ? parsedSorter : preferredInitialSorters);
          defaultFilter = ((_d = parsedParams == null ? void 0 : parsedParams.params) == null ? void 0 : _d.filters) || (parsedFilters.length ? parsedFilters : preferredInitialFilters);
        } else {
          defaultCurrent = prefferedCurrent || 1;
          defaultPageSize = prefferedPageSize || 10;
          defaultSorter = preferredInitialSorters;
          defaultFilter = preferredInitialFilters;
        }
        const { replace } = useNavigation();
        const go = useGo();
        const { resource, identifier } = useResource4(resourceFromProp);
        const combinedMeta = getMeta({
          resource,
          meta: preferredMeta
        });
        import_react56.default.useEffect(() => {
          (0, import_warn_once4.default)(
            typeof identifier === "undefined",
            `useTable: \`resource\` is not defined.`
          );
        }, [identifier]);
        const [sorters, setSorters] = (0, import_react56.useState)(
          setInitialSorters(preferredPermanentSorters, defaultSorter ?? [])
        );
        const [filters, setFilters] = (0, import_react56.useState)(
          setInitialFilters(preferredPermanentFilters, defaultFilter ?? [])
        );
        const [current, setCurrent] = (0, import_react56.useState)(defaultCurrent);
        const [pageSize, setPageSize] = (0, import_react56.useState)(defaultPageSize);
        const createLinkForSyncWithLocation = /* @__PURE__ */ __name2(({
          pagination: { current: current2, pageSize: pageSize2 },
          sorter,
          filters: filters2
        }) => {
          if (routerType === "new") {
            return go({
              type: "path",
              options: {
                keepHash: true,
                keepQuery: true
              },
              query: {
                ...isPaginationEnabled ? { current: current2, pageSize: pageSize2 } : {},
                sorters: sorter,
                filters: filters2,
                ...currentQueryParams()
              }
            }) ?? "";
          } else {
            const currentQueryParams2 = import_qs4.default.parse(search == null ? void 0 : search.substring(1));
            const stringifyParams = stringifyTableParams({
              pagination: {
                pageSize: pageSize2,
                current: current2
              },
              sorters: sorters ?? sorter,
              filters: filters2,
              ...currentQueryParams2
            });
            return `${pathname ?? ""}?${stringifyParams ?? ""}`;
          }
        }, "createLinkForSyncWithLocation");
        (0, import_react56.useEffect)(() => {
          if (search === "") {
            setCurrent(defaultCurrent);
            setPageSize(defaultPageSize);
            setSorters(
              setInitialSorters(
                preferredPermanentSorters,
                defaultSorter ?? []
              )
            );
            setFilters(
              setInitialFilters(
                preferredPermanentFilters,
                defaultFilter ?? []
              )
            );
          }
        }, [search]);
        const currentQueryParams = /* @__PURE__ */ __name2(() => {
          if (routerType === "new") {
            const { sorters: sorters2, filters: filters2, pageSize: pageSize2, current: current2, ...rest } = (parsedParams == null ? void 0 : parsedParams.params) ?? {};
            return rest;
          } else {
            const { sorter, filters: filters2, pageSize: pageSize2, current: current2, ...rest } = import_qs4.default.parse(
              search,
              {
                ignoreQueryPrefix: true
              }
            );
            return rest;
          }
        }, "currentQueryParams");
        (0, import_react56.useEffect)(() => {
          if (syncWithLocation) {
            const queryParams = currentQueryParams();
            if (routerType === "new") {
              go({
                type: "replace",
                options: {
                  keepQuery: true
                },
                query: {
                  ...isPaginationEnabled ? { pageSize, current } : {},
                  sorters: (0, import_differenceWith2.default)(
                    sorters,
                    preferredPermanentSorters,
                    import_isEqual3.default
                  ),
                  filters: (0, import_differenceWith2.default)(
                    filters,
                    preferredPermanentFilters,
                    import_isEqual3.default
                  )
                  // ...queryParams,
                }
              });
            } else {
              const stringifyParams = stringifyTableParams({
                ...isPaginationEnabled ? {
                  pagination: {
                    pageSize,
                    current
                  }
                } : {},
                sorters: (0, import_differenceWith2.default)(
                  sorters,
                  preferredPermanentSorters,
                  import_isEqual3.default
                ),
                filters: (0, import_differenceWith2.default)(
                  filters,
                  preferredPermanentFilters,
                  import_isEqual3.default
                ),
                ...queryParams
              });
              return replace == null ? void 0 : replace(`${pathname}?${stringifyParams}`, void 0, {
                shallow: true
              });
            }
          }
        }, [syncWithLocation, current, pageSize, sorters, filters]);
        const queryResult = useList({
          resource: identifier,
          hasPagination,
          pagination: { current, pageSize, mode: pagination == null ? void 0 : pagination.mode },
          filters: isServerSideFilteringEnabled ? unionFilters(preferredPermanentFilters, filters) : void 0,
          sorters: isServerSideSortingEnabled ? unionSorters(preferredPermanentSorters, sorters) : void 0,
          queryOptions,
          successNotification,
          errorNotification,
          meta: combinedMeta,
          metaData: combinedMeta,
          liveMode,
          liveParams,
          onLiveEvent,
          dataProviderName
        });
        const setFiltersAsMerge = /* @__PURE__ */ __name2((newFilters) => {
          setFilters(
            (prevFilters) => unionFilters(preferredPermanentFilters, newFilters, prevFilters)
          );
        }, "setFiltersAsMerge");
        const setFiltersAsReplace = /* @__PURE__ */ __name2((newFilters) => {
          setFilters(unionFilters(preferredPermanentFilters, newFilters));
        }, "setFiltersAsReplace");
        const setFiltersWithSetter = /* @__PURE__ */ __name2((setter) => {
          setFilters(
            (prev) => unionFilters(preferredPermanentFilters, setter(prev))
          );
        }, "setFiltersWithSetter");
        const setFiltersFn = /* @__PURE__ */ __name2((setterOrFilters, behavior = prefferedFilterBehavior) => {
          if (typeof setterOrFilters === "function") {
            setFiltersWithSetter(setterOrFilters);
          } else {
            if (behavior === "replace") {
              setFiltersAsReplace(setterOrFilters);
            } else {
              setFiltersAsMerge(setterOrFilters);
            }
          }
        }, "setFiltersFn");
        const setSortWithUnion = /* @__PURE__ */ __name2((newSorter) => {
          setSorters(() => unionSorters(preferredPermanentSorters, newSorter));
        }, "setSortWithUnion");
        const { elapsedTime } = useLoadingOvertime({
          isLoading: queryResult.isFetching,
          interval: overtimeOptions == null ? void 0 : overtimeOptions.interval,
          onInterval: overtimeOptions == null ? void 0 : overtimeOptions.onInterval
        });
        return {
          tableQueryResult: queryResult,
          sorters,
          setSorters: setSortWithUnion,
          sorter: sorters,
          setSorter: setSortWithUnion,
          filters,
          setFilters: setFiltersFn,
          current,
          setCurrent,
          pageSize,
          setPageSize,
          pageCount: pageSize ? Math.ceil((((_e = queryResult.data) == null ? void 0 : _e.total) ?? 0) / pageSize) : 1,
          createLinkForSyncWithLocation,
          overtime: {
            elapsedTime
          }
        };
      }
      __name(useTable2, "useTable");
      __name2(useTable2, "useTable");
      var import_react58 = __require("react");
      var import_react_query25 = __require("@tanstack/react-query");
      var import_react57 = __toESM2(__require("react"));
      var AuditLogContext = import_react57.default.createContext({});
      var AuditLogContextProvider = /* @__PURE__ */ __name2(({ create, get: get2, update, children }) => {
        return /* @__PURE__ */ import_react57.default.createElement(AuditLogContext.Provider, { value: { create, get: get2, update } }, children);
      }, "AuditLogContextProvider");
      var import_devtools_internal23 = require_dist2();
      var useLog = /* @__PURE__ */ __name2(({
        logMutationOptions,
        renameMutationOptions
      } = {}) => {
        const queryClient = (0, import_react_query25.useQueryClient)();
        const auditLogContext = (0, import_react58.useContext)(AuditLogContext);
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const authProvider = useActiveAuthProvider();
        const { resources } = (0, import_react58.useContext)(ResourceContext);
        const {
          data: identityData,
          refetch,
          isLoading
        } = useGetIdentity({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy),
          queryOptions: {
            enabled: !!(auditLogContext == null ? void 0 : auditLogContext.create)
          }
        });
        const log = (0, import_react_query25.useMutation)(
          async (params) => {
            var _a, _b, _c, _d, _e;
            const resource = pickResource(params.resource, resources);
            const logPermissions = pickNotDeprecated2(
              (_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.audit,
              (_b = resource == null ? void 0 : resource.options) == null ? void 0 : _b.audit,
              (_d = (_c = resource == null ? void 0 : resource.options) == null ? void 0 : _c.auditLog) == null ? void 0 : _d.permissions
            );
            if (logPermissions) {
              if (!hasPermission(logPermissions, params.action)) {
                return;
              }
            }
            let authorData;
            if (isLoading && !!(auditLogContext == null ? void 0 : auditLogContext.create)) {
              authorData = await refetch();
            }
            return await ((_e = auditLogContext.create) == null ? void 0 : _e.call(auditLogContext, {
              ...params,
              author: identityData ?? (authorData == null ? void 0 : authorData.data)
            }));
          },
          {
            mutationKey: keys2().audit().action("log").get(),
            ...logMutationOptions,
            meta: {
              ...logMutationOptions == null ? void 0 : logMutationOptions.meta,
              ...(0, import_devtools_internal23.getXRay)("useLog", preferLegacyKeys)
            }
          }
        );
        const rename = (0, import_react_query25.useMutation)(
          async (params) => {
            var _a;
            return await ((_a = auditLogContext.update) == null ? void 0 : _a.call(auditLogContext, params));
          },
          {
            onSuccess: (data) => {
              if (data == null ? void 0 : data.resource) {
                queryClient.invalidateQueries(
                  keys2().audit().resource((data == null ? void 0 : data.resource) ?? "").action("list").get(preferLegacyKeys)
                );
              }
            },
            mutationKey: keys2().audit().action("rename").get(),
            ...renameMutationOptions,
            meta: {
              ...renameMutationOptions == null ? void 0 : renameMutationOptions.meta,
              ...(0, import_devtools_internal23.getXRay)("useLog", preferLegacyKeys)
            }
          }
        );
        return { log, rename };
      }, "useLog");
      var import_react59 = __require("react");
      var import_react_query26 = __require("@tanstack/react-query");
      var import_devtools_internal24 = require_dist2();
      var useLogList = /* @__PURE__ */ __name2(({
        resource,
        action,
        meta,
        author,
        metaData,
        queryOptions
      }) => {
        const { get: get2 } = (0, import_react59.useContext)(AuditLogContext);
        const { keys: keys2, preferLegacyKeys } = useKeys();
        const queryResponse = (0, import_react_query26.useQuery)(
          keys2().audit().resource(resource).action("list").params(meta).get(preferLegacyKeys),
          () => (get2 == null ? void 0 : get2({
            resource,
            action,
            author,
            meta,
            metaData
          })) ?? Promise.resolve([]),
          {
            enabled: typeof get2 !== "undefined",
            ...queryOptions,
            retry: false,
            meta: {
              ...queryOptions == null ? void 0 : queryOptions.meta,
              ...(0, import_devtools_internal24.getXRay)("useLogList", preferLegacyKeys)
            }
          }
        );
        return queryResponse;
      }, "useLogList");
      var import_react60 = __require("react");
      var import_warn_once5 = __toESM2(__require("warn-once"));
      var useBreadcrumb = /* @__PURE__ */ __name2(({
        meta: metaFromProps = {}
      } = {}) => {
        const routerType = useRouterType();
        const { i18nProvider } = (0, import_react60.useContext)(TranslationContext2);
        const parsed = useParsed();
        const translate = useTranslate();
        const { resources, resource, action } = useResource4();
        const {
          options: { textTransformers }
        } = useRefineContext();
        const breadcrumbs = [];
        if (!(resource == null ? void 0 : resource.name)) {
          return { breadcrumbs };
        }
        const addBreadcrumb = /* @__PURE__ */ __name2((parentName) => {
          var _a, _b, _c, _d, _e, _f;
          const parentResource = typeof parentName === "string" ? pickResource(
            parentName,
            resources,
            routerType === "legacy"
          ) ?? { name: parentName } : parentName;
          if (parentResource) {
            const grandParentName = pickNotDeprecated2(
              (_a = parentResource == null ? void 0 : parentResource.meta) == null ? void 0 : _a.parent,
              parentResource == null ? void 0 : parentResource.parentName
            );
            if (grandParentName) {
              addBreadcrumb(grandParentName);
            }
            const listActionOfResource = getActionRoutesFromResource(
              parentResource,
              resources,
              routerType === "legacy"
            ).find((r) => r.action === "list");
            const hrefRaw = ((_b = listActionOfResource == null ? void 0 : listActionOfResource.resource) == null ? void 0 : _b.list) ? listActionOfResource == null ? void 0 : listActionOfResource.route : void 0;
            const href = hrefRaw ? routerType === "legacy" ? hrefRaw : composeRoute(
              hrefRaw,
              parentResource == null ? void 0 : parentResource.meta,
              parsed,
              metaFromProps
            ) : void 0;
            breadcrumbs.push({
              label: pickNotDeprecated2(
                (_c = parentResource.meta) == null ? void 0 : _c.label,
                (_d = parentResource.options) == null ? void 0 : _d.label
              ) ?? translate(
                `${parentResource.name}.${parentResource.name}`,
                textTransformers.humanize(parentResource.name)
              ),
              href,
              icon: pickNotDeprecated2(
                (_e = parentResource.meta) == null ? void 0 : _e.icon,
                (_f = parentResource.options) == null ? void 0 : _f.icon,
                parentResource.icon
              )
            });
          }
        }, "addBreadcrumb");
        addBreadcrumb(resource);
        if (action && action !== "list") {
          const key = `actions.${action}`;
          const actionLabel = translate(key);
          if (typeof i18nProvider !== "undefined" && actionLabel === key) {
            (0, import_warn_once5.default)(
              true,
              `[useBreadcrumb]: Breadcrumb missing translate key for the "${action}" action. Please add "actions.${action}" key to your translation file.
For more information, see https://refine.dev/docs/api-reference/core/hooks/useBreadcrumb/#i18n-support`
            );
            breadcrumbs.push({
              label: translate(
                `buttons.${action}`,
                textTransformers.humanize(action)
              )
            });
          } else {
            breadcrumbs.push({
              label: translate(key, textTransformers.humanize(action))
            });
          }
        }
        return {
          breadcrumbs
        };
      }, "useBreadcrumb");
      var import_react61 = __toESM2(__require("react"));
      var createResourceKey = /* @__PURE__ */ __name2((resource, resources, legacy = false) => {
        const parents = [];
        let currentParentResource = getParentResource(resource, resources);
        while (currentParentResource) {
          parents.push(currentParentResource);
          currentParentResource = getParentResource(
            currentParentResource,
            resources
          );
        }
        parents.reverse();
        const key = [...parents, resource].map(
          (r) => removeLeadingTrailingSlashes(
            (legacy ? r.route : void 0) ?? r.identifier ?? r.name
          )
        ).join("/");
        return `/${key.replace(/^\//, "")}`;
      }, "createResourceKey");
      var createTree = /* @__PURE__ */ __name2((resources, legacy = false) => {
        const root = {
          item: {
            name: "__root__"
          },
          children: {}
        };
        resources.forEach((resource) => {
          const parents = [];
          let currentParent = getParentResource(resource, resources);
          while (currentParent) {
            parents.push(currentParent);
            currentParent = getParentResource(currentParent, resources);
          }
          parents.reverse();
          let currentTree = root;
          parents.forEach((parent) => {
            const key2 = (legacy ? parent.route : void 0) ?? parent.identifier ?? parent.name;
            if (!currentTree.children[key2]) {
              currentTree.children[key2] = {
                item: parent,
                children: {}
              };
            }
            currentTree = currentTree.children[key2];
          });
          const key = (legacy ? resource.route : void 0) ?? resource.identifier ?? resource.name;
          if (!currentTree.children[key]) {
            currentTree.children[key] = {
              item: resource,
              children: {}
            };
          }
        });
        const flatten = /* @__PURE__ */ __name2((tree) => {
          const items = [];
          Object.keys(tree.children).forEach((key) => {
            const itemKey = createResourceKey(
              tree.children[key].item,
              resources,
              legacy
            );
            const item = {
              ...tree.children[key].item,
              key: itemKey,
              children: flatten(tree.children[key])
            };
            items.push(item);
          });
          return items;
        }, "flatten");
        return flatten(root);
      }, "createTree");
      var getCleanPath = /* @__PURE__ */ __name2((pathname) => {
        return pathname.split("?")[0].split("#")[0].replace(/(.+)(\/$)/, "$1");
      }, "getCleanPath");
      var useMenu = /* @__PURE__ */ __name2(({ meta, hideOnMissingParameter } = {
        hideOnMissingParameter: true
      }) => {
        const translate = useTranslate();
        const getToPath = useGetToPath();
        const routerType = useRouterType();
        const { resource, resources } = useResource4();
        const { pathname } = useParsed();
        const { useLocation } = useRouterContext();
        const { pathname: legacyPath } = useLocation();
        const getFriendlyName = useUserFriendlyName();
        const cleanPathname = routerType === "legacy" ? getCleanPath(legacyPath) : pathname ? getCleanPath(pathname) : void 0;
        const cleanRoute = `/${(cleanPathname ?? "").replace(/^\//, "")}`;
        const selectedKey = resource ? createResourceKey(resource, resources, routerType === "legacy") : cleanRoute ?? "";
        const defaultOpenKeys = import_react61.default.useMemo(() => {
          if (!resource)
            return [];
          let parent = getParentResource(resource, resources);
          const keys2 = [createResourceKey(resource, resources)];
          while (parent) {
            keys2.push(createResourceKey(parent, resources));
            parent = getParentResource(parent, resources);
          }
          return keys2;
        }, []);
        const prepareItem = import_react61.default.useCallback(
          (item) => {
            var _a, _b, _c, _d, _e, _f;
            if (((_a = item == null ? void 0 : item.meta) == null ? void 0 : _a.hide) ?? ((_b = item == null ? void 0 : item.options) == null ? void 0 : _b.hide))
              return void 0;
            if (!(item == null ? void 0 : item.list) && item.children.length === 0)
              return void 0;
            const composed = item.list ? getToPath({
              resource: item,
              action: "list",
              legacy: routerType === "legacy",
              meta
            }) : void 0;
            if (hideOnMissingParameter && composed && composed.match(/(\/|^):(.+?)(\/|$){1}/))
              return void 0;
            return {
              ...item,
              route: composed,
              icon: pickNotDeprecated2(
                (_c = item.meta) == null ? void 0 : _c.icon,
                (_d = item.options) == null ? void 0 : _d.icon,
                item.icon
              ),
              label: pickNotDeprecated2(
                (_e = item == null ? void 0 : item.meta) == null ? void 0 : _e.label,
                (_f = item == null ? void 0 : item.options) == null ? void 0 : _f.label
              ) ?? translate(
                `${item.name}.${item.name}`,
                getFriendlyName(item.name, "plural")
              )
            };
          },
          [routerType, meta, translate, hideOnMissingParameter]
        );
        const treeItems = import_react61.default.useMemo(() => {
          const treeMenuItems = createTree(resources, routerType === "legacy");
          const prepare = /* @__PURE__ */ __name2((items) => {
            return items.flatMap((item) => {
              const preparedNodes = prepare(item.children);
              const newItem = prepareItem({
                ...item,
                children: preparedNodes
              });
              if (!newItem)
                return [];
              return [newItem];
            });
          }, "prepare");
          return prepare(treeMenuItems);
        }, [resources, routerType, prepareItem]);
        return {
          defaultOpenKeys,
          selectedKey,
          menuItems: treeItems
        };
      }, "useMenu");
      var useMeta = /* @__PURE__ */ __name2(() => {
        const { params } = useParsed();
        const getMetaFn = /* @__PURE__ */ __name2(({
          resource,
          meta: metaFromProp
        } = {}) => {
          const { meta } = sanitizeResource(resource) ?? { meta: {} };
          const {
            filters: _filters,
            sorters: _sorters,
            current: _current,
            pageSize: _pageSize,
            ...additionalParams
          } = params ?? {};
          return { ...meta, ...additionalParams, ...metaFromProp };
        }, "getMetaFn");
        return getMetaFn;
      }, "useMeta");
      var ErrorComponent2 = /* @__PURE__ */ __name2(() => {
        const [errorMessage, setErrorMessage] = (0, import_react62.useState)();
        const translate = useTranslate();
        const { push } = useNavigation();
        const go = useGo();
        const routerType = useRouterType();
        const { resource, action } = useResource4();
        (0, import_react62.useEffect)(() => {
          if (resource && action) {
            setErrorMessage(
              translate(
                "pages.error.info",
                {
                  action,
                  resource: resource.name
                },
                `You may have forgotten to add the "${action}" component to "${resource.name}" resource.`
              )
            );
          }
        }, [resource, action]);
        return /* @__PURE__ */ import_react62.default.createElement(import_react62.default.Fragment, null, /* @__PURE__ */ import_react62.default.createElement("h1", null, translate(
          "pages.error.404",
          void 0,
          "Sorry, the page you visited does not exist."
        )), errorMessage && /* @__PURE__ */ import_react62.default.createElement("p", null, errorMessage), /* @__PURE__ */ import_react62.default.createElement(
          "button",
          {
            onClick: () => {
              if (routerType === "legacy") {
                push("/");
              } else {
                go({ to: "/" });
              }
            }
          },
          translate("pages.error.backHome", void 0, "Back Home")
        ));
      }, "ErrorComponent");
      var import_react632 = __toESM2(__require("react"));
      var LoginPage = /* @__PURE__ */ __name2(() => {
        const [username, setUsername] = (0, import_react632.useState)("");
        const [password, setPassword] = (0, import_react632.useState)("");
        const translate = useTranslate();
        const authProvider = useActiveAuthProvider();
        const { mutate: login } = useLogin({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        return /* @__PURE__ */ import_react632.default.createElement(import_react632.default.Fragment, null, /* @__PURE__ */ import_react632.default.createElement("h1", null, translate("pages.login.title", "Sign in your account")), /* @__PURE__ */ import_react632.default.createElement(
          "form",
          {
            onSubmit: (e) => {
              e.preventDefault();
              login({ username, password });
            }
          },
          /* @__PURE__ */ import_react632.default.createElement("table", null, /* @__PURE__ */ import_react632.default.createElement("tbody", null, /* @__PURE__ */ import_react632.default.createElement("tr", null, /* @__PURE__ */ import_react632.default.createElement("td", null, translate(
            "pages.login.username",
            void 0,
            "username"
          ), ":"), /* @__PURE__ */ import_react632.default.createElement("td", null, /* @__PURE__ */ import_react632.default.createElement(
            "input",
            {
              type: "text",
              size: 20,
              autoCorrect: "off",
              spellCheck: false,
              autoCapitalize: "off",
              autoFocus: true,
              required: true,
              value: username,
              onChange: (e) => setUsername(e.target.value)
            }
          ))), /* @__PURE__ */ import_react632.default.createElement("tr", null, /* @__PURE__ */ import_react632.default.createElement("td", null, translate(
            "pages.login.password",
            void 0,
            "password"
          ), ":"), /* @__PURE__ */ import_react632.default.createElement("td", null, /* @__PURE__ */ import_react632.default.createElement(
            "input",
            {
              type: "password",
              required: true,
              size: 20,
              value: password,
              onChange: (e) => setPassword(e.target.value)
            }
          ))))),
          /* @__PURE__ */ import_react632.default.createElement("br", null),
          /* @__PURE__ */ import_react632.default.createElement("input", { type: "submit", value: "login" })
        ));
      }, "LoginPage");
      var import_react68 = __toESM2(__require("react"));
      var import_react64 = __toESM2(__require("react"));
      var LoginPage2 = /* @__PURE__ */ __name2(({
        providers,
        registerLink,
        forgotPasswordLink,
        rememberMe,
        contentProps,
        wrapperProps,
        renderContent,
        formProps,
        title = void 0,
        hideForm
      }) => {
        const routerType = useRouterType();
        const Link = useLink();
        const { Link: LegacyLink } = useRouterContext();
        const ActiveLink = routerType === "legacy" ? LegacyLink : Link;
        const [email, setEmail] = (0, import_react64.useState)("");
        const [password, setPassword] = (0, import_react64.useState)("");
        const [remember, setRemember] = (0, import_react64.useState)(false);
        const translate = useTranslate();
        const authProvider = useActiveAuthProvider();
        const { mutate: login } = useLogin({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const renderLink = /* @__PURE__ */ __name2((link, text2) => {
          return /* @__PURE__ */ import_react64.default.createElement(ActiveLink, { to: link }, text2);
        }, "renderLink");
        const renderProviders = /* @__PURE__ */ __name2(() => {
          if (providers) {
            return providers.map((provider) => /* @__PURE__ */ import_react64.default.createElement(
              "div",
              {
                key: provider.name,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem"
                }
              },
              /* @__PURE__ */ import_react64.default.createElement(
                "button",
                {
                  onClick: () => login({
                    providerName: provider.name
                  }),
                  style: {
                    display: "flex",
                    alignItems: "center"
                  }
                },
                provider == null ? void 0 : provider.icon,
                provider.label ?? /* @__PURE__ */ import_react64.default.createElement("label", null, provider.label)
              )
            ));
          }
          return null;
        }, "renderProviders");
        const content = /* @__PURE__ */ import_react64.default.createElement("div", { ...contentProps }, /* @__PURE__ */ import_react64.default.createElement("h1", { style: { textAlign: "center" } }, translate("pages.login.title", "Sign in to your account")), renderProviders(), !hideForm && /* @__PURE__ */ import_react64.default.createElement(import_react64.default.Fragment, null, /* @__PURE__ */ import_react64.default.createElement("hr", null), /* @__PURE__ */ import_react64.default.createElement(
          "form",
          {
            onSubmit: (e) => {
              e.preventDefault();
              login({ email, password, remember });
            },
            ...formProps
          },
          /* @__PURE__ */ import_react64.default.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                padding: 25
              }
            },
            /* @__PURE__ */ import_react64.default.createElement("label", { htmlFor: "email-input" }, translate("pages.login.fields.email", "Email")),
            /* @__PURE__ */ import_react64.default.createElement(
              "input",
              {
                id: "email-input",
                name: "email",
                type: "text",
                size: 20,
                autoCorrect: "off",
                spellCheck: false,
                autoCapitalize: "off",
                required: true,
                value: email,
                onChange: (e) => setEmail(e.target.value)
              }
            ),
            /* @__PURE__ */ import_react64.default.createElement("label", { htmlFor: "password-input" }, translate(
              "pages.login.fields.password",
              "Password"
            )),
            /* @__PURE__ */ import_react64.default.createElement(
              "input",
              {
                id: "password-input",
                type: "password",
                name: "password",
                required: true,
                size: 20,
                value: password,
                onChange: (e) => setPassword(e.target.value)
              }
            ),
            rememberMe ?? /* @__PURE__ */ import_react64.default.createElement(import_react64.default.Fragment, null, /* @__PURE__ */ import_react64.default.createElement("label", { htmlFor: "remember-me-input" }, translate(
              "pages.login.buttons.rememberMe",
              "Remember me"
            ), /* @__PURE__ */ import_react64.default.createElement(
              "input",
              {
                id: "remember-me-input",
                name: "remember",
                type: "checkbox",
                size: 20,
                checked: remember,
                value: remember.toString(),
                onChange: () => {
                  setRemember(!remember);
                }
              }
            ))),
            /* @__PURE__ */ import_react64.default.createElement("br", null),
            forgotPasswordLink ?? renderLink(
              "/forgot-password",
              translate(
                "pages.login.buttons.forgotPassword",
                "Forgot password?"
              )
            ),
            /* @__PURE__ */ import_react64.default.createElement(
              "input",
              {
                type: "submit",
                value: translate(
                  "pages.login.signin",
                  "Sign in"
                )
              }
            ),
            registerLink ?? /* @__PURE__ */ import_react64.default.createElement("span", null, translate(
              "pages.login.buttons.noAccount",
              "Don\u2019t have an account?"
            ), " ", renderLink(
              "/register",
              translate(
                "pages.login.register",
                "Sign up"
              )
            ))
          )
        )), registerLink !== false && hideForm && /* @__PURE__ */ import_react64.default.createElement("div", { style: { textAlign: "center" } }, translate(
          "pages.login.buttons.noAccount",
          "Don\u2019t have an account?"
        ), " ", renderLink(
          "/register",
          translate("pages.login.register", "Sign up")
        )));
        return /* @__PURE__ */ import_react64.default.createElement("div", { ...wrapperProps }, renderContent ? renderContent(content, title) : content);
      }, "LoginPage");
      var import_react65 = __toESM2(__require("react"));
      var RegisterPage = /* @__PURE__ */ __name2(({
        providers,
        loginLink,
        wrapperProps,
        contentProps,
        renderContent,
        formProps,
        title = void 0,
        hideForm
      }) => {
        const routerType = useRouterType();
        const Link = useLink();
        const { Link: LegacyLink } = useRouterContext();
        const ActiveLink = routerType === "legacy" ? LegacyLink : Link;
        const [email, setEmail] = (0, import_react65.useState)("");
        const [password, setPassword] = (0, import_react65.useState)("");
        const translate = useTranslate();
        const authProvider = useActiveAuthProvider();
        const { mutate: register, isLoading } = useRegister({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const renderLink = /* @__PURE__ */ __name2((link, text2) => {
          return /* @__PURE__ */ import_react65.default.createElement(ActiveLink, { to: link }, text2);
        }, "renderLink");
        const renderProviders = /* @__PURE__ */ __name2(() => {
          if (providers) {
            return providers.map((provider) => /* @__PURE__ */ import_react65.default.createElement(
              "div",
              {
                key: provider.name,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem"
                }
              },
              /* @__PURE__ */ import_react65.default.createElement(
                "button",
                {
                  onClick: () => register({
                    providerName: provider.name
                  }),
                  style: {
                    display: "flex",
                    alignItems: "center"
                  }
                },
                provider == null ? void 0 : provider.icon,
                provider.label ?? /* @__PURE__ */ import_react65.default.createElement("label", null, provider.label)
              )
            ));
          }
          return null;
        }, "renderProviders");
        const content = /* @__PURE__ */ import_react65.default.createElement("div", { ...contentProps }, /* @__PURE__ */ import_react65.default.createElement("h1", { style: { textAlign: "center" } }, translate("pages.register.title", "Sign up for your account")), renderProviders(), !hideForm && /* @__PURE__ */ import_react65.default.createElement(import_react65.default.Fragment, null, /* @__PURE__ */ import_react65.default.createElement("hr", null), /* @__PURE__ */ import_react65.default.createElement(
          "form",
          {
            onSubmit: (e) => {
              e.preventDefault();
              register({ email, password });
            },
            ...formProps
          },
          /* @__PURE__ */ import_react65.default.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                padding: 25
              }
            },
            /* @__PURE__ */ import_react65.default.createElement("label", { htmlFor: "email-input" }, translate(
              "pages.register.fields.email",
              "Email"
            )),
            /* @__PURE__ */ import_react65.default.createElement(
              "input",
              {
                id: "email-input",
                name: "email",
                type: "email",
                size: 20,
                autoCorrect: "off",
                spellCheck: false,
                autoCapitalize: "off",
                required: true,
                value: email,
                onChange: (e) => setEmail(e.target.value)
              }
            ),
            /* @__PURE__ */ import_react65.default.createElement("label", { htmlFor: "password-input" }, translate(
              "pages.register.fields.password",
              "Password"
            )),
            /* @__PURE__ */ import_react65.default.createElement(
              "input",
              {
                id: "password-input",
                name: "password",
                type: "password",
                required: true,
                size: 20,
                value: password,
                onChange: (e) => setPassword(e.target.value)
              }
            ),
            /* @__PURE__ */ import_react65.default.createElement(
              "input",
              {
                type: "submit",
                value: translate(
                  "pages.register.buttons.submit",
                  "Sign up"
                ),
                disabled: isLoading
              }
            ),
            loginLink ?? /* @__PURE__ */ import_react65.default.createElement(import_react65.default.Fragment, null, /* @__PURE__ */ import_react65.default.createElement("span", null, translate(
              "pages.login.buttons.haveAccount",
              "Have an account?"
            ), " ", renderLink(
              "/login",
              translate(
                "pages.login.signin",
                "Sign in"
              )
            )))
          )
        )), loginLink !== false && hideForm && /* @__PURE__ */ import_react65.default.createElement("div", { style: { textAlign: "center" } }, translate(
          "pages.login.buttons.haveAccount",
          "Have an account?"
        ), " ", renderLink(
          "/login",
          translate("pages.login.signin", "Sign in")
        )));
        return /* @__PURE__ */ import_react65.default.createElement("div", { ...wrapperProps }, renderContent ? renderContent(content, title) : content);
      }, "RegisterPage");
      var import_react66 = __toESM2(__require("react"));
      var ForgotPasswordPage = /* @__PURE__ */ __name2(({
        loginLink,
        wrapperProps,
        contentProps,
        renderContent,
        formProps,
        title = void 0
      }) => {
        const translate = useTranslate();
        const routerType = useRouterType();
        const Link = useLink();
        const { Link: LegacyLink } = useRouterContext();
        const ActiveLink = routerType === "legacy" ? LegacyLink : Link;
        const [email, setEmail] = (0, import_react66.useState)("");
        const { mutate: forgotPassword, isLoading } = useForgotPassword();
        const renderLink = /* @__PURE__ */ __name2((link, text2) => {
          return /* @__PURE__ */ import_react66.default.createElement(ActiveLink, { to: link }, text2);
        }, "renderLink");
        const content = /* @__PURE__ */ import_react66.default.createElement("div", { ...contentProps }, /* @__PURE__ */ import_react66.default.createElement("h1", { style: { textAlign: "center" } }, translate(
          "pages.forgotPassword.title",
          "Forgot your password?"
        )), /* @__PURE__ */ import_react66.default.createElement("hr", null), /* @__PURE__ */ import_react66.default.createElement(
          "form",
          {
            onSubmit: (e) => {
              e.preventDefault();
              forgotPassword({ email });
            },
            ...formProps
          },
          /* @__PURE__ */ import_react66.default.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                padding: 25
              }
            },
            /* @__PURE__ */ import_react66.default.createElement("label", { htmlFor: "email-input" }, translate(
              "pages.forgotPassword.fields.email",
              "Email"
            )),
            /* @__PURE__ */ import_react66.default.createElement(
              "input",
              {
                id: "email-input",
                name: "email",
                type: "mail",
                autoCorrect: "off",
                spellCheck: false,
                autoCapitalize: "off",
                required: true,
                value: email,
                onChange: (e) => setEmail(e.target.value)
              }
            ),
            /* @__PURE__ */ import_react66.default.createElement(
              "input",
              {
                type: "submit",
                disabled: isLoading,
                value: translate(
                  "pages.forgotPassword.buttons.submit",
                  "Send reset instructions"
                )
              }
            ),
            /* @__PURE__ */ import_react66.default.createElement("br", null),
            loginLink ?? /* @__PURE__ */ import_react66.default.createElement("span", null, translate(
              "pages.register.buttons.haveAccount",
              "Have an account? "
            ), " ", renderLink(
              "/login",
              translate("pages.login.signin", "Sign in")
            ))
          )
        ));
        return /* @__PURE__ */ import_react66.default.createElement("div", { ...wrapperProps }, renderContent ? renderContent(content, title) : content);
      }, "ForgotPasswordPage");
      var import_react67 = __toESM2(__require("react"));
      var UpdatePasswordPage = /* @__PURE__ */ __name2(({
        wrapperProps,
        contentProps,
        renderContent,
        formProps,
        title = void 0
      }) => {
        const translate = useTranslate();
        const authProvider = useActiveAuthProvider();
        const { mutate: updatePassword, isLoading } = useUpdatePassword({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const [newPassword, setNewPassword] = (0, import_react67.useState)("");
        const [confirmPassword, setConfirmPassword] = (0, import_react67.useState)("");
        const content = /* @__PURE__ */ import_react67.default.createElement("div", { ...contentProps }, /* @__PURE__ */ import_react67.default.createElement("h1", { style: { textAlign: "center" } }, translate("pages.updatePassword.title", "Update Password")), /* @__PURE__ */ import_react67.default.createElement("hr", null), /* @__PURE__ */ import_react67.default.createElement(
          "form",
          {
            onSubmit: (e) => {
              e.preventDefault();
              updatePassword({
                password: newPassword,
                confirmPassword
              });
            },
            ...formProps
          },
          /* @__PURE__ */ import_react67.default.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                padding: 25
              }
            },
            /* @__PURE__ */ import_react67.default.createElement("label", { htmlFor: "password-input" }, translate(
              "pages.updatePassword.fields.password",
              "New Password"
            )),
            /* @__PURE__ */ import_react67.default.createElement(
              "input",
              {
                id: "password-input",
                name: "password",
                type: "password",
                required: true,
                size: 20,
                value: newPassword,
                onChange: (e) => setNewPassword(e.target.value)
              }
            ),
            /* @__PURE__ */ import_react67.default.createElement("label", { htmlFor: "confirm-password-input" }, translate(
              "pages.updatePassword.fields.confirmPassword",
              "Confirm New Password"
            )),
            /* @__PURE__ */ import_react67.default.createElement(
              "input",
              {
                id: "confirm-password-input",
                name: "confirmPassword",
                type: "password",
                required: true,
                size: 20,
                value: confirmPassword,
                onChange: (e) => setConfirmPassword(e.target.value)
              }
            ),
            /* @__PURE__ */ import_react67.default.createElement(
              "input",
              {
                type: "submit",
                disabled: isLoading,
                value: translate(
                  "pages.updatePassword.buttons.submit",
                  "Update"
                )
              }
            )
          )
        ));
        return /* @__PURE__ */ import_react67.default.createElement("div", { ...wrapperProps }, renderContent ? renderContent(content, title) : content);
      }, "UpdatePasswordPage");
      var AuthPage = /* @__PURE__ */ __name2((props) => {
        const { type } = props;
        const renderView = /* @__PURE__ */ __name2(() => {
          switch (type) {
            case "register":
              return /* @__PURE__ */ import_react68.default.createElement(RegisterPage, { ...props });
            case "forgotPassword":
              return /* @__PURE__ */ import_react68.default.createElement(ForgotPasswordPage, { ...props });
            case "updatePassword":
              return /* @__PURE__ */ import_react68.default.createElement(UpdatePasswordPage, { ...props });
            default:
              return /* @__PURE__ */ import_react68.default.createElement(LoginPage2, { ...props });
          }
        }, "renderView");
        return /* @__PURE__ */ import_react68.default.createElement(import_react68.default.Fragment, null, renderView());
      }, "AuthPage");
      var import_react69 = __toESM2(__require("react"));
      var ReadyPage = /* @__PURE__ */ __name2(() => {
        return /* @__PURE__ */ import_react69.default.createElement(import_react69.default.Fragment, null, /* @__PURE__ */ import_react69.default.createElement("h1", null, "Welcome on board"), /* @__PURE__ */ import_react69.default.createElement("p", null, "Your configuration is completed."), /* @__PURE__ */ import_react69.default.createElement("p", null, "Now you can get started by adding your resources to the", " ", /* @__PURE__ */ import_react69.default.createElement("code", null, "`resources`"), " property of ", /* @__PURE__ */ import_react69.default.createElement("code", null, "`<Refine>`")), /* @__PURE__ */ import_react69.default.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ import_react69.default.createElement("a", { href: "https://refine.dev", target: "_blank", rel: "noreferrer" }, /* @__PURE__ */ import_react69.default.createElement("button", null, "Documentation")), /* @__PURE__ */ import_react69.default.createElement(
          "a",
          {
            href: "https://refine.dev/examples",
            target: "_blank",
            rel: "noreferrer"
          },
          /* @__PURE__ */ import_react69.default.createElement("button", null, "Examples")
        ), /* @__PURE__ */ import_react69.default.createElement(
          "a",
          {
            href: "https://discord.gg/refine",
            target: "_blank",
            rel: "noreferrer"
          },
          /* @__PURE__ */ import_react69.default.createElement("button", null, "Community")
        )));
      }, "ReadyPage");
      var import_react70 = __toESM2(__require("react"));
      var cards = [
        {
          title: "Documentation",
          description: "Learn about the technical details of using refine in your projects.",
          link: "https://refine.dev/",
          iconUrl: "https://refine.ams3.cdn.digitaloceanspaces.com/welcome-page/book.svg"
        },
        {
          title: "Tutorial",
          description: "Learn how to use refine by building a fully-functioning CRUD app, from scratch to full launch.",
          link: "https://refine.dev/docs/tutorial/introduction/index/",
          iconUrl: "https://refine.ams3.cdn.digitaloceanspaces.com/welcome-page/hat.svg"
        },
        {
          title: "Examples",
          description: "A collection of reference applications you can use as a starting point.",
          link: "https://refine.dev/examples",
          iconUrl: "https://refine.ams3.cdn.digitaloceanspaces.com/welcome-page/application.svg"
        },
        {
          title: "Community",
          description: "Join our Discord community and keep up with the latest news.",
          link: "https://discord.gg/refine",
          iconUrl: "https://refine.ams3.cdn.digitaloceanspaces.com/welcome-page/discord.svg"
        }
      ];
      var WelcomePage = /* @__PURE__ */ __name2(() => {
        const isTablet = useMediaQuery("(max-width: 1010px)");
        const isMobile = useMediaQuery("(max-width: 650px)");
        const getGridTemplateColumns = /* @__PURE__ */ __name2(() => {
          if (isMobile) {
            return "1, 280px";
          } else if (isTablet) {
            return "2, 280px";
          } else {
            return "4, 1fr";
          }
        }, "getGridTemplateColumns");
        const getHeaderFontSize = /* @__PURE__ */ __name2(() => {
          if (isMobile) {
            return "32px";
          } else if (isTablet) {
            return "40px";
          } else {
            return "48px";
          }
        }, "getHeaderFontSize");
        const getSubHeaderFontSize = /* @__PURE__ */ __name2(() => {
          if (isMobile) {
            return "16px";
          } else if (isTablet) {
            return "20px";
          } else {
            return "24px";
          }
        }, "getSubHeaderFontSize");
        return /* @__PURE__ */ import_react70.default.createElement(
          "div",
          {
            style: {
              position: "fixed",
              zIndex: 10,
              inset: 0,
              overflow: "auto",
              width: "100dvw",
              height: "100dvh"
            }
          },
          /* @__PURE__ */ import_react70.default.createElement(
            "div",
            {
              style: {
                overflow: "hidden",
                position: "relative",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                background: isMobile ? "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp), radial-gradient(88.89% 50% at 50% 100%, rgba(38, 217, 127, 0.10) 0%, rgba(38, 217, 127, 0.00) 100%), radial-gradient(88.89% 50% at 50% 0%, rgba(71, 235, 235, 0.15) 0%, rgba(71, 235, 235, 0.00) 100%), #1D1E30" : isTablet ? "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp), radial-gradient(66.67% 50% at 50% 100%, rgba(38, 217, 127, 0.10) 0%, rgba(38, 217, 127, 0.00) 100%), radial-gradient(66.67% 50% at 50% 0%, rgba(71, 235, 235, 0.15) 0%, rgba(71, 235, 235, 0.00) 100%), #1D1E30" : "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp), radial-gradient(35.56% 50% at 50% 100%, rgba(38, 217, 127, 0.12) 0%, rgba(38, 217, 127, 0) 100%), radial-gradient(35.56% 50% at 50% 0%, rgba(71, 235, 235, 0.18) 0%, rgba(71, 235, 235, 0) 100%), #1D1E30",
                minHeight: "100%",
                minWidth: "100%",
                fontFamily: "Arial",
                color: "#FFFFFF"
              }
            },
            /* @__PURE__ */ import_react70.default.createElement(
              "div",
              {
                style: {
                  zIndex: 2,
                  position: "absolute",
                  width: isMobile ? "400px" : "800px",
                  height: "552px",
                  opacity: "0.5",
                  background: "url(https://refine.ams3.cdn.digitaloceanspaces.com/assets/welcome-page-hexagon.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  top: "0",
                  left: "50%",
                  transform: "translateX(-50%)"
                }
              }
            ),
            /* @__PURE__ */ import_react70.default.createElement("div", { style: { height: isMobile ? "40px" : "80px" } }),
            /* @__PURE__ */ import_react70.default.createElement("div", { style: { display: "flex", justifyContent: "center" } }, /* @__PURE__ */ import_react70.default.createElement(
              "div",
              {
                style: {
                  backgroundRepeat: "no-repeat",
                  backgroundSize: isMobile ? "112px 58px" : "224px 116px",
                  backgroundImage: "url(https://refine.ams3.cdn.digitaloceanspaces.com/assets/refine-logo.svg)",
                  width: isMobile ? 112 : 224,
                  height: isMobile ? 58 : 116
                }
              }
            )),
            /* @__PURE__ */ import_react70.default.createElement(
              "div",
              {
                style: {
                  height: isMobile ? "120px" : isTablet ? "270px" : "40vh",
                  minHeight: isMobile ? "120px" : isTablet ? "270px" : "270px"
                }
              }
            ),
            /* @__PURE__ */ import_react70.default.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  textAlign: "center"
                }
              },
              /* @__PURE__ */ import_react70.default.createElement(
                "h1",
                {
                  style: {
                    fontSize: getHeaderFontSize(),
                    fontWeight: 700,
                    margin: "0px"
                  }
                },
                "Welcome Aboard!"
              ),
              /* @__PURE__ */ import_react70.default.createElement(
                "h4",
                {
                  style: {
                    fontSize: getSubHeaderFontSize(),
                    fontWeight: 400,
                    margin: "0px"
                  }
                },
                "Your configuration is completed."
              )
            ),
            /* @__PURE__ */ import_react70.default.createElement("div", { style: { height: "64px" } }),
            /* @__PURE__ */ import_react70.default.createElement(
              "div",
              {
                style: {
                  display: "grid",
                  gridTemplateColumns: `repeat(${getGridTemplateColumns()})`,
                  justifyContent: "center",
                  gap: "48px",
                  paddingRight: "16px",
                  paddingLeft: "16px",
                  paddingBottom: "32px",
                  maxWidth: "976px",
                  margin: "auto"
                }
              },
              cards.map((card) => /* @__PURE__ */ import_react70.default.createElement(Card, { key: `welcome-page-${card.title}`, card }))
            )
          )
        );
      }, "WelcomePage");
      var Card = /* @__PURE__ */ __name2(({ card }) => {
        const { title, description, iconUrl, link } = card;
        const [isHover, setIsHover] = (0, import_react70.useState)(false);
        return /* @__PURE__ */ import_react70.default.createElement(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }
          },
          /* @__PURE__ */ import_react70.default.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center"
              }
            },
            /* @__PURE__ */ import_react70.default.createElement(
              "a",
              {
                onPointerEnter: () => setIsHover(true),
                onPointerLeave: () => setIsHover(false),
                style: {
                  display: "flex",
                  alignItems: "center",
                  color: "#fff",
                  textDecoration: "none"
                },
                href: link
              },
              /* @__PURE__ */ import_react70.default.createElement(
                "div",
                {
                  style: {
                    width: "16px",
                    height: "16px",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url(${iconUrl})`
                  }
                }
              ),
              /* @__PURE__ */ import_react70.default.createElement(
                "span",
                {
                  style: {
                    fontSize: "16px",
                    fontWeight: 700,
                    marginLeft: "13px",
                    marginRight: "14px"
                  }
                },
                title
              ),
              /* @__PURE__ */ import_react70.default.createElement(
                "svg",
                {
                  style: {
                    transition: "transform 0.5s ease-in-out, opacity 0.2s ease-in-out",
                    ...isHover && {
                      transform: "translateX(4px)",
                      opacity: 1
                    }
                  },
                  width: "12",
                  height: "8",
                  fill: "none",
                  opacity: "0.5",
                  xmlns: "http://www.w3.org/2000/svg"
                },
                /* @__PURE__ */ import_react70.default.createElement(
                  "path",
                  {
                    d: "M7.293.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L8.586 5H1a1 1 0 0 1 0-2h7.586L7.293 1.707a1 1 0 0 1 0-1.414Z",
                    fill: "#fff"
                  }
                )
              )
            )
          ),
          /* @__PURE__ */ import_react70.default.createElement(
            "span",
            {
              style: {
                fontSize: "12px",
                opacity: 0.5,
                lineHeight: "16px"
              }
            },
            description
          )
        );
      }, "Card");
      var import_react74 = __toESM2(__require("react"));
      var import_react_query27 = __require("@tanstack/react-query");
      var import_devtools_internal25 = require_dist2();
      var import_react722 = __toESM2(__require("react"));
      var import_react71 = __require("react");
      var REFINE_VERSION = "4.46.0";
      var useTelemetryData = /* @__PURE__ */ __name2(() => {
        var _a;
        const auth = useIsExistAuthentication();
        const auditLogContext = (0, import_react71.useContext)(AuditLogContext);
        const liveContext = (0, import_react71.useContext)(LiveContext);
        const routerContext = (0, import_react71.useContext)(RouterContext);
        const dataContext = (0, import_react71.useContext)(DataContext);
        const { i18nProvider } = (0, import_react71.useContext)(TranslationContext2);
        const notificationContext = (0, import_react71.useContext)(NotificationContext);
        const accessControlContext = (0, import_react71.useContext)(AccessControlContext);
        const { resources } = useResource4();
        const refineOptions = useRefineContext();
        const auditLog = !!auditLogContext.create || !!auditLogContext.get || !!auditLogContext.update;
        const live = !!(liveContext == null ? void 0 : liveContext.publish) || !!(liveContext == null ? void 0 : liveContext.subscribe) || !!(liveContext == null ? void 0 : liveContext.unsubscribe);
        const router = !!routerContext.useHistory || !!routerContext.Link || !!routerContext.Prompt || !!routerContext.useLocation || !!routerContext.useParams;
        const data = !!dataContext;
        const i18n = !!(i18nProvider == null ? void 0 : i18nProvider.changeLocale) || !!(i18nProvider == null ? void 0 : i18nProvider.getLocale) || !!(i18nProvider == null ? void 0 : i18nProvider.translate);
        const notification = !!notificationContext.close || !!notificationContext.open;
        const accessControl = !!accessControlContext.can;
        const projectId = (_a = refineOptions == null ? void 0 : refineOptions.options) == null ? void 0 : _a.projectId;
        return {
          providers: {
            auth,
            auditLog,
            live,
            router,
            data,
            i18n,
            notification,
            accessControl
          },
          version: REFINE_VERSION,
          resourceCount: resources.length,
          projectId
        };
      }, "useTelemetryData");
      var encode = /* @__PURE__ */ __name2((payload) => {
        try {
          const stringifiedPayload = JSON.stringify(payload || {});
          if (typeof btoa !== "undefined") {
            return btoa(stringifiedPayload);
          }
          return Buffer.from(stringifiedPayload).toString("base64");
        } catch (err) {
          return void 0;
        }
      }, "encode");
      var throughImage = /* @__PURE__ */ __name2((src) => {
        const img = new Image();
        img.src = src;
      }, "throughImage");
      var throughFetch = /* @__PURE__ */ __name2((src) => {
        fetch(src);
      }, "throughFetch");
      var transport = /* @__PURE__ */ __name2((src) => {
        if (typeof Image !== "undefined") {
          throughImage(src);
        } else if (typeof fetch !== "undefined") {
          throughFetch(src);
        }
      }, "transport");
      var Telemetry = /* @__PURE__ */ __name2(() => {
        const payload = useTelemetryData();
        const sent = import_react722.default.useRef(false);
        import_react722.default.useEffect(() => {
          if (sent.current) {
            return;
          }
          const encoded = encode(payload);
          if (!encoded) {
            return;
          }
          transport(`https://telemetry.refine.dev/telemetry?payload=${encoded}`);
          sent.current = true;
        }, []);
        return null;
      }, "Telemetry");
      var checkRouterPropMisuse = /* @__PURE__ */ __name2((value) => {
        const bindings = ["go", "parse", "back", "Link"];
        const otherProps = Object.keys(value).filter(
          (key) => !bindings.includes(key)
        );
        const hasOtherProps = otherProps.length > 0;
        if (hasOtherProps) {
          console.warn(
            `Unsupported properties are found in \`routerProvider\` prop. You provided \`${otherProps.join(
              ", "
            )}\`. Supported properties are \`${bindings.join(
              ", "
            )}\`. You may wanted to use \`legacyRouterProvider\` prop instead.`
          );
          return true;
        }
        return false;
      }, "checkRouterPropMisuse");
      var import_react73 = __toESM2(__require("react"));
      var useRouterMisuseWarning = /* @__PURE__ */ __name2((value) => {
        const warned = import_react73.default.useRef(false);
        import_react73.default.useEffect(() => {
          if (warned.current === false) {
            if (value) {
              const warn = checkRouterPropMisuse(value);
              if (warn) {
                warned.current = true;
              }
            }
          }
        }, [value]);
      }, "useRouterMisuseWarning");
      var Refine = /* @__PURE__ */ __name2(({
        legacyAuthProvider,
        authProvider,
        dataProvider,
        legacyRouterProvider,
        routerProvider,
        notificationProvider,
        accessControlProvider,
        auditLogProvider,
        resources,
        DashboardPage,
        ReadyPage: ReadyPage2,
        LoginPage: LoginPage3,
        catchAll,
        children,
        liveProvider,
        i18nProvider,
        Title,
        Layout,
        Sider,
        Header,
        Footer,
        OffLayoutArea,
        onLiveEvent,
        options
      }) => {
        const {
          optionsWithDefaults,
          disableTelemetryWithDefault,
          reactQueryWithDefaults
        } = handleRefineOptions({
          options
        });
        const queryClient = useDeepMemo(() => {
          var _a;
          if (reactQueryWithDefaults.clientConfig instanceof import_react_query27.QueryClient) {
            return reactQueryWithDefaults.clientConfig;
          }
          return new import_react_query27.QueryClient({
            ...reactQueryWithDefaults.clientConfig,
            defaultOptions: {
              ...reactQueryWithDefaults.clientConfig.defaultOptions,
              queries: {
                refetchOnWindowFocus: false,
                keepPreviousData: true,
                ...(_a = reactQueryWithDefaults.clientConfig.defaultOptions) == null ? void 0 : _a.queries
              }
            }
          });
        }, [reactQueryWithDefaults.clientConfig]);
        (0, import_devtools_internal25.useQuerySubscription)(queryClient);
        const useNotificationProviderValues = import_react74.default.useMemo(() => {
          return typeof notificationProvider === "function" ? notificationProvider : () => notificationProvider ?? {};
        }, [notificationProvider]);
        const notificationProviderContextValues = useNotificationProviderValues();
        useRouterMisuseWarning(routerProvider);
        if (legacyRouterProvider && !routerProvider && (resources ?? []).length === 0) {
          return ReadyPage2 ? /* @__PURE__ */ import_react74.default.createElement(ReadyPage2, null) : /* @__PURE__ */ import_react74.default.createElement(ReadyPage, null);
        }
        const { RouterComponent = import_react74.default.Fragment } = !routerProvider ? legacyRouterProvider ?? {} : {};
        return /* @__PURE__ */ import_react74.default.createElement(import_react_query27.QueryClientProvider, { client: queryClient }, /* @__PURE__ */ import_react74.default.createElement(NotificationContextProvider, { ...notificationProviderContextValues }, /* @__PURE__ */ import_react74.default.createElement(
          LegacyAuthContextProvider,
          {
            ...legacyAuthProvider ?? {},
            isProvided: Boolean(legacyAuthProvider)
          },
          /* @__PURE__ */ import_react74.default.createElement(
            AuthBindingsContextProvider,
            {
              ...authProvider ?? {},
              isProvided: Boolean(authProvider)
            },
            /* @__PURE__ */ import_react74.default.createElement(DataContextProvider, { ...dataProvider }, /* @__PURE__ */ import_react74.default.createElement(LiveContextProvider, { liveProvider }, /* @__PURE__ */ import_react74.default.createElement(
              RouterPickerProvider,
              {
                value: legacyRouterProvider && !routerProvider ? "legacy" : "new"
              },
              /* @__PURE__ */ import_react74.default.createElement(
                RouterBindingsProvider,
                {
                  router: routerProvider
                },
                /* @__PURE__ */ import_react74.default.createElement(
                  LegacyRouterContextProvider,
                  {
                    ...legacyRouterProvider
                  },
                  /* @__PURE__ */ import_react74.default.createElement(
                    ResourceContextProvider,
                    {
                      resources: resources ?? []
                    },
                    /* @__PURE__ */ import_react74.default.createElement(
                      TranslationContextProvider,
                      {
                        i18nProvider
                      },
                      /* @__PURE__ */ import_react74.default.createElement(
                        AccessControlContextProvider,
                        {
                          ...accessControlProvider ?? {}
                        },
                        /* @__PURE__ */ import_react74.default.createElement(
                          AuditLogContextProvider,
                          {
                            ...auditLogProvider ?? {}
                          },
                          /* @__PURE__ */ import_react74.default.createElement(UndoableQueueContextProvider, null, /* @__PURE__ */ import_react74.default.createElement(
                            RefineContextProvider,
                            {
                              mutationMode: optionsWithDefaults.mutationMode,
                              warnWhenUnsavedChanges: optionsWithDefaults.warnWhenUnsavedChanges,
                              syncWithLocation: optionsWithDefaults.syncWithLocation,
                              Title,
                              undoableTimeout: optionsWithDefaults.undoableTimeout,
                              catchAll,
                              DashboardPage,
                              LoginPage: LoginPage3,
                              Layout,
                              Sider,
                              Footer,
                              Header,
                              OffLayoutArea,
                              hasDashboard: !!DashboardPage,
                              liveMode: optionsWithDefaults.liveMode,
                              onLiveEvent,
                              options: optionsWithDefaults
                            },
                            /* @__PURE__ */ import_react74.default.createElement(UnsavedWarnContextProvider, null, /* @__PURE__ */ import_react74.default.createElement(RouterComponent, null, children, !disableTelemetryWithDefault && /* @__PURE__ */ import_react74.default.createElement(Telemetry, null), /* @__PURE__ */ import_react74.default.createElement(RouteChangeHandler, null)))
                          ))
                        )
                      )
                    )
                  )
                )
              )
            )))
          )
        )));
      }, "Refine");
      var import_react75 = __require("react");
      var UndoableQueue = /* @__PURE__ */ __name2(({ notification }) => {
        const translate = useTranslate();
        const { notificationDispatch } = useCancelNotification();
        const { open } = useNotification();
        const [timeoutId, setTimeoutId] = (0, import_react75.useState)();
        const cancelNotification = /* @__PURE__ */ __name2(() => {
          if (notification.isRunning === true) {
            if (notification.seconds === 0) {
              notification.doMutation();
            }
            if (!notification.isSilent) {
              open == null ? void 0 : open({
                key: `${notification.id}-${notification.resource}-notification`,
                type: "progress",
                message: translate(
                  "notifications.undoable",
                  {
                    seconds: userFriendlySecond(notification.seconds)
                  },
                  `You have ${userFriendlySecond(
                    notification.seconds
                  )} seconds to undo`
                ),
                cancelMutation: notification.cancelMutation,
                undoableTimeout: userFriendlySecond(notification.seconds)
              });
            }
            if (notification.seconds > 0) {
              if (timeoutId) {
                clearTimeout(timeoutId);
              }
              const newTimeoutId = setTimeout(() => {
                notificationDispatch({
                  type: "DECREASE_NOTIFICATION_SECOND",
                  payload: {
                    id: notification.id,
                    seconds: notification.seconds,
                    resource: notification.resource
                  }
                });
              }, 1e3);
              setTimeoutId(newTimeoutId);
            }
          }
        }, "cancelNotification");
        (0, import_react75.useEffect)(() => {
          cancelNotification();
        }, [notification]);
        return null;
      }, "UndoableQueue");
      var import_react76 = __toESM2(__require("react"));
      var LayoutWrapper = /* @__PURE__ */ __name2(({
        children,
        Layout: LayoutFromProps,
        Sider: SiderFromProps,
        Header: HeaderFromProps,
        Title: TitleFromProps,
        Footer: FooterFromProps,
        OffLayoutArea: OffLayoutAreaFromProps
      }) => {
        const { Layout, Footer, Header, Sider, Title, OffLayoutArea } = useRefineContext();
        const LayoutToRender = LayoutFromProps ?? Layout;
        return /* @__PURE__ */ import_react76.default.createElement(
          LayoutToRender,
          {
            Sider: SiderFromProps ?? Sider,
            Header: HeaderFromProps ?? Header,
            Footer: FooterFromProps ?? Footer,
            Title: TitleFromProps ?? Title,
            OffLayoutArea: OffLayoutAreaFromProps ?? OffLayoutArea
          },
          children,
          /* @__PURE__ */ import_react76.default.createElement(UnsavedPrompt, null)
        );
      }, "LayoutWrapper");
      var UnsavedPrompt = /* @__PURE__ */ __name2(() => {
        const { Prompt } = useRouterContext();
        const translate = useTranslate();
        const { warnWhen, setWarnWhen } = useWarnAboutChange();
        const warnWhenListener = /* @__PURE__ */ __name2((e) => {
          e.preventDefault();
          e.returnValue = translate(
            "warnWhenUnsavedChanges",
            "Are you sure you want to leave? You have unsaved changes."
          );
          return e.returnValue;
        }, "warnWhenListener");
        (0, import_react76.useEffect)(() => {
          if (warnWhen) {
            window.addEventListener("beforeunload", warnWhenListener);
          }
          return window.removeEventListener("beforeunload", warnWhenListener);
        }, [warnWhen]);
        return /* @__PURE__ */ import_react76.default.createElement(
          Prompt,
          {
            when: warnWhen,
            message: translate(
              "warnWhenUnsavedChanges",
              "Are you sure you want to leave? You have unsaved changes."
            ),
            setWarnWhen
          }
        );
      }, "UnsavedPrompt");
      var import_react77 = __toESM2(__require("react"));
      function Authenticated({
        redirectOnFail = true,
        appendCurrentPathToQuery = true,
        children,
        fallback: fallbackContent,
        loading: loadingContent
      }) {
        var _a;
        const activeAuthProvider = useActiveAuthProvider();
        const routerType = useRouterType();
        const hasAuthProvider = Boolean(activeAuthProvider == null ? void 0 : activeAuthProvider.isProvided);
        const isLegacyAuth = Boolean(activeAuthProvider == null ? void 0 : activeAuthProvider.isLegacy);
        const isLegacyRouter = routerType === "legacy";
        const parsed = useParsed();
        const go = useGo();
        const { useLocation } = useRouterContext();
        const legacyLocation = useLocation();
        const {
          isFetching,
          isSuccess,
          data: {
            authenticated: isAuthenticatedStatus,
            redirectTo: authenticatedRedirect
          } = {}
        } = useIsAuthenticated({
          v3LegacyAuthProviderCompatible: isLegacyAuth
        });
        const isAuthenticated = hasAuthProvider ? isLegacyAuth ? isSuccess : isAuthenticatedStatus : true;
        if (!hasAuthProvider) {
          return /* @__PURE__ */ import_react77.default.createElement(import_react77.default.Fragment, null, children ?? null);
        }
        if (isFetching) {
          return /* @__PURE__ */ import_react77.default.createElement(import_react77.default.Fragment, null, loadingContent ?? null);
        }
        if (isAuthenticated) {
          return /* @__PURE__ */ import_react77.default.createElement(import_react77.default.Fragment, null, children ?? null);
        } else {
          if (typeof fallbackContent !== "undefined") {
            return /* @__PURE__ */ import_react77.default.createElement(import_react77.default.Fragment, null, fallbackContent ?? null);
          }
          const appliedRedirect = isLegacyAuth ? typeof redirectOnFail === "string" ? redirectOnFail : "/login" : typeof redirectOnFail === "string" ? redirectOnFail : authenticatedRedirect;
          const pathname = `${isLegacyRouter ? legacyLocation == null ? void 0 : legacyLocation.pathname : parsed.pathname}`.replace(/(\?.*|#.*)$/, "");
          if (appliedRedirect) {
            if (isLegacyRouter) {
              const toQuery = appendCurrentPathToQuery ? `?to=${encodeURIComponent(pathname)}` : "";
              return /* @__PURE__ */ import_react77.default.createElement(RedirectLegacy, { to: `${appliedRedirect}${toQuery}` });
            } else {
              return /* @__PURE__ */ import_react77.default.createElement(
                Redirect,
                {
                  config: {
                    to: appliedRedirect,
                    query: appendCurrentPathToQuery ? {
                      to: ((_a = parsed.params) == null ? void 0 : _a.to) ? parsed.params.to : go({
                        to: pathname,
                        options: { keepQuery: true },
                        type: "path"
                      })
                    } : void 0,
                    type: "replace"
                  }
                }
              );
            }
          }
          return null;
        }
      }
      __name(Authenticated, "Authenticated");
      __name2(Authenticated, "Authenticated");
      var Redirect = /* @__PURE__ */ __name2(({ config }) => {
        const go = useGo();
        import_react77.default.useEffect(() => {
          go(config);
        }, [go, config]);
        return null;
      }, "Redirect");
      var RedirectLegacy = /* @__PURE__ */ __name2(({ to }) => {
        const { replace } = useNavigation();
        import_react77.default.useEffect(() => {
          replace(to);
        }, [replace, to]);
        return null;
      }, "RedirectLegacy");
      var import_react78 = __require("react");
      var RouteChangeHandler = /* @__PURE__ */ __name2(() => {
        const { useLocation } = useRouterContext();
        const { checkAuth } = useLegacyAuthContext();
        const location = useLocation();
        (0, import_react78.useEffect)(() => {
          checkAuth == null ? void 0 : checkAuth().catch(() => false);
        }, [location == null ? void 0 : location.pathname]);
        return null;
      }, "RouteChangeHandler");
      var import_react79 = __toESM2(__require("react"));
      var CanAccess = /* @__PURE__ */ __name2(({
        resource: resourceFromProp,
        action: actionFromProp,
        params: paramsFromProp,
        fallback,
        onUnauthorized,
        children,
        ...rest
      }) => {
        const {
          resource,
          id: idFromRoute,
          action: actionFromRoute
        } = useResource4(resourceFromProp);
        const { identifier } = useResource4();
        const getDefaultId = /* @__PURE__ */ __name2(() => {
          const idFromPropsOrRoute = (paramsFromProp == null ? void 0 : paramsFromProp.id) ?? idFromRoute;
          if (resourceFromProp && resourceFromProp !== identifier) {
            return paramsFromProp == null ? void 0 : paramsFromProp.id;
          }
          return idFromPropsOrRoute;
        }, "getDefaultId");
        const defaultId = getDefaultId();
        const resourceName = resourceFromProp ?? (resource == null ? void 0 : resource.name);
        const action = actionFromProp ?? actionFromRoute ?? "";
        const params = paramsFromProp ?? {
          id: defaultId,
          resource
        };
        const { data } = useCan({
          resource: resourceName,
          action,
          params
        });
        (0, import_react79.useEffect)(() => {
          if (onUnauthorized && (data == null ? void 0 : data.can) === false) {
            onUnauthorized({
              resource: resourceName,
              action,
              reason: data == null ? void 0 : data.reason,
              params
            });
          }
        }, [data == null ? void 0 : data.can]);
        if (data == null ? void 0 : data.can) {
          if (import_react79.default.isValidElement(children)) {
            const Children = import_react79.default.cloneElement(children, rest);
            return Children;
          }
          return /* @__PURE__ */ import_react79.default.createElement(import_react79.default.Fragment, null, children);
        }
        if ((data == null ? void 0 : data.can) === false) {
          return /* @__PURE__ */ import_react79.default.createElement(import_react79.default.Fragment, null, fallback ?? null);
        }
        return null;
      }, "CanAccess");
      var import_react80 = __toESM2(__require("react"));
      var CSSRules = [
        `
    .bg-top-announcement {
        border-bottom: 1px solid rgba(71, 235, 235, 0.15);
        background: radial-gradient(
                218.19% 111.8% at 0% 0%,
                rgba(71, 235, 235, 0.1) 0%,
                rgba(71, 235, 235, 0.2) 100%
            ),
            #14141f;
    }
    `,
        `
    .top-announcement-mask {
        mask-image: url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/hexagon.svg);
        -webkit-mask-image: url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/hexagon.svg);
        mask-repeat: repeat;
        -webkit-mask-repeat: repeat;
        background: rgba(71, 235, 235, 0.25);
    }
    `,
        `
    .banner {
        display: flex;
        @media (max-width: 1000px) {
            display: none;
        }
    }`,
        `
    .gh-link, .gh-link:hover, .gh-link:active, .gh-link:visited, .gh-link:focus {
        text-decoration: none;
        z-index: 9;
    }
    `,
        `
    @keyframes top-announcement-glow {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
    `
      ];
      var text = "If you find Refine useful, you can contribute to its growth by giving it a star on GitHub";
      var GitHubBanner = /* @__PURE__ */ __name2(() => {
        (0, import_react80.useEffect)(() => {
          const styleTag = document.createElement("style");
          document.head.appendChild(styleTag);
          CSSRules.forEach(
            (rule) => {
              var _a;
              return (_a = styleTag.sheet) == null ? void 0 : _a.insertRule(rule, styleTag.sheet.cssRules.length);
            }
          );
        }, []);
        return /* @__PURE__ */ import_react80.default.createElement(
          "div",
          {
            className: "banner bg-top-announcement",
            style: {
              width: "100%",
              height: "48px"
            }
          },
          /* @__PURE__ */ import_react80.default.createElement(
            "div",
            {
              style: {
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "200px",
                width: "100%",
                maxWidth: "100vw",
                height: "100%",
                borderBottom: "1px solid #47ebeb26"
              }
            },
            /* @__PURE__ */ import_react80.default.createElement(
              "div",
              {
                className: "top-announcement-mask",
                style: {
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  borderBottom: "1px solid #47ebeb26"
                }
              },
              /* @__PURE__ */ import_react80.default.createElement(
                "div",
                {
                  style: {
                    position: "relative",
                    width: "960px",
                    height: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "0 auto"
                  }
                },
                /* @__PURE__ */ import_react80.default.createElement(
                  "div",
                  {
                    style: {
                      width: "calc(50% - 300px)",
                      height: "100%",
                      position: "relative"
                    }
                  },
                  /* @__PURE__ */ import_react80.default.createElement(
                    GlowSmall,
                    {
                      style: {
                        animationDelay: "1.5s",
                        position: "absolute",
                        top: "2px",
                        right: "220px"
                      },
                      id: "1"
                    }
                  ),
                  /* @__PURE__ */ import_react80.default.createElement(
                    GlowSmall,
                    {
                      style: {
                        animationDelay: "1s",
                        position: "absolute",
                        top: "8px",
                        right: "100px",
                        transform: "rotate(180deg)"
                      },
                      id: "2"
                    }
                  ),
                  /* @__PURE__ */ import_react80.default.createElement(
                    GlowBig,
                    {
                      style: {
                        position: "absolute",
                        right: "10px"
                      },
                      id: "3"
                    }
                  )
                ),
                /* @__PURE__ */ import_react80.default.createElement(
                  "div",
                  {
                    style: {
                      width: "calc(50% - 300px)",
                      height: "100%",
                      position: "relative"
                    }
                  },
                  /* @__PURE__ */ import_react80.default.createElement(
                    GlowSmall,
                    {
                      style: {
                        animationDelay: "2s",
                        position: "absolute",
                        top: "6px",
                        right: "180px",
                        transform: "rotate(180deg)"
                      },
                      id: "4"
                    }
                  ),
                  /* @__PURE__ */ import_react80.default.createElement(
                    GlowSmall,
                    {
                      style: {
                        animationDelay: "0.5s",
                        transitionDelay: "1.3s",
                        position: "absolute",
                        top: "2px",
                        right: "40px"
                      },
                      id: "5"
                    }
                  ),
                  /* @__PURE__ */ import_react80.default.createElement(
                    GlowBig,
                    {
                      style: {
                        position: "absolute",
                        right: "-70px"
                      },
                      id: "6"
                    }
                  )
                )
              )
            ),
            /* @__PURE__ */ import_react80.default.createElement(Text, { text })
          )
        );
      }, "GitHubBanner");
      var Text = /* @__PURE__ */ __name2(({ text: text2 }) => {
        return /* @__PURE__ */ import_react80.default.createElement(
          "a",
          {
            className: "gh-link",
            href: "https://s.refine.dev/github-support",
            target: "_blank",
            rel: "noreferrer",
            style: {
              position: "absolute",
              height: "100%",
              padding: "0 60px",
              display: "flex",
              flexWrap: "nowrap",
              whiteSpace: "nowrap",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: "linear-gradient(90deg, rgba(31, 63, 72, 0.00) 0%, #1F3F48 10%, #1F3F48 90%, rgba(31, 63, 72, 0.00) 100%)"
            }
          },
          /* @__PURE__ */ import_react80.default.createElement(
            "div",
            {
              style: {
                color: "#fff",
                display: "flex",
                flexDirection: "row",
                gap: "8px"
              }
            },
            /* @__PURE__ */ import_react80.default.createElement(
              "span",
              {
                style: {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }
              },
              "\u2B50\uFE0F"
            ),
            /* @__PURE__ */ import_react80.default.createElement(
              "span",
              {
                className: "text",
                style: {
                  fontSize: "16px",
                  lineHeight: "24px"
                }
              },
              text2
            ),
            /* @__PURE__ */ import_react80.default.createElement(
              "span",
              {
                style: {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }
              },
              "\u2B50\uFE0F"
            )
          )
        );
      }, "Text");
      var GlowSmall = /* @__PURE__ */ __name2(({ style, ...props }) => {
        return /* @__PURE__ */ import_react80.default.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: 80,
            height: 40,
            fill: "none",
            style: {
              opacity: 1,
              animation: "top-announcement-glow 1s ease-in-out infinite alternate",
              ...style
            }
          },
          /* @__PURE__ */ import_react80.default.createElement(
            "circle",
            {
              cx: 40,
              r: 40,
              fill: `url(#${props.id}-a)`,
              fillOpacity: 0.5
            }
          ),
          /* @__PURE__ */ import_react80.default.createElement("defs", null, /* @__PURE__ */ import_react80.default.createElement(
            "radialGradient",
            {
              id: `${props.id}-a`,
              cx: 0,
              cy: 0,
              r: 1,
              gradientTransform: "matrix(0 40 -40 0 40 0)",
              gradientUnits: "userSpaceOnUse"
            },
            /* @__PURE__ */ import_react80.default.createElement("stop", { stopColor: "#47EBEB" }),
            /* @__PURE__ */ import_react80.default.createElement("stop", { offset: 1, stopColor: "#47EBEB", stopOpacity: 0 })
          ))
        );
      }, "GlowSmall");
      var GlowBig = /* @__PURE__ */ __name2(({ style, ...props }) => /* @__PURE__ */ import_react80.default.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: 120,
          height: 48,
          fill: "none",
          ...props,
          style: {
            opacity: 1,
            animation: "top-announcement-glow 1s ease-in-out infinite alternate",
            ...style
          }
        },
        /* @__PURE__ */ import_react80.default.createElement(
          "circle",
          {
            cx: 60,
            cy: 24,
            r: 60,
            fill: `url(#${props.id}-a)`,
            fillOpacity: 0.5
          }
        ),
        /* @__PURE__ */ import_react80.default.createElement("defs", null, /* @__PURE__ */ import_react80.default.createElement(
          "radialGradient",
          {
            id: `${props.id}-a`,
            cx: 0,
            cy: 0,
            r: 1,
            gradientTransform: "matrix(0 60 -60 0 60 24)",
            gradientUnits: "userSpaceOnUse"
          },
          /* @__PURE__ */ import_react80.default.createElement("stop", { stopColor: "#47EBEB" }),
          /* @__PURE__ */ import_react80.default.createElement("stop", { offset: 1, stopColor: "#47EBEB", stopOpacity: 0 })
        ))
      ), "GlowBig");
      var import_react81 = __toESM2(__require("react"));
      var AutoSaveIndicator = /* @__PURE__ */ __name2(({
        status,
        elements: {
          success = /* @__PURE__ */ import_react81.default.createElement(Message, { key: "autoSave.success", defaultMessage: "saved" }),
          error = /* @__PURE__ */ import_react81.default.createElement(Message, { key: "autoSave.error", defaultMessage: "auto save failure" }),
          loading = /* @__PURE__ */ import_react81.default.createElement(Message, { key: "autoSave.loading", defaultMessage: "saving..." }),
          idle = /* @__PURE__ */ import_react81.default.createElement(Message, { key: "autoSave.idle", defaultMessage: "waiting for changes" })
        } = {}
      }) => {
        switch (status) {
          case "success":
            return /* @__PURE__ */ import_react81.default.createElement(import_react81.default.Fragment, null, success);
          case "error":
            return /* @__PURE__ */ import_react81.default.createElement(import_react81.default.Fragment, null, error);
          case "loading":
            return /* @__PURE__ */ import_react81.default.createElement(import_react81.default.Fragment, null, loading);
          default:
            return /* @__PURE__ */ import_react81.default.createElement(import_react81.default.Fragment, null, idle);
        }
      }, "AutoSaveIndicator");
      var Message = /* @__PURE__ */ __name2(({
        key,
        defaultMessage
      }) => {
        const translate = useTranslate();
        return /* @__PURE__ */ import_react81.default.createElement("span", null, translate(key, defaultMessage));
      }, "Message");
    }
  });

  // ../ui-types/dist/index.js
  var require_dist4 = __commonJS({
    "../ui-types/dist/index.js"(exports, module) {
      var r = Object.defineProperty;
      var p = Object.getOwnPropertyDescriptor;
      var s = Object.getOwnPropertyNames;
      var u = Object.prototype.hasOwnProperty;
      var R = /* @__PURE__ */ __name((t, e) => {
        for (var n in e)
          r(t, n, { get: e[n], enumerable: true });
      }, "R");
      var a = /* @__PURE__ */ __name((t, e, n, i) => {
        if (e && typeof e == "object" || typeof e == "function")
          for (let o of s(e))
            !u.call(t, o) && o !== n && r(t, o, { get: () => e[o], enumerable: !(i = p(e, o)) || i.enumerable });
        return t;
      }, "a");
      var P = /* @__PURE__ */ __name((t) => a(r({}, "__esModule", { value: true }), t), "P");
      var l = {};
      R(l, { RefineButtonClassNames: () => B, RefineButtonTestIds: () => f, RefinePageHeaderClassNames: () => d });
      module.exports = P(l);
      var f = { CloneButton: "refine-clone-button", DeleteButton: "refine-delete-button", EditButton: "refine-edit-button", SaveButton: "refine-save-button", CreateButton: "refine-create-button", ImportButton: "refine-import-button", ExportButton: "refine-export-button", ListButton: "refine-list-button", RefreshButton: "refine-refresh-button", ShowButton: "refine-show-button" };
      var d = { Title: "refine-pageHeader-title", SubTitle: "refine-pageHeader-subTitle" };
      var B = { CloneButton: "refine-clone-button", DeleteButton: "refine-delete-button", EditButton: "refine-edit-button", SaveButton: "refine-save-button", CreateButton: "refine-create-button", ImportButton: "refine-import-button", ExportButton: "refine-export-button", ListButton: "refine-list-button", RefreshButton: "refine-refresh-button", ShowButton: "refine-show-button" };
    }
  });

  // ../react-hook-form/dist/index.js
  var require_dist5 = __commonJS({
    "../react-hook-form/dist/index.js"(exports, module) {
      var ie = Object.create;
      var M = Object.defineProperty;
      var le = Object.getOwnPropertyDescriptor;
      var ue = Object.getOwnPropertyNames;
      var pe = Object.getPrototypeOf;
      var ce = Object.prototype.hasOwnProperty;
      var R = /* @__PURE__ */ __name((e, t) => M(e, "name", { value: t, configurable: true }), "R");
      var me = /* @__PURE__ */ __name((e, t) => {
        for (var s in t)
          M(e, s, { get: t[s], enumerable: true });
      }, "me");
      var L = /* @__PURE__ */ __name((e, t, s, V) => {
        if (t && typeof t == "object" || typeof t == "function")
          for (let n of ue(t))
            !ce.call(e, n) && n !== s && M(e, n, { get: () => t[n], enumerable: !(V = le(t, n)) || V.enumerable });
        return e;
      }, "L");
      var G = /* @__PURE__ */ __name((e, t, s) => (s = e != null ? ie(pe(e)) : {}, L(t || !e || !e.__esModule ? M(s, "default", { value: e, enumerable: true }) : s, e)), "G");
      var Fe = /* @__PURE__ */ __name((e) => L(M({}, "__esModule", { value: true }), e), "Fe");
      var Re = {};
      me(Re, { useForm: () => C, useModalForm: () => ae, useStepsForm: () => se });
      module.exports = Fe(Re);
      var Y = __require("react");
      var ee = G(__require("lodash/get"));
      var te = G(__require("lodash/has"));
      var re = __require("react-hook-form");
      var E = require_dist3();
      var C = R(({ refineCoreProps: e, warnWhenUnsavedChanges: t, disableServerSideValidation: s = false, ...V } = {}) => {
        let { options: n } = (0, E.useRefineContext)(), v = (n == null ? void 0 : n.disableServerSideValidation) || s, H = (0, E.useTranslate)(), { warnWhenUnsavedChanges: Q, setWarnWhen: D } = (0, E.useWarnAboutChange)(), B = t ?? Q, l = (0, re.useForm)({ ...V }), { watch: F, setValue: x, getValues: p, handleSubmit: u, setError: b } = l, y = (0, E.useForm)({ ...e, onMutationError: (a, o, r) => {
          var g, k;
          if (v) {
            (g = e == null ? void 0 : e.onMutationError) == null || g.call(e, a, o, r);
            return;
          }
          let f = a == null ? void 0 : a.errors;
          for (let S in f) {
            if (!Object.keys((0, E.flattenObjectKeys)(o)).includes(S))
              continue;
            let m = f[S], U = "";
            Array.isArray(m) && (U = m.join(" ")), typeof m == "string" && (U = m), typeof m == "boolean" && m && (U = "Field is not valid."), typeof m == "object" && "key" in m && (U = H(m.key, m.message)), b(S, { message: U });
          }
          (k = e == null ? void 0 : e.onMutationError) == null || k.call(e, a, o, r);
        } }), { queryResult: c, onFinish: d, formLoading: h, onFinishAutoSave: W } = y;
        (0, Y.useEffect)(() => {
          var r;
          let a = (r = c == null ? void 0 : c.data) == null ? void 0 : r.data;
          if (!a)
            return;
          Object.keys((0, E.flattenObjectKeys)(p())).forEach((f) => {
            let g = (0, te.default)(a, f), k = (0, ee.default)(a, f);
            g && x(f, k);
          });
        }, [c == null ? void 0 : c.data, x, p]), (0, Y.useEffect)(() => {
          let a = F((o, { type: r }) => {
            r === "change" && A(o);
          });
          return () => a.unsubscribe();
        }, [F]);
        let A = R((a) => {
          var o;
          if (B && D(true), e != null && e.autoSave) {
            D(false);
            let r = (o = e.autoSave) == null ? void 0 : o.onFinish;
            return W(r ? r(a) : a);
          }
          return a;
        }, "onValuesChange"), j = R((a, o) => async (r) => (D(false), u(a, o)(r)), "handleSubmit");
        return { ...l, handleSubmit: j, refineCore: y, saveButtonProps: { disabled: h, onClick: (a) => {
          j(d, () => false)(a);
        } } };
      }, "useForm");
      var P = __require("react");
      var se = R(({ stepsProps: e, ...t } = {}) => {
        let { defaultStep: s = 0, isBackValidate: V = false } = e ?? {}, [n, v] = (0, P.useState)(s), H = C({ ...t }), { trigger: Q, getValues: D, setValue: B, formState: { dirtyFields: l }, refineCore: { queryResult: F } } = H;
        (0, P.useEffect)(() => {
          var y;
          let u = (y = F == null ? void 0 : F.data) == null ? void 0 : y.data;
          if (!u)
            return;
          let b = Object.keys(D());
          Object.entries(u).forEach(([c, d]) => {
            let h = c;
            b.includes(h) && (l[h] || B(h, d));
          });
        }, [F == null ? void 0 : F.data, n, B, D]);
        let x = R((u) => {
          let b = u;
          u < 0 && (b = 0), v(b);
        }, "go");
        return { ...H, steps: { currentStep: n, gotoStep: R(async (u) => {
          if (u === n)
            return;
          if (u < n && !V) {
            x(u);
            return;
          }
          await Q() && x(u);
        }, "gotoStep") } };
      }, "useStepsForm");
      var z = __require("react");
      var i = require_dist3();
      var $ = G(__require("react"));
      var ae = R(({ modalProps: e, refineCoreProps: t, syncWithLocation: s, ...V } = {}) => {
        var X, Z;
        let n = (0, i.useInvalidate)(), [v, H] = $.default.useState(false), Q = (0, i.useTranslate)(), { resource: D, action: B } = t ?? {}, { resource: l, action: F, identifier: x } = (0, i.useResource)(D), p = (0, i.useParsed)(), u = (0, i.useGo)(), b = (0, i.useUserFriendlyName)(), y = B ?? F ?? "", c = !(typeof s == "object" && (s == null ? void 0 : s.syncId) === false), d = typeof s == "object" && "key" in s ? s.key : l && y && s ? `modal-${x}-${y}` : void 0, { defaultVisible: h = false, autoSubmitClose: W = true, autoResetForm: A = true } = e ?? {}, j = C({ refineCoreProps: { ...t, meta: { ...d ? { [d]: void 0 } : {}, ...t == null ? void 0 : t.meta } }, ...V }), { reset: J, refineCore: { onFinish: a, id: o, setId: r, autoSaveProps: f }, saveButtonProps: g, handleSubmit: k } = j, { visible: S, show: w, close: m } = (0, i.useModal)({ defaultVisible: h });
        $.default.useEffect(() => {
          var T, O, I, _;
          if (v === false && d) {
            let K = (O = (T = p == null ? void 0 : p.params) == null ? void 0 : T[d]) == null ? void 0 : O.open;
            if (typeof K == "boolean" ? K && w() : typeof K == "string" && K === "true" && w(), c) {
              let q = (_ = (I = p == null ? void 0 : p.params) == null ? void 0 : I[d]) == null ? void 0 : _.id;
              q && (r == null || r(q));
            }
            H(true);
          }
        }, [d, p, c, r]), $.default.useEffect(() => {
          var T;
          v === true && (S && d ? u({ query: { [d]: { ...(T = p == null ? void 0 : p.params) == null ? void 0 : T[d], open: true, ...c && o && { id: o } } }, options: { keepQuery: true }, type: "replace" }) : d && !S && u({ query: { [d]: void 0 }, options: { keepQuery: true }, type: "replace" }));
        }, [o, S, w, d, c]);
        let U = R(async (T) => {
          await a(T), W && m(), A && J();
        }, "submit"), { warnWhen: N, setWarnWhen: oe } = (0, i.useWarnAboutChange)(), ne = (0, z.useCallback)(() => {
          var T;
          if (f.status === "success" && ((T = t == null ? void 0 : t.autoSave) != null && T.invalidateOnClose) && n({ id: o, invalidates: t.invalidates || ["list", "many", "detail"], dataProviderName: t.dataProviderName, resource: x }), N)
            if (window.confirm(Q("warnWhenUnsavedChanges", "Are you sure you want to leave? You have unsaved changes.")))
              oe(false);
            else
              return;
          r == null || r(void 0), m();
        }, [N, f.status]), de = (0, z.useCallback)((T) => {
          typeof T < "u" && (r == null || r(T)), (!(y === "edit" || y === "clone") || (typeof T < "u" || typeof o < "u")) && w();
        }, [o]), Te = Q(`${x}.titles.${B}`, void 0, `${b(`${B} ${((X = l == null ? void 0 : l.meta) == null ? void 0 : X.label) ?? ((Z = l == null ? void 0 : l.options) == null ? void 0 : Z.label) ?? (l == null ? void 0 : l.label) ?? x}`, "singular")}`);
        return { modal: { submit: U, close: ne, show: de, visible: S, title: Te }, ...j, saveButtonProps: { ...g, onClick: (T) => k(U)(T) } };
      }, "useModalForm");
    }
  });

  // ../chakra-ui/dist/index.js
  var require_dist6 = __commonJS({
    "../chakra-ui/dist/index.js"(exports, module) {
      var Rr = Object.create;
      var Oo = Object.defineProperty;
      var en = Object.getOwnPropertyDescriptor;
      var on = Object.getOwnPropertyNames;
      var tn = Object.getPrototypeOf;
      var rn = Object.prototype.hasOwnProperty;
      var n = /* @__PURE__ */ __name((t, e) => Oo(t, "name", { value: e, configurable: true }), "n");
      var nn = /* @__PURE__ */ __name((t, e) => {
        for (var s in e)
          Oo(t, s, { get: e[s], enumerable: true });
      }, "nn");
      var Xt = /* @__PURE__ */ __name((t, e, s, o) => {
        if (e && typeof e == "object" || typeof e == "function")
          for (let r of on(e))
            !rn.call(t, r) && r !== s && Oo(t, r, { get: () => e[r], enumerable: !(o = en(e, r)) || o.enumerable });
        return t;
      }, "Xt");
      var C = /* @__PURE__ */ __name((t, e, s) => (s = t != null ? Rr(tn(t)) : {}, Xt(e || !t || !t.__esModule ? Oo(s, "default", { value: t, enumerable: true }) : s, t)), "C");
      var sn = /* @__PURE__ */ __name((t) => Xt(Oo({}, "__esModule", { value: true }), t), "sn");
      var Un = {};
      nn(Un, { AuthPage: () => zn, AutoSaveIndicator: () => Et, BooleanField: () => Tn, Breadcrumb: () => Ge, CloneButton: () => mr, Create: () => yn, CreateButton: () => at, DateField: () => kn, DeleteButton: () => Lo, Edit: () => xn, EditButton: () => lt, EmailField: () => Cn, ErrorComponent: () => Dn, ExportButton: () => dr, FileField: () => Ln, HamburgerMenu: () => Ft, Header: () => kt, ImportButton: () => cr, Layout: () => an, List: () => bn, ListButton: () => So, MarkdownField: () => In, NumberField: () => Sn, ReadyPage: () => Fn, RefineThemes: () => Mn, RefreshButton: () => vo, SaveButton: () => Io, Show: () => hn, ShowButton: () => lr, Sider: () => Tt, TagField: () => Pn, TextField: () => Bn, ThemedHeader: () => St, ThemedHeaderV2: () => At, ThemedLayout: () => ln, ThemedLayoutContext: () => mo, ThemedLayoutContextProvider: () => st, ThemedLayoutV2: () => gn, ThemedSider: () => Lt, ThemedSiderV2: () => It, ThemedTitle: () => vt, ThemedTitleV2: () => Me, Title: () => wt, UndoableNotification: () => Bt, UrlField: () => Yt, WelcomePage: () => An, notificationProvider: () => Nn, refineTheme: () => Hn, usePagination: () => fn, useSiderVisible: () => cn, useThemedLayoutContext: () => $o });
      module.exports = sn(Un);
      var Ze = C(__require("react"));
      var xo = __require("@chakra-ui/react");
      var S = C(__require("react"));
      var $ = require_dist3();
      var z = __require("@chakra-ui/react");
      var Se = __require("@tabler/icons");
      var Tt = n(({ Title: t, render: e, meta: s }) => {
        let [o, r] = (0, S.useState)(false), [a, u] = (0, S.useState)(false), d = (0, $.useRouterType)(), g = (0, $.useLink)(), { Link: m } = (0, $.useRouterContext)(), x = d === "legacy" ? m : g, { menuItems: B, selectedKey: k, defaultOpenKeys: w } = (0, $.useMenu)({ meta: s }), c = (0, $.useTitle)(), L = (0, $.useIsExistAuthentication)(), p = (0, $.useTranslate)(), { hasDashboard: T } = (0, $.useRefineContext)(), y = (0, $.useActiveAuthProvider)(), { warnWhen: l, setWarnWhen: b } = (0, $.useWarnAboutChange)(), { mutate: i } = (0, $.useLogout)({ v3LegacyAuthProviderCompatible: !!(y != null && y.isLegacy) }), P = t ?? c ?? wt, M = n(() => o ? "80px" : "200px", "siderWidth"), D = { placement: "right", hasArrow: true, isDisabled: !o || a }, U = n((h) => h.map((_) => {
          let { label: pe, route: me, name: ve, icon: te, children: Te } = _, Ce = _.key === k, fe = Te.length > 0, Oe = fe ? void 0 : { as: x, to: me };
          return S.default.createElement($.CanAccess, { key: _.key, resource: ve.toLowerCase(), action: "list", params: { resource: _ } }, S.default.createElement(z.Accordion, { defaultIndex: w.includes(_.key || "") ? 0 : -1, width: "full", allowToggle: true }, S.default.createElement(z.AccordionItem, { border: "none" }, S.default.createElement(z.Tooltip, { label: pe, ...D }, S.default.createElement(z.AccordionButton, { pl: 6, pr: 4, pt: 3, pb: 3, as: "div", width: "full" }, S.default.createElement(z.Button, { width: "full", variant: "link", color: "white", fontWeight: "normal", leftIcon: te ?? S.default.createElement(S.default.Fragment, null, S.default.createElement(Se.IconList, { size: 20 })), rightIcon: fe ? S.default.createElement(z.AccordionIcon, null) : void 0, _active: { color: "none", fontWeight: fe ? "normal" : "bold" }, _hover: { textDecoration: "none" }, isActive: Ce, ...Oe }, (!o || a) && S.default.createElement(z.Box, { flexGrow: 1, textAlign: "left" }, pe)))), fe && S.default.createElement(z.AccordionPanel, { p: 0, pl: o && !a ? 0 : 4 }, S.default.createElement(z.Accordion, { width: "full", allowToggle: true }, U(Te))))));
        }), "renderTreeView"), f = U(B), j = T ? S.default.createElement($.CanAccess, { resource: "dashboard", action: "list" }, S.default.createElement(z.Tooltip, { label: p("dashboard.title", "Dashboard"), ...D }, S.default.createElement(z.Button, { width: "full", justifyContent: o && !a ? "center" : "flex-start", pl: 6, pr: 4, pt: 3, pb: 3, fontWeight: "normal", leftIcon: S.default.createElement(Se.IconDashboard, { size: 20 }), variant: "link", color: "white", isActive: k === "/", _active: { color: "none", fontWeight: "bold" }, _hover: { textDecoration: "none" }, as: x, to: "/" }, (!o || a) && p("dashboard.title", "Dashboard")))) : null, X = n(() => {
          l ? window.confirm(p("warnWhenUnsavedChanges", "Are you sure you want to leave? You have unsaved changes.")) && (b(false), i()) : i();
        }, "handleLogout"), O = L && S.default.createElement(z.Tooltip, { label: p("buttons.logout", "Logout"), ...D }, S.default.createElement(z.Button, { width: "full", justifyContent: o && !a ? "center" : "flex-start", pl: 6, pr: 4, pt: 3, pb: 3, fontWeight: "normal", leftIcon: S.default.createElement(Se.IconLogout, { size: 20 }), variant: "link", _active: { color: "none" }, _hover: { textDecoration: "none" }, color: "white", onClick: X }, (!o || a) && p("buttons.logout", "Logout"))), F = n(() => e ? e({ dashboard: j, logout: O, items: f, collapsed: false }) : S.default.createElement(S.default.Fragment, null, j, f, O), "renderSider");
        return S.default.createElement(S.default.Fragment, null, S.default.createElement(z.Box, { position: "fixed", top: 16, left: 0, zIndex: 1200, display: ["block", "block", "none", "none", "none"] }, S.default.createElement(z.IconButton, { borderLeftRadius: 0, bg: "sider.background", color: "white", _hover: { bg: "sider.background" }, _active: { bg: "sider.background", transform: "translateY(1px)" }, "aria-label": "Open Menu", onClick: () => u((h) => !h) }, S.default.createElement(Se.IconMenu2, null))), S.default.createElement(z.Drawer, { placement: "left", isOpen: a, onClose: () => u(false) }, S.default.createElement(z.DrawerOverlay, null), S.default.createElement(z.DrawerContent, { w: "200px", maxW: "200px", bg: "sider.background" }, S.default.createElement(z.Box, { display: "flex", justifyContent: "center", py: 4 }, S.default.createElement(P, { collapsed: false })), S.default.createElement(z.VStack, { mt: 2, color: "white", alignItems: "start", flexGrow: 1 }, S.default.createElement(z.Box, { width: "full" }, F())))), S.default.createElement(z.Box, { display: ["none", "none", "flex"], width: M(), transition: "width 200ms ease, min-width 200ms ease", flexShrink: 0 }), S.default.createElement(z.Box, { bg: "sider.background", position: "fixed", width: M(), top: 0, h: "100vh", display: ["none", "none", "flex"], flexDirection: "column", transition: "width 200ms ease, min-width 200ms ease" }, S.default.createElement(z.Box, { display: "flex", justifyContent: "center", py: 4 }, S.default.createElement(P, { collapsed: o })), S.default.createElement(z.VStack, { mt: 2, color: "white", alignItems: "start", flexGrow: 1 }, S.default.createElement(z.Box, { width: "full" }, F())), S.default.createElement(z.Button, { onClick: () => r((h) => !h), color: "white", bg: "sider.collapseButton", borderRadius: 0, _hover: { bg: "sider.collapseButton" }, _active: { bg: "sider.collapseButton", transform: "translateY(1px)" } }, o ? S.default.createElement(Se.IconChevronRight, null) : S.default.createElement(Se.IconChevronLeft, null))));
      }, "Sider");
      var _o = C(__require("react"));
      var et = require_dist3();
      var Ye = __require("@chakra-ui/react");
      var kt = n(() => {
        let t = (0, et.useActiveAuthProvider)(), { data: e } = (0, et.useGetIdentity)({ v3LegacyAuthProviderCompatible: !!(t != null && t.isLegacy) });
        return e && (e.name || e.avatar) ? _o.default.createElement(Ye.Box, { py: "2", px: "4", display: "flex", justifyContent: "flex-end", w: "full", bg: "chakra-body-bg" }, _o.default.createElement(Ye.HStack, null, _o.default.createElement(Ye.Text, { size: "sm", fontWeight: "bold" }, e == null ? void 0 : e.name), _o.default.createElement(Ye.Avatar, { size: "sm", name: e == null ? void 0 : e.name, src: e == null ? void 0 : e.avatar }))) : null;
      }, "Header");
      var an = n(({ Sider: t, Header: e, Title: s, Footer: o, OffLayoutArea: r, children: a }) => {
        let u = t ?? Tt, d = e ?? kt, g = (0, xo.useColorModeValue)("gray.100", "gray.900");
        return Ze.default.createElement(xo.Box, { display: "flex", bg: g }, Ze.default.createElement(u, { Title: s }), Ze.default.createElement(xo.Box, { display: "flex", flexDirection: "column", flex: 1, overflow: "hidden", minH: "100vh" }, Ze.default.createElement(d, null), Ze.default.createElement(xo.Box, { p: [2, 4] }, a), o && Ze.default.createElement(o, null)), r && Ze.default.createElement(r, null));
      }, "Layout");
      var ot = C(__require("react"));
      var yo = require_dist3();
      var Rt = __require("@chakra-ui/react");
      var wt = n(({ collapsed: t }) => {
        let e = (0, yo.useRouterType)(), s = (0, yo.useLink)(), { Link: o } = (0, yo.useRouterContext)();
        return ot.default.createElement(Rt.Link, { as: e === "legacy" ? o : s, to: "/" }, t ? ot.default.createElement("img", { src: "https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine-mini.svg", alt: "Refine", style: { maxHeight: "38px" } }) : ot.default.createElement("img", { src: "https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine.svg", alt: "Refine", width: "140px", style: { minHeight: "38px" } }));
      }, "Title");
      var Ne = C(__require("react"));
      var nt = __require("@chakra-ui/react");
      var A = C(__require("react"));
      var q = require_dist3();
      var v = __require("@chakra-ui/react");
      var Ke = __require("@tabler/icons");
      var Lt = n(({ Title: t, render: e, meta: s, isSiderOpen: o }) => {
        let [r, a] = (0, A.useState)(false), u = (0, q.useRouterType)(), d = (0, q.useLink)(), { Link: g } = (0, q.useRouterContext)(), m = u === "legacy" ? g : d, { menuItems: x, selectedKey: B, defaultOpenKeys: k } = (0, q.useMenu)({ meta: s }), w = (0, q.useTitle)(), c = (0, q.useIsExistAuthentication)(), L = (0, q.useTranslate)(), { hasDashboard: p } = (0, q.useRefineContext)(), T = (0, q.useActiveAuthProvider)(), { warnWhen: y, setWarnWhen: l } = (0, q.useWarnAboutChange)(), { mutate: b } = (0, q.useLogout)({ v3LegacyAuthProviderCompatible: !!(T != null && T.isLegacy) }), i = t ?? w ?? vt, P = n(() => o ? "200px" : "56px", "siderWidth"), M = { placement: "right", hasArrow: true, isDisabled: o || r }, D = n((F) => F.map((h) => {
          let { label: _, route: pe, name: me, icon: ve, children: te } = h, Te = h.key === B, Ce = te.length > 0, fe = Ce ? void 0 : { as: m, to: pe };
          return A.default.createElement(q.CanAccess, { key: h.key, resource: me.toLowerCase(), action: "list", params: { resource: h } }, A.default.createElement(v.Accordion, { defaultIndex: k.includes(h.key || "") ? 0 : -1, width: "full", mb: 2, allowToggle: true }, A.default.createElement(v.AccordionItem, { border: "none" }, A.default.createElement(v.Tooltip, { label: _, ...M }, A.default.createElement(v.AccordionButton, { px: 0, py: 0, as: "div", width: "full", _hover: { backgroundColor: "transparent" } }, A.default.createElement(v.Button, { colorScheme: Te ? "brand" : "gray", borderRadius: 0, pl: !o && !r ? 6 : 5, width: "full", variant: "ghost", fontWeight: "normal", leftIcon: ve ?? A.default.createElement(A.default.Fragment, null, A.default.createElement(Ke.IconList, { size: 16 })), rightIcon: Ce ? A.default.createElement(v.AccordionIcon, { color: "brand.100" }) : void 0, _active: { _before: { content: "''", bgColor: (0, v.useColorModeValue)("brand.200", "brand.200"), opacity: 0.05, position: "absolute", top: 0, bottom: 0, left: 0, right: 0, width: "100%", height: "100%" }, borderRight: "4px", borderRightColor: "brand.200" }, isActive: Te, ...fe }, (o || r) && A.default.createElement(v.Box, { flexGrow: 1, textAlign: "left" }, _)))), Ce && A.default.createElement(v.AccordionPanel, { p: 0, pl: !o && !r ? 0 : 4 }, A.default.createElement(v.Accordion, { width: "full", allowToggle: true }, D(te))))));
        }), "renderTreeView"), U = D(x), f = p ? A.default.createElement(q.CanAccess, { resource: "dashboard", action: "list" }, A.default.createElement(v.Tooltip, { label: L("dashboard.title", "Dashboard"), ...M }, A.default.createElement(v.Button, { width: "full", justifyContent: !o && !r ? "center" : "flex-start", fontWeight: "normal", leftIcon: A.default.createElement(Ke.IconDashboard, { size: 16 }), variant: "ghost", isActive: B === "/", _active: { color: "brand.200", backgroundColor: "brand.900" }, as: m, to: "/" }, (o || r) && L("dashboard.title", "Dashboard")))) : null, j = n(() => {
          y ? window.confirm(L("warnWhenUnsavedChanges", "Are you sure you want to leave? You have unsaved changes.")) && (l(false), b()) : b();
        }, "handleLogout"), X = c && A.default.createElement(v.Tooltip, { label: L("buttons.logout", "Logout"), ...M }, A.default.createElement(v.Box, { p: 0 }, A.default.createElement(v.Button, { borderRadius: 0, width: "full", justifyContent: !o && !r ? "center" : "flex-start", pl: !o && !r ? 6 : 5, fontWeight: "normal", leftIcon: A.default.createElement(Ke.IconPower, { size: 16 }), variant: "ghost", _active: { color: "brand.200", backgroundColor: "brand.900" }, onClick: j }, (o || r) && L("buttons.logout", "Logout")))), O = n(() => e ? e({ dashboard: f, logout: X, items: U, collapsed: false }) : A.default.createElement(A.default.Fragment, null, f, U, X), "renderSider");
        return A.default.createElement(A.default.Fragment, null, A.default.createElement(v.Box, { position: "fixed", top: 3, left: 0, zIndex: 1200, display: ["block", "block", "none", "none", "none"] }, A.default.createElement(v.IconButton, { borderLeftRadius: 0, "aria-label": "Open Menu", onClick: () => a((F) => !F) }, A.default.createElement(Ke.IconMenu2, null))), A.default.createElement(v.Drawer, { placement: "left", isOpen: r, onClose: () => a(false) }, A.default.createElement(v.DrawerOverlay, null), A.default.createElement(v.DrawerContent, { w: "200px", maxW: "200px" }, A.default.createElement(v.Box, { display: "flex", pl: 4, alignItems: "center", height: "64px", fontSize: "14px", bg: (0, v.useColorModeValue)("refine.sider.header.light", "refine.sider.header.dark") }, A.default.createElement(i, { collapsed: false })), A.default.createElement(v.VStack, { alignItems: "start", flexGrow: 1, bg: (0, v.useColorModeValue)("refine.sider.bg.light", "refine.sider.bg.dark") }, A.default.createElement(v.Box, { width: "full" }, O())))), A.default.createElement(v.Box, { display: ["none", "none", "flex"], width: P(), transition: "width 200ms ease, min-width 200ms ease", flexShrink: 0 }), A.default.createElement(v.Box, { position: "fixed", width: P(), top: 0, h: "100vh", display: ["none", "none", "flex"], flexDirection: "column", transition: "width 200ms ease, min-width 200ms ease" }, A.default.createElement(v.Box, { display: "flex", pl: o ? 4 : 0, justifyContent: o ? "flex-start" : "center", alignItems: "center", fontSize: "14px", height: "64px", borderRight: "1px", borderRightColor: (0, v.useColorModeValue)("gray.200", "gray.700"), bg: (0, v.useColorModeValue)("refine.sider.header.light", "refine.sider.header.dark") }, A.default.createElement(i, { collapsed: !o })), A.default.createElement(v.VStack, { alignItems: "start", paddingTop: 2, flexGrow: 1, borderRight: "1px", borderRightColor: (0, v.useColorModeValue)("gray.200", "gray.700"), bg: (0, v.useColorModeValue)("refine.sider.bg.light", "refine.sider.bg.dark") }, A.default.createElement(v.Box, { width: "full" }, O()))));
      }, "ThemedSider");
      var Qe = C(__require("react"));
      var tt = require_dist3();
      var ce = __require("@chakra-ui/react");
      var rt = __require("@tabler/icons");
      var St = n(({ isSiderOpen: t, onToggleSiderClick: e, toggleSiderIcon: s }) => {
        let o = (0, tt.useActiveAuthProvider)(), { data: r } = (0, tt.useGetIdentity)({ v3LegacyAuthProviderCompatible: !!(o != null && o.isLegacy) }), a = (0, ce.useColorModeValue)("refine.header.bg.light", "refine.header.bg.dark"), u = !!e;
        return Qe.default.createElement(ce.Box, { py: "2", pr: "4", pl: "2", display: "flex", alignItems: "center", justifyContent: u ? { base: "flex-end", md: "space-between" } : "flex-end", w: "full", height: "64px", bg: a, borderBottom: "1px", borderBottomColor: (0, ce.useColorModeValue)("gray.200", "gray.700") }, u && Qe.default.createElement(ce.IconButton, { display: { base: "none", md: "flex" }, backgroundColor: "transparent", "aria-label": "sidebar-toggle", onClick: () => e == null ? void 0 : e() }, (s == null ? void 0 : s(!!t)) ?? (t ? Qe.default.createElement(ce.Icon, { as: rt.IconLayoutSidebarLeftCollapse, boxSize: "24px" }) : Qe.default.createElement(ce.Icon, { as: rt.IconLayoutSidebarLeftExpand, boxSize: "24px" }))), Qe.default.createElement(ce.HStack, null, (r == null ? void 0 : r.name) && Qe.default.createElement(ce.Text, { size: "sm", fontWeight: "bold" }, r.name), (r == null ? void 0 : r.avatar) && Qe.default.createElement(ce.Avatar, { size: "sm", name: (r == null ? void 0 : r.name) || "Profile Photo", src: r.avatar })));
      }, "ThemedHeader");
      var ln = n(({ Sider: t, Header: e, Title: s, Footer: o, OffLayoutArea: r, children: a }) => {
        let [u, d] = (0, Ne.useState)(true);
        return Ne.default.createElement(nt.Box, { display: "flex" }, Ne.default.createElement(t ?? Lt, { Title: s, isSiderOpen: u }), Ne.default.createElement(nt.Box, { display: "flex", flexDirection: "column", flex: 1, overflow: "hidden", minH: "100vh" }, Ne.default.createElement(e ?? St, { isSiderOpen: u, onToggleSiderClick: () => d((x) => !x) }), Ne.default.createElement(nt.Box, { p: [2, 4] }, a), o && Ne.default.createElement(o, null)), r && Ne.default.createElement(r, null));
      }, "ThemedLayout");
      var Je = C(__require("react"));
      var Bo = require_dist3();
      var Xe = __require("@chakra-ui/react");
      var un = "refine Project";
      var dn = Je.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, Je.default.createElement("path", { d: "M12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9Z", fill: "currentColor" }), Je.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18V6Z", fill: "currentColor" }));
      var vt = n(({ collapsed: t, icon: e = dn, text: s = un, wrapperStyles: o }) => {
        let r = (0, Bo.useRouterType)(), a = (0, Bo.useLink)(), { Link: u } = (0, Bo.useRouterContext)();
        return Je.default.createElement(Xe.Link, { as: r === "legacy" ? u : a, to: "/", fontSize: "inherit", textDecoration: "none", _hover: { textDecoration: "none" } }, Je.default.createElement(Xe.HStack, { spacing: "8px", justifyContent: "center", alignItems: "center", fontSize: "inherit", style: { ...o } }, Je.default.createElement(Xe.Icon, { height: "24px", width: "24px", color: "brand.500" }, e), !t && Je.default.createElement(Xe.Heading, { as: "h6", fontWeight: 700, fontSize: "inherit" }, s)));
      }, "ThemedTitle");
      var $e = C(__require("react"));
      var it = __require("@chakra-ui/react");
      var H = C(__require("react"));
      var G = require_dist3();
      var I = __require("@chakra-ui/react");
      var To = __require("@tabler/icons");
      var Re = C(__require("react"));
      var Po = require_dist3();
      var eo = __require("@chakra-ui/react");
      var pn = "refine Project";
      var mn = Re.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, Re.default.createElement("path", { d: "M12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9Z", fill: "currentColor" }), Re.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18V6Z", fill: "currentColor" }));
      var Me = n(({ collapsed: t, icon: e = mn, text: s = pn, wrapperStyles: o }) => {
        let r = (0, Po.useRouterType)(), a = (0, Po.useLink)(), { Link: u } = (0, Po.useRouterContext)();
        return Re.default.createElement(eo.Link, { as: r === "legacy" ? u : a, to: "/", fontSize: "inherit", textDecoration: "none", _hover: { textDecoration: "none" } }, Re.default.createElement(eo.HStack, { spacing: "8px", justifyContent: "center", alignItems: "center", fontSize: "inherit", style: { ...o } }, Re.default.createElement(eo.Icon, { height: "24px", width: "24px", color: "brand.500" }, e), !t && Re.default.createElement(eo.Heading, { as: "h6", fontWeight: 700, fontSize: "inherit" }, s)));
      }, "ThemedTitleV2");
      var fn = n((t) => {
        let { current: e, pageCount: s } = t, o = e === 1 ? void 0 : e - 1, r = e === s ? void 0 : e + 1, a = [1];
        if (e === 1 && s === 1)
          return { current: e, prev: o, next: r, items: a };
        e > 4 && a.push("\u2026");
        let u = 2, d = e - u, g = e + u;
        for (let m = d > 2 ? d : 2; m <= Math.min(s, g); m++)
          a.push(m);
        return g + 1 < s && a.push("\u2026"), g < s && a.push(s), { current: e, prev: o, next: r, items: a };
      }, "usePagination");
      var er = __require("react");
      var Co = C(__require("react"));
      var mo = Co.default.createContext({ siderCollapsed: false, mobileSiderOpen: false, setSiderCollapsed: () => {
      }, setMobileSiderOpen: () => {
      } });
      var st = n(({ children: t, initialSiderCollapsed: e }) => {
        let [s, o] = (0, Co.useState)(e ?? false), [r, a] = (0, Co.useState)(false);
        return Co.default.createElement(mo.Provider, { value: { siderCollapsed: s, mobileSiderOpen: r, setSiderCollapsed: o, setMobileSiderOpen: a } }, t);
      }, "ThemedLayoutContextProvider");
      var cn = n(() => {
        let { mobileSiderOpen: t, siderCollapsed: e, setMobileSiderOpen: s, setSiderCollapsed: o } = (0, er.useContext)(mo);
        return { siderVisible: t, setSiderVisible: s, drawerSiderVisible: !e, setDrawerSiderVisible: (r) => o(!r) };
      }, "useSiderVisible");
      var or = __require("react");
      var $o = n(() => {
        let { mobileSiderOpen: t, siderCollapsed: e, setMobileSiderOpen: s, setSiderCollapsed: o } = (0, or.useContext)(mo);
        return { mobileSiderOpen: t, siderCollapsed: e, setMobileSiderOpen: s, setSiderCollapsed: o };
      }, "useThemedLayoutContext");
      var It = n(({ Title: t, render: e, meta: s, activeItemDisabled: o = false }) => {
        let { siderCollapsed: r, mobileSiderOpen: a, setMobileSiderOpen: u } = $o(), d = (0, G.useRouterType)(), g = (0, G.useLink)(), { Link: m } = (0, G.useRouterContext)(), x = d === "legacy" ? m : g, { menuItems: B, selectedKey: k, defaultOpenKeys: w } = (0, G.useMenu)({ meta: s }), c = (0, G.useTitle)(), L = (0, G.useIsExistAuthentication)(), p = (0, G.useTranslate)(), { hasDashboard: T } = (0, G.useRefineContext)(), y = (0, G.useActiveAuthProvider)(), { warnWhen: l, setWarnWhen: b } = (0, G.useWarnAboutChange)(), { mutate: i } = (0, G.useLogout)({ v3LegacyAuthProviderCompatible: !!(y != null && y.isLegacy) }), P = t ?? c ?? Me, M = n(() => r ? "56px" : "200px", "siderWidth"), D = { placement: "right", hasArrow: true, isDisabled: !r || a }, U = n((h) => h.map((_) => {
          let { label: pe, route: me, name: ve, icon: te, children: Te } = _, Ce = _.key === k, fe = Te.length > 0, Oe = fe ? void 0 : { as: x, to: me }, ho = o && Ce ? { pointerEvents: "none" } : {};
          return H.default.createElement(G.CanAccess, { key: _.key, resource: ve.toLowerCase(), action: "list", params: { resource: _ } }, H.default.createElement(I.Accordion, { defaultIndex: w.includes(_.key || "") ? 0 : -1, width: "full", mb: 2, allowToggle: true }, H.default.createElement(I.AccordionItem, { border: "none" }, H.default.createElement(I.Tooltip, { label: pe, ...D }, H.default.createElement(I.AccordionButton, { px: 0, py: 0, as: "div", width: "full", _hover: { backgroundColor: "transparent" } }, H.default.createElement(I.Button, { colorScheme: Ce ? "brand" : "gray", borderRadius: 0, pl: r && !a ? 6 : 5, width: "full", variant: "ghost", fontWeight: "normal", leftIcon: te ?? H.default.createElement(H.default.Fragment, null, H.default.createElement(To.IconList, { size: 16 })), rightIcon: fe ? H.default.createElement(I.AccordionIcon, { color: "brand.100" }) : void 0, _active: { _before: { content: "''", bgColor: (0, I.useColorModeValue)("brand.200", "brand.200"), opacity: 0.05, position: "absolute", top: 0, bottom: 0, left: 0, right: 0, width: "100%", height: "100%" }, borderRight: "4px", borderRightColor: "brand.200" }, isActive: Ce, style: ho, ...Oe }, (a || !r) && H.default.createElement(I.Box, { flexGrow: 1, textAlign: "left" }, pe)))), fe && H.default.createElement(I.AccordionPanel, { p: 0, pl: r && !a ? 0 : 4 }, H.default.createElement(I.Accordion, { width: "full", allowToggle: true }, U(Te))))));
        }), "renderTreeView"), f = U(B), j = T ? H.default.createElement(G.CanAccess, { resource: "dashboard", action: "list" }, H.default.createElement(I.Tooltip, { label: p("dashboard.title", "Dashboard"), ...D }, H.default.createElement(I.Button, { width: "full", justifyContent: !a && r ? "center" : "flex-start", fontWeight: "normal", leftIcon: H.default.createElement(To.IconDashboard, { size: 16 }), variant: "ghost", isActive: k === "/", _active: { color: "brand.200", backgroundColor: "brand.900" }, as: x, to: "/" }, (a || !r) && p("dashboard.title", "Dashboard")))) : null, X = n(() => {
          l ? window.confirm(p("warnWhenUnsavedChanges", "Are you sure you want to leave? You have unsaved changes.")) && (b(false), i()) : i();
        }, "handleLogout"), O = L && H.default.createElement(I.Tooltip, { label: p("buttons.logout", "Logout"), ...D }, H.default.createElement(I.Box, { p: 0 }, H.default.createElement(I.Button, { borderRadius: 0, width: "full", justifyContent: !a && r ? "center" : "flex-start", pl: !a && r ? 6 : 5, fontWeight: "normal", leftIcon: H.default.createElement(To.IconPower, { size: 16 }), variant: "ghost", _active: { color: "brand.200", backgroundColor: "brand.900" }, onClick: X }, (a || !r) && p("buttons.logout", "Logout")))), F = n(() => e ? e({ dashboard: j, logout: O, items: f, collapsed: false }) : H.default.createElement(H.default.Fragment, null, j, f, O), "renderSider");
        return H.default.createElement(H.default.Fragment, null, H.default.createElement(I.Drawer, { placement: "left", isOpen: a, onClose: () => u(!a) }, H.default.createElement(I.DrawerOverlay, null), H.default.createElement(I.DrawerContent, { w: "200px", maxW: "200px" }, H.default.createElement(I.Box, { display: "flex", flexShrink: 0, pl: 4, alignItems: "center", height: "64px", fontSize: "14px", bg: (0, I.useColorModeValue)("refine.sider.header.light", "refine.sider.header.dark"), borderBottom: "1px", borderBottomColor: (0, I.useColorModeValue)("gray.200", "gray.700") }, H.default.createElement(P, { collapsed: false })), H.default.createElement(I.VStack, { alignItems: "start", flexGrow: 1, bg: (0, I.useColorModeValue)("refine.sider.bg.light", "refine.sider.bg.dark"), overflow: "auto" }, H.default.createElement(I.Box, { width: "full" }, F())))), H.default.createElement(I.Box, { display: ["none", "none", "flex"], width: M(), transition: "width 200ms ease, min-width 200ms ease", flexShrink: 0 }), H.default.createElement(I.Box, { position: "fixed", width: M(), top: 0, h: "100vh", display: ["none", "none", "flex"], flexDirection: "column", transition: "width 200ms ease, min-width 200ms ease" }, H.default.createElement(I.Box, { display: "flex", flexShrink: 0, pl: r ? 0 : 4, justifyContent: r ? "center" : "flex-start", alignItems: "center", fontSize: "14px", height: "64px", borderRight: "1px", borderRightColor: (0, I.useColorModeValue)("gray.200", "gray.700"), borderBottom: "1px", borderBottomColor: (0, I.useColorModeValue)("gray.200", "gray.700"), bg: (0, I.useColorModeValue)("refine.sider.header.light", "refine.sider.header.dark") }, H.default.createElement(P, { collapsed: r })), H.default.createElement(I.VStack, { alignItems: "start", paddingY: 2, height: "100%", flexGrow: 1, borderRight: "1px", borderRightColor: (0, I.useColorModeValue)("gray.200", "gray.700"), bg: (0, I.useColorModeValue)("refine.sider.bg.light", "refine.sider.bg.dark") }, H.default.createElement(I.Box, { width: "full", overflow: "auto" }, F()))));
      }, "ThemedSiderV2");
      var fo = C(__require("react"));
      var ko = require_dist3();
      var Ie = __require("@chakra-ui/react");
      var _e = C(__require("react"));
      var rr = __require("@chakra-ui/react");
      var wo = __require("@tabler/icons");
      var tr = n((t) => _e.default.createElement(rr.IconButton, { variant: "ghost", size: "sm", ...t }), "HamburgerIcon");
      var Ft = n(() => {
        let { siderCollapsed: t, setSiderCollapsed: e, mobileSiderOpen: s, setMobileSiderOpen: o } = $o();
        return _e.default.createElement(_e.default.Fragment, null, _e.default.createElement(tr, { display: { base: "none", md: "flex" }, "aria-label": "drawer-sidebar-toggle", icon: t ? _e.default.createElement(wo.IconLayoutSidebarLeftExpand, null) : _e.default.createElement(wo.IconLayoutSidebarLeftCollapse, null), onClick: () => e(!t) }), _e.default.createElement(tr, { display: { base: "flex", md: "none" }, "aria-label": "sidebar-toggle", icon: _e.default.createElement(wo.IconMenu2, null), onClick: () => o(!s) }));
      }, "HamburgerMenu");
      var At = n(({ isSticky: t, sticky: e }) => {
        let s = (0, ko.useActiveAuthProvider)(), { data: o } = (0, ko.useGetIdentity)({ v3LegacyAuthProviderCompatible: !!(s != null && s.isLegacy) }), r = (0, Ie.useColorModeValue)("refine.header.bg.light", "refine.header.bg.dark"), a = {};
        return (0, ko.pickNotDeprecated)(e, t) && (a = { position: "sticky", top: 0, zIndex: 1 }), fo.default.createElement(Ie.Box, { py: "2", px: "4", display: "flex", alignItems: "center", w: "full", height: "64px", bg: r, borderBottom: "1px", borderBottomColor: (0, Ie.useColorModeValue)("gray.200", "gray.700"), ...a }, fo.default.createElement(Ie.Box, { w: "full", display: "flex", justifyContent: "space-between", alignItems: "center" }, fo.default.createElement(Ft, null), fo.default.createElement(Ie.HStack, null, (o == null ? void 0 : o.name) && fo.default.createElement(Ie.Text, { size: "sm", fontWeight: "bold" }, o.name), (o == null ? void 0 : o.avatar) && fo.default.createElement(Ie.Avatar, { size: "sm", name: (o == null ? void 0 : o.name) || "Profile Photo", src: o.avatar }))));
      }, "ThemedHeaderV2");
      var gn = n(({ Sider: t, Header: e, Title: s, Footer: o, OffLayoutArea: r, children: a, initialSiderCollapsed: u }) => $e.default.createElement(st, { initialSiderCollapsed: u }, $e.default.createElement(it.Box, { display: "flex" }, $e.default.createElement(t ?? It, { Title: s }), $e.default.createElement(it.Box, { display: "flex", flexDirection: "column", flex: 1, minH: "100vh", overflow: "clip" }, $e.default.createElement(e ?? At, null), $e.default.createElement(it.Box, { p: [2, 4] }, a), o && $e.default.createElement(o, null)), r && $e.default.createElement(r, null))), "ThemedLayoutV2");
      var Fe = C(__require("react"));
      var Ue = require_dist3();
      var qe = __require("@chakra-ui/react");
      var Dt = require_dist4();
      var bn = n((t) => {
        let { canCreate: e, children: s, createButtonProps: o, resource: r, wrapperProps: a, contentProps: u, headerProps: d, headerButtonProps: g, headerButtons: m, breadcrumb: x, title: B } = t, k = (0, Ue.useTranslate)(), { options: { breadcrumb: w } = {} } = (0, Ue.useRefineContext)(), c = (0, Ue.useRouterType)(), L = (0, Ue.useUserFriendlyName)(), { resource: p, identifier: T } = (0, Ue.useResource)(r), y = e ?? (((p == null ? void 0 : p.canCreate) ?? !!(p != null && p.create)) || o), l = typeof x > "u" ? w : x, b = y ? { resource: c === "legacy" ? p == null ? void 0 : p.route : T, ...o } : void 0, i = y ? Fe.default.createElement(at, { ...b }) : null, P = m ? typeof m == "function" ? m({ defaultButtons: i, createButtonProps: b }) : m : i, M = n(() => {
          var D, U;
          return B === false ? null : B ? typeof B == "string" || typeof B == "number" ? Fe.default.createElement(qe.Heading, { as: "h3", size: "lg", className: Dt.RefinePageHeaderClassNames.Title }, B) : B : Fe.default.createElement(qe.Heading, { as: "h3", size: "lg", className: Dt.RefinePageHeaderClassNames.Title }, k(`${T}.titles.list`, L(((D = p == null ? void 0 : p.meta) == null ? void 0 : D.label) ?? ((U = p == null ? void 0 : p.options) == null ? void 0 : U.label) ?? (p == null ? void 0 : p.label) ?? T, "plural")));
        }, "renderTitle");
        return Fe.default.createElement(qe.Box, { bg: "chakra-body-bg", borderRadius: "md", px: "4", py: "3", ...a }, Fe.default.createElement(qe.Box, { mb: "3", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: { base: "wrap", md: "nowrap" }, gap: "3", ...d }, Fe.default.createElement(qe.Box, { minW: 200 }, typeof l < "u" ? Fe.default.createElement(Fe.default.Fragment, null, l) ?? void 0 : Fe.default.createElement(Ge, null), M()), Fe.default.createElement(qe.Box, { display: "flex", flexWrap: "wrap", justifyContent: { base: "flex-start", md: "flex-end" }, gap: "2", ...g }, P)), Fe.default.createElement(qe.Box, { ...u }, s));
      }, "List");
      var K = C(__require("react"));
      var re = require_dist3();
      var ge = __require("@chakra-ui/react");
      var nr = __require("@tabler/icons");
      var zt = require_dist4();
      var hn = n((t) => {
        var jo;
        let { children: e, resource: s, recordItemId: o, canDelete: r, canEdit: a, dataProviderName: u, isLoading: d, footerButtons: g, footerButtonProps: m, headerButtons: x, headerButtonProps: B, wrapperProps: k, contentProps: w, headerProps: c, goBack: L, breadcrumb: p, title: T } = t, y = (0, re.useTranslate)(), { options: { breadcrumb: l } = {} } = (0, re.useRefineContext)(), b = (0, re.useRouterType)(), i = (0, re.useBack)(), P = (0, re.useGo)(), { goBack: M, list: D } = (0, re.useNavigation)(), U = (0, re.useUserFriendlyName)(), { resource: f, action: j, id: X, identifier: O } = (0, re.useResource)(s), F = (0, re.useToPath)({ resource: f, action: "list" }), h = o ?? X, _ = typeof p > "u" ? l : p, pe = (f == null ? void 0 : f.list) && !o, me = r ?? ((jo = f == null ? void 0 : f.meta) == null ? void 0 : jo.canDelete) ?? (f == null ? void 0 : f.canDelete), ve = a ?? (f == null ? void 0 : f.canEdit) ?? !!(f != null && f.edit), te = pe ? { ...d ? { disabled: true } : {}, resource: b === "legacy" ? f == null ? void 0 : f.route : O } : void 0, Te = ve ? { colorScheme: "brand", ...d ? { disabled: true } : {}, resource: b === "legacy" ? f == null ? void 0 : f.route : O, recordItemId: h } : void 0, Ce = me ? { ...d ? { disabled: true } : {}, resource: b === "legacy" ? f == null ? void 0 : f.route : O, recordItemId: h, onSuccess: () => {
          b === "legacy" ? D((f == null ? void 0 : f.route) ?? (f == null ? void 0 : f.name) ?? "") : P({ to: F });
        }, dataProviderName: u } : void 0, fe = { ...d ? { disabled: true } : {}, resource: b === "legacy" ? f == null ? void 0 : f.route : O, recordItemId: h, dataProviderName: u }, Oe = K.default.createElement(K.default.Fragment, null, te && K.default.createElement(So, { ...te }), ve && K.default.createElement(lt, { colorScheme: "brand", ...Te }), me && K.default.createElement(Lo, { ...Ce }), K.default.createElement(vo, { ...fe })), ho = L === null ? null : K.default.createElement(ge.IconButton, { "aria-label": "back", variant: "ghost", size: "sm", onClick: j !== "list" && typeof j < "u" ? b === "legacy" ? M : i : void 0 }, typeof L < "u" ? L : K.default.createElement(nr.IconArrowLeft, null)), Ko = x ? typeof x == "function" ? x({ defaultButtons: Oe, deleteButtonProps: Ce, editButtonProps: Te, listButtonProps: te, refreshButtonProps: fe }) : x : Oe, Qo = g ? typeof g == "function" ? g({ defaultButtons: null }) : g : null, Jo = n(() => {
          var Xo, Ro;
          return T === false ? null : T ? typeof T == "string" || typeof T == "number" ? K.default.createElement(ge.Heading, { as: "h3", size: "lg", className: zt.RefinePageHeaderClassNames.Title }, T) : T : K.default.createElement(ge.Heading, { as: "h3", size: "lg", className: zt.RefinePageHeaderClassNames.Title }, y(`${O}.titles.show`, `Show ${U(((Xo = f == null ? void 0 : f.meta) == null ? void 0 : Xo.label) ?? ((Ro = f == null ? void 0 : f.options) == null ? void 0 : Ro.label) ?? (f == null ? void 0 : f.label) ?? O, "singular")}`));
        }, "renderTitle");
        return K.default.createElement(ge.Box, { position: "relative", bg: "chakra-body-bg", borderRadius: "md", px: "4", py: "3", ...k }, d && K.default.createElement(ge.Spinner, { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }), K.default.createElement(ge.Box, { mb: "3", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: { base: "wrap", md: "nowrap" }, gap: "3", ...c }, K.default.createElement(ge.Box, { minW: 200 }, typeof _ < "u" ? K.default.createElement(K.default.Fragment, null, _) ?? void 0 : K.default.createElement(Ge, null), K.default.createElement(ge.HStack, null, ho, Jo())), K.default.createElement(ge.Box, { display: "flex", flexWrap: "wrap", justifyContent: { base: "flex-start", md: "flex-end" }, gap: "2", ...B }, Ko)), K.default.createElement(ge.Box, { opacity: d ? 0.5 : void 0, ...w }, e), K.default.createElement(ge.Box, { display: "flex", justifyContent: "flex-end", gap: "2", mt: 8, ...m }, Qo));
      }, "Show");
      var Y = C(__require("react"));
      var R = require_dist3();
      var ie = __require("@chakra-ui/react");
      var sr = __require("@tabler/icons");
      var Ht = require_dist4();
      var xn = n((t) => {
        var Kt;
        let { children: e, resource: s, recordItemId: o, deleteButtonProps: r, mutationMode: a, saveButtonProps: u, canDelete: d, dataProviderName: g, isLoading: m, footerButtons: x, footerButtonProps: B, headerButtons: k, headerButtonProps: w, wrapperProps: c, contentProps: L, headerProps: p, goBack: T, breadcrumb: y, title: l, autoSaveProps: b } = t, i = (0, R.useTranslate)(), { options: { breadcrumb: P } = {} } = (0, R.useRefineContext)(), { mutationMode: M } = (0, R.useMutationMode)(), D = a ?? M, U = (0, R.useRouterType)(), f = (0, R.useBack)(), j = (0, R.useGo)(), { goBack: X, list: O } = (0, R.useNavigation)(), F = (0, R.useUserFriendlyName)(), { resource: h, action: _, id: pe, identifier: me } = (0, R.useResource)(s), ve = (0, R.useToPath)({ resource: h, action: "list" }), te = o ?? pe, Te = typeof y > "u" ? P : y, Ce = (h == null ? void 0 : h.list) && !o, fe = d ?? ((((Kt = h == null ? void 0 : h.meta) == null ? void 0 : Kt.canDelete) ?? (h == null ? void 0 : h.canDelete)) || r), Oe = Ce ? { ...m ? { disabled: true } : {}, resource: U === "legacy" ? h == null ? void 0 : h.route : me } : void 0, ho = { ...m ? { disabled: true } : {}, resource: U === "legacy" ? h == null ? void 0 : h.route : me, recordItemId: te, dataProviderName: g }, Ko = fe ? { ...m ? { disabled: true } : {}, resource: U === "legacy" ? h == null ? void 0 : h.route : me, mutationMode: D, onSuccess: () => {
          U === "legacy" ? O((h == null ? void 0 : h.route) ?? (h == null ? void 0 : h.name) ?? "") : j({ to: ve });
        }, recordItemId: te, dataProviderName: g, ...r } : void 0, Qo = { ...m ? { disabled: true } : {}, ...u }, Jo = Y.default.createElement(ie.Box, { display: "flex", flexDirection: "row", alignItems: "center", gap: "2" }, b && Y.default.createElement(Et, { ...b }), Ce && Y.default.createElement(So, { ...Oe }), Y.default.createElement(vo, { ...ho })), jo = Y.default.createElement(Y.default.Fragment, null, fe && Y.default.createElement(Lo, { ...Ko }), Y.default.createElement(Io, { ...Qo })), Xo = T === null ? null : Y.default.createElement(ie.IconButton, { "aria-label": "back", variant: "ghost", size: "sm", onClick: _ !== "list" && typeof _ < "u" ? U === "legacy" ? X : f : void 0 }, typeof T < "u" ? T : Y.default.createElement(sr.IconArrowLeft, null)), Ro = k ? typeof k == "function" ? k({ defaultButtons: Jo, listButtonProps: Oe, refreshButtonProps: ho }) : k : Jo, Jr = x ? typeof x == "function" ? x({ defaultButtons: jo, deleteButtonProps: Ko, saveButtonProps: Qo }) : x : jo, Xr = n(() => {
          var Qt, Jt;
          return l === false ? null : l ? typeof l == "string" || typeof l == "number" ? Y.default.createElement(ie.Heading, { as: "h3", size: "lg", className: Ht.RefinePageHeaderClassNames.Title }, l) : l : Y.default.createElement(ie.Heading, { as: "h3", size: "lg", className: Ht.RefinePageHeaderClassNames.Title }, i(`${me}.titles.edit`, `Edit ${F(((Qt = h == null ? void 0 : h.meta) == null ? void 0 : Qt.label) ?? ((Jt = h == null ? void 0 : h.options) == null ? void 0 : Jt.label) ?? (h == null ? void 0 : h.label) ?? me, "singular")}`));
        }, "renderTitle");
        return Y.default.createElement(ie.Box, { position: "relative", bg: "chakra-body-bg", borderRadius: "md", px: "4", py: "3", ...c }, m && Y.default.createElement(ie.Spinner, { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }), Y.default.createElement(ie.Box, { mb: "3", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: { base: "wrap", md: "nowrap" }, gap: "3", ...p }, Y.default.createElement(ie.Box, { minW: 200 }, typeof Te < "u" ? Y.default.createElement(Y.default.Fragment, null, Te) ?? void 0 : Y.default.createElement(Ge, null), Y.default.createElement(ie.HStack, { spacing: 2 }, Xo, Xr())), Y.default.createElement(ie.Box, { display: "flex", flexWrap: "wrap", justifyContent: { base: "flex-start", md: "flex-end" }, gap: "2", ...w }, Ro)), Y.default.createElement(ie.Box, { opacity: m ? 0.5 : void 0, ...L }, e), Y.default.createElement(ie.Box, { display: "flex", justifyContent: "flex-end", gap: "2", mt: 8, ...B }, Jr));
      }, "Edit");
      var ae = C(__require("react"));
      var we = require_dist3();
      var be = __require("@chakra-ui/react");
      var ir = __require("@tabler/icons");
      var Mt = require_dist4();
      var yn = n((t) => {
        let { children: e, saveButtonProps: s, isLoading: o, resource: r, footerButtons: a, footerButtonProps: u, headerButtons: d, headerButtonProps: g, wrapperProps: m, contentProps: x, headerProps: B, goBack: k, breadcrumb: w, title: c } = t, L = (0, we.useTranslate)(), { options: { breadcrumb: p } = {} } = (0, we.useRefineContext)(), T = (0, we.useRouterType)(), y = (0, we.useBack)(), { goBack: l } = (0, we.useNavigation)(), b = (0, we.useUserFriendlyName)(), { resource: i, action: P, identifier: M } = (0, we.useResource)(r), D = typeof w > "u" ? p : w, U = { ...o ? { disabled: true } : {}, ...s }, f = ae.default.createElement(Io, { ...U }), j = k === null ? null : ae.default.createElement(be.IconButton, { "aria-label": "back", variant: "ghost", size: "sm", onClick: P !== "list" || typeof P < "u" ? T === "legacy" ? l : y : void 0 }, typeof k < "u" ? k : ae.default.createElement(ir.IconArrowLeft, null)), X = d ? typeof d == "function" ? d({ defaultButtons: null }) : d : null, O = a ? typeof a == "function" ? a({ defaultButtons: f, saveButtonProps: U }) : a : f, F = n(() => {
          var h, _;
          return c === false ? null : c ? typeof c == "string" || typeof c == "number" ? ae.default.createElement(be.Heading, { as: "h3", size: "lg", className: Mt.RefinePageHeaderClassNames.Title }, c) : c : ae.default.createElement(be.Heading, { as: "h3", size: "lg", className: Mt.RefinePageHeaderClassNames.Title }, L(`${M}.titles.create`, `Create ${b(((h = i == null ? void 0 : i.meta) == null ? void 0 : h.label) ?? ((_ = i == null ? void 0 : i.options) == null ? void 0 : _.label) ?? (i == null ? void 0 : i.label) ?? M, "singular")}`));
        }, "renderTitle");
        return ae.default.createElement(be.Box, { position: "relative", bg: "chakra-body-bg", borderRadius: "md", px: "4", py: "3", ...m }, o && ae.default.createElement(be.Spinner, { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }), ae.default.createElement(be.Box, { mb: "3", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: { base: "wrap", md: "nowrap" }, gap: "3", ...B }, ae.default.createElement(be.Box, { minW: 200 }, typeof D < "u" ? ae.default.createElement(ae.default.Fragment, null, D) : ae.default.createElement(Ge, null), ae.default.createElement(be.HStack, null, j, F())), ae.default.createElement(be.Box, { display: "flex", flexWrap: "wrap", justifyContent: { base: "flex-start", md: "flex-end" }, gap: "2", ...g }, X)), ae.default.createElement(be.Box, { opacity: o ? 0.5 : void 0, ...x }, e), ae.default.createElement(be.Box, { display: "flex", justifyContent: "flex-end", gap: "2", mt: "8", ...u }, O));
      }, "Create");
      var oo = C(__require("react"));
      var he = require_dist3();
      var Fo = require_dist4();
      var ut = __require("@chakra-ui/react");
      var Nt = __require("@tabler/icons");
      var at = n(({ resource: t, resourceNameOrRouteName: e, hideText: s = false, accessControl: o, svgIconProps: r, meta: a, children: u, onClick: d, ...g }) => {
        let m = (0, oo.useContext)(he.AccessControlContext), x = (o == null ? void 0 : o.enabled) ?? m.options.buttons.enableAccessControl, B = (o == null ? void 0 : o.hideIfUnauthorized) ?? m.options.buttons.hideIfUnauthorized, k = (0, he.useTranslate)(), w = (0, he.useRouterType)(), c = (0, he.useLink)(), { Link: L } = (0, he.useRouterContext)(), p = w === "legacy" ? L : c, { createUrl: T } = (0, he.useNavigation)(), { resource: y } = (0, he.useResource)(t ?? e), { data: l } = (0, he.useCan)({ resource: y == null ? void 0 : y.name, action: "create", queryOptions: { enabled: x }, params: { resource: y } }), b = n(() => l != null && l.can ? "" : l != null && l.reason ? l.reason : k("buttons.notAccessTitle", "You don't have permission to access"), "disabledTitle"), i = y ? T(y, a) : "";
        return x && B && !(l != null && l.can) ? null : oo.default.createElement(p, { to: i, replace: false, onClick: (P) => {
          d && (P.preventDefault(), d(P));
        } }, s ? oo.default.createElement(ut.IconButton, { colorScheme: "brand", variant: "outline", "aria-label": k("buttons.create", "Create"), title: b(), isDisabled: (l == null ? void 0 : l.can) === false, className: Fo.RefineButtonClassNames.CreateButton, ...g }, oo.default.createElement(Nt.IconSquarePlus, { size: 20, ...r })) : oo.default.createElement(ut.Button, { colorScheme: "brand", isDisabled: (l == null ? void 0 : l.can) === false, leftIcon: oo.default.createElement(Nt.IconSquarePlus, { size: 20 }), title: b(), className: Fo.RefineButtonClassNames.CreateButton, ...g }, u ?? k("buttons.create", "Create")));
      }, "CreateButton");
      var to = C(__require("react"));
      var xe = require_dist3();
      var Ao = require_dist4();
      var Ut = __require("@tabler/icons");
      var dt = __require("@chakra-ui/react");
      var lt = n(({ resource: t, resourceNameOrRouteName: e, recordItemId: s, hideText: o = false, accessControl: r, svgIconProps: a, meta: u, children: d, onClick: g, ...m }) => {
        let x = (0, to.useContext)(xe.AccessControlContext), B = (r == null ? void 0 : r.enabled) ?? x.options.buttons.enableAccessControl, k = (r == null ? void 0 : r.hideIfUnauthorized) ?? x.options.buttons.hideIfUnauthorized, w = (0, xe.useTranslate)(), c = (0, xe.useRouterType)(), L = (0, xe.useLink)(), { Link: p } = (0, xe.useRouterContext)(), T = c === "legacy" ? p : L, { editUrl: y } = (0, xe.useNavigation)(), { id: l, resource: b } = (0, xe.useResource)(t ?? e), { data: i } = (0, xe.useCan)({ resource: b == null ? void 0 : b.name, action: "edit", params: { id: s ?? l, resource: b }, queryOptions: { enabled: B } }), P = n(() => i != null && i.can ? "" : i != null && i.reason ? i.reason : w("buttons.notAccessTitle", "You don't have permission to access"), "disabledTitle"), M = b && (s ?? l) ? y(b, s ?? l, u) : "";
        return B && k && !(i != null && i.can) ? null : to.default.createElement(T, { to: M, replace: false, onClick: (D) => {
          g && (D.preventDefault(), g(D));
        } }, o ? to.default.createElement(dt.IconButton, { variant: "outline", "aria-label": w("buttons.edit", "Edit"), title: P(), isDisabled: (i == null ? void 0 : i.can) === false, className: Ao.RefineButtonClassNames.EditButton, ...m }, to.default.createElement(Ut.IconPencil, { size: 20, ...a })) : to.default.createElement(dt.Button, { variant: "outline", isDisabled: (i == null ? void 0 : i.can) === false, leftIcon: to.default.createElement(Ut.IconPencil, { size: 20, ...a }), title: P(), className: Ao.RefineButtonClassNames.EditButton, ...m }, d ?? w("buttons.edit", "Edit")));
      }, "EditButton");
      var ne = C(__require("react"));
      var le = require_dist3();
      var Do = require_dist4();
      var ee = __require("@chakra-ui/react");
      var Wt = __require("@tabler/icons");
      var Lo = n(({ resource: t, resourceNameOrRouteName: e, recordItemId: s, onSuccess: o, mutationMode: r, children: a, successNotification: u, errorNotification: d, hideText: g = false, accessControl: m, meta: x, metaData: B, dataProviderName: k, confirmTitle: w, confirmOkText: c, confirmCancelText: L, svgIconProps: p, ...T }) => {
        let y = (0, ne.useContext)(le.AccessControlContext), l = (m == null ? void 0 : m.enabled) ?? y.options.buttons.enableAccessControl, b = (m == null ? void 0 : m.hideIfUnauthorized) ?? y.options.buttons.hideIfUnauthorized, i = (0, le.useTranslate)(), { id: P, resource: M, identifier: D } = (0, le.useResource)(t ?? e), { mutationMode: U } = (0, le.useMutationMode)(), f = r ?? U, { mutate: j, isLoading: X, variables: O } = (0, le.useDelete)(), { data: F } = (0, le.useCan)({ resource: M == null ? void 0 : M.name, action: "delete", params: { id: s ?? P, resource: M }, queryOptions: { enabled: l } }), h = n(() => F != null && F.can ? "" : F != null && F.reason ? F.reason : i("buttons.notAccessTitle", "You don't have permission to access"), "disabledTitle"), [_, pe] = (0, ne.useState)(false), me = n(() => {
          D && (s ?? P) && (ve(false), pe(false), j({ id: s ?? P ?? "", resource: D, mutationMode: f, successNotification: u, errorNotification: d, meta: (0, le.pickNotDeprecated)(x, B), metaData: (0, le.pickNotDeprecated)(x, B), dataProviderName: k }, { onSuccess: (te) => {
            o && o(te);
          } }));
        }, "onConfirm"), { setWarnWhen: ve } = (0, le.useWarnAboutChange)();
        return l && b && !(F != null && F.can) ? null : ne.default.createElement(ee.Popover, { isOpen: _, isLazy: true }, ne.default.createElement(ee.PopoverTrigger, null, g ? ne.default.createElement(ee.IconButton, { colorScheme: "red", variant: "outline", "aria-label": i("buttons.edit", "Edit"), onClick: () => pe((te) => !te), isDisabled: X || (F == null ? void 0 : F.can) === false, isLoading: (s ?? P) === (O == null ? void 0 : O.id) && X, className: Do.RefineButtonClassNames.DeleteButton, ...T }, ne.default.createElement(Wt.IconTrash, { size: 20, ...p })) : ne.default.createElement(ee.Button, { colorScheme: "red", variant: "outline", onClick: () => pe((te) => !te), isDisabled: X || (F == null ? void 0 : F.can) === false, isLoading: P === (O == null ? void 0 : O.id) && X, leftIcon: ne.default.createElement(Wt.IconTrash, { size: 20, ...p }), title: h(), className: Do.RefineButtonClassNames.DeleteButton, ...T }, a ?? i("buttons.delete", "Delete"))), ne.default.createElement(ee.PopoverContent, null, ne.default.createElement(ee.PopoverArrow, null), ne.default.createElement(ee.PopoverHeader, { textAlign: "center" }, w ?? i("buttons.confirm", "Are you sure?")), ne.default.createElement(ee.PopoverBody, { display: "flex", justifyContent: "center" }, ne.default.createElement(ee.HStack, null, ne.default.createElement(ee.Button, { onClick: () => pe(false), size: "sm" }, L ?? i("buttons.cancel", "Cancel")), ne.default.createElement(ee.Button, { colorScheme: "red", onClick: me, autoFocus: true, size: "sm" }, c ?? i("buttons.delete", "Delete"))))));
      }, "DeleteButton");
      var qo = C(__require("react"));
      var We = require_dist3();
      var zo = require_dist4();
      var pt = __require("@chakra-ui/react");
      var Vt = __require("@tabler/icons");
      var ar = __require("@tanstack/react-query");
      var vo = n(({ resource: t, resourceNameOrRouteName: e, recordItemId: s, hideText: o = false, dataProviderName: r, svgIconProps: a, children: u, onClick: d, meta: g, metaData: m, ...x }) => {
        let B = (0, We.useTranslate)(), k = (0, ar.useQueryClient)(), w = (0, We.useInvalidate)(), { resources: c, identifier: L, id: p } = (0, We.useResource)(t ?? e), T = !!k.isFetching({ queryKey: (0, We.queryKeys)(L, (0, We.pickDataProvider)(L, r, c)).detail(s ?? p) }), y = n(() => {
          w({ id: s ?? p, invalidates: ["detail"], dataProviderName: r, resource: L });
        }, "handleInvalidate");
        return o ? qo.default.createElement(pt.IconButton, { variant: "outline", "aria-label": B("buttons.refresh", "Refresh"), onClick: (l) => {
          d ? d(l) : y();
        }, isLoading: T, className: zo.RefineButtonClassNames.RefreshButton, ...x }, qo.default.createElement(Vt.IconRefresh, { size: 20, ...a })) : qo.default.createElement(pt.Button, { variant: "outline", leftIcon: qo.default.createElement(Vt.IconRefresh, { size: 20, ...a }), isLoading: T, onClick: (l) => {
          d ? d(l) : y();
        }, className: zo.RefineButtonClassNames.RefreshButton, ...x }, u ?? B("buttons.refresh", "Refresh"));
      }, "RefreshButton");
      var ro = C(__require("react"));
      var ye = require_dist3();
      var Ho = require_dist4();
      var mt = __require("@chakra-ui/react");
      var jt = __require("@tabler/icons");
      var lr = n(({ resource: t, resourceNameOrRouteName: e, recordItemId: s, hideText: o = false, accessControl: r, svgIconProps: a, meta: u, children: d, onClick: g, ...m }) => {
        let x = (0, ro.useContext)(ye.AccessControlContext), B = (r == null ? void 0 : r.enabled) ?? x.options.buttons.enableAccessControl, k = (r == null ? void 0 : r.hideIfUnauthorized) ?? x.options.buttons.hideIfUnauthorized, { showUrl: w } = (0, ye.useNavigation)(), c = (0, ye.useRouterType)(), L = (0, ye.useLink)(), { Link: p } = (0, ye.useRouterContext)(), T = c === "legacy" ? p : L, y = (0, ye.useTranslate)(), { id: l, resource: b } = (0, ye.useResource)(t ?? e), { data: i } = (0, ye.useCan)({ resource: b == null ? void 0 : b.name, action: "show", params: { id: s ?? l, resource: b }, queryOptions: { enabled: B } }), P = n(() => i != null && i.can ? "" : i != null && i.reason ? i.reason : y("buttons.notAccessTitle", "You don't have permission to access"), "disabledTitle"), M = b && (s || l) ? w(b, s ?? l, u) : "";
        return B && k && !(i != null && i.can) ? null : ro.default.createElement(T, { to: M, replace: false, onClick: (D) => {
          g && (D.preventDefault(), g(D));
        } }, o ? ro.default.createElement(mt.IconButton, { variant: "outline", "aria-label": y("buttons.show", "Show"), isDisabled: (i == null ? void 0 : i.can) === false, title: P(), className: Ho.RefineButtonClassNames.ShowButton, ...m }, ro.default.createElement(jt.IconEye, { size: 20, ...a })) : ro.default.createElement(mt.Button, { variant: "outline", isDisabled: (i == null ? void 0 : i.can) === false, leftIcon: ro.default.createElement(jt.IconEye, { size: 20, ...a }), title: P(), className: Ho.RefineButtonClassNames.ShowButton, ...m }, d ?? y("buttons.show", "Show")));
      }, "ShowButton");
      var no = C(__require("react"));
      var oe = require_dist3();
      var Eo = require_dist4();
      var ft = __require("@chakra-ui/react");
      var Ot = __require("@tabler/icons");
      var So = n(({ resource: t, resourceNameOrRouteName: e, hideText: s = false, accessControl: o, svgIconProps: r, meta: a, children: u, onClick: d, ...g }) => {
        var D, U;
        let m = (0, no.useContext)(oe.AccessControlContext), x = (o == null ? void 0 : o.enabled) ?? m.options.buttons.enableAccessControl, B = (o == null ? void 0 : o.hideIfUnauthorized) ?? m.options.buttons.hideIfUnauthorized, { listUrl: k } = (0, oe.useNavigation)(), w = (0, oe.useRouterType)(), c = (0, oe.useLink)(), { Link: L } = (0, oe.useRouterContext)(), p = (0, oe.useUserFriendlyName)(), T = w === "legacy" ? L : c, y = (0, oe.useTranslate)(), { resource: l, identifier: b } = (0, oe.useResource)(t ?? e), { data: i } = (0, oe.useCan)({ resource: l == null ? void 0 : l.name, action: "list", queryOptions: { enabled: x }, params: { resource: l } }), P = n(() => i != null && i.can ? "" : i != null && i.reason ? i.reason : y("buttons.notAccessTitle", "You don't have permission to access"), "disabledTitle"), M = l ? k(l, a) : "";
        return x && B && !(i != null && i.can) ? null : no.default.createElement(T, { to: M, replace: false, onClick: (f) => {
          d && (f.preventDefault(), d(f));
        } }, s ? no.default.createElement(ft.IconButton, { variant: "outline", "aria-label": y(`${b}.titles.list`, p(((D = l == null ? void 0 : l.meta) == null ? void 0 : D.label) ?? (l == null ? void 0 : l.label) ?? b ?? e, "plural")), isDisabled: (i == null ? void 0 : i.can) === false, title: P(), className: Eo.RefineButtonClassNames.ListButton, ...g }, no.default.createElement(Ot.IconList, { size: 20, ...r })) : no.default.createElement(ft.Button, { variant: "outline", isDisabled: (i == null ? void 0 : i.can) === false, leftIcon: no.default.createElement(Ot.IconList, { size: 20, ...r }), title: P(), className: Eo.RefineButtonClassNames.ListButton, ...g }, u ?? y(`${b ?? t ?? e}.titles.list`, p(((U = l == null ? void 0 : l.meta) == null ? void 0 : U.label) ?? (l == null ? void 0 : l.label) ?? b ?? (0, oe.pickNotDeprecated)(t, e), "plural"))));
      }, "ListButton");
      var Go = C(__require("react"));
      var ur = require_dist3();
      var Mo = require_dist4();
      var ct = __require("@chakra-ui/react");
      var _t = __require("@tabler/icons");
      var dr = n(({ hideText: t = false, children: e, loading: s = false, svgIconProps: o, ...r }) => {
        let a = (0, ur.useTranslate)();
        return t ? Go.default.createElement(ct.IconButton, { variant: "outline", "aria-label": a("buttons.export", "Export"), isLoading: s, className: Mo.RefineButtonClassNames.ExportButton, ...r }, Go.default.createElement(_t.IconFileExport, { size: 20, ...o })) : Go.default.createElement(ct.Button, { variant: "outline", isLoading: s, leftIcon: Go.default.createElement(_t.IconFileExport, { size: 20, ...o }), className: Mo.RefineButtonClassNames.ExportButton, ...r }, e ?? a("buttons.export", "Export"));
      }, "ExportButton");
      var Yo = C(__require("react"));
      var pr = require_dist3();
      var No = require_dist4();
      var gt = __require("@chakra-ui/react");
      var $t = __require("@tabler/icons");
      var Io = n(({ hideText: t = false, svgIconProps: e, children: s, ...o }) => {
        let r = (0, pr.useTranslate)();
        return t ? Yo.default.createElement(gt.IconButton, { colorScheme: "green", "aria-label": r("buttons.save", "Save"), className: No.RefineButtonClassNames.SaveButton, ...o }, Yo.default.createElement($t.IconDeviceFloppy, { size: 20, ...e })) : Yo.default.createElement(gt.Button, { colorScheme: "green", leftIcon: Yo.default.createElement($t.IconDeviceFloppy, { size: 20, ...e }), className: No.RefineButtonClassNames.SaveButton, ...o }, s ?? r("buttons.save", "Save"));
      }, "SaveButton");
      var so = C(__require("react"));
      var Be = require_dist3();
      var Uo = require_dist4();
      var bt = __require("@chakra-ui/react");
      var qt = __require("@tabler/icons");
      var mr = n(({ resource: t, resourceNameOrRouteName: e, recordItemId: s, hideText: o = false, accessControl: r, svgIconProps: a, meta: u, children: d, onClick: g, ...m }) => {
        let x = (0, so.useContext)(Be.AccessControlContext), B = (r == null ? void 0 : r.enabled) ?? x.options.buttons.enableAccessControl, k = (r == null ? void 0 : r.hideIfUnauthorized) ?? x.options.buttons.hideIfUnauthorized, { cloneUrl: w } = (0, Be.useNavigation)(), c = (0, Be.useRouterType)(), L = (0, Be.useLink)(), { Link: p } = (0, Be.useRouterContext)(), T = c === "legacy" ? p : L, { id: y, resource: l } = (0, Be.useResource)(t ?? e), b = (0, Be.useTranslate)(), { data: i } = (0, Be.useCan)({ resource: l == null ? void 0 : l.name, action: "create", params: { id: s ?? y, resource: l }, queryOptions: { enabled: B } }), P = n(() => i != null && i.can ? "" : i != null && i.reason ? i.reason : b("buttons.notAccessTitle", "You don't have permission to access"), "disabledTitle"), M = l && (s || y) ? w(l, s ?? y, u) : "";
        return B && k && !(i != null && i.can) ? null : so.default.createElement(T, { to: M, replace: false, onClick: (D) => {
          g && (D.preventDefault(), g(D));
        } }, o ? so.default.createElement(bt.IconButton, { variant: "outline", "aria-label": b("buttons.clone", "Clone"), title: P(), className: Uo.RefineButtonClassNames.CloneButton, ...m }, so.default.createElement(qt.IconSquarePlus, { size: 20, ...a })) : so.default.createElement(bt.Button, { variant: "outline", isDisabled: (i == null ? void 0 : i.can) === false, leftIcon: so.default.createElement(qt.IconSquarePlus, { size: 20, ...a }), title: P(), className: Uo.RefineButtonClassNames.CloneButton, ...m }, d ?? b("buttons.clone", "Clone")));
      }, "CloneButton");
      var co = C(__require("react"));
      var fr = require_dist3();
      var Wo = require_dist4();
      var ht = __require("@chakra-ui/react");
      var Gt = __require("@tabler/icons");
      var cr = n(({ inputProps: t, hideText: e = false, loading: s = false, svgIconProps: o, children: r, ...a }) => {
        let u = (0, fr.useTranslate)();
        return co.default.createElement("label", { htmlFor: "contained-button-file" }, co.default.createElement("input", { ...t, id: "contained-button-file", multiple: true, hidden: true }), e ? co.default.createElement(ht.IconButton, { variant: "outline", as: "span", "aria-label": u("buttons.import", "Import"), isLoading: s, className: Wo.RefineButtonClassNames.ImportButton, ...a }, co.default.createElement(Gt.IconFileImport, { size: 20, ...o })) : co.default.createElement(ht.Button, { variant: "outline", as: "span", leftIcon: co.default.createElement(Gt.IconFileImport, { size: 20, ...o }), isLoading: s, className: Wo.RefineButtonClassNames.ImportButton, ...a }, r ?? u("buttons.import", "Import")));
      }, "ImportButton");
      var gr = C(__require("react"));
      var br = __require("@chakra-ui/react");
      var Bn = n(({ value: t, ...e }) => gr.default.createElement(br.Text, { ...e }, t), "TextField");
      var hr = C(__require("react"));
      var xr = __require("@chakra-ui/react");
      var Pn = n(({ value: t, ...e }) => hr.default.createElement(xr.Tag, { ...e }, t == null ? void 0 : t.toString()), "TagField");
      var yr = C(__require("react"));
      var Br = __require("@chakra-ui/react");
      var Cn = n(({ value: t, ...e }) => yr.default.createElement(Br.Link, { href: `mailto:${t}`, ...e }, t), "EmailField");
      var Zo = C(__require("react"));
      var Pr = __require("@chakra-ui/react");
      var xt = __require("@tabler/icons");
      var Tn = n(({ value: t, valueLabelTrue: e = "true", valueLabelFalse: s = "false", trueIcon: o, falseIcon: r, svgIconProps: a, ...u }) => Zo.default.createElement(Pr.Tooltip, { label: t ? e : s, ...u }, Zo.default.createElement("span", null, t ? o ?? Zo.default.createElement(xt.IconCheck, { size: 20, ...a }) : r ?? Zo.default.createElement(xt.IconMinus, { size: 20, ...a }))), "BooleanField");
      var Cr = C(__require("react"));
      var yt = C(__require("dayjs"));
      var Tr2 = C(__require("dayjs/plugin/localizedFormat"));
      var wr = __require("@chakra-ui/react");
      yt.default.extend(Tr2.default);
      var wn = yt.default.locale();
      var kn = n(({ value: t, locales: e, format: s = "L", ...o }) => Cr.default.createElement(wr.Text, { ...o }, (0, yt.default)(t).locale(e || wn).format(s)), "DateField");
      var kr = C(__require("react"));
      var Ln = n(({ title: t, src: e, ...s }) => kr.default.createElement(Yt, { value: e, title: t, ...s }, t ?? e), "FileField");
      var Lr = C(__require("react"));
      var vr = __require("@chakra-ui/react");
      var Yt = n(({ children: t, value: e, title: s, ...o }) => Lr.default.createElement(vr.Link, { href: e, title: s, ...o }, t ?? e), "UrlField");
      var Sr = C(__require("react"));
      var Ir = __require("@chakra-ui/react");
      function vn() {
        return !!(typeof Intl == "object" && Intl && typeof Intl.NumberFormat == "function");
      }
      __name(vn, "vn");
      n(vn, "toLocaleStringSupportsOptions");
      var Sn = n(({ value: t, locale: e, options: s, ...o }) => {
        let r = Number(t);
        return Sr.default.createElement(Ir.Text, { ...o }, vn() ? r.toLocaleString(e, s) : r);
      }, "NumberField");
      var Fr = C(__require("react"));
      var Ar = C(__require("react-markdown"));
      var Dr = C(__require("remark-gfm"));
      var In = n(({ value: t = "" }) => Fr.default.createElement(Ar.default, { plugins: [Dr.default] }, t), "MarkdownField");
      var Ae = C(__require("react"));
      var J = __require("@chakra-ui/react");
      var Fn = n(() => Ae.createElement(J.Box, { p: "4", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minH: "100vh", bg: "sider.background", bgImage: "https://refine.ams3.cdn.digitaloceanspaces.com/login-background/background.png" }, Ae.createElement(J.Image, { mb: "8", src: "https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine.svg", alt: "Refine Logo" }), Ae.createElement(J.Heading, { mb: "6", as: "h1", size: "3xl", color: "white", textAlign: "center" }, "Welcome on board"), Ae.createElement(J.Heading, { as: "h3", size: "md", color: "white", mb: "6", textAlign: "center" }, "Your configuration is completed."), Ae.createElement(J.Text, { mb: "8", fontSize: "xl", color: "white", textAlign: "center" }, "Now you can get started by adding your resources to the", " ", Ae.createElement(J.Code, null, "resources"), " property of ", Ae.createElement(J.Code, null, "Refine")), Ae.createElement(J.Box, { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "3" }, Ae.createElement(J.Button, { as: J.Link, href: "https://refine.dev", target: "_blank", rel: "noreferrer", colorScheme: "white", color: "white", variant: "outline", minW: "150px" }, "Documentation"), Ae.createElement(J.Button, { as: J.Link, href: "https://refine.dev/examples", target: "_blank", rel: "noreferrer", colorScheme: "white", color: "white", variant: "outline", minW: "150px" }, "Examples"), Ae.createElement(J.Button, { as: J.Link, href: "https://discord.gg/refine", target: "_blank", rel: "noreferrer", colorScheme: "white", color: "white", variant: "outline", minW: "150px" }, "Community"))), "ReadyPage");
      var zr = C(__require("react"));
      var Hr = require_dist3();
      var An = n(() => zr.default.createElement(Hr.WelcomePage, null), "WelcomePage");
      var Le = C(__require("react"));
      var Ve = require_dist3();
      var Pe = __require("@chakra-ui/react");
      var Er = __require("@tabler/icons");
      var Dn = n(() => {
        let [t, e] = (0, Le.useState)(), s = (0, Ve.useTranslate)(), { push: o } = (0, Ve.useNavigation)(), r = (0, Ve.useGo)(), a = (0, Ve.useRouterType)(), { resource: u, action: d } = (0, Ve.useResource)();
        (0, Le.useEffect)(() => {
          u && d && e(s("pages.error.info", { action: d, resource: u == null ? void 0 : u.name }, `You may have forgotten to add the "${d}" component to "${u == null ? void 0 : u.name}" resource.`));
        }, [u, d]);
        let g = (0, Pe.useColorModeValue)("gray.500", "gray.400");
        return Le.default.createElement(Pe.Box, { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minH: "calc(100vh - 150px)" }, Le.default.createElement(Pe.Heading, { fontWeight: 900, fontSize: [120, 160, 220], color: g }, "404"), Le.default.createElement(Pe.Stack, { direction: ["column", "row"], alignItems: "center", spacing: 2 }, Le.default.createElement(Pe.Text, { color: g, fontSize: "xl", align: "center" }, s("pages.error.404", "Sorry, the page you visited does not exist.")), t && Le.default.createElement(Pe.Tooltip, { openDelay: 0, label: t }, Le.default.createElement(Pe.IconButton, { "aria-label": "info", color: g }, Le.default.createElement(Er.IconInfoCircle, null)))), Le.default.createElement(Pe.Button, { mt: 6, variant: "outline", onClick: () => {
          a === "legacy" ? o("/") : r({ to: "/" });
        } }, s("pages.error.backHome", "Back Home")));
      }, "ErrorComponent");
      var go = C(__require("react"));
      var N = C(__require("react"));
      var De = require_dist3();
      var E = __require("@chakra-ui/react");
      var Mr = require_dist5();
      var Nr = __require("react-hook-form");
      var io = { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundSize: "cover", minHeight: "100dvh", padding: "16px" };
      var ao = { width: "100%", maxWidth: "400px", borderRadius: "12px", padding: "32px" };
      var Ur = n(({ providers: t, registerLink: e, forgotPasswordLink: s, rememberMe: o, contentProps: r, wrapperProps: a, renderContent: u, formProps: d, title: g, hideForm: m }) => {
        var X, O;
        let { onSubmit: x, ...B } = d || {}, k = (0, De.useActiveAuthProvider)(), { mutate: w } = (0, De.useLogin)({ v3LegacyAuthProviderCompatible: !!(k != null && k.isLegacy) }), c = (0, De.useTranslate)(), L = (0, De.useRouterType)(), p = (0, De.useLink)(), { Link: T } = (0, De.useRouterContext)(), y = L === "legacy" ? T : p, l = (0, Mr.useForm)({ ...B }), { register: b, handleSubmit: i, formState: { errors: P } } = l, M = n(() => t && t.length > 0 ? N.default.createElement(N.default.Fragment, null, N.default.createElement(E.VStack, null, t.map((F) => N.default.createElement(E.Button, { key: F.name, variant: "outline", width: "full", leftIcon: N.default.createElement(N.default.Fragment, null, F == null ? void 0 : F.icon), fontSize: "sm", onClick: () => w({ providerName: F.name }) }, F.label ?? N.default.createElement("label", null, F.label)))), !m && N.default.createElement(E.Divider, { my: "6" })) : null, "renderProviders"), D = (0, E.useColorModeValue)("brand.500", "brand.200"), U = g === false ? null : N.default.createElement("div", { style: { display: "flex", justifyContent: "center", marginBottom: "32px", fontSize: "20px" } }, g ?? N.default.createElement(Me, { collapsed: false })), f = { ...ao, ...r }, j = N.default.createElement(E.Box, { bg: "chakra-body-bg", borderWidth: "1px", borderColor: (0, E.useColorModeValue)("gray.200", "gray.700"), backgroundColor: (0, E.useColorModeValue)("white", "gray.800"), ...f }, N.default.createElement(E.Heading, { mb: "8", textAlign: "center", fontSize: "2xl", color: D }, c("pages.login.title", "Sign in to your account")), M(), !m && N.default.createElement("form", { onSubmit: i((F) => x ? x(F) : w(F)) }, N.default.createElement(E.FormControl, { mt: "6", isInvalid: !!(P != null && P.email) }, N.default.createElement(E.FormLabel, { htmlFor: "email" }, c("pages.login.fields.email", "Email")), N.default.createElement(E.Input, { id: "email", autoComplete: "current-password", placeholder: "Email", type: "text", ...b("email", { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: c("pages.login.errors.validEmail", "Invalid email address") } }) }), N.default.createElement(E.FormErrorMessage, null, `${(X = P.email) == null ? void 0 : X.message}`)), N.default.createElement(E.FormControl, { mt: "6", isInvalid: !!(P != null && P.password) }, N.default.createElement(E.FormLabel, { htmlFor: "password" }, c("pages.login.fields.password", "Password")), N.default.createElement(E.Input, { id: "password", type: "password", placeholder: "Password", ...b("password", { required: true }) }), N.default.createElement(E.FormErrorMessage, null, `${(O = P.password) == null ? void 0 : O.message}`)), o ?? N.default.createElement(E.Checkbox, { ...b("remember"), mt: "6" }, c("pages.login.buttons.rememberMe", "Remember me")), N.default.createElement(E.Button, { mt: "6", type: "submit", width: "full", colorScheme: "brand" }, c("pages.login.signin", "Sign in")), N.default.createElement(E.Box, { mt: "6" }, N.default.createElement(E.HStack, { justifyContent: "space-between", fontSize: "12px" }, s ?? N.default.createElement(E.Link, { as: y, color: D, to: "/forgot-password" }, c("pages.login.buttons.forgotPassword", "Forgot password?")), e ?? N.default.createElement(E.Box, null, N.default.createElement("span", null, c("pages.login.buttons.noAccount", "Don\u2019t have an account?")), N.default.createElement(E.Link, { color: D, ml: "1", as: y, fontWeight: "bold", to: "/register" }, c("pages.login.register", "Sign up")))))), m && e !== false && N.default.createElement(E.Box, { mt: 6, textAlign: "center" }, N.default.createElement("span", null, c("pages.login.buttons.noAccount", "Don\u2019t have an account?")), N.default.createElement(E.Link, { color: D, ml: "1", as: y, fontWeight: "bold", to: "/register" }, c("pages.login.register", "Sign up"))));
        return N.default.createElement(Nr.FormProvider, { ...l }, N.default.createElement(E.Box, { style: { ...io, justifyContent: m ? "flex-start" : "center", paddingTop: m ? "15dvh" : "16px" }, ...a }, u ? u(j, U) : N.default.createElement(N.default.Fragment, null, U, j)));
      }, "LoginPage");
      var V = C(__require("react"));
      var ze = require_dist3();
      var W = __require("@chakra-ui/react");
      var Wr = require_dist5();
      var Vr = n(({ providers: t, loginLink: e, wrapperProps: s, contentProps: o, renderContent: r, formProps: a, title: u, hideForm: d }) => {
        var U, f;
        let { onSubmit: g, ...m } = a || {}, x = (0, ze.useRouterType)(), B = (0, ze.useLink)(), { Link: k } = (0, ze.useRouterContext)(), w = x === "legacy" ? k : B, c = (0, ze.useTranslate)(), L = (0, ze.useActiveAuthProvider)(), { mutate: p } = (0, ze.useRegister)({ v3LegacyAuthProviderCompatible: !!(L != null && L.isLegacy) }), { register: T, handleSubmit: y, formState: { errors: l } } = (0, Wr.useForm)({ ...m }), b = n(() => t && t.length > 0 ? V.default.createElement(V.default.Fragment, null, V.default.createElement(W.VStack, null, t.map((j) => V.default.createElement(W.Button, { key: j.name, variant: "outline", fontSize: "sm", width: "full", leftIcon: V.default.createElement(V.default.Fragment, null, j == null ? void 0 : j.icon), onClick: () => p({ providerName: j.name }) }, j.label ?? V.default.createElement("label", null, j.label)))), !d && V.default.createElement(W.Divider, { my: "6" })) : null, "renderProviders"), i = (0, W.useColorModeValue)("brand.500", "brand.200"), P = u === false ? null : V.default.createElement("div", { style: { display: "flex", justifyContent: "center", marginBottom: "32px", fontSize: "20px" } }, u ?? V.default.createElement(Me, { collapsed: false })), M = { ...ao, ...o }, D = V.default.createElement(W.Box, { bg: "chakra-body-bg", borderWidth: "1px", borderColor: (0, W.useColorModeValue)("gray.200", "gray.700"), backgroundColor: (0, W.useColorModeValue)("white", "gray.800"), ...M }, V.default.createElement(W.Heading, { mb: "8", textAlign: "center", fontSize: "2xl", color: i }, c("pages.register.title", "Sign up for your account")), b(), !d && V.default.createElement("form", { onSubmit: y((j) => g ? g(j) : p(j)) }, V.default.createElement(W.FormControl, { mt: "6", isInvalid: !!(l != null && l.email) }, V.default.createElement(W.FormLabel, { htmlFor: "email" }, c("pages.register.fields.email", "Email")), V.default.createElement(W.Input, { id: "email", type: "text", placeholder: "Email", ...T("email", { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: c("pages.register.errors.validEmail", "Invalid email address") } }) }), V.default.createElement(W.FormErrorMessage, null, `${(U = l.email) == null ? void 0 : U.message}`)), V.default.createElement(W.FormControl, { mt: "6", isInvalid: !!(l != null && l.password) }, V.default.createElement(W.FormLabel, { htmlFor: "password" }, c("pages.register.fields.password", "Password")), V.default.createElement(W.Input, { id: "password", type: "password", placeholder: "Password", ...T("password", { required: true }) }), V.default.createElement(W.FormErrorMessage, null, `${(f = l.password) == null ? void 0 : f.message}`)), V.default.createElement(W.Button, { mt: "6", type: "submit", width: "full", colorScheme: "brand" }, c("pages.register.buttons.submit", "Sign up")), e ?? V.default.createElement(W.Box, { display: "flex", justifyContent: "flex-end", mt: "6", fontSize: "12px" }, V.default.createElement("span", null, c("pages.login.buttons.haveAccount", "Have an account?")), V.default.createElement(W.Link, { color: i, ml: "1", fontWeight: "bold", as: w, to: "/login" }, c("pages.login.signin", "Sign in")))), d && e !== false && V.default.createElement(W.Box, { mt: 6, textAlign: "center" }, V.default.createElement("span", null, c("pages.login.buttons.noAccount", "Don\u2019t have an account?")), V.default.createElement(W.Link, { color: i, ml: "1", as: w, fontWeight: "bold", to: "/login" }, c("pages.login.signin", "Sign in"))));
        return V.default.createElement(W.Box, { style: { ...io, justifyContent: d ? "flex-start" : "center", paddingTop: d ? "15dvh" : "16px" }, ...s }, r ? r(D, P) : V.default.createElement(V.default.Fragment, null, P, D));
      }, "RegisterPage");
      var ue = C(__require("react"));
      var je = require_dist3();
      var Q = __require("@chakra-ui/react");
      var jr = require_dist5();
      var Or = n(({ loginLink: t, wrapperProps: e, contentProps: s, renderContent: o, formProps: r, title: a }) => {
        var P;
        let { onSubmit: u, ...d } = r || {}, { mutate: g } = (0, je.useForgotPassword)(), m = (0, je.useTranslate)(), x = (0, je.useRouterType)(), B = (0, je.useLink)(), { Link: k } = (0, je.useRouterContext)(), w = x === "legacy" ? k : B, { handleSubmit: c, register: L, formState: { errors: p } } = (0, jr.useForm)({ ...d }), T = (0, Q.useColorModeValue)("brand.500", "brand.200"), y = a === false ? null : ue.default.createElement("div", { style: { display: "flex", justifyContent: "center", marginBottom: "32px", fontSize: "20px" } }, a ?? ue.default.createElement(Me, { collapsed: false })), l = { ...ao, ...s }, b = ue.default.createElement(Q.Box, { bg: "chakra-body-bg", borderWidth: "1px", borderColor: (0, Q.useColorModeValue)("gray.200", "gray.700"), backgroundColor: (0, Q.useColorModeValue)("white", "gray.800"), ...l }, ue.default.createElement(Q.Heading, { mb: "8", textAlign: "center", fontSize: "2xl", color: T }, m("pages.forgotPassword.title", "Forgot your password?")), ue.default.createElement("form", { onSubmit: c((M) => u ? u(M) : g(M)) }, ue.default.createElement(Q.FormControl, { mb: "3", isInvalid: !!(p != null && p.email) }, ue.default.createElement(Q.FormLabel, { htmlFor: "email" }, m("pages.forgotPassword.fields.email", "Email")), ue.default.createElement(Q.Input, { id: "email", type: "text", ...L("email", { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: m("pages.login.errors.validEmail", "Invalid email address") } }) }), ue.default.createElement(Q.FormErrorMessage, null, `${(P = p.email) == null ? void 0 : P.message}`)), t ?? ue.default.createElement(Q.Box, { my: "6", display: "flex", justifyContent: "flex-end" }, ue.default.createElement("span", null, m("pages.register.buttons.haveAccount", "Have an account?")), ue.default.createElement(Q.Link, { color: T, ml: "1", as: w, to: "/login" }, m("pages.login.signin", "Sign in"))), ue.default.createElement(Q.Button, { mb: "3", type: "submit", width: "full", colorScheme: "brand" }, m("pages.forgotPassword.buttons.submit", "Send reset instructions")))), i = { ...io, ...e };
        return ue.default.createElement(Q.Box, { ...i }, o ? o(b, y) : ue.default.createElement(ue.default.Fragment, null, y, b));
      }, "ForgotPasswordPage");
      var se = C(__require("react"));
      var Vo = require_dist3();
      var Z = __require("@chakra-ui/react");
      var _r = require_dist5();
      var $r = n(({ wrapperProps: t, contentProps: e, renderContent: s, formProps: o, title: r }) => {
        var l, b;
        let { onSubmit: a, ...u } = o || {}, d = (0, Vo.useTranslate)(), g = (0, Vo.useActiveAuthProvider)(), { mutate: m } = (0, Vo.useUpdatePassword)({ v3LegacyAuthProviderCompatible: !!(g != null && g.isLegacy) }), { register: x, watch: B, handleSubmit: k, formState: { errors: w } } = (0, _r.useForm)({ ...u }), c = (0, Z.useColorModeValue)("brand.500", "brand.200"), L = r === false ? null : se.default.createElement("div", { style: { display: "flex", justifyContent: "center", marginBottom: "32px", fontSize: "20px" } }, r ?? se.default.createElement(Me, { collapsed: false })), p = { ...ao, ...e }, T = se.default.createElement(Z.Box, { bg: "chakra-body-bg", borderWidth: "1px", borderColor: (0, Z.useColorModeValue)("gray.200", "gray.700"), backgroundColor: (0, Z.useColorModeValue)("white", "gray.800"), ...p }, se.default.createElement(Z.Heading, { mb: "8", textAlign: "center", fontSize: "2xl", color: c }, d("pages.updatePassword.title", "Set New Password")), se.default.createElement("form", { onSubmit: k((i) => a ? a(i) : m(i)) }, se.default.createElement(Z.FormControl, { mb: "3", isInvalid: !!(w != null && w.password) }, se.default.createElement(Z.FormLabel, { htmlFor: "password" }, d("pages.updatePassword.fields.password", "New Password")), se.default.createElement(Z.Input, { id: "password", type: "password", placeholder: "Password", ...x("password", { required: true }) }), se.default.createElement(Z.FormErrorMessage, null, `${(l = w.password) == null ? void 0 : l.message}`)), se.default.createElement(Z.FormControl, { mb: "3", isInvalid: !!(w != null && w.confirmPassword) }, se.default.createElement(Z.FormLabel, { htmlFor: "confirmPassword" }, d("pages.updatePassword.fields.confirmPassword", "Confirm New Password")), se.default.createElement(Z.Input, { id: "confirmPassword", type: "password", placeholder: "Confirm Password", ...x("confirmPassword", { required: true, validate: (i) => {
          if (B("password") != i)
            return d("pages.updatePassword.errors.confirmPasswordNotMatch", "Passwords do not match");
        } }) }), se.default.createElement(Z.FormErrorMessage, null, `${(b = w.confirmPassword) == null ? void 0 : b.message}`)), se.default.createElement(Z.Button, { mt: "6", type: "submit", width: "full", colorScheme: "brand" }, d("pages.updatePassword.buttons.submit", "Update")))), y = { ...io, ...t };
        return se.default.createElement(Z.Box, { ...y }, s ? s(T, L) : se.default.createElement(se.default.Fragment, null, L, T));
      }, "UpdatePasswordPage");
      var zn = n((t) => {
        let { type: e } = t;
        return go.default.createElement(go.default.Fragment, null, n(() => {
          switch (e) {
            case "register":
              return go.default.createElement(Vr, { ...t });
            case "forgotPassword":
              return go.default.createElement(Or, { ...t });
            case "updatePassword":
              return go.default.createElement($r, { ...t });
            default:
              return go.default.createElement(Ur, { ...t });
          }
        }, "renderView")());
      }, "AuthPage");
      var lo = C(__require("react"));
      var ke = require_dist3();
      var uo = __require("@chakra-ui/react");
      var qr = __require("@tabler/icons");
      var Ge = n(({ breadcrumbProps: t, showHome: e = true, hideIcons: s = false, meta: o }) => {
        var k, w;
        let r = (0, ke.useRouterType)(), { breadcrumbs: a } = (0, ke.useBreadcrumb)({ meta: o }), u = (0, ke.useLink)(), { Link: d } = (0, ke.useRouterContext)(), { hasDashboard: g } = (0, ke.useRefineContext)(), m = r === "legacy" ? d : u;
        if (a.length === 1)
          return null;
        let { resources: x } = (0, ke.useResource)(), B = (0, ke.matchResourceFromRoute)("/", x);
        return lo.default.createElement(uo.Breadcrumb, { mb: "3", ...t }, e && (g || (B == null ? void 0 : B.found)) && lo.default.createElement(uo.BreadcrumbItem, null, lo.default.createElement(m, { to: "/" }, ((w = (k = B == null ? void 0 : B.resource) == null ? void 0 : k.meta) == null ? void 0 : w.icon) ?? lo.default.createElement(qr.IconHome, { size: 20 }))), a.map(({ label: c, icon: L, href: p }) => lo.default.createElement(uo.BreadcrumbItem, { key: c }, !s && L, p ? lo.default.createElement(uo.BreadcrumbLink, { ml: 2, as: m, to: p, href: p }, c) : lo.default.createElement(uo.BreadcrumbLink, { ml: 2 }, c))));
      }, "Breadcrumb");
      var bo = C(__require("react"));
      var He = __require("@chakra-ui/react");
      var Gr = __require("@tabler/icons");
      var Bt = n(({ notificationKey: t = "", message: e, cancelMutation: s, undoableTimeout: o = 0 }) => {
        let r = (0, He.useToast)();
        return bo.default.createElement(He.Box, { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, bg: "chakra-body-bg", shadow: "md", minW: 320, p: 2 }, bo.default.createElement(He.CircularProgress, { value: o * 20, color: "green" }, bo.default.createElement(He.CircularProgressLabel, null, o)), bo.default.createElement(He.Text, null, e), bo.default.createElement(He.IconButton, { "aria-label": "undo", variant: "outline", onClick: () => {
          s == null || s(), r.close(t);
        } }, bo.default.createElement(Gr.IconRotate2, { size: 18 })));
      }, "UndoableNotification");
      var Ee = C(__require("react"));
      var Ct = require_dist3();
      var Yr = __require("@chakra-ui/react");
      var po = __require("@tabler/icons");
      var Et = n(({ status: t, elements: { success: e = Ee.default.createElement(Pt, { key: "autoSave.success", defaultMessage: "saved", icon: Ee.default.createElement(po.IconCircleCheck, { size: "18px" }) }), error: s = Ee.default.createElement(Pt, { key: "autoSave.error", defaultMessage: "auto save failure", icon: Ee.default.createElement(po.IconExclamationCircle, { size: "18px" }) }), loading: o = Ee.default.createElement(Pt, { key: "autoSave.loading", defaultMessage: "saving...", icon: Ee.default.createElement(po.IconRefresh, { size: "18px" }) }), idle: r = Ee.default.createElement(Pt, { key: "autoSave.idle", defaultMessage: "waiting for changes", icon: Ee.default.createElement(po.IconDots, { size: "18px" }) }) } = {} }) => Ee.default.createElement(Ct.AutoSaveIndicator, { status: t, elements: { success: e, error: s, loading: o, idle: r } }), "AutoSaveIndicator");
      var Pt = n(({ key: t, defaultMessage: e, icon: s }) => {
        let o = (0, Ct.useTranslate)();
        return Ee.default.createElement(Yr.Text, { display: "flex", alignItems: "center", flexWrap: "wrap", color: "gray.700", marginRight: "2", fontSize: "sm" }, o(t, e), Ee.default.createElement("span", { style: { marginLeft: "3px" } }, s));
      }, "Message");
      var de = __require("@chakra-ui/react");
      var Kr = __require("@chakra-ui/theme-tools");
      var Hn = (0, de.extendTheme)({ config: { initialColorMode: "system" }, fonts: { heading: "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'", body: "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" }, styles: { global: () => ({ "html, body": { fontSize: "14px" } }) }, colors: { brand: { 50: "#E6FFFA", 100: "#B2F5EA", 200: "#81E6D9", 300: "#4FD1C5", 400: "#38B2AC", 500: "#319795", 600: "#2C7A7B", 700: "#285E61", 800: "#234E52", 900: "#1D4044" }, sider: { background: "#2A132E", collapseButton: "#150A17" } } });
      var En = { header: { bg: { light: de.baseTheme.colors.white, dark: de.baseTheme.colors.gray[800] } }, sider: { bg: { light: de.baseTheme.colors.white, dark: de.baseTheme.colors.gray[800] }, header: { light: de.baseTheme.colors.white, dark: de.baseTheme.colors.gray[800] } } };
      var Zr = { Blue: de.baseTheme.colors.blue, Purple: de.baseTheme.colors.purple, Magenta: de.baseTheme.colors.pink, Red: de.baseTheme.colors.red, Orange: de.baseTheme.colors.orange, Yellow: de.baseTheme.colors.yellow, Green: de.baseTheme.colors.green };
      var Mn = Object.keys(Zr).reduce((t, e) => {
        let s = e;
        return { ...t, [e]: (0, de.extendTheme)({ config: { initialColorMode: "system" }, styles: { global: (o) => {
          let r = o.theme.colors.gray[50], a = o.theme.colors.gray[900];
          return { "html, body": { background: (0, Kr.mode)(r, a)(o) } };
        } }, colors: { brand: Zr[s], refine: { ...En } } }) };
      }, {});
      var Zt = C(__require("react"));
      var Qr = __require("@chakra-ui/react");
      var Nn = n(() => {
        let t = (0, Qr.useToast)({ position: "top-right", isClosable: true });
        return { open: ({ key: e, message: s, type: o, description: r, undoableTimeout: a, cancelMutation: u }) => {
          o === "progress" ? e && t.isActive(e) ? t.update(e, { render: () => Zt.default.createElement(Bt, { notificationKey: e, message: s, cancelMutation: u, undoableTimeout: a }) }) : t({ id: e, render: () => Zt.default.createElement(Bt, { notificationKey: e, message: s, cancelMutation: u, undoableTimeout: a }) }) : e && t.isActive(e) ? t.update(e, { title: s, status: o, description: r }) : t({ id: e, title: s, description: r, status: o });
        }, close: (e) => t.close(e) };
      }, "notificationProvider");
    }
  });

  // ../react-table/dist/index.js
  var require_dist7 = __commonJS({
    "../react-table/dist/index.js"(exports, module) {
      var T = Object.defineProperty;
      var V = Object.getOwnPropertyDescriptor;
      var W = Object.getOwnPropertyNames;
      var X = Object.prototype.hasOwnProperty;
      var c = /* @__PURE__ */ __name((t, r) => T(t, "name", { value: r, configurable: true }), "c");
      var Y = /* @__PURE__ */ __name((t, r) => {
        for (var n in r)
          T(t, n, { get: r[n], enumerable: true });
      }, "Y");
      var Z = /* @__PURE__ */ __name((t, r, n, l) => {
        if (r && typeof r == "object" || typeof r == "function")
          for (let o of W(r))
            !X.call(t, o) && o !== n && T(t, o, { get: () => r[o], enumerable: !(l = V(r, o)) || l.enumerable });
        return t;
      }, "Z");
      var _ = /* @__PURE__ */ __name((t) => Z(T({}, "__esModule", { value: true }), t), "_");
      var $ = {};
      Y($, { useTable: () => w });
      module.exports = _($);
      var d = __require("react");
      var h = require_dist3();
      var s = __require("@tanstack/react-table");
      var f = __require("react");
      var H = c(() => {
        let t = (0, f.useRef)(true);
        return (0, f.useEffect)(() => {
          t.current = false;
        }, []), t.current;
      }, "useIsFirstRender");
      function w({ refineCoreProps: { hasPagination: t = true, ...r } = {}, initialState: n = {}, ...l }) {
        var v, P, B;
        let o = H(), x = (0, h.useTable)({ ...r, hasPagination: t }), y = (((v = r.filters) == null ? void 0 : v.mode) || "server") === "server", C = (((P = r.sorters) == null ? void 0 : P.mode) || "server") === "server", z = t === false ? "off" : "server", D = (((B = r.pagination) == null ? void 0 : B.mode) ?? z) !== "off", { tableQueryResult: { data: m }, current: M, setCurrent: R, pageSize: U, setPageSize: I, sorters: L, setSorters: k, filters: q, setFilters: A, pageCount: j } = x, g = [];
        q.forEach((e) => {
          e.operator !== "or" && e.operator !== "and" && "field" in e && g.push(e);
        });
        let S = (0, s.useReactTable)({ data: (m == null ? void 0 : m.data) ?? [], getCoreRowModel: (0, s.getCoreRowModel)(), getSortedRowModel: C ? void 0 : (0, s.getSortedRowModel)(), getFilteredRowModel: y ? void 0 : (0, s.getFilteredRowModel)(), initialState: { pagination: { pageIndex: M - 1, pageSize: U }, sorting: L.map((e) => ({ id: e.field, desc: e.order === "desc" })), columnFilters: g.map((e) => ({ id: e.field, operator: e.operator, value: e.value })), ...n }, pageCount: j, manualPagination: true, manualSorting: C, manualFiltering: y, ...l }), { state: G, columns: J } = S.options, { pagination: K, sorting: i, columnFilters: u } = G, { pageIndex: b, pageSize: E } = K ?? {};
        return (0, d.useEffect)(() => {
          b !== void 0 && R(b + 1);
        }, [b]), (0, d.useEffect)(() => {
          E !== void 0 && I(E);
        }, [E]), (0, d.useEffect)(() => {
          i !== void 0 && (k(i == null ? void 0 : i.map((e) => ({ field: e.id, order: e.desc ? "desc" : "asc" }))), i.length > 0 && D && !o && R(1));
        }, [i]), (0, d.useEffect)(() => {
          let e = [];
          u == null || u.map((a) => {
            var O, Q;
            let p = a.operator ?? ((Q = (O = J.find((N) => N.id === a.id)) == null ? void 0 : O.meta) == null ? void 0 : Q.filterOperator);
            e.push({ field: a.id, operator: p ?? (Array.isArray(a.value) ? "in" : "eq"), value: a.value });
          });
          let F = g.filter((a) => !e.some((p) => a.field === p.field && a.operator === p.operator));
          F == null || F.map((a) => {
            e.push({ field: a.field, operator: a.operator, value: void 0 });
          }), A(e), e.length > 0 && D && !o && R(1);
        }, [u]), { ...S, refineCore: x };
      }
      __name(w, "w");
      c(w, "useTable");
    }
  });

  // src/inferencers/chakra-ui/index.tsx
  var import_react14 = __toESM(__require("react"));
  var import_core5 = __toESM(require_dist3());

  // src/inferencers/chakra-ui/show.tsx
  var import_chakra_ui = __toESM(require_dist6());
  var import_react10 = __require("@chakra-ui/react");

  // src/create-inferencer/index.tsx
  var import_react5 = __toESM(__require("react"));
  var import_core4 = __toESM(require_dist3());

  // src/utilities/get-fieldable-keys/index.ts
  var urlLikeKeyRegexp = /(image|photo|avatar|url|logo|cover|thumbnail|icon)/i;
  var getFieldableKeys = /* @__PURE__ */ __name((key, data) => {
    const fieldableProperties = [
      "name",
      "label",
      "title",
      "count",
      "content",
      "username",
      "nickname",
      "login",
      "firstName",
      "lastName",
      "url"
    ];
    if (urlLikeKeyRegexp.test(key)) {
      fieldableProperties.unshift("url");
    }
    const firstAvailable = fieldableProperties.find(
      (fkey) => fkey in data && !!data[fkey]
    );
    if (firstAvailable) {
      if (firstAvailable === "firstName" && "lastName" in data) {
        return ["firstName", "lastName"];
      }
      return firstAvailable;
    }
    return void 0;
  }, "getFieldableKeys");

  // src/utilities/pick-data-provider/index.tsx
  var import_core = __toESM(require_dist3());
  function pickDataProvider(resourceName, dataProviderName, resources) {
    if (dataProviderName) {
      return dataProviderName;
    }
    const resource = resources == null ? void 0 : resources.find((item) => item.name === resourceName);
    const meta = (0, import_core.pickNotDeprecated)(resource == null ? void 0 : resource.meta, resource == null ? void 0 : resource.options);
    if (meta == null ? void 0 : meta.dataProviderName) {
      return meta.dataProviderName;
    }
    return "default";
  }
  __name(pickDataProvider, "pickDataProvider");
  var dataProviderFromResource = /* @__PURE__ */ __name((resource) => {
    var _a;
    return (_a = resource == null ? void 0 : resource.options) == null ? void 0 : _a.dataProviderName;
  }, "dataProviderFromResource");

  // src/utilities/pick-inferred-field/index.ts
  var pickInferredField = /* @__PURE__ */ __name((inferredFields) => {
    const field = [...inferredFields].filter(Boolean).sort((a, b) => (b.priority || 0) - (a.priority || 0))[0];
    if (!field) {
      return null;
    }
    return field;
  }, "pickInferredField");

  // src/utilities/prettier-format/index.ts
  var import_standalone = __toESM(__require("prettier/standalone"));
  var import_parser_typescript = __toESM(__require("prettier/parser-typescript"));
  var prettierFormat = /* @__PURE__ */ __name((code) => {
    try {
      const formatted = import_standalone.default.format(code, {
        parser: "typescript",
        plugins: [import_parser_typescript.default],
        arrowParens: "always",
        trailingComma: "all",
        semi: true,
        tabWidth: 4,
        printWidth: 80
      });
      return formatted;
    } catch (error) {
      console.warn("Formatting error in inferencer", error);
      return code;
    }
  }, "prettierFormat");

  // src/utilities/pretty-spaces/index.ts
  var prettySpaces = /* @__PURE__ */ __name((content) => {
    return content.replace(/ {2,}/g, " ").replace(/\n{2,}/g, "\n");
  }, "prettySpaces");

  // src/field-inferencers/relation.ts
  var relationRegexp = /(-id|-ids|_id|_ids|Id|Ids|ID|IDs)(\[\])?$/;
  var relationInfer = /* @__PURE__ */ __name((key, value) => {
    const isRelation = relationRegexp.test(key);
    const isBasicValue = typeof value === "string" || typeof value === "number";
    const isBasicArray = Array.isArray(value) && value.every((v) => typeof v === "string" || typeof v === "number");
    if (isRelation && isBasicValue || isRelation && isBasicArray) {
      return {
        key,
        relation: true,
        multiple: isBasicArray ? true : false,
        type: "relation",
        priority: 1
      };
    }
    return false;
  }, "relationInfer");

  // src/utilities/remove-relation-suffix/index.ts
  var removeRelationSuffix = /* @__PURE__ */ __name((key) => {
    return key.replace(relationRegexp, "");
  }, "removeRelationSuffix");

  // src/utilities/pretty-string/index.ts
  var prettyString = /* @__PURE__ */ __name((str) => {
    const clean = removeRelationSuffix(str);
    const camelCase = clean.replace(/([a-z])([A-Z])/g, "$1 $2");
    const snakeCase = camelCase.replace(/_/g, " ");
    const kebabCase = snakeCase.replace(/-/g, " ");
    const capitalized = kebabCase.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    return capitalized;
  }, "prettyString");

  // src/utilities/translate-pretty-string/index.ts
  var translatePrettyString = /* @__PURE__ */ __name((payload) => {
    const { resource, field, i18n } = payload;
    if (i18n) {
      const translate = `translate("${resource.name}.fields.${field.key}")`;
      if (payload.noBraces) {
        return `${translate}`;
      }
      return `{${translate}}`;
    }
    const prettedString = prettyString(field.key);
    if (payload.noQuotes) {
      return prettedString;
    }
    return `"${prettedString}"`;
  }, "translatePrettyString");

  // src/utilities/to-singular/index.ts
  var import_pluralize = __toESM(__require("pluralize"));
  var toSingular = /* @__PURE__ */ __name((str = "") => {
    return import_pluralize.default.isSingular(str) ? str : import_pluralize.default.singular(str);
  }, "toSingular");

  // src/utilities/to-plural/index.ts
  var import_pluralize2 = __toESM(__require("pluralize"));
  var toPlural = /* @__PURE__ */ __name((str = "") => {
    return import_pluralize2.default.isPlural(str) ? str : import_pluralize2.default.plural(str);
  }, "toPlural");

  // src/utilities/replace-exports/index.ts
  var replaceExports = /* @__PURE__ */ __name((code) => {
    const newCode = code.replace(
      /export\s+(const|let|var|type|interface|function|class)\s+(\w+)\s*(=|:)\s*/g,
      "$1 $2 = "
    );
    const lines = newCode.split("\n");
    const newLines = lines.filter(
      (line) => !line.trim().startsWith("export default")
    );
    return newLines.join("\n");
  }, "replaceExports");

  // src/utilities/replace-imports/index.ts
  var packageRegex = /import(?:(?:(?:[ \n\t]+([^ *\n\t\{\},]+)[ \n\t]*(?:,|[ \n\t]+))?([ \n\t]*\{(?:[ \n\t]*[^ \n\t"'\{\}]+[ \n\t]*,?)+\})?[ \n\t]*)|[ \n\t]*\*[ \n\t]*as[ \n\t]+([^ \n\t\{\}]+)[ \n\t]+)from[ \n\t]*(?:['"])([^'"\n]+)(?:['"])(?:;?)/g;
  var sideEffectRegex = /import[ \n\t](?:['"])([^'"\n]+)(?:['"])(?:;?)/g;
  var nameChangeRegex = /((?:\w|\s|_)*)( as )((?:\w|\s|_)*)( |,)?/g;
  var replaceImports = /* @__PURE__ */ __name((content, modules = {}) => {
    const matches = content.matchAll(packageRegex);
    const imports = /* @__PURE__ */ new Set();
    for (const match of matches) {
      const [, defaultImport, namedImports, namespaceImport, packageName] = match;
      if (packageName in modules) {
        const importName = modules[packageName];
        if (packageName === "react") {
          continue;
        }
        if (defaultImport) {
          imports.add(
            `const { default: ${defaultImport} } = ${importName};`
          );
        }
        if (namedImports) {
          imports.add(
            `const${namedImports.replace(
              nameChangeRegex,
              `$1: $3$4`
            )} = ${importName};`
          );
        }
        if (namespaceImport) {
          imports.add(`const ${namespaceImport} = ${importName};`);
        }
      }
    }
    return prettySpaces(`
    ${Array.from(imports).join("\n")}
    ${content.replace(packageRegex, "").replace(sideEffectRegex, "")}
    `);
  }, "replaceImports");

  // src/utilities/resource-from-inferred/index.ts
  var import_pluralize3 = __toESM(__require("pluralize"));
  var resourceFromInferred = /* @__PURE__ */ __name((field, resources) => {
    if (!field) {
      return void 0;
    }
    const resource = resources.find((el) => {
      const stripped = removeRelationSuffix(field.key);
      return el.name === stripped || el.name === (import_pluralize3.default.isPlural(stripped) ? stripped : import_pluralize3.default.plural(stripped)) || el.name === (import_pluralize3.default.isSingular(stripped) ? stripped : import_pluralize3.default.singular(stripped));
    });
    return resource;
  }, "resourceFromInferred");

  // src/utilities/component-name/index.ts
  var import_pluralize4 = __toESM(__require("pluralize"));
  var componentName = /* @__PURE__ */ __name((resourceName, type, fallbackResourceName = "Inferred") => {
    const sanitized = resourceName.replace(/[^a-zA-Z0-9]/g, " ");
    const singular = import_pluralize4.default.singular(sanitized);
    const prettified = prettyString(singular).replace(/ /g, "");
    const resourceComponentName = prettified || fallbackResourceName;
    const prettyType = type.charAt(0).toUpperCase() + type.slice(1);
    if (!/^[a-zA-Z]/.test(resourceComponentName)) {
      return `${prettyType}${resourceComponentName}`;
    }
    return `${resourceComponentName}${prettyType}`;
  }, "componentName");

  // src/utilities/jsx/index.ts
  var handleExpression = /* @__PURE__ */ __name((expression) => {
    if (!expression) {
      return "";
    }
    if (Array.isArray(expression)) {
      return expression.join("");
    }
    if (typeof expression === "string") {
      return expression;
    }
    if (typeof expression === "object") {
      return expression.toString();
    }
    if (typeof expression === "function") {
      return expression.toString();
    }
    if (typeof expression === "number") {
      return String(expression);
    }
    if (typeof expression === "boolean" && expression) {
      return "true";
    }
    return expression;
  }, "handleExpression");
  var jsx = /* @__PURE__ */ __name((strings, ...expressions) => {
    const parsed = strings.reduce(
      (result, currentString, i) => `${result}${currentString}${handleExpression(expressions[i])}`,
      ""
    );
    return parsed.trim();
  }, "jsx");

  // src/utilities/prepare-live-code/index.ts
  var prepareLiveCode = /* @__PURE__ */ __name((code, componentName2) => {
    return `
    ${code ?? ""}
    
    render(typeof ${componentName2} !== "undefined" ? <${componentName2} /> : <></>);
    `;
  }, "prepareLiveCode");

  // src/utilities/remove-hidden-code/index.ts
  var removeHiddenCode = /* @__PURE__ */ __name((code) => {
    return code == null ? void 0 : code.replace(
      /(\/\* hidden-start \*\/)(.|\n)*?(\/\* hidden-end \*\/)/g,
      ""
    );
  }, "removeHiddenCode");

  // src/utilities/accessor/index.ts
  var dotAccessableRegex = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
  var shouldDotAccess = /* @__PURE__ */ __name((property) => {
    return dotAccessableRegex.test(property);
  }, "shouldDotAccess");
  function accessorSingle(variableName, key, accessor2) {
    let base = `${variableName}`;
    if (key) {
      base += "?.";
      if (shouldDotAccess(key)) {
        base += key;
      } else {
        base += `['${key}']`;
      }
    }
    if (accessor2) {
      base += `?.`;
      if (shouldDotAccess(accessor2)) {
        base += accessor2;
      } else {
        base += `['${accessor2}']`;
      }
    }
    return base;
  }
  __name(accessorSingle, "accessorSingle");
  function accessorMultiple(variable, key, accessor2) {
    const all = (accessor2 ?? []).map((a) => accessorSingle(variable, key, a));
    return all;
  }
  __name(accessorMultiple, "accessorMultiple");
  var accessor = /* @__PURE__ */ __name((variable, key, accessor2, joiner = ' + " " + ') => {
    if (Array.isArray(accessor2)) {
      if (joiner) {
        return accessorMultiple(variable, key, accessor2).join(joiner);
      } else {
        return accessorSingle(variable, key, accessor2[0]);
      }
    } else {
      return accessorSingle(variable, key, accessor2);
    }
  }, "accessor");
  var dotAccessor = /* @__PURE__ */ __name((variable, key, accessor2) => {
    let str = variable;
    if (key) {
      str += `.${key}`;
    }
    if (accessor2) {
      if (Array.isArray(accessor2)) {
        str += `.${accessor2[0]}`;
      } else {
        str += `.${accessor2}`;
      }
    }
    return str;
  }, "dotAccessor");

  // src/utilities/print-imports/index.ts
  var printImports = /* @__PURE__ */ __name((imports) => {
    const byModule = imports.reduce((acc, [element, module, isDefault]) => {
      if (!acc[module]) {
        acc[module] = [];
      }
      if (!acc[module].includes(element)) {
        if (isDefault) {
          acc[module].push([element, true]);
        } else {
          acc[module].push(element);
        }
      }
      return acc;
    }, {});
    const lines = Object.entries(byModule).map(([module, elements]) => {
      const defaultImport = elements.find((e) => Array.isArray(e) && e[1]);
      const named = elements.filter((e) => typeof e === "string");
      const defaultStr = defaultImport ? `${defaultImport[0]}` : "";
      const namedStr = named.length ? `{ ${named.join(", ")} }` : "";
      return `import ${defaultStr}${defaultStr && namedStr ? ", " : ""}${namedStr} from "${module}";`;
    });
    return lines;
  }, "printImports");

  // src/utilities/is-id-key/index.ts
  var identifierRegexp = /^id$/i;
  var isIDKey = /* @__PURE__ */ __name((key) => identifierRegexp.test(key), "isIDKey");

  // src/utilities/get-option-label/index.ts
  var getOptionLabel = /* @__PURE__ */ __name((field) => {
    if (field.relationInfer && field.relationInfer.accessor) {
      if (Array.isArray(field.relationInfer.accessor)) {
        return `optionLabel: "${field.relationInfer.accessor[0]}",`;
      }
      if (field.relationInfer.accessor !== "title") {
        return `optionLabel: "${field.relationInfer.accessor}",`;
      }
      return "";
    }
    return "";
  }, "getOptionLabel");

  // src/utilities/no-op/index.ts
  var noOp = /* @__PURE__ */ __name((arg1) => {
  }, "noOp");

  // src/utilities/get-variable-name/index.ts
  var getVariableName = /* @__PURE__ */ __name((fieldKey, suffixOrPrefix = "") => {
    if (Number.isInteger(Number(fieldKey))) {
      const lowerCaseFirstLetter = suffixOrPrefix.charAt(0).toLowerCase() + suffixOrPrefix.slice(1);
      return lowerCaseFirstLetter + fieldKey;
    }
    const fieldKeyWithoutNumbers = fieldKey.replace(/^\d+/, "");
    const fieldKeyWithoutInvalidCharacters = fieldKeyWithoutNumbers.replace(
      /[^a-zA-Z0-9]/g,
      "-"
    );
    const prettyPluralVariableName = prettyString(
      fieldKeyWithoutInvalidCharacters
    ).replace(/ /g, "");
    const variableName = `${prettyPluralVariableName.charAt(0).toLowerCase() + prettyPluralVariableName.slice(1)}${suffixOrPrefix.charAt(0).toUpperCase() + suffixOrPrefix.slice(1)}`;
    return variableName;
  }, "getVariableName");

  // src/utilities/get-meta-props/index.ts
  var getMetaProps = /* @__PURE__ */ __name((identifier, meta, action) => {
    if (meta && action && identifier) {
      const metaValues = identifier ? meta[identifier] : {};
      const metaValue = (metaValues == null ? void 0 : metaValues[action]) ?? (metaValues == null ? void 0 : metaValues.default);
      if (metaValue) {
        return `meta: ${JSON.stringify(metaValue)},`;
      }
      return "";
    }
    return "";
  }, "getMetaProps");
  var pickMeta = /* @__PURE__ */ __name((identifier, meta, actions) => {
    if (meta && actions && identifier) {
      const metaValues = identifier ? meta[identifier] : {};
      const actionsToCheck = [...actions, "default"];
      const metaValue = actionsToCheck.reduce((acc, action) => {
        return acc ?? (metaValues == null ? void 0 : metaValues[action]);
      }, void 0);
      if (metaValue) {
        return metaValue;
      }
    }
    return void 0;
  }, "pickMeta");

  // src/utilities/id-quote-wrapper/index.ts
  var idQuoteWrapper = /* @__PURE__ */ __name((id) => {
    if (id === void 0)
      return id;
    if (typeof id === "string")
      return `"${id}"`;
    return id;
  }, "idQuoteWrapper");

  // src/compose-inferencers/index.ts
  var composeInferencers = /* @__PURE__ */ __name((inferencers) => {
    const fieldInferencer = /* @__PURE__ */ __name((key, value, record, infer = fieldInferencer, type) => {
      const inferences = inferencers.map(
        (inferencer) => inferencer(key, value, record, infer, type)
      );
      const picked = pickInferredField(inferences);
      return picked;
    }, "fieldInferencer");
    return fieldInferencer;
  }, "composeInferencers");

  // src/compose-transformers/index.ts
  var composeTransformers = /* @__PURE__ */ __name((transformers) => {
    const fieldTransformer = /* @__PURE__ */ __name((fields, resources, resource, record, infer, type) => {
      return transformers.reduce((acc, transformer) => {
        return transformer(acc, resources, resource, record, infer, type);
      }, fields);
    }, "fieldTransformer");
    return fieldTransformer;
  }, "composeTransformers");

  // src/field-inferencers/array.ts
  var arrayInfer = /* @__PURE__ */ __name((key, value, record, infer, type) => {
    const isArray = Array.isArray(value);
    const isBasicArray = Array.isArray(value) && value.every((v) => typeof v === "string" || typeof v === "number");
    if (isArray) {
      if (!isBasicArray) {
        const inferredInnerType = infer(key, value[0], record, infer, type);
        if (inferredInnerType) {
          return {
            ...inferredInnerType,
            key,
            multiple: true,
            priority: 1
          };
        } else {
          return false;
        }
      }
      const basicType = infer(key, value[0], record, infer, type) || {
        type: "string"
      };
      return {
        key,
        multiple: true,
        priority: 1,
        type: basicType == null ? void 0 : basicType.type
      };
    }
    return false;
  }, "arrayInfer");

  // src/field-inferencers/boolean.ts
  var booleanInfer = /* @__PURE__ */ __name((key, value) => {
    const isBoolean = typeof value === "boolean";
    if (isBoolean) {
      return {
        key,
        type: "boolean"
      };
    }
    return false;
  }, "booleanInfer");

  // src/field-inferencers/date.ts
  var import_dayjs = __toESM(__require("dayjs"));
  var dateSuffixRegexp = /(_at|_on|At|On|AT|ON)(\[\])?$/;
  var dateSeparators = ["/", ":", "-", "."];
  var dateInfer = /* @__PURE__ */ __name((key, value) => {
    const isDateField = dateSuffixRegexp.test(key) && (0, import_dayjs.default)(value).isValid();
    const isValidDateString = typeof value === "string" && (0, import_dayjs.default)(value).isValid();
    const hasDateSeparator = typeof value === "string" && dateSeparators.some((s) => value.includes(s));
    if (hasDateSeparator && (isDateField || isValidDateString)) {
      return {
        key,
        type: "date",
        priority: 1
      };
    }
    return false;
  }, "dateInfer");

  // src/field-inferencers/email.ts
  var emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var emailInfer = /* @__PURE__ */ __name((key, value) => {
    const isValidEmail = typeof value === "string" && emailRegexp.test(value);
    if (isValidEmail) {
      return {
        key,
        type: "email",
        priority: 1
      };
    }
    return false;
  }, "emailInfer");

  // src/field-inferencers/image.ts
  var imageRegexp = /\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i;
  var imageInfer = /* @__PURE__ */ __name((key, value) => {
    const isImageURI = typeof value === "string" && imageRegexp.test(value);
    if (isImageURI) {
      return {
        key,
        type: "image",
        priority: 2
      };
    }
    return false;
  }, "imageInfer");

  // src/field-inferencers/nullish.ts
  var nullishInfer = /* @__PURE__ */ __name((key, value) => {
    const isUndefined = typeof value === "undefined";
    const isNull = value === null;
    if (isUndefined || isNull) {
      return null;
    }
    return false;
  }, "nullishInfer");

  // src/field-inferencers/number.ts
  var numberInfer = /* @__PURE__ */ __name((key, value) => {
    const isNonEmptyString = typeof value === "string" && value.length > 0;
    const isNotNaN = !isNaN(value);
    const isNumericString = isNonEmptyString && isNotNaN;
    const isNumber = typeof value === "number";
    const isNumeric = isNumericString || isNumber;
    if (isNumeric) {
      return {
        key,
        type: "number"
      };
    }
    return false;
  }, "numberInfer");

  // src/field-inferencers/object.ts
  var idPropertyRegexp = /id$/i;
  var objectInfer = /* @__PURE__ */ __name((key, value, record, infer, type) => {
    const isNotNull = value !== null;
    const isNotArray = !Array.isArray(value);
    const isObject = typeof value === "object";
    if (isNotNull && isNotArray && isObject) {
      const onlyHasId = Object.keys(value).length === 1 && idPropertyRegexp.test(Object.keys(value)[0]);
      const hasId = Object.keys(value).some((k) => idPropertyRegexp.test(k));
      if (onlyHasId) {
        return {
          key,
          type: "relation",
          relation: true,
          accessor: "id",
          priority: 1
        };
      }
      const fieldableKeys = getFieldableKeys(
        key,
        value
      );
      const hasFieldableKeys = fieldableKeys ? fieldableKeys.length > 0 : false;
      if (hasFieldableKeys && fieldableKeys) {
        const innerFieldKey = fieldableKeys && Array.isArray(fieldableKeys) ? fieldableKeys[0] : fieldableKeys;
        const innerFieldType = infer(
          innerFieldKey,
          value[innerFieldKey],
          value,
          infer,
          type
        );
        if (innerFieldType) {
          const accessor2 = Array.isArray(fieldableKeys) ? fieldableKeys.map((el) => {
            if (innerFieldType.accessor) {
              return `${el}.${Array.isArray(innerFieldType.accessor) ? innerFieldType.accessor[0] : innerFieldType.accessor}`;
            } else {
              return el;
            }
          }) : innerFieldType.accessor ? Array.isArray(innerFieldType.accessor) ? `${fieldableKeys}.${innerFieldType.accessor[0]}` : `${fieldableKeys}.${innerFieldType.accessor}` : fieldableKeys;
          if ((innerFieldType == null ? void 0 : innerFieldType.type) === "text" && (type === "create" || type === "edit") && hasId) {
            return {
              key,
              type: "relation",
              relation: true,
              accessor: "id",
              priority: 1
            };
          }
          return {
            ...innerFieldType,
            fieldable: true,
            key,
            accessor: accessor2,
            priority: 1
          };
        }
      }
      return {
        key,
        fieldable: false,
        type: "object",
        priority: 1
      };
    }
    return false;
  }, "objectInfer");

  // src/field-inferencers/richtext.ts
  var richtextInfer = /* @__PURE__ */ __name((key, value) => {
    const isLongText = typeof value === "string" && value.length > 100;
    if (isLongText) {
      return {
        key,
        type: "richtext",
        priority: 1
      };
    }
    return false;
  }, "richtextInfer");

  // src/field-inferencers/text.ts
  var textInfer = /* @__PURE__ */ __name((key, value) => {
    const isText = typeof value === "string";
    if (isText) {
      return {
        key,
        type: "text"
      };
    }
    return false;
  }, "textInfer");

  // src/field-inferencers/url.ts
  var urlRegexp = /^(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?$/i;
  var urlInfer = /* @__PURE__ */ __name((key, value) => {
    const isValidURL = typeof value === "string" && urlRegexp.test(value);
    if (isValidURL) {
      return {
        key,
        type: "url",
        priority: 1
      };
    }
    return false;
  }, "urlInfer");

  // src/field-inferencers/index.ts
  var defaultElements = [
    arrayInfer,
    booleanInfer,
    dateInfer,
    emailInfer,
    imageInfer,
    nullishInfer,
    numberInfer,
    objectInfer,
    relationInfer,
    richtextInfer,
    textInfer,
    urlInfer
  ];

  // src/field-transformers/basic-to-relation.ts
  var basicToRelation = /* @__PURE__ */ __name((fields, resources, resource, record) => {
    const mapped = fields.map((field) => {
      if (!field.relation && (field.type === "text" || field.type === "richtext" || field.type === "number") && !field.canRelation) {
        const validUUIdRegex = /^[a-z0-9-]+$/;
        const isValidUUID = /* @__PURE__ */ __name((value) => {
          return validUUIdRegex.test(`${value}`);
        }, "isValidUUID");
        const isNotSelf = field.key.toLowerCase() !== "id";
        const singleOrNoAccessor = !field.accessor || typeof field.accessor === "string";
        if (!singleOrNoAccessor || !isNotSelf) {
          return field;
        }
        const valuesToCheck = field.multiple ? record[field.key] : [record[field.key]];
        const allValid = valuesToCheck.every((value) => {
          return isValidUUID(
            field.accessor ? value[field.accessor] : value
          );
        });
        if (allValid) {
          return {
            ...field,
            canRelation: true
          };
        }
        return field;
      }
      return field;
    });
    return mapped;
  }, "basicToRelation");

  // src/field-transformers/image-by-key.ts
  var imageFieldLikeRegexp = /(image|photo|avatar|cover|thumbnail|icon)/i;
  var imageByKey = /* @__PURE__ */ __name((fields) => {
    const mapped = fields.map((field) => {
      if (field.type === "url" && imageFieldLikeRegexp.test(field.key)) {
        return {
          ...field,
          type: "image"
        };
      }
      return field;
    });
    return mapped;
  }, "imageByKey");

  // src/field-transformers/relation-by-resource.ts
  var relationByResource = /* @__PURE__ */ __name((fields, resources, resource, record, infer) => {
    const mapped = fields.map((field) => {
      const inferResource = resourceFromInferred(field, resources);
      if (inferResource) {
        return {
          ...field,
          relation: true,
          type: "relation",
          resource: inferResource
        };
      }
      return field;
    });
    return mapped;
  }, "relationByResource");

  // src/field-transformers/relation-to-fieldable.ts
  var relationToFieldable = /* @__PURE__ */ __name((fields, resources, resource, record, infer, type) => {
    const mapped = fields.map((field) => {
      if (field.relation && field.type === "relation" && !field.resource) {
        const value = field.accessor ? record[field.key][field.accessor] : record[field.key];
        const inferredType = infer(field.key, value, record, infer, type);
        if (inferredType && inferredType.type !== "relation") {
          return {
            ...field,
            fieldable: true,
            relation: false,
            type: inferredType.type,
            canRelation: true
          };
        }
      }
      return field;
    });
    return mapped;
  }, "relationToFieldable");

  // src/field-transformers/index.ts
  var defaultTransformers = [
    imageByKey,
    relationByResource,
    relationToFieldable,
    basicToRelation
  ];

  // src/components/live/index.tsx
  var import_react = __toESM(__require("react"));
  var RefineCore = __toESM(require_dist3());
  var import_react_live = __require("@aliemir/react-live");
  var defaultScope = [
    ["react", "React", import_react.default],
    ["@refinedev/core", "RefineCore", RefineCore]
  ];
  var InferencerLiveContext = import_react.default.createContext(
    {}
  );
  var LiveComponent = /* @__PURE__ */ __name(({
    fetchError,
    code,
    additionalScope,
    errorComponent: ErrorComponent2
  }) => {
    const sanitized = (code && replaceExports(
      replaceImports(
        code,
        [...defaultScope, ...additionalScope ?? []].reduce(
          (acc, [
            packageName,
            variableName,
            _module,
            ignoreReplacement
          ]) => {
            if (ignoreReplacement) {
              return acc;
            }
            return {
              ...acc,
              [packageName]: variableName
            };
          },
          {}
        )
      )
    )) ?? "";
    const scope = import_react.default.useMemo(() => {
      return {
        React: import_react.default,
        ...import_react.default,
        ...[...defaultScope, ...additionalScope ?? []].reduce(
          (acc, [_packageName, variableName, packageContent]) => {
            return {
              ...acc,
              [variableName]: packageContent
            };
          },
          {}
        )
      };
    }, [additionalScope]);
    const ErrorComponentWithError = import_react.default.useMemo(() => {
      const LiveErrorComponent = /* @__PURE__ */ __name(() => {
        const { error } = import_react.default.useContext(InferencerLiveContext);
        if (ErrorComponent2) {
          return /* @__PURE__ */ import_react.default.createElement(
            ErrorComponent2,
            {
              error: error ? `<p>An error occured while rendering the generated component.You can check the generated code from the below "Show Code" button and fix the error manually.</p>
                                    <p>If you think this is a bug, please report the issue at <a target="_blank" rel="noopener noreferrer" href="https://github.com/refinedev/refine/issues">https://github.com/refinedev/refine/issues</a></p>
                                    <p>Exception:</p>
                                    <code>${error}</code>` : typeof fetchError === "string" ? fetchError : fetchError ? `<p>Something went wrong while fetching the resource data.</p>
                                    <p>To learn more about the Inferencer, please check the <a href="https://refine.dev/docs/packages/documentation/inferencer/" target="_blank">documentation</a>.</p>` : void 0
            }
          );
        }
        return null;
      }, "LiveErrorComponent");
      return LiveErrorComponent;
    }, [ErrorComponent2, fetchError]);
    return /* @__PURE__ */ import_react.default.createElement(
      import_react_live.LiveProvider,
      {
        Context: InferencerLiveContext,
        code: sanitized,
        scope,
        noInline: true
      },
      !fetchError && /* @__PURE__ */ import_react.default.createElement(import_react_live.LivePreview, { Context: InferencerLiveContext }),
      /* @__PURE__ */ import_react.default.createElement(ErrorComponentWithError, null)
    );
  }, "LiveComponent");

  // src/components/shared-code-viewer/index.tsx
  var import_react2 = __toESM(__require("react"));
  var import_prism_react_renderer = __toESM(__require("prism-react-renderer"));
  var import_vsDark = __toESM(__require("prism-react-renderer/themes/vsDark"));
  var SharedCodeViewer = /* @__PURE__ */ __name(({ code: rawCode, loading }) => {
    const code = import_react2.default.useMemo(() => {
      return prettierFormat(rawCode ?? "");
    }, [rawCode]);
    const [settled, setSettled] = import_react2.default.useState(false);
    const [isModalVisible, setIsModalVisible] = import_react2.default.useState(false);
    const [isVisible, setIsVisible] = import_react2.default.useState(false);
    const [isColumn, setIsColumn] = import_react2.default.useState(false);
    const [isModalButtonHover, setIsModalButtonHover] = import_react2.default.useState(false);
    import_react2.default.useEffect(() => {
      if (!loading) {
        const timeout = setTimeout(() => {
          setSettled(true);
        }, 300);
        return () => {
          clearTimeout(timeout);
        };
      }
      return () => void 0;
    }, [loading]);
    import_react2.default.useEffect(() => {
      if (typeof window !== "undefined") {
        const mediaQuery = window.matchMedia("(max-width: 449px)");
        if (mediaQuery.matches) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        const handleResize = /* @__PURE__ */ __name(() => {
          if (mediaQuery.matches) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        }, "handleResize");
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }
      return () => void 0;
    }, []);
    import_react2.default.useEffect(() => {
      if (typeof window !== "undefined") {
        const mediaQuery = window.matchMedia("(max-width: 1280px)");
        if (mediaQuery.matches) {
          setIsColumn(true);
        } else {
          setIsColumn(false);
        }
        const handleResize = /* @__PURE__ */ __name(() => {
          if (mediaQuery.matches) {
            setIsColumn(true);
          } else {
            setIsColumn(false);
          }
        }, "handleResize");
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }
      return () => void 0;
    }, []);
    if (code && !loading) {
      return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, isVisible && /* @__PURE__ */ import_react2.default.createElement(
        "div",
        {
          className: "refine-inferencer--code-viewer",
          style: {
            position: "sticky",
            bottom: "24px",
            paddingTop: "24px",
            left: 0,
            right: 0,
            width: "100%",
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            transition: "all 0.2s ease",
            opacity: settled && !isModalVisible ? 1 : 0,
            transform: settled && !isModalVisible ? "translateY(0)" : "translateY(100px)"
          }
        },
        /* @__PURE__ */ import_react2.default.createElement(
          "div",
          {
            style: {
              width: "calc(100% - calc(64px * 2))",
              maxWidth: "1080px",
              padding: "20px",
              backgroundColor: "#1A1A1A",
              boxShadow: "0px 4px 16px -4px rgba(0, 0, 0, 0.5), 0px 8px 32px -8px rgba(0, 0, 0, 0.35)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: isColumn ? "column" : "row",
              gap: "12px"
            }
          },
          /* @__PURE__ */ import_react2.default.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "flex-start",
                gap: "8px"
              }
            },
            /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement(InfoIcon, null)),
            /* @__PURE__ */ import_react2.default.createElement(
              "div",
              {
                style: {
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#ffffff"
                }
              },
              /* @__PURE__ */ import_react2.default.createElement(
                "p",
                {
                  style: {
                    padding: 0,
                    margin: 0
                  }
                },
                "Most of the page code is auto-generated by the",
                " ",
                /* @__PURE__ */ import_react2.default.createElement(
                  "span",
                  {
                    style: {
                      textDecoration: "underline"
                    }
                  },
                  "Inferencer"
                ),
                " ",
                "feature, based on your backend data structure."
              ),
              /* @__PURE__ */ import_react2.default.createElement(
                "p",
                {
                  style: {
                    padding: 0,
                    margin: 0
                  }
                },
                "While this is an excellent way to experiment with refine,",
                " ",
                /* @__PURE__ */ import_react2.default.createElement("span", { style: { fontWeight: 600 } }, "it's not intended to be used on production.")
              )
            )
          ),
          /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement(
            "button",
            {
              onPointerEnter: () => setIsModalButtonHover(true),
              onPointerLeave: () => setIsModalButtonHover(false),
              onClick: () => setIsModalVisible(true),
              style: {
                appearance: "none",
                border: "none",
                padding: "10px 16px",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#0080FF",
                color: "#ffffff",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 600,
                gap: "8px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                transform: isModalButtonHover ? "scale(1.025)" : void 0,
                filter: isModalButtonHover ? "brightness(1.1)" : void 0
              }
            },
            /* @__PURE__ */ import_react2.default.createElement(
              OpenIcon,
              {
                style: {
                  flexShrink: 0
                }
              }
            ),
            /* @__PURE__ */ import_react2.default.createElement("span", null, "Show the auto-generated code")
          ))
        )
      ), /* @__PURE__ */ import_react2.default.createElement(
        CodeModal,
        {
          visible: isModalVisible,
          onClose: () => setIsModalVisible(false),
          code
        }
      ));
    }
    return null;
  }, "SharedCodeViewer");
  var CodeModal = /* @__PURE__ */ __name(({
    visible,
    onClose,
    code = ""
  }) => {
    const modalRef = import_react2.default.useRef(null);
    const [isCopied, setIsCopied] = import_react2.default.useState(false);
    const [isCopyHover, setIsCopyHover] = import_react2.default.useState(false);
    const [isCloseHover, setIsCloseHover] = import_react2.default.useState(false);
    const [isLearnMoreHover, setIsLearnMoreHover] = import_react2.default.useState(false);
    import_react2.default.useEffect(() => {
      if (typeof document !== "undefined") {
        const onOutsideClick = /* @__PURE__ */ __name((event) => {
          if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
          }
        }, "onOutsideClick");
        document.addEventListener("pointerdown", onOutsideClick);
        return () => {
          document.removeEventListener("pointerdown", onOutsideClick);
        };
      }
      return () => void 0;
    }, [onClose]);
    const onCopy = /* @__PURE__ */ __name(() => {
      if (typeof navigator !== "undefined") {
        navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1e3);
      }
    }, "onCopy");
    const title = /* @__PURE__ */ import_react2.default.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }
      },
      /* @__PURE__ */ import_react2.default.createElement(
        "div",
        {
          style: {
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "32px",
            color: "#0D0D0D"
          }
        },
        "Auto-generated code by Inferencer"
      ),
      /* @__PURE__ */ import_react2.default.createElement(
        "button",
        {
          onClick: onClose,
          onPointerEnter: () => setIsCloseHover(true),
          onPointerLeave: () => setIsCloseHover(false),
          style: {
            flexShrink: 0,
            appearance: "none",
            border: "none",
            background: "none",
            padding: 0,
            margin: 0,
            outline: "none",
            borderRadius: "50px",
            width: "32px",
            height: "32px",
            cursor: "pointer",
            transition: "all 0.15s ease",
            transform: isCloseHover ? "scale(1.05)" : void 0,
            filter: isCloseHover ? "brightness(0.8)" : void 0
          }
        },
        /* @__PURE__ */ import_react2.default.createElement(CloseIcon, null)
      )
    );
    const highlight = /* @__PURE__ */ import_react2.default.createElement(
      "div",
      {
        style: {
          fontSize: "13px",
          borderRadius: "8px",
          flex: "1",
          overflow: "scroll",
          background: "#1E1E1E"
        }
      },
      /* @__PURE__ */ import_react2.default.createElement(
        import_prism_react_renderer.default,
        {
          ...import_prism_react_renderer.defaultProps,
          theme: import_vsDark.default,
          code,
          language: "tsx"
        },
        ({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps
        }) => /* @__PURE__ */ import_react2.default.createElement(
          "pre",
          {
            className,
            style: {
              ...style,
              padding: "14px 14px 14px 14px",
              margin: "0",
              width: "100%",
              boxSizing: "border-box"
            }
          },
          tokens.map((line, i) => /* @__PURE__ */ import_react2.default.createElement(
            "div",
            {
              key: i,
              ...getLineProps({
                line,
                key: i
              })
            },
            line.map((token, key) => /* @__PURE__ */ import_react2.default.createElement(
              "span",
              {
                key,
                ...getTokenProps({
                  token,
                  key
                })
              }
            ))
          ))
        )
      )
    );
    const buttons = /* @__PURE__ */ import_react2.default.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          gap: "16px"
        }
      },
      /* @__PURE__ */ import_react2.default.createElement(
        "button",
        {
          onPointerEnter: () => setIsCopyHover(true),
          onPointerLeave: () => setIsCopyHover(false),
          onClick: onCopy,
          style: {
            appearance: "none",
            height: "40px",
            border: "none",
            padding: "10px 16px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0080FF",
            color: "#ffffff",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: 600,
            gap: "8px",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            transition: "filter 0.2s ease",
            transform: isCopyHover ? "scale(1.025)" : "scale(1)",
            filter: isCopyHover ? "brightness(1.1)" : void 0
          }
        },
        /* @__PURE__ */ import_react2.default.createElement(
          ClipboardIcon,
          {
            style: {
              flexShrink: 0,
              marginTop: "-2px",
              marginBottom: "-2px"
            }
          }
        ),
        /* @__PURE__ */ import_react2.default.createElement("span", null, "Copy Generated Code"),
        /* @__PURE__ */ import_react2.default.createElement(
          "div",
          {
            style: {
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#0080FF",
              transition: "all 0.2s ease",
              transform: isCopied ? "translateY(0)" : "translateY(40px)"
            }
          },
          /* @__PURE__ */ import_react2.default.createElement(
            ClipboardIcon,
            {
              style: {
                flexShrink: 0,
                marginTop: "-2px",
                marginBottom: "-2px"
              }
            }
          ),
          /* @__PURE__ */ import_react2.default.createElement("span", null, "Copied!")
        )
      ),
      /* @__PURE__ */ import_react2.default.createElement(
        "a",
        {
          onPointerEnter: () => setIsLearnMoreHover(true),
          onPointerLeave: () => setIsLearnMoreHover(false),
          href: "https://refine.dev/docs/packages/documentation/inferencer",
          target: "_blank",
          rel: "noreferrer",
          style: {
            appearance: "none",
            textDecoration: "none",
            border: "none",
            padding: "10px 16px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 128, 255, 0.1)",
            color: "#0080FF",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: 600,
            gap: "8px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            transform: isLearnMoreHover ? "scale(1.025)" : void 0,
            filter: isLearnMoreHover ? "brightness(1.1)" : void 0
          }
        },
        /* @__PURE__ */ import_react2.default.createElement(
          OpenIcon,
          {
            style: {
              flexShrink: 0
            }
          }
        ),
        /* @__PURE__ */ import_react2.default.createElement("span", null, "Learn more about inferencer")
      )
    );
    return /* @__PURE__ */ import_react2.default.createElement(
      "div",
      {
        className: "refine-inferencer--code-viewer-modal",
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          transition: "all 0.2s ease",
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "all" : "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }
      },
      /* @__PURE__ */ import_react2.default.createElement(
        "div",
        {
          ref: modalRef,
          style: {
            transform: visible ? "scale(1) translateY(0px)" : "scale(0) translateY(-200px)",
            transition: "all 0.25s cubic-bezier(.35,1.29,.81,1.08)",
            transitionDelay: "0.25",
            width: "calc(100% - calc(32px * 2))",
            height: "calc(100% - calc(32px * 2))",
            backgroundColor: "#fff",
            maxWidth: "640px",
            maxHeight: "720px",
            borderRadius: "8px",
            padding: "16px"
          }
        },
        /* @__PURE__ */ import_react2.default.createElement(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "100%",
              gap: "16px"
            }
          },
          title,
          highlight,
          buttons
        )
      )
    );
  }, "CodeModal");
  var InfoIcon = /* @__PURE__ */ __name((props) => /* @__PURE__ */ import_react2.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 20,
      height: 20,
      fill: "none",
      ...props
    },
    /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        fill: "#0080FF",
        fillRule: "evenodd",
        d: "M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10Zm0-15a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 10 5Zm0 10c.69 0 1.25-.56 1.25-1.25V10a1.25 1.25 0 1 0-2.5 0v3.75c0 .69.56 1.25 1.25 1.25Z",
        clipRule: "evenodd"
      }
    )
  ), "InfoIcon");
  var OpenIcon = /* @__PURE__ */ __name((props) => /* @__PURE__ */ import_react2.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 16,
      height: 16,
      fill: "none",
      ...props
    },
    /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        fill: "currentColor",
        d: "M5 2a1 1 0 0 1 0 2H4v8h8v-1a1 1 0 1 1 2 0v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1Z"
      }
    ),
    /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        fill: "currentColor",
        d: "M9 2a1 1 0 0 0 0 2h1.586L6.293 8.293a1 1 0 0 0 1.414 1.414L12 5.414V7a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1H9Z"
      }
    )
  ), "OpenIcon");
  var CloseIcon = /* @__PURE__ */ __name((props) => /* @__PURE__ */ import_react2.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 32,
      height: 32,
      fill: "none",
      ...props
    },
    /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        fill: "#A6A6A6",
        fillRule: "evenodd",
        d: "M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16Zm-2.586-21.414a2 2 0 1 0-2.828 2.828L13.172 16l-2.586 2.586a2 2 0 1 0 2.828 2.828L16 18.828l2.586 2.586a2 2 0 1 0 2.828-2.828L18.828 16l2.586-2.586a2 2 0 1 0-2.828-2.828L16 13.172l-2.586-2.586Z",
        clipRule: "evenodd"
      }
    )
  ), "CloseIcon");
  var ClipboardIcon = /* @__PURE__ */ __name((props) => /* @__PURE__ */ import_react2.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 20,
      height: 20,
      viewBox: "0 0 24 24",
      fill: "none",
      ...props
    },
    /* @__PURE__ */ import_react2.default.createElement(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M8 5a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1Zm0 7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H9Z",
        clipRule: "evenodd"
      }
    ),
    /* @__PURE__ */ import_react2.default.createElement("path", { fill: "currentColor", d: "M13 4a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2Z" })
  ), "ClipboardIcon");

  // src/use-infer-fetch/index.tsx
  var import_react3 = __toESM(__require("react"));
  var import_core2 = __toESM(require_dist3());
  var useInferFetch = /* @__PURE__ */ __name((type, resourceNameOrRouteName, idFromProps, meta) => {
    const {
      resource,
      id: idFromURL,
      resources
    } = (0, import_core2.useResource)(resourceNameOrRouteName);
    const id = idFromProps ?? idFromURL;
    const dataProvider = (0, import_core2.useDataProvider)();
    const [error, setError] = import_react3.default.useState(void 0);
    const [data, setData] = import_react3.default.useState(
      void 0
    );
    const [datas, setDatas] = import_react3.default.useState(void 0);
    const [initial, setInitial] = import_react3.default.useState(true);
    const [loading, setLoading] = import_react3.default.useState(false);
    const resolver = import_react3.default.useCallback(
      async (recordItemId) => {
        var _a;
        const dataProviderName = dataProviderFromResource(resource) ?? pickDataProvider(resource == null ? void 0 : resource.name, void 0, resources);
        const dp = dataProvider(dataProviderName);
        setLoading(true);
        setError(void 0);
        try {
          if (type === "list" || type === "create") {
            if (resource) {
              const response = await dp.getList({
                resource: resource == null ? void 0 : resource.name,
                meta: pickMeta(
                  (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
                  meta,
                  ["getList"]
                )
              });
              const r = (_a = response.data) == null ? void 0 : _a[0];
              if (!r) {
                setError(
                  `<p>No records/data found for resource "${resource == null ? void 0 : resource.name}".</p>
                            <p>Please check your data provider and resource.</p>
                            <p>For more info, please check the <a href="https://refine.dev/docs/packages/documentation/inferencer/" target="_blank">documentation</a>.</p>`
                );
              }
              setData(r);
              setDatas(response.data);
              setTimeout(() => {
                setLoading(false);
              }, 500);
            }
          }
          if ((type === "edit" || type === "show") && recordItemId) {
            if (resource) {
              const response = await dp.getOne({
                resource: resource == null ? void 0 : resource.name,
                id: recordItemId,
                meta: pickMeta(
                  (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
                  meta,
                  ["getOne"]
                )
              });
              const r = response.data;
              if (!r) {
                setError(
                  `<p>No records/data found for resource "${resource == null ? void 0 : resource.name}".</p>
                            <p>Please check your data provider and resource.</p>
                            <p>For more info, please check the <a href="https://refine.dev/docs/packages/documentation/inferencer/" target="_blank">documentation</a>.</p>`
                );
              }
              setData(r);
              setTimeout(() => {
                setLoading(false);
              }, 500);
            }
          }
        } catch (error2) {
          console.warn(
            "An error occured while fetching the resource data. Please check the error message below:",
            error2
          );
          setError(
            `<p>Something went wrong while fetching the resource data.</p>
                    <p>Please check your data provider and API for resource "${resource == null ? void 0 : resource.name}".</p>
                    <p>For more info, please check the <a href="https://refine.dev/docs/packages/documentation/inferencer/" target="_blank">documentation</a>.</p>`
          );
          setTimeout(() => {
            setLoading(false);
          }, 500);
        }
      },
      [type, dataProvider, resource, resources]
    );
    import_react3.default.useEffect(() => {
      setInitial(false);
      if (!loading && !data) {
        resolver(id);
      }
    }, [resolver, id]);
    return {
      data,
      datas,
      loading,
      initial,
      error
    };
  }, "useInferFetch");

  // src/use-relation-fetch/index.ts
  var import_react4 = __toESM(__require("react"));
  var import_core3 = __toESM(require_dist3());
  var import_lodash_es = __require("lodash-es");
  var useRelationFetch = /* @__PURE__ */ __name(({
    record,
    fields,
    infer,
    meta
  }) => {
    const dataProvider = (0, import_core3.useDataProvider)();
    const [updatedFields, setUpdatedFields] = import_react4.default.useState([]);
    const [initial, setInitial] = import_react4.default.useState(true);
    const [loading, setLoading] = import_react4.default.useState(false);
    const resolver = import_react4.default.useCallback(
      async (allFields) => {
        console.groupCollapsed(
          "@refinedev/inferencer is trying to detect relations"
        );
        const attempts = [];
        setLoading(true);
        try {
          const promises = allFields.map(async (field) => {
            var _a, _b, _c, _d, _e;
            if (field && (field.relation || field.canRelation)) {
              if (record) {
                if (field.relationInfer) {
                  return field;
                }
                const dataProviderName = dataProviderFromResource(
                  field.resource
                );
                const dp = dataProvider(dataProviderName);
                const isMultiple = field.multiple;
                const requestId = Array.isArray(field.accessor) ? void 0 : field.multiple ? record[field.key].map(
                  (el) => {
                    return field.accessor ? (0, import_lodash_es.get)(el, field.accessor) : el;
                  }
                )[0] : field.accessor ? (0, import_lodash_es.get)(record[field.key], field.accessor) : record[field.key];
                if (requestId && field.resource) {
                  try {
                    let record2 = {};
                    if (isMultiple && dp.getMany) {
                      const { data } = await dp.getMany({
                        resource: field.resource.name,
                        ids: [requestId],
                        meta: pickMeta(
                          ((_a = field.resource) == null ? void 0 : _a.identifier) ?? ((_b = field.resource) == null ? void 0 : _b.name),
                          meta,
                          ["getMany"]
                        )
                      });
                      record2 = data == null ? void 0 : data[0];
                    } else {
                      const { data } = await dp.getOne({
                        resource: field.resource.name,
                        id: requestId,
                        meta: pickMeta(
                          ((_c = field.resource) == null ? void 0 : _c.identifier) ?? ((_d = field.resource) == null ? void 0 : _d.name),
                          meta,
                          isMultiple ? ["getMany", "getOne"] : ["getOne"]
                        )
                      });
                      record2 = data;
                    }
                    attempts.push({
                      status: "success",
                      resource: field.resource.name,
                      field: field.key
                    });
                    const relationInfer2 = infer(
                      "__",
                      record2,
                      {},
                      infer
                    );
                    return {
                      ...field,
                      relationInfer: relationInfer2
                    };
                  } catch (error) {
                    attempts.push({
                      status: "error",
                      resource: field.resource.name,
                      field: field.key
                    });
                    return {
                      ...field,
                      relationInfer: null
                    };
                  }
                }
                if (requestId) {
                  let responseData;
                  let isPlural;
                  try {
                    let record2 = {};
                    if (isMultiple && dp.getMany) {
                      const { data } = await ((_e = dp.getMany) == null ? void 0 : _e.call(dp, {
                        resource: toPlural(
                          removeRelationSuffix(field.key)
                        ),
                        ids: [requestId],
                        meta: pickMeta(
                          toPlural(
                            removeRelationSuffix(
                              field.key
                            )
                          ),
                          meta,
                          ["getMany"]
                        )
                      }));
                      record2 = data == null ? void 0 : data[0];
                    } else {
                      const { data } = await dp.getOne({
                        resource: toPlural(
                          removeRelationSuffix(field.key)
                        ),
                        id: requestId,
                        meta: pickMeta(
                          toPlural(
                            removeRelationSuffix(
                              field.key
                            )
                          ),
                          meta,
                          isMultiple ? ["getMany", "getOne"] : ["getOne"]
                        )
                      });
                      record2 = data;
                    }
                    attempts.push({
                      status: "success",
                      resource: toPlural(
                        removeRelationSuffix(field.key)
                      ),
                      field: field.key
                    });
                    responseData = record2;
                    isPlural = true;
                  } catch (error) {
                    attempts.push({
                      status: "error",
                      resource: toPlural(
                        removeRelationSuffix(field.key)
                      ),
                      field: field.key
                    });
                    let record2 = {};
                    try {
                      if (isMultiple && dp.getMany) {
                        const { data } = await dp.getMany({
                          resource: toSingular(
                            removeRelationSuffix(
                              field.key
                            )
                          ),
                          meta: pickMeta(
                            toSingular(
                              removeRelationSuffix(
                                field.key
                              )
                            ),
                            meta,
                            ["getMany"]
                          ),
                          ids: [requestId]
                        });
                        record2 = data == null ? void 0 : data[0];
                      } else {
                        const { data } = await dp.getOne({
                          resource: toSingular(
                            removeRelationSuffix(
                              field.key
                            )
                          ),
                          meta: pickMeta(
                            toSingular(
                              removeRelationSuffix(
                                field.key
                              )
                            ),
                            meta,
                            isMultiple ? ["getMany", "getOne"] : ["getOne"]
                          ),
                          id: requestId
                        });
                        record2 = data;
                      }
                      attempts.push({
                        status: "success",
                        resource: toSingular(
                          removeRelationSuffix(field.key)
                        ),
                        field: field.key
                      });
                      responseData = record2;
                      isPlural = false;
                    } catch (error2) {
                      attempts.push({
                        status: "error",
                        resource: toSingular(
                          removeRelationSuffix(field.key)
                        ),
                        field: field.key
                      });
                      return {
                        ...field,
                        relationInfer: null
                      };
                    }
                  }
                  const relationInfer2 = infer(
                    "__",
                    responseData,
                    {},
                    infer
                  );
                  const resourceNameWithoutRelationSuffix = removeRelationSuffix(field.key);
                  return {
                    ...field,
                    relation: true,
                    type: "relation",
                    resource: {
                      name: isPlural ? toPlural(
                        resourceNameWithoutRelationSuffix
                      ) : toSingular(
                        resourceNameWithoutRelationSuffix
                      )
                    },
                    fieldable: false,
                    canRelation: void 0,
                    relationInfer: relationInfer2
                  };
                }
                return {
                  ...field,
                  relationInfer: null
                };
              }
            }
            return field;
          });
          const results = await Promise.all(promises);
          setUpdatedFields(results.filter((el) => el));
          setTimeout(() => {
            setLoading(false);
          }, 500);
        } catch (error) {
          setTimeout(() => {
            setLoading(false);
          }, 500);
        }
        setTimeout(() => {
          console.log(
            `Tried to detect relations with ${attempts.length} attempts and succeeded with ${attempts.filter((el) => el.status === "success").length} attempts.`
          );
          console.groupEnd();
          console.info(
            `@refinedev/inferencer may send multiple requests to your API for nonexistent resources when trying to detect relations. To learn more about how the inferencer works, visit https://s.refine.dev/how-inferencer-works`
          );
        }, 500);
      },
      [dataProvider, record]
    );
    import_react4.default.useEffect(() => {
      setInitial(false);
      if (!loading && fields && fields.length > 0 && updatedFields.length === 0) {
        resolver(fields);
      }
    }, [resolver, loading, fields, resolver]);
    return {
      fields: updatedFields,
      loading,
      initial
    };
  }, "useRelationFetch");

  // src/create-inferencer/index.tsx
  var createInferencer = /* @__PURE__ */ __name(({
    type,
    additionalScope = [],
    customElements = [],
    fieldTransformers = [],
    renderer: renderer5,
    loadingComponent: LoadingComponent2,
    errorComponent: ErrorComponent2,
    codeViewerComponent: CodeViewerComponent
  }) => {
    const infer = composeInferencers([...defaultElements, ...customElements]);
    const transform = composeTransformers([
      ...defaultTransformers,
      ...fieldTransformers
    ]);
    const Inferencer = /* @__PURE__ */ __name(({
      resourceName,
      fieldTransformer,
      hideCodeViewerInProduction,
      meta,
      id
    }) => {
      var _a, _b;
      const { resource, resources } = (0, import_core4.useResource)(resourceName);
      const { i18nProvider } = (0, import_react5.useContext)(import_core4.TranslationContext);
      const { resource: resourceFromURL } = (0, import_core4.useResource)();
      const {
        data: record,
        datas: records,
        loading: recordLoading,
        initial: isInitialLoad,
        error: inferError
      } = useInferFetch(type, resourceName ?? (resource == null ? void 0 : resource.name), id, meta);
      const inferSingleField = /* @__PURE__ */ __name((key, value, record2) => {
        const inferResult = infer(key, value, record2, infer, type);
        if (inferResult) {
          if (resource) {
            const transformed = transform(
              [inferResult],
              resources,
              resource,
              record2,
              infer,
              type
            );
            const customTransformedFields = fieldTransformer ? transformed.flatMap((field) => {
              const result = fieldTransformer(field);
              return result ? [result] : [];
            }) : transformed;
            return customTransformedFields == null ? void 0 : customTransformedFields[0];
          }
        }
        return void 0;
      }, "inferSingleField");
      const inferSingleRecord = /* @__PURE__ */ __name((record2) => {
        const inferred = Object.keys(record2).map((key) => {
          const value = record2[key];
          const inferResult = inferSingleField(key, value, record2);
          return inferResult;
        }).filter(Boolean);
        return inferred;
      }, "inferSingleRecord");
      const inferMultipleRecords = /* @__PURE__ */ __name((records2) => {
        const inferred = records2.map((record2) => inferSingleRecord(record2));
        const allUniqueKeys = records2.flatMap((record2) => Object.keys(record2)).filter((key, index, self) => self.indexOf(key) === index);
        const mostCommonRecord = {};
        const mostCommonFields = allUniqueKeys.map((key) => {
          const fields = inferred.map(
            (fields2) => fields2.find((field) => field.key === key)
          );
          const mostCommonField = fields.reduce(
            (acc, field, index) => {
              if (!field) {
                return acc;
              }
              const count = fields.filter(
                (f) => (f == null ? void 0 : f.key) === field.key && (f == null ? void 0 : f.type) === field.type
              ).length;
              if (count > acc.count) {
                mostCommonRecord[key] = records2[index][key];
                return {
                  count,
                  field
                };
              }
              return acc;
            },
            { count: 0, field: void 0 }
          );
          return mostCommonField.field;
        });
        const response = {
          commonRecord: mostCommonRecord,
          inferredFields: mostCommonFields
        };
        return response;
      }, "inferMultipleRecords");
      const [rawResults, recordInUse] = import_react5.default.useMemo(() => {
        if (records && (type === "list" || type === "create")) {
          const inferred = inferMultipleRecords(records);
          return [
            inferred.inferredFields,
            inferred.commonRecord
          ];
        }
        if (record) {
          const inferred = Object.keys(record).map((key) => {
            const value = record[key];
            const inferResult = infer(
              key,
              value,
              record,
              infer,
              type
            );
            return inferResult;
          }).filter(Boolean);
          if (resource) {
            const transformed = transform(
              inferred,
              resources,
              resource,
              record,
              infer,
              type
            );
            const customTransformedFields = fieldTransformer ? transformed.flatMap((field) => {
              const result = fieldTransformer(field);
              return result ? [result] : [];
            }) : transformed;
            return [customTransformedFields, record];
          }
          return [[], record];
        }
        return [[], void 0];
      }, [record, records, resources, resource, fieldTransformer]);
      const {
        fields: results,
        loading: relationLoading
        // initial: relationInitial,
      } = useRelationFetch({
        record: recordInUse,
        fields: rawResults,
        infer,
        meta
      });
      const clearedFields = import_react5.default.useMemo(() => {
        const cleanFields = [];
        results.forEach((f, idx, arr) => {
          if (f.resource) {
            if (cleanFields.findIndex(
              (el) => {
                var _a2, _b2;
                return ((_a2 = el.resource) == null ? void 0 : _a2.name) === ((_b2 = f.resource) == null ? void 0 : _b2.name);
              }
            ) > -1) {
              return;
            }
            const duplicates = arr.filter((field, index) => {
              var _a2, _b2, _c, _d, _e, _f;
              if (index !== idx) {
                const currentFieldHasResource = f.resource;
                const fieldHasResource = field.resource;
                const hasAnyIdentifier = ((_a2 = field.resource) == null ? void 0 : _a2.identifier) || ((_b2 = f.resource) == null ? void 0 : _b2.identifier);
                const isSameResource = hasAnyIdentifier ? ((_c = field.resource) == null ? void 0 : _c.identifier) === ((_d = f.resource) == null ? void 0 : _d.identifier) : ((_e = field.resource) == null ? void 0 : _e.name) === ((_f = f.resource) == null ? void 0 : _f.name);
                return currentFieldHasResource && fieldHasResource && isSameResource;
              } else {
                return false;
              }
            });
            if (duplicates.length > 0) {
              if (type === "create" || type === "edit") {
                let toPush = void 0;
                [f, ...duplicates].find((el) => {
                  if (el.fieldable !== true && toPush === void 0) {
                    toPush = el;
                  }
                });
                if (toPush) {
                  cleanFields.push(toPush);
                } else {
                  cleanFields.push(f);
                }
              } else {
                let toPush = void 0;
                [f, ...duplicates].find((el) => {
                  if (el.fieldable !== false && toPush === void 0) {
                    toPush = el;
                  }
                });
                if (toPush) {
                  cleanFields.push(toPush);
                } else {
                  cleanFields.push(f);
                }
              }
            } else {
              cleanFields.push(f);
            }
          } else {
            cleanFields.push(f);
          }
        });
        return cleanFields;
      }, [results, type]);
      const code = import_react5.default.useMemo(() => {
        if (!recordLoading && !relationLoading && !isInitialLoad && resource) {
          return renderer5({
            resource,
            resources,
            fields: clearedFields,
            infer,
            meta,
            isCustomPage: resource.name !== (resourceFromURL == null ? void 0 : resourceFromURL.name),
            id,
            i18n: !!i18nProvider
          });
        }
        return "";
      }, [
        resource,
        resources,
        clearedFields,
        recordLoading,
        relationLoading
      ]);
      const hiddenCodeViewer = false;
      return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, LoadingComponent2 && (recordLoading || relationLoading) && /* @__PURE__ */ import_react5.default.createElement(LoadingComponent2, null), !recordLoading && !relationLoading && /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(
        LiveComponent,
        {
          fetchError: !recordLoading && inferError ? inferError : !recordLoading && !isInitialLoad && !record,
          code: prepareLiveCode(
            code,
            componentName(
              ((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.label) ?? ((_b = resource == null ? void 0 : resource.options) == null ? void 0 : _b.label) ?? (resource == null ? void 0 : resource.label) ?? (resource == null ? void 0 : resource.name) ?? "Resource",
              type
            )
          ),
          errorComponent: ErrorComponent2,
          additionalScope
        }
      ), typeof CodeViewerComponent !== "undefined" && !hiddenCodeViewer ? /* @__PURE__ */ import_react5.default.createElement(
        CodeViewerComponent,
        {
          code: removeHiddenCode(code),
          loading: recordLoading || relationLoading
        }
      ) : null));
    }, "Inferencer");
    const InferencerComponent = /* @__PURE__ */ __name(({
      name,
      resource,
      fieldTransformer,
      meta,
      hideCodeViewerInProduction,
      id
    }) => {
      const { resource: resourceItem } = (0, import_core4.useResource)(resource ?? name);
      const key = `${(resourceItem == null ? void 0 : resourceItem.identifier) ?? (resourceItem == null ? void 0 : resourceItem.name)}-${type}-${id}`;
      return /* @__PURE__ */ import_react5.default.createElement(
        Inferencer,
        {
          hideCodeViewerInProduction,
          fieldTransformer,
          resourceName: resource ?? name,
          meta: meta ?? {},
          key,
          id
        }
      );
    }, "InferencerComponent");
    return InferencerComponent;
  }, "createInferencer");

  // src/inferencers/chakra-ui/error.tsx
  var import_react6 = __toESM(__require("react"));
  var import_react7 = __require("@chakra-ui/react");
  var ErrorComponent = /* @__PURE__ */ __name(({
    error
  }) => {
    if (error) {
      return /* @__PURE__ */ import_react6.default.createElement(import_react7.Center, { style: { minHeight: 300 } }, /* @__PURE__ */ import_react6.default.createElement(
        import_react7.Alert,
        {
          status: "error",
          variant: "subtle",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "200px",
          maxWidth: "700px"
        },
        /* @__PURE__ */ import_react6.default.createElement(import_react7.AlertIcon, { boxSize: "40px", mr: 0 }),
        /* @__PURE__ */ import_react6.default.createElement(import_react7.AlertDescription, { mt: 4, maxWidth: "sm" }, /* @__PURE__ */ import_react6.default.createElement(
          "div",
          {
            dangerouslySetInnerHTML: { __html: error ?? "" }
          }
        ))
      ));
    }
    return null;
  }, "ErrorComponent");

  // src/inferencers/chakra-ui/loading.tsx
  var import_react8 = __toESM(__require("react"));
  var import_react9 = __require("@chakra-ui/react");
  var LoadingComponent = /* @__PURE__ */ __name(() => {
    return /* @__PURE__ */ import_react8.default.createElement(import_react9.Box, { position: "relative", bg: "chakra-body-bg", minH: 120 }, /* @__PURE__ */ import_react8.default.createElement(
      import_react9.Spinner,
      {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }
    ));
  }, "LoadingComponent");

  // src/inferencers/chakra-ui/show.tsx
  var renderer = /* @__PURE__ */ __name(({
    resource,
    fields,
    meta,
    isCustomPage,
    id,
    i18n
  }) => {
    const COMPONENT_NAME = componentName(
      resource.label ?? resource.name,
      "show"
    );
    const recordName = "record";
    const imports = [
      ["useShow", "@refinedev/core"],
      ["IResourceComponentsProps", "@refinedev/core"],
      ["Show", "@refinedev/chakra-ui"],
      ["Heading", "@chakra-ui/react"]
    ];
    if (i18n) {
      imports.push(["useTranslate", "@refinedev/core"]);
    }
    const relationFields = fields.filter(
      (field) => (field == null ? void 0 : field.relation) && !(field == null ? void 0 : field.fieldable) && (field == null ? void 0 : field.resource)
    );
    const relationHooksCode = relationFields.filter(Boolean).map((field) => {
      var _a, _b, _c, _d;
      if ((field == null ? void 0 : field.relation) && !field.fieldable && field.resource) {
        if (field.multiple) {
          imports.push(["useMany", "@refinedev/core"]);
          let ids = accessor(recordName, field.key);
          if (field.accessor) {
            ids = `${accessor(
              recordName,
              field.key
            )}?.map((item: any) => ${accessor(
              "item",
              void 0,
              field.accessor
            )})`;
          }
          return `
                const { data: ${getVariableName(
            field.key,
            "Data"
          )}, isLoading: ${getVariableName(field.key, "IsLoading")} } =
                useMany({
                    resource: "${field.resource.name}",
                    ids: ${ids} || [],
                    queryOptions: {
                        enabled: !!${recordName} && !!${ids}?.length,
                    },
                    ${getMetaProps(
            ((_a = field == null ? void 0 : field.resource) == null ? void 0 : _a.identifier) ?? ((_b = field == null ? void 0 : field.resource) == null ? void 0 : _b.name),
            meta,
            "getMany"
          )}
                });
                `;
        }
        imports.push(["useOne", "@refinedev/core"]);
        return `
                const { data: ${getVariableName(
          field.key,
          "Data"
        )}, isLoading: ${getVariableName(field.key, "IsLoading")} } =
                useOne({
                    resource: "${field.resource.name}",
                    id: ${accessor(
          recordName,
          field.key,
          field.accessor,
          false
        )} || "",
                    queryOptions: {
                        enabled: !!${recordName},
                    },
                    ${getMetaProps(
          ((_c = field == null ? void 0 : field.resource) == null ? void 0 : _c.identifier) ?? ((_d = field == null ? void 0 : field.resource) == null ? void 0 : _d.name),
          meta,
          "getOne"
        )}
                });
            `;
      }
      return void 0;
    }).filter(Boolean);
    const renderRelationFields = /* @__PURE__ */ __name((field) => {
      if (field.relation && field.resource) {
        const variableName = getVariableName(field.key, "Data");
        const variableIsLoading = getVariableName(field.key, "IsLoading");
        if (field.multiple) {
          const variableDataLength = accessor(recordName, field.key) + "?.length";
          imports.push(
            ["TagField", "@refinedev/chakra-ui"],
            ["HStack", "@chakra-ui/react"]
          );
          return jsx`
                <Heading as="h5" size="sm" mt={4}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Heading>
                {${variableIsLoading} && ${variableDataLength} ? <>Loading...</> : (
                    <>
                    ${(() => {
            var _a;
            if (field.relationInfer) {
              if ((_a = field.relationInfer) == null ? void 0 : _a.accessor) {
                if (Array.isArray(field.relationInfer.accessor)) {
                  return `Not Handled.`;
                } else {
                  const mapItemName = getVariableName(
                    field.key
                  );
                  const val = accessor(
                    mapItemName,
                    void 0,
                    field.relationInfer.accessor
                  );
                  return `{record?.${field.key}?.length ? <HStack spacing="12px">{${variableName}?.data?.map((${mapItemName}: any) => <TagField key={${val}} value={${val}} />)}</HStack> : <></>}`;
                }
              } else {
                return `Not Handled.`;
                return `{${variableName}?.data}`;
              }
            } else {
              return `not-handled - relation with multiple but no resource`;
            }
          })()}
                    </>
                )}
                `;
        }
        if (field.fieldable) {
          return jsx`
                <Heading as="h5" size="sm" mt={4}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Heading>
                <TextField value={${accessor(
            recordName,
            field.key,
            field.accessor
          )}} />
                `;
        }
        return jsx`
                <Heading as="h5" size="sm" mt={4}>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</Heading>
                {${variableIsLoading} ? <>Loading...</> : (
                    <>
                    ${(() => {
          var _a;
          if (field.relationInfer) {
            if ((_a = field.relationInfer) == null ? void 0 : _a.accessor) {
              if (Array.isArray(field.relationInfer.accessor)) {
                return `{${accessor(
                  `${variableName}?.data`,
                  void 0,
                  field.relationInfer.accessor,
                  ' + " " + '
                )}}`;
              } else {
                return `{${variableName}?.data?.${field.relationInfer.accessor}}`;
              }
            } else {
              return `{${variableName}?.data}`;
            }
          } else {
            return `{${variableName}?.data?.id}`;
          }
        })()}
                    </>
                )}
                
                `;
      }
      return void 0;
    }, "renderRelationFields");
    const textFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "text") {
        imports.push(
          ["TagField", "@refinedev/chakra-ui"],
          ["TextField", "@refinedev/chakra-ui"],
          ["HStack", "@chakra-ui/react"]
        );
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Heading as="h5" size="sm" mt={4}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Heading>
                <HStack spacing="12px">
                {${accessor(recordName, field.key)}?.map((item: any) => (
                    <TagField value={${val}} key={${val}} />
                ))}
                </HStack>
            `;
        }
        return jsx`
                <Heading as="h5" size="sm" mt={4}>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</Heading>
                <TextField value={${accessor(
          recordName,
          field.key,
          field.accessor
        )}} />
            `;
      }
      return void 0;
    }, "textFields");
    const imageFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "image") {
        imports.push(["Image", "@chakra-ui/react"]);
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Heading as="h5" size="sm" mt={4}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Heading>
                {${accessor(recordName, field.key)}?.map((item: any) => (
                    <Image sx={{ maxWidth: 200 }} src={${val}} key={${val}} />
                ))}
            `;
        }
        return jsx`
                <Heading as="h5" size="sm" mt={4}>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</Heading>
                <Image sx={{ maxWidth: 200 }} src={${accessor(
          recordName,
          field.key,
          field.accessor,
          " + "
        )}} />
                `;
      }
      return void 0;
    }, "imageFields");
    const emailFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "email") {
        imports.push(
          ["TagField", "@refinedev/chakra-ui"],
          ["EmailField", "@refinedev/chakra-ui"],
          ["HStack", "@chakra-ui/react"]
        );
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Heading as="h5" size="sm" mt={4}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Heading>
                <HStack spacing="12px">
                {${accessor(recordName, field.key)}?.map((item: any) => (
                    <TagField value={${val}} key={${val}} />
                ))}
                </HStack>
            `;
        }
        return jsx`
                <Heading as="h5" size="sm" mt={4}>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</Heading>
                <EmailField value={${accessor(
          recordName,
          field.key,
          field.accessor,
          " + "
        )}} />
            `;
      }
      return void 0;
    }, "emailFields");
    const urlFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "url") {
        imports.push(
          ["TagField", "@refinedev/chakra-ui"],
          ["UrlField", "@refinedev/chakra-ui"],
          ["HStack", "@chakra-ui/react"]
        );
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Heading as="h5" size="sm" mt={4}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Heading>
                <HStack spacing="12px">
                {${accessor(recordName, field.key)}?.map((item: any) => (
                    <TagField value={${val}} key={${val}} />
                ))}
                </HStack>
            `;
        }
        return jsx`
                <Heading as="h5" size="sm" mt={4}>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</Heading>
                <UrlField value={${accessor(
          recordName,
          field.key,
          field.accessor,
          " + "
        )}} />
            `;
      }
      return void 0;
    }, "urlFields");
    const booleanFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "boolean") {
        imports.push(
          ["TagField", "@refinedev/chakra-ui"],
          ["BooleanField", "@refinedev/chakra-ui"],
          ["HStack", "@chakra-ui/react"]
        );
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Heading as="h5" size="sm" mt={4}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Heading>
                <HStack spacing="12px">
                {${accessor(recordName, field.key)}?.map((item: any) => (
                    <TagField value={${val}} key={${val}} />
                ))}
                </HStack>
            `;
        }
        return jsx`
                <Heading as="h5" size="sm" mt={4}>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</Heading>
                <BooleanField value={${accessor(
          recordName,
          field.key,
          field.accessor,
          " && "
        )}} />
            `;
      }
      return void 0;
    }, "booleanFields");
    const dateFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "date") {
        imports.push(["DateField", "@refinedev/chakra-ui"]);
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Heading as="h5" size="sm" mt={4}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Heading>
                {${accessor(recordName, field.key)}?.map((item: any) => (
                    <DateField value={${val}} key={${val}} />
                ))}
            `;
        }
        return jsx`
                <Heading as="h5" size="sm" mt={4}>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</Heading>
                <DateField value={${accessor(
          recordName,
          field.key,
          field.accessor,
          " + ' ' + "
        )}} />
            `;
      }
      return void 0;
    }, "dateFields");
    const richtextFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "richtext") {
        imports.push(["MarkdownField", "@refinedev/chakra-ui"]);
        return jsx`
                <Heading as="h5" size="sm" mt={4}>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</Heading>
                <MarkdownField value={${accessor(
          recordName,
          field.key,
          field.accessor,
          ' + " " + '
        )}} />
            `;
      }
      return void 0;
    }, "richtextFields");
    const numberFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "number") {
        imports.push(
          ["NumberField", "@refinedev/chakra-ui"],
          ["TagField", "@refinedev/chakra-ui"],
          ["HStack", "@chakra-ui/react"]
        );
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Heading as="h5" size="sm" mt={4}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Heading>
                <HStack spacing="12px">
                {${accessor(recordName, field.key)}?.map((item: any) => (
                    <TagField value={${val}} key={${val}} />
                ))}
                </HStack>
            `;
        }
        return jsx`
                <Heading as="h5" size="sm" mt={4}>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</Heading>
                <NumberField value={${accessor(
          recordName,
          field.key,
          field.accessor,
          ' + " " + '
        )} ?? ""} />
            `;
      }
      return void 0;
    }, "numberFields");
    const wrapper = /* @__PURE__ */ __name((code) => {
      if (code) {
        return jsx`
                ${code}
            `;
      }
      return void 0;
    }, "wrapper");
    const renderedFields = fields.map((field) => {
      switch (field == null ? void 0 : field.type) {
        case "text":
          return wrapper(textFields(field));
        case "number":
          return wrapper(numberFields(field));
        case "richtext":
          return wrapper(richtextFields(field));
        case "email":
          return wrapper(emailFields(field));
        case "image":
          return wrapper(imageFields(field));
        case "date":
          return wrapper(dateFields(field));
        case "boolean":
          return wrapper(booleanFields(field));
        case "url":
          return wrapper(urlFields(field));
        case "relation":
          return wrapper(renderRelationFields(field));
        default:
          return void 0;
      }
    });
    noOp(imports);
    const useTranslateHook = i18n && `const translate = useTranslate();`;
    return jsx`
    ${printImports(imports)}
    
    export const ${COMPONENT_NAME}: React.FC<IResourceComponentsProps> = () => {
        ${useTranslateHook}
        const { queryResult } = useShow(${isCustomPage ? `{ 
                    resource: "${resource.name}", 
                    id: ${idQuoteWrapper(id)},
                    ${getMetaProps(
      (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
      meta,
      "getOne"
    )}
                }` : getMetaProps(
      (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
      meta,
      "getOne"
    ) ? `{ ${getMetaProps(
      (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
      meta,
      "getOne"
    )} }` : ""});
        const { data, isLoading } = queryResult;

        const ${recordName} = data?.data;
    
        ${relationHooksCode}

        return (
            <Show isLoading={isLoading}>
                ${renderedFields.join("")}
            </Show>
        );
    };
    `;
  }, "renderer");
  var ShowInferencer = createInferencer({
    type: "show",
    additionalScope: [
      [
        "@refinedev/chakra-ui",
        "RefineChakraUI",
        {
          Show: import_chakra_ui.Show,
          TagField: import_chakra_ui.TagField,
          TextField: import_chakra_ui.TextField,
          EmailField: import_chakra_ui.EmailField,
          UrlField: import_chakra_ui.UrlField,
          BooleanField: import_chakra_ui.BooleanField,
          DateField: import_chakra_ui.DateField,
          MarkdownField: import_chakra_ui.MarkdownField,
          NumberField: import_chakra_ui.NumberField
        }
      ],
      ["@chakra-ui/react", "ChakraUI", { Heading: import_react10.Heading, HStack: import_react10.HStack, Image: import_react10.Image }]
    ],
    codeViewerComponent: SharedCodeViewer,
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    renderer
  });

  // src/inferencers/chakra-ui/list.tsx
  var import_chakra_ui2 = __toESM(require_dist6());
  var import_react11 = __require("@chakra-ui/react");
  var import_react_table = __toESM(require_dist7());
  var import_react_table2 = __require("@tanstack/react-table");
  var import_icons = __require("@tabler/icons");
  var getAccessorKey2 = /* @__PURE__ */ __name((field) => {
    return Array.isArray(field.accessor) || field.multiple ? `accessorKey: "${field.key}"` : field.accessor ? `accessorKey: "${dotAccessor(field.key, void 0, field.accessor)}"` : `accessorKey: "${field.key}"`;
  }, "getAccessorKey");
  var renderer2 = /* @__PURE__ */ __name(({
    resource,
    fields,
    meta,
    isCustomPage,
    i18n
  }) => {
    const COMPONENT_NAME = componentName(
      resource.label ?? resource.name,
      "list"
    );
    const recordName = "tableData?.data";
    const imports = [
      ["IResourceComponentsProps", "@refinedev/core"],
      ["useTable", "@refinedev/react-table"],
      ["ColumnDef", "@tanstack/react-table"],
      ["flexRender", "@tanstack/react-table"],
      ["List", "@refinedev/chakra-ui"],
      ["TableContainer", "@chakra-ui/react"],
      ["Table", "@chakra-ui/react"],
      ["Thead", "@chakra-ui/react"],
      ["Tr", "@chakra-ui/react"],
      ["Th", "@chakra-ui/react"],
      ["Tbody", "@chakra-ui/react"],
      ["Td", "@chakra-ui/react"],
      ["HStack", "@chakra-ui/react"],
      ["Button", "@chakra-ui/react"],
      ["IconButton", "@chakra-ui/react"],
      ["usePagination", "@refinedev/chakra-ui"],
      ["Box", "@chakra-ui/react"],
      ["IconChevronRight", "@tabler/icons"],
      ["IconChevronLeft", "@tabler/icons"]
    ];
    if (i18n) {
      imports.push(["useTranslate", "@refinedev/core"]);
    }
    const relationFields = fields.filter(
      (field) => (field == null ? void 0 : field.relation) && !(field == null ? void 0 : field.fieldable) && (field == null ? void 0 : field.resource)
    );
    const relationHooksCode = relationFields.filter(Boolean).map((field) => {
      var _a, _b;
      if ((field == null ? void 0 : field.relation) && !field.fieldable && field.resource) {
        imports.push(["GetManyResponse", "@refinedev/core"]);
        imports.push(["useMany", "@refinedev/core"]);
        let idsString = "";
        if (field.multiple) {
          idsString = `[].concat(...(${recordName}?.map((item) => ${accessor(
            "item",
            field.key,
            field.accessor,
            false
          )}) ?? []))`;
        } else {
          idsString = `${recordName}?.map((item) => ${accessor(
            "item",
            field.key,
            field.accessor,
            false
          )}) ?? []`;
        }
        return `
                const { data: ${getVariableName(field.key, "Data")} } =
                useMany({
                    resource: "${field.resource.name}",
                    ids: ${idsString},
                    queryOptions: {
                        enabled: !!${recordName},
                    },
                    ${getMetaProps(
          ((_a = field == null ? void 0 : field.resource) == null ? void 0 : _a.identifier) ?? ((_b = field == null ? void 0 : field.resource) == null ? void 0 : _b.name),
          meta,
          "getMany"
        )}
                });
                `;
      }
      return void 0;
    }).filter(Boolean);
    const relationVariableNames = relationFields == null ? void 0 : relationFields.map((field) => {
      if (field && field.resource) {
        return getVariableName(field.key, "Data");
      }
      return void 0;
    }).filter(Boolean);
    const renderRelationFields = /* @__PURE__ */ __name((field) => {
      var _a;
      if (field.relation && field.resource) {
        const variableName = `${getVariableName(field.key, "Data")}?.data`;
        if (Array.isArray(field.accessor)) {
          return void 0;
        }
        const id = `id: "${field.key}"`;
        const header = `header: ${translatePrettyString({
          resource,
          field,
          i18n,
          noBraces: true
        })}`;
        const accessorKey = getAccessorKey2(field);
        let cell = "";
        if (field.multiple) {
          imports.push(["TagField", "@refinedev/chakra-ui"]);
          let val = "item";
          if (field == null ? void 0 : field.relationInfer) {
            val = accessor(
              "item",
              void 0,
              field.relationInfer.accessor
            );
          }
          cell = `cell: function render({ getValue, table }) {
                    const meta = table.options.meta as {
                        ${getVariableName(field.key, "Data")}: GetManyResponse;
                    };

                    const ${getVariableName(
            field.key,
            ""
          )} = getValue<any[]>()?.map((item) => {
                        return meta.${getVariableName(
            field.key,
            "Data"
          )}?.data?.find(
                            (resourceItems) => resourceItems.id === ${accessor(
            "item",
            void 0,
            field.accessor
          )}
                        );
                    })


                    return (
                        <HStack>
                            {${getVariableName(
            field.key,
            ""
          )}?.map((item, index) => (
                                <TagField key={index} value={${val}} />
                            ))}
                        </HStack>
                    )
                }
            `;
        } else {
          if (field == null ? void 0 : field.relationInfer) {
            cell = `cell: function render({ getValue, table }) {
                        const meta = table.options.meta as {
                            ${getVariableName(
              field.key,
              "Data"
            )}: GetManyResponse;
                        };

                        const ${getVariableName(
              field.key,
              ""
            )} = meta.${variableName}?.find(
                            (item) => item.id == getValue<any>(),
                        );

                        return ${accessor(
              getVariableName(field.key),
              void 0,
              (_a = field == null ? void 0 : field.relationInfer) == null ? void 0 : _a.accessor
            )} ?? "Loading...";
                    },`;
          } else {
            cell = "";
          }
        }
        return `
                {
                    ${id},
                    ${header},
                    ${accessorKey},
                    ${cell}
                }
            `;
      }
      return void 0;
    }, "renderRelationFields");
    const imageFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "image") {
        imports.push(["Image", "@chakra-ui/react"]);
        const id = `id: "${field.key}"`;
        const accessorKey = getAccessorKey2(field);
        const header = `header: ${translatePrettyString({
          resource,
          field,
          i18n,
          noBraces: true
        })}`;
        let cell = jsx`
                cell: function render({ getValue }) {
                    ${(field == null ? void 0 : field.accessor) ? "try {" : ""}
                        return <Image sx={{ maxWidth: "100px" }} src={${accessor(
          "getValue<any>()",
          void 0,
          Array.isArray(field.accessor) ? field.accessor : void 0,
          " + "
        )}} />
                    ${(field == null ? void 0 : field.accessor) ? " } catch (error) { return null; }" : ""}
                }
            `;
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor, " + ");
          cell = `
                    cell: function render({ getValue }) {
                        ${(field == null ? void 0 : field.accessor) ? "try {" : ""}
                            return (
                                <HStack>
                                    {getValue<any[]>()?.map((item, index) => (
                                        <Image src={${val}} key={index} sx={{ height: "50px", maxWidth: "100px" }} />
                                    ))}
                                </HStack>
                            )
                        ${(field == null ? void 0 : field.accessor) ? " } catch (error) { return null; }" : ""}
                    }
                `;
        }
        return `
                {
                    ${id},
                    ${accessorKey},
                    ${header},
                    ${cell}
                }
            `;
      }
      return void 0;
    }, "imageFields");
    const emailFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "email") {
        imports.push(["EmailField", "@refinedev/chakra-ui"]);
        const id = `id: "${field.key}"`;
        const accessorKey = getAccessorKey2(field);
        const header = `header: ${translatePrettyString({
          resource,
          field,
          i18n,
          noBraces: true
        })}`;
        let cell = jsx`
                cell: function render({ getValue }) {
                    return <EmailField value={${accessor(
          "getValue<any>()",
          void 0,
          Array.isArray(field.accessor) ? field.accessor : void 0,
          ' + " " + '
        )}} />
                }
            `;
        if (field.multiple) {
          imports.push(["TagField", "@refinedev/chakra-ui"]);
          const val = accessor("item", void 0, field.accessor, " + ");
          cell = `
                    cell: function render({ getValue }) {
                        return (
                            <HStack>
                                {getValue<any[]>()?.map((item, index) => (
                                    <TagField value={${val}} key={index} />
                                ))}
                            </HStack>
                        )
                    }
                `;
        }
        return `
                {
                    ${id},
                    ${accessorKey},
                    ${header},
                    ${cell}
                }
            `;
      }
      return void 0;
    }, "emailFields");
    const urlFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "url") {
        imports.push(["UrlField", "@refinedev/chakra-ui"]);
        const id = `id: "${field.key}"`;
        const accessorKey = getAccessorKey2(field);
        const header = `header: ${translatePrettyString({
          resource,
          field,
          i18n,
          noBraces: true
        })}`;
        let cell = jsx`
                cell: function render({ getValue }) {
                    return <UrlField value={${accessor(
          "getValue<any>()",
          void 0,
          Array.isArray(field.accessor) ? field.accessor : void 0,
          " + "
        )}} />
                }
            `;
        if (field.multiple) {
          imports.push(["TagField", "@refinedev/chakra-ui"]);
          const val = accessor("item", void 0, field.accessor, " + ");
          cell = `
                    cell: function render({ getValue }) {
                        return (
                            <HStack>
                                {getValue<any[]>()?.map((item, index) => (
                                    <TagField value={${val}} key={index} />
                                ))}
                            </HStack>
                        )
                    }
                `;
        }
        return `
                {
                    ${id},
                    ${accessorKey},
                    ${header},
                    ${cell}
                }
            `;
      }
      return void 0;
    }, "urlFields");
    const booleanFields = /* @__PURE__ */ __name((field) => {
      if ((field == null ? void 0 : field.type) === "boolean") {
        imports.push(["BooleanField", "@refinedev/chakra-ui"]);
        const id = `id: "${field.key}"`;
        const accessorKey = getAccessorKey2(field);
        const header = `header: ${translatePrettyString({
          resource,
          field,
          i18n,
          noBraces: true
        })}`;
        let cell = jsx`
                cell: function render({ getValue }) {
                    return <BooleanField value={${accessor(
          "getValue<any>()",
          void 0,
          Array.isArray(field.accessor) ? field.accessor : void 0,
          " + "
        )}} />
                }
            `;
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor, " + ");
          cell = `
                    cell: function render({ getValue }) {
                        return (
                            <HStack>
                                {getValue<any[]>()?.map((item, index) => (
                                    <BooleanField value={${val}} key={index} />
                                ))}
                            </HStack>
                        )
                    }
                `;
        }
        return `
                {
                    ${id},
                    ${accessorKey},
                    ${header},
                    ${cell}
                }
            `;
      }
      return void 0;
    }, "booleanFields");
    const dateFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "date") {
        imports.push(["DateField", "@refinedev/chakra-ui"]);
        const id = `id: "${field.key}"`;
        const accessorKey = getAccessorKey2(field);
        const header = `header: ${translatePrettyString({
          resource,
          field,
          i18n,
          noBraces: true
        })}`;
        let cell = jsx`
                cell: function render({ getValue }) {
                    return <DateField value={${accessor(
          "getValue<any>()",
          void 0,
          Array.isArray(field.accessor) ? field.accessor : void 0,
          ' + " " + '
        )}} />
                }
            `;
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor, " + ");
          cell = `
                    cell: function render({ getValue }) {
                        return (
                            <HStack>
                                {getValue<any[]>()?.map((item, index) => (
                                    <DateField value={${val}} key={index} />
                                ))}
                            </HStack>
                        )
                    }
                `;
        }
        return `
                {
                    ${id},
                    ${accessorKey},
                    ${header},
                    ${cell}
                }
            `;
      }
      return void 0;
    }, "dateFields");
    const richtextFields = /* @__PURE__ */ __name((field) => {
      if ((field == null ? void 0 : field.type) === "richtext") {
        imports.push(["MarkdownField", "@refinedev/chakra-ui"]);
        const id = `id: "${field.key}"`;
        const accessorKey = getAccessorKey2(field);
        const header = `header: ${translatePrettyString({
          resource,
          field,
          i18n,
          noBraces: true
        })}`;
        let cell = jsx`
                cell: function render({ getValue }) {
                    return <MarkdownField value={(${accessor(
          "getValue<string>()",
          void 0,
          Array.isArray(field.accessor) ? field.accessor : void 0
        )})?.slice(0, 80) + "..." } />
                }
            `;
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor, " + ");
          cell = `
                    cell: function render({ getValue }) {
                        return (
                            <HStack>
                                {getValue<string[]>()?.map((item, index) => (
                                    <MarkdownField value={${val}} key={index} />
                                ))}
                            </HStack>
                        )
                    }
                `;
        }
        return `
                {
                    ${id},
                    ${accessorKey},
                    ${header},
                    ${cell}
                }
            `;
      }
      return void 0;
    }, "richtextFields");
    const basicFields = /* @__PURE__ */ __name((field) => {
      if (field && (field.type === "text" || field.type === "number")) {
        const id = `id: "${field.key}"`;
        const accessorKey = getAccessorKey2(field);
        const header = `header: ${translatePrettyString({
          resource,
          field,
          i18n,
          noBraces: true
        })}`;
        let cell = "";
        if (field.multiple) {
          imports.push(["TagField", "@refinedev/chakra-ui"]);
          const val = accessor(
            "item",
            void 0,
            field.accessor,
            ' + " " + '
          );
          cell = `
                    cell: function render({ getValue }) {
                        return (
                            <HStack>
                                {getValue<any[]>()?.map((item, index) => (
                                    <TagField value={${val}} key={index} />
                                ))}
                            </HStack>
                        )
                    }
                `;
        }
        if (!field.multiple && Array.isArray(field.accessor)) {
          cell = `
                    cell: function render({ getValue }) {
                        return (
                            <>{${accessor(
            "getValue<any>()",
            field.key,
            field.accessor
          )}}</>
                        );
                    }
                `;
        }
        return `
                {
                    ${id},
                    ${accessorKey},
                    ${header},
                    ${cell}
                }
            `;
      }
      return void 0;
    }, "basicFields");
    const {
      canEdit,
      canShow,
      canDelete: canDeleteProp,
      meta: resourceMeta
    } = resource ?? {};
    const canDelete = canDeleteProp || (resourceMeta == null ? void 0 : resourceMeta.canDelete);
    if (canEdit) {
      imports.push(["EditButton", "@refinedev/chakra-ui"]);
    }
    if (canShow) {
      imports.push(["ShowButton", "@refinedev/chakra-ui"]);
    }
    if (canDelete) {
      imports.push(["DeleteButton", "@refinedev/chakra-ui"]);
    }
    const actionButtons = canEdit || canShow || canDelete ? jsx`
    {
        id: "actions",
        accessorKey: "id",
        header: "Actions",
        cell: function render({ getValue }) {
            return (
                <HStack>
                ${canShow ? jsx`
                    <ShowButton
                        hideText
                        recordItemId={getValue() as string}
                    />
                    ` : ""}
                    ${canEdit ? jsx`
                    <EditButton
                        hideText
                        recordItemId={getValue() as string}
                    />
                    ` : ""}
                    ${canDelete ? jsx`
                    <DeleteButton
                        hideText
                        recordItemId={getValue() as string}
                    />
                    ` : ""}
                </HStack>
            );
        },
    },
        ` : "";
    const renderedFields = fields.map((field) => {
      switch (field == null ? void 0 : field.type) {
        case "text":
        case "number":
          return basicFields(field);
        case "richtext":
          return richtextFields(field);
        case "email":
          return emailFields(field);
        case "image":
          return imageFields(field);
        case "date":
          return dateFields(field);
        case "boolean":
          return booleanFields(field);
        case "url":
          return urlFields(field);
        case "relation":
          return renderRelationFields(field);
        default:
          return void 0;
      }
    });
    noOp(imports);
    const useTranslateHook = i18n && `const translate = useTranslate();`;
    return jsx`
    import React from "react";
    ${printImports(imports)}
    
    export const ${COMPONENT_NAME}: React.FC<IResourceComponentsProps> = () => {
        ${useTranslateHook}
        const columns = React.useMemo<ColumnDef<any>[]>(() => [
            ${[...renderedFields, actionButtons].filter(Boolean).join(",")}
        ], [${i18n ? "translate" : ""}]);

        const {
            getHeaderGroups,
            getRowModel,
            setOptions,
            refineCore: {
                setCurrent,
                pageCount,
                current,
                tableQueryResult: { data: tableData },
            },
        } = useTable({
            columns,
            ${isCustomPage ? `
            refineCoreProps: {
                resource: "${resource.name}",
                ${getMetaProps(
      (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
      meta,
      "getList"
    )}
            }
            ` : getMetaProps(
      (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
      meta,
      "getList"
    ) ? `refineCoreProps: { ${getMetaProps(
      (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
      meta,
      "getList"
    )} },` : ""}
            
        });

        ${relationHooksCode}

        setOptions((prev) => ({
            ...prev,
            meta: {
                ...prev.meta,
                ${relationVariableNames.join(", ")}
            },
        }));

        return (
            <List>
                <TableContainer whiteSpace="pre-line">
                    <Table variant="simple">
                        <Thead>
                            {getHeaderGroups().map((headerGroup) => (
                                <Tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <Th key={header.id}>
                                            {!header.isPlaceholder && (
                                                flexRender(
                                                    header.column.columnDef
                                                        .header,
                                                    header.getContext(),
                                                )
                                            )}
                                        </Th>
                                    ))}
                                </Tr>
                            ))}
                        </Thead>
                        <Tbody>
                            {getRowModel().rows.map((row) => (
                                <Tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <Td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </Td>
                                    ))}
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
                <Pagination
                    current={current}
                    pageCount={pageCount}
                    setCurrent={setCurrent}
                />
            </List>   
        );
    };

    type PaginationProps = {
        current: number;
        pageCount: number;
        setCurrent: (page: number) => void;
    };

    const Pagination: React.FC<PaginationProps> = ({
        current,
        pageCount,
        setCurrent,
    }) => {
        const pagination = usePagination({
            current,
            pageCount,
        });
    
        return (
            <Box display="flex" justifyContent="flex-end">
                <HStack my="3" spacing="1">
                    {pagination?.prev && (
                        <IconButton
                            aria-label="previous page"
                            onClick={() => setCurrent(current - 1)}
                            disabled={!pagination?.prev}
                            variant="outline"
                        >
                            <IconChevronLeft size="18" />
                        </IconButton>
                    )}
    
                    {pagination?.items.map((page) => {
                        if (typeof page === "string")
                            return <span key={page}>...</span>;
    
                        return (
                            <Button
                                key={page}
                                onClick={() => setCurrent(page)}
                                variant={page === current ? "solid" : "outline"}
                            >
                                {page}
                            </Button>
                        );
                    })}
                    {pagination?.next && (
                        <IconButton
                            aria-label="next page"
                            onClick={() => setCurrent(current + 1)}
                            variant="outline"
                        >
                            <IconChevronRight size="18" />
                        </IconButton>
                    )}
                </HStack>
            </Box>
        );
    };
    `;
  }, "renderer");
  var ListInferencer = createInferencer({
    type: "list",
    additionalScope: [
      [
        "@refinedev/chakra-ui",
        "RefineChakraUI",
        {
          List: import_chakra_ui2.List,
          usePagination: import_chakra_ui2.usePagination,
          TagField: import_chakra_ui2.TagField,
          EmailField: import_chakra_ui2.EmailField,
          UrlField: import_chakra_ui2.UrlField,
          BooleanField: import_chakra_ui2.BooleanField,
          DateField: import_chakra_ui2.DateField,
          MarkdownField: import_chakra_ui2.MarkdownField,
          EditButton: import_chakra_ui2.EditButton,
          ShowButton: import_chakra_ui2.ShowButton,
          DeleteButton: import_chakra_ui2.DeleteButton
        }
      ],
      ["@refinedev/react-table", "RefineReactTable", { useTable: import_react_table.useTable }],
      ["@tabler/icons", "TablerIcons", { IconChevronRight: import_icons.IconChevronRight, IconChevronLeft: import_icons.IconChevronLeft }],
      [
        "@chakra-ui/react",
        "ChakraUI",
        {
          TableContainer: import_react11.TableContainer,
          Table: import_react11.Table,
          Thead: import_react11.Thead,
          Tr: import_react11.Tr,
          Th: import_react11.Th,
          Tbody: import_react11.Tbody,
          Td: import_react11.Td,
          HStack: import_react11.HStack,
          Button: import_react11.Button,
          IconButton: import_react11.IconButton,
          Box: import_react11.Box,
          Image: import_react11.Image
        }
      ],
      ["@tanstack/react-table", "TanstackReactTable", { flexRender: import_react_table2.flexRender }]
    ],
    codeViewerComponent: SharedCodeViewer,
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    renderer: renderer2
  });

  // src/inferencers/chakra-ui/create.tsx
  var import_chakra_ui3 = __toESM(require_dist6());
  var import_react12 = __require("@chakra-ui/react");
  var import_react_hook_form = __toESM(require_dist5());
  var renderer3 = /* @__PURE__ */ __name(({
    resource,
    fields,
    meta,
    isCustomPage,
    i18n
  }) => {
    const COMPONENT_NAME = componentName(
      resource.label ?? resource.name,
      "create"
    );
    const imports = [
      ["IResourceComponentsProps", "@refinedev/core"],
      ["Create", "@refinedev/chakra-ui"],
      ["FormControl", "@chakra-ui/react"],
      ["FormLabel", "@chakra-ui/react"],
      ["FormErrorMessage", "@chakra-ui/react"],
      ["useForm", "@refinedev/react-hook-form"]
    ];
    if (i18n) {
      imports.push(["useTranslate", "@refinedev/core"]);
    }
    const relationFields = fields.filter(
      (field) => (field == null ? void 0 : field.relation) && !(field == null ? void 0 : field.fieldable) && (field == null ? void 0 : field.resource)
    );
    const relationHooksCode = relationFields.filter(Boolean).map((field) => {
      var _a, _b;
      if ((field == null ? void 0 : field.relation) && !field.fieldable && field.resource) {
        imports.push(["useSelect", "@refinedev/core"]);
        return `
                const { options: ${getVariableName(field.key, "Options")} } =
                useSelect({
                    resource: "${field.resource.name}",
                    ${getOptionLabel(field)}
                    ${getMetaProps(
          ((_a = field == null ? void 0 : field.resource) == null ? void 0 : _a.identifier) ?? ((_b = field == null ? void 0 : field.resource) == null ? void 0 : _b.name),
          meta,
          "getList"
        )}
                });
            `;
      }
      return void 0;
    }).filter(Boolean);
    const renderRelationFields = /* @__PURE__ */ __name((field) => {
      if (field.relation && field.resource) {
        imports.push(["useSelect", "@refinedev/core"]);
        imports.push(["Select", "@chakra-ui/react"]);
        const variableName = getVariableName(field.key, "Options");
        return jsx`
            <FormControl mb="3" isInvalid={!!errors?.${dotAccessor(
          field.key,
          void 0
        )}}>
                <FormLabel>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</FormLabel>
                <Select
                    placeholder="Select ${toSingular(field.resource.name)}"
                    {...register("${dotAccessor(
          field.key,
          void 0,
          field.accessor
        )}", {
                        required: "This field is required",
                    })}
                >
                    {${variableName}?.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Select>
                <FormErrorMessage>
                    {${accessor(
          "(errors as any)",
          field.key,
          field.accessor,
          false
        )}?.message as string}
                </FormErrorMessage>
            </FormControl>
            `;
      }
      return void 0;
    }, "renderRelationFields");
    const basicInputFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "text" || field.type === "url" || field.type === "email" || field.type === "number" || field.type === "date" || field.type === "richtext") {
        if (isIDKey(field.key)) {
          return void 0;
        }
        imports.push(["Input", "@chakra-ui/react"]);
        if (field.multiple) {
          return void 0;
        }
        return jsx`
                <FormControl mb="3" isInvalid={!!${accessor(
          "(errors as any)",
          field.key,
          field.accessor,
          false
        )}}>
                    <FormLabel>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</FormLabel>
                    <Input
                        ${field.type !== "date" && field.type !== "richtext" ? `type="${field.type}"` : ""}
                        {...register("${dotAccessor(
          field.key,
          void 0,
          field.accessor
        )}", {
                            required: "This field is required",
                            ${field.type === "number" ? "valueAsNumber: true," : ""}
                        })}
                    />
                    <FormErrorMessage>
                        {${accessor(
          "(errors as any)",
          field.key,
          field.accessor,
          false
        )}?.message as string}
                    </FormErrorMessage>
                </FormControl>
            `;
      }
      return void 0;
    }, "basicInputFields");
    const booleanFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "boolean") {
        imports.push(["Checkbox", "@chakra-ui/react"]);
        if (field.multiple) {
          return void 0;
        }
        return jsx`
                <FormControl mb="3" isInvalid={!!${accessor(
          "errors",
          field.key,
          field.accessor,
          false
        )}}>
                    <FormLabel>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</FormLabel>
                    <Checkbox
                        {...register("${dotAccessor(
          field.key,
          void 0,
          field.accessor
        )}", {
                            required: "This field is required",
                        })}
                    />
                    <FormErrorMessage>
                        {${accessor(
          "errors",
          field.key,
          field.accessor,
          false
        )}?.message as string}
                    </FormErrorMessage>
                </FormControl>
               
            `;
      }
      return void 0;
    }, "booleanFields");
    const dateFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "date") {
        const basicRender = basicInputFields(field);
        return `
                {/* 
                    DatePicker component is not included in "@refinedev/chakra-ui" package.
                    To use a <DatePicker> component, you can examine the following links:
                    
                    - https://github.com/aboveyunhai/chakra-dayzed-datepicker
                    - https://github.com/wojtekmaj/react-date-picker
                */}
                ${basicRender ?? ""}
                `;
      }
      return void 0;
    }, "dateFields");
    const renderedFields = fields.map((field) => {
      switch (field == null ? void 0 : field.type) {
        case "text":
        case "number":
        case "email":
        case "url":
        case "richtext":
          return basicInputFields(field);
        case "date":
          return dateFields(field);
        case "boolean":
          return booleanFields(field);
        case "relation":
          return renderRelationFields(field);
        default:
          return void 0;
      }
    });
    noOp(imports);
    const useTranslateHook = i18n && `const translate = useTranslate();`;
    return jsx`
    ${printImports(imports)}
    
    export const ${COMPONENT_NAME}: React.FC<IResourceComponentsProps> = () => {
        ${useTranslateHook}
        const {
            refineCore: { formLoading },
            saveButtonProps,
            register,
            formState: { errors },
        } = useForm(
            ${isCustomPage ? `
            { 
                refineCoreProps: {
                    resource: "${resource.name}",
                    action: "create",
                    ${getMetaProps(
      resource.identifier ?? resource.name,
      meta,
      "getOne"
    )}
                }
            }` : getMetaProps(
      resource.identifier ?? resource.name,
      meta,
      "getOne"
    ) ? `{
                        refineCoreProps: { ${getMetaProps(
      resource.identifier ?? resource.name,
      meta,
      "getOne"
    )} }
                        }` : ""}
        );
    
        ${relationHooksCode}

        return (
            <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
                ${renderedFields.join("")}
            </Create>
        );
    };
    `;
  }, "renderer");
  var CreateInferencer = createInferencer({
    type: "create",
    additionalScope: [
      ["@refinedev/chakra-ui", "RefineChakraUI", { Create: import_chakra_ui3.Create }],
      ["@refinedev/react-hook-form", "RefineReactHookForm", { useForm: import_react_hook_form.useForm }],
      [
        "@chakra-ui/react",
        "ChakraUI",
        {
          FormControl: import_react12.FormControl,
          FormLabel: import_react12.FormLabel,
          FormErrorMessage: import_react12.FormErrorMessage,
          Select: import_react12.Select,
          Input: import_react12.Input,
          Checkbox: import_react12.Checkbox
        }
      ]
    ],
    codeViewerComponent: SharedCodeViewer,
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    renderer: renderer3
  });

  // src/inferencers/chakra-ui/edit.tsx
  var import_chakra_ui4 = __toESM(require_dist6());
  var import_react13 = __require("@chakra-ui/react");
  var import_react_hook_form2 = __toESM(require_dist5());
  var renderer4 = /* @__PURE__ */ __name(({
    resource,
    fields,
    meta,
    isCustomPage,
    id,
    i18n
  }) => {
    const COMPONENT_NAME = componentName(
      resource.label ?? resource.name,
      "edit"
    );
    const recordName = getVariableName(resource.label ?? resource.name, "Data");
    const imports = [
      ["React", "react", true],
      ["IResourceComponentsProps", "@refinedev/core"],
      ["Edit", "@refinedev/chakra-ui"],
      ["FormControl", "@chakra-ui/react"],
      ["FormLabel", "@chakra-ui/react"],
      ["FormErrorMessage", "@chakra-ui/react"],
      ["useForm", "@refinedev/react-hook-form"]
    ];
    if (i18n) {
      imports.push(["useTranslate", "@refinedev/core"]);
    }
    const relationFields = fields.filter(
      (field) => (field == null ? void 0 : field.relation) && !(field == null ? void 0 : field.fieldable) && (field == null ? void 0 : field.resource)
    );
    const relationHooksCode = relationFields.filter(Boolean).map((field) => {
      var _a, _b;
      if ((field == null ? void 0 : field.relation) && !field.fieldable && field.resource) {
        imports.push(["useSelect", "@refinedev/core"]);
        let val = accessor(
          recordName,
          field.key,
          field.accessor,
          false
        );
        if (field.multiple && field.accessor) {
          val = `${accessor(
            recordName,
            field.key
          )}?.map((item: any) => ${accessor(
            "item",
            void 0,
            field.accessor
          )})`;
        }
        return `
                const { options: ${getVariableName(field.key, "Options")} } =
                useSelect({
                    resource: "${field.resource.name}",
                    defaultValue: ${val},
                    ${getOptionLabel(field)}
                    ${getMetaProps(
          ((_a = field == null ? void 0 : field.resource) == null ? void 0 : _a.identifier) ?? ((_b = field == null ? void 0 : field.resource) == null ? void 0 : _b.name),
          meta,
          "getList"
        )}
                });

                React.useEffect(() => {
                    setValue("${dotAccessor(
          field.key,
          void 0,
          field.accessor
        )}", ${recordName}?.${field.key}?.id);
                }, [${getVariableName(field.key, "Options")}]);
            `;
      }
      return void 0;
    }).filter(Boolean);
    const renderRelationFields = /* @__PURE__ */ __name((field) => {
      if (field.relation && field.resource) {
        imports.push(["useSelect", "@refinedev/core"]);
        imports.push(["Select", "@chakra-ui/react"]);
        const variableName = getVariableName(field.key, "Options");
        return jsx`
            <FormControl mb="3" isInvalid={!!errors?.${dotAccessor(
          field.key,
          void 0
        )}}>
                <FormLabel>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</FormLabel>
                <Select
                    placeholder="Select ${toSingular(field.resource.name)}"
                    {...register("${dotAccessor(
          field.key,
          void 0,
          field.accessor
        )}", {
                        required: "This field is required",
                    })}
                >
                    {${variableName}?.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Select>
                <FormErrorMessage>
                    {${accessor(
          "(errors as any)",
          field.key,
          field.accessor,
          false
        )}?.message as string}
                </FormErrorMessage>
            </FormControl>
            `;
      }
      return void 0;
    }, "renderRelationFields");
    const basicInputFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "text" || field.type === "url" || field.type === "email" || field.type === "number" || field.type === "date" || field.type === "richtext") {
        imports.push(["Input", "@chakra-ui/react"]);
        if (field.multiple) {
          const val = dotAccessor(field.key, "${index}", field.accessor);
          const valError = accessor(
            accessor("(errors as any)", field.key, void 0, false) + "?.[index]",
            void 0,
            field.accessor
          );
          return `
                    <>
                        {${accessor(
            recordName,
            field.key
          )}?.map((item: any, index: number) => (
                            <FormControl key={index} mb="3" isInvalid={!!${valError}}>
                                <FormLabel>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</FormLabel>
                                <Input
                                    {...register(\`${val}\`, {
                                        required: "This field is required",
                                        ${field.type === "number" ? "valueAsNumber: true," : ""}
                                    })}
                                />
                                <FormErrorMessage>
                                    {${accessor(valError, "message")} as string}
                                </FormErrorMessage>
                            </FormControl>
                        ))}
                    </>
                `;
        }
        return jsx`
                <FormControl mb="3" isInvalid={!!${accessor(
          "(errors as any)",
          field.key,
          field.accessor,
          false
        )}}>
                    <FormLabel>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</FormLabel>
                    <Input
                        ${isIDKey(field.key) ? "disabled" : ""}
                        ${field.type !== "date" && field.type !== "richtext" ? `type="${field.type}"` : ""}
                        {...register("${dotAccessor(
          field.key,
          void 0,
          field.accessor
        )}", {
                            required: "This field is required",
                            ${field.type === "number" ? "valueAsNumber: true," : ""}
                        })}
                    />
                    <FormErrorMessage>
                        {${accessor(
          "(errors as any)",
          field.key,
          field.accessor,
          false
        )}?.message as string}
                    </FormErrorMessage>
                </FormControl>
            `;
      }
      return void 0;
    }, "basicInputFields");
    const booleanFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "boolean") {
        imports.push(["Checkbox", "@chakra-ui/react"]);
        if (field.multiple) {
          const val = dotAccessor(field.key, void 0, field.accessor);
          const errorVal = accessor("(errors as any)", field.key, void 0, false) + "?.[index]";
          return `
                    <>
                        {${accessor(
            recordName,
            field.key
          )}?.map((item: any, index: number) => (
                            <FormControl key={index} mb="3" isInvalid={!!${errorVal}}>
                                <FormLabel>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</FormLabel>
                                <Checkbox
                                    {...register(\`${val}.\${index}\`, {
                                        required: "This field is required",
                                    })}
                                />
                                <FormErrorMessage>
                                    {${errorVal}?.message as string}
                                </FormErrorMessage>
                            </FormControl>
                        ))}
                    </>
                `;
        }
        return jsx`
                <FormControl mb="3" isInvalid={!!${accessor(
          "errors",
          field.key,
          field.accessor,
          false
        )}}>
                    <FormLabel>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</FormLabel>
                    <Checkbox
                        {...register("${dotAccessor(
          field.key,
          void 0,
          field.accessor
        )}", {
                            required: "This field is required",
                        })}
                    />
                    <FormErrorMessage>
                        {${accessor(
          "errors",
          field.key,
          field.accessor,
          false
        )}?.message as string}
                    </FormErrorMessage>
                </FormControl>
               
            `;
      }
      return void 0;
    }, "booleanFields");
    const dateFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "date") {
        const basicRender = basicInputFields(field);
        return `
                {/* 
                    DatePicker component is not included in "@refinedev/chakra-ui" package.
                    To use a <DatePicker> component, you can examine the following links:
                    
                    - https://github.com/aboveyunhai/chakra-dayzed-datepicker
                    - https://github.com/wojtekmaj/react-date-picker
                */}
                ${basicRender}
                `;
      }
      return void 0;
    }, "dateFields");
    const renderedFields = fields.map((field) => {
      switch (field == null ? void 0 : field.type) {
        case "text":
        case "number":
        case "email":
        case "url":
        case "richtext":
          return basicInputFields(field);
        case "date":
          return dateFields(field);
        case "boolean":
          return booleanFields(field);
        case "relation":
          return renderRelationFields(field);
        default:
          return void 0;
      }
    });
    noOp(imports);
    const useTranslateHook = i18n && `const translate = useTranslate();`;
    return jsx`
    ${printImports(imports)}
    
    export const ${COMPONENT_NAME}: React.FC<IResourceComponentsProps> = () => {
        ${useTranslateHook}
        const {
            refineCore: { formLoading, queryResult },
            saveButtonProps,
            register,
            setValue,
            formState: { errors },
        } = useForm(
            ${isCustomPage ? `
            { 
                refineCoreProps: {
                    resource: "${resource.name}",
                    id: ${idQuoteWrapper(id)},
                    action: "edit",
                    ${getMetaProps(
      (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
      meta,
      "getOne"
    )}
                }
            }` : getMetaProps(
      (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
      meta,
      "getOne"
    ) ? `{ refineCoreProps: { ${getMetaProps(
      (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
      meta,
      "getOne"
    )} }
                        }` : ""}
        );
    
        const ${recordName} = queryResult?.data?.data;
    
        ${relationHooksCode}

        return (
            <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
                ${renderedFields.join("")}
            </Edit>
        );
    };
    `;
  }, "renderer");
  var EditInferencer = createInferencer({
    type: "edit",
    additionalScope: [
      ["@refinedev/chakra-ui", "RefineChakraUI", { Edit: import_chakra_ui4.Edit }],
      ["@refinedev/react-hook-form", "RefineReactHookForm", { useForm: import_react_hook_form2.useForm }],
      [
        "@chakra-ui/react",
        "ChakraUI",
        {
          FormControl: import_react13.FormControl,
          FormLabel: import_react13.FormLabel,
          FormErrorMessage: import_react13.FormErrorMessage,
          Select: import_react13.Select,
          Input: import_react13.Input,
          Checkbox: import_react13.Checkbox
        }
      ]
    ],
    codeViewerComponent: SharedCodeViewer,
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    renderer: renderer4
  });

  // src/inferencers/chakra-ui/index.tsx
  var ChakraUIInferencer = /* @__PURE__ */ __name(({
    action: actionFromProps,
    id: idFromProps,
    ...props
  }) => {
    const { action, id } = (0, import_core5.useResource)();
    switch (actionFromProps ?? action) {
      case "show":
        return /* @__PURE__ */ import_react14.default.createElement(ShowInferencer, { ...props, id: idFromProps ?? id });
      case "create":
        return /* @__PURE__ */ import_react14.default.createElement(CreateInferencer, { ...props, id: idFromProps ?? id });
      case "edit":
        return /* @__PURE__ */ import_react14.default.createElement(EditInferencer, { ...props, id: idFromProps ?? id });
      default:
        return /* @__PURE__ */ import_react14.default.createElement(ListInferencer, { ...props, id: idFromProps ?? id });
    }
  }, "ChakraUIInferencer");
})();
//# sourceMappingURL=chakra-ui.js.map