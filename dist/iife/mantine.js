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
        useSelect: () => useSelect3,
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
      var import_react9 = __toESM2(__require("react"));
      var DefaultLayout = /* @__PURE__ */ __name2(({ children }) => {
        return /* @__PURE__ */ import_react9.default.createElement("div", null, children);
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
        Title: Title2,
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
              Title: Title2,
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
        const { Title: Title2 } = (0, import_react92.useContext)(RefineContext);
        return Title2;
      }, "useTitle");
      var import_react10 = __require("react");
      var useRefineContext = /* @__PURE__ */ __name2(() => {
        const {
          Footer,
          Header,
          Layout,
          OffLayoutArea,
          Sider,
          Title: Title2,
          hasDashboard,
          mutationMode,
          syncWithLocation,
          undoableTimeout,
          warnWhenUnsavedChanges,
          DashboardPage,
          LoginPage: LoginPage3,
          catchAll,
          options
        } = (0, import_react10.useContext)(RefineContext);
        return {
          Footer,
          Header,
          Layout,
          OffLayoutArea,
          Sider,
          Title: Title2,
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
      var import_react11 = __toESM2(__require("react"));
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
        const to = import_react11.default.useMemo(() => {
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
      var import_react12 = __toESM2(__require("react"));
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
        const params = import_react12.default.useMemo(() => {
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
      var import_react13 = __require("react");
      var useLoadingOvertime = /* @__PURE__ */ __name2(({
        isLoading,
        interval: intervalProp,
        onInterval: onIntervalProp
      }) => {
        const [elapsedTime, setElapsedTime] = (0, import_react13.useState)(
          void 0
        );
        const { options } = useRefineContext();
        const { overtime } = options;
        const interval = intervalProp ?? overtime.interval;
        const onInterval = onIntervalProp ?? (overtime == null ? void 0 : overtime.onInterval);
        (0, import_react13.useEffect)(() => {
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
        (0, import_react13.useEffect)(() => {
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
      var import_react14 = __toESM2(__require("react"));
      var import_isEqual = __toESM2(__require("lodash/isEqual"));
      var UndoableQueueContext = import_react14.default.createContext({
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
        const [notifications, notificationDispatch] = (0, import_react14.useReducer)(
          undoableQueueReducer,
          initialState
        );
        const notificationData = { notifications, notificationDispatch };
        return /* @__PURE__ */ import_react14.default.createElement(UndoableQueueContext.Provider, { value: notificationData }, children, typeof window !== "undefined" && notifications.map((notification) => /* @__PURE__ */ import_react14.default.createElement(
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
      var import_react15 = __toESM2(__require("react"));
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
      var DataContext = import_react15.default.createContext(
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
        return /* @__PURE__ */ import_react15.default.createElement(DataContext.Provider, { value: dataProviders }, children);
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
      var useSelect3 = /* @__PURE__ */ __name2((props) => {
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
        Title: Title2,
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
                              Title: Title2,
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
        const { Layout, Footer, Header, Sider, Title: Title2, OffLayoutArea } = useRefineContext();
        const LayoutToRender = LayoutFromProps ?? Layout;
        return /* @__PURE__ */ import_react76.default.createElement(
          LayoutToRender,
          {
            Sider: SiderFromProps ?? Sider,
            Header: HeaderFromProps ?? Header,
            Footer: FooterFromProps ?? Footer,
            Title: TitleFromProps ?? Title2,
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

  // ../mantine/dist/index.js
  var require_dist5 = __commonJS({
    "../mantine/dist/index.js"(exports, module) {
      var Tn = Object.create;
      var st = Object.defineProperty;
      var yn = Object.getOwnPropertyDescriptor;
      var gn = Object.getOwnPropertyNames;
      var xn = Object.getPrototypeOf;
      var hn = Object.prototype.hasOwnProperty;
      var r = /* @__PURE__ */ __name((e, o) => st(e, "name", { value: o, configurable: true }), "r");
      var bn = /* @__PURE__ */ __name((e, o) => {
        for (var t in o)
          st(e, t, { get: o[t], enumerable: true });
      }, "bn");
      var pr = /* @__PURE__ */ __name((e, o, t, s) => {
        if (o && typeof o == "object" || typeof o == "function")
          for (let n of gn(o))
            !hn.call(e, n) && n !== t && st(e, n, { get: () => o[n], enumerable: !(s = yn(o, n)) || s.enumerable });
        return e;
      }, "pr");
      var C = /* @__PURE__ */ __name((e, o, t) => (t = e != null ? Tn(xn(e)) : {}, pr(o || !e || !e.__esModule ? st(t, "default", { value: e, enumerable: true }) : t, e)), "C");
      var Bn = /* @__PURE__ */ __name((e) => pr(st({}, "__esModule", { value: true }), e), "Bn");
      var as = {};
      bn(as, { AuthPage: () => Wn, AutoSaveIndicator: () => _t, BooleanField: () => Fn, Breadcrumb: () => to, CloneButton: () => Vr, Create: () => Nn, CreateButton: () => bt, DarkTheme: () => ss, DateField: () => wn, DeleteButton: () => Vo, Edit: () => Vn, EditButton: () => Bt, EmailField: () => vn, ErrorComponent: () => zn, ExportButton: () => Ir, FileField: () => Ln, FormContext: () => qe, HamburgerMenu: () => sr, Header: () => Jt, ImportButton: () => zr, Layout: () => jn, LightTheme: () => ns, List: () => In, ListButton: () => Qo, MarkdownField: () => En, NumberField: () => An, ReadyPage: () => Mn, RefineThemes: () => is, RefineTitle: () => Lt, RefreshButton: () => zo, RingCountdown: () => gt, SaveButton: () => jo, Show: () => Dn, ShowButton: () => Ar, Sider: () => Xt, TagField: () => Cn, TextField: () => Pn, ThemedHeader: () => tr, ThemedHeaderV2: () => ir, ThemedLayout: () => Rn, ThemedLayoutContext: () => So, ThemedLayoutContextProvider: () => Nt, ThemedLayoutV2: () => es, ThemedSider: () => er, ThemedSiderV2: () => nr, ThemedTitle: () => or, ThemedTitleV2: () => We, UrlField: () => Ot, WelcomePage: () => Un, mapButtonVariantToActionIconVariant: () => ee, notificationProvider: () => rs, useForm: () => ct, useModalForm: () => Kn, useSelect: () => _n, useSiderVisible: () => Xn, useStepsForm: () => Zn, useThemedLayoutContext: () => ft });
      module.exports = Bn(as);
      var Ht = C(__require("react"));
      var yt = __require("@mantine/core");
      var gt = r(({ undoableTimeout: e }) => Ht.default.createElement(yt.RingProgress, { size: 55, thickness: 4, roundCaps: true, sections: [{ value: e * 20, color: "primary" }], label: Ht.default.createElement(yt.Text, { weight: 700, align: "center" }, e) }), "RingCountdown");
      var ur = C(__require("react"));
      var mr = __require("@mantine/core");
      var Pn = r(({ value: e, ...o }) => ur.default.createElement(mr.Text, { ...o }, e), "TextField");
      var cr = C(__require("react"));
      var fr = __require("@mantine/core");
      var Cn = r(({ value: e, ...o }) => cr.default.createElement(fr.Chip, { checked: false, ...o }, e == null ? void 0 : e.toString()), "TagField");
      var Tr = C(__require("react"));
      var yr = __require("@mantine/core");
      var vn = r(({ value: e, ...o }) => Tr.default.createElement(yr.Anchor, { href: `mailto:${e}`, ...o }, e), "EmailField");
      var it = C(__require("react"));
      var gr = __require("@mantine/core");
      var xt = __require("@tabler/icons");
      var Fn = r(({ value: e, valueLabelTrue: o = "true", valueLabelFalse: t = "false", trueIcon: s, falseIcon: n, svgIconProps: a, ...l }) => it.default.createElement(gr.Tooltip, { label: e ? o : t, ...l }, it.default.createElement("span", null, e ? s ?? it.default.createElement(xt.IconCheck, { size: 18, ...a }) : n ?? it.default.createElement(xt.IconX, { size: 18, ...a }))), "BooleanField");
      var xr = C(__require("react"));
      var ht = C(__require("dayjs"));
      var hr = C(__require("dayjs/plugin/localizedFormat"));
      var br = __require("@mantine/core");
      ht.default.extend(hr.default);
      var Sn = ht.default.locale();
      var wn = r(({ value: e, locales: o, format: t = "L", ...s }) => xr.default.createElement(br.Text, { ...s }, (0, ht.default)(e).locale(o || Sn).format(t)), "DateField");
      var Br = C(__require("react"));
      var Ln = r(({ title: e, src: o, ...t }) => Br.default.createElement(Ot, { value: o, title: e, ...t }, e ?? o), "FileField");
      var Pr = C(__require("react"));
      var Cr = __require("@mantine/core");
      var Ot = r(({ children: e, value: o, title: t, ...s }) => Pr.default.createElement(Cr.Anchor, { href: o, title: t, ...s }, e ?? o), "UrlField");
      var vr = C(__require("react"));
      var Fr = __require("@mantine/core");
      function kn() {
        return !!(typeof Intl == "object" && Intl && typeof Intl.NumberFormat == "function");
      }
      __name(kn, "kn");
      r(kn, "toLocaleStringSupportsOptions");
      var An = r(({ value: e, locale: o, options: t, ...s }) => {
        let n = Number(e);
        return vr.default.createElement(Fr.Text, { ...s }, kn() ? n.toLocaleString(o, t) : n);
      }, "NumberField");
      var Sr = C(__require("react"));
      var wr = C(__require("react-markdown"));
      var Lr = C(__require("remark-gfm"));
      var En = r(({ value: e = "", ...o }) => Sr.default.createElement(wr.default, { plugins: [Lr.default], ...o }, e), "MarkdownField");
      var ao = C(__require("react"));
      var ye = require_dist3();
      var ko = require_dist4();
      var Ao = __require("@mantine/core");
      var Qt = __require("@tabler/icons");
      var ee = r((e) => {
        switch (e) {
          case "white":
            return "default";
          default:
            return e;
        }
      }, "mapButtonVariantToActionIconVariant");
      var bt = r(({ resource: e, resourceNameOrRouteName: o, hideText: t = false, accessControl: s, svgIconProps: n, meta: a, children: l, onClick: u, ...T }) => {
        let m = (0, ao.useContext)(ye.AccessControlContext), c = (s == null ? void 0 : s.enabled) ?? m.options.buttons.enableAccessControl, h = (s == null ? void 0 : s.hideIfUnauthorized) ?? m.options.buttons.hideIfUnauthorized, A = (0, ye.useTranslate)(), L = (0, ye.useRouterType)(), E = (0, ye.useLink)(), { Link: S } = (0, ye.useRouterContext)(), f = L === "legacy" ? S : E, { createUrl: b } = (0, ye.useNavigation)(), { resource: y } = (0, ye.useResource)(e ?? o), { data: d } = (0, ye.useCan)({ resource: y == null ? void 0 : y.name, action: "create", queryOptions: { enabled: c }, params: { resource: y } }), g = r(() => d != null && d.can ? "" : d != null && d.reason ? d.reason : A("buttons.notAccessTitle", "You don't have permission to access"), "disabledTitle"), i = y ? b(y, a) : "", { variant: x, styles: k, ...v } = T;
        return c && h && !(d != null && d.can) ? null : ao.default.createElement(Ao.Anchor, { component: f, to: i, replace: false, onClick: (B) => {
          if ((d == null ? void 0 : d.can) === false) {
            B.preventDefault();
            return;
          }
          u && (B.preventDefault(), u(B));
        } }, t ? ao.default.createElement(Ao.ActionIcon, { title: g(), disabled: (d == null ? void 0 : d.can) === false, color: "primary", ...x ? { variant: ee(x) } : { variant: "filled" }, className: ko.RefineButtonClassNames.CreateButton, ...v }, ao.default.createElement(Qt.IconSquarePlus, { size: 18, ...n })) : ao.default.createElement(Ao.Button, { disabled: (d == null ? void 0 : d.can) === false, leftIcon: ao.default.createElement(Qt.IconSquarePlus, { size: 18, ...n }), title: g(), className: ko.RefineButtonClassNames.CreateButton, color: "primary", variant: "filled", ...T }, l ?? A("buttons.create", "Create")));
      }, "CreateButton");
      var lo = C(__require("react"));
      var ge = require_dist3();
      var Eo = require_dist4();
      var Io = __require("@mantine/core");
      var Wt = __require("@tabler/icons");
      var Bt = r(({ resource: e, resourceNameOrRouteName: o, recordItemId: t, hideText: s = false, accessControl: n, svgIconProps: a, meta: l, children: u, onClick: T, ...m }) => {
        let c = (0, lo.useContext)(ge.AccessControlContext), h = (n == null ? void 0 : n.enabled) ?? c.options.buttons.enableAccessControl, A = (n == null ? void 0 : n.hideIfUnauthorized) ?? c.options.buttons.hideIfUnauthorized, L = (0, ge.useTranslate)(), E = (0, ge.useRouterType)(), S = (0, ge.useLink)(), { Link: f } = (0, ge.useRouterContext)(), b = E === "legacy" ? f : S, { editUrl: y } = (0, ge.useNavigation)(), { id: d, resource: g } = (0, ge.useResource)(e ?? o), { data: i } = (0, ge.useCan)({ resource: g == null ? void 0 : g.name, action: "edit", params: { id: t ?? d, resource: g }, queryOptions: { enabled: h } }), x = r(() => i != null && i.can ? "" : i != null && i.reason ? i.reason : L("buttons.notAccessTitle", "You don't have permission to access"), "disabledTitle"), k = g && (t ?? d) ? y(g, t ?? d, l) : "", { variant: v, styles: B, ...p } = m;
        return h && A && !(i != null && i.can) ? null : lo.default.createElement(Io.Anchor, { component: b, to: k, replace: false, onClick: (P) => {
          if ((i == null ? void 0 : i.can) === false) {
            P.preventDefault();
            return;
          }
          T && (P.preventDefault(), T(P));
        } }, s ? lo.default.createElement(Io.ActionIcon, { title: x(), disabled: (i == null ? void 0 : i.can) === false, className: Eo.RefineButtonClassNames.EditButton, ...v ? { variant: ee(v) } : { variant: "default" }, ...p }, lo.default.createElement(Wt.IconPencil, { size: 18, ...a })) : lo.default.createElement(Io.Button, { variant: "default", disabled: (i == null ? void 0 : i.can) === false, leftIcon: lo.default.createElement(Wt.IconPencil, { size: 18, ...a }), title: x(), className: Eo.RefineButtonClassNames.EditButton, ...m }, u ?? L("buttons.edit", "Edit")));
      }, "EditButton");
      var xe = C(__require("react"));
      var pe = require_dist3();
      var Do = require_dist4();
      var ke = __require("@mantine/core");
      var Gt = __require("@tabler/icons");
      var Vo = r(({ resource: e, resourceNameOrRouteName: o, recordItemId: t, onSuccess: s, mutationMode: n, children: a, successNotification: l, errorNotification: u, hideText: T = false, accessControl: m, meta: c, metaData: h, dataProviderName: A, confirmTitle: L, confirmOkText: E, confirmCancelText: S, svgIconProps: f, ...b }) => {
        let y = (0, xe.useContext)(pe.AccessControlContext), d = (m == null ? void 0 : m.enabled) ?? y.options.buttons.enableAccessControl, g = (m == null ? void 0 : m.hideIfUnauthorized) ?? y.options.buttons.hideIfUnauthorized, i = (0, pe.useTranslate)(), { id: x, resource: k, identifier: v } = (0, pe.useResource)(e ?? o), { mutationMode: B } = (0, pe.useMutationMode)(), p = n ?? B, { mutate: P, isLoading: D, variables: w } = (0, pe.useDelete)(), { data: I } = (0, pe.useCan)({ resource: k == null ? void 0 : k.name, action: "delete", params: { id: t ?? x, resource: k }, queryOptions: { enabled: d } }), F = r(() => I != null && I.can ? "" : I != null && I.reason ? I.reason : i("buttons.notAccessTitle", "You don't have permission to access"), "disabledTitle"), [z, H] = (0, xe.useState)(false), U = r(() => {
          (t ?? x) && v && (de(false), H(false), P({ id: t ?? x ?? "", resource: v, mutationMode: p, successNotification: l, errorNotification: u, meta: (0, pe.pickNotDeprecated)(c, h), metaData: (0, pe.pickNotDeprecated)(c, h), dataProviderName: A }, { onSuccess: (re) => {
            s && s(re);
          } }));
        }, "onConfirm"), { variant: ae, styles: $, ...Te } = b, { setWarnWhen: de } = (0, pe.useWarnAboutChange)();
        return d && g && !(I != null && I.can) ? null : xe.default.createElement(ke.Popover, { opened: z, onChange: H, withArrow: true, withinPortal: true, disabled: typeof (b == null ? void 0 : b.disabled) < "u" ? b.disabled : (I == null ? void 0 : I.can) === false }, xe.default.createElement(ke.Popover.Target, null, T ? xe.default.createElement(ke.ActionIcon, { color: "red", onClick: () => H((re) => !re), disabled: D || (I == null ? void 0 : I.can) === false, loading: (t ?? x) === (w == null ? void 0 : w.id) && D, className: Do.RefineButtonClassNames.DeleteButton, ...ae ? { variant: ee(ae) } : { variant: "outline" }, ...Te }, xe.default.createElement(Gt.IconTrash, { size: 18, ...f })) : xe.default.createElement(ke.Button, { color: "red", variant: "outline", onClick: () => H((re) => !re), disabled: D || (I == null ? void 0 : I.can) === false, loading: (t ?? x) === (w == null ? void 0 : w.id) && D, title: F(), leftIcon: xe.default.createElement(Gt.IconTrash, { size: 18, ...f }), className: Do.RefineButtonClassNames.DeleteButton, ...b }, a ?? i("buttons.delete", "Delete"))), xe.default.createElement(ke.Popover.Dropdown, { py: "xs" }, xe.default.createElement(ke.Text, { size: "sm", weight: "bold" }, L ?? i("buttons.confirm", "Are you sure?")), xe.default.createElement(ke.Group, { position: "center", noWrap: true, spacing: "xs", mt: "xs" }, xe.default.createElement(ke.Button, { onClick: () => H(false), variant: "default", size: "xs" }, S ?? i("buttons.cancel", "Cancel")), xe.default.createElement(ke.Button, { color: "red", onClick: U, autoFocus: true, size: "xs" }, E ?? i("buttons.delete", "Delete")))));
      }, "DeleteButton");
      var at = C(__require("react"));
      var $e = require_dist3();
      var No = require_dist4();
      var Pt = __require("@mantine/core");
      var jt = __require("@tabler/icons");
      var kr = __require("@tanstack/react-query");
      var zo = r(({ resource: e, resourceNameOrRouteName: o, recordItemId: t, hideText: s = false, dataProviderName: n, svgIconProps: a, children: l, onClick: u, meta: T, metaData: m, ...c }) => {
        let h = (0, $e.useTranslate)(), A = (0, kr.useQueryClient)(), L = (0, $e.useInvalidate)(), { resources: E, identifier: S, id: f } = (0, $e.useResource)(e ?? o), b = !!A.isFetching({ queryKey: (0, $e.queryKeys)(S, (0, $e.pickDataProvider)(S, n, E)).detail(t ?? f) }), y = r(() => {
          L({ id: t ?? f, invalidates: ["detail"], dataProviderName: n, resource: S });
        }, "handleInvalidate"), { variant: d, styles: g, ...i } = c;
        return s ? at.default.createElement(Pt.ActionIcon, { onClick: (x) => {
          u ? u(x) : y();
        }, loading: b, className: No.RefineButtonClassNames.RefreshButton, ...d ? { variant: ee(d) } : { variant: "default" }, ...i }, at.default.createElement(jt.IconRefresh, { size: 18, ...a })) : at.default.createElement(Pt.Button, { variant: "default", leftIcon: at.default.createElement(jt.IconRefresh, { size: 18, ...a }), loading: b, onClick: (x) => {
          u ? u(x) : y();
        }, className: No.RefineButtonClassNames.RefreshButton, ...c }, l ?? h("buttons.refresh", "Refresh"));
      }, "RefreshButton");
      var po = C(__require("react"));
      var he = require_dist3();
      var Mo = require_dist4();
      var Uo = __require("@mantine/core");
      var $t = __require("@tabler/icons");
      var Ar = r(({ resource: e, resourceNameOrRouteName: o, recordItemId: t, hideText: s = false, accessControl: n, svgIconProps: a, meta: l, children: u, onClick: T, ...m }) => {
        let c = (0, po.useContext)(he.AccessControlContext), h = (n == null ? void 0 : n.enabled) ?? c.options.buttons.enableAccessControl, A = (n == null ? void 0 : n.hideIfUnauthorized) ?? c.options.buttons.hideIfUnauthorized, { showUrl: L } = (0, he.useNavigation)(), E = (0, he.useRouterType)(), S = (0, he.useLink)(), { Link: f } = (0, he.useRouterContext)(), b = E === "legacy" ? f : S, y = (0, he.useTranslate)(), { id: d, resource: g } = (0, he.useResource)(e ?? o), { data: i } = (0, he.useCan)({ resource: g == null ? void 0 : g.name, action: "show", params: { id: t ?? d, resource: g }, queryOptions: { enabled: h } }), x = r(() => i != null && i.can ? "" : i != null && i.reason ? i.reason : y("buttons.notAccessTitle", "You don't have permission to access"), "disabledTitle"), k = g && (t || d) ? L(g, t ?? d, l) : "", { variant: v, styles: B, ...p } = m;
        return h && A && !(i != null && i.can) ? null : po.default.createElement(Uo.Anchor, { component: b, to: k, replace: false, onClick: (P) => {
          if ((i == null ? void 0 : i.can) === false) {
            P.preventDefault();
            return;
          }
          T && (P.preventDefault(), T(P));
        } }, s ? po.default.createElement(Uo.ActionIcon, { ...v ? { variant: ee(v) } : { variant: "default" }, disabled: (i == null ? void 0 : i.can) === false, title: x(), className: Mo.RefineButtonClassNames.ShowButton, ...p }, po.default.createElement($t.IconEye, { size: 18, ...a })) : po.default.createElement(Uo.Button, { variant: "default", disabled: (i == null ? void 0 : i.can) === false, leftIcon: po.default.createElement($t.IconEye, { size: 18, ...a }), title: x(), className: Mo.RefineButtonClassNames.ShowButton, ...m }, u ?? y("buttons.show", "Show")));
      }, "ShowButton");
      var uo = C(__require("react"));
      var ne = require_dist3();
      var Ho = require_dist4();
      var Oo = __require("@mantine/core");
      var Rt = __require("@tabler/icons");
      var Qo = r(({ resource: e, resourceNameOrRouteName: o, hideText: t = false, accessControl: s, svgIconProps: n, meta: a, children: l, onClick: u, ...T }) => {
        var P;
        let m = (0, uo.useContext)(ne.AccessControlContext), c = (s == null ? void 0 : s.enabled) ?? m.options.buttons.enableAccessControl, h = (s == null ? void 0 : s.hideIfUnauthorized) ?? m.options.buttons.hideIfUnauthorized, { listUrl: A } = (0, ne.useNavigation)(), L = (0, ne.useRouterType)(), E = (0, ne.useLink)(), { Link: S } = (0, ne.useRouterContext)(), f = (0, ne.useUserFriendlyName)(), b = L === "legacy" ? S : E, y = (0, ne.useTranslate)(), { resource: d, identifier: g } = (0, ne.useResource)(e ?? o), { data: i } = (0, ne.useCan)({ resource: d == null ? void 0 : d.name, action: "list", queryOptions: { enabled: c }, params: { resource: d } }), x = r(() => i != null && i.can ? "" : i != null && i.reason ? i.reason : y("buttons.notAccessTitle", "You don't have permission to access"), "disabledTitle"), k = d ? A(d, a) : "", { variant: v, styles: B, ...p } = T;
        return c && h && !(i != null && i.can) ? null : uo.default.createElement(Oo.Anchor, { component: b, to: k, replace: false, onClick: (D) => {
          if ((i == null ? void 0 : i.can) === false) {
            D.preventDefault();
            return;
          }
          u && (D.preventDefault(), u(D));
        } }, t ? uo.default.createElement(Oo.ActionIcon, { ...v ? { variant: ee(v) } : { variant: "default" }, disabled: (i == null ? void 0 : i.can) === false, title: x(), className: Ho.RefineButtonClassNames.ListButton, ...p }, uo.default.createElement(Rt.IconList, { size: 18, ...n })) : uo.default.createElement(Oo.Button, { variant: "default", disabled: (i == null ? void 0 : i.can) === false, leftIcon: uo.default.createElement(Rt.IconList, { size: 18, ...n }), title: x(), className: Ho.RefineButtonClassNames.ListButton, ...T }, l ?? y(`${g ?? e ?? o}.titles.list`, f(((P = d == null ? void 0 : d.meta) == null ? void 0 : P.label) ?? (d == null ? void 0 : d.label) ?? g ?? (0, ne.pickNotDeprecated)(e, o), "plural"))));
      }, "ListButton");
      var lt = C(__require("react"));
      var Er = require_dist3();
      var Wo = require_dist4();
      var Ct = __require("@mantine/core");
      var Yt = __require("@tabler/icons");
      var Ir = r(({ hideText: e = false, children: o, loading: t = false, svgIconProps: s, ...n }) => {
        let a = (0, Er.useTranslate)(), { variant: l, styles: u, ...T } = n;
        return e ? lt.default.createElement(Ct.ActionIcon, { ...l ? { variant: ee(l) } : { variant: "default" }, loading: t, className: Wo.RefineButtonClassNames.ExportButton, ...T }, lt.default.createElement(Yt.IconFileExport, { size: 18, ...s })) : lt.default.createElement(Ct.Button, { variant: "default", loading: t, leftIcon: lt.default.createElement(Yt.IconFileExport, { size: 18, ...s }), className: Wo.RefineButtonClassNames.ExportButton, ...n }, o ?? a("buttons.export", "Export"));
      }, "ExportButton");
      var dt = C(__require("react"));
      var Dr = require_dist3();
      var Go = require_dist4();
      var vt = __require("@mantine/core");
      var qt = __require("@tabler/icons");
      var jo = r(({ hideText: e = false, svgIconProps: o, children: t, ...s }) => {
        let n = (0, Dr.useTranslate)(), { variant: a, styles: l, ...u } = s;
        return e ? dt.default.createElement(vt.ActionIcon, { ...a ? { variant: ee(a) } : { variant: "filled", color: "primary" }, className: Go.RefineButtonClassNames.SaveButton, ...u }, dt.default.createElement(qt.IconDeviceFloppy, { size: 18, ...o })) : dt.default.createElement(vt.Button, { variant: "filled", leftIcon: dt.default.createElement(qt.IconDeviceFloppy, { size: 18, ...o }), className: Go.RefineButtonClassNames.SaveButton, ...s }, t ?? n("buttons.save", "Save"));
      }, "SaveButton");
      var mo = C(__require("react"));
      var be = require_dist3();
      var $o = require_dist4();
      var Ro = __require("@mantine/core");
      var Kt = __require("@tabler/icons");
      var Vr = r(({ resource: e, resourceNameOrRouteName: o, recordItemId: t, hideText: s = false, accessControl: n, svgIconProps: a, meta: l, children: u, onClick: T, ...m }) => {
        let c = (0, mo.useContext)(be.AccessControlContext), h = (n == null ? void 0 : n.enabled) ?? c.options.buttons.enableAccessControl, A = (n == null ? void 0 : n.hideIfUnauthorized) ?? c.options.buttons.hideIfUnauthorized, { cloneUrl: L } = (0, be.useNavigation)(), E = (0, be.useRouterType)(), S = (0, be.useLink)(), { Link: f } = (0, be.useRouterContext)(), b = E === "legacy" ? f : S, y = (0, be.useTranslate)(), { id: d, resource: g } = (0, be.useResource)(e ?? o), { data: i } = (0, be.useCan)({ resource: g == null ? void 0 : g.name, action: "create", params: { id: t ?? d, resource: g }, queryOptions: { enabled: h } }), x = r(() => i != null && i.can ? "" : i != null && i.reason ? i.reason : y("buttons.notAccessTitle", "You don't have permission to access"), "disabledTitle"), k = g && (t || d) ? L(g, t ?? d, l) : "", { variant: v, styles: B, ...p } = m;
        return h && A && !(i != null && i.can) ? null : mo.default.createElement(Ro.Anchor, { component: b, to: k, replace: false, onClick: (P) => {
          if ((i == null ? void 0 : i.can) === false) {
            P.preventDefault();
            return;
          }
          T && (P.preventDefault(), T(P));
        } }, s ? mo.default.createElement(Ro.ActionIcon, { disabled: (i == null ? void 0 : i.can) === false, title: x(), ...v ? { variant: ee(v) } : { variant: "default" }, className: $o.RefineButtonClassNames.CloneButton, ...p }, mo.default.createElement(Kt.IconSquarePlus, { size: 18, ...a })) : mo.default.createElement(Ro.Button, { disabled: (i == null ? void 0 : i.can) === false, variant: "default", leftIcon: mo.default.createElement(Kt.IconSquarePlus, { size: 18, ...a }), title: x(), className: $o.RefineButtonClassNames.CloneButton, ...m }, u ?? y("buttons.clone", "Clone")));
      }, "CloneButton");
      var Po = C(__require("react"));
      var Nr = require_dist3();
      var Yo = require_dist4();
      var Ft = __require("@mantine/core");
      var Zt = __require("@tabler/icons");
      var zr = r(({ inputProps: e, hideText: o = false, loading: t = false, svgIconProps: s, children: n, ...a }) => {
        let l = (0, Nr.useTranslate)(), { variant: u, styles: T, ...m } = a;
        return Po.default.createElement("label", { htmlFor: "contained-button-file" }, Po.default.createElement("input", { ...e, id: "contained-button-file", multiple: true, hidden: true }), o ? Po.default.createElement(Ft.ActionIcon, { ...u ? { variant: ee(u) } : { variant: "default" }, component: "span", loading: t, className: Yo.RefineButtonClassNames.ImportButton, ...m }, Po.default.createElement(Zt.IconFileImport, { size: 18, ...s })) : Po.default.createElement(Ft.Button, { variant: "default", component: "span", leftIcon: Po.default.createElement(Zt.IconFileImport, { size: 18, ...s }), loading: t, className: Yo.RefineButtonClassNames.ImportButton, ...a }, n ?? l("buttons.import", "Import")));
      }, "ImportButton");
      var Oe = C(__require("react"));
      var Qe = __require("@mantine/core");
      var Re = require_dist3();
      var Mr = require_dist4();
      var In = r((e) => {
        var v, B;
        let { canCreate: o, children: t, createButtonProps: s, resource: n, wrapperProps: a, contentProps: l, headerProps: u, headerButtonProps: T, headerButtons: m, breadcrumb: c, title: h } = e, A = (0, Re.useTranslate)(), { options: { breadcrumb: L } = {} } = (0, Re.useRefineContext)(), E = (0, Re.useRouterType)(), S = (0, Re.useUserFriendlyName)(), { resource: f, identifier: b } = (0, Re.useResource)(n), y = o ?? (((f == null ? void 0 : f.canCreate) ?? !!(f != null && f.create)) || s), d = typeof c > "u" ? L : c, g = y ? { size: "sm", resource: E === "legacy" ? f == null ? void 0 : f.route : b, ...s } : void 0, i = y ? Oe.default.createElement(bt, { ...g }) : null, x = typeof d < "u" ? Oe.default.createElement(Oe.default.Fragment, null, d) ?? void 0 : Oe.default.createElement(to, null), k = m ? typeof m == "function" ? m({ defaultButtons: i, createButtonProps: g }) : m : i;
        return Oe.default.createElement(Qe.Card, { p: "md", ...a }, Oe.default.createElement(Qe.Group, { position: "apart", align: "center", ...u }, Oe.default.createElement(Qe.Stack, { spacing: "xs" }, x, h ?? Oe.default.createElement(Qe.Title, { order: 3, transform: "capitalize", className: Mr.RefinePageHeaderClassNames.Title }, A(`${b}.titles.list`, S(((v = f == null ? void 0 : f.meta) == null ? void 0 : v.label) ?? ((B = f == null ? void 0 : f.options) == null ? void 0 : B.label) ?? (f == null ? void 0 : f.label) ?? b, "plural")))), Oe.default.createElement(Qe.Group, { spacing: "xs", ...T }, k)), Oe.default.createElement(Qe.Box, { pt: "sm", ...l }, t));
      }, "List");
      var oe = C(__require("react"));
      var ue = __require("@mantine/core");
      var le = require_dist3();
      var Ur = __require("@tabler/icons");
      var Hr = require_dist4();
      var Dn = r((e) => {
        var eo, io, oo;
        let { children: o, resource: t, recordItemId: s, canDelete: n, canEdit: a, dataProviderName: l, isLoading: u, footerButtons: T, footerButtonProps: m, headerButtons: c, headerButtonProps: h, wrapperProps: A, contentProps: L, headerProps: E, goBack: S, breadcrumb: f, title: b } = e, y = (0, le.useTranslate)(), { options: { breadcrumb: d } = {} } = (0, le.useRefineContext)(), g = (0, le.useRouterType)(), i = (0, le.useBack)(), x = (0, le.useGo)(), { goBack: k, list: v } = (0, le.useNavigation)(), B = (0, le.useUserFriendlyName)(), { resource: p, action: P, id: D, identifier: w } = (0, le.useResource)(t), I = (0, le.useToPath)({ resource: p, action: "list" }), F = s ?? D, z = typeof f > "u" ? d : f, H = typeof z < "u" ? oe.default.createElement(oe.default.Fragment, null, z) ?? void 0 : oe.default.createElement(to, null), U = (p == null ? void 0 : p.list) && !s, ae = n ?? ((eo = p == null ? void 0 : p.meta) == null ? void 0 : eo.canDelete) ?? (p == null ? void 0 : p.canDelete), $ = a ?? (p == null ? void 0 : p.canEdit) ?? !!(p != null && p.edit), Te = U ? { ...u ? { disabled: true } : {}, resource: g === "legacy" ? p == null ? void 0 : p.route : w } : void 0, de = $ ? { ...u ? { disabled: true } : {}, color: "primary", variant: "filled", resource: g === "legacy" ? p == null ? void 0 : p.route : w, recordItemId: F } : void 0, re = ae ? { ...u ? { disabled: true } : {}, resource: g === "legacy" ? p == null ? void 0 : p.route : w, recordItemId: F, onSuccess: () => {
          g === "legacy" ? v((p == null ? void 0 : p.route) ?? (p == null ? void 0 : p.name) ?? "") : x({ to: I });
        }, dataProviderName: l } : void 0, Ne = { ...u ? { disabled: true } : {}, resource: g === "legacy" ? p == null ? void 0 : p.route : w, recordItemId: F, dataProviderName: l }, Le = u ?? false, Se = oe.default.createElement(oe.default.Fragment, null, U && oe.default.createElement(Qo, { ...Te }), $ && oe.default.createElement(Bt, { ...de }), ae && oe.default.createElement(Vo, { ...re }), oe.default.createElement(zo, { ...Ne })), Ve = S === null ? null : oe.default.createElement(ue.ActionIcon, { onClick: P !== "list" && typeof P < "u" ? g === "legacy" ? k : i : void 0 }, typeof S < "u" ? S : oe.default.createElement(Ur.IconArrowLeft, null)), _ = c ? typeof c == "function" ? c({ defaultButtons: Se, deleteButtonProps: re, editButtonProps: de, listButtonProps: Te, refreshButtonProps: Ne }) : c : Se, je = T ? typeof T == "function" ? T({ defaultButtons: null }) : T : null;
        return oe.default.createElement(ue.Card, { p: "md", ...A }, oe.default.createElement(ue.LoadingOverlay, { visible: Le }), oe.default.createElement(ue.Group, { position: "apart", align: "center", ...E }, oe.default.createElement(ue.Stack, { spacing: "xs" }, H, oe.default.createElement(ue.Group, { spacing: "xs" }, Ve, b ?? oe.default.createElement(ue.Title, { order: 3, transform: "capitalize", className: Hr.RefinePageHeaderClassNames.Title }, y(`${w}.titles.show`, `Show ${B(((io = p == null ? void 0 : p.meta) == null ? void 0 : io.label) ?? ((oo = p == null ? void 0 : p.options) == null ? void 0 : oo.label) ?? (p == null ? void 0 : p.label) ?? w, "singular")}`)))), oe.default.createElement(ue.Group, { spacing: "xs", ...h }, _)), oe.default.createElement(ue.Box, { pt: "sm", ...L }, o), oe.default.createElement(ue.Group, { position: "right", spacing: "xs", mt: "md", ...m }, je));
      }, "Show");
      var Z = C(__require("react"));
      var me = __require("@mantine/core");
      var se = require_dist3();
      var Or = __require("@tabler/icons");
      var Qr = require_dist4();
      var Vn = r((e) => {
        var ar, lr, dr;
        let { children: o, resource: t, recordItemId: s, deleteButtonProps: n, mutationMode: a, saveButtonProps: l, canDelete: u, dataProviderName: T, isLoading: m, footerButtons: c, footerButtonProps: h, headerButtons: A, headerButtonProps: L, wrapperProps: E, contentProps: S, headerProps: f, goBack: b, breadcrumb: y, title: d, autoSaveProps: g } = e, i = (0, se.useTranslate)(), { options: { breadcrumb: x } = {} } = (0, se.useRefineContext)(), { mutationMode: k } = (0, se.useMutationMode)(), v = a ?? k, B = (0, se.useRouterType)(), p = (0, se.useBack)(), P = (0, se.useGo)(), { goBack: D, list: w } = (0, se.useNavigation)(), I = (0, se.useUserFriendlyName)(), { resource: F, action: z, id: H, identifier: U } = (0, se.useResource)(t), ae = (0, se.useToPath)({ resource: F, action: "list" }), $ = s ?? H, Te = typeof y > "u" ? x : y, de = (F == null ? void 0 : F.list) && !s, re = u ?? ((((ar = F == null ? void 0 : F.meta) == null ? void 0 : ar.canDelete) ?? (F == null ? void 0 : F.canDelete)) || n), Ne = typeof Te < "u" ? Z.default.createElement(Z.default.Fragment, null, Te) ?? void 0 : Z.default.createElement(to, null), Le = m ?? (l == null ? void 0 : l.disabled) ?? false, Se = de ? { ...m ? { disabled: true } : {}, resource: B === "legacy" ? F == null ? void 0 : F.route : U } : void 0, Ve = { ...m ? { disabled: true } : {}, resource: B === "legacy" ? F == null ? void 0 : F.route : U, recordItemId: $, dataProviderName: T }, _ = re ? { ...m ? { disabled: true } : {}, resource: B === "legacy" ? F == null ? void 0 : F.route : U, mutationMode: v, onSuccess: () => {
          B === "legacy" ? w((F == null ? void 0 : F.route) ?? (F == null ? void 0 : F.name) ?? "") : P({ to: ae });
        }, recordItemId: $, dataProviderName: T, ...n } : void 0, je = { ...m ? { disabled: true } : {}, ...l }, eo = Z.default.createElement(Z.default.Fragment, null, g && Z.default.createElement(_t, { ...g }), de && Z.default.createElement(Qo, { ...Se }), Z.default.createElement(zo, { ...Ve })), io = Z.default.createElement(Z.default.Fragment, null, re && Z.default.createElement(Vo, { ..._ }), Z.default.createElement(jo, { ...je })), oo = b === null ? null : Z.default.createElement(me.ActionIcon, { onClick: z !== "list" && typeof z < "u" ? B === "legacy" ? D : p : void 0 }, typeof b < "u" ? b : Z.default.createElement(Or.IconArrowLeft, null)), Tt = A ? typeof A == "function" ? A({ defaultButtons: eo, listButtonProps: Se, refreshButtonProps: Ve }) : A : eo, fn = c ? typeof c == "function" ? c({ defaultButtons: io, deleteButtonProps: _, saveButtonProps: je }) : c : io;
        return Z.default.createElement(me.Card, { p: "md", ...E }, Z.default.createElement(me.LoadingOverlay, { visible: Le }), Z.default.createElement(me.Group, { position: "apart", ...f }, Z.default.createElement(me.Stack, { spacing: "xs" }, Ne, Z.default.createElement(me.Group, { spacing: "xs" }, oo, d ?? Z.default.createElement(me.Title, { order: 3, transform: "capitalize", className: Qr.RefinePageHeaderClassNames.Title }, i(`${U}.titles.edit`, `Edit ${I(((lr = F == null ? void 0 : F.meta) == null ? void 0 : lr.label) ?? ((dr = F == null ? void 0 : F.options) == null ? void 0 : dr.label) ?? (F == null ? void 0 : F.label) ?? U, "singular")}`)))), Z.default.createElement(me.Group, { spacing: "xs", ...L }, Tt)), Z.default.createElement(me.Box, { pt: "sm", ...S }, o), Z.default.createElement(me.Group, { position: "right", spacing: "xs", mt: "md", ...h }, fn));
      }, "Edit");
      var Be = C(__require("react"));
      var ce = __require("@mantine/core");
      var Ae = require_dist3();
      var Wr = __require("@tabler/icons");
      var Gr = require_dist4();
      var Nn = r((e) => {
        var z, H;
        let { children: o, saveButtonProps: t, isLoading: s, resource: n, footerButtons: a, footerButtonProps: l, headerButtons: u, headerButtonProps: T, wrapperProps: m, contentProps: c, headerProps: h, goBack: A, breadcrumb: L, title: E } = e, S = (0, Ae.useTranslate)(), { options: { breadcrumb: f } = {} } = (0, Ae.useRefineContext)(), b = (0, Ae.useRouterType)(), y = (0, Ae.useBack)(), { goBack: d } = (0, Ae.useNavigation)(), g = (0, Ae.useUserFriendlyName)(), { resource: i, action: x, identifier: k } = (0, Ae.useResource)(n), v = typeof L > "u" ? f : L, B = typeof v < "u" ? Be.default.createElement(Be.default.Fragment, null, v) ?? void 0 : Be.default.createElement(to, null), p = { ...s ? { disabled: true } : {}, ...t }, P = s ?? (p == null ? void 0 : p.disabled) ?? false, D = Be.default.createElement(jo, { ...p }), w = A === null ? null : Be.default.createElement(ce.ActionIcon, { onClick: x !== "list" || typeof x < "u" ? b === "legacy" ? d : y : void 0 }, typeof A < "u" ? A : Be.default.createElement(Wr.IconArrowLeft, null)), I = u ? typeof u == "function" ? u({ defaultButtons: null }) : u : null, F = a ? typeof a == "function" ? a({ defaultButtons: D, saveButtonProps: p }) : a : D;
        return Be.default.createElement(ce.Card, { p: "md", ...m }, Be.default.createElement(ce.LoadingOverlay, { visible: P }), Be.default.createElement(ce.Group, { position: "apart", align: "center", ...h }, Be.default.createElement(ce.Stack, { spacing: "xs" }, B, Be.default.createElement(ce.Group, { spacing: "xs" }, w, E ?? Be.default.createElement(ce.Title, { order: 3, transform: "capitalize", className: Gr.RefinePageHeaderClassNames.Title }, S(`${k}.titles.create`, `Create ${g(((z = i == null ? void 0 : i.meta) == null ? void 0 : z.label) ?? ((H = i == null ? void 0 : i.options) == null ? void 0 : H.label) ?? (i == null ? void 0 : i.label) ?? k, "singular")}`)))), Be.default.createElement(ce.Group, { spacing: "xs", ...T }, I)), Be.default.createElement(ce.Box, { pt: "sm", ...c }, o), Be.default.createElement(ce.Group, { position: "right", spacing: "xs", mt: "md", ...l }, F));
      }, "Create");
      var Ee = C(__require("react"));
      var Ye = require_dist3();
      var Pe = __require("@mantine/core");
      var jr = __require("@tabler/icons");
      var zn = r(() => {
        let [e, o] = (0, Ee.useState)(), t = (0, Ye.useTranslate)(), { push: s } = (0, Ye.useNavigation)(), n = (0, Ye.useGo)(), a = (0, Ye.useRouterType)(), { resource: l, action: u } = (0, Ye.useResource)();
        return (0, Ee.useEffect)(() => {
          l && u && o(t("pages.error.info", { action: u, resource: l == null ? void 0 : l.name }, `You may have forgotten to add the "${u}" component to "${l == null ? void 0 : l.name}" resource.`));
        }, [l, u]), Ee.default.createElement(Pe.Box, { sx: { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", boxSizing: "border-box", minHeight: "calc(100vh - 150px)" } }, Ee.default.createElement(Pe.Title, { sx: (T) => ({ textAlign: "center", fontWeight: 900, fontSize: 220, lineHeight: 1, color: T.colorScheme === "dark" ? T.colors.dark[4] : T.colors.gray[2], [T.fn.smallerThan("sm")]: { fontSize: 120 } }) }, "404"), Ee.default.createElement(Pe.Group, { spacing: 4, align: "center", sx: { justifyContent: "center" } }, Ee.default.createElement(Pe.Text, { color: "dimmed", size: "lg", align: "center", sx: { maxWidth: 500 } }, t("pages.error.404", "Sorry, the page you visited does not exist.")), e && Ee.default.createElement(Pe.Tooltip, { openDelay: 0, label: e }, Ee.default.createElement(Pe.ActionIcon, {}, Ee.default.createElement(jr.IconInfoCircle, null)))), Ee.default.createElement(Pe.Space, { h: "md" }), Ee.default.createElement(Pe.Button, { variant: "subtle", size: "md", onClick: () => {
          a === "legacy" ? s("/") : n({ to: "/" });
        } }, t("pages.error.backHome", "Back Home")));
      }, "ErrorComponent");
      var fe = C(__require("react"));
      var X = __require("@mantine/core");
      var Mn = r(() => fe.createElement(X.BackgroundImage, { sx: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#2A132E" }, py: "xl", px: "sm", src: "https://refine.ams3.cdn.digitaloceanspaces.com/login-background/background.png" }, fe.createElement("img", { src: "https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine.svg", alt: "Refine Logo" }), fe.createElement(X.Space, { h: 24 }), fe.createElement(X.Title, { align: "center", sx: { color: "white", fontSize: "3rem" } }, "Welcome on board"), fe.createElement(X.Text, { size: "xl", sx: { color: "white" }, mt: "md", align: "center" }, "Your configuration is completed."), fe.createElement(X.Text, { size: "lg", sx: { color: "white" }, mt: "md", align: "center" }, "Now you can get started by adding your resources to the", " ", fe.createElement(X.Code, null, "resources"), " property of ", fe.createElement(X.Code, null, "Refine"), "."), fe.createElement(X.Space, { h: 48 }), fe.createElement(X.Group, { position: "center" }, fe.createElement(X.Anchor, { href: "https://refine.dev", target: "_blank", rel: "noreferrer" }, fe.createElement(X.Button, { variant: "default" }, "Documentation")), fe.createElement(X.Anchor, { href: "https://refine.dev/examples", target: "_blank", rel: "noreferrer" }, fe.createElement(X.Button, { variant: "default" }, "Examples")), fe.createElement(X.Anchor, { href: "https://discord.gg/refine", target: "_blank", rel: "noreferrer" }, fe.createElement(X.Button, { variant: "default" }, "Community")))), "ReadyPage");
      var $r = C(__require("react"));
      var Rr = require_dist3();
      var Un = r(() => $r.default.createElement(Rr.WelcomePage, null), "WelcomePage");
      var Co = C(__require("react"));
      var R = C(__require("react"));
      var qo = require_dist3();
      var Ko = require_dist3();
      var Q = __require("@mantine/core");
      var Yr = __require("@mantine/form");
      var [Hn, On, Qn] = (0, Yr.createFormContext)();
      var qe = { FormProvider: Hn, useFormContext: On, useForm: Qn };
      var ze = { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100dvh", padding: "16px" };
      var co = { width: "100%", maxWidth: "400px", padding: "32px", boxShadow: "0px 17px 17px -7px rgba(0, 0, 0, 0.16), 0px 36px 28px -7px rgba(0, 0, 0, 0.2), 0px 1px 3px rgba(0, 0, 0, 0.2)" };
      var fo = { textAlign: "center", fontSize: "26px", fontWeight: 700 };
      var To = { display: "flex", justifyContent: "center", marginBottom: "32px", fontSize: "22px", fontWeight: 700 };
      var qr = r(({ providers: e, registerLink: o, forgotPasswordLink: t, rememberMe: s, contentProps: n, wrapperProps: a, renderContent: l, formProps: u, title: T, hideForm: m }) => {
        let c = (0, Q.useMantineTheme)(), { useForm: h, FormProvider: A } = qe, { onSubmit: L, ...E } = u || {}, S = (0, Ko.useTranslate)(), f = (0, qo.useRouterType)(), b = (0, qo.useLink)(), { Link: y } = (0, Ko.useRouterContext)(), d = f === "legacy" ? y : b, g = h({ initialValues: { email: "", password: "", remember: false }, validate: { email: (w) => /^\S+@\S+$/.test(w) ? null : S("pages.login.errors.validEmail", "Invalid email address"), password: (w) => w === "" }, ...E }), { onSubmit: i, getInputProps: x } = g, k = (0, qo.useActiveAuthProvider)(), { mutate: v, isLoading: B } = (0, Ko.useLogin)({ v3LegacyAuthProviderCompatible: !!(k != null && k.isLegacy) }), p = T === false ? null : R.default.createElement("div", { style: To }, T ?? R.default.createElement(We, { collapsed: false })), P = r(() => e && e.length > 0 ? R.default.createElement(R.default.Fragment, null, R.default.createElement(Q.Stack, { spacing: 8 }, e.map((w) => R.default.createElement(Q.Button, { key: w.name, variant: "default", fullWidth: true, leftIcon: w.icon, onClick: () => v({ providerName: w.name }) }, w.label))), !m && R.default.createElement(Q.Divider, { my: "md", labelPosition: "center", label: S("pages.login.divider", "or") })) : null, "renderProviders"), D = R.default.createElement(Q.Card, { style: co, ...n ?? {} }, R.default.createElement(Q.Title, { style: fo, color: c.colorScheme === "dark" ? "brand.5" : "brand.8" }, S("pages.login.title", "Sign in to your account")), R.default.createElement(Q.Space, { h: "sm" }), R.default.createElement(Q.Space, { h: "lg" }), P(), !m && R.default.createElement(A, { form: g }, R.default.createElement("form", { onSubmit: i((w) => L ? L(w) : v(w)) }, R.default.createElement(Q.TextInput, { name: "email", label: S("pages.login.fields.email", "Email"), placeholder: S("pages.login.fields.email", "Email"), ...x("email") }), R.default.createElement(Q.PasswordInput, { name: "password", autoComplete: "current-password", mt: "md", label: S("pages.login.fields.password", "Password"), placeholder: "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF", ...x("password") }), R.default.createElement(Q.Box, { mt: "md", sx: { display: "flex", alignItems: "center", justifyContent: "space-between" } }, s ?? R.default.createElement(Q.Checkbox, { label: S("pages.login.buttons.rememberMe", "Remember me"), size: "xs", ...x("remember", { type: "checkbox" }) }), t ?? R.default.createElement(Q.Anchor, { component: d, to: "/forgot-password", size: "xs" }, S("pages.login.buttons.forgotPassword", "Forgot password?"))), R.default.createElement(Q.Button, { mt: "md", fullWidth: true, size: "md", type: "submit", loading: B }, S("pages.login.signin", "Sign in")))), o ?? R.default.createElement(Q.Text, { mt: "md", size: "xs", align: "center" }, S("pages.login.buttons.noAccount", "Don\u2019t have an account?"), " ", R.default.createElement(Q.Anchor, { component: d, to: "/register", weight: 700 }, S("pages.login.signup", "Sign up"))));
        return R.default.createElement(Q.Box, { style: { ...ze, justifyContent: m ? "flex-start" : ze.justifyContent, paddingTop: m ? "15dvh" : ze.padding }, ...a ?? {} }, l ? l(D, p) : R.default.createElement(R.default.Fragment, null, p, D));
      }, "LoginPage");
      var J = C(__require("react"));
      var Kr = require_dist3();
      var Ke = require_dist3();
      var W = __require("@mantine/core");
      var Zr = r(({ loginLink: e, contentProps: o, wrapperProps: t, renderContent: s, formProps: n, providers: a, title: l, hideForm: u }) => {
        let T = (0, W.useMantineTheme)(), { useForm: m, FormProvider: c } = qe, { onSubmit: h, ...A } = n || {}, L = (0, Ke.useTranslate)(), E = (0, Ke.useRouterType)(), S = (0, Ke.useLink)(), { Link: f } = (0, Ke.useRouterContext)(), b = E === "legacy" ? f : S, y = m({ initialValues: { email: "", password: "" }, validate: { email: (P) => /^\S+@\S+$/.test(P) ? null : L("pages.register.errors.validEmail", "Invalid email address"), password: (P) => P === "" }, ...A }), { onSubmit: d, getInputProps: g } = y, i = (0, Kr.useActiveAuthProvider)(), { mutate: x, isLoading: k } = (0, Ke.useRegister)({ v3LegacyAuthProviderCompatible: !!(i != null && i.isLegacy) }), v = l === false ? null : J.default.createElement("div", { style: To }, l ?? J.default.createElement(We, { collapsed: false })), B = r(() => a && a.length > 0 ? J.default.createElement(J.default.Fragment, null, J.default.createElement(W.Stack, { spacing: 8 }, a.map((P) => J.default.createElement(W.Button, { key: P.name, variant: "default", fullWidth: true, leftIcon: P.icon, onClick: () => x({ providerName: P.name }) }, P.label))), !u && J.default.createElement(W.Divider, { my: "md", labelPosition: "center", label: L("pages.login.divider", "or") })) : null, "renderProviders"), p = J.default.createElement(W.Card, { style: co, ...o ?? {} }, J.default.createElement(W.Title, { style: fo, color: T.colorScheme === "dark" ? "brand.5" : "brand.8" }, L("pages.register.title", "Sign up for your account")), J.default.createElement(W.Space, { h: "sm" }), J.default.createElement(W.Space, { h: "lg" }), B(), !u && J.default.createElement(c, { form: y }, J.default.createElement("form", { onSubmit: d((P) => h ? h(P) : x(P)) }, J.default.createElement(W.TextInput, { name: "email", label: L("pages.register.fields.email", "Email"), placeholder: L("pages.register.fields.email", "Email"), ...g("email") }), J.default.createElement(W.PasswordInput, { mt: "md", name: "password", label: L("pages.register.fields.password", "Password"), placeholder: "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF", ...g("password") }), J.default.createElement(W.Button, { mt: "md", fullWidth: true, size: "md", type: "submit", loading: k }, L("pages.register.buttons.submit", "Sign up")))), e ?? J.default.createElement(W.Group, { mt: "md", position: "center" }, J.default.createElement(W.Text, { size: "xs" }, L("pages.register.buttons.haveAccount", "Have an account?"), " ", J.default.createElement(W.Anchor, { component: b, to: "/login", weight: 700 }, L("pages.register.signin", "Sign in")))));
        return J.default.createElement(W.Box, { style: { ...ze, justifyContent: u ? "flex-start" : ze.justifyContent, paddingTop: u ? "15dvh" : ze.padding }, ...t ?? {} }, s ? s(p, v) : J.default.createElement(J.default.Fragment, null, v, p));
      }, "RegisterPage");
      var Ce = C(__require("react"));
      var St = require_dist3();
      var Zo = require_dist3();
      var ie = __require("@mantine/core");
      var _r = r(({ loginLink: e, contentProps: o, wrapperProps: t, renderContent: s, formProps: n, title: a }) => {
        let l = (0, ie.useMantineTheme)(), { useForm: u, FormProvider: T } = qe, { onSubmit: m, ...c } = n || {}, h = (0, Zo.useTranslate)(), A = (0, St.useRouterType)(), L = (0, St.useLink)(), { Link: E } = (0, Zo.useRouterContext)(), S = A === "legacy" ? E : L, f = u({ initialValues: { email: "" }, validate: { email: (k) => /^\S+@\S+$/.test(k) ? null : h("pages.forgotPassword.errors.validEmail", "Invalid email address") }, ...c }), { getInputProps: b, onSubmit: y } = f, { mutate: d, isLoading: g } = (0, Zo.useForgotPassword)(), i = a === false ? null : Ce.default.createElement("div", { style: To }, a ?? Ce.default.createElement(We, { collapsed: false })), x = Ce.default.createElement(ie.Card, { style: co, ...o ?? {} }, Ce.default.createElement(ie.Title, { style: fo, color: l.colorScheme === "dark" ? "brand.5" : "brand.8" }, h("pages.forgotPassword.title", "Forgot your password?")), Ce.default.createElement(ie.Space, { h: "lg" }), Ce.default.createElement(T, { form: f }, Ce.default.createElement("form", { onSubmit: y((k) => m ? m(k) : d(k)) }, Ce.default.createElement(ie.TextInput, { name: "email", label: h("pages.forgotPassword.fields.email", "Email"), placeholder: h("pages.forgotPassword.fields.email", "Email"), ...b("email") }), e ?? Ce.default.createElement(ie.Group, { mt: "md", position: e ? "left" : "right" }, Ce.default.createElement(ie.Text, { size: "xs" }, h("pages.login.forgotPassword.haveAccount", "Have an account?"), " ", Ce.default.createElement(ie.Anchor, { component: S, to: "/login", weight: 700 }, h("pages.forgotPassword.signin", "Sign in")))), Ce.default.createElement(ie.Button, { mt: "lg", fullWidth: true, size: "md", type: "submit", loading: g }, h("pages.forgotPassword.buttons.submit", "Send reset instructions")))));
        return Ce.default.createElement(ie.Box, { style: ze, ...t ?? {} }, s ? s(x, i) : Ce.default.createElement(Ce.default.Fragment, null, i, x));
      }, "ForgotPasswordPage");
      var Ie = C(__require("react"));
      var Xr = require_dist3();
      var wt = require_dist3();
      var we = __require("@mantine/core");
      var Jr = r(({ contentProps: e, wrapperProps: o, renderContent: t, formProps: s, title: n }) => {
        let a = (0, we.useMantineTheme)(), { useForm: l, FormProvider: u } = qe, { onSubmit: T, ...m } = s || {}, c = (0, wt.useTranslate)(), h = l({ initialValues: { password: "", confirmPassword: "" }, validate: { password: (d) => d === "", confirmPassword: (d, g) => d !== g.password ? c("pages.updatePassword.errors.confirmPasswordNotMatch", "Passwords do not match") : null }, ...m }), { getInputProps: A, onSubmit: L } = h, E = (0, Xr.useActiveAuthProvider)(), { mutate: S, isLoading: f } = (0, wt.useUpdatePassword)({ v3LegacyAuthProviderCompatible: !!(E != null && E.isLegacy) }), b = n === false ? null : Ie.default.createElement("div", { style: To }, n ?? Ie.default.createElement(We, { collapsed: false })), y = Ie.default.createElement(we.Card, { style: co, ...e ?? {} }, Ie.default.createElement(we.Title, { style: fo, color: a.colorScheme === "dark" ? "brand.5" : "brand.8" }, c("pages.updatePassword.title", "Set New Password")), Ie.default.createElement(we.Space, { h: "lg" }), Ie.default.createElement(u, { form: h }, Ie.default.createElement("form", { onSubmit: L((d) => T ? T(d) : S(d)) }, Ie.default.createElement(we.TextInput, { name: "password", type: "password", label: c("pages.updatePassword.fields.password", "New Password"), placeholder: "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF", ...A("password") }), Ie.default.createElement(we.TextInput, { mt: "md", name: "confirmPassword", type: "password", label: c("pages.updatePassword.fields.confirmPassword", "Confirm New Password"), placeholder: "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF", ...A("confirmPassword") }), Ie.default.createElement(we.Button, { mt: "lg", fullWidth: true, size: "md", type: "submit", loading: f }, c("pages.updatePassword.buttons.submit", "Update")))));
        return Ie.default.createElement(we.Box, { style: ze, ...o ?? {} }, t ? t(y, b) : Ie.default.createElement(Ie.default.Fragment, null, b, y));
      }, "UpdatePasswordPage");
      var Wn = r((e) => {
        let { type: o } = e;
        return Co.default.createElement(Co.default.Fragment, null, r(() => {
          switch (o) {
            case "register":
              return Co.default.createElement(Zr, { ...e });
            case "forgotPassword":
              return Co.default.createElement(_r, { ...e });
            case "updatePassword":
              return Co.default.createElement(Jr, { ...e });
            default:
              return Co.default.createElement(qr, { ...e });
          }
        }, "renderView")());
      }, "AuthPage");
      var vo = C(__require("react"));
      var De = require_dist3();
      var ro = __require("@mantine/core");
      var en = __require("@tabler/icons");
      var to = r(({ breadcrumbProps: e, showHome: o = true, hideIcons: t = false, meta: s }) => {
        var A, L;
        let n = (0, De.useRouterType)(), { breadcrumbs: a } = (0, De.useBreadcrumb)({ meta: s }), l = (0, De.useLink)(), { Link: u } = (0, De.useRouterContext)(), { hasDashboard: T } = (0, De.useRefineContext)(), { resources: m } = (0, De.useResource)(), c = (0, De.matchResourceFromRoute)("/", m), h = n === "legacy" ? u : l;
        return a.length === 1 ? null : vo.default.createElement(ro.Breadcrumbs, { "aria-label": "breadcrumb", styles: { separator: { marginRight: 8, marginLeft: 8, color: "dimgray" } }, ...e }, o && (T || c.found) && vo.default.createElement(ro.Anchor, { component: h, color: "dimmed", to: "/" }, ((L = (A = c == null ? void 0 : c.resource) == null ? void 0 : A.meta) == null ? void 0 : L.icon) ?? vo.default.createElement(en.IconHome, { size: 18 })), a.map(({ label: E, icon: S, href: f }) => vo.default.createElement(ro.Group, { key: E, spacing: 4, align: "center", noWrap: true }, !t && S, f ? vo.default.createElement(ro.Anchor, { component: h, color: "dimmed", to: f, size: "sm" }, E) : vo.default.createElement(ro.Text, { color: "dimmed", size: "sm" }, E))));
      }, "Breadcrumb");
      var go = C(__require("react"));
      var At = __require("@mantine/core");
      var V = C(__require("react"));
      var Y = require_dist3();
      var O = __require("@mantine/core");
      var Me = __require("@tabler/icons");
      var Gn = V.default.createElement(Me.IconList, { size: 18 });
      var Xt = r(({ render: e, meta: o, Title: t }) => {
        let [s, n] = (0, V.useState)(false), [a, l] = (0, V.useState)(false), u = (0, Y.useRouterType)(), T = (0, Y.useLink)(), { Link: m } = (0, Y.useRouterContext)(), c = u === "legacy" ? m : T, { defaultOpenKeys: h, menuItems: A, selectedKey: L } = (0, Y.useMenu)({ meta: o }), E = (0, Y.useTitle)(), S = (0, Y.useIsExistAuthentication)(), f = (0, Y.useTranslate)(), { hasDashboard: b } = (0, Y.useRefineContext)(), y = (0, Y.useActiveAuthProvider)(), { warnWhen: d, setWarnWhen: g } = (0, Y.useWarnAboutChange)(), { mutate: i } = (0, Y.useLogout)({ v3LegacyAuthProviderCompatible: !!(y != null && y.isLegacy) }), x = t ?? E ?? Lt, k = r(() => s ? 80 : 200, "drawerWidth"), v = { root: { display: "flex", color: "white", fontWeight: 500, "&:hover": { backgroundColor: "unset" }, "&[data-active]": { backgroundColor: "#ffffff1a", color: "white", fontWeight: 700, "&:hover": { backgroundColor: "#ffffff1a" } }, justifyContent: s && !a ? "center" : "flex-start" }, icon: { marginRight: s && !a ? 0 : 12 }, body: { display: s && !a ? "none" : "flex" } }, B = { disabled: !s || a, position: "right", withinPortal: true, withArrow: true, arrowSize: 8, arrowOffset: 12, offset: 4 }, p = r((z, H) => z.map((U) => {
          let { icon: ae, label: $, route: Te, name: de, children: re } = U, Ne = U.key === H, Le = re.length > 0, Se = Le ? {} : { component: c, to: Te };
          return V.default.createElement(Y.CanAccess, { key: U.key, resource: de.toLowerCase(), action: "list", params: { resource: U } }, V.default.createElement(O.Tooltip, { label: $, ...B }, V.default.createElement(O.NavLink, { key: U.key, label: s && !a ? null : $, icon: ae ?? Gn, active: Ne, childrenOffset: s && !a ? 0 : 12, defaultOpened: h.includes(U.key || ""), styles: v, ...Se }, Le && p(re, H))));
        }), "renderTreeView"), P = p(A, L), D = b ? V.default.createElement(Y.CanAccess, { resource: "dashboard", action: "list" }, V.default.createElement(O.Tooltip, { label: f("dashboard.title", "Dashboard"), ...B }, V.default.createElement(O.NavLink, { key: "dashboard", label: s && !a ? null : f("dashboard.title", "Dashboard"), icon: V.default.createElement(Me.IconDashboard, { size: 18 }), component: c, to: "/", active: L === "/", styles: v }))) : null, w = r(() => {
          d ? window.confirm(f("warnWhenUnsavedChanges", "Are you sure you want to leave? You have unsaved changes.")) && (g(false), i()) : i();
        }, "handleLogout"), I = S && V.default.createElement(O.Tooltip, { label: f("buttons.logout", "Logout"), ...B }, V.default.createElement(O.NavLink, { key: "logout", label: s && !a ? null : f("buttons.logout", "Logout"), icon: V.default.createElement(Me.IconPower, { size: 18 }), onClick: w, styles: v })), F = r(() => e ? e({ dashboard: D, logout: I, items: P, collapsed: s }) : V.default.createElement(V.default.Fragment, null, D, P, I), "renderSider");
        return V.default.createElement(V.default.Fragment, null, V.default.createElement(O.MediaQuery, { largerThan: "md", styles: { display: "none" } }, V.default.createElement(O.Box, { sx: { position: "fixed", top: 64, left: 0, zIndex: 1199 } }, V.default.createElement(O.ActionIcon, { color: "white", size: 36, sx: { borderRadius: "0 6px 6px 0", backgroundColor: "#2A132E", color: "white", "&:hover": { backgroundColor: "#2A132E" } }, onClick: () => l((z) => !z) }, V.default.createElement(Me.IconMenu2, null)))), V.default.createElement(O.MediaQuery, { largerThan: "md", styles: { display: "none" } }, V.default.createElement(O.Drawer, { opened: a, onClose: () => l(false), size: 200, zIndex: 1200, withCloseButton: false, styles: { drawer: { overflow: "hidden", backgroundColor: "#2A132E" } } }, V.default.createElement(O.Navbar.Section, { px: "xs" }, V.default.createElement(x, { collapsed: false })), V.default.createElement(O.Navbar.Section, { grow: true, component: O.ScrollArea, mx: "-xs", px: "xs" }, F()))), V.default.createElement(O.MediaQuery, { smallerThan: "md", styles: { display: "none" } }, V.default.createElement(O.Box, { sx: { width: k(), transition: "width 200ms ease, min-width 200ms ease", flexShrink: 0 } })), V.default.createElement(O.MediaQuery, { smallerThan: "md", styles: { display: "none" } }, V.default.createElement(O.Navbar, { width: { base: k() }, sx: { overflow: "hidden", transition: "width 200ms ease, min-width 200ms ease", backgroundColor: "#2A132E", position: "fixed", top: 0, height: "100vh" } }, V.default.createElement(O.Navbar.Section, { px: "xs" }, V.default.createElement(x, { collapsed: s })), V.default.createElement(O.Navbar.Section, { grow: true, mt: "sm", component: O.ScrollArea, mx: "-xs", px: "xs" }, F()), V.default.createElement(O.Navbar.Section, null, V.default.createElement(O.Button, { sx: { background: "rgba(0,0,0,.5)", borderRadius: 0, borderTop: "1px solid #ffffff1a" }, size: "md", variant: "gradient", fullWidth: true, onClick: () => n((z) => !z) }, s ? V.default.createElement(Me.IconChevronRight, null) : V.default.createElement(Me.IconChevronLeft, null))))));
      }, "Sider");
      var pt = C(__require("react"));
      var kt = require_dist3();
      var yo = __require("@mantine/core");
      var Jt = r(() => {
        let e = (0, kt.useActiveAuthProvider)(), { data: o } = (0, kt.useGetIdentity)({ v3LegacyAuthProviderCompatible: !!(e != null && e.isLegacy) });
        return o && (o.name || o.avatar) ? pt.default.createElement(yo.Header, { height: 50, py: 6, px: "sm" }, pt.default.createElement(yo.Group, { position: "right" }, pt.default.createElement(yo.Title, { order: 6 }, o == null ? void 0 : o.name), pt.default.createElement(yo.Avatar, { src: o == null ? void 0 : o.avatar, alt: o == null ? void 0 : o.name, radius: "xl" }))) : null;
      }, "Header");
      var jn = r(({ Sider: e, Header: o, Title: t, Footer: s, OffLayoutArea: n, children: a }) => go.default.createElement(At.Box, { sx: { display: "flex" } }, go.default.createElement(e ?? Xt, { Title: t }), go.default.createElement(At.Box, { sx: { display: "flex", flexDirection: "column", flex: 1, overflow: "auto" } }, go.default.createElement(o ?? Jt, null), go.default.createElement(At.Box, { component: "main", sx: (T) => ({ padding: T.spacing.sm, backgroundColor: T.colorScheme === "dark" ? T.colors.dark[8] : T.colors.gray[0], minHeight: "100vh" }) }, a), s && go.default.createElement(s, null)), n && go.default.createElement(n, null)), "Layout");
      var ut = C(__require("react"));
      var _o = require_dist3();
      var on = __require("@mantine/core");
      var Lt = r(({ collapsed: e }) => {
        let o = (0, _o.useRouterType)(), t = (0, _o.useLink)(), { Link: s } = (0, _o.useRouterContext)();
        return ut.default.createElement(o === "legacy" ? s : t, { to: "/" }, ut.default.createElement(on.Center, { p: "xs" }, e ? ut.default.createElement("img", { src: "https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine-mini.svg", alt: "Refine", style: { maxHeight: "38px" } }) : ut.default.createElement("img", { src: "https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine.svg", alt: "Refine", width: "140px" })));
      }, "Title");
      var xo = C(__require("react"));
      var It = __require("@mantine/core");
      var N = C(__require("react"));
      var q = require_dist3();
      var M = __require("@mantine/core");
      var Ue = __require("@tabler/icons");
      var $n = N.default.createElement(Ue.IconList, { size: 20 });
      var er = r(({ render: e, meta: o, Title: t }) => {
        let s = (0, M.useMantineTheme)(), [n, a] = (0, N.useState)(false), [l, u] = (0, N.useState)(false), T = (0, q.useRouterType)(), m = (0, q.useLink)(), { Link: c } = (0, q.useRouterContext)(), h = T === "legacy" ? c : m, { defaultOpenKeys: A, menuItems: L, selectedKey: E } = (0, q.useMenu)({ meta: o }), S = (0, q.useTitle)(), f = (0, q.useIsExistAuthentication)(), b = (0, q.useTranslate)(), { hasDashboard: y } = (0, q.useRefineContext)(), d = (0, q.useActiveAuthProvider)(), { warnWhen: g, setWarnWhen: i } = (0, q.useWarnAboutChange)(), { mutate: x } = (0, q.useLogout)({ v3LegacyAuthProviderCompatible: !!(d != null && d.isLegacy) }), k = t ?? S ?? or, v = r(() => n ? 80 : 200, "drawerWidth"), B = s.colorScheme === "dark" ? s.colors.dark[6] : s.colors.gray[2], p = { root: { display: "flex", marginTop: "12px", justifyContent: n && !l ? "center" : "flex-start" }, icon: { marginRight: n && !l ? 0 : 12 }, body: { display: n && !l ? "none" : "flex" } }, P = { disabled: !n || l, position: "right", withinPortal: true, withArrow: true, arrowSize: 8, arrowOffset: 12, offset: 4 }, D = r((U, ae) => U.map(($) => {
          let { icon: Te, label: de, route: re, name: Ne, children: Le } = $, Se = $.key === ae, Ve = Le.length > 0, _ = Ve ? {} : { component: h, to: re };
          return N.default.createElement(q.CanAccess, { key: $.key, resource: Ne.toLowerCase(), action: "list", params: { resource: $ } }, N.default.createElement(M.Tooltip, { label: de, ...P }, N.default.createElement(M.NavLink, { key: $.key, label: n && !l ? null : de, icon: Te ?? $n, active: Se, childrenOffset: n && !l ? 0 : 12, defaultOpened: A.includes($.key || ""), pl: n || l ? "12px" : "18px", styles: p, ..._ }, Ve && D(Le, ae))));
        }), "renderTreeView"), w = D(L, E), I = y ? N.default.createElement(q.CanAccess, { resource: "dashboard", action: "list" }, N.default.createElement(M.Tooltip, { label: b("dashboard.title", "Dashboard"), ...P }, N.default.createElement(M.NavLink, { key: "dashboard", label: n && !l ? null : b("dashboard.title", "Dashboard"), icon: N.default.createElement(Ue.IconDashboard, { size: 20 }), component: h, to: "/", active: E === "/", styles: p }))) : null, F = r(() => {
          g ? window.confirm(b("warnWhenUnsavedChanges", "Are you sure you want to leave? You have unsaved changes.")) && (i(false), x()) : x();
        }, "handleLogout"), z = f && N.default.createElement(M.Tooltip, { label: b("buttons.logout", "Logout"), ...P }, N.default.createElement(M.NavLink, { key: "logout", label: n && !l ? null : b("buttons.logout", "Logout"), icon: N.default.createElement(Ue.IconPower, { size: 20 }), pl: n || l ? "12px" : "18px", onClick: F, styles: p })), H = r(() => e ? e({ dashboard: I, logout: z, items: w, collapsed: n }) : N.default.createElement(N.default.Fragment, null, I, w, z), "renderSider");
        return N.default.createElement(N.default.Fragment, null, N.default.createElement(M.MediaQuery, { largerThan: "md", styles: { display: "none" } }, N.default.createElement(M.Box, { sx: { position: "fixed", top: 16, left: 16, zIndex: 1199 } }, N.default.createElement(M.ActionIcon, { color: "gray", variant: "filled", size: 32, onClick: () => u((U) => !U) }, N.default.createElement(Ue.IconMenu2, null)))), N.default.createElement(M.MediaQuery, { largerThan: "md", styles: { display: "none" } }, N.default.createElement(M.Drawer, { opened: l, onClose: () => u(false), size: 200, zIndex: 1200, withCloseButton: false, styles: { drawer: { overflow: "hidden" } } }, N.default.createElement(M.Navbar.Section, { pl: 8, sx: { height: "64px", display: "flex", alignItems: "center", paddingLeft: "10px", borderBottom: `1px solid ${B}` } }, N.default.createElement(k, { collapsed: false })), N.default.createElement(M.Navbar.Section, { component: M.ScrollArea, grow: true, mx: "-xs", px: "xs" }, H()))), N.default.createElement(M.MediaQuery, { smallerThan: "md", styles: { display: "none" } }, N.default.createElement(M.Box, { sx: { width: v(), transition: "width 200ms ease, min-width 200ms ease", flexShrink: 0 } })), N.default.createElement(M.MediaQuery, { smallerThan: "md", styles: { display: "none" } }, N.default.createElement(M.Navbar, { width: { base: v() }, sx: { overflow: "hidden", transition: "width 200ms ease, min-width 200ms ease", position: "fixed", top: 0, height: "100vh", borderRight: 0, zIndex: 199 } }, N.default.createElement(M.Flex, { h: "64px", pl: n ? 0 : "16px", align: "center", justify: n ? "center" : "flex-start", sx: { borderBottom: `1px solid ${B}` } }, N.default.createElement(k, { collapsed: n })), N.default.createElement(M.Navbar.Section, { grow: true, component: M.ScrollArea, mx: "-xs", px: "xs", sx: { ".mantine-ScrollArea-viewport": { borderRight: `1px solid ${B}`, borderBottom: `1px solid ${B}` } } }, H()), N.default.createElement(M.Navbar.Section, { sx: { borderRadius: 0, borderRight: `1px solid ${B}` } }, N.default.createElement(M.Button, { variant: "subtle", color: "gray", size: "md", fullWidth: true, sx: { border: "none" }, onClick: () => a((U) => !U) }, n ? N.default.createElement(Ue.IconIndentIncrease, { size: 16 }) : N.default.createElement(Ue.IconIndentDecrease, { size: 16 }))))));
      }, "ThemedSider");
      var mt = C(__require("react"));
      var Et = require_dist3();
      var Ze = __require("@mantine/core");
      var tr = r(() => {
        let e = (0, Ze.useMantineTheme)(), o = (0, Et.useActiveAuthProvider)(), { data: t } = (0, Et.useGetIdentity)({ v3LegacyAuthProviderCompatible: !!(o != null && o.isLegacy) }), s = e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[2];
        return mt.default.createElement(Ze.Header, { zIndex: 199, height: 64, py: 6, px: "sm", sx: { borderBottom: `1px solid ${s}` } }, mt.default.createElement(Ze.Group, { position: "right", align: "center", sx: { height: "100%" } }, mt.default.createElement(Ze.Title, { order: 6, sx: { cursor: "pointer" } }, t == null ? void 0 : t.name), mt.default.createElement(Ze.Avatar, { src: t == null ? void 0 : t.avatar, alt: t == null ? void 0 : t.name, radius: "xl" })));
      }, "ThemedHeader");
      var Rn = r(({ Sider: e, Header: o, Title: t, Footer: s, OffLayoutArea: n, children: a }) => xo.default.createElement(It.Box, { sx: { display: "flex" } }, xo.default.createElement(e ?? er, { Title: t }), xo.default.createElement(It.Box, { sx: { display: "flex", flexDirection: "column", flex: 1, overflow: "auto" } }, xo.default.createElement(o ?? tr, null), xo.default.createElement(It.Box, { component: "main", sx: (T) => ({ padding: T.spacing.sm }) }, a), s && xo.default.createElement(s, null)), n && xo.default.createElement(n, null)), "ThemedLayout");
      var ho = C(__require("react"));
      var Xo = require_dist3();
      var Fo = __require("@mantine/core");
      var Yn = "refine Project";
      var qn = ho.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, ho.default.createElement("path", { d: "M12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9Z", fill: "currentColor" }), ho.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18V6Z", fill: "currentColor" }));
      var or = r(({ collapsed: e, icon: o = qn, text: t = Yn, wrapperStyles: s = {} }) => {
        let n = (0, Fo.useMantineTheme)(), a = (0, Xo.useRouterType)(), l = (0, Xo.useLink)(), { Link: u } = (0, Xo.useRouterContext)();
        return ho.default.createElement(a === "legacy" ? u : l, { to: "/", style: { all: "unset" } }, ho.default.createElement(Fo.Center, { style: { cursor: "pointer", display: "flex", alignItems: "center", justifyContent: e ? "center" : "flex-start", gap: "8px", ...s } }, ho.default.createElement(Fo.Text, { lh: 0, fz: "inherit", color: n.colorScheme === "dark" ? "brand.5" : "brand.6" }, o), !e && ho.default.createElement(Fo.Text, { fz: "inherit", color: n.colorScheme === "dark" ? "white" : "black" }, t)));
      }, "ThemedTitle");
      var no = C(__require("react"));
      var zt = __require("@mantine/core");
      var G = C(__require("react"));
      var K = require_dist3();
      var j = __require("@mantine/core");
      var et = __require("@tabler/icons");
      var Dt = __require("react");
      var tn = __require("@mantine/form");
      var rn = C(__require("lodash/get"));
      var nn = C(__require("lodash/has"));
      var sn = C(__require("lodash/set"));
      var _e = require_dist3();
      var ct = r(({ refineCoreProps: e, disableServerSideValidation: o = false, ...t } = {}) => {
        let { options: s } = (0, _e.useRefineContext)(), n = (s == null ? void 0 : s.disableServerSideValidation) || o, a = (0, _e.useTranslate)(), l = e == null ? void 0 : e.warnWhenUnsavedChanges, { warnWhenUnsavedChanges: u, setWarnWhen: T } = (0, _e.useWarnAboutChange)(), m = l ?? u, c = (0, tn.useForm)({ ...t }), { setValues: h, onSubmit: A, isDirty: L, resetDirty: E, setFieldError: S, values: f } = c, b = (0, _e.useForm)({ ...e, onMutationError: (B, p, P) => {
          var w, I;
          if (n) {
            (w = e == null ? void 0 : e.onMutationError) == null || w.call(e, B, p, P);
            return;
          }
          let D = B == null ? void 0 : B.errors;
          for (let F in D) {
            let z = D[F], H = "";
            Array.isArray(z) && (H = z.join(" ")), typeof z == "string" && (H = z), typeof z == "boolean" && (H = "Field is not valid."), typeof z == "object" && "key" in z && (H = a(z.key, z.message)), S(F, H);
          }
          (I = e == null ? void 0 : e.onMutationError) == null || I.call(e, B, p, P);
        } }), { queryResult: y, formLoading: d, onFinish: g, onFinishAutoSave: i } = b;
        (0, Dt.useEffect)(() => {
          var B;
          if (typeof (y == null ? void 0 : y.data) < "u") {
            let p = {}, P = (0, _e.flattenObjectKeys)(t.initialValues ?? {}), D = ((B = y == null ? void 0 : y.data) == null ? void 0 : B.data) ?? {};
            Object.keys(P).forEach((w) => {
              let I = (0, nn.default)(D, w), F = (0, rn.default)(D, w);
              I && (0, sn.default)(p, w, F);
            }), h(p), E(p);
          }
        }, [y == null ? void 0 : y.data]);
        let x = L();
        (0, Dt.useEffect)(() => {
          m && T(x);
        }, [x]), (0, Dt.useEffect)(() => {
          if (x && (e != null && e.autoSave) && f) {
            T(false);
            let B = t.transformValues ? t.transformValues(f) : f;
            i(B);
          }
        }, [f]);
        let k = r((B, p) => async (P) => (T(false), await A(B, p)(P)), "onSubmit");
        return { ...c, onSubmit: k, refineCore: b, saveButtonProps: { disabled: d, onClick: (B) => {
          k(g, () => false)(B);
        } } };
      }, "useForm");
      var rr = __require("react");
      var ve = require_dist3();
      var Vt = C(__require("react"));
      var Kn = r(({ modalProps: e, refineCoreProps: o, syncWithLocation: t, ...s } = {}) => {
        var Se, Ve;
        let [n, a] = Vt.default.useState(false), l = (0, ve.useInvalidate)(), u = (0, ve.useTranslate)(), { resource: T, action: m, autoSave: c, invalidates: h, dataProviderName: A } = o ?? {}, { defaultVisible: L = false, autoSubmitClose: E = true, autoResetForm: S = true } = e ?? {}, { resource: f, action: b, identifier: y } = (0, ve.useResource)(T), d = (0, ve.useParsed)(), g = (0, ve.useGo)(), i = (0, ve.useUserFriendlyName)(), x = m ?? b ?? "", k = !(typeof t == "object" && (t == null ? void 0 : t.syncId) === false), v = typeof t == "object" && "key" in t ? t.key : f && x && t ? `modal-${y}-${x}` : void 0, B = ct({ refineCoreProps: { ...o, meta: { ...v ? { [v]: void 0 } : {}, ...o == null ? void 0 : o.meta } }, ...s }), { reset: p, refineCore: { onFinish: P, id: D, setId: w, autoSaveProps: I }, saveButtonProps: F, onSubmit: z } = B, { visible: H, show: U, close: ae } = (0, ve.useModal)({ defaultVisible: L });
        Vt.default.useEffect(() => {
          var _, je, eo, io;
          if (n === false && v) {
            let oo = (je = (_ = d == null ? void 0 : d.params) == null ? void 0 : _[v]) == null ? void 0 : je.open;
            if (typeof oo == "boolean" ? oo && U() : typeof oo == "string" && oo === "true" && U(), k) {
              let Tt = (io = (eo = d == null ? void 0 : d.params) == null ? void 0 : eo[v]) == null ? void 0 : io.id;
              Tt && (w == null || w(Tt));
            }
            a(true);
          }
        }, [v, d, k, w]), Vt.default.useEffect(() => {
          var _;
          n === true && (H && v ? g({ query: { [v]: { ...(_ = d == null ? void 0 : d.params) == null ? void 0 : _[v], open: true, ...k && D && { id: D } } }, options: { keepQuery: true }, type: "replace" }) : v && !H && g({ query: { [v]: void 0 }, options: { keepQuery: true }, type: "replace" }));
        }, [D, H, U, v, k]);
        let $ = r(async (_) => {
          await P(_), E && ae(), S && p();
        }, "submit"), { warnWhen: Te, setWarnWhen: de } = (0, ve.useWarnAboutChange)(), re = (0, rr.useCallback)(() => {
          if (I.status === "success" && (c != null && c.invalidateOnClose) && l({ id: D, invalidates: h || ["list", "many", "detail"], dataProviderName: A, resource: y }), Te)
            if (window.confirm(u("warnWhenUnsavedChanges", "Are you sure you want to leave? You have unsaved changes.")))
              de(false);
            else
              return;
          w == null || w(void 0), ae();
        }, [Te, I.status]), Ne = (0, rr.useCallback)((_) => {
          typeof _ < "u" && (w == null || w(_)), (!(x === "edit" || x === "clone") || (typeof _ < "u" || typeof D < "u")) && U();
        }, [D]), Le = u(`${y}.titles.${m}`, void 0, `${i(`${m} ${((Se = f == null ? void 0 : f.meta) == null ? void 0 : Se.label) ?? ((Ve = f == null ? void 0 : f.options) == null ? void 0 : Ve.label) ?? (f == null ? void 0 : f.label) ?? y}`, "singular")}`);
        return { modal: { submit: $, close: re, show: Ne, visible: H, title: Le }, ...B, saveButtonProps: { ...F, onClick: (_) => z($)(_) } };
      }, "useModalForm");
      var an = __require("react");
      var Zn = r(({ stepsProps: e, ...o } = {}) => {
        let { defaultStep: t = 0, isBackValidate: s = false } = e ?? {}, [n, a] = (0, an.useState)(t), l = ct({ ...o }), { validate: u } = l, T = r((c) => {
          let h = c;
          c < 0 && (h = 0), a(h);
        }, "go");
        return { ...l, steps: { currentStep: n, gotoStep: r((c) => {
          if (c === n)
            return;
          if (c < n && !s) {
            T(c);
            return;
          }
          !u().hasErrors && T(c);
        }, "gotoStep") } };
      }, "useStepsForm");
      var ln = require_dist3();
      var _n = r((e) => {
        let { queryResult: o, defaultValueQueryResult: t, onSearch: s, options: n } = (0, ln.useSelect)(e);
        return { selectProps: { data: n, onSearchChange: s, searchable: true, filterDataOnExactSearchMatch: true, clearable: true }, queryResult: o, defaultValueQueryResult: t };
      }, "useSelect");
      var dn = __require("react");
      var Jo = C(__require("react"));
      var So = Jo.default.createContext({ siderCollapsed: false, mobileSiderOpen: false, setSiderCollapsed: () => {
      }, setMobileSiderOpen: () => {
      } });
      var Nt = r(({ children: e, initialSiderCollapsed: o }) => {
        let [t, s] = (0, Jo.useState)(o ?? false), [n, a] = (0, Jo.useState)(false);
        return Jo.default.createElement(So.Provider, { value: { siderCollapsed: t, mobileSiderOpen: n, setSiderCollapsed: s, setMobileSiderOpen: a } }, e);
      }, "ThemedLayoutContextProvider");
      var Xn = r(() => {
        let { mobileSiderOpen: e, siderCollapsed: o, setMobileSiderOpen: t, setSiderCollapsed: s } = (0, dn.useContext)(So);
        return { siderVisible: e, setSiderVisible: t, drawerSiderVisible: o, setDrawerSiderVisible: s };
      }, "useSiderVisible");
      var pn = __require("react");
      var ft = r(() => {
        let { mobileSiderOpen: e, siderCollapsed: o, setMobileSiderOpen: t, setSiderCollapsed: s } = (0, pn.useContext)(So);
        return { mobileSiderOpen: e, siderCollapsed: o, setMobileSiderOpen: t, setSiderCollapsed: s };
      }, "useThemedLayoutContext");
      var Jn = G.default.createElement(et.IconList, { size: 20 });
      var nr = r(({ render: e, meta: o, Title: t, activeItemDisabled: s = false }) => {
        let n = (0, j.useMantineTheme)(), { siderCollapsed: a, mobileSiderOpen: l, setMobileSiderOpen: u } = ft(), T = (0, K.useRouterType)(), m = (0, K.useLink)(), { Link: c } = (0, K.useRouterContext)(), h = T === "legacy" ? c : m, { defaultOpenKeys: A, menuItems: L, selectedKey: E } = (0, K.useMenu)({ meta: o }), S = (0, K.useTitle)(), f = (0, K.useIsExistAuthentication)(), b = (0, K.useTranslate)(), { hasDashboard: y } = (0, K.useRefineContext)(), d = (0, K.useActiveAuthProvider)(), { warnWhen: g, setWarnWhen: i } = (0, K.useWarnAboutChange)(), { mutate: x } = (0, K.useLogout)({ v3LegacyAuthProviderCompatible: !!(d != null && d.isLegacy) }), k = t ?? S ?? We, v = r(() => a ? 80 : 200, "drawerWidth"), B = n.colorScheme === "dark" ? n.colors.dark[6] : n.colors.gray[2], p = { root: { display: "flex", marginTop: "12px", justifyContent: a && !l ? "center" : "flex-start" }, icon: { marginRight: a && !l ? 0 : 12 }, body: { display: a && !l ? "none" : "flex" } }, P = { disabled: !a || l, position: "right", withinPortal: true, withArrow: true, arrowSize: 8, arrowOffset: 12, offset: 4 }, D = r((U, ae) => U.map(($) => {
          let { icon: Te, label: de, route: re, name: Ne, children: Le } = $, Se = $.key === ae, Ve = Le.length > 0, _ = Ve ? {} : { component: h, to: re }, je = s && Se ? { pointerEvents: "none" } : {};
          return G.default.createElement(K.CanAccess, { key: $.key, resource: Ne.toLowerCase(), action: "list", params: { resource: $ } }, G.default.createElement(j.Tooltip, { label: de, ...P }, G.default.createElement(j.NavLink, { key: $.key, label: a && !l ? null : de, icon: Te ?? Jn, active: Se, childrenOffset: a && !l ? 0 : 12, defaultOpened: A.includes($.key || ""), pl: a || l ? "12px" : "18px", styles: p, style: je, ..._ }, Ve && D(Le, ae))));
        }), "renderTreeView"), w = D(L, E), I = y ? G.default.createElement(K.CanAccess, { resource: "dashboard", action: "list" }, G.default.createElement(j.Tooltip, { label: b("dashboard.title", "Dashboard"), ...P }, G.default.createElement(j.NavLink, { key: "dashboard", label: a && !l ? null : b("dashboard.title", "Dashboard"), icon: G.default.createElement(et.IconDashboard, { size: 20 }), component: h, to: "/", active: E === "/", styles: p }))) : null, F = r(() => {
          g ? window.confirm(b("warnWhenUnsavedChanges", "Are you sure you want to leave? You have unsaved changes.")) && (i(false), x()) : x();
        }, "handleLogout"), z = f && G.default.createElement(j.Tooltip, { label: b("buttons.logout", "Logout"), ...P }, G.default.createElement(j.NavLink, { key: "logout", label: a && !l ? null : b("buttons.logout", "Logout"), icon: G.default.createElement(et.IconPower, { size: 20 }), pl: a || l ? "12px" : "18px", onClick: F, styles: p })), H = r(() => e ? e({ dashboard: I, logout: z, items: w, collapsed: a }) : G.default.createElement(G.default.Fragment, null, I, w, z), "renderSider");
        return G.default.createElement(G.default.Fragment, null, G.default.createElement(j.MediaQuery, { largerThan: "md", styles: { display: "none" } }, G.default.createElement(j.Drawer, { opened: l, onClose: () => u(false), size: 200, zIndex: 1200, withCloseButton: false, styles: { drawer: { overflow: "hidden" } } }, G.default.createElement(j.Navbar.Section, { pl: 8, sx: { height: "64px", display: "flex", alignItems: "center", paddingLeft: "10px", borderBottom: `1px solid ${B}` } }, G.default.createElement(k, { collapsed: false })), G.default.createElement(j.Navbar.Section, { component: j.ScrollArea, grow: true, mx: "-xs", px: "xs" }, H()))), G.default.createElement(j.MediaQuery, { smallerThan: "md", styles: { display: "none" } }, G.default.createElement(j.Box, { sx: { width: v(), transition: "width 200ms ease, min-width 200ms ease", flexShrink: 0 } })), G.default.createElement(j.MediaQuery, { smallerThan: "md", styles: { display: "none" } }, G.default.createElement(j.Navbar, { width: { base: v() }, sx: { overflow: "hidden", transition: "width 200ms ease, min-width 200ms ease", position: "fixed", top: 0, height: "100vh", borderRight: 0, zIndex: 199 } }, G.default.createElement(j.Flex, { h: "64px", pl: a ? 0 : "16px", align: "center", justify: a ? "center" : "flex-start", sx: { borderBottom: `1px solid ${B}` } }, G.default.createElement(k, { collapsed: a })), G.default.createElement(j.Navbar.Section, { grow: true, component: j.ScrollArea, mx: "-xs", px: "xs", sx: { ".mantine-ScrollArea-viewport": { borderRight: `1px solid ${B}`, borderBottom: `1px solid ${B}` } } }, H()))));
      }, "ThemedSiderV2");
      var wo = C(__require("react"));
      var rt = require_dist3();
      var Ge = __require("@mantine/core");
      var Xe = C(__require("react"));
      var ot = __require("@mantine/core");
      var tt = __require("@tabler/icons");
      var sr = r(() => {
        let { siderCollapsed: e, setSiderCollapsed: o, mobileSiderOpen: t, setMobileSiderOpen: s } = ft();
        return Xe.default.createElement(Xe.default.Fragment, null, Xe.default.createElement(ot.MediaQuery, { smallerThan: "md", styles: { display: "none" } }, Xe.default.createElement(ot.ActionIcon, { variant: "subtle", color: "gray", sx: { border: "none" }, size: "lg", onClick: () => o(!e) }, e ? Xe.default.createElement(tt.IconIndentIncrease, { size: 20 }) : Xe.default.createElement(tt.IconIndentDecrease, { size: 20 }))), Xe.default.createElement(ot.MediaQuery, { largerThan: "md", styles: { display: "none" } }, Xe.default.createElement(ot.ActionIcon, { variant: "subtle", color: "gray", sx: { border: "none" }, size: "lg", onClick: () => s(!t) }, Xe.default.createElement(tt.IconMenu2, { size: 20 }))));
      }, "HamburgerMenu");
      var ir = r(({ isSticky: e, sticky: o }) => {
        let t = (0, Ge.useMantineTheme)(), s = (0, rt.useActiveAuthProvider)(), { data: n } = (0, rt.useGetIdentity)({ v3LegacyAuthProviderCompatible: !!(s != null && s.isLegacy) }), a = t.colorScheme === "dark" ? t.colors.dark[6] : t.colors.gray[2], l = {};
        return (0, rt.pickNotDeprecated)(o, e) && (l = { position: "sticky", top: 0, zIndex: 1 }), wo.default.createElement(Ge.Header, { zIndex: 199, height: 64, py: 6, px: "sm", sx: { borderBottom: `1px solid ${a}`, ...l } }, wo.default.createElement(Ge.Flex, { align: "center", justify: "space-between", sx: { height: "100%" } }, wo.default.createElement(sr, null), wo.default.createElement(Ge.Flex, { align: "center", gap: "sm" }, (n == null ? void 0 : n.name) && wo.default.createElement(Ge.Title, { order: 6 }, n == null ? void 0 : n.name), (n == null ? void 0 : n.avatar) && wo.default.createElement(Ge.Avatar, { src: n == null ? void 0 : n.avatar, alt: n == null ? void 0 : n.name, radius: "xl" }))));
      }, "ThemedHeaderV2");
      var es = r(({ Sider: e, Header: o, Title: t, Footer: s, OffLayoutArea: n, initialSiderCollapsed: a, children: l }) => no.default.createElement(Nt, { initialSiderCollapsed: a }, no.default.createElement(zt.Box, { sx: { display: "flex" } }, no.default.createElement(e ?? nr, { Title: t }), no.default.createElement(zt.Box, { sx: { display: "flex", flexDirection: "column", flex: 1 } }, no.default.createElement(o ?? ir, null), no.default.createElement(zt.Box, { component: "main", sx: (m) => ({ padding: m.spacing.sm }) }, l), s && no.default.createElement(s, null)), n && no.default.createElement(n, null))), "ThemedLayoutV2");
      var bo = C(__require("react"));
      var nt = require_dist3();
      var Lo = __require("@mantine/core");
      var os = "refine Project";
      var ts = bo.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, bo.default.createElement("path", { d: "M12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9Z", fill: "currentColor" }), bo.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18V6Z", fill: "currentColor" }));
      var We = r(({ collapsed: e, icon: o = ts, text: t = os, wrapperStyles: s = {} }) => {
        let n = (0, Lo.useMantineTheme)(), a = (0, nt.useRouterType)(), l = (0, nt.useLink)(), { Link: u } = (0, nt.useRouterContext)();
        return bo.default.createElement(a === "legacy" ? u : l, { to: "/", style: { all: "unset" } }, bo.default.createElement(Lo.Center, { style: { cursor: "pointer", display: "flex", alignItems: "center", justifyContent: e ? "center" : "flex-start", gap: "8px", ...s } }, bo.default.createElement(Lo.Text, { lh: 0, fz: "inherit", color: n.colorScheme === "dark" ? "brand.5" : "brand.6" }, o), !e && bo.default.createElement(Lo.Text, { fz: "inherit", color: n.colorScheme === "dark" ? "white" : "black" }, t)));
      }, "ThemedTitleV2");
      var He = C(__require("react"));
      var Ut = require_dist3();
      var un = __require("@mantine/core");
      var Bo = __require("@tabler/icons");
      var _t = r(({ status: e, elements: { success: o = He.default.createElement(Mt, { key: "autoSave.success", defaultMessage: "saved", icon: He.default.createElement(Bo.IconCircleCheck, { size: "18px" }) }), error: t = He.default.createElement(Mt, { key: "autoSave.error", defaultMessage: "auto save failure", icon: He.default.createElement(Bo.IconExclamationCircle, { size: "18px" }) }), loading: s = He.default.createElement(Mt, { key: "autoSave.loading", defaultMessage: "saving...", icon: He.default.createElement(Bo.IconRefresh, { size: "18px" }) }), idle: n = He.default.createElement(Mt, { key: "autoSave.idle", defaultMessage: "waiting for changes", icon: He.default.createElement(Bo.IconDots, { size: "18px" }) }) } = {} }) => He.default.createElement(Ut.AutoSaveIndicator, { status: e, elements: { success: o, error: t, loading: s, idle: n } }), "AutoSaveIndicator");
      var Mt = r(({ key: e, defaultMessage: o, icon: t }) => {
        let s = (0, Ut.useTranslate)();
        return He.default.createElement(un.Text, { size: "sm", display: "flex", align: "center", mr: "2", color: "gray" }, s(e, o), He.default.createElement("span", { style: { position: "relative", top: "3px", marginLeft: "3px" } }, t));
      }, "Message");
      var te = C(__require("react"));
      var Je = __require("@mantine/notifications");
      var Fe = __require("@mantine/core");
      var so = __require("@tabler/icons");
      var rs = r(() => {
        let e = [], o = r((a) => e.includes(a), "isNotificationActive"), t = r((a) => {
          a && e.indexOf(a) === -1 && e.push(a);
        }, "addNotification"), s = r((a) => {
          if (a) {
            let l = e.indexOf(a);
            l > -1 && e.splice(l, 1);
          }
        }, "removeNotification");
        return { open: ({ message: a, description: l, type: u, undoableTimeout: T, key: m, cancelMutation: c }) => {
          u === "progress" ? o(m) ? (0, Je.updateNotification)({ id: m, message: te.default.createElement(Fe.Group, { position: "apart", noWrap: true }, te.default.createElement(Fe.Group, { spacing: "xs", position: "center" }, te.default.createElement(gt, { undoableTimeout: T ?? 0 }), te.default.createElement(Fe.Box, null, te.default.createElement(Fe.Text, null, a), l && te.default.createElement(Fe.Text, null, l))), te.default.createElement(Fe.ActionIcon, { variant: "default", onClick: () => {
            c == null || c(), m && (s(m), (0, Je.hideNotification)(m));
          } }, te.default.createElement(so.IconRotate2, { size: 18 }))), styles: { root: { paddingLeft: "8px", paddingTop: "0px", paddingBottom: "0px", "&::before": { display: "none" } } }, disallowClose: true, autoClose: false }) : (t(m), (0, Je.showNotification)({ id: m, message: te.default.createElement(Fe.Group, { position: "apart", noWrap: true }, te.default.createElement(Fe.Group, { spacing: "xs", position: "center" }, te.default.createElement(gt, { undoableTimeout: T ?? 0 }), te.default.createElement(Fe.Box, null, te.default.createElement(Fe.Text, null, a), l && te.default.createElement(Fe.Text, null, l))), te.default.createElement(Fe.ActionIcon, { variant: "default", onClick: () => {
            c == null || c(), m && (s(m), (0, Je.hideNotification)(m));
          } }, te.default.createElement(so.IconRotate2, { size: 18 }))), styles: { root: { paddingLeft: "8px", paddingTop: "0px", paddingBottom: "0px", "&::before": { display: "none" } } }, disallowClose: true, autoClose: false })) : o(m) ? (0, Je.updateNotification)({ id: m, color: u === "success" ? "primary" : "red", icon: u === "success" ? te.default.createElement(so.IconCheck, { size: 18 }) : te.default.createElement(so.IconX, { size: 18 }), message: a, title: l, autoClose: 5e3 }) : (t(m), (0, Je.showNotification)({ color: u === "success" ? "primary" : "red", icon: u === "success" ? te.default.createElement(so.IconCheck, { size: 18 }) : te.default.createElement(so.IconX, { size: 18 }), message: a, title: l, onClose: () => {
            s(m);
          }, autoClose: 5e3 }));
        }, close: (a) => {
          s(a), (0, Je.hideNotification)(a);
        } };
      }, "notificationProvider");
      var cn = { fontFamily: ["Montserrat", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(","), colors: { primary: ["#F1FBE9", "#D8F4C3", "#BFED9C", "#A7E675", "#8EDE4E", "#75D728", "#5DAC20", "#468118", "#2F5610", "#172B08"] }, black: "#626262", primaryColor: "primary", defaultRadius: 6, headings: { fontFamily: ["Montserrat", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(",") }, components: { Table: { styles: (e) => e.colorScheme === "light" ? { root: { "thead>tr>th": { backgroundColor: "#fafafa", padding: "16px 4px" }, "thead>tr>th:first-of-type": { borderTopLeftRadius: e.defaultRadius }, "thead>tr>th:last-of-type": { borderTopRightRadius: e.defaultRadius }, "tbody>tr>td": { borderBottom: "1px solid #f0f0f0" } } } : { root: {} } } } };
      var ns = { colorScheme: "light", ...cn };
      var ss = { colorScheme: "dark", ...cn };
      var mn = { Blue: { colors: ["#E7F5FF", "#D0EBFF", "#A5D8FF", "#74C0FC", "#4DABF7", "#339AF0", "#228BE6", "#1C7ED6", "#1971C2", "#1864AB"] }, Purple: { colors: ["#F3F0FF", "#E5DBFF", "#D0BFFF", "#B197FC", "#9775FA", "#845EF7", "#7950F2", "#7048E8", "#6741D9", "#5F3DC4"] }, Magenta: { colors: ["#FFF0F6", "#FFDEEB", "#FCC2D7", "#FAA2C1", "#F783AC", "#F06595", "#E64980", "#D6336C", "#C2255C", "#A61E4D"] }, Red: { colors: ["#FFF5F5", "#FFE3E3", "#FFC9C9", "#FFA8A8", "#FF8787", "#FF6B6B", "#FA5252", "#F03E3E", "#E03131", "#C92A2A"] }, Orange: { colors: ["#FFF4E6", "#FFE8CC", "#FFD8A8", "#FFC078", "#FFA94D", "#FF922B", "#FD7E14", "#F76707", "#E8590C", "#D9480F"] }, Yellow: { colors: ["#FFF9DB", "#FFF3BF", "#FFEC99", "#FFE066", "#FFD43B", "#FCC419", "#FAB005", "#F59F00", "#F08C00", "#E67700"] }, Green: { colors: ["#EBFBEE", "#D3F9D8", "#B2F2BB", "#8CE99A", "#69DB7C", "#51CF66", "#40C057", "#37B24D", "#2F9E44", "#2B8A3E"] } };
      var is = Object.keys(mn).reduce((e, o) => {
        let t = o;
        return { ...e, [t]: { globalStyles: (s) => ({ body: { backgroundColor: s.colorScheme === "dark" ? s.colors.dark[8] : s.colors.gray[0] } }), colors: { brand: mn[t].colors }, primaryColor: "brand" } };
      }, {});
    }
  });

  // ../react-table/dist/index.js
  var require_dist6 = __commonJS({
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

  // src/inferencers/mantine/index.tsx
  var import_react8 = __toESM(__require("react"));
  var import_core11 = __toESM(require_dist3());

  // src/inferencers/mantine/show.tsx
  var import_mantine = __toESM(require_dist5());
  var import_core7 = __require("@mantine/core");

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

  // src/inferencers/mantine/error.tsx
  var import_react6 = __toESM(__require("react"));
  var import_core5 = __require("@mantine/core");
  var import_icons = __require("@tabler/icons");
  var ErrorComponent = /* @__PURE__ */ __name(({
    error
  }) => {
    if (error) {
      return /* @__PURE__ */ import_react6.default.createElement(import_core5.Center, { style: { minHeight: 300 } }, /* @__PURE__ */ import_react6.default.createElement(import_core5.Alert, { title: "Error", color: "red", icon: /* @__PURE__ */ import_react6.default.createElement(import_icons.IconAlertCircle, null) }, /* @__PURE__ */ import_react6.default.createElement("div", { dangerouslySetInnerHTML: { __html: error ?? "" } })));
    }
    return null;
  }, "ErrorComponent");

  // src/inferencers/mantine/loading.tsx
  var import_react7 = __toESM(__require("react"));
  var import_core6 = __require("@mantine/core");
  var LoadingComponent = /* @__PURE__ */ __name(() => {
    return /* @__PURE__ */ import_react7.default.createElement(import_core6.LoadingOverlay, { visible: true });
  }, "LoadingComponent");

  // src/inferencers/mantine/show.tsx
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
      ["IResourceComponentsProps", "@refinedev/core"],
      ["useShow", "@refinedev/core"],
      ["Show", "@refinedev/mantine"],
      ["Title", "@mantine/core"]
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
            ["TagField", "@refinedev/mantine"],
            ["Group", "@mantine/core"]
          );
          return jsx`
                <Title my="xs" order={5}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Title>
                {${variableIsLoading} && ${variableDataLength} ? <>Loading...</> : (
                    <>
                    ${(() => {
            var _a, _b;
            if (field.relationInfer) {
              if ((_a = field.relationInfer) == null ? void 0 : _a.accessor) {
                if (Array.isArray(field.relationInfer.accessor)) {
                  return `Not Handled.`;
                } else {
                  const mapItemName = toSingular(
                    (_b = field.resource) == null ? void 0 : _b.name
                  );
                  const val = accessor(
                    mapItemName,
                    void 0,
                    field.relationInfer.accessor
                  );
                  return `
                                    {record?.${field.key}?.length ? <Group spacing="xs">
                                        {${variableName}?.data?.map((${mapItemName}: any) => <TagField key={${val}} value={${val}} />)}
                                    </Group> : <></>}
                                    `;
                }
              } else {
                return `Not Handled.`;
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
                <Title my="xs" order={5}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Title>
                <TextField value={${accessor(
            recordName,
            field.key,
            field.accessor
          )}} />
                `;
        }
        return jsx`
                <Title my="xs" order={5}>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</Title>
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
        imports.push(["TextField", "@refinedev/mantine"]);
        if (field.multiple) {
          imports.push(
            ["TagField", "@refinedev/mantine"],
            ["Group", "@mantine/core"]
          );
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Title my="xs" order={5}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Title>
                <Group spacing="xs">
                    {${accessor(recordName, field.key)}?.map((item: any) => (
                        <TagField value={${val}} key={${val}} />
                    ))}
                </Group>
            `;
        }
        return jsx`
                <Title my="xs" order={5}>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</Title>
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
        imports.push(["Image", "@mantine/core"]);
        if (field.multiple) {
          imports.push(["Group", "@mantine/core"]);
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Title my="xs" order={5}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Title>
                <Group spacing="xs">
                    {${accessor(recordName, field.key)}?.map((item: any) => (
                        <Image sx={{ maxWidth: 200 }} src={${val}} key={${val}} />
                    ))}
                </Group>
            `;
        }
        return jsx`
                <Title my="xs" order={5}>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</Title>
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
        imports.push(["EmailField", "@refinedev/mantine"]);
        if (field.multiple) {
          imports.push(
            ["TagField", "@refinedev/mantine"],
            ["Group", "@mantine/core"]
          );
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Title my="xs" order={5}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Title>
                <Group spacing="xs">
                    {${accessor(recordName, field.key)}?.map((item: any) => (
                        <TagField value={${val}} key={${val}} />
                    ))}
                </Group>
            `;
        }
        return jsx`
                <Title my="xs" order={5}>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</Title>
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
        imports.push(["UrlField", "@refinedev/mantine"]);
        if (field.multiple) {
          imports.push(
            ["TagField", "@refinedev/mantine"],
            ["Group", "@mantine/core"]
          );
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Title my="xs" order={5}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Title>
                <Group spacing="xs">
                    {${accessor(recordName, field.key)}?.map((item: any) => (
                        <TagField value={${val}} key={${val}} />
                    ))}
                </Group>
            `;
        }
        return jsx`
                <Title my="xs" order={5}>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</Title>
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
        imports.push(["BooleanField", "@refinedev/mantine"]);
        if (field.multiple) {
          imports.push(
            ["TagField", "@refinedev/mantine"],
            ["Group", "@mantine/core"]
          );
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Title my="xs" order={5}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Title>
                <Group spacing="xs">
                    {${accessor(
            recordName,
            field.key
          )}?.map((item: any, index: number) => (
                        <TagField value={${val}} key={index} />
                    ))}
                </Group>
            `;
        }
        return jsx`
                <Title my="xs" order={5}>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</Title>
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
        imports.push(["DateField", "@refinedev/mantine"]);
        if (field.multiple) {
          imports.push(["Group", "@mantine/core"]);
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Title my="xs" order={5}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Title>
                <Group spacing="xs">
                    {${accessor(recordName, field.key)}?.map((item: any) => (
                        <DateField value={${val}} key={${val}} />
                    ))}
                </Group>
            `;
        }
        return jsx`
                <Title my="xs" order={5}>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</Title>
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
        imports.push(["MarkdownField", "@refinedev/mantine"]);
        return jsx`
                <Title mt="xs" order={5}>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</Title>
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
        imports.push(["NumberField", "@refinedev/mantine"]);
        if (field.multiple) {
          imports.push(
            ["TagField", "@refinedev/mantine"],
            ["Group", "@mantine/core"]
          );
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Title my="xs" order={5}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Title>
                <Group spacing="xs">
                    {${accessor(recordName, field.key)}?.map((item: any) => (
                        <TagField value={${val}} key={${val}} />
                    ))}
                </Group>
            `;
        }
        return jsx`
                <Title my="xs" order={5}>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</Title>
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
        "@refinedev/mantine",
        "RefineMantine",
        {
          Show: import_mantine.Show,
          TagField: import_mantine.TagField,
          TextField: import_mantine.TextField,
          EmailField: import_mantine.EmailField,
          UrlField: import_mantine.UrlField,
          BooleanField: import_mantine.BooleanField,
          DateField: import_mantine.DateField,
          MarkdownField: import_mantine.MarkdownField,
          NumberField: import_mantine.NumberField
        }
      ],
      ["@mantine/core", "MantineCore", { Title: import_core7.Title, Group: import_core7.Group, Image: import_core7.Image }]
    ],
    codeViewerComponent: SharedCodeViewer,
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    renderer
  });

  // src/inferencers/mantine/list.tsx
  var import_mantine2 = __toESM(require_dist5());
  var import_react_table = __toESM(require_dist6());
  var import_core8 = __require("@mantine/core");
  var import_react_table2 = __require("@tanstack/react-table");
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
      ["ScrollArea", "@mantine/core"],
      ["List", "@refinedev/mantine"],
      ["Table", "@mantine/core"],
      ["Pagination", "@mantine/core"],
      ["Group", "@mantine/core"],
      ["EditButton", "@refinedev/mantine"],
      ["ShowButton", "@refinedev/mantine"],
      ["DeleteButton", "@refinedev/mantine"]
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
          imports.push(["TagField", "@refinedev/mantine"]);
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
            field.key
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
                        <Group spacing="xs">
                            {${getVariableName(
            field.key
          )}?.map((item, index) => (
                                <TagField key={index} value={${val}} />
                            ))}
                        </Group>
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
              field.key
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
        imports.push(["Image", "@mantine/core"]);
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
                                <Group spacing="xs">
                                    {getValue<any[]>()?.map((item, index) => (
                                        <Image src={${val}} key={index} sx={{ maxWidth: "100px" }} />
                                    ))}
                                </Group>
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
        imports.push(["EmailField", "@refinedev/mantine"]);
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
          imports.push(["TagField", "@refinedev/mantine"]);
          const val = accessor("item", void 0, field.accessor, " + ");
          cell = `
                    cell: function render({ getValue }) {
                        return (
                            <Group spacing="xs">
                                {getValue<any>()?.map((item, index) => (
                                    <TagField value={${val}} key={index} />
                                ))}
                            </Group>
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
        imports.push(["UrlField", "@refinedev/mantine"]);
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
          imports.push(["TagField", "@refinedev/mantine"]);
          const val = accessor("item", void 0, field.accessor, " + ");
          cell = `
                    cell: function render({ getValue }) {
                        return (
                            <Group spacing="xs">
                                {getValue<any[]>()?.map((item, index) => (
                                    <TagField value={${val}} key={index} />
                                ))}
                            </Group>
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
        imports.push(["BooleanField", "@refinedev/mantine"]);
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
                            <Group spacing="xs">
                                {getValue<any[]>()?.map((item, index) => (
                                    <BooleanField value={${val}} key={index} />
                                ))}
                            </Group>
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
        imports.push(["DateField", "@refinedev/mantine"]);
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
                            <Group spacing="xs">
                                {getValue<any[]>()?.map((item, index) => (
                                    <DateField value={${val}} key={index} />
                                ))}
                            </Group>
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
        imports.push(["MarkdownField", "@refinedev/mantine"]);
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
                            <Group spacing="xs">
                                {getValue<string[]>()?.map((item, index) => (
                                    <MarkdownField value={${val}} key={index} />
                                ))}
                            </Group>
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
          imports.push(["TagField", "@refinedev/mantine"]);
          const val = accessor(
            "item",
            void 0,
            field.accessor,
            ' + " " + '
          );
          cell = `
                    cell: function render({ getValue }) {
                        return (
                            <Group spacing="xs">
                                {getValue<any[]>()?.map((item, index) => (
                                    <TagField value={${val}} key={index} />
                                ))}
                            </Group>
                        )
                    }
                `;
        }
        if (!field.multiple && Array.isArray(field.accessor)) {
          cell = `
                    cell: function render({ getValue }) {
                        return (
                            <>{${accessor(
            "getValue()",
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
      imports.push(["EditButton", "@refinedev/mantine"]);
    }
    if (canShow) {
      imports.push(["ShowButton", "@refinedev/mantine"]);
    }
    if (canDelete) {
      imports.push(["DeleteButton", "@refinedev/mantine"]);
    }
    const actionColumnTitle = i18n ? `translate("table.actions")` : `"Actions"`;
    const actionButtons = canEdit || canShow || canDelete ? jsx`
    {
        id: "actions",
        accessorKey: "id",
        header: ${actionColumnTitle},
        cell: function render({ getValue }) {
            return (
                <Group spacing="xs" noWrap>
                    ${canShow ? jsx`
                    <ShowButton
                        hideText
                        recordItemId={getValue() as string}
                    />
                    ` : ""}
                    ${canEdit ? jsx`<EditButton
                        hideText
                        recordItemId={getValue() as string}
                    />` : ""}
                    ${canDelete ? jsx`
                    <DeleteButton
                        hideText
                        recordItemId={getValue() as string}
                    />
                    ` : ""}
                </Group>
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
                <ScrollArea>
                    <Table highlightOnHover>
                        <thead>
                            {getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <th key={header.id}>
                                                {!header.isPlaceholder && (
                                                    flexRender(
                                                        header.column
                                                            .columnDef
                                                            .header,
                                                        header.getContext(),
                                                    )
                                                )}
                                            </th>
                                        );
                                    })}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {getRowModel().rows.map((row) => {
                                return (
                                    <tr key={row.id}>
                                        {row.getVisibleCells().map((cell) => {
                                            return (
                                                <td key={cell.id}>
                                                    {flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext(),
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </ScrollArea>    
                <br />
                <Pagination
                    position="right"
                    total={pageCount}
                    page={current}
                    onChange={setCurrent}
                />
            </List>
        );
    };
    `;
  }, "renderer");
  var ListInferencer = createInferencer({
    type: "list",
    additionalScope: [
      [
        "@refinedev/mantine",
        "RefineMantine",
        {
          List: import_mantine2.List,
          EditButton: import_mantine2.EditButton,
          ShowButton: import_mantine2.ShowButton,
          DeleteButton: import_mantine2.DeleteButton,
          TagField: import_mantine2.TagField,
          EmailField: import_mantine2.EmailField,
          UrlField: import_mantine2.UrlField,
          BooleanField: import_mantine2.BooleanField,
          DateField: import_mantine2.DateField,
          MarkdownField: import_mantine2.MarkdownField
        }
      ],
      ["@refinedev/react-table", "RefineReactTable", { useTable: import_react_table.useTable }],
      [
        "@mantine/core",
        "MantineCore",
        { ScrollArea: import_core8.ScrollArea, Table: import_core8.Table, Pagination: import_core8.Pagination, Group: import_core8.Group, Image: import_core8.Image }
      ],
      ["@tanstack/react-table", "TanstackReactTable", { flexRender: import_react_table2.flexRender }]
    ],
    codeViewerComponent: SharedCodeViewer,
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    renderer: renderer2
  });

  // src/inferencers/mantine/create.tsx
  var import_mantine3 = __toESM(require_dist5());
  var import_core9 = __require("@mantine/core");
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
      ["Create", "@refinedev/mantine"],
      ["useForm", "@refinedev/mantine"]
    ];
    let initialValues = {};
    if (i18n) {
      imports.push(["useTranslate", "@refinedev/core"]);
    }
    const relationFields = fields.filter(
      (field) => (field == null ? void 0 : field.relation) && !(field == null ? void 0 : field.fieldable) && (field == null ? void 0 : field.resource)
    );
    const relationHooksCode = relationFields.filter(Boolean).map((field) => {
      var _a, _b;
      if ((field == null ? void 0 : field.relation) && !field.fieldable && field.resource) {
        imports.push(["useSelect", "@refinedev/mantine"]);
        return `
                const { selectProps: ${getVariableName(
          field.key,
          "SelectProps"
        )} } =
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
        initialValues = {
          ...initialValues,
          [field.key]: field.multiple ? [] : field.accessor ? {
            [typeof field.accessor === "string" ? field.accessor : field.accessor[0]]: ""
          } : ""
        };
        const variableName = getVariableName(field.key, "SelectProps");
        if (field.multiple) {
          imports.push(["MultiSelect", "@mantine/core"]);
          return jsx`
                    <MultiSelect mt="sm" label=${translatePrettyString({
            resource,
            field,
            i18n
          })} {...getInputProps("${dotAccessor(
            field.key,
            void 0
          )}")} {...${variableName}} filterDataOnExactSearchMatch={undefined} />
                `;
        }
        imports.push(["Select", "@mantine/core"]);
        return jsx`
                <Select mt="sm" label=${translatePrettyString({
          resource,
          field,
          i18n
        })} {...getInputProps("${dotAccessor(
          field.key,
          void 0,
          field.accessor
        )}")} {...${variableName}} />
            `;
      }
      return void 0;
    }, "renderRelationFields");
    const textFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "text" || field.type === "email" || field.type === "date" || field.type === "url") {
        if (isIDKey(field.key)) {
          return void 0;
        }
        imports.push(["TextInput", "@mantine/core"]);
        initialValues = {
          ...initialValues,
          [field.key]: field.multiple ? [] : ""
        };
        if (field.multiple) {
          return void 0;
        }
        return jsx`
                <TextInput mt="sm" label=${translatePrettyString({
          resource,
          field,
          i18n
        })} {...getInputProps("${dotAccessor(
          field.key,
          void 0,
          field.accessor
        )}")} />
            `;
      }
      return void 0;
    }, "textFields");
    const imageFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "image") {
        return jsx`
            {/* 
                Dropzone component is not included in "@refinedev/mantine" package.
                To use a <Dropzone> component, you can follow the official documentation for Mantine.
                
                Docs: https://mantine.dev/others/dropzone/
            */}
            `;
      }
      return void 0;
    }, "imageFields");
    const booleanFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "boolean") {
        imports.push(["Checkbox", "@mantine/core"]);
        initialValues = {
          ...initialValues,
          [field.key]: field.multiple ? [] : ""
        };
        if (field.multiple) {
          return void 0;
        }
        return jsx`
                <Checkbox mt="sm" label=${translatePrettyString({
          resource,
          field,
          i18n
        })} {...getInputProps("${dotAccessor(
          field.key,
          void 0,
          field.accessor
        )}", { type: 'checkbox' })} />
            `;
      }
      return void 0;
    }, "booleanFields");
    const dateFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "date") {
        const textInputRender = textFields(field);
        return `
                {/* 
                    DatePicker component is not included in "@refinedev/mantine" package.
                    To use a <DatePicker> component, you can follow the official documentation for Mantine.
                    
                    Docs: https://mantine.dev/dates/date-picker/
                */}
                ${textInputRender ?? ""}
            `;
      }
      return void 0;
    }, "dateFields");
    const richtextFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "richtext") {
        imports.push(["Textarea", "@mantine/core"]);
        initialValues = {
          ...initialValues,
          [field.key]: field.multiple ? [] : ""
        };
        if (field.multiple) {
          return void 0;
        }
        return jsx`
                <Textarea mt="sm" label=${translatePrettyString({
          resource,
          field,
          i18n
        })} autosize {...getInputProps("${dotAccessor(
          field.key,
          void 0,
          field.accessor
        )}")} />
            `;
      }
      return void 0;
    }, "richtextFields");
    const numberFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "number") {
        if (isIDKey(field.key)) {
          return void 0;
        }
        imports.push(["NumberInput", "@mantine/core"]);
        initialValues = {
          ...initialValues,
          [field.key]: field.multiple ? [] : ""
        };
        if (field.multiple) {
          return void 0;
        }
        return jsx`
                <NumberInput mt="sm" label=${translatePrettyString({
          resource,
          field,
          i18n
        })} {...getInputProps("${dotAccessor(
          field.key,
          void 0,
          field.accessor
        )}")}/>
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
        case "url":
        case "text":
        case "email":
          return wrapper(textFields(field));
        case "number":
          return wrapper(numberFields(field));
        case "richtext":
          return wrapper(richtextFields(field));
        case "image":
          return wrapper(imageFields(field));
        case "date":
          return wrapper(dateFields(field));
        case "boolean":
          return wrapper(booleanFields(field));
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
        const { getInputProps, saveButtonProps, setFieldValue, refineCore: { formLoading } } = useForm({
            initialValues: ${JSON.stringify(initialValues)},
            ${isCustomPage ? `refineCoreProps: {
                        resource: "${resource.name}",
                        action: "create",
                        ${getMetaProps(
      resource.identifier ?? resource.name,
      meta,
      "getOne"
    )}
                    }` : getMetaProps(
      resource.identifier ?? resource.name,
      meta,
      "getOne"
    ) ? `refineCoreProps: { ${getMetaProps(
      resource.identifier ?? resource.name,
      meta,
      "getOne"
    )} }` : ""}
        });
    
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
      ["@refinedev/mantine", "RefineMantine", { Create: import_mantine3.Create, useForm: import_mantine3.useForm, useSelect: import_mantine3.useSelect }],
      [
        "@mantine/core",
        "MantineCore",
        { MultiSelect: import_core9.MultiSelect, Select: import_core9.Select, TextInput: import_core9.TextInput, Checkbox: import_core9.Checkbox, Textarea: import_core9.Textarea, NumberInput: import_core9.NumberInput }
      ]
    ],
    codeViewerComponent: SharedCodeViewer,
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    renderer: renderer3
  });

  // src/inferencers/mantine/edit.tsx
  var import_mantine4 = __toESM(require_dist5());
  var import_core10 = __require("@mantine/core");
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
      ["IResourceComponentsProps", "@refinedev/core"],
      ["Edit", "@refinedev/mantine"],
      ["useForm", "@refinedev/mantine"]
    ];
    let initialValues = {};
    if (i18n) {
      imports.push(["useTranslate", "@refinedev/core"]);
    }
    const relationFields = fields.filter(
      (field) => (field == null ? void 0 : field.relation) && !(field == null ? void 0 : field.fieldable) && (field == null ? void 0 : field.resource)
    );
    const relationHooksCode = relationFields.filter(Boolean).map((field) => {
      var _a, _b;
      if ((field == null ? void 0 : field.relation) && !field.fieldable && field.resource) {
        imports.push(["useSelect", "@refinedev/mantine"]);
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
        let effect = "";
        if (field.multiple && field.accessor) {
          effect = `React.useEffect(() => {
                        setFieldValue("${field.key}", ${val});
                    }, [${recordName}]);`;
        }
        return `
                const { selectProps: ${getVariableName(
          field.key,
          "SelectProps"
        )} } =
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

                ${effect}
            `;
      }
      return void 0;
    }).filter(Boolean);
    const renderRelationFields = /* @__PURE__ */ __name((field) => {
      if (field.relation && field.resource) {
        initialValues = {
          ...initialValues,
          [field.key]: field.multiple ? [] : field.accessor ? {
            [typeof field.accessor === "string" ? field.accessor : field.accessor[0]]: ""
          } : ""
        };
        const variableName = getVariableName(field.key, "SelectProps");
        if (field.multiple) {
          imports.push(["MultiSelect", "@mantine/core"]);
          return jsx`
                    <MultiSelect mt="sm" label=${translatePrettyString({
            resource,
            field,
            i18n
          })} {...getInputProps("${dotAccessor(
            field.key,
            void 0
          )}")} {...${variableName}} filterDataOnExactSearchMatch={undefined} />
                `;
        }
        imports.push(["Select", "@mantine/core"]);
        return jsx`
                <Select mt="sm" label=${translatePrettyString({
          resource,
          field,
          i18n
        })} {...getInputProps("${dotAccessor(
          field.key,
          void 0,
          field.accessor
        )}")} {...${variableName}} />
            `;
      }
      return void 0;
    }, "renderRelationFields");
    const textFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "text" || field.type === "email" || field.type === "date" || field.type === "url") {
        imports.push(["TextInput", "@mantine/core"]);
        initialValues = {
          ...initialValues,
          [field.key]: field.multiple ? [] : ""
        };
        if (field.multiple) {
          imports.push(["Group", "@mantine/core"]);
          const val = dotAccessor(field.key, "${index}", field.accessor);
          return `
                <Group spacing="xs">
                    {${accessor(
            recordName,
            field.key
          )}?.map((item: any, index: number) => (
                        <TextInput mt="sm" key={index} label=${translatePrettyString(
            {
              resource,
              field,
              i18n
            }
          )} {...getInputProps(\`${val}\`)} />
                    ))}
                </Group>
                `;
        }
        return jsx`
                <TextInput mt="sm" ${isIDKey(field.key) ? "disabled" : ""} label=${translatePrettyString({
          resource,
          field,
          i18n
        })} {...getInputProps("${dotAccessor(
          field.key,
          void 0,
          field.accessor
        )}")} />
            `;
      }
      return void 0;
    }, "textFields");
    const imageFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "image") {
        return jsx`
            {/* 
                Dropzone component is not included in "@refinedev/mantine" package.
                To use a <Dropzone> component, you can follow the official documentation for Mantine.
                
                Docs: https://mantine.dev/others/dropzone/
            */}
            `;
      }
      return void 0;
    }, "imageFields");
    const booleanFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "boolean") {
        imports.push(["Checkbox", "@mantine/core"]);
        initialValues = {
          ...initialValues,
          [field.key]: field.multiple ? [] : ""
        };
        if (field.multiple) {
          imports.push(["Group", "@mantine/core"]);
          const val = dotAccessor(field.key, "${index}", field.accessor);
          return `
                <Group spacing="xs">
                    {${accessor(
            recordName,
            field.key
          )}?.map((item: any, index: number) => (
                        <Checkbox mt="sm" key={index} label=${translatePrettyString(
            {
              resource,
              field,
              i18n
            }
          )} {...getInputProps(\`${val}\`, { type: 'checkbox' })} />
                    ))}
                </Group>
                `;
        }
        return jsx`
                <Checkbox mt="sm" label=${translatePrettyString({
          resource,
          field,
          i18n
        })} {...getInputProps("${dotAccessor(
          field.key,
          void 0,
          field.accessor
        )}", { type: 'checkbox' })} />
            `;
      }
      return void 0;
    }, "booleanFields");
    const dateFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "date") {
        const textInputRender = textFields(field);
        return `
                {/* 
                    DatePicker component is not included in "@refinedev/mantine" package.
                    To use a <DatePicker> component, you can follow the official documentation for Mantine.
                    
                    Docs: https://mantine.dev/dates/date-picker/
                */}
                ${textInputRender}
            `;
      }
      return void 0;
    }, "dateFields");
    const richtextFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "richtext") {
        imports.push(["Textarea", "@mantine/core"]);
        initialValues = {
          ...initialValues,
          [field.key]: field.multiple ? [] : ""
        };
        if (field.multiple) {
          imports.push(["Group", "@mantine/core"]);
          const val = dotAccessor(field.key, "${index}", field.accessor);
          return `
                <Group spacing="xs">
                    {${accessor(
            recordName,
            field.key
          )}?.map((item: any, index: number) => (
                        <Textarea mt="sm" key={index} label=${translatePrettyString(
            {
              resource,
              field,
              i18n
            }
          )} {...getInputProps(\`${val}\`)} />
                    ))}
                </Group>
                `;
        }
        return jsx`
                <Textarea mt="sm" label=${translatePrettyString({
          resource,
          field,
          i18n
        })} autosize {...getInputProps("${dotAccessor(
          field.key,
          void 0,
          field.accessor
        )}")} />
            `;
      }
      return void 0;
    }, "richtextFields");
    const numberFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "number") {
        imports.push(["NumberInput", "@mantine/core"]);
        initialValues = {
          ...initialValues,
          [field.key]: field.multiple ? [] : ""
        };
        if (field.multiple) {
          imports.push(["Group", "@mantine/core"]);
          const val = dotAccessor(field.key, "${index}", field.accessor);
          return `
                <Group spacing="xs">
                    {${accessor(
            recordName,
            field.key
          )}?.map((item: any, index: number) => (
                        <NumberInput mt="sm" key={index} label=${translatePrettyString(
            {
              resource,
              field,
              i18n
            }
          )} {...getInputProps(\`${val}\`)} />
                    ))}
                </Group>
                `;
        }
        return jsx`
                <NumberInput mt="sm" ${isIDKey(field.key) ? "disabled" : ""} label=${translatePrettyString({
          resource,
          field,
          i18n
        })} {...getInputProps("${dotAccessor(
          field.key,
          void 0,
          field.accessor
        )}")}/>
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
        case "url":
        case "text":
        case "email":
          return wrapper(textFields(field));
        case "number":
          return wrapper(numberFields(field));
        case "richtext":
          return wrapper(richtextFields(field));
        case "image":
          return wrapper(imageFields(field));
        case "date":
          return wrapper(dateFields(field));
        case "boolean":
          return wrapper(booleanFields(field));
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
        const { getInputProps, saveButtonProps, setFieldValue, refineCore: { queryResult } } = useForm({
            initialValues: ${JSON.stringify(initialValues)},
            ${isCustomPage ? `refineCoreProps: {
                        resource: "${resource.name}",
                        id: ${idQuoteWrapper(id)},
                        action: "edit",
                        ${getMetaProps(
      (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
      meta,
      "getOne"
    )}  
                    }` : getMetaProps(
      (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
      meta,
      "getOne"
    ) ? `refineCoreProps: { ${getMetaProps(
      (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
      meta,
      "getOne"
    )} }
                      ` : ""}
        });
    
        const ${recordName} = queryResult?.data?.data;
    
        ${relationHooksCode}

        return (
            <Edit saveButtonProps={saveButtonProps}>
                ${renderedFields.join("")}
            </Edit>
        );
    };
    `;
  }, "renderer");
  var EditInferencer = createInferencer({
    type: "edit",
    additionalScope: [
      ["@refinedev/mantine", "RefineMantine", { Edit: import_mantine4.Edit, useForm: import_mantine4.useForm, useSelect: import_mantine4.useSelect }],
      [
        "@mantine/core",
        "MantineCore",
        {
          MultiSelect: import_core10.MultiSelect,
          Select: import_core10.Select,
          TextInput: import_core10.TextInput,
          Group: import_core10.Group,
          Checkbox: import_core10.Checkbox,
          Textarea: import_core10.Textarea,
          NumberInput: import_core10.NumberInput
        }
      ]
    ],
    codeViewerComponent: SharedCodeViewer,
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    renderer: renderer4
  });

  // src/inferencers/mantine/index.tsx
  var MantineInferencer = /* @__PURE__ */ __name(({
    action: actionFromProps,
    id: idFromProps,
    ...props
  }) => {
    const { action, id } = (0, import_core11.useResource)();
    switch (actionFromProps ?? action) {
      case "show":
        return /* @__PURE__ */ import_react8.default.createElement(ShowInferencer, { ...props, id: idFromProps ?? id });
      case "create":
        return /* @__PURE__ */ import_react8.default.createElement(CreateInferencer, { ...props, id: idFromProps ?? id });
      case "edit":
        return /* @__PURE__ */ import_react8.default.createElement(EditInferencer, { ...props, id: idFromProps ?? id });
      default:
        return /* @__PURE__ */ import_react8.default.createElement(ListInferencer, { ...props, id: idFromProps ?? id });
    }
  }, "MantineInferencer");
})();
//# sourceMappingURL=mantine.js.map