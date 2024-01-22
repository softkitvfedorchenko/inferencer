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
        TranslationContext: () => TranslationContext3,
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
        useResource: () => useResource5,
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
      var import_react10 = __toESM2(__require("react"));
      var DefaultLayout = /* @__PURE__ */ __name2(({ children }) => {
        return /* @__PURE__ */ import_react10.default.createElement("div", null, children);
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
        const { resources, resource, identifier } = useResource5(resourceFromProp);
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
        const { resources, resource, identifier } = useResource5(resourceFromProp);
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
        const { resources, resource, identifier } = useResource5(resourceFromProp);
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
        const { resources, select } = useResource5();
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
        const { resources, select } = useResource5();
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
        const { resources, select } = useResource5();
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
        const { resources, select } = useResource5();
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
        const { resources, select } = useResource5();
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
        const { resources, select } = useResource5();
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
        const { resource } = useResource5();
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
        const { resources, resource, identifier } = useResource5(resourceFromProp);
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
      function useResource5(args) {
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
      __name(useResource5, "useResource");
      __name2(useResource5, "useResource");
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
        const { resources } = useResource5();
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
        const { resource, identifier } = useResource5(resourceFromProp);
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
      var TranslationContext3 = import_react36.default.createContext({});
      var TranslationContextProvider = /* @__PURE__ */ __name2(({ children, i18nProvider }) => {
        return /* @__PURE__ */ import_react36.default.createElement(
          TranslationContext3.Provider,
          {
            value: {
              i18nProvider
            }
          },
          children
        );
      }, "TranslationContextProvider");
      var useSetLocale = /* @__PURE__ */ __name2(() => {
        const { i18nProvider } = (0, import_react37.useContext)(TranslationContext3);
        return (0, import_react37.useCallback)((lang) => i18nProvider == null ? void 0 : i18nProvider.changeLocale(lang), []);
      }, "useSetLocale");
      var import_react38 = __require("react");
      var useTranslate = /* @__PURE__ */ __name2(() => {
        const { i18nProvider } = (0, import_react38.useContext)(TranslationContext3);
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
        const { i18nProvider } = (0, import_react39.useContext)(TranslationContext3);
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
        const { resource, resources, identifier } = useResource5(
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
        } = useResource5(resourceFromProps);
        const { identifier: inferredIdentifier } = useResource5();
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
        const { resource: resourceFromRoute, resources } = useResource5();
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
        const { select: resourceSelect } = useResource5();
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
        const { resources } = useResource5();
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
        } = useResource5(resourceFromProp);
        const { identifier: inferredIdentifier } = useResource5();
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
        const { resource, identifier } = useResource5(
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
        const { resource, identifier } = useResource5(resourceFromProps);
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
        const { resource, identifier } = useResource5(resourceFromProp);
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
        const { i18nProvider } = (0, import_react60.useContext)(TranslationContext3);
        const parsed = useParsed();
        const translate = useTranslate();
        const { resources, resource, action } = useResource5();
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
        const flatten2 = /* @__PURE__ */ __name2((tree) => {
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
              children: flatten2(tree.children[key])
            };
            items.push(item);
          });
          return items;
        }, "flatten");
        return flatten2(root);
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
        const { resource, resources } = useResource5();
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
        const { resource, action } = useResource5();
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
        const { i18nProvider } = (0, import_react71.useContext)(TranslationContext3);
        const notificationContext = (0, import_react71.useContext)(NotificationContext);
        const accessControlContext = (0, import_react71.useContext)(AccessControlContext);
        const { resources } = useResource5();
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
        } = useResource5(resourceFromProp);
        const { identifier } = useResource5();
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

  // ../antd/dist/index.js
  var require_dist5 = __commonJS({
    "../antd/dist/index.js"(exports, module) {
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
        AuthPage: () => AuthPage,
        AutoSaveIndicator: () => AutoSaveIndicator,
        BooleanField: () => BooleanField3,
        Breadcrumb: () => Breadcrumb,
        CloneButton: () => CloneButton,
        Create: () => Create2,
        CreateButton: () => CreateButton,
        DateField: () => DateField3,
        DeleteButton: () => DeleteButton2,
        Edit: () => Edit2,
        EditButton: () => EditButton2,
        EmailField: () => EmailField3,
        ErrorComponent: () => ErrorComponent2,
        ExportButton: () => ExportButton,
        FileField: () => FileField,
        FilterDropdown: () => FilterDropdown,
        Header: () => Header,
        ImageField: () => ImageField3,
        ImportButton: () => ImportButton,
        Layout: () => Layout2,
        List: () => List2,
        ListButton: () => ListButton,
        LoginPage: () => LoginPage,
        MarkdownField: () => MarkdownField3,
        NumberField: () => NumberField2,
        PageHeader: () => PageHeader,
        ReadyPage: () => ReadyPage,
        RefineThemes: () => RefineThemes,
        RefreshButton: () => RefreshButton,
        SaveButton: () => SaveButton,
        Show: () => Show2,
        ShowButton: () => ShowButton2,
        Sider: () => Sider,
        TagField: () => TagField3,
        TextField: () => TextField2,
        ThemedHeader: () => ThemedHeader,
        ThemedHeaderV2: () => ThemedHeaderV2,
        ThemedLayout: () => ThemedLayout,
        ThemedLayoutContext: () => ThemedLayoutContext,
        ThemedLayoutContextProvider: () => ThemedLayoutContextProvider,
        ThemedLayoutV2: () => ThemedLayoutV2,
        ThemedSider: () => ThemedSider,
        ThemedSiderV2: () => ThemedSiderV2,
        ThemedTitle: () => ThemedTitle,
        ThemedTitleV2: () => ThemedTitleV2,
        Title: () => Title,
        UrlField: () => UrlField3,
        WelcomePage: () => WelcomePage,
        getDefaultFilter: () => getDefaultFilter,
        getDefaultSortOrder: () => getDefaultSortOrder,
        getValueFromEvent: () => getValueFromEvent3,
        mapAntdFilterToCrudFilter: () => mapAntdFilterToCrudFilter,
        mapAntdSorterToCrudSorting: () => mapAntdSorterToCrudSorting,
        notificationProvider: () => notificationProvider,
        useCheckboxGroup: () => useCheckboxGroup,
        useDrawerForm: () => useDrawerForm,
        useEditableTable: () => useEditableTable,
        useFileUploadState: () => useFileUploadState,
        useForm: () => useForm3,
        useImport: () => useImport,
        useModal: () => useModal,
        useModalForm: () => useModalForm,
        useNotificationProvider: () => useNotificationProvider,
        useRadioGroup: () => useRadioGroup,
        useSelect: () => useSelect3,
        useSiderVisible: () => useSiderVisible,
        useSimpleList: () => useSimpleList,
        useStepsForm: () => useStepsForm,
        useTable: () => useTable2,
        useThemedLayoutContext: () => useThemedLayoutContext
      });
      module.exports = __toCommonJS(src_exports);
      var import_react10 = __toESM2(__require("react"));
      var import_antd11 = __require("antd");
      var import_sunflower_antd = __require("sunflower-antd");
      var import_core7 = require_dist3();
      var import_core22 = require_dist3();
      var useForm3 = /* @__PURE__ */ __name2(({
        action,
        resource,
        onMutationSuccess: onMutationSuccessProp,
        onMutationError: onMutationErrorProp,
        autoSave,
        submitOnEnter = false,
        warnWhenUnsavedChanges: warnWhenUnsavedChangesProp,
        redirect,
        successNotification,
        errorNotification,
        meta,
        metaData,
        queryMeta,
        mutationMeta,
        liveMode,
        liveParams,
        mutationMode,
        dataProviderName,
        onLiveEvent,
        invalidates,
        undoableTimeout,
        queryOptions,
        createMutationOptions,
        updateMutationOptions,
        id: idFromProps,
        overtimeOptions,
        optimisticUpdateMap,
        disableServerSideValidation: disableServerSideValidationProp = false
      } = {}) => {
        var _a, _b;
        const { options } = (0, import_core22.useRefineContext)();
        const disableServerSideValidation = (options == null ? void 0 : options.disableServerSideValidation) || disableServerSideValidationProp;
        const translate = (0, import_core22.useTranslate)();
        const [formAnt] = import_antd11.Form.useForm();
        const formSF = (0, import_sunflower_antd.useForm)({
          form: formAnt
        });
        const { form } = formSF;
        const useFormCoreResult = (0, import_core22.useForm)({
          onMutationSuccess: onMutationSuccessProp ? onMutationSuccessProp : void 0,
          onMutationError: async (error, _variables, _context) => {
            if (disableServerSideValidation) {
              onMutationErrorProp == null ? void 0 : onMutationErrorProp(error, _variables, _context);
              return;
            }
            let parsedErrors = [];
            const fieldsValue = form.getFieldsValue();
            const fields = Object.keys((0, import_core7.flattenObjectKeys)(fieldsValue));
            parsedErrors = fields.map((field) => {
              return {
                name: (0, import_core7.propertyPathToArray)(field),
                errors: void 0
              };
            });
            form.setFields(parsedErrors);
            const errors = error == null ? void 0 : error.errors;
            for (const key in errors) {
              const fieldError = errors[key];
              let newError = [];
              if (Array.isArray(fieldError)) {
                newError = fieldError;
              }
              if (typeof fieldError === "string") {
                newError = [fieldError];
              }
              if (typeof fieldError === "boolean" && fieldError) {
                newError = ["Field is not valid."];
              }
              if (typeof fieldError === "object" && "key" in fieldError) {
                const translatedMessage = translate(
                  fieldError.key,
                  fieldError.message
                );
                newError = [translatedMessage];
              }
              parsedErrors.push({
                name: (0, import_core7.propertyPathToArray)(key),
                errors: newError
              });
            }
            form.setFields([...parsedErrors]);
            onMutationErrorProp == null ? void 0 : onMutationErrorProp(error, _variables, _context);
          },
          redirect,
          action,
          resource,
          successNotification,
          errorNotification,
          meta: (0, import_core22.pickNotDeprecated)(meta, metaData),
          metaData: (0, import_core22.pickNotDeprecated)(meta, metaData),
          queryMeta,
          mutationMeta,
          liveMode,
          liveParams,
          mutationMode,
          dataProviderName,
          onLiveEvent,
          invalidates,
          undoableTimeout,
          queryOptions,
          createMutationOptions,
          updateMutationOptions,
          id: idFromProps,
          overtimeOptions,
          optimisticUpdateMap,
          autoSave
        });
        const { formLoading, onFinish, queryResult, id, onFinishAutoSave } = useFormCoreResult;
        const {
          warnWhenUnsavedChanges: warnWhenUnsavedChangesRefine,
          setWarnWhen
        } = (0, import_core22.useWarnAboutChange)();
        const warnWhenUnsavedChanges = warnWhenUnsavedChangesProp ?? warnWhenUnsavedChangesRefine;
        import_react10.default.useEffect(() => {
          form.resetFields();
        }, [(_a = queryResult == null ? void 0 : queryResult.data) == null ? void 0 : _a.data, id]);
        const onKeyUp = /* @__PURE__ */ __name2((event) => {
          if (submitOnEnter && event.key === "Enter") {
            form.submit();
          }
        }, "onKeyUp");
        const onValuesChange = /* @__PURE__ */ __name2((changeValues, allValues) => {
          if (changeValues && warnWhenUnsavedChanges) {
            setWarnWhen(true);
          }
          if (autoSave == null ? void 0 : autoSave.enabled) {
            setWarnWhen(false);
            const onFinishFromProps = (autoSave == null ? void 0 : autoSave.onFinish) ?? ((values) => values);
            return onFinishAutoSave(onFinishFromProps(allValues));
          }
          return changeValues;
        }, "onValuesChange");
        const saveButtonProps = {
          disabled: formLoading,
          onClick: () => {
            form.submit();
          }
        };
        return {
          form: formSF.form,
          formProps: {
            ...formSF.formProps,
            onFinish: (values) => onFinish(values).catch((error) => error),
            onKeyUp,
            onValuesChange,
            initialValues: (_b = queryResult == null ? void 0 : queryResult.data) == null ? void 0 : _b.data
          },
          saveButtonProps,
          ...useFormCoreResult,
          onFinish: async (values) => {
            return await onFinish(values ?? formSF.form.getFieldsValue(true));
          }
        };
      }, "useForm");
      var import_react22 = __toESM2(__require("react"));
      var import_core42 = require_dist3();
      var import_core32 = require_dist3();
      var useModal = /* @__PURE__ */ __name2(({
        modalProps = {}
      } = {}) => {
        const { show, close, visible } = (0, import_core32.useModal)({
          defaultVisible: modalProps.open
        });
        return {
          modalProps: {
            ...modalProps,
            onCancel: (e) => {
              var _a;
              (_a = modalProps.onCancel) == null ? void 0 : _a.call(modalProps, e);
              close();
            },
            open: visible,
            visible
          },
          show,
          close
        };
      }, "useModal");
      var useModalForm = /* @__PURE__ */ __name2(({
        syncWithLocation,
        defaultVisible = false,
        autoSubmitClose = true,
        autoResetForm = true,
        autoSave,
        invalidates,
        ...rest
      }) => {
        var _a, _b;
        const [initiallySynced, setInitiallySynced] = import_react22.default.useState(false);
        const invalidate = (0, import_core42.useInvalidate)();
        const {
          resource,
          action: actionFromParams,
          identifier
        } = (0, import_core42.useResource)(rest.resource);
        const parsed = (0, import_core42.useParsed)();
        const go = (0, import_core42.useGo)();
        const getUserFriendlyName = (0, import_core42.useUserFriendlyName)();
        const action = rest.action ?? actionFromParams ?? "";
        const syncingId = !(typeof syncWithLocation === "object" && (syncWithLocation == null ? void 0 : syncWithLocation.syncId) === false);
        const syncWithLocationKey = typeof syncWithLocation === "object" && "key" in syncWithLocation ? syncWithLocation.key : resource && action && syncWithLocation ? `modal-${identifier}-${action}` : void 0;
        const useFormProps = useForm3({
          meta: {
            ...syncWithLocationKey ? { [syncWithLocationKey]: void 0 } : {},
            ...rest.meta
          },
          autoSave,
          invalidates,
          ...rest
        });
        const { form, formProps, id, setId, formLoading, onFinish, autoSaveProps } = useFormProps;
        const translate = (0, import_core42.useTranslate)();
        const { warnWhen, setWarnWhen } = (0, import_core42.useWarnAboutChange)();
        const { show, close, modalProps } = useModal({
          modalProps: {
            open: defaultVisible
          }
        });
        const visible = modalProps.open || false;
        const sunflowerUseModal = {
          modalProps,
          form,
          formLoading,
          formProps,
          formResult: void 0,
          formValues: form.getFieldsValue,
          defaultFormValuesLoading: false,
          initialValues: {},
          submit: onFinish,
          close,
          open: modalProps.open || false,
          show,
          visible
        };
        import_react22.default.useEffect(() => {
          var _a2, _b2, _c, _d;
          if (initiallySynced === false && syncWithLocationKey) {
            const openStatus = (_b2 = (_a2 = parsed == null ? void 0 : parsed.params) == null ? void 0 : _a2[syncWithLocationKey]) == null ? void 0 : _b2.open;
            if (typeof openStatus === "boolean") {
              if (openStatus) {
                show();
              }
            } else if (typeof openStatus === "string") {
              if (openStatus === "true") {
                show();
              }
            }
            if (syncingId) {
              const idFromParams = (_d = (_c = parsed == null ? void 0 : parsed.params) == null ? void 0 : _c[syncWithLocationKey]) == null ? void 0 : _d.id;
              if (idFromParams) {
                setId == null ? void 0 : setId(idFromParams);
              }
            }
            setInitiallySynced(true);
          }
        }, [syncWithLocationKey, parsed, syncingId, setId]);
        import_react22.default.useEffect(() => {
          var _a2;
          if (initiallySynced === true) {
            if (visible && syncWithLocationKey) {
              go({
                query: {
                  [syncWithLocationKey]: {
                    ...(_a2 = parsed == null ? void 0 : parsed.params) == null ? void 0 : _a2[syncWithLocationKey],
                    open: true,
                    ...syncingId && id && { id }
                  }
                },
                options: { keepQuery: true },
                type: "replace"
              });
            } else if (syncWithLocationKey && !visible) {
              go({
                query: {
                  [syncWithLocationKey]: void 0
                },
                options: { keepQuery: true },
                type: "replace"
              });
            }
          }
        }, [id, visible, show, syncWithLocationKey, syncingId]);
        const saveButtonPropsSF = {
          disabled: formLoading,
          loading: formLoading,
          onClick: () => {
            form.submit();
          }
        };
        const handleClose = (0, import_react22.useCallback)(() => {
          if (autoSaveProps.status === "success" && (autoSave == null ? void 0 : autoSave.invalidateOnClose)) {
            invalidate({
              id,
              invalidates: invalidates || ["list", "many", "detail"],
              dataProviderName: rest.dataProviderName,
              resource: identifier
            });
          }
          if (warnWhen) {
            const warnWhenConfirm = window.confirm(
              translate(
                "warnWhenUnsavedChanges",
                "Are you sure you want to leave? You have unsaved changes."
              )
            );
            if (warnWhenConfirm) {
              setWarnWhen(false);
            } else {
              return;
            }
          }
          setId == null ? void 0 : setId(void 0);
          sunflowerUseModal.close();
        }, [warnWhen, autoSaveProps.status]);
        const handleShow = (0, import_react22.useCallback)(
          (showId) => {
            if (typeof showId !== "undefined") {
              setId == null ? void 0 : setId(showId);
            }
            const needsIdToOpen = action === "edit" || action === "clone";
            const hasId = typeof showId !== "undefined" || typeof id !== "undefined";
            if (needsIdToOpen ? hasId : true) {
              sunflowerUseModal.show();
            }
          },
          [id]
        );
        const { visible: _visible, ...otherModalProps } = modalProps;
        const newModalProps = { open: _visible, ...otherModalProps };
        return {
          ...useFormProps,
          ...sunflowerUseModal,
          show: handleShow,
          close: handleClose,
          open: visible,
          formProps: {
            ...formProps,
            ...useFormProps.formProps,
            onValuesChange: formProps == null ? void 0 : formProps.onValuesChange,
            onKeyUp: formProps == null ? void 0 : formProps.onKeyUp,
            onFinish: async (values) => {
              await onFinish(values);
              if (autoSubmitClose) {
                close();
              }
              if (autoResetForm) {
                form.resetFields();
              }
            }
          },
          modalProps: {
            ...newModalProps,
            width: "1000px",
            okButtonProps: saveButtonPropsSF,
            title: translate(
              `${identifier}.titles.${rest.action}`,
              `${getUserFriendlyName(
                `${rest.action} ${((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.label) ?? ((_b = resource == null ? void 0 : resource.options) == null ? void 0 : _b.label) ?? (resource == null ? void 0 : resource.label) ?? identifier}`,
                "singular"
              )}`
            ),
            okText: translate("buttons.save", "Save"),
            cancelText: translate("buttons.cancel", "Cancel"),
            onCancel: handleClose,
            forceRender: true
          },
          formLoading
        };
      }, "useModalForm");
      var import_react32 = __toESM2(__require("react"));
      var import_core52 = require_dist3();
      var useDrawerForm = /* @__PURE__ */ __name2(({
        syncWithLocation,
        defaultVisible = false,
        autoSubmitClose = true,
        autoResetForm = true,
        autoSave,
        invalidates,
        ...rest
      }) => {
        const invalidate = (0, import_core52.useInvalidate)();
        const [initiallySynced, setInitiallySynced] = import_react32.default.useState(false);
        const { visible, show, close } = (0, import_core52.useModal)({
          defaultVisible
        });
        const {
          resource,
          action: actionFromParams,
          identifier
        } = (0, import_core52.useResource)(rest.resource);
        const parsed = (0, import_core52.useParsed)();
        const go = (0, import_core52.useGo)();
        const action = rest.action ?? actionFromParams ?? "";
        const syncingId = !(typeof syncWithLocation === "object" && (syncWithLocation == null ? void 0 : syncWithLocation.syncId) === false);
        const syncWithLocationKey = typeof syncWithLocation === "object" && "key" in syncWithLocation ? syncWithLocation.key : resource && action && syncWithLocation ? `drawer-${(resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name)}-${action}` : void 0;
        const useFormProps = useForm3({
          meta: {
            ...syncWithLocationKey ? { [syncWithLocationKey]: void 0 } : {},
            ...rest.meta
          },
          autoSave,
          invalidates,
          ...rest
        });
        const { form, formProps, formLoading, id, setId, onFinish, autoSaveProps } = useFormProps;
        import_react32.default.useEffect(() => {
          var _a, _b, _c, _d;
          if (initiallySynced === false && syncWithLocationKey) {
            const openStatus = (_b = (_a = parsed == null ? void 0 : parsed.params) == null ? void 0 : _a[syncWithLocationKey]) == null ? void 0 : _b.open;
            if (typeof openStatus === "boolean") {
              openStatus ? show() : close();
            } else if (typeof openStatus === "string") {
              if (openStatus === "true") {
                show();
              }
            }
            if (syncingId) {
              const idFromParams = (_d = (_c = parsed == null ? void 0 : parsed.params) == null ? void 0 : _c[syncWithLocationKey]) == null ? void 0 : _d.id;
              if (idFromParams) {
                setId == null ? void 0 : setId(idFromParams);
              }
            }
            setInitiallySynced(true);
          }
        }, [syncWithLocationKey, parsed, syncingId, setId, initiallySynced]);
        import_react32.default.useEffect(() => {
          var _a;
          if (initiallySynced === true) {
            if (visible && syncWithLocationKey) {
              go({
                query: {
                  [syncWithLocationKey]: {
                    ...(_a = parsed == null ? void 0 : parsed.params) == null ? void 0 : _a[syncWithLocationKey],
                    open: true,
                    ...syncingId && id && { id }
                  }
                },
                options: { keepQuery: true },
                type: "replace"
              });
            } else if (syncWithLocationKey && !visible) {
              go({
                query: {
                  [syncWithLocationKey]: void 0
                },
                options: { keepQuery: true },
                type: "replace"
              });
            }
          }
        }, [
          id,
          visible,
          show,
          close,
          syncWithLocationKey,
          syncingId,
          initiallySynced
        ]);
        const translate = (0, import_core52.useTranslate)();
        const { warnWhen, setWarnWhen } = (0, import_core52.useWarnAboutChange)();
        const saveButtonProps = {
          disabled: formLoading,
          onClick: () => {
            form.submit();
          },
          loading: formLoading
        };
        const deleteButtonProps = {
          recordItemId: id,
          onSuccess: () => {
            setId == null ? void 0 : setId(void 0);
            close();
          }
        };
        const handleClose = (0, import_react32.useCallback)(() => {
          if (autoSaveProps.status === "success" && (autoSave == null ? void 0 : autoSave.invalidateOnClose)) {
            invalidate({
              id,
              invalidates: invalidates || ["list", "many", "detail"],
              dataProviderName: rest.dataProviderName,
              resource: identifier
            });
          }
          if (warnWhen) {
            const warnWhenConfirm = window.confirm(
              translate(
                "warnWhenUnsavedChanges",
                "Are you sure you want to leave? You have unsaved changes."
              )
            );
            if (warnWhenConfirm) {
              setWarnWhen(false);
            } else {
              return;
            }
          }
          close();
          setId == null ? void 0 : setId(void 0);
        }, [warnWhen]);
        const handleShow = (0, import_react32.useCallback)(
          (showId) => {
            if (typeof showId !== "undefined") {
              setId == null ? void 0 : setId(showId);
            }
            const needsIdToOpen = action === "edit" || action === "clone";
            const hasId = typeof showId !== "undefined" || typeof id !== "undefined";
            if (needsIdToOpen ? hasId : true) {
              show();
            }
          },
          [id]
        );
        return {
          ...useFormProps,
          show: handleShow,
          close: handleClose,
          formProps: {
            form,
            ...useFormProps.formProps,
            onValuesChange: formProps == null ? void 0 : formProps.onValuesChange,
            onKeyUp: formProps == null ? void 0 : formProps.onKeyUp,
            onFinish: async (values) => {
              await onFinish(values);
              if (autoSubmitClose) {
                close();
              }
              if (autoResetForm) {
                form.resetFields();
              }
            }
          },
          drawerProps: {
            width: "500px",
            onClose: handleClose,
            open: visible,
            forceRender: true
          },
          saveButtonProps,
          deleteButtonProps,
          formLoading
        };
      }, "useDrawerForm");
      var import_sunflower_antd2 = __require("sunflower-antd");
      var useStepsForm = /* @__PURE__ */ __name2((props = {}) => {
        const useFormProps = useForm3({
          ...props
        });
        const { form, formProps } = useFormProps;
        const stepsPropsSunflower = (0, import_sunflower_antd2.useStepsForm)({
          isBackValidate: false,
          form,
          submit: (values) => {
            var _a;
            (_a = formProps == null ? void 0 : formProps.onFinish) == null ? void 0 : _a.call(formProps, values);
          },
          ...props
        });
        return {
          ...useFormProps,
          ...stepsPropsSunflower,
          formLoading: useFormProps.formLoading,
          formProps: {
            ...stepsPropsSunflower.formProps,
            ...useFormProps.formProps,
            onValuesChange: formProps == null ? void 0 : formProps.onValuesChange,
            onKeyUp: formProps == null ? void 0 : formProps.onKeyUp
          },
          saveButtonProps: {
            ...useFormProps.saveButtonProps,
            onClick: () => stepsPropsSunflower.submit()
          }
        };
      }, "useStepsForm");
      var import_react52 = __require("react");
      var import_antd22 = __require("antd");
      var import_sunflower_antd3 = __require("sunflower-antd");
      var import_core8 = require_dist3();
      var import_core62 = require_dist3();
      var getDefaultSortOrder = /* @__PURE__ */ __name2((columnName, sorter) => {
        const sort = (0, import_core62.getDefaultSortOrder)(columnName, sorter);
        if (sort) {
          return `${sort}end`;
        }
        return void 0;
      }, "getDefaultSortOrder");
      var getDefaultFilter = /* @__PURE__ */ __name2((columnName, filters, operatorType = "eq") => {
        return (0, import_core62.getDefaultFilter)(columnName, filters, operatorType);
      }, "getDefaultFilter");
      var mapAntdSorterToCrudSorting = /* @__PURE__ */ __name2((sorter) => {
        const crudSorting = [];
        if (Array.isArray(sorter)) {
          sorter.sort((a, b) => {
            var _a, _b;
            return (((_a = a.column) == null ? void 0 : _a.sorter).multiple ?? 0) < (((_b = b.column) == null ? void 0 : _b.sorter).multiple ?? 0) ? -1 : 0;
          }).map((item) => {
            if (item.field && item.order) {
              const field = Array.isArray(item.field) ? item.field.join(".") : `${item.field}`;
              crudSorting.push({
                field: `${item.columnKey ?? field}`,
                order: item.order.replace("end", "")
              });
            }
          });
        } else {
          if (sorter.field && sorter.order) {
            const field = Array.isArray(sorter.field) ? sorter.field.join(".") : `${sorter.field}`;
            crudSorting.push({
              field: `${sorter.columnKey ?? field}`,
              order: sorter.order.replace("end", "")
            });
          }
        }
        return crudSorting;
      }, "mapAntdSorterToCrudSorting");
      var mapAntdFilterToCrudFilter = /* @__PURE__ */ __name2((tableFilters, prevFilters, initialFilters) => {
        const crudFilters = [];
        const mapInitialFilter = (initialFilters ?? []).reduce((acc, item) => {
          const field = item.key || item.field;
          return { ...acc, [field]: item };
        }, {});
        Object.keys(tableFilters).map((field) => {
          var _a, _b;
          const value = tableFilters[field];
          const operator = ((_a = prevFilters.filter((i) => i.operator !== "or").find((p) => p.field === field)) == null ? void 0 : _a.operator) || ((_b = mapInitialFilter[field]) == null ? void 0 : _b.operator);
          if (operator !== "or" && operator !== "and") {
            crudFilters.push({
              field,
              operator: operator ?? (Array.isArray(value) ? "in" : "eq"),
              value
            });
          }
        });
        return crudFilters;
      }, "mapAntdFilterToCrudFilter");
      var import_core72 = require_dist3();
      var import_react42 = __toESM2(__require("react"));
      var PaginationLink = /* @__PURE__ */ __name2(({ to, element }) => {
        const { Link: LegacyLink } = (0, import_core72.useRouterContext)();
        const routerType = (0, import_core72.useRouterType)();
        const Link3 = (0, import_core72.useLink)();
        const ActiveLink = routerType === "legacy" ? LegacyLink : Link3;
        return /* @__PURE__ */ import_react42.default.createElement(
          ActiveLink,
          {
            to,
            replace: false,
            onClick: (e) => {
              e.preventDefault();
            }
          },
          element
        );
      }, "PaginationLink");
      var useTable2 = /* @__PURE__ */ __name2(({
        onSearch,
        initialCurrent,
        initialPageSize,
        hasPagination = true,
        pagination,
        initialSorter,
        permanentSorter,
        initialFilter,
        permanentFilter,
        defaultSetFilterBehavior,
        filters: filtersFromProp,
        sorters: sortersFromProp,
        syncWithLocation,
        resource,
        successNotification,
        errorNotification,
        queryOptions,
        liveMode: liveModeFromProp,
        onLiveEvent,
        liveParams,
        meta,
        metaData,
        dataProviderName
      } = {}) => {
        const {
          tableQueryResult,
          current,
          setCurrent,
          pageSize,
          setPageSize,
          filters,
          setFilters,
          sorters,
          setSorters,
          sorter,
          setSorter,
          createLinkForSyncWithLocation,
          pageCount,
          overtime
        } = (0, import_core8.useTable)({
          permanentSorter,
          permanentFilter,
          initialCurrent,
          initialPageSize,
          pagination,
          hasPagination,
          filters: filtersFromProp,
          sorters: sortersFromProp,
          initialSorter,
          initialFilter,
          syncWithLocation,
          resource,
          defaultSetFilterBehavior,
          successNotification,
          errorNotification,
          queryOptions,
          liveMode: liveModeFromProp,
          onLiveEvent,
          liveParams,
          meta: (0, import_core8.pickNotDeprecated)(meta, metaData),
          metaData: (0, import_core8.pickNotDeprecated)(meta, metaData),
          dataProviderName
        });
        const breakpoint = import_antd22.Grid.useBreakpoint();
        const [form] = import_antd22.Form.useForm();
        const formSF = (0, import_sunflower_antd3.useForm)({
          form
        });
        const liveMode = (0, import_core8.useLiveMode)(liveModeFromProp);
        const hasPaginationString = hasPagination === false ? "off" : "server";
        const isPaginationEnabled = ((pagination == null ? void 0 : pagination.mode) ?? hasPaginationString) !== "off";
        const preferredInitialFilters = (0, import_core8.pickNotDeprecated)(
          filtersFromProp == null ? void 0 : filtersFromProp.initial,
          initialFilter
        );
        const { data, isFetched, isLoading } = tableQueryResult;
        const onChange = /* @__PURE__ */ __name2((paginationState, tableFilters, sorter2) => {
          if (tableFilters && Object.keys(tableFilters).length > 0) {
            const crudFilters = mapAntdFilterToCrudFilter(
              tableFilters,
              filters,
              preferredInitialFilters
            );
            setFilters(crudFilters);
          }
          if (sorter2 && Object.keys(sorter2).length > 0) {
            const crudSorting = mapAntdSorterToCrudSorting(sorter2);
            setSorters(crudSorting);
          }
          if (isPaginationEnabled) {
            setCurrent == null ? void 0 : setCurrent(paginationState.current || 1);
            setPageSize == null ? void 0 : setPageSize(paginationState.pageSize || 10);
          }
        }, "onChange");
        const onFinish = /* @__PURE__ */ __name2(async (value) => {
          if (onSearch) {
            const searchFilters = await onSearch(value);
            setFilters(searchFilters);
            if (isPaginationEnabled) {
              setCurrent == null ? void 0 : setCurrent(1);
            }
          }
        }, "onFinish");
        const antdPagination = /* @__PURE__ */ __name2(() => {
          if (isPaginationEnabled) {
            return {
              itemRender: (page, type, element) => {
                var _a;
                const link = createLinkForSyncWithLocation({
                  pagination: {
                    pageSize,
                    current: page
                  },
                  sorters,
                  filters
                });
                if (type === "page") {
                  return (0, import_react52.createElement)(PaginationLink, {
                    to: link,
                    element: `${page}`
                  });
                }
                if (type === "next" || type === "prev") {
                  return (0, import_react52.createElement)(PaginationLink, {
                    to: link,
                    element
                  });
                }
                if (type === "jump-next" || type === "jump-prev") {
                  const elementChildren = (_a = element == null ? void 0 : element.props) == null ? void 0 : _a.children;
                  return (0, import_react52.createElement)(PaginationLink, {
                    to: link,
                    element: import_react52.Children.count(elementChildren) > 1 ? (0, import_react52.createElement)(
                      import_react52.Fragment,
                      {},
                      elementChildren
                    ) : elementChildren
                  });
                }
                return element;
              },
              pageSize,
              current,
              simple: !breakpoint.sm,
              position: !breakpoint.sm ? ["bottomCenter"] : ["bottomRight"],
              total: data == null ? void 0 : data.total
            };
          }
          return false;
        }, "antdPagination");
        return {
          searchFormProps: {
            ...formSF.formProps,
            onFinish
          },
          tableProps: {
            dataSource: data == null ? void 0 : data.data,
            loading: liveMode === "auto" ? isLoading : !isFetched,
            onChange,
            pagination: antdPagination(),
            scroll: { x: true }
          },
          tableQueryResult,
          sorters,
          sorter,
          filters,
          setSorters,
          setSorter,
          setFilters,
          current,
          setCurrent,
          pageSize,
          setPageSize,
          pageCount,
          createLinkForSyncWithLocation,
          overtime
        };
      }, "useTable");
      var useEditableTable = /* @__PURE__ */ __name2(({
        autoSubmitClose = true,
        ...props
      } = {}) => {
        const table = useTable2({
          ...props,
          successNotification: void 0,
          errorNotification: void 0
        });
        const edit = useForm3({
          ...props,
          action: "edit",
          redirect: false
        });
        const { id: editId, setId, saveButtonProps } = edit;
        const cancelButtonProps = {
          onClick: () => {
            setId(void 0);
          }
        };
        const editButtonProps = /* @__PURE__ */ __name2((id) => {
          return {
            onClick: () => setId(id)
          };
        }, "editButtonProps");
        const isEditing = /* @__PURE__ */ __name2((id) => id === editId, "isEditing");
        return {
          ...table,
          ...edit,
          formProps: {
            ...edit.formProps,
            onFinish: async (values) => {
              const result = await edit.onFinish(values);
              if (autoSubmitClose) {
                setId(void 0);
              }
              return result;
            }
          },
          saveButtonProps,
          cancelButtonProps,
          editButtonProps,
          isEditing
        };
      }, "useEditableTable");
      var import_core9 = require_dist3();
      var useSelect3 = /* @__PURE__ */ __name2((props) => {
        const { queryResult, defaultValueQueryResult, onSearch, options } = (0, import_core9.useSelect)(props);
        return {
          selectProps: {
            options,
            onSearch,
            loading: defaultValueQueryResult.isFetching,
            showSearch: true,
            filterOption: false
          },
          queryResult,
          defaultValueQueryResult
        };
      }, "useSelect");
      var import_core10 = require_dist3();
      var useCheckboxGroup = /* @__PURE__ */ __name2(({
        resource,
        sort,
        sorters,
        filters,
        optionLabel,
        optionValue,
        queryOptions,
        fetchSize,
        pagination,
        liveMode,
        defaultValue,
        onLiveEvent,
        liveParams,
        meta,
        metaData,
        dataProviderName
      }) => {
        const { queryResult, options } = (0, import_core10.useSelect)({
          resource,
          sort,
          sorters,
          filters,
          optionLabel,
          optionValue,
          queryOptions,
          fetchSize,
          pagination,
          liveMode,
          defaultValue,
          onLiveEvent,
          liveParams,
          meta: (0, import_core10.pickNotDeprecated)(meta, metaData),
          metaData: (0, import_core10.pickNotDeprecated)(meta, metaData),
          dataProviderName
        });
        return {
          checkboxGroupProps: {
            options,
            defaultValue
          },
          queryResult
        };
      }, "useCheckboxGroup");
      var import_core11 = require_dist3();
      var useRadioGroup = /* @__PURE__ */ __name2(({
        resource,
        sort,
        sorters,
        filters,
        optionLabel,
        optionValue,
        queryOptions,
        fetchSize,
        pagination,
        liveMode,
        defaultValue,
        onLiveEvent,
        liveParams,
        meta,
        metaData,
        dataProviderName
      }) => {
        const { queryResult, options } = (0, import_core11.useSelect)({
          resource,
          sort,
          sorters,
          filters,
          optionLabel,
          optionValue,
          queryOptions,
          fetchSize,
          pagination,
          liveMode,
          defaultValue,
          onLiveEvent,
          liveParams,
          meta: (0, import_core11.pickNotDeprecated)(meta, metaData),
          metaData: (0, import_core11.pickNotDeprecated)(meta, metaData),
          dataProviderName
        });
        return {
          radioGroupProps: {
            options,
            defaultValue
          },
          queryResult
        };
      }, "useRadioGroup");
      var import_react62 = __toESM2(__require("react"));
      var import_antd32 = __require("antd");
      var import_core12 = require_dist3();
      var useImport = /* @__PURE__ */ __name2(({
        resource: resourceFromProp,
        resourceName,
        mapData = /* @__PURE__ */ __name2((item) => item, "mapData"),
        paparseOptions,
        batchSize = Number.MAX_SAFE_INTEGER,
        onFinish,
        meta,
        metaData,
        dataProviderName,
        onProgress: onProgressFromProp
      } = {}) => {
        const t = (0, import_core12.useTranslate)();
        const { resource } = (0, import_core12.useResource)(resourceFromProp ?? resourceName);
        const { mutationResult, isLoading, handleChange } = (0, import_core12.useImport)({
          resource: (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
          mapData,
          paparseOptions,
          batchSize,
          meta: (0, import_core12.pickNotDeprecated)(meta, metaData),
          metaData: (0, import_core12.pickNotDeprecated)(meta, metaData),
          dataProviderName,
          onFinish,
          onProgress: onProgressFromProp ?? (({ totalAmount, processedAmount }) => {
            if (totalAmount > 0 && processedAmount > 0) {
              const description = /* @__PURE__ */ import_react62.default.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "-7px"
                  }
                },
                /* @__PURE__ */ import_react62.default.createElement(
                  import_antd32.Progress,
                  {
                    type: "circle",
                    percent: Math.floor(
                      processedAmount / totalAmount * 100
                    ),
                    size: 50,
                    strokeColor: "#1890ff",
                    status: "normal"
                  }
                ),
                /* @__PURE__ */ import_react62.default.createElement("span", { style: { marginLeft: 8, width: "100%" } }, t(
                  "notifications.importProgress",
                  {
                    processed: processedAmount,
                    total: totalAmount
                  },
                  `Importing: ${processedAmount}/${totalAmount}`
                ))
              );
              import_antd32.notification.open({
                description,
                message: null,
                key: `${resource}-import`,
                duration: 0
              });
              if (processedAmount >= totalAmount) {
              }
              if (processedAmount === totalAmount) {
                setTimeout(() => {
                  import_antd32.notification.destroy(`${resource}-import`);
                }, 4500);
              }
            }
          })
        });
        return {
          uploadProps: {
            onChange: handleChange,
            beforeUpload: () => false,
            showUploadList: false,
            accept: ".csv"
          },
          buttonProps: {
            type: "default",
            loading: isLoading
          },
          mutationResult,
          isLoading
        };
      }, "useImport");
      var import_react72 = __require("react");
      var import_antd42 = __require("antd");
      var import_core13 = require_dist3();
      var import_core14 = require_dist3();
      var useSimpleList = /* @__PURE__ */ __name2(({
        resource,
        initialCurrent,
        initialPageSize,
        pagination,
        hasPagination = true,
        initialSorter,
        permanentSorter,
        initialFilter,
        permanentFilter,
        defaultSetFilterBehavior,
        filters: filtersFromProp,
        sorters: sortersFromProp,
        onSearch,
        queryOptions,
        syncWithLocation,
        successNotification,
        errorNotification,
        liveMode: liveModeFromProp,
        onLiveEvent,
        liveParams,
        meta,
        metaData,
        dataProviderName
      } = {}) => {
        const {
          sorters,
          sorter,
          filters,
          current,
          pageSize,
          pageCount,
          setFilters,
          setCurrent,
          setPageSize,
          setSorter,
          setSorters,
          createLinkForSyncWithLocation,
          tableQueryResult: queryResult,
          overtime
        } = (0, import_core13.useTable)({
          resource,
          initialSorter,
          permanentSorter,
          initialFilter,
          permanentFilter,
          filters: filtersFromProp,
          sorters: sortersFromProp,
          defaultSetFilterBehavior,
          initialCurrent,
          initialPageSize,
          queryOptions,
          successNotification,
          errorNotification,
          liveMode: liveModeFromProp,
          onLiveEvent,
          liveParams,
          meta: (0, import_core13.pickNotDeprecated)(meta, metaData),
          metaData: (0, import_core13.pickNotDeprecated)(meta, metaData),
          syncWithLocation,
          dataProviderName,
          pagination,
          hasPagination
        });
        const hasPaginationString = hasPagination === false ? "off" : "server";
        const isPaginationEnabled = ((pagination == null ? void 0 : pagination.mode) ?? hasPaginationString) !== "off";
        const breakpoint = import_antd42.Grid.useBreakpoint();
        const liveMode = (0, import_core14.useLiveMode)(liveModeFromProp);
        const [form] = import_antd42.Form.useForm();
        const { data, isFetched, isLoading } = queryResult;
        const onChange = /* @__PURE__ */ __name2((page, pageSize2) => {
          if (isPaginationEnabled) {
            setCurrent(page);
            setPageSize(pageSize2 || 10);
          }
        }, "onChange");
        const onFinish = /* @__PURE__ */ __name2(async (values) => {
          if (onSearch) {
            const searchFilters = await onSearch(values);
            if (isPaginationEnabled) {
              setCurrent == null ? void 0 : setCurrent(1);
            }
            return setFilters(searchFilters);
          }
        }, "onFinish");
        const antdPagination = /* @__PURE__ */ __name2(() => {
          if (isPaginationEnabled) {
            return {
              itemRender: (page, type, element) => {
                var _a;
                const link = createLinkForSyncWithLocation({
                  pagination: {
                    pageSize,
                    current: page
                  },
                  sorters,
                  filters
                });
                if (type === "page") {
                  return (0, import_react72.createElement)(PaginationLink, {
                    to: link,
                    element: `${page}`
                  });
                }
                if (type === "next" || type === "prev") {
                  return (0, import_react72.createElement)(PaginationLink, {
                    to: link,
                    element
                  });
                }
                if (type === "jump-next" || type === "jump-prev") {
                  const elementChildren = (_a = element == null ? void 0 : element.props) == null ? void 0 : _a.children;
                  return (0, import_react72.createElement)(PaginationLink, {
                    to: link,
                    element: import_react72.Children.count(elementChildren) > 1 ? (0, import_react72.createElement)(
                      import_react72.Fragment,
                      {},
                      elementChildren
                    ) : elementChildren
                  });
                }
                return element;
              },
              pageSize,
              current,
              simple: !breakpoint.sm,
              total: data == null ? void 0 : data.total,
              onChange
            };
          }
          return false;
        }, "antdPagination");
        return {
          searchFormProps: {
            form,
            onFinish
          },
          listProps: {
            dataSource: data == null ? void 0 : data.data,
            loading: liveMode === "auto" ? isLoading : !isFetched,
            pagination: antdPagination()
          },
          queryResult,
          filters,
          setFilters,
          sorter,
          setSorter,
          sorters,
          setSorters,
          current,
          setCurrent,
          pageSize,
          setPageSize,
          pageCount,
          createLinkForSyncWithLocation,
          overtime
        };
      }, "useSimpleList");
      var import_react82 = __require("react");
      var useFileUploadState = /* @__PURE__ */ __name2(() => {
        const [isLoading, setIsloading] = (0, import_react82.useState)(false);
        const onChange = (0, import_react82.useCallback)((info) => {
          const fileListLoadings = mapStatusToLoading(info.fileList);
          if (fileListLoadings.includes(true)) {
            setIsloading(true);
          } else {
            setIsloading(false);
          }
        }, []);
        return (0, import_react82.useMemo)(() => ({ isLoading, onChange }), [isLoading]);
      }, "useFileUploadState");
      var mapStatusToLoading = /* @__PURE__ */ __name2((files) => {
        return files.map((file) => {
          switch (file.status) {
            case "uploading":
              return true;
            default:
              return false;
          }
        });
      }, "mapStatusToLoading");
      var import_react102 = __require("react");
      var import_react92 = __toESM2(__require("react"));
      var ThemedLayoutContext = import_react92.default.createContext({
        siderCollapsed: false,
        mobileSiderOpen: false,
        setSiderCollapsed: () => void 0,
        setMobileSiderOpen: () => void 0
      });
      var ThemedLayoutContextProvider = /* @__PURE__ */ __name2(({ children, initialSiderCollapsed }) => {
        const [siderCollapsed, setSiderCollapsed] = (0, import_react92.useState)(
          initialSiderCollapsed ?? false
        );
        const [mobileSiderOpen, setMobileSiderOpen] = (0, import_react92.useState)(false);
        return /* @__PURE__ */ import_react92.default.createElement(
          ThemedLayoutContext.Provider,
          {
            value: {
              siderCollapsed,
              mobileSiderOpen,
              setSiderCollapsed,
              setMobileSiderOpen
            }
          },
          children
        );
      }, "ThemedLayoutContextProvider");
      var useSiderVisible = /* @__PURE__ */ __name2(() => {
        const {
          mobileSiderOpen,
          siderCollapsed,
          setMobileSiderOpen,
          setSiderCollapsed
        } = (0, import_react102.useContext)(ThemedLayoutContext);
        return {
          siderVisible: mobileSiderOpen,
          setSiderVisible: setMobileSiderOpen,
          drawerSiderVisible: siderCollapsed,
          setDrawerSiderVisible: setSiderCollapsed
        };
      }, "useSiderVisible");
      var import_react11 = __require("react");
      var useThemedLayoutContext = /* @__PURE__ */ __name2(() => {
        const {
          mobileSiderOpen,
          siderCollapsed,
          setMobileSiderOpen,
          setSiderCollapsed
        } = (0, import_react11.useContext)(ThemedLayoutContext);
        return {
          mobileSiderOpen,
          siderCollapsed,
          setMobileSiderOpen,
          setSiderCollapsed
        };
      }, "useThemedLayoutContext");
      var import_antd62 = __require("antd");
      var import_react13 = __toESM2(__require("react"));
      var import_react12 = __toESM2(__require("react"));
      var import_antd52 = __require("antd");
      var import_icons = __require("@ant-design/icons");
      var UndoableNotification = /* @__PURE__ */ __name2(({
        message,
        cancelMutation,
        undoableTimeout
      }) => /* @__PURE__ */ import_react12.default.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "-7px"
          }
        },
        /* @__PURE__ */ import_react12.default.createElement(
          import_antd52.Progress,
          {
            type: "circle",
            percent: (undoableTimeout ?? 0) * 20,
            format: (time) => time && time / 20,
            size: 50,
            strokeColor: "#1890ff",
            status: "normal"
          }
        ),
        /* @__PURE__ */ import_react12.default.createElement("span", { style: { marginLeft: 8, width: "100%" } }, message),
        /* @__PURE__ */ import_react12.default.createElement(
          import_antd52.Button,
          {
            style: { flexShrink: 0 },
            onClick: cancelMutation,
            disabled: undoableTimeout === 0,
            icon: /* @__PURE__ */ import_react12.default.createElement(import_icons.UndoOutlined, null)
          }
        )
      ), "UndoableNotification");
      var notificationProvider = {
        open: ({
          key,
          message,
          description,
          type,
          cancelMutation,
          undoableTimeout
        }) => {
          if (type === "progress") {
            import_antd62.notification.open({
              key,
              description: /* @__PURE__ */ import_react13.default.createElement(
                UndoableNotification,
                {
                  notificationKey: key,
                  message,
                  cancelMutation: () => {
                    cancelMutation == null ? void 0 : cancelMutation();
                    import_antd62.notification.destroy(key ?? "");
                  },
                  undoableTimeout
                }
              ),
              message: null,
              duration: 0,
              closeIcon: /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null)
            });
          } else {
            import_antd62.notification.open({
              key,
              description: message,
              message: description ?? null,
              type
            });
          }
        },
        close: (key) => import_antd62.notification.destroy(key)
      };
      var useNotificationProvider = /* @__PURE__ */ __name2(() => {
        const { notification: notificationFromContext } = import_antd62.App.useApp();
        const notification2 = "open" in notificationFromContext ? notificationFromContext : import_antd62.notification;
        const notificationProvider2 = {
          open: ({
            key,
            message,
            description,
            type,
            cancelMutation,
            undoableTimeout
          }) => {
            if (type === "progress") {
              notification2.open({
                key,
                description: /* @__PURE__ */ import_react13.default.createElement(
                  UndoableNotification,
                  {
                    notificationKey: key,
                    message,
                    cancelMutation: () => {
                      cancelMutation == null ? void 0 : cancelMutation();
                      notification2.destroy(key ?? "");
                    },
                    undoableTimeout
                  }
                ),
                message: null,
                duration: 0,
                closeIcon: /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null)
              });
            } else {
              notification2.open({
                key,
                description: message,
                message: description ?? null,
                type
              });
            }
          },
          close: (key) => notification2.destroy(key)
        };
        return notificationProvider2;
      }, "useNotificationProvider");
      var import_react16 = __toESM2(__require("react"));
      var import_antd92 = __require("antd");
      var import_react14 = __toESM2(__require("react"));
      var import_antd72 = __require("antd");
      var import_icons2 = __require("@ant-design/icons");
      var import_core15 = require_dist3();
      var drawerButtonStyles = {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        position: "fixed",
        top: 64,
        zIndex: 999
      };
      var { SubMenu } = import_antd72.Menu;
      var Sider = /* @__PURE__ */ __name2(({
        Title: TitleFromProps,
        render,
        meta
      }) => {
        const [collapsed, setCollapsed] = (0, import_react14.useState)(false);
        const [drawerOpen, setDrawerOpen] = (0, import_react14.useState)(false);
        const isExistAuthentication = (0, import_core15.useIsExistAuthentication)();
        const routerType = (0, import_core15.useRouterType)();
        const NewLink = (0, import_core15.useLink)();
        const { warnWhen, setWarnWhen } = (0, import_core15.useWarnAboutChange)();
        const { Link: LegacyLink } = (0, import_core15.useRouterContext)();
        const Link3 = routerType === "legacy" ? LegacyLink : NewLink;
        const TitleFromContext = (0, import_core15.useTitle)();
        const translate = (0, import_core15.useTranslate)();
        const { menuItems, selectedKey, defaultOpenKeys } = (0, import_core15.useMenu)({ meta });
        const breakpoint = import_antd72.Grid.useBreakpoint();
        const { hasDashboard } = (0, import_core15.useRefineContext)();
        const authProvider = (0, import_core15.useActiveAuthProvider)();
        const { mutate: mutateLogout } = (0, import_core15.useLogout)({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const isMobile = typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;
        const RenderToTitle = TitleFromProps ?? TitleFromContext ?? Title;
        const renderTreeView = /* @__PURE__ */ __name2((tree, selectedKey2) => {
          return tree.map((item) => {
            const {
              icon,
              label,
              route,
              key,
              name,
              children,
              parentName,
              meta: meta2,
              options
            } = item;
            if (children.length > 0) {
              return /* @__PURE__ */ import_react14.default.createElement(
                import_core15.CanAccess,
                {
                  key: item.key,
                  resource: name.toLowerCase(),
                  action: "list",
                  params: {
                    resource: item
                  }
                },
                /* @__PURE__ */ import_react14.default.createElement(
                  SubMenu,
                  {
                    key: item.key,
                    icon: icon ?? /* @__PURE__ */ import_react14.default.createElement(import_icons2.UnorderedListOutlined, null),
                    title: label
                  },
                  renderTreeView(children, selectedKey2)
                )
              );
            }
            const isSelected = key === selectedKey2;
            const isRoute = !((0, import_core15.pickNotDeprecated)(meta2 == null ? void 0 : meta2.parent, options == null ? void 0 : options.parent, parentName) !== void 0 && children.length === 0);
            return /* @__PURE__ */ import_react14.default.createElement(
              import_core15.CanAccess,
              {
                key: item.key,
                resource: name.toLowerCase(),
                action: "list",
                params: {
                  resource: item
                }
              },
              /* @__PURE__ */ import_react14.default.createElement(
                import_antd72.Menu.Item,
                {
                  key: item.key,
                  style: {
                    fontWeight: isSelected ? "bold" : "normal"
                  },
                  icon: icon ?? (isRoute && /* @__PURE__ */ import_react14.default.createElement(import_icons2.UnorderedListOutlined, null))
                },
                /* @__PURE__ */ import_react14.default.createElement(Link3, { to: route ?? "" }, label),
                !collapsed && isSelected && /* @__PURE__ */ import_react14.default.createElement("div", { className: "ant-menu-tree-arrow" })
              )
            );
          });
        }, "renderTreeView");
        const handleLogout = /* @__PURE__ */ __name2(() => {
          if (warnWhen) {
            const confirm = window.confirm(
              translate(
                "warnWhenUnsavedChanges",
                "Are you sure you want to leave? You have unsaved changes."
              )
            );
            if (confirm) {
              setWarnWhen(false);
              mutateLogout();
            }
          } else {
            mutateLogout();
          }
        }, "handleLogout");
        const logout = isExistAuthentication && /* @__PURE__ */ import_react14.default.createElement(
          import_antd72.Menu.Item,
          {
            key: "logout",
            onClick: handleLogout,
            icon: /* @__PURE__ */ import_react14.default.createElement(import_icons2.LogoutOutlined, null)
          },
          translate("buttons.logout", "Logout")
        );
        const dashboard = hasDashboard ? /* @__PURE__ */ import_react14.default.createElement(
          import_antd72.Menu.Item,
          {
            key: "dashboard",
            style: {
              fontWeight: selectedKey === "/" ? "bold" : "normal"
            },
            icon: /* @__PURE__ */ import_react14.default.createElement(import_icons2.DashboardOutlined, null)
          },
          /* @__PURE__ */ import_react14.default.createElement(Link3, { to: "/" }, translate("dashboard.title", "Dashboard")),
          !collapsed && selectedKey === "/" && /* @__PURE__ */ import_react14.default.createElement("div", { className: "ant-menu-tree-arrow" })
        ) : null;
        const items = renderTreeView(menuItems, selectedKey);
        const renderSider = /* @__PURE__ */ __name2(() => {
          if (render) {
            return render({
              dashboard,
              items,
              logout,
              collapsed
            });
          }
          return /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, dashboard, items, logout);
        }, "renderSider");
        const renderMenu = /* @__PURE__ */ __name2(() => {
          return /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, /* @__PURE__ */ import_react14.default.createElement(
            import_antd72.Menu,
            {
              theme: "dark",
              selectedKeys: selectedKey ? [selectedKey] : [],
              defaultOpenKeys,
              mode: "inline",
              onClick: () => {
                setDrawerOpen(false);
                if (!breakpoint.lg) {
                  setCollapsed(true);
                }
              }
            },
            renderSider()
          ));
        }, "renderMenu");
        const renderDrawerSider = /* @__PURE__ */ __name2(() => {
          return /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, /* @__PURE__ */ import_react14.default.createElement(
            import_antd72.Drawer,
            {
              open: drawerOpen,
              onClose: () => setDrawerOpen(false),
              placement: "left",
              closable: false,
              width: 200,
              bodyStyle: {
                padding: 0
              },
              maskClosable: true
            },
            /* @__PURE__ */ import_react14.default.createElement(import_antd72.Layout, null, /* @__PURE__ */ import_react14.default.createElement(
              import_antd72.Layout.Sider,
              {
                style: { height: "100vh", overflow: "hidden" }
              },
              /* @__PURE__ */ import_react14.default.createElement(RenderToTitle, { collapsed: false }),
              renderMenu()
            ))
          ), /* @__PURE__ */ import_react14.default.createElement(
            import_antd72.Button,
            {
              style: drawerButtonStyles,
              size: "large",
              onClick: () => setDrawerOpen(true),
              icon: /* @__PURE__ */ import_react14.default.createElement(import_icons2.BarsOutlined, null)
            }
          ));
        }, "renderDrawerSider");
        const renderContent = /* @__PURE__ */ __name2(() => {
          if (isMobile) {
            return renderDrawerSider();
          }
          return /* @__PURE__ */ import_react14.default.createElement(
            import_antd72.Layout.Sider,
            {
              collapsible: true,
              collapsed,
              onCollapse: (collapsed2) => setCollapsed(collapsed2),
              collapsedWidth: 80,
              breakpoint: "lg"
            },
            /* @__PURE__ */ import_react14.default.createElement(RenderToTitle, { collapsed }),
            renderMenu()
          );
        }, "renderContent");
        return /* @__PURE__ */ import_react14.default.createElement(
          import_antd72.ConfigProvider,
          {
            theme: {
              components: {
                Menu: {
                  colorItemBg: "transparent",
                  colorItemText: "#fff",
                  colorItemTextSelected: "#fff",
                  colorItemBgSelected: "transparent",
                  colorItemTextHover: "#fff"
                }
              }
            }
          },
          renderContent()
        );
      }, "Sider");
      var import_core16 = require_dist3();
      var import_antd82 = __require("antd");
      var import_react15 = __toESM2(__require("react"));
      var { Text } = import_antd82.Typography;
      var Header = /* @__PURE__ */ __name2(() => {
        const authProvider = (0, import_core16.useActiveAuthProvider)();
        const { data: user } = (0, import_core16.useGetIdentity)({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const shouldRenderHeader = user && (user.name || user.avatar);
        return shouldRenderHeader ? /* @__PURE__ */ import_react15.default.createElement(
          import_antd82.Layout.Header,
          {
            style: {
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "0px 24px",
              height: "64px"
            }
          },
          /* @__PURE__ */ import_react15.default.createElement(import_antd82.Space, { style: { marginLeft: "8px" } }, (user == null ? void 0 : user.name) && /* @__PURE__ */ import_react15.default.createElement(Text, { style: { color: "white" }, strong: true }, user.name), (user == null ? void 0 : user.avatar) && /* @__PURE__ */ import_react15.default.createElement(import_antd82.Avatar, { src: user == null ? void 0 : user.avatar, alt: user == null ? void 0 : user.name }))
        ) : null;
      }, "Header");
      var Layout2 = /* @__PURE__ */ __name2(({
        children,
        Header: Header2,
        Sider: Sider2,
        Title: Title8,
        Footer,
        OffLayoutArea
      }) => {
        const breakpoint = import_antd92.Grid.useBreakpoint();
        const SiderToRender = Sider2 ?? Sider;
        const HeaderToRender = Header2 ?? Header;
        const isSmall = typeof breakpoint.sm === "undefined" ? true : breakpoint.sm;
        return /* @__PURE__ */ import_react16.default.createElement(import_antd92.Layout, { style: { minHeight: "100vh" } }, /* @__PURE__ */ import_react16.default.createElement(SiderToRender, { Title: Title8 }), /* @__PURE__ */ import_react16.default.createElement(import_antd92.Layout, null, /* @__PURE__ */ import_react16.default.createElement(HeaderToRender, null), /* @__PURE__ */ import_react16.default.createElement(import_antd92.Layout.Content, null, /* @__PURE__ */ import_react16.default.createElement(
          "div",
          {
            style: {
              minHeight: 360,
              padding: isSmall ? 24 : 12
            }
          },
          children
        ), OffLayoutArea && /* @__PURE__ */ import_react16.default.createElement(OffLayoutArea, null)), Footer && /* @__PURE__ */ import_react16.default.createElement(Footer, null)));
      }, "Layout");
      var import_react17 = __toESM2(__require("react"));
      var import_core17 = require_dist3();
      var Title = /* @__PURE__ */ __name2(({ collapsed }) => {
        const routerType = (0, import_core17.useRouterType)();
        const Link3 = (0, import_core17.useLink)();
        const { Link: LegacyLink } = (0, import_core17.useRouterContext)();
        const ActiveLink = routerType === "legacy" ? LegacyLink : Link3;
        return /* @__PURE__ */ import_react17.default.createElement(ActiveLink, { to: "/" }, collapsed ? /* @__PURE__ */ import_react17.default.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }
          },
          /* @__PURE__ */ import_react17.default.createElement(
            "img",
            {
              src: "https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine-mini.svg",
              alt: "Refine",
              style: {
                margin: "0 auto",
                padding: "12px 0",
                maxHeight: "65.5px"
              }
            }
          )
        ) : /* @__PURE__ */ import_react17.default.createElement(
          "img",
          {
            src: "https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine.svg",
            alt: "Refine",
            style: {
              width: "200px",
              padding: "12px 24px"
            }
          }
        ));
      }, "Title");
      var import_react20 = __toESM2(__require("react"));
      var import_antd12 = __require("antd");
      var import_react18 = __toESM2(__require("react"));
      var import_antd102 = __require("antd");
      var import_icons3 = __require("@ant-design/icons");
      var import_core18 = require_dist3();
      var drawerButtonStyles2 = {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        position: "fixed",
        top: 64,
        zIndex: 999
      };
      var { SubMenu: SubMenu2 } = import_antd102.Menu;
      var { useToken } = import_antd102.theme;
      var ThemedSider = /* @__PURE__ */ __name2(({
        Title: TitleFromProps,
        render,
        meta
      }) => {
        const { token } = useToken();
        const [collapsed, setCollapsed] = (0, import_react18.useState)(false);
        const [drawerOpen, setDrawerOpen] = (0, import_react18.useState)(false);
        const isExistAuthentication = (0, import_core18.useIsExistAuthentication)();
        const routerType = (0, import_core18.useRouterType)();
        const NewLink = (0, import_core18.useLink)();
        const { warnWhen, setWarnWhen } = (0, import_core18.useWarnAboutChange)();
        const { Link: LegacyLink } = (0, import_core18.useRouterContext)();
        const Link3 = routerType === "legacy" ? LegacyLink : NewLink;
        const TitleFromContext = (0, import_core18.useTitle)();
        const translate = (0, import_core18.useTranslate)();
        const { menuItems, selectedKey, defaultOpenKeys } = (0, import_core18.useMenu)({ meta });
        const breakpoint = import_antd102.Grid.useBreakpoint();
        const { hasDashboard } = (0, import_core18.useRefineContext)();
        const authProvider = (0, import_core18.useActiveAuthProvider)();
        const { mutate: mutateLogout } = (0, import_core18.useLogout)({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const isMobile = typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;
        const RenderToTitle = TitleFromProps ?? TitleFromContext ?? ThemedTitle;
        const renderTreeView = /* @__PURE__ */ __name2((tree, selectedKey2) => {
          return tree.map((item) => {
            const {
              icon,
              label,
              route,
              key,
              name,
              children,
              parentName,
              meta: meta2,
              options
            } = item;
            if (children.length > 0) {
              return /* @__PURE__ */ import_react18.default.createElement(
                import_core18.CanAccess,
                {
                  key: item.key,
                  resource: name.toLowerCase(),
                  action: "list",
                  params: {
                    resource: item
                  }
                },
                /* @__PURE__ */ import_react18.default.createElement(
                  SubMenu2,
                  {
                    key: item.key,
                    icon: icon ?? /* @__PURE__ */ import_react18.default.createElement(import_icons3.UnorderedListOutlined, null),
                    title: label
                  },
                  renderTreeView(children, selectedKey2)
                )
              );
            }
            const isSelected = key === selectedKey2;
            const isRoute = !((0, import_core18.pickNotDeprecated)(meta2 == null ? void 0 : meta2.parent, options == null ? void 0 : options.parent, parentName) !== void 0 && children.length === 0);
            return /* @__PURE__ */ import_react18.default.createElement(
              import_core18.CanAccess,
              {
                key: item.key,
                resource: name.toLowerCase(),
                action: "list",
                params: {
                  resource: item
                }
              },
              /* @__PURE__ */ import_react18.default.createElement(
                import_antd102.Menu.Item,
                {
                  key: item.key,
                  icon: icon ?? (isRoute && /* @__PURE__ */ import_react18.default.createElement(import_icons3.UnorderedListOutlined, null))
                },
                /* @__PURE__ */ import_react18.default.createElement(Link3, { to: route ?? "" }, label),
                !collapsed && isSelected && /* @__PURE__ */ import_react18.default.createElement("div", { className: "ant-menu-tree-arrow" })
              )
            );
          });
        }, "renderTreeView");
        const handleLogout = /* @__PURE__ */ __name2(() => {
          if (warnWhen) {
            const confirm = window.confirm(
              translate(
                "warnWhenUnsavedChanges",
                "Are you sure you want to leave? You have unsaved changes."
              )
            );
            if (confirm) {
              setWarnWhen(false);
              mutateLogout();
            }
          } else {
            mutateLogout();
          }
        }, "handleLogout");
        const logout = isExistAuthentication && /* @__PURE__ */ import_react18.default.createElement(
          import_antd102.Menu.Item,
          {
            key: "logout",
            onClick: () => handleLogout(),
            icon: /* @__PURE__ */ import_react18.default.createElement(import_icons3.LogoutOutlined, null)
          },
          translate("buttons.logout", "Logout")
        );
        const dashboard = hasDashboard ? /* @__PURE__ */ import_react18.default.createElement(import_antd102.Menu.Item, { key: "dashboard", icon: /* @__PURE__ */ import_react18.default.createElement(import_icons3.DashboardOutlined, null) }, /* @__PURE__ */ import_react18.default.createElement(Link3, { to: "/" }, translate("dashboard.title", "Dashboard")), !collapsed && selectedKey === "/" && /* @__PURE__ */ import_react18.default.createElement("div", { className: "ant-menu-tree-arrow" })) : null;
        const items = renderTreeView(menuItems, selectedKey);
        const renderSider = /* @__PURE__ */ __name2(() => {
          if (render) {
            return render({
              dashboard,
              items,
              logout,
              collapsed
            });
          }
          return /* @__PURE__ */ import_react18.default.createElement(import_react18.default.Fragment, null, dashboard, items, logout);
        }, "renderSider");
        const renderMenu = /* @__PURE__ */ __name2(() => {
          return /* @__PURE__ */ import_react18.default.createElement(import_react18.default.Fragment, null, /* @__PURE__ */ import_react18.default.createElement(
            import_antd102.Menu,
            {
              selectedKeys: selectedKey ? [selectedKey] : [],
              defaultOpenKeys,
              mode: "inline",
              style: {
                marginTop: "8px",
                border: "none"
              },
              onClick: () => {
                setDrawerOpen(false);
                if (!breakpoint.lg) {
                  setCollapsed(true);
                }
              }
            },
            renderSider()
          ));
        }, "renderMenu");
        const renderDrawerSider = /* @__PURE__ */ __name2(() => {
          return /* @__PURE__ */ import_react18.default.createElement(import_react18.default.Fragment, null, /* @__PURE__ */ import_react18.default.createElement(
            import_antd102.Drawer,
            {
              open: drawerOpen,
              onClose: () => setDrawerOpen(false),
              placement: "left",
              closable: false,
              width: 200,
              bodyStyle: {
                padding: 0
              },
              maskClosable: true
            },
            /* @__PURE__ */ import_react18.default.createElement(import_antd102.Layout, null, /* @__PURE__ */ import_react18.default.createElement(
              import_antd102.Layout.Sider,
              {
                style: {
                  height: "100vh",
                  overflow: "hidden",
                  backgroundColor: token.colorBgContainer,
                  borderRight: `1px solid ${token.colorBgElevated}`
                }
              },
              /* @__PURE__ */ import_react18.default.createElement(
                "div",
                {
                  style: {
                    width: "200px",
                    padding: "0 16px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    height: "64px",
                    backgroundColor: token.colorBgElevated
                  }
                },
                /* @__PURE__ */ import_react18.default.createElement(RenderToTitle, { collapsed: false })
              ),
              renderMenu()
            ))
          ), /* @__PURE__ */ import_react18.default.createElement(
            import_antd102.Button,
            {
              style: drawerButtonStyles2,
              size: "large",
              onClick: () => setDrawerOpen(true),
              icon: /* @__PURE__ */ import_react18.default.createElement(import_icons3.BarsOutlined, null)
            }
          ));
        }, "renderDrawerSider");
        if (isMobile) {
          return renderDrawerSider();
        }
        return /* @__PURE__ */ import_react18.default.createElement(
          import_antd102.Layout.Sider,
          {
            style: {
              backgroundColor: token.colorBgContainer,
              borderRight: `1px solid ${token.colorBgElevated}`
            },
            collapsible: true,
            collapsed,
            onCollapse: (collapsed2) => setCollapsed(collapsed2),
            collapsedWidth: 80,
            breakpoint: "lg",
            trigger: /* @__PURE__ */ import_react18.default.createElement(
              import_antd102.Button,
              {
                type: "text",
                style: {
                  borderRadius: 0,
                  height: "100%",
                  width: "100%",
                  backgroundColor: token.colorBgElevated
                }
              },
              collapsed ? /* @__PURE__ */ import_react18.default.createElement(
                import_icons3.RightOutlined,
                {
                  style: {
                    color: token.colorPrimary
                  }
                }
              ) : /* @__PURE__ */ import_react18.default.createElement(
                import_icons3.LeftOutlined,
                {
                  style: {
                    color: token.colorPrimary
                  }
                }
              )
            )
          },
          /* @__PURE__ */ import_react18.default.createElement(
            "div",
            {
              style: {
                width: collapsed ? "80px" : "200px",
                padding: collapsed ? "0" : "0 16px",
                display: "flex",
                justifyContent: collapsed ? "center" : "flex-start",
                alignItems: "center",
                height: "64px",
                backgroundColor: token.colorBgElevated,
                fontSize: "14px"
              }
            },
            /* @__PURE__ */ import_react18.default.createElement(RenderToTitle, { collapsed })
          ),
          renderMenu()
        );
      }, "ThemedSider");
      var import_react19 = __toESM2(__require("react"));
      var import_antd112 = __require("antd");
      var import_core19 = require_dist3();
      var { Text: Text2 } = import_antd112.Typography;
      var { useToken: useToken2 } = import_antd112.theme;
      var ThemedHeader = /* @__PURE__ */ __name2(() => {
        const { token } = useToken2();
        const authProvider = (0, import_core19.useActiveAuthProvider)();
        const { data: user } = (0, import_core19.useGetIdentity)({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const shouldRenderHeader = user && (user.name || user.avatar);
        if (!shouldRenderHeader) {
          return null;
        }
        return /* @__PURE__ */ import_react19.default.createElement(
          import_antd112.Layout.Header,
          {
            style: {
              backgroundColor: token.colorBgElevated,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "0px 24px",
              height: "64px"
            }
          },
          /* @__PURE__ */ import_react19.default.createElement(import_antd112.Space, null, /* @__PURE__ */ import_react19.default.createElement(import_antd112.Space, { size: "middle" }, (user == null ? void 0 : user.name) && /* @__PURE__ */ import_react19.default.createElement(Text2, { strong: true }, user.name), (user == null ? void 0 : user.avatar) && /* @__PURE__ */ import_react19.default.createElement(import_antd112.Avatar, { src: user == null ? void 0 : user.avatar, alt: user == null ? void 0 : user.name })))
        );
      }, "ThemedHeader");
      var ThemedLayout = /* @__PURE__ */ __name2(({
        children,
        Header: Header2,
        Sider: Sider2,
        Title: Title8,
        Footer,
        OffLayoutArea
      }) => {
        const breakpoint = import_antd12.Grid.useBreakpoint();
        const SiderToRender = Sider2 ?? ThemedSider;
        const HeaderToRender = Header2 ?? ThemedHeader;
        const isSmall = typeof breakpoint.sm === "undefined" ? true : breakpoint.sm;
        return /* @__PURE__ */ import_react20.default.createElement(import_antd12.Layout, { style: { minHeight: "100vh" } }, /* @__PURE__ */ import_react20.default.createElement(SiderToRender, { Title: Title8 }), /* @__PURE__ */ import_react20.default.createElement(import_antd12.Layout, null, /* @__PURE__ */ import_react20.default.createElement(HeaderToRender, null), /* @__PURE__ */ import_react20.default.createElement(import_antd12.Layout.Content, null, /* @__PURE__ */ import_react20.default.createElement(
          "div",
          {
            style: {
              minHeight: 360,
              padding: isSmall ? 24 : 12
            }
          },
          children
        ), OffLayoutArea && /* @__PURE__ */ import_react20.default.createElement(OffLayoutArea, null)), Footer && /* @__PURE__ */ import_react20.default.createElement(Footer, null)));
      }, "ThemedLayout");
      var import_react21 = __toESM2(__require("react"));
      var import_core20 = require_dist3();
      var import_antd13 = __require("antd");
      var { useToken: useToken3 } = import_antd13.theme;
      var defaultText = "refine Project";
      var defaultIcon = /* @__PURE__ */ import_react21.default.createElement(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "data-testid": "refine-logo"
        },
        /* @__PURE__ */ import_react21.default.createElement(
          "path",
          {
            d: "M12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ import_react21.default.createElement(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18V6Z",
            fill: "currentColor"
          }
        )
      );
      var ThemedTitle = /* @__PURE__ */ __name2(({
        collapsed,
        icon = defaultIcon,
        text = defaultText,
        wrapperStyles
      }) => {
        const { token } = useToken3();
        const routerType = (0, import_core20.useRouterType)();
        const Link3 = (0, import_core20.useLink)();
        const { Link: LegacyLink } = (0, import_core20.useRouterContext)();
        const ActiveLink = routerType === "legacy" ? LegacyLink : Link3;
        return /* @__PURE__ */ import_react21.default.createElement(
          ActiveLink,
          {
            to: "/",
            style: {
              display: "inline-block",
              textDecoration: "none"
            }
          },
          /* @__PURE__ */ import_react21.default.createElement(
            import_antd13.Space,
            {
              style: {
                display: "flex",
                alignItems: "center",
                fontSize: "inherit",
                ...wrapperStyles
              }
            },
            /* @__PURE__ */ import_react21.default.createElement(
              "div",
              {
                style: {
                  height: "24px",
                  width: "24px",
                  color: token.colorPrimary
                }
              },
              icon
            ),
            !collapsed && /* @__PURE__ */ import_react21.default.createElement(
              import_antd13.Typography.Title,
              {
                style: {
                  fontSize: "inherit",
                  marginBottom: 0,
                  fontWeight: 700
                }
              },
              text
            )
          )
        );
      }, "ThemedTitle");
      var import_react24 = __toESM2(__require("react"));
      var import_antd16 = __require("antd");
      var import_react222 = __toESM2(__require("react"));
      var import_antd14 = __require("antd");
      var import_icons4 = __require("@ant-design/icons");
      var import_core21 = require_dist3();
      var drawerButtonStyles3 = {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        position: "fixed",
        top: 64,
        zIndex: 999
      };
      var { SubMenu: SubMenu3 } = import_antd14.Menu;
      var { useToken: useToken4 } = import_antd14.theme;
      var ThemedSiderV2 = /* @__PURE__ */ __name2(({
        Title: TitleFromProps,
        render,
        meta,
        fixed,
        activeItemDisabled = false
      }) => {
        const { token } = useToken4();
        const {
          siderCollapsed,
          setSiderCollapsed,
          mobileSiderOpen,
          setMobileSiderOpen
        } = useThemedLayoutContext();
        const isExistAuthentication = (0, import_core21.useIsExistAuthentication)();
        const routerType = (0, import_core21.useRouterType)();
        const NewLink = (0, import_core21.useLink)();
        const { warnWhen, setWarnWhen } = (0, import_core21.useWarnAboutChange)();
        const { Link: LegacyLink } = (0, import_core21.useRouterContext)();
        const Link3 = routerType === "legacy" ? LegacyLink : NewLink;
        const TitleFromContext = (0, import_core21.useTitle)();
        const translate = (0, import_core21.useTranslate)();
        const { menuItems, selectedKey, defaultOpenKeys } = (0, import_core21.useMenu)({ meta });
        const breakpoint = import_antd14.Grid.useBreakpoint();
        const { hasDashboard } = (0, import_core21.useRefineContext)();
        const authProvider = (0, import_core21.useActiveAuthProvider)();
        const { mutate: mutateLogout } = (0, import_core21.useLogout)({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const isMobile = typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;
        const RenderToTitle = TitleFromProps ?? TitleFromContext ?? ThemedTitleV2;
        const renderTreeView = /* @__PURE__ */ __name2((tree, selectedKey2) => {
          return tree.map((item) => {
            const {
              icon,
              label,
              route,
              key,
              name,
              children,
              parentName,
              meta: meta2,
              options
            } = item;
            if (children.length > 0) {
              return /* @__PURE__ */ import_react222.default.createElement(
                import_core21.CanAccess,
                {
                  key: item.key,
                  resource: name.toLowerCase(),
                  action: "list",
                  params: {
                    resource: item
                  }
                },
                /* @__PURE__ */ import_react222.default.createElement(
                  SubMenu3,
                  {
                    key: item.key,
                    icon: icon ?? /* @__PURE__ */ import_react222.default.createElement(import_icons4.UnorderedListOutlined, null),
                    title: label
                  },
                  renderTreeView(children, selectedKey2)
                )
              );
            }
            const isSelected = key === selectedKey2;
            const isRoute = !((0, import_core21.pickNotDeprecated)(meta2 == null ? void 0 : meta2.parent, options == null ? void 0 : options.parent, parentName) !== void 0 && children.length === 0);
            const linkStyle = activeItemDisabled && isSelected ? { pointerEvents: "none" } : {};
            return /* @__PURE__ */ import_react222.default.createElement(
              import_core21.CanAccess,
              {
                key: item.key,
                resource: name.toLowerCase(),
                action: "list",
                params: {
                  resource: item
                }
              },
              /* @__PURE__ */ import_react222.default.createElement(
                import_antd14.Menu.Item,
                {
                  key: item.key,
                  icon: icon ?? (isRoute && /* @__PURE__ */ import_react222.default.createElement(import_icons4.UnorderedListOutlined, null)),
                  style: linkStyle
                },
                /* @__PURE__ */ import_react222.default.createElement(Link3, { to: route ?? "", style: linkStyle }, label),
                !siderCollapsed && isSelected && /* @__PURE__ */ import_react222.default.createElement("div", { className: "ant-menu-tree-arrow" })
              )
            );
          });
        }, "renderTreeView");
        const handleLogout = /* @__PURE__ */ __name2(() => {
          if (warnWhen) {
            const confirm = window.confirm(
              translate(
                "warnWhenUnsavedChanges",
                "Are you sure you want to leave? You have unsaved changes."
              )
            );
            if (confirm) {
              setWarnWhen(false);
              mutateLogout();
            }
          } else {
            mutateLogout();
          }
        }, "handleLogout");
        const logout = isExistAuthentication && /* @__PURE__ */ import_react222.default.createElement(
          import_antd14.Menu.Item,
          {
            key: "logout",
            onClick: () => handleLogout(),
            icon: /* @__PURE__ */ import_react222.default.createElement(import_icons4.LogoutOutlined, null)
          },
          translate("buttons.logout", "Logout")
        );
        const dashboard = hasDashboard ? /* @__PURE__ */ import_react222.default.createElement(import_antd14.Menu.Item, { key: "dashboard", icon: /* @__PURE__ */ import_react222.default.createElement(import_icons4.DashboardOutlined, null) }, /* @__PURE__ */ import_react222.default.createElement(Link3, { to: "/" }, translate("dashboard.title", "Dashboard")), !siderCollapsed && selectedKey === "/" && /* @__PURE__ */ import_react222.default.createElement("div", { className: "ant-menu-tree-arrow" })) : null;
        const items = renderTreeView(menuItems, selectedKey);
        const renderSider = /* @__PURE__ */ __name2(() => {
          if (render) {
            return render({
              dashboard,
              items,
              logout,
              collapsed: siderCollapsed
            });
          }
          return /* @__PURE__ */ import_react222.default.createElement(import_react222.default.Fragment, null, dashboard, items, logout);
        }, "renderSider");
        const renderMenu = /* @__PURE__ */ __name2(() => {
          return /* @__PURE__ */ import_react222.default.createElement(
            import_antd14.Menu,
            {
              selectedKeys: selectedKey ? [selectedKey] : [],
              defaultOpenKeys,
              mode: "inline",
              style: {
                paddingTop: "8px",
                border: "none",
                overflow: "auto",
                height: "calc(100% - 72px)"
              },
              onClick: () => {
                setMobileSiderOpen(false);
              }
            },
            renderSider()
          );
        }, "renderMenu");
        const renderDrawerSider = /* @__PURE__ */ __name2(() => {
          return /* @__PURE__ */ import_react222.default.createElement(import_react222.default.Fragment, null, /* @__PURE__ */ import_react222.default.createElement(
            import_antd14.Drawer,
            {
              open: mobileSiderOpen,
              onClose: () => setMobileSiderOpen(false),
              placement: "left",
              closable: false,
              width: 200,
              bodyStyle: {
                padding: 0
              },
              maskClosable: true
            },
            /* @__PURE__ */ import_react222.default.createElement(import_antd14.Layout, null, /* @__PURE__ */ import_react222.default.createElement(
              import_antd14.Layout.Sider,
              {
                style: {
                  height: "100vh",
                  backgroundColor: token.colorBgContainer,
                  borderRight: `1px solid ${token.colorBgElevated}`
                }
              },
              /* @__PURE__ */ import_react222.default.createElement(
                "div",
                {
                  style: {
                    width: "200px",
                    padding: "0 16px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    height: "64px",
                    backgroundColor: token.colorBgElevated
                  }
                },
                /* @__PURE__ */ import_react222.default.createElement(RenderToTitle, { collapsed: false })
              ),
              renderMenu()
            ))
          ), /* @__PURE__ */ import_react222.default.createElement(
            import_antd14.Button,
            {
              style: drawerButtonStyles3,
              size: "large",
              onClick: () => setMobileSiderOpen(true),
              icon: /* @__PURE__ */ import_react222.default.createElement(import_icons4.BarsOutlined, null)
            }
          ));
        }, "renderDrawerSider");
        if (isMobile) {
          return renderDrawerSider();
        }
        const siderStyles = {
          backgroundColor: token.colorBgContainer,
          borderRight: `1px solid ${token.colorBgElevated}`
        };
        if (fixed) {
          siderStyles.position = "fixed";
          siderStyles.top = 0;
          siderStyles.height = "100vh";
          siderStyles.zIndex = 999;
        }
        return /* @__PURE__ */ import_react222.default.createElement(import_react222.default.Fragment, null, fixed && /* @__PURE__ */ import_react222.default.createElement(
          "div",
          {
            style: {
              width: siderCollapsed ? "80px" : "200px",
              transition: "all 0.2s"
            }
          }
        ), /* @__PURE__ */ import_react222.default.createElement(
          import_antd14.Layout.Sider,
          {
            style: siderStyles,
            collapsible: true,
            collapsed: siderCollapsed,
            onCollapse: (collapsed, type) => {
              if (type === "clickTrigger") {
                setSiderCollapsed(collapsed);
              }
            },
            collapsedWidth: 80,
            breakpoint: "lg",
            trigger: /* @__PURE__ */ import_react222.default.createElement(
              import_antd14.Button,
              {
                type: "text",
                style: {
                  borderRadius: 0,
                  height: "100%",
                  width: "100%",
                  backgroundColor: token.colorBgElevated
                }
              },
              siderCollapsed ? /* @__PURE__ */ import_react222.default.createElement(
                import_icons4.RightOutlined,
                {
                  style: {
                    color: token.colorPrimary
                  }
                }
              ) : /* @__PURE__ */ import_react222.default.createElement(
                import_icons4.LeftOutlined,
                {
                  style: {
                    color: token.colorPrimary
                  }
                }
              )
            )
          },
          /* @__PURE__ */ import_react222.default.createElement(
            "div",
            {
              style: {
                width: siderCollapsed ? "80px" : "200px",
                padding: siderCollapsed ? "0" : "0 16px",
                display: "flex",
                justifyContent: siderCollapsed ? "center" : "flex-start",
                alignItems: "center",
                height: "64px",
                backgroundColor: token.colorBgElevated,
                fontSize: "14px"
              }
            },
            /* @__PURE__ */ import_react222.default.createElement(RenderToTitle, { collapsed: siderCollapsed })
          ),
          renderMenu()
        ));
      }, "ThemedSiderV2");
      var import_react23 = __toESM2(__require("react"));
      var import_antd15 = __require("antd");
      var import_core222 = require_dist3();
      var { Text: Text3 } = import_antd15.Typography;
      var { useToken: useToken5 } = import_antd15.theme;
      var ThemedHeaderV2 = /* @__PURE__ */ __name2(({
        isSticky,
        sticky
      }) => {
        const { token } = useToken5();
        const authProvider = (0, import_core222.useActiveAuthProvider)();
        const { data: user } = (0, import_core222.useGetIdentity)({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const shouldRenderHeader = user && (user.name || user.avatar);
        if (!shouldRenderHeader) {
          return null;
        }
        const headerStyles = {
          backgroundColor: token.colorBgElevated,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "0px 24px",
          height: "64px"
        };
        if ((0, import_core222.pickNotDeprecated)(sticky, isSticky)) {
          headerStyles.position = "sticky";
          headerStyles.top = 0;
          headerStyles.zIndex = 1;
        }
        return /* @__PURE__ */ import_react23.default.createElement(import_antd15.Layout.Header, { style: headerStyles }, /* @__PURE__ */ import_react23.default.createElement(import_antd15.Space, null, /* @__PURE__ */ import_react23.default.createElement(import_antd15.Space, { size: "middle" }, (user == null ? void 0 : user.name) && /* @__PURE__ */ import_react23.default.createElement(Text3, { strong: true }, user.name), (user == null ? void 0 : user.avatar) && /* @__PURE__ */ import_react23.default.createElement(import_antd15.Avatar, { src: user == null ? void 0 : user.avatar, alt: user == null ? void 0 : user.name }))));
      }, "ThemedHeaderV2");
      var ThemedLayoutV2 = /* @__PURE__ */ __name2(({
        children,
        Header: Header2,
        Sider: Sider2,
        Title: Title8,
        Footer,
        OffLayoutArea,
        initialSiderCollapsed
      }) => {
        const breakpoint = import_antd16.Grid.useBreakpoint();
        const SiderToRender = Sider2 ?? ThemedSiderV2;
        const HeaderToRender = Header2 ?? ThemedHeaderV2;
        const isSmall = typeof breakpoint.sm === "undefined" ? true : breakpoint.sm;
        const hasSider = !!SiderToRender({ Title: Title8 });
        return /* @__PURE__ */ import_react24.default.createElement(
          ThemedLayoutContextProvider,
          {
            initialSiderCollapsed
          },
          /* @__PURE__ */ import_react24.default.createElement(import_antd16.Layout, { style: { minHeight: "100vh" }, hasSider }, /* @__PURE__ */ import_react24.default.createElement(SiderToRender, { Title: Title8 }), /* @__PURE__ */ import_react24.default.createElement(import_antd16.Layout, null, /* @__PURE__ */ import_react24.default.createElement(HeaderToRender, null), /* @__PURE__ */ import_react24.default.createElement(import_antd16.Layout.Content, null, /* @__PURE__ */ import_react24.default.createElement(
            "div",
            {
              style: {
                minHeight: 360,
                padding: isSmall ? 24 : 12
              }
            },
            children
          ), OffLayoutArea && /* @__PURE__ */ import_react24.default.createElement(OffLayoutArea, null)), Footer && /* @__PURE__ */ import_react24.default.createElement(Footer, null)))
        );
      }, "ThemedLayoutV2");
      var import_react25 = __toESM2(__require("react"));
      var import_core23 = require_dist3();
      var import_antd17 = __require("antd");
      var { useToken: useToken6 } = import_antd17.theme;
      var defaultText2 = "refine Project";
      var defaultIcon2 = /* @__PURE__ */ import_react25.default.createElement(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "data-testid": "refine-logo"
        },
        /* @__PURE__ */ import_react25.default.createElement(
          "path",
          {
            d: "M12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ import_react25.default.createElement(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18V6Z",
            fill: "currentColor"
          }
        )
      );
      var ThemedTitleV2 = /* @__PURE__ */ __name2(({
        collapsed,
        icon = defaultIcon2,
        text = defaultText2,
        wrapperStyles
      }) => {
        const { token } = useToken6();
        const routerType = (0, import_core23.useRouterType)();
        const Link3 = (0, import_core23.useLink)();
        const { Link: LegacyLink } = (0, import_core23.useRouterContext)();
        const ActiveLink = routerType === "legacy" ? LegacyLink : Link3;
        return /* @__PURE__ */ import_react25.default.createElement(
          ActiveLink,
          {
            to: "/",
            style: {
              display: "inline-block",
              textDecoration: "none"
            }
          },
          /* @__PURE__ */ import_react25.default.createElement(
            import_antd17.Space,
            {
              style: {
                display: "flex",
                alignItems: "center",
                fontSize: "inherit",
                ...wrapperStyles
              }
            },
            /* @__PURE__ */ import_react25.default.createElement(
              "div",
              {
                style: {
                  height: "24px",
                  width: "24px",
                  color: token.colorPrimary
                }
              },
              icon
            ),
            !collapsed && /* @__PURE__ */ import_react25.default.createElement(
              import_antd17.Typography.Title,
              {
                style: {
                  fontSize: "inherit",
                  marginBottom: 0,
                  fontWeight: 700
                }
              },
              text
            )
          )
        );
      }, "ThemedTitleV2");
      var import_react26 = __toESM2(__require("react"));
      var import_antd18 = __require("antd");
      var import_icons5 = __require("@ant-design/icons");
      var import_core24 = require_dist3();
      var import_ui_types = require_dist4();
      var CreateButton = /* @__PURE__ */ __name2(({
        resource: resourceNameFromProps,
        resourceNameOrRouteName: propResourceNameOrRouteName,
        hideText = false,
        accessControl,
        meta,
        children,
        onClick,
        ...rest
      }) => {
        const accessControlContext = (0, import_react26.useContext)(import_core24.AccessControlContext);
        const accessControlEnabled = (accessControl == null ? void 0 : accessControl.enabled) ?? accessControlContext.options.buttons.enableAccessControl;
        const hideIfUnauthorized = (accessControl == null ? void 0 : accessControl.hideIfUnauthorized) ?? accessControlContext.options.buttons.hideIfUnauthorized;
        const translate = (0, import_core24.useTranslate)();
        const routerType = (0, import_core24.useRouterType)();
        const Link3 = (0, import_core24.useLink)();
        const { Link: LegacyLink } = (0, import_core24.useRouterContext)();
        const ActiveLink = routerType === "legacy" ? LegacyLink : Link3;
        const { createUrl: generateCreateUrl } = (0, import_core24.useNavigation)();
        const { resource } = (0, import_core24.useResource)(
          resourceNameFromProps ?? propResourceNameOrRouteName
        );
        const { data } = (0, import_core24.useCan)({
          resource: resource == null ? void 0 : resource.name,
          action: "create",
          queryOptions: {
            enabled: accessControlEnabled
          },
          params: {
            resource
          }
        });
        const createButtonDisabledTitle = /* @__PURE__ */ __name2(() => {
          if (data == null ? void 0 : data.can)
            return "";
          else if (data == null ? void 0 : data.reason)
            return data.reason;
          else
            return translate(
              "buttons.notAccessTitle",
              "You don't have permission to access"
            );
        }, "createButtonDisabledTitle");
        const createUrl = resource ? generateCreateUrl(resource, meta) : "";
        if (accessControlEnabled && hideIfUnauthorized && !(data == null ? void 0 : data.can)) {
          return null;
        }
        return /* @__PURE__ */ import_react26.default.createElement(
          ActiveLink,
          {
            to: createUrl,
            replace: false,
            onClick: (e) => {
              if ((data == null ? void 0 : data.can) === false) {
                e.preventDefault();
                return;
              }
              if (onClick) {
                e.preventDefault();
                onClick(e);
              }
            }
          },
          /* @__PURE__ */ import_react26.default.createElement(
            import_antd18.Button,
            {
              icon: /* @__PURE__ */ import_react26.default.createElement(import_icons5.PlusSquareOutlined, null),
              disabled: (data == null ? void 0 : data.can) === false,
              title: createButtonDisabledTitle(),
              className: import_ui_types.RefineButtonClassNames.CreateButton,
              type: "primary",
              ...rest
            },
            !hideText && (children ?? translate("buttons.create", "Create"))
          )
        );
      }, "CreateButton");
      var import_react27 = __toESM2(__require("react"));
      var import_antd19 = __require("antd");
      var import_icons6 = __require("@ant-design/icons");
      var import_core25 = require_dist3();
      var import_ui_types2 = require_dist4();
      var EditButton2 = /* @__PURE__ */ __name2(({
        resource: resourceNameFromProps,
        resourceNameOrRouteName: propResourceNameOrRouteName,
        recordItemId,
        hideText = false,
        accessControl,
        meta,
        children,
        onClick,
        ...rest
      }) => {
        const accessControlContext = (0, import_react27.useContext)(import_core25.AccessControlContext);
        const accessControlEnabled = (accessControl == null ? void 0 : accessControl.enabled) ?? accessControlContext.options.buttons.enableAccessControl;
        const hideIfUnauthorized = (accessControl == null ? void 0 : accessControl.hideIfUnauthorized) ?? accessControlContext.options.buttons.hideIfUnauthorized;
        const translate = (0, import_core25.useTranslate)();
        const routerType = (0, import_core25.useRouterType)();
        const Link3 = (0, import_core25.useLink)();
        const { Link: LegacyLink } = (0, import_core25.useRouterContext)();
        const ActiveLink = routerType === "legacy" ? LegacyLink : Link3;
        const { editUrl: generateEditUrl } = (0, import_core25.useNavigation)();
        const { id, resource } = (0, import_core25.useResource)(
          resourceNameFromProps ?? propResourceNameOrRouteName
        );
        const { data } = (0, import_core25.useCan)({
          resource: resource == null ? void 0 : resource.name,
          action: "edit",
          params: { id: recordItemId ?? id, resource },
          queryOptions: {
            enabled: accessControlEnabled
          }
        });
        const createButtonDisabledTitle = /* @__PURE__ */ __name2(() => {
          if (data == null ? void 0 : data.can)
            return "";
          else if (data == null ? void 0 : data.reason)
            return data.reason;
          else
            return translate(
              "buttons.notAccessTitle",
              "You don't have permission to access"
            );
        }, "createButtonDisabledTitle");
        const editUrl = resource && (recordItemId ?? id) ? generateEditUrl(resource, recordItemId ?? id, meta) : "";
        if (accessControlEnabled && hideIfUnauthorized && !(data == null ? void 0 : data.can)) {
          return null;
        }
        return /* @__PURE__ */ import_react27.default.createElement(
          ActiveLink,
          {
            to: editUrl,
            replace: false,
            onClick: (e) => {
              if ((data == null ? void 0 : data.can) === false) {
                e.preventDefault();
                return;
              }
              if (onClick) {
                e.preventDefault();
                onClick(e);
              }
            }
          },
          /* @__PURE__ */ import_react27.default.createElement(
            import_antd19.Button,
            {
              icon: /* @__PURE__ */ import_react27.default.createElement(import_icons6.EditOutlined, null),
              disabled: (data == null ? void 0 : data.can) === false,
              title: createButtonDisabledTitle(),
              className: import_ui_types2.RefineButtonClassNames.EditButton,
              ...rest
            },
            !hideText && (children ?? translate("buttons.edit", "Edit"))
          )
        );
      }, "EditButton");
      var import_react28 = __toESM2(__require("react"));
      var import_antd20 = __require("antd");
      var import_icons7 = __require("@ant-design/icons");
      var import_core26 = require_dist3();
      var import_ui_types3 = require_dist4();
      var DeleteButton2 = /* @__PURE__ */ __name2(({
        resource: resourceNameFromProps,
        resourceNameOrRouteName: propResourceNameOrRouteName,
        recordItemId,
        onSuccess,
        mutationMode: mutationModeProp,
        children,
        successNotification,
        errorNotification,
        hideText = false,
        accessControl,
        metaData,
        meta,
        dataProviderName,
        confirmTitle,
        confirmOkText,
        confirmCancelText,
        invalidates,
        ...rest
      }) => {
        const accessControlContext = (0, import_react28.useContext)(import_core26.AccessControlContext);
        const accessControlEnabled = (accessControl == null ? void 0 : accessControl.enabled) ?? accessControlContext.options.buttons.enableAccessControl;
        const hideIfUnauthorized = (accessControl == null ? void 0 : accessControl.hideIfUnauthorized) ?? accessControlContext.options.buttons.hideIfUnauthorized;
        const translate = (0, import_core26.useTranslate)();
        const { id, resource, identifier } = (0, import_core26.useResource)(
          resourceNameFromProps ?? propResourceNameOrRouteName
        );
        const { mutationMode: mutationModeContext } = (0, import_core26.useMutationMode)();
        const mutationMode = mutationModeProp ?? mutationModeContext;
        const { mutate, isLoading, variables } = (0, import_core26.useDelete)();
        const { data } = (0, import_core26.useCan)({
          resource: resource == null ? void 0 : resource.name,
          action: "delete",
          params: { id: recordItemId ?? id, resource },
          queryOptions: {
            enabled: accessControlEnabled
          }
        });
        const disabledTitle = /* @__PURE__ */ __name2(() => {
          if (data == null ? void 0 : data.can)
            return "";
          else if (data == null ? void 0 : data.reason)
            return data.reason;
          else
            return translate(
              "buttons.notAccessTitle",
              "You don't have permission to access"
            );
        }, "disabledTitle");
        const { setWarnWhen } = (0, import_core26.useWarnAboutChange)();
        if (accessControlEnabled && hideIfUnauthorized && !(data == null ? void 0 : data.can)) {
          return null;
        }
        return /* @__PURE__ */ import_react28.default.createElement(
          import_antd20.Popconfirm,
          {
            key: "delete",
            okText: confirmOkText ?? translate("buttons.delete", "Delete"),
            cancelText: confirmCancelText ?? translate("buttons.cancel", "Cancel"),
            okType: "danger",
            title: confirmTitle ?? translate("buttons.confirm", "Are you sure?"),
            okButtonProps: { disabled: isLoading },
            onConfirm: () => {
              if ((recordItemId ?? id) && identifier) {
                setWarnWhen(false);
                mutate(
                  {
                    id: recordItemId ?? id ?? "",
                    resource: identifier,
                    mutationMode,
                    successNotification,
                    errorNotification,
                    meta: (0, import_core26.pickNotDeprecated)(meta, metaData),
                    metaData: (0, import_core26.pickNotDeprecated)(meta, metaData),
                    dataProviderName,
                    invalidates
                  },
                  {
                    onSuccess: (value) => {
                      onSuccess && onSuccess(value);
                    }
                  }
                );
              }
            },
            disabled: typeof (rest == null ? void 0 : rest.disabled) !== "undefined" ? rest.disabled : (data == null ? void 0 : data.can) === false
          },
          /* @__PURE__ */ import_react28.default.createElement(
            import_antd20.Button,
            {
              danger: true,
              loading: (recordItemId ?? id) === (variables == null ? void 0 : variables.id) && isLoading,
              icon: /* @__PURE__ */ import_react28.default.createElement(import_icons7.DeleteOutlined, null),
              title: disabledTitle(),
              disabled: (data == null ? void 0 : data.can) === false,
              className: import_ui_types3.RefineButtonClassNames.DeleteButton,
              ...rest
            },
            !hideText && (children ?? translate("buttons.delete", "Delete"))
          )
        );
      }, "DeleteButton");
      var import_react29 = __toESM2(__require("react"));
      var import_antd21 = __require("antd");
      var import_icons8 = __require("@ant-design/icons");
      var import_core27 = require_dist3();
      var import_ui_types4 = require_dist4();
      var import_react_query = __require("@tanstack/react-query");
      var RefreshButton = /* @__PURE__ */ __name2(({
        resource: resourceNameFromProps,
        resourceNameOrRouteName: propResourceNameOrRouteName,
        recordItemId,
        hideText = false,
        dataProviderName,
        children,
        onClick,
        meta: _meta,
        metaData: _metaData,
        ...rest
      }) => {
        const translate = (0, import_core27.useTranslate)();
        const queryClient = (0, import_react_query.useQueryClient)();
        const invalidates = (0, import_core27.useInvalidate)();
        const { resources, identifier, id } = (0, import_core27.useResource)(
          resourceNameFromProps ?? propResourceNameOrRouteName
        );
        const isInvalidating = !!queryClient.isFetching({
          queryKey: (0, import_core27.queryKeys)(
            identifier,
            (0, import_core27.pickDataProvider)(identifier, dataProviderName, resources)
          ).detail(recordItemId ?? id)
        });
        const handleInvalidate = /* @__PURE__ */ __name2(() => {
          invalidates({
            id: recordItemId ?? id,
            invalidates: ["detail"],
            dataProviderName,
            resource: identifier
          });
        }, "handleInvalidate");
        return /* @__PURE__ */ import_react29.default.createElement(
          import_antd21.Button,
          {
            onClick: (e) => {
              onClick ? onClick(e) : handleInvalidate();
            },
            icon: /* @__PURE__ */ import_react29.default.createElement(import_icons8.RedoOutlined, { spin: isInvalidating }),
            className: import_ui_types4.RefineButtonClassNames.RefreshButton,
            ...rest
          },
          !hideText && (children ?? translate("buttons.refresh", "Refresh"))
        );
      }, "RefreshButton");
      var import_react30 = __toESM2(__require("react"));
      var import_antd222 = __require("antd");
      var import_icons9 = __require("@ant-design/icons");
      var import_core28 = require_dist3();
      var import_ui_types5 = require_dist4();
      var ShowButton2 = /* @__PURE__ */ __name2(({
        resource: resourceNameFromProps,
        resourceNameOrRouteName: propResourceNameOrRouteName,
        recordItemId,
        hideText = false,
        accessControl,
        meta,
        children,
        onClick,
        ...rest
      }) => {
        const accessControlContext = (0, import_react30.useContext)(import_core28.AccessControlContext);
        const accessControlEnabled = (accessControl == null ? void 0 : accessControl.enabled) ?? accessControlContext.options.buttons.enableAccessControl;
        const hideIfUnauthorized = (accessControl == null ? void 0 : accessControl.hideIfUnauthorized) ?? accessControlContext.options.buttons.hideIfUnauthorized;
        const { showUrl: generateShowUrl } = (0, import_core28.useNavigation)();
        const routerType = (0, import_core28.useRouterType)();
        const Link3 = (0, import_core28.useLink)();
        const { Link: LegacyLink } = (0, import_core28.useRouterContext)();
        const ActiveLink = routerType === "legacy" ? LegacyLink : Link3;
        const translate = (0, import_core28.useTranslate)();
        const { id, resource } = (0, import_core28.useResource)(
          resourceNameFromProps ?? propResourceNameOrRouteName
        );
        const { data } = (0, import_core28.useCan)({
          resource: resource == null ? void 0 : resource.name,
          action: "show",
          params: { id: recordItemId ?? id, resource },
          queryOptions: {
            enabled: accessControlEnabled
          }
        });
        const createButtonDisabledTitle = /* @__PURE__ */ __name2(() => {
          if (data == null ? void 0 : data.can)
            return "";
          else if (data == null ? void 0 : data.reason)
            return data.reason;
          else
            return translate(
              "buttons.notAccessTitle",
              "You don't have permission to access"
            );
        }, "createButtonDisabledTitle");
        const showUrl = resource && (recordItemId || id) ? generateShowUrl(resource, recordItemId ?? id, meta) : "";
        if (accessControlEnabled && hideIfUnauthorized && !(data == null ? void 0 : data.can)) {
          return null;
        }
        return /* @__PURE__ */ import_react30.default.createElement(
          ActiveLink,
          {
            to: showUrl,
            replace: false,
            onClick: (e) => {
              if ((data == null ? void 0 : data.can) === false) {
                e.preventDefault();
                return;
              }
              if (onClick) {
                e.preventDefault();
                onClick(e);
              }
            }
          },
          /* @__PURE__ */ import_react30.default.createElement(
            import_antd222.Button,
            {
              icon: /* @__PURE__ */ import_react30.default.createElement(import_icons9.EyeOutlined, null),
              disabled: (data == null ? void 0 : data.can) === false,
              title: createButtonDisabledTitle(),
              className: import_ui_types5.RefineButtonClassNames.ShowButton,
              ...rest
            },
            !hideText && (children ?? translate("buttons.show", "Show"))
          )
        );
      }, "ShowButton");
      var import_react31 = __toESM2(__require("react"));
      var import_antd23 = __require("antd");
      var import_icons10 = __require("@ant-design/icons");
      var import_core29 = require_dist3();
      var import_ui_types6 = require_dist4();
      var ListButton = /* @__PURE__ */ __name2(({
        resource: resourceNameFromProps,
        resourceNameOrRouteName: propResourceNameOrRouteName,
        hideText = false,
        accessControl,
        meta,
        children,
        onClick,
        ...rest
      }) => {
        var _a;
        const accessControlContext = (0, import_react31.useContext)(import_core29.AccessControlContext);
        const accessControlEnabled = (accessControl == null ? void 0 : accessControl.enabled) ?? accessControlContext.options.buttons.enableAccessControl;
        const hideIfUnauthorized = (accessControl == null ? void 0 : accessControl.hideIfUnauthorized) ?? accessControlContext.options.buttons.hideIfUnauthorized;
        const { listUrl: generateListUrl } = (0, import_core29.useNavigation)();
        const routerType = (0, import_core29.useRouterType)();
        const Link3 = (0, import_core29.useLink)();
        const { Link: LegacyLink } = (0, import_core29.useRouterContext)();
        const getUserFriendlyName = (0, import_core29.useUserFriendlyName)();
        const ActiveLink = routerType === "legacy" ? LegacyLink : Link3;
        const translate = (0, import_core29.useTranslate)();
        const { resource, identifier } = (0, import_core29.useResource)(
          resourceNameFromProps ?? propResourceNameOrRouteName
        );
        const { data } = (0, import_core29.useCan)({
          resource: resource == null ? void 0 : resource.name,
          action: "list",
          queryOptions: {
            enabled: accessControlEnabled
          },
          params: {
            resource
          }
        });
        const createButtonDisabledTitle = /* @__PURE__ */ __name2(() => {
          if (data == null ? void 0 : data.can)
            return "";
          else if (data == null ? void 0 : data.reason)
            return data.reason;
          else
            return translate(
              "buttons.notAccessTitle",
              "You don't have permission to access"
            );
        }, "createButtonDisabledTitle");
        const listUrl = resource ? generateListUrl(resource, meta) : "";
        if (accessControlEnabled && hideIfUnauthorized && !(data == null ? void 0 : data.can)) {
          return null;
        }
        return /* @__PURE__ */ import_react31.default.createElement(
          ActiveLink,
          {
            to: listUrl,
            replace: false,
            onClick: (e) => {
              if ((data == null ? void 0 : data.can) === false) {
                e.preventDefault();
                return;
              }
              if (onClick) {
                e.preventDefault();
                onClick(e);
              }
            }
          },
          /* @__PURE__ */ import_react31.default.createElement(
            import_antd23.Button,
            {
              icon: /* @__PURE__ */ import_react31.default.createElement(import_icons10.BarsOutlined, null),
              disabled: (data == null ? void 0 : data.can) === false,
              title: createButtonDisabledTitle(),
              className: import_ui_types6.RefineButtonClassNames.ListButton,
              ...rest
            },
            !hideText && (children ?? translate(
              `${identifier ?? resourceNameFromProps ?? propResourceNameOrRouteName}.titles.list`,
              getUserFriendlyName(
                ((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.label) ?? (resource == null ? void 0 : resource.label) ?? identifier ?? (0, import_core29.pickNotDeprecated)(
                  resourceNameFromProps,
                  propResourceNameOrRouteName
                ),
                "plural"
              )
            ))
          )
        );
      }, "ListButton");
      var import_react322 = __toESM2(__require("react"));
      var import_antd24 = __require("antd");
      var import_icons11 = __require("@ant-design/icons");
      var import_core30 = require_dist3();
      var import_ui_types7 = require_dist4();
      var ExportButton = /* @__PURE__ */ __name2(({
        hideText = false,
        children,
        ...rest
      }) => {
        const translate = (0, import_core30.useTranslate)();
        return /* @__PURE__ */ import_react322.default.createElement(
          import_antd24.Button,
          {
            type: "default",
            icon: /* @__PURE__ */ import_react322.default.createElement(import_icons11.ExportOutlined, null),
            className: import_ui_types7.RefineButtonClassNames.ExportButton,
            ...rest
          },
          !hideText && (children ?? translate("buttons.export", "Export"))
        );
      }, "ExportButton");
      var import_react33 = __toESM2(__require("react"));
      var import_antd25 = __require("antd");
      var import_icons12 = __require("@ant-design/icons");
      var import_core31 = require_dist3();
      var import_ui_types8 = require_dist4();
      var SaveButton = /* @__PURE__ */ __name2(({
        hideText = false,
        children,
        ...rest
      }) => {
        const translate = (0, import_core31.useTranslate)();
        return /* @__PURE__ */ import_react33.default.createElement(
          import_antd25.Button,
          {
            type: "primary",
            icon: /* @__PURE__ */ import_react33.default.createElement(import_icons12.SaveOutlined, null),
            className: import_ui_types8.RefineButtonClassNames.SaveButton,
            ...rest
          },
          !hideText && (children ?? translate("buttons.save", "Save"))
        );
      }, "SaveButton");
      var import_react34 = __toESM2(__require("react"));
      var import_antd26 = __require("antd");
      var import_icons13 = __require("@ant-design/icons");
      var import_core322 = require_dist3();
      var import_ui_types9 = require_dist4();
      var CloneButton = /* @__PURE__ */ __name2(({
        resourceNameOrRouteName: propResourceNameOrRouteName,
        resource: resourceNameFromProps,
        recordItemId,
        hideText = false,
        accessControl,
        meta,
        children,
        onClick,
        ...rest
      }) => {
        const accessControlContext = (0, import_react34.useContext)(import_core322.AccessControlContext);
        const accessControlEnabled = (accessControl == null ? void 0 : accessControl.enabled) ?? accessControlContext.options.buttons.enableAccessControl;
        const hideIfUnauthorized = (accessControl == null ? void 0 : accessControl.hideIfUnauthorized) ?? accessControlContext.options.buttons.hideIfUnauthorized;
        const { cloneUrl: generateCloneUrl } = (0, import_core322.useNavigation)();
        const routerType = (0, import_core322.useRouterType)();
        const Link3 = (0, import_core322.useLink)();
        const { Link: LegacyLink } = (0, import_core322.useRouterContext)();
        const ActiveLink = routerType === "legacy" ? LegacyLink : Link3;
        const translate = (0, import_core322.useTranslate)();
        const { id, resource } = (0, import_core322.useResource)(
          resourceNameFromProps ?? propResourceNameOrRouteName
        );
        const { data } = (0, import_core322.useCan)({
          resource: resource == null ? void 0 : resource.name,
          action: "create",
          params: { id: recordItemId ?? id, resource },
          queryOptions: {
            enabled: accessControlEnabled
          }
        });
        const createButtonDisabledTitle = /* @__PURE__ */ __name2(() => {
          if (data == null ? void 0 : data.can)
            return "";
          else if (data == null ? void 0 : data.reason)
            return data.reason;
          else
            return translate(
              "buttons.notAccessTitle",
              "You don't have permission to access"
            );
        }, "createButtonDisabledTitle");
        const cloneUrl = resource && (recordItemId || id) ? generateCloneUrl(resource, recordItemId ?? id, meta) : "";
        if (accessControlEnabled && hideIfUnauthorized && !(data == null ? void 0 : data.can)) {
          return null;
        }
        return /* @__PURE__ */ import_react34.default.createElement(
          ActiveLink,
          {
            to: cloneUrl,
            replace: false,
            onClick: (e) => {
              if ((data == null ? void 0 : data.can) === false) {
                e.preventDefault();
                return;
              }
              if (onClick) {
                e.preventDefault();
                onClick(e);
              }
            }
          },
          /* @__PURE__ */ import_react34.default.createElement(
            import_antd26.Button,
            {
              icon: /* @__PURE__ */ import_react34.default.createElement(import_icons13.PlusSquareOutlined, null),
              disabled: (data == null ? void 0 : data.can) === false,
              title: createButtonDisabledTitle(),
              className: import_ui_types9.RefineButtonClassNames.CloneButton,
              ...rest
            },
            !hideText && (children ?? translate("buttons.clone", "Clone"))
          )
        );
      }, "CloneButton");
      var import_react35 = __toESM2(__require("react"));
      var import_antd27 = __require("antd");
      var import_icons14 = __require("@ant-design/icons");
      var import_core33 = require_dist3();
      var import_ui_types10 = require_dist4();
      var ImportButton = /* @__PURE__ */ __name2(({
        uploadProps,
        buttonProps,
        hideText = false,
        children
      }) => {
        const translate = (0, import_core33.useTranslate)();
        return /* @__PURE__ */ import_react35.default.createElement(import_antd27.Upload, { ...uploadProps }, /* @__PURE__ */ import_react35.default.createElement(
          import_antd27.Button,
          {
            icon: /* @__PURE__ */ import_react35.default.createElement(import_icons14.ImportOutlined, null),
            className: import_ui_types10.RefineButtonClassNames.ImportButton,
            ...buttonProps
          },
          !hideText && (children ?? translate("buttons.import", "Import"))
        ));
      }, "ImportButton");
      var import_react36 = __toESM2(__require("react"));
      var import_antd28 = __require("antd");
      var import_core34 = require_dist3();
      var List2 = /* @__PURE__ */ __name2(({
        canCreate,
        title,
        children,
        createButtonProps: createButtonPropsFromProps,
        resource: resourceFromProps,
        wrapperProps,
        contentProps,
        headerProps,
        breadcrumb: breadcrumbFromProps,
        headerButtonProps,
        headerButtons
      }) => {
        var _a, _b;
        const translate = (0, import_core34.useTranslate)();
        const { options: { breadcrumb: globalBreadcrumb } = {} } = (0, import_core34.useRefineContext)();
        const routerType = (0, import_core34.useRouterType)();
        const getUserFriendlyName = (0, import_core34.useUserFriendlyName)();
        const { resource, identifier } = (0, import_core34.useResource)(resourceFromProps);
        const isCreateButtonVisible = canCreate ?? (((resource == null ? void 0 : resource.canCreate) ?? !!(resource == null ? void 0 : resource.create)) || createButtonPropsFromProps);
        const breadcrumb = typeof breadcrumbFromProps === "undefined" ? globalBreadcrumb : breadcrumbFromProps;
        const createButtonProps = isCreateButtonVisible ? {
          size: "middle",
          resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : identifier,
          ...createButtonPropsFromProps
        } : void 0;
        const defaultExtra = isCreateButtonVisible ? /* @__PURE__ */ import_react36.default.createElement(CreateButton, { ...createButtonProps }) : null;
        return /* @__PURE__ */ import_react36.default.createElement("div", { ...wrapperProps ?? {} }, /* @__PURE__ */ import_react36.default.createElement(
          PageHeader,
          {
            ghost: false,
            title: title ?? translate(
              `${identifier}.titles.list`,
              getUserFriendlyName(
                ((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.label) ?? ((_b = resource == null ? void 0 : resource.options) == null ? void 0 : _b.label) ?? (resource == null ? void 0 : resource.label) ?? identifier,
                "plural"
              )
            ),
            extra: headerButtons ? /* @__PURE__ */ import_react36.default.createElement(import_antd28.Space, { wrap: true, ...headerButtonProps }, typeof headerButtons === "function" ? headerButtons({
              defaultButtons: defaultExtra,
              createButtonProps
            }) : headerButtons) : defaultExtra,
            breadcrumb: typeof breadcrumb !== "undefined" ? /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, breadcrumb) ?? void 0 : /* @__PURE__ */ import_react36.default.createElement(Breadcrumb, null),
            ...headerProps ?? {}
          },
          /* @__PURE__ */ import_react36.default.createElement("div", { ...contentProps ?? {} }, children)
        ));
      }, "List");
      var import_react37 = __toESM2(__require("react"));
      var import_antd29 = __require("antd");
      var import_core35 = require_dist3();
      var Create2 = /* @__PURE__ */ __name2(({
        title,
        saveButtonProps: saveButtonPropsFromProps,
        children,
        resource: resourceFromProps,
        isLoading = false,
        breadcrumb: breadcrumbFromProps,
        wrapperProps,
        headerProps,
        contentProps,
        headerButtonProps,
        headerButtons,
        footerButtonProps,
        footerButtons,
        goBack: goBackFromProps
      }) => {
        var _a, _b;
        const translate = (0, import_core35.useTranslate)();
        const { options: { breadcrumb: globalBreadcrumb } = {} } = (0, import_core35.useRefineContext)();
        const routerType = (0, import_core35.useRouterType)();
        const back = (0, import_core35.useBack)();
        const { goBack } = (0, import_core35.useNavigation)();
        const getUserFriendlyName = (0, import_core35.useUserFriendlyName)();
        const { resource, action, identifier } = (0, import_core35.useResource)(resourceFromProps);
        const breadcrumb = typeof breadcrumbFromProps === "undefined" ? globalBreadcrumb : breadcrumbFromProps;
        const saveButtonProps = {
          ...isLoading ? { disabled: true } : {},
          ...saveButtonPropsFromProps,
          htmlType: "submit"
        };
        const defaultFooterButtons = /* @__PURE__ */ import_react37.default.createElement(import_react37.default.Fragment, null, /* @__PURE__ */ import_react37.default.createElement(SaveButton, { ...saveButtonProps }));
        return /* @__PURE__ */ import_react37.default.createElement("div", { ...wrapperProps ?? {} }, /* @__PURE__ */ import_react37.default.createElement(
          PageHeader,
          {
            ghost: false,
            backIcon: goBackFromProps,
            onBack: action !== "list" || typeof action !== "undefined" ? routerType === "legacy" ? goBack : back : void 0,
            title: title ?? translate(
              `${identifier}.titles.create`,
              `Create ${getUserFriendlyName(
                ((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.label) ?? ((_b = resource == null ? void 0 : resource.options) == null ? void 0 : _b.label) ?? (resource == null ? void 0 : resource.label) ?? identifier,
                "singular"
              )}`
            ),
            breadcrumb: typeof breadcrumb !== "undefined" ? /* @__PURE__ */ import_react37.default.createElement(import_react37.default.Fragment, null, breadcrumb) ?? void 0 : /* @__PURE__ */ import_react37.default.createElement(Breadcrumb, null),
            extra: /* @__PURE__ */ import_react37.default.createElement(import_antd29.Space, { wrap: true, ...headerButtonProps ?? {} }, headerButtons ? typeof headerButtons === "function" ? headerButtons({
              defaultButtons: null
            }) : headerButtons : null),
            ...headerProps ?? {}
          },
          /* @__PURE__ */ import_react37.default.createElement(import_antd29.Spin, { spinning: isLoading }, /* @__PURE__ */ import_react37.default.createElement(
            import_antd29.Card,
            {
              bordered: false,
              actions: [
                /* @__PURE__ */ import_react37.default.createElement(
                  import_antd29.Space,
                  {
                    key: "action-buttons",
                    style: { float: "right", marginRight: 24 },
                    ...footerButtonProps ?? {}
                  },
                  footerButtons ? typeof footerButtons === "function" ? footerButtons({
                    defaultButtons: defaultFooterButtons,
                    saveButtonProps
                  }) : footerButtons : defaultFooterButtons
                )
              ],
              ...contentProps ?? {}
            },
            children
          ))
        ));
      }, "Create");
      var import_react38 = __toESM2(__require("react"));
      var import_antd30 = __require("antd");
      var import_core36 = require_dist3();
      var Edit2 = /* @__PURE__ */ __name2(({
        title,
        saveButtonProps: saveButtonPropsFromProps,
        mutationMode: mutationModeProp,
        recordItemId,
        children,
        deleteButtonProps: deleteButtonPropsFromProps,
        canDelete,
        resource: resourceFromProps,
        isLoading = false,
        dataProviderName,
        breadcrumb: breadcrumbFromProps,
        wrapperProps,
        headerProps,
        contentProps,
        headerButtonProps,
        headerButtons,
        footerButtonProps,
        footerButtons,
        goBack: goBackFromProps,
        autoSaveProps
      }) => {
        var _a, _b, _c;
        const translate = (0, import_core36.useTranslate)();
        const { options: { breadcrumb: globalBreadcrumb } = {} } = (0, import_core36.useRefineContext)();
        const { mutationMode: mutationModeContext } = (0, import_core36.useMutationMode)();
        const mutationMode = mutationModeProp ?? mutationModeContext;
        const routerType = (0, import_core36.useRouterType)();
        const back = (0, import_core36.useBack)();
        const go = (0, import_core36.useGo)();
        const { goBack, list: legacyGoList } = (0, import_core36.useNavigation)();
        const getUserFriendlyName = (0, import_core36.useUserFriendlyName)();
        const {
          resource,
          action,
          id: idFromParams,
          identifier
        } = (0, import_core36.useResource)(resourceFromProps);
        const goListPath = (0, import_core36.useToPath)({
          resource,
          action: "list"
        });
        const id = recordItemId ?? idFromParams;
        const breadcrumb = typeof breadcrumbFromProps === "undefined" ? globalBreadcrumb : breadcrumbFromProps;
        const hasList = (resource == null ? void 0 : resource.list) && !recordItemId;
        const isDeleteButtonVisible = canDelete ?? ((((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.canDelete) ?? (resource == null ? void 0 : resource.canDelete)) || deleteButtonPropsFromProps);
        const listButtonProps = hasList ? {
          ...isLoading ? { disabled: true } : {},
          resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : identifier
        } : void 0;
        const refreshButtonProps = {
          ...isLoading ? { disabled: true } : {},
          resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : identifier,
          recordItemId: id,
          dataProviderName
        };
        const deleteButtonProps = isDeleteButtonVisible ? {
          ...isLoading ? { disabled: true } : {},
          resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : identifier,
          mutationMode,
          onSuccess: () => {
            if (routerType === "legacy") {
              legacyGoList((resource == null ? void 0 : resource.route) ?? (resource == null ? void 0 : resource.name) ?? "");
            } else {
              go({ to: goListPath });
            }
          },
          recordItemId: id,
          dataProviderName,
          ...deleteButtonPropsFromProps
        } : void 0;
        const saveButtonProps = {
          ...isLoading ? { disabled: true } : {},
          ...saveButtonPropsFromProps
        };
        const defaultHeaderButtons = /* @__PURE__ */ import_react38.default.createElement(import_react38.default.Fragment, null, autoSaveProps && /* @__PURE__ */ import_react38.default.createElement(AutoSaveIndicator, { ...autoSaveProps }), hasList && /* @__PURE__ */ import_react38.default.createElement(ListButton, { ...listButtonProps }), /* @__PURE__ */ import_react38.default.createElement(RefreshButton, { ...refreshButtonProps }));
        const defaultFooterButtons = /* @__PURE__ */ import_react38.default.createElement(import_react38.default.Fragment, null, isDeleteButtonVisible && /* @__PURE__ */ import_react38.default.createElement(DeleteButton2, { ...deleteButtonProps }), /* @__PURE__ */ import_react38.default.createElement(SaveButton, { ...saveButtonProps }));
        return /* @__PURE__ */ import_react38.default.createElement("div", { ...wrapperProps ?? {} }, /* @__PURE__ */ import_react38.default.createElement(
          PageHeader,
          {
            ghost: false,
            backIcon: goBackFromProps,
            onBack: action !== "list" && typeof action !== "undefined" ? routerType === "legacy" ? goBack : back : void 0,
            title: title ?? translate(
              `${identifier}.titles.edit`,
              `Edit ${getUserFriendlyName(
                ((_b = resource == null ? void 0 : resource.meta) == null ? void 0 : _b.label) ?? ((_c = resource == null ? void 0 : resource.options) == null ? void 0 : _c.label) ?? (resource == null ? void 0 : resource.label) ?? identifier,
                "singular"
              )}`
            ),
            extra: /* @__PURE__ */ import_react38.default.createElement(import_antd30.Space, { wrap: true, ...headerButtonProps ?? {} }, headerButtons ? typeof headerButtons === "function" ? headerButtons({
              defaultButtons: defaultHeaderButtons,
              listButtonProps,
              refreshButtonProps
            }) : headerButtons : defaultHeaderButtons),
            breadcrumb: typeof breadcrumb !== "undefined" ? /* @__PURE__ */ import_react38.default.createElement(import_react38.default.Fragment, null, breadcrumb) ?? void 0 : /* @__PURE__ */ import_react38.default.createElement(Breadcrumb, null),
            ...headerProps ?? {}
          },
          /* @__PURE__ */ import_react38.default.createElement(import_antd30.Spin, { spinning: isLoading }, /* @__PURE__ */ import_react38.default.createElement(
            import_antd30.Card,
            {
              bordered: false,
              actions: [
                /* @__PURE__ */ import_react38.default.createElement(
                  import_antd30.Space,
                  {
                    key: "footer-buttons",
                    wrap: true,
                    style: {
                      float: "right",
                      marginRight: 24
                    },
                    ...footerButtonProps ?? {}
                  },
                  footerButtons ? typeof footerButtons === "function" ? footerButtons({
                    defaultButtons: defaultFooterButtons,
                    deleteButtonProps,
                    saveButtonProps
                  }) : footerButtons : defaultFooterButtons
                )
              ],
              ...contentProps ?? {}
            },
            children
          ))
        ));
      }, "Edit");
      var import_react39 = __toESM2(__require("react"));
      var import_antd31 = __require("antd");
      var import_core37 = require_dist3();
      var Show2 = /* @__PURE__ */ __name2(({
        title,
        canEdit,
        canDelete,
        isLoading = false,
        children,
        resource: resourceFromProps,
        recordItemId,
        dataProviderName,
        breadcrumb: breadcrumbFromProps,
        contentProps,
        headerProps,
        wrapperProps,
        headerButtons,
        footerButtons,
        footerButtonProps,
        headerButtonProps,
        goBack: goBackFromProps
      }) => {
        var _a, _b, _c;
        const translate = (0, import_core37.useTranslate)();
        const { options: { breadcrumb: globalBreadcrumb } = {} } = (0, import_core37.useRefineContext)();
        const routerType = (0, import_core37.useRouterType)();
        const back = (0, import_core37.useBack)();
        const go = (0, import_core37.useGo)();
        const { goBack, list: legacyGoList } = (0, import_core37.useNavigation)();
        const getUserFriendlyName = (0, import_core37.useUserFriendlyName)();
        const {
          resource,
          action,
          id: idFromParams,
          identifier
        } = (0, import_core37.useResource)(resourceFromProps);
        const goListPath = (0, import_core37.useToPath)({
          resource,
          action: "list"
        });
        const id = recordItemId ?? idFromParams;
        const breadcrumb = typeof breadcrumbFromProps === "undefined" ? globalBreadcrumb : breadcrumbFromProps;
        const hasList = (resource == null ? void 0 : resource.list) && !recordItemId;
        const isDeleteButtonVisible = canDelete ?? ((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.canDelete) ?? (resource == null ? void 0 : resource.canDelete);
        const isEditButtonVisible = canEdit ?? (resource == null ? void 0 : resource.canEdit) ?? !!(resource == null ? void 0 : resource.edit);
        const listButtonProps = hasList ? {
          resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : identifier
        } : void 0;
        const editButtonProps = isEditButtonVisible ? {
          ...isLoading ? { disabled: true } : {},
          type: "primary",
          resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : identifier,
          recordItemId: id
        } : void 0;
        const deleteButtonProps = isDeleteButtonVisible ? {
          ...isLoading ? { disabled: true } : {},
          resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : identifier,
          recordItemId: id,
          onSuccess: () => {
            if (routerType === "legacy") {
              legacyGoList((resource == null ? void 0 : resource.route) ?? (resource == null ? void 0 : resource.name) ?? "");
            } else {
              go({ to: goListPath });
            }
          },
          dataProviderName
        } : void 0;
        const refreshButtonProps = {
          ...isLoading ? { disabled: true } : {},
          resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : identifier,
          recordItemId: id,
          dataProviderName
        };
        const defaultHeaderButtons = /* @__PURE__ */ import_react39.default.createElement(import_react39.default.Fragment, null, hasList && /* @__PURE__ */ import_react39.default.createElement(ListButton, { ...listButtonProps }), isEditButtonVisible && /* @__PURE__ */ import_react39.default.createElement(EditButton2, { ...editButtonProps }), isDeleteButtonVisible && /* @__PURE__ */ import_react39.default.createElement(DeleteButton2, { ...deleteButtonProps }), /* @__PURE__ */ import_react39.default.createElement(RefreshButton, { ...refreshButtonProps }));
        return /* @__PURE__ */ import_react39.default.createElement("div", { ...wrapperProps ?? {} }, /* @__PURE__ */ import_react39.default.createElement(
          PageHeader,
          {
            ghost: false,
            backIcon: goBackFromProps,
            onBack: action !== "list" && typeof action !== "undefined" ? routerType === "legacy" ? goBack : back : void 0,
            title: title ?? translate(
              `${identifier}.titles.show`,
              `Show ${getUserFriendlyName(
                ((_b = resource == null ? void 0 : resource.meta) == null ? void 0 : _b.label) ?? ((_c = resource == null ? void 0 : resource.options) == null ? void 0 : _c.label) ?? (resource == null ? void 0 : resource.label) ?? identifier,
                "singular"
              )}`
            ),
            extra: /* @__PURE__ */ import_react39.default.createElement(
              import_antd31.Space,
              {
                key: "extra-buttons",
                wrap: true,
                ...headerButtonProps ?? {}
              },
              headerButtons ? typeof headerButtons === "function" ? headerButtons({
                defaultButtons: defaultHeaderButtons,
                deleteButtonProps,
                editButtonProps,
                listButtonProps,
                refreshButtonProps
              }) : headerButtons : defaultHeaderButtons
            ),
            breadcrumb: typeof breadcrumb !== "undefined" ? /* @__PURE__ */ import_react39.default.createElement(import_react39.default.Fragment, null, breadcrumb) ?? void 0 : /* @__PURE__ */ import_react39.default.createElement(Breadcrumb, null),
            ...headerProps ?? {}
          },
          /* @__PURE__ */ import_react39.default.createElement(import_antd31.Spin, { spinning: isLoading }, /* @__PURE__ */ import_react39.default.createElement(
            import_antd31.Card,
            {
              bordered: false,
              actions: footerButtons ? [
                /* @__PURE__ */ import_react39.default.createElement(
                  import_antd31.Space,
                  {
                    key: "footer-buttons",
                    wrap: true,
                    ...footerButtonProps
                  },
                  typeof footerButtons === "function" ? footerButtons({
                    defaultButtons: null
                  }) : footerButtons
                )
              ] : void 0,
              ...contentProps ?? {}
            },
            children
          ))
        ));
      }, "Show");
      var import_react40 = __toESM2(__require("react"));
      var import_antd322 = __require("antd");
      var { Text: Text4 } = import_antd322.Typography;
      var TextField2 = /* @__PURE__ */ __name2(({ value, ...rest }) => {
        return /* @__PURE__ */ import_react40.default.createElement(Text4, { ...rest }, value);
      }, "TextField");
      var import_react41 = __toESM2(__require("react"));
      var import_antd33 = __require("antd");
      var TagField3 = /* @__PURE__ */ __name2(({ value, ...rest }) => {
        return /* @__PURE__ */ import_react41.default.createElement(import_antd33.Tag, { ...rest }, value == null ? void 0 : value.toString());
      }, "TagField");
      var import_react422 = __toESM2(__require("react"));
      var import_antd34 = __require("antd");
      var { Link } = import_antd34.Typography;
      var EmailField3 = /* @__PURE__ */ __name2(({ value, ...rest }) => {
        return /* @__PURE__ */ import_react422.default.createElement(Link, { href: `mailto:${value}`, ...rest }, value);
      }, "EmailField");
      var import_react43 = __toESM2(__require("react"));
      var import_antd35 = __require("antd");
      var ImageField3 = /* @__PURE__ */ __name2(({
        value,
        imageTitle,
        ...rest
      }) => {
        return /* @__PURE__ */ import_react43.default.createElement(import_antd35.Image, { ...rest, src: value, title: imageTitle });
      }, "ImageField");
      var import_react44 = __toESM2(__require("react"));
      var import_antd36 = __require("antd");
      var import_icons15 = __require("@ant-design/icons");
      var BooleanField3 = /* @__PURE__ */ __name2(({
        value,
        valueLabelTrue = "true",
        valueLabelFalse = "false",
        trueIcon = /* @__PURE__ */ import_react44.default.createElement(import_icons15.CheckOutlined, null),
        falseIcon = /* @__PURE__ */ import_react44.default.createElement(import_icons15.CloseOutlined, null),
        ...rest
      }) => {
        return /* @__PURE__ */ import_react44.default.createElement(import_antd36.Tooltip, { title: value ? valueLabelTrue : valueLabelFalse, ...rest }, value ? /* @__PURE__ */ import_react44.default.createElement("span", null, trueIcon) : /* @__PURE__ */ import_react44.default.createElement("span", null, falseIcon));
      }, "BooleanField");
      var import_react45 = __toESM2(__require("react"));
      var import_dayjs4 = __toESM2(__require("dayjs"));
      var import_antd37 = __require("antd");
      var import_localizedFormat = __toESM2(__require("dayjs/plugin/localizedFormat"));
      var DateField3 = /* @__PURE__ */ __name2(({
        value,
        locales,
        format: dateFormat = "L",
        ...rest
      }) => {
        import_dayjs4.default.extend(import_localizedFormat.default);
        const defaultLocale = import_dayjs4.default.locale();
        const { Text: Text11 } = import_antd37.Typography;
        return /* @__PURE__ */ import_react45.default.createElement(Text11, { ...rest }, (0, import_dayjs4.default)(value).locale(locales || defaultLocale).format(dateFormat));
      }, "DateField");
      var import_react46 = __toESM2(__require("react"));
      var FileField = /* @__PURE__ */ __name2(({
        title,
        src,
        ...rest
      }) => {
        return /* @__PURE__ */ import_react46.default.createElement(UrlField3, { value: src, title, ...rest }, title ?? src);
      }, "FileField");
      var import_react47 = __toESM2(__require("react"));
      var import_antd38 = __require("antd");
      var { Link: Link2 } = import_antd38.Typography;
      var UrlField3 = /* @__PURE__ */ __name2(({
        children,
        value,
        ...rest
      }) => {
        return /* @__PURE__ */ import_react47.default.createElement(Link2, { href: value, ...rest }, children ?? value);
      }, "UrlField");
      var import_react48 = __toESM2(__require("react"));
      var import_antd39 = __require("antd");
      var { Text: Text5 } = import_antd39.Typography;
      function toLocaleStringSupportsOptions() {
        return !!(typeof Intl == "object" && Intl && typeof Intl.NumberFormat == "function");
      }
      __name(toLocaleStringSupportsOptions, "toLocaleStringSupportsOptions");
      __name2(toLocaleStringSupportsOptions, "toLocaleStringSupportsOptions");
      var NumberField2 = /* @__PURE__ */ __name2(({
        value,
        locale,
        options,
        ...rest
      }) => {
        const number = Number(value);
        return /* @__PURE__ */ import_react48.default.createElement(Text5, { ...rest }, toLocaleStringSupportsOptions() ? number.toLocaleString(locale, options) : number);
      }, "NumberField");
      var import_react49 = __toESM2(__require("react"));
      var import_react_markdown = __toESM2(__require("react-markdown"));
      var import_remark_gfm = __toESM2(__require("remark-gfm"));
      var MarkdownField3 = /* @__PURE__ */ __name2(({
        value = ""
      }) => {
        return /* @__PURE__ */ import_react49.default.createElement(import_react_markdown.default, { plugins: [import_remark_gfm.default] }, value);
      }, "MarkdownField");
      var import_react50 = __toESM2(__require("react"));
      var import_antd40 = __require("antd");
      var import_dayjs22 = __toESM2(__require("dayjs"));
      var import_icons16 = __require("@ant-design/icons");
      var import_core38 = require_dist3();
      var FilterDropdown = /* @__PURE__ */ __name2((props) => {
        const {
          setSelectedKeys,
          confirm,
          clearFilters,
          mapValue,
          selectedKeys,
          children
        } = props;
        const [value, setValue] = (0, import_react50.useState)(selectedKeys);
        const translate = (0, import_core38.useTranslate)();
        const clearFilter = /* @__PURE__ */ __name2(() => {
          if (clearFilters) {
            setValue([]);
            clearFilters();
          }
        }, "clearFilter");
        const onFilter = /* @__PURE__ */ __name2(() => {
          const _mappedValue = mappedValue(value);
          let keys;
          if (typeof _mappedValue === "number") {
            keys = `${_mappedValue}`;
          } else if (import_dayjs22.default.isDayjs(_mappedValue)) {
            keys = [_mappedValue.toISOString()];
          } else {
            keys = _mappedValue;
          }
          setSelectedKeys(keys);
          confirm == null ? void 0 : confirm();
        }, "onFilter");
        const mappedValue = /* @__PURE__ */ __name2((value2) => mapValue ? mapValue(value2) : value2, "mappedValue");
        const onChange = /* @__PURE__ */ __name2((e) => {
          if (typeof e === "object") {
            if (Array.isArray(e)) {
              const _mappedValue3 = mappedValue(e);
              setValue(_mappedValue3);
              return setSelectedKeys(_mappedValue3);
            }
            const changeEvent = !e || !e.target || import_dayjs22.default.isDayjs(e) ? { target: { value: e } } : e;
            const { target } = changeEvent;
            const _mappedValue2 = mappedValue(target.value);
            setValue(_mappedValue2);
            return;
          }
          const _mappedValue = mappedValue(e);
          setValue(_mappedValue);
        }, "onChange");
        const childrenWithProps = import_react50.default.Children.map(children, (child) => {
          if (import_react50.default.isValidElement(child)) {
            return import_react50.default.cloneElement(child, {
              onChange,
              value: mappedValue(value)
            });
          }
          return child;
        });
        return /* @__PURE__ */ import_react50.default.createElement(
          "div",
          {
            style: {
              padding: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end"
            }
          },
          /* @__PURE__ */ import_react50.default.createElement("div", { style: { marginBottom: 15 } }, childrenWithProps),
          /* @__PURE__ */ import_react50.default.createElement(import_antd40.Space, null, /* @__PURE__ */ import_react50.default.createElement(import_antd40.Button, { type: "primary", size: "small", onClick: () => onFilter() }, /* @__PURE__ */ import_react50.default.createElement(import_icons16.FilterOutlined, null), " ", translate("buttons.filter", "Filter")), /* @__PURE__ */ import_react50.default.createElement(import_antd40.Button, { danger: true, size: "small", onClick: () => clearFilter() }, translate("buttons.clear", "Clear")))
        );
      }, "FilterDropdown");
      var import_react51 = __toESM2(__require("react"));
      var import_core39 = require_dist3();
      var import_antd41 = __require("antd");
      var import_icons17 = __require("@ant-design/icons");
      var import_core40 = require_dist3();
      var { Text: Text6 } = import_antd41.Typography;
      var ErrorComponent2 = /* @__PURE__ */ __name2(() => {
        const [errorMessage, setErrorMessage] = (0, import_react51.useState)();
        const translate = (0, import_core40.useTranslate)();
        const { push } = (0, import_core40.useNavigation)();
        const go = (0, import_core39.useGo)();
        const routerType = (0, import_core39.useRouterType)();
        const { resource, action } = (0, import_core39.useResource)();
        (0, import_react51.useEffect)(() => {
          if (resource) {
            if (action) {
              setErrorMessage(
                translate(
                  "pages.error.info",
                  {
                    action,
                    resource: resource == null ? void 0 : resource.name
                  },
                  `You may have forgotten to add the "${action}" component to "${resource == null ? void 0 : resource.name}" resource.`
                )
              );
            }
          }
        }, [resource, action]);
        return /* @__PURE__ */ import_react51.default.createElement(
          import_antd41.Result,
          {
            status: "404",
            title: "404",
            extra: /* @__PURE__ */ import_react51.default.createElement(import_antd41.Space, { direction: "vertical", size: "large" }, /* @__PURE__ */ import_react51.default.createElement(import_antd41.Space, null, /* @__PURE__ */ import_react51.default.createElement(Text6, null, translate(
              "pages.error.404",
              "Sorry, the page you visited does not exist."
            )), errorMessage && /* @__PURE__ */ import_react51.default.createElement(import_antd41.Tooltip, { title: errorMessage }, /* @__PURE__ */ import_react51.default.createElement(import_icons17.InfoCircleOutlined, {}))), /* @__PURE__ */ import_react51.default.createElement(
              import_antd41.Button,
              {
                type: "primary",
                onClick: () => {
                  if (routerType === "legacy") {
                    push("/");
                  } else {
                    go({ to: "/" });
                  }
                }
              },
              translate("pages.error.backHome", "Back Home")
            ))
          }
        );
      }, "ErrorComponent");
      var import_react522 = __toESM2(__require("react"));
      var import_core41 = require_dist3();
      var import_antd422 = __require("antd");
      var import_core422 = require_dist3();
      var layoutStyles = {
        background: `radial-gradient(50% 50% at 50% 50%, #63386A 0%, #310438 100%)`,
        backgroundSize: "cover"
      };
      var containerStyles = {
        maxWidth: "408px",
        margin: "auto"
      };
      var titleStyles = {
        textAlign: "center",
        color: "#626262",
        fontSize: "30px",
        letterSpacing: "-0.04em"
      };
      var imageContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "28px"
      };
      var { Text: Text7, Title: Title2 } = import_antd422.Typography;
      var LoginPage = /* @__PURE__ */ __name2(() => {
        const [form] = import_antd422.Form.useForm();
        const translate = (0, import_core422.useTranslate)();
        const authProvider = (0, import_core41.useActiveAuthProvider)();
        const { mutate: login, isLoading } = (0, import_core422.useLogin)({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const CardTitle = /* @__PURE__ */ import_react522.default.createElement(Title2, { level: 3, style: titleStyles }, translate("pages.login.title", "Sign in your account"));
        return /* @__PURE__ */ import_react522.default.createElement(import_antd422.Layout, { style: layoutStyles }, /* @__PURE__ */ import_react522.default.createElement(
          import_antd422.Row,
          {
            justify: "center",
            align: "middle",
            style: {
              height: "100vh"
            }
          },
          /* @__PURE__ */ import_react522.default.createElement(import_antd422.Col, { xs: 22 }, /* @__PURE__ */ import_react522.default.createElement("div", { style: containerStyles }, /* @__PURE__ */ import_react522.default.createElement("div", { style: imageContainer }, /* @__PURE__ */ import_react522.default.createElement(
            "img",
            {
              src: "https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine.svg",
              alt: "Refine Logo"
            }
          )), /* @__PURE__ */ import_react522.default.createElement(import_antd422.Card, { title: CardTitle, headStyle: { borderBottom: 0 } }, /* @__PURE__ */ import_react522.default.createElement(
            import_antd422.Form,
            {
              layout: "vertical",
              form,
              onFinish: (values) => {
                login(values);
              },
              requiredMark: false,
              initialValues: {
                remember: false
              }
            },
            /* @__PURE__ */ import_react522.default.createElement(
              import_antd422.Form.Item,
              {
                name: "username",
                label: translate(
                  "pages.login.username",
                  "Username"
                ),
                rules: [{ required: true }]
              },
              /* @__PURE__ */ import_react522.default.createElement(
                import_antd422.Input,
                {
                  size: "large",
                  placeholder: translate(
                    "pages.login.username",
                    "Username"
                  )
                }
              )
            ),
            /* @__PURE__ */ import_react522.default.createElement(
              import_antd422.Form.Item,
              {
                name: "password",
                label: translate(
                  "pages.login.password",
                  "Password"
                ),
                rules: [{ required: true }],
                style: { marginBottom: "12px" }
              },
              /* @__PURE__ */ import_react522.default.createElement(
                import_antd422.Input,
                {
                  type: "password",
                  placeholder: "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF",
                  size: "large"
                }
              )
            ),
            /* @__PURE__ */ import_react522.default.createElement("div", { style: { marginBottom: "12px" } }, /* @__PURE__ */ import_react522.default.createElement(
              import_antd422.Form.Item,
              {
                name: "remember",
                valuePropName: "checked",
                noStyle: true
              },
              /* @__PURE__ */ import_react522.default.createElement(
                import_antd422.Checkbox,
                {
                  style: {
                    fontSize: "12px"
                  }
                },
                translate(
                  "pages.login.remember",
                  "Remember me"
                )
              )
            ), /* @__PURE__ */ import_react522.default.createElement(
              "a",
              {
                style: {
                  float: "right",
                  fontSize: "12px"
                },
                href: "#"
              },
              translate(
                "pages.login.forgotPassword",
                "Forgot password?"
              )
            )),
            /* @__PURE__ */ import_react522.default.createElement(
              import_antd422.Button,
              {
                type: "primary",
                size: "large",
                htmlType: "submit",
                loading: isLoading,
                block: true
              },
              translate("pages.login.signin", "Sign in")
            )
          ), /* @__PURE__ */ import_react522.default.createElement("div", { style: { marginTop: 8 } }, /* @__PURE__ */ import_react522.default.createElement(Text7, { style: { fontSize: 12 } }, translate(
            "pages.login.noAccount",
            "Don\u2019t have an account?"
          ), " ", /* @__PURE__ */ import_react522.default.createElement("a", { href: "#", style: { fontWeight: "bold" } }, translate(
            "pages.login.signup",
            "Sign up"
          )))))))
        ));
      }, "LoginPage");
      var React49 = __toESM2(__require("react"));
      var import_antd43 = __require("antd");
      var import_icons18 = __require("@ant-design/icons");
      var styles = {
        root: {
          height: "100vh",
          backgroundImage: "url('https://refine.ams3.cdn.digitaloceanspaces.com/login-background/background.png')",
          backgroundSize: "cover",
          backgroundColor: "#331049"
        },
        title: {
          color: "white",
          fontWeight: 800,
          fontSize: "64px",
          marginBottom: "8px"
        },
        p1: {
          color: "white",
          marginBottom: 0,
          fontSize: "20px",
          fontWeight: "bold"
        },
        p2: {
          color: "white",
          fontSize: "20px"
        },
        code: {
          backgroundColor: "white",
          color: "#331049"
        }
      };
      var { Title: Title3 } = import_antd43.Typography;
      var ReadyPage = /* @__PURE__ */ __name2(() => {
        return /* @__PURE__ */ React49.createElement(import_antd43.Row, { align: "middle", justify: "center", style: styles.root }, /* @__PURE__ */ React49.createElement(import_antd43.Col, { style: { textAlign: "center" } }, /* @__PURE__ */ React49.createElement(
          "img",
          {
            style: { marginBottom: "48px" },
            src: "https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine.svg",
            alt: "Refine Logo"
          }
        ), /* @__PURE__ */ React49.createElement(Title3, { style: styles.title }, "Welcome on board"), /* @__PURE__ */ React49.createElement("p", { style: styles.p1 }, "Your configuration is completed."), /* @__PURE__ */ React49.createElement("p", { style: styles.p2 }, "Now you can get started by adding your resources to the", " ", /* @__PURE__ */ React49.createElement("code", { style: styles.code }, `resources`), " property of", " ", /* @__PURE__ */ React49.createElement("code", { style: styles.code }, `<Refine>`)), /* @__PURE__ */ React49.createElement(
          import_antd43.Space,
          {
            size: "large",
            wrap: true,
            style: { marginTop: "70px", justifyContent: "center" }
          },
          /* @__PURE__ */ React49.createElement(
            "a",
            {
              href: "https://refine.dev",
              target: "_blank",
              rel: "noreferrer"
            },
            /* @__PURE__ */ React49.createElement(import_antd43.Button, { size: "large", icon: /* @__PURE__ */ React49.createElement(import_icons18.ReadOutlined, null) }, "Documentation")
          ),
          /* @__PURE__ */ React49.createElement(
            "a",
            {
              href: "https://refine.dev/examples",
              target: "_blank",
              rel: "noreferrer"
            },
            /* @__PURE__ */ React49.createElement(import_antd43.Button, { size: "large", icon: /* @__PURE__ */ React49.createElement(import_icons18.FolderOutlined, null) }, "Examples")
          ),
          /* @__PURE__ */ React49.createElement(
            "a",
            {
              href: "https://discord.gg/refine",
              target: "_blank",
              rel: "noreferrer"
            },
            /* @__PURE__ */ React49.createElement(import_antd43.Button, { size: "large", icon: /* @__PURE__ */ React49.createElement(import_icons18.TeamOutlined, null) }, "Community")
          )
        )));
      }, "ReadyPage");
      var import_react53 = __toESM2(__require("react"));
      var import_core43 = require_dist3();
      var WelcomePage = /* @__PURE__ */ __name2(() => {
        return /* @__PURE__ */ import_react53.default.createElement(import_core43.WelcomePage, null);
      }, "WelcomePage");
      var import_react58 = __toESM2(__require("react"));
      var import_react54 = __toESM2(__require("react"));
      var import_core44 = require_dist3();
      var import_antd44 = __require("antd");
      var import_core45 = require_dist3();
      var layoutStyles2 = {};
      var containerStyles2 = {
        maxWidth: "400px",
        margin: "auto",
        padding: "32px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.02), 0px 1px 6px -1px rgba(0, 0, 0, 0.02), 0px 1px 2px rgba(0, 0, 0, 0.03)"
      };
      var headStyles = {
        borderBottom: 0,
        padding: 0
      };
      var bodyStyles = { padding: 0, marginTop: "32px" };
      var titleStyles2 = {
        textAlign: "center",
        marginBottom: 0,
        fontSize: "24px",
        lineHeight: "32px",
        fontWeight: 700,
        overflowWrap: "break-word",
        hyphens: "manual",
        textOverflow: "unset",
        whiteSpace: "pre-wrap"
      };
      var { Text: Text8, Title: Title4 } = import_antd44.Typography;
      var { useToken: useToken7 } = import_antd44.theme;
      var LoginPage2 = /* @__PURE__ */ __name2(({
        providers,
        registerLink,
        forgotPasswordLink,
        rememberMe,
        contentProps,
        wrapperProps,
        renderContent,
        formProps,
        title,
        hideForm
      }) => {
        const { token } = useToken7();
        const [form] = import_antd44.Form.useForm();
        const translate = (0, import_core45.useTranslate)();
        const routerType = (0, import_core44.useRouterType)();
        const Link3 = (0, import_core44.useLink)();
        const { Link: LegacyLink } = (0, import_core45.useRouterContext)();
        const ActiveLink = routerType === "legacy" ? LegacyLink : Link3;
        const authProvider = (0, import_core44.useActiveAuthProvider)();
        const { mutate: login, isLoading } = (0, import_core45.useLogin)({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const PageTitle = title === false ? null : /* @__PURE__ */ import_react54.default.createElement(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "center",
              marginBottom: "32px",
              fontSize: "20px"
            }
          },
          title ?? /* @__PURE__ */ import_react54.default.createElement(ThemedTitleV2, { collapsed: false })
        );
        const CardTitle = /* @__PURE__ */ import_react54.default.createElement(
          Title4,
          {
            level: 3,
            style: {
              color: token.colorPrimaryTextHover,
              ...titleStyles2
            }
          },
          translate("pages.login.title", "Sign in to your account")
        );
        const renderProviders = /* @__PURE__ */ __name2(() => {
          if (providers && providers.length > 0) {
            return /* @__PURE__ */ import_react54.default.createElement(import_react54.default.Fragment, null, providers.map((provider) => {
              return /* @__PURE__ */ import_react54.default.createElement(
                import_antd44.Button,
                {
                  key: provider.name,
                  type: "default",
                  block: true,
                  icon: provider.icon,
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    marginBottom: "8px"
                  },
                  onClick: () => login({
                    providerName: provider.name
                  })
                },
                provider.label
              );
            }), !hideForm && /* @__PURE__ */ import_react54.default.createElement(import_antd44.Divider, null, /* @__PURE__ */ import_react54.default.createElement(
              Text8,
              {
                style: {
                  color: token.colorTextLabel
                }
              },
              translate("pages.login.divider", "or")
            )));
          }
          return null;
        }, "renderProviders");
        const CardContent = /* @__PURE__ */ import_react54.default.createElement(
          import_antd44.Card,
          {
            title: CardTitle,
            headStyle: headStyles,
            bodyStyle: bodyStyles,
            style: {
              ...containerStyles2,
              backgroundColor: token.colorBgElevated
            },
            ...contentProps ?? {}
          },
          renderProviders(),
          !hideForm && /* @__PURE__ */ import_react54.default.createElement(
            import_antd44.Form,
            {
              layout: "vertical",
              form,
              onFinish: (values) => login(values),
              requiredMark: false,
              initialValues: {
                remember: false
              },
              ...formProps
            },
            /* @__PURE__ */ import_react54.default.createElement(
              import_antd44.Form.Item,
              {
                name: "email",
                label: translate("pages.login.fields.email", "Email"),
                rules: [
                  { required: true },
                  {
                    type: "email",
                    message: translate(
                      "pages.login.errors.validEmail",
                      "Invalid email address"
                    )
                  }
                ]
              },
              /* @__PURE__ */ import_react54.default.createElement(
                import_antd44.Input,
                {
                  size: "large",
                  placeholder: translate(
                    "pages.login.fields.email",
                    "Email"
                  )
                }
              )
            ),
            /* @__PURE__ */ import_react54.default.createElement(
              import_antd44.Form.Item,
              {
                name: "password",
                label: translate(
                  "pages.login.fields.password",
                  "Password"
                ),
                rules: [{ required: true }]
              },
              /* @__PURE__ */ import_react54.default.createElement(
                import_antd44.Input,
                {
                  type: "password",
                  autoComplete: "current-password",
                  placeholder: "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF",
                  size: "large"
                }
              )
            ),
            /* @__PURE__ */ import_react54.default.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "24px"
                }
              },
              rememberMe ?? /* @__PURE__ */ import_react54.default.createElement(
                import_antd44.Form.Item,
                {
                  name: "remember",
                  valuePropName: "checked",
                  noStyle: true
                },
                /* @__PURE__ */ import_react54.default.createElement(
                  import_antd44.Checkbox,
                  {
                    style: {
                      fontSize: "12px"
                    }
                  },
                  translate(
                    "pages.login.buttons.rememberMe",
                    "Remember me"
                  )
                )
              ),
              forgotPasswordLink ?? /* @__PURE__ */ import_react54.default.createElement(
                ActiveLink,
                {
                  style: {
                    color: token.colorPrimaryTextHover,
                    fontSize: "12px",
                    marginLeft: "auto"
                  },
                  to: "/forgot-password"
                },
                translate(
                  "pages.login.buttons.forgotPassword",
                  "Forgot password?"
                )
              )
            ),
            !hideForm && /* @__PURE__ */ import_react54.default.createElement(import_antd44.Form.Item, null, /* @__PURE__ */ import_react54.default.createElement(
              import_antd44.Button,
              {
                type: "primary",
                size: "large",
                htmlType: "submit",
                loading: isLoading,
                block: true
              },
              translate("pages.login.signin", "Sign in")
            ))
          ),
          registerLink ?? /* @__PURE__ */ import_react54.default.createElement(
            "div",
            {
              style: {
                marginTop: hideForm ? 16 : 8
              }
            },
            /* @__PURE__ */ import_react54.default.createElement(Text8, { style: { fontSize: 12 } }, translate(
              "pages.login.buttons.noAccount",
              "Don\u2019t have an account?"
            ), " ", /* @__PURE__ */ import_react54.default.createElement(
              ActiveLink,
              {
                to: "/register",
                style: {
                  fontWeight: "bold",
                  color: token.colorPrimaryTextHover
                }
              },
              translate("pages.login.signup", "Sign up")
            ))
          )
        );
        return /* @__PURE__ */ import_react54.default.createElement(import_antd44.Layout, { style: layoutStyles2, ...wrapperProps ?? {} }, /* @__PURE__ */ import_react54.default.createElement(
          import_antd44.Row,
          {
            justify: "center",
            align: hideForm ? "top" : "middle",
            style: {
              padding: "16px 0",
              minHeight: "100dvh",
              paddingTop: hideForm ? "15dvh" : "16px"
            }
          },
          /* @__PURE__ */ import_react54.default.createElement(import_antd44.Col, { xs: 22 }, renderContent ? renderContent(CardContent, PageTitle) : /* @__PURE__ */ import_react54.default.createElement(import_react54.default.Fragment, null, PageTitle, CardContent))
        ));
      }, "LoginPage");
      var import_react55 = __toESM2(__require("react"));
      var import_core46 = require_dist3();
      var import_antd45 = __require("antd");
      var import_core47 = require_dist3();
      var { Text: Text9, Title: Title5 } = import_antd45.Typography;
      var { useToken: useToken8 } = import_antd45.theme;
      var RegisterPage = /* @__PURE__ */ __name2(({
        providers,
        loginLink,
        wrapperProps,
        contentProps,
        renderContent,
        formProps,
        title,
        hideForm
      }) => {
        const { token } = useToken8();
        const [form] = import_antd45.Form.useForm();
        const translate = (0, import_core47.useTranslate)();
        const routerType = (0, import_core46.useRouterType)();
        const Link3 = (0, import_core46.useLink)();
        const { Link: LegacyLink } = (0, import_core47.useRouterContext)();
        const ActiveLink = routerType === "legacy" ? LegacyLink : Link3;
        const authProvider = (0, import_core46.useActiveAuthProvider)();
        const { mutate: register, isLoading } = (0, import_core47.useRegister)({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const PageTitle = title === false ? null : /* @__PURE__ */ import_react55.default.createElement(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "center",
              marginBottom: "32px",
              fontSize: "20px"
            }
          },
          title ?? /* @__PURE__ */ import_react55.default.createElement(ThemedTitleV2, { collapsed: false })
        );
        const CardTitle = /* @__PURE__ */ import_react55.default.createElement(
          Title5,
          {
            level: 3,
            style: {
              color: token.colorPrimaryTextHover,
              ...titleStyles2
            }
          },
          translate("pages.register.title", "Sign up for your account")
        );
        const renderProviders = /* @__PURE__ */ __name2(() => {
          if (providers && providers.length > 0) {
            return /* @__PURE__ */ import_react55.default.createElement(import_react55.default.Fragment, null, providers.map((provider) => {
              return /* @__PURE__ */ import_react55.default.createElement(
                import_antd45.Button,
                {
                  key: provider.name,
                  type: "default",
                  block: true,
                  icon: provider.icon,
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    marginBottom: "8px"
                  },
                  onClick: () => register({
                    providerName: provider.name
                  })
                },
                provider.label
              );
            }), !hideForm && /* @__PURE__ */ import_react55.default.createElement(import_antd45.Divider, null, /* @__PURE__ */ import_react55.default.createElement(
              Text9,
              {
                style: {
                  color: token.colorTextLabel
                }
              },
              translate("pages.login.divider", "or")
            )));
          }
          return null;
        }, "renderProviders");
        const CardContent = /* @__PURE__ */ import_react55.default.createElement(
          import_antd45.Card,
          {
            title: CardTitle,
            headStyle: headStyles,
            bodyStyle: bodyStyles,
            style: {
              ...containerStyles2,
              backgroundColor: token.colorBgElevated
            },
            ...contentProps ?? {}
          },
          renderProviders(),
          !hideForm && /* @__PURE__ */ import_react55.default.createElement(
            import_antd45.Form,
            {
              layout: "vertical",
              form,
              onFinish: (values) => register(values),
              requiredMark: false,
              ...formProps
            },
            /* @__PURE__ */ import_react55.default.createElement(
              import_antd45.Form.Item,
              {
                name: "email",
                label: translate("pages.register.email", "Email"),
                rules: [
                  { required: true },
                  {
                    type: "email",
                    message: translate(
                      "pages.register.errors.validEmail",
                      "Invalid email address"
                    )
                  }
                ]
              },
              /* @__PURE__ */ import_react55.default.createElement(
                import_antd45.Input,
                {
                  size: "large",
                  placeholder: translate(
                    "pages.register.fields.email",
                    "Email"
                  )
                }
              )
            ),
            /* @__PURE__ */ import_react55.default.createElement(
              import_antd45.Form.Item,
              {
                name: "password",
                label: translate(
                  "pages.register.fields.password",
                  "Password"
                ),
                rules: [{ required: true }]
              },
              /* @__PURE__ */ import_react55.default.createElement(
                import_antd45.Input,
                {
                  type: "password",
                  placeholder: "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF",
                  size: "large"
                }
              )
            ),
            /* @__PURE__ */ import_react55.default.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "24px"
                }
              },
              loginLink ?? /* @__PURE__ */ import_react55.default.createElement(
                Text9,
                {
                  style: {
                    fontSize: 12,
                    marginLeft: "auto"
                  }
                },
                translate(
                  "pages.login.buttons.haveAccount",
                  "Have an account?"
                ),
                " ",
                /* @__PURE__ */ import_react55.default.createElement(
                  ActiveLink,
                  {
                    style: {
                      fontWeight: "bold",
                      color: token.colorPrimaryTextHover
                    },
                    to: "/login"
                  },
                  translate("pages.login.signin", "Sign in")
                )
              )
            ),
            /* @__PURE__ */ import_react55.default.createElement(
              import_antd45.Form.Item,
              {
                style: {
                  marginBottom: 0
                }
              },
              /* @__PURE__ */ import_react55.default.createElement(
                import_antd45.Button,
                {
                  type: "primary",
                  size: "large",
                  htmlType: "submit",
                  loading: isLoading,
                  block: true
                },
                translate(
                  "pages.register.buttons.submit",
                  "Sign up"
                )
              )
            )
          ),
          hideForm && loginLink !== false && /* @__PURE__ */ import_react55.default.createElement(
            "div",
            {
              style: {
                marginTop: hideForm ? 16 : 8
              }
            },
            /* @__PURE__ */ import_react55.default.createElement(
              Text9,
              {
                style: {
                  fontSize: 12
                }
              },
              translate(
                "pages.login.buttons.haveAccount",
                "Have an account?"
              ),
              " ",
              /* @__PURE__ */ import_react55.default.createElement(
                ActiveLink,
                {
                  style: {
                    fontWeight: "bold",
                    color: token.colorPrimaryTextHover
                  },
                  to: "/login"
                },
                translate("pages.login.signin", "Sign in")
              )
            )
          )
        );
        return /* @__PURE__ */ import_react55.default.createElement(import_antd45.Layout, { style: layoutStyles2, ...wrapperProps ?? {} }, /* @__PURE__ */ import_react55.default.createElement(
          import_antd45.Row,
          {
            justify: "center",
            align: hideForm ? "top" : "middle",
            style: {
              padding: "16px 0",
              minHeight: "100dvh",
              paddingTop: hideForm ? "15dvh" : "16px"
            }
          },
          /* @__PURE__ */ import_react55.default.createElement(import_antd45.Col, { xs: 22 }, renderContent ? renderContent(CardContent, PageTitle) : /* @__PURE__ */ import_react55.default.createElement(import_react55.default.Fragment, null, PageTitle, CardContent))
        ));
      }, "RegisterPage");
      var import_react56 = __toESM2(__require("react"));
      var import_core48 = require_dist3();
      var import_antd46 = __require("antd");
      var import_core49 = require_dist3();
      var { Text: Text10, Title: Title6 } = import_antd46.Typography;
      var { useToken: useToken9 } = import_antd46.theme;
      var ForgotPasswordPage = /* @__PURE__ */ __name2(({
        loginLink,
        wrapperProps,
        contentProps,
        renderContent,
        formProps,
        title
      }) => {
        const { token } = useToken9();
        const [form] = import_antd46.Form.useForm();
        const translate = (0, import_core49.useTranslate)();
        const routerType = (0, import_core48.useRouterType)();
        const Link3 = (0, import_core48.useLink)();
        const { Link: LegacyLink } = (0, import_core49.useRouterContext)();
        const ActiveLink = routerType === "legacy" ? LegacyLink : Link3;
        const { mutate: forgotPassword, isLoading } = (0, import_core49.useForgotPassword)();
        const PageTitle = title === false ? null : /* @__PURE__ */ import_react56.default.createElement(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "center",
              marginBottom: "32px",
              fontSize: "20px"
            }
          },
          title ?? /* @__PURE__ */ import_react56.default.createElement(ThemedTitleV2, { collapsed: false })
        );
        const CardTitle = /* @__PURE__ */ import_react56.default.createElement(
          Title6,
          {
            level: 3,
            style: {
              color: token.colorPrimaryTextHover,
              ...titleStyles2
            }
          },
          translate("pages.forgotPassword.title", "Forgot your password?")
        );
        const CardContent = /* @__PURE__ */ import_react56.default.createElement(
          import_antd46.Card,
          {
            title: CardTitle,
            headStyle: headStyles,
            bodyStyle: bodyStyles,
            style: {
              ...containerStyles2,
              backgroundColor: token.colorBgElevated
            },
            ...contentProps ?? {}
          },
          /* @__PURE__ */ import_react56.default.createElement(
            import_antd46.Form,
            {
              layout: "vertical",
              form,
              onFinish: (values) => forgotPassword(values),
              requiredMark: false,
              ...formProps
            },
            /* @__PURE__ */ import_react56.default.createElement(
              import_antd46.Form.Item,
              {
                name: "email",
                label: translate(
                  "pages.forgotPassword.fields.email",
                  "Email"
                ),
                rules: [
                  { required: true },
                  {
                    type: "email",
                    message: translate(
                      "pages.forgotPassword.errors.validEmail",
                      "Invalid email address"
                    )
                  }
                ]
              },
              /* @__PURE__ */ import_react56.default.createElement(
                import_antd46.Input,
                {
                  type: "email",
                  size: "large",
                  placeholder: translate(
                    "pages.forgotPassword.fields.email",
                    "Email"
                  )
                }
              )
            ),
            /* @__PURE__ */ import_react56.default.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "space-between"
                }
              },
              loginLink ?? /* @__PURE__ */ import_react56.default.createElement(
                Text10,
                {
                  style: {
                    fontSize: 12,
                    marginLeft: "auto"
                  }
                },
                translate(
                  "pages.register.buttons.haveAccount",
                  "Have an account? "
                ),
                " ",
                /* @__PURE__ */ import_react56.default.createElement(
                  ActiveLink,
                  {
                    style: {
                      fontWeight: "bold",
                      color: token.colorPrimaryTextHover
                    },
                    to: "/login"
                  },
                  translate("pages.login.signin", "Sign in")
                )
              )
            ),
            /* @__PURE__ */ import_react56.default.createElement(
              import_antd46.Form.Item,
              {
                style: {
                  marginTop: "24px",
                  marginBottom: 0
                }
              },
              /* @__PURE__ */ import_react56.default.createElement(
                import_antd46.Button,
                {
                  type: "primary",
                  size: "large",
                  htmlType: "submit",
                  loading: isLoading,
                  block: true
                },
                translate(
                  "pages.forgotPassword.buttons.submit",
                  "Send reset instructions"
                )
              )
            )
          )
        );
        return /* @__PURE__ */ import_react56.default.createElement(import_antd46.Layout, { style: layoutStyles2, ...wrapperProps ?? {} }, /* @__PURE__ */ import_react56.default.createElement(
          import_antd46.Row,
          {
            justify: "center",
            align: "middle",
            style: {
              padding: "16px 0",
              minHeight: "100dvh"
            }
          },
          /* @__PURE__ */ import_react56.default.createElement(import_antd46.Col, { xs: 22 }, renderContent ? renderContent(CardContent, PageTitle) : /* @__PURE__ */ import_react56.default.createElement(import_react56.default.Fragment, null, PageTitle, CardContent))
        ));
      }, "ForgotPasswordPage");
      var import_react57 = __toESM2(__require("react"));
      var import_core50 = require_dist3();
      var import_antd47 = __require("antd");
      var import_core51 = require_dist3();
      var { Title: Title7 } = import_antd47.Typography;
      var { useToken: useToken10 } = import_antd47.theme;
      var UpdatePasswordPage = /* @__PURE__ */ __name2(({
        wrapperProps,
        contentProps,
        renderContent,
        formProps,
        title
      }) => {
        const { token } = useToken10();
        const [form] = import_antd47.Form.useForm();
        const translate = (0, import_core51.useTranslate)();
        const authProvider = (0, import_core50.useActiveAuthProvider)();
        const { mutate: updatePassword, isLoading } = (0, import_core51.useUpdatePassword)({
          v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
        });
        const PageTitle = title === false ? null : /* @__PURE__ */ import_react57.default.createElement(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "center",
              marginBottom: "32px",
              fontSize: "20px"
            }
          },
          title ?? /* @__PURE__ */ import_react57.default.createElement(ThemedTitleV2, { collapsed: false })
        );
        const CardTitle = /* @__PURE__ */ import_react57.default.createElement(
          Title7,
          {
            level: 3,
            style: {
              color: token.colorPrimaryTextHover,
              ...titleStyles2
            }
          },
          translate("pages.updatePassword.title", "Set New Password")
        );
        const CardContent = /* @__PURE__ */ import_react57.default.createElement(
          import_antd47.Card,
          {
            title: CardTitle,
            headStyle: headStyles,
            bodyStyle: bodyStyles,
            style: {
              ...containerStyles2,
              backgroundColor: token.colorBgElevated
            },
            ...contentProps ?? {}
          },
          /* @__PURE__ */ import_react57.default.createElement(
            import_antd47.Form,
            {
              layout: "vertical",
              form,
              onFinish: (values) => updatePassword(values),
              requiredMark: false,
              ...formProps
            },
            /* @__PURE__ */ import_react57.default.createElement(
              import_antd47.Form.Item,
              {
                name: "password",
                label: translate(
                  "pages.updatePassword.fields.password",
                  "New Password"
                ),
                rules: [{ required: true }],
                style: { marginBottom: "12px" }
              },
              /* @__PURE__ */ import_react57.default.createElement(
                import_antd47.Input,
                {
                  type: "password",
                  placeholder: "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF",
                  size: "large"
                }
              )
            ),
            /* @__PURE__ */ import_react57.default.createElement(
              import_antd47.Form.Item,
              {
                name: "confirmPassword",
                label: translate(
                  "pages.updatePassword.fields.confirmPassword",
                  "Confirm New Password"
                ),
                hasFeedback: true,
                dependencies: ["password"],
                rules: [
                  {
                    required: true
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          translate(
                            "pages.updatePassword.errors.confirmPasswordNotMatch",
                            "Passwords do not match"
                          )
                        )
                      );
                    }
                  })
                ]
              },
              /* @__PURE__ */ import_react57.default.createElement(
                import_antd47.Input,
                {
                  type: "password",
                  placeholder: "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF",
                  size: "large"
                }
              )
            ),
            /* @__PURE__ */ import_react57.default.createElement(
              import_antd47.Form.Item,
              {
                style: {
                  marginBottom: 0
                }
              },
              /* @__PURE__ */ import_react57.default.createElement(
                import_antd47.Button,
                {
                  type: "primary",
                  size: "large",
                  htmlType: "submit",
                  loading: isLoading,
                  block: true
                },
                translate(
                  "pages.updatePassword.buttons.submit",
                  "Update"
                )
              )
            )
          )
        );
        return /* @__PURE__ */ import_react57.default.createElement(import_antd47.Layout, { style: layoutStyles2, ...wrapperProps ?? {} }, /* @__PURE__ */ import_react57.default.createElement(
          import_antd47.Row,
          {
            justify: "center",
            align: "middle",
            style: {
              padding: "16px 0",
              minHeight: "100dvh"
            }
          },
          /* @__PURE__ */ import_react57.default.createElement(import_antd47.Col, { xs: 22 }, renderContent ? renderContent(CardContent, PageTitle) : /* @__PURE__ */ import_react57.default.createElement(import_react57.default.Fragment, null, PageTitle, CardContent))
        ));
      }, "UpdatePasswordPage");
      var AuthPage = /* @__PURE__ */ __name2((props) => {
        const { type } = props;
        const renderView = /* @__PURE__ */ __name2(() => {
          switch (type) {
            case "register":
              return /* @__PURE__ */ import_react58.default.createElement(RegisterPage, { ...props });
            case "forgotPassword":
              return /* @__PURE__ */ import_react58.default.createElement(ForgotPasswordPage, { ...props });
            case "updatePassword":
              return /* @__PURE__ */ import_react58.default.createElement(UpdatePasswordPage, { ...props });
            default:
              return /* @__PURE__ */ import_react58.default.createElement(LoginPage2, { ...props });
          }
        }, "renderView");
        return /* @__PURE__ */ import_react58.default.createElement(import_react58.default.Fragment, null, renderView());
      }, "AuthPage");
      var import_react59 = __toESM2(__require("react"));
      var import_core522 = require_dist3();
      var import_antd48 = __require("antd");
      var import_icons19 = __require("@ant-design/icons");
      var Breadcrumb = /* @__PURE__ */ __name2(({
        breadcrumbProps,
        showHome = true,
        hideIcons = false,
        meta
      }) => {
        const routerType = (0, import_core522.useRouterType)();
        const { breadcrumbs } = (0, import_core522.useBreadcrumb)({
          meta
        });
        const Link3 = (0, import_core522.useLink)();
        const { Link: LegacyLink } = (0, import_core522.useRouterContext)();
        const { hasDashboard } = (0, import_core522.useRefineContext)();
        const { resources } = (0, import_core522.useResource)();
        const rootRouteResource = (0, import_core522.matchResourceFromRoute)("/", resources);
        const ActiveLink = routerType === "legacy" ? LegacyLink : Link3;
        if (breadcrumbs.length === 1) {
          return null;
        }
        const breadCrumbItems = breadcrumbs.map(({ label, icon, href }) => ({
          key: `breadcrumb-item-${label}`,
          title: /* @__PURE__ */ import_react59.default.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 4
              }
            },
            !hideIcons && icon,
            href ? /* @__PURE__ */ import_react59.default.createElement(ActiveLink, { to: href }, label) : /* @__PURE__ */ import_react59.default.createElement("span", null, label)
          )
        }));
        const getBreadcrumbItems = /* @__PURE__ */ __name2(() => {
          var _a, _b;
          if (showHome && (hasDashboard || rootRouteResource.found)) {
            return [
              {
                key: "breadcrumb-item-home",
                title: /* @__PURE__ */ import_react59.default.createElement(ActiveLink, { to: "/" }, ((_b = (_a = rootRouteResource == null ? void 0 : rootRouteResource.resource) == null ? void 0 : _a.meta) == null ? void 0 : _b.icon) ?? /* @__PURE__ */ import_react59.default.createElement(import_icons19.HomeOutlined, null))
              },
              ...breadCrumbItems
            ];
          }
          return breadCrumbItems;
        }, "getBreadcrumbItems");
        return /* @__PURE__ */ import_react59.default.createElement(import_antd48.Breadcrumb, { items: getBreadcrumbItems(), ...breadcrumbProps });
      }, "Breadcrumb");
      var import_react60 = __toESM2(__require("react"));
      var import_pro_layout = __require("@ant-design/pro-layout");
      var import_antd49 = __require("antd");
      var import_icons20 = __require("@ant-design/icons");
      var import_ui_types11 = require_dist4();
      var PageHeader = /* @__PURE__ */ __name2(({ children, ...props }) => {
        const backIcon = typeof props.backIcon === "undefined" ? /* @__PURE__ */ import_react60.default.createElement(import_antd49.Button, { type: "text", icon: /* @__PURE__ */ import_react60.default.createElement(import_icons20.ArrowLeftOutlined, null) }) : props.backIcon;
        const title = typeof props.title === "string" ? /* @__PURE__ */ import_react60.default.createElement(
          import_antd49.Typography.Title,
          {
            className: import_ui_types11.RefinePageHeaderClassNames.Title,
            level: 4,
            style: { marginBottom: 0 }
          },
          props.title
        ) : props.title;
        const subtitle = typeof props.title === "string" ? /* @__PURE__ */ import_react60.default.createElement(
          import_antd49.Typography.Title,
          {
            className: import_ui_types11.RefinePageHeaderClassNames.SubTitle,
            level: 5,
            type: "secondary",
            style: { marginBottom: 0 }
          },
          props.subTitle
        ) : props.subTitle;
        return /* @__PURE__ */ import_react60.default.createElement(
          import_pro_layout.PageHeader,
          {
            ...props,
            backIcon,
            title,
            subTitle: subtitle,
            style: { padding: 0, ...props.style }
          },
          children
        );
      }, "PageHeader");
      var import_react61 = __toESM2(__require("react"));
      var import_core53 = require_dist3();
      var import_antd50 = __require("antd");
      var import_icons21 = __require("@ant-design/icons");
      var AutoSaveIndicator = /* @__PURE__ */ __name2(({
        status,
        elements: {
          success = /* @__PURE__ */ import_react61.default.createElement(
            Message,
            {
              key: "autoSave.success",
              defaultMessage: "saved",
              icon: /* @__PURE__ */ import_react61.default.createElement(import_icons21.CheckCircleOutlined, null)
            }
          ),
          error = /* @__PURE__ */ import_react61.default.createElement(
            Message,
            {
              key: "autoSave.error",
              defaultMessage: "auto save failure",
              icon: /* @__PURE__ */ import_react61.default.createElement(import_icons21.ExclamationCircleOutlined, null)
            }
          ),
          loading = /* @__PURE__ */ import_react61.default.createElement(
            Message,
            {
              key: "autoSave.loading",
              defaultMessage: "saving...",
              icon: /* @__PURE__ */ import_react61.default.createElement(import_icons21.SyncOutlined, null)
            }
          ),
          idle = /* @__PURE__ */ import_react61.default.createElement(
            Message,
            {
              key: "autoSave.idle",
              defaultMessage: "waiting for changes",
              icon: /* @__PURE__ */ import_react61.default.createElement(import_icons21.EllipsisOutlined, null)
            }
          )
        } = {}
      }) => {
        return /* @__PURE__ */ import_react61.default.createElement(
          import_core53.AutoSaveIndicator,
          {
            status,
            elements: {
              success,
              error,
              loading,
              idle
            }
          }
        );
      }, "AutoSaveIndicator");
      var Message = /* @__PURE__ */ __name2(({
        key,
        defaultMessage,
        icon
      }) => {
        const translate = (0, import_core53.useTranslate)();
        const { useToken: useToken11 } = import_antd50.theme;
        const { token } = useToken11();
        return /* @__PURE__ */ import_react61.default.createElement(
          import_antd50.Typography.Text,
          {
            style: {
              marginRight: 5,
              color: token.colorTextTertiary,
              fontSize: ".8rem"
            }
          },
          translate(key, defaultMessage),
          /* @__PURE__ */ import_react61.default.createElement("span", { style: { marginLeft: ".2rem" } }, icon)
        );
      }, "Message");
      var getValueFromEvent3 = /* @__PURE__ */ __name2((event) => {
        const { fileList } = event;
        return [...fileList];
      }, "getValueFromEvent");
      var RefineThemes = {
        Blue: {
          token: {
            colorPrimary: "#1677FF"
          }
        },
        Purple: {
          token: {
            colorPrimary: "#722ED1"
          }
        },
        Magenta: {
          token: {
            colorPrimary: "#EB2F96"
          }
        },
        Red: {
          token: {
            colorPrimary: "#F5222D"
          }
        },
        Orange: {
          token: {
            colorPrimary: "#FA541C"
          }
        },
        Yellow: {
          token: {
            colorPrimary: "#FAAD14"
          }
        },
        Green: {
          token: {
            colorPrimary: "#52C41A"
          }
        }
      };
    }
  });

  // src/inferencers/antd/index.tsx
  var import_react9 = __toESM(__require("react"));
  var import_core6 = __toESM(require_dist3());

  // src/inferencers/antd/show.tsx
  var import_antd3 = __toESM(require_dist5());
  var import_antd4 = __require("antd");

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
  var prepareLiveCode = /* @__PURE__ */ __name((code, componentName3) => {
    return `
    ${code ?? ""}
    
    render(typeof ${componentName3} !== "undefined" ? <${componentName3} /> : <></>);
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

  // src/inferencers/antd/error.tsx
  var import_react6 = __toESM(__require("react"));
  var import_antd = __require("antd");
  var ErrorComponent = /* @__PURE__ */ __name(({
    error
  }) => {
    if (error) {
      return /* @__PURE__ */ import_react6.default.createElement(import_antd.Row, { justify: "center", align: "middle", style: { minHeight: "200px" } }, /* @__PURE__ */ import_react6.default.createElement(import_antd.Col, null, /* @__PURE__ */ import_react6.default.createElement(
        import_antd.Alert,
        {
          message: "Error",
          description: /* @__PURE__ */ import_react6.default.createElement(
            "div",
            {
              dangerouslySetInnerHTML: {
                __html: error ?? ""
              }
            }
          ),
          type: "error",
          showIcon: true
        }
      )));
    }
    return null;
  }, "ErrorComponent");

  // src/inferencers/antd/loading.tsx
  var import_react7 = __toESM(__require("react"));
  var import_antd2 = __require("antd");
  var LoadingComponent = /* @__PURE__ */ __name(() => {
    return /* @__PURE__ */ import_react7.default.createElement(import_antd2.Row, { justify: "center", align: "middle", style: { minHeight: "300px" } }, /* @__PURE__ */ import_react7.default.createElement(import_antd2.Col, null, /* @__PURE__ */ import_react7.default.createElement(import_antd2.Spin, { size: "large" })));
  }, "LoadingComponent");

  // src/inferencers/antd/show.tsx
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
      ["React", "react", true],
      ["IResourceComponentsProps", "@refinedev/core"],
      ["useShow", "@refinedev/core"],
      ["Show", "@refinedev/antd"],
      ["Typography", "antd"]
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
          imports.push(["TagField", "@refinedev/antd"]);
          return jsx`
                <Title level={5}>${translatePrettyString({
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
                  return `{record?.${field.key}?.length ? ${variableName}?.data?.map((${mapItemName}: any) => <TagField key={${val}} value={${val}} />) : <></>}`;
                }
              } else {
                return void 0;
              }
            } else {
              return void 0;
            }
          })()}
                    </>
                )}
                `;
        }
        if (field.fieldable) {
          return jsx`
                <Title level={5}>${translatePrettyString({
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
                <Title level={5}>${translatePrettyString({
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
        imports.push(
          ["TagField", "@refinedev/antd"],
          ["TextField", "@refinedev/antd"]
        );
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Title level={5}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Title>
                {${accessor(recordName, field.key)}?.map((item: any) => (
                    <TagField value={${val}} key={${val}} />
                ))}
            `;
        }
        return jsx`
                <Title level={5}>${translatePrettyString({
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
        imports.push(["ImageField", "@refinedev/antd"]);
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Title level={5}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Title>
                {${accessor(recordName, field.key)}?.map((item: any) => (
                    <ImageField style={{ maxWidth: 200 }} value={${val}} key={${val}} />
                ))}
            `;
        }
        return jsx`
                <Title level={5}>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</Title>
                <ImageField style={{ maxWidth: 200 }} value={${accessor(
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
          ["TagField", "@refinedev/antd"],
          ["EmailField", "@refinedev/antd"]
        );
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Title level={5}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Title>
                <>
                {${accessor(recordName, field.key)}?.map((item: any) => (
                    <TagField value={${val}} key={${val}} />
                ))}
                </>
            `;
        }
        return jsx`
                <Title level={5}>${translatePrettyString({
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
        imports.push(
          ["TagField", "@refinedev/antd"],
          ["UrlField", "@refinedev/antd"]
        );
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Title level={5}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Title>
                {${accessor(recordName, field.key)}?.map((item: any) => (
                    <TagField value={${val}} key={${val}} />
                ))}
            `;
        }
        return jsx`
                <Title level={5}>${translatePrettyString({
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
        imports.push(
          ["TagField", "@refinedev/antd"],
          ["BooleanField", "@refinedev/antd"]
        );
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Title level={5}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Title>
                {(${accessor(
            recordName,
            field.key
          )} as any[])?.map((item, index) => (
                    <BooleanField value={${val}} key={index} />
                ))}
            `;
        }
        return jsx`
                <Title level={5}>${translatePrettyString({
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
        imports.push(["DateField", "@refinedev/antd"]);
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Title level={5}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Title>
                {${accessor(recordName, field.key)}?.map((item: any) => (
                    <DateField value={${val}} key={${val}} />
                ))}
            `;
        }
        return jsx`
                <Title level={5}>${translatePrettyString({
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
        imports.push(["MarkdownField", "@refinedev/antd"]);
        return jsx`
                <Title level={5}>${translatePrettyString({
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
        imports.push(["NumberField", "@refinedev/antd"]);
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor);
          return jsx`
                <Title level={5}>${translatePrettyString({
            resource,
            field,
            i18n,
            noQuotes: true
          })}</Title>
                {${accessor(recordName, field.key)}?.map((item: any) => (
                    <TagField value={${val}} key={${val}} />
                ))}
            `;
        }
        return jsx`
                <Title level={5}>${translatePrettyString({
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
    const renderedFields = fields.map((field) => {
      switch (field == null ? void 0 : field.type) {
        case "text":
          return textFields(field);
        case "number":
          return numberFields(field);
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
    ${printImports(imports)}
    
    const { Title } = Typography;

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
    ) ? `{${getMetaProps(
      (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
      meta,
      "getOne"
    )}}` : ""});
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
        "@refinedev/antd",
        "RefineAntd",
        {
          Show: import_antd3.Show,
          TagField: import_antd3.TagField,
          TextField: import_antd3.TextField,
          ImageField: import_antd3.ImageField,
          EmailField: import_antd3.EmailField,
          UrlField: import_antd3.UrlField,
          BooleanField: import_antd3.BooleanField,
          DateField: import_antd3.DateField,
          MarkdownField: import_antd3.MarkdownField,
          NumberField: import_antd3.NumberField
        }
      ],
      ["antd", "AntdPackage", { Typography: import_antd4.Typography }]
    ],
    codeViewerComponent: SharedCodeViewer,
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    renderer
  });

  // src/inferencers/antd/next/list.tsx
  var import_antd5 = __toESM(require_dist5());
  var import_antd6 = __require("antd");

  // src/from-scheme/find.ts
  var import_lodash_es2 = __require("lodash-es");

  // src/from-scheme/scheme.ts
  var scheme_default = {
    "openapi": "3.0.0",
    "paths": {
      "/api/platform/v1/auth/signup": {
        "post": {
          "operationId": "AuthController_signUp",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SignUpByEmailRequest"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SignUpByEmailResponseDTO"
                  }
                }
              }
            },
            "409": {
              "description": "Appears when user with such email already exists",
              "content": {
                "application/json": {
                  "schema": {
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ErrorResponse"
                      },
                      {
                        "properties": {
                          "status": {
                            "type": "number",
                            "default": 409
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/api/platform/v1/auth/tenant-signup": {
        "post": {
          "operationId": "AuthController_signUpWithTenantCreation",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SignUpByEmailWithTenantCreationRequest"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SignUpByEmailResponseDTO"
                  }
                }
              }
            },
            "409": {
              "description": "Appears when user with such email already exists",
              "content": {
                "application/json": {
                  "schema": {
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/ErrorResponse"
                      },
                      {
                        "properties": {
                          "status": {
                            "type": "number",
                            "default": 409
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/api/platform/v1/auth/approve-signup": {
        "post": {
          "operationId": "AuthController_approveSignup",
          "summary": "",
          "description": "or you can respond with some message and let user to login\n    default behavior is to force user to login and make sure his password is correct",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApproveSignUpRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/api/platform/v1/auth/signin": {
        "post": {
          "operationId": "AuthController_signIn",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SignInRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SignInResponseDTO"
                  }
                }
              }
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/api/platform/v1/auth/sso/saml/login": {
        "post": {
          "operationId": "AuthController_samlLogin",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/InitiateSamlLoginRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/api/platform/v1/auth/sso/saml/ac": {
        "post": {
          "operationId": "AuthController_samlAcknowledge",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/api/platform/v1/auth/refresh-access-token": {
        "post": {
          "operationId": "AuthController_refreshAccessToken",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/api/platform/v1/auth/saml/sso/metadata": {
        "get": {
          "operationId": "SamlController_samlMetadata",
          "parameters": [
            {
              "name": "samlConfigurationId",
              "required": true,
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "tenantId",
              "required": true,
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Auth"
          ]
        }
      },
      "/api/platform/v1/roles": {
        "get": {
          "operationId": "RolesController_findAll",
          "parameters": [
            {
              "name": "page",
              "required": false,
              "in": "query",
              "description": "Page number to retrieve.If you provide invalid value the default page number will applied\n        <p>\n             <b>Example: </b> 1\n          </p>\n        <p>\n             <b>Default Value: </b> 1\n          </p>\n        ",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "limit",
              "required": false,
              "in": "query",
              "description": "Number of records per page.\n      <p>\n             <b>Example: </b> 20\n          </p>\n      <p>\n             <b>Default Value: </b> 50\n          </p>\n      <p>\n             <b>Max Value: </b> 100\n          </p>\n\n      If provided value is greater than max value, max value will be applied.\n      ",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "filter.id",
              "required": false,
              "in": "query",
              "description": "Filter by id query param.\n          <p>\n             <b>Format: </b> filter.id={$not}:OPERATION:VALUE\n          </p>\n          <p>\n             <b>Example: </b> filter.id=$not:$like:John Doe&filter.id=like:John\n          </p>\n          <h4>Available Operations</h4><ul><li>$eq</li>\n<li>$in</li></ul>",
              "schema": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            {
              "name": "filter.name",
              "required": false,
              "in": "query",
              "description": "Filter by name query param.\n          <p>\n             <b>Format: </b> filter.name={$not}:OPERATION:VALUE\n          </p>\n          <p>\n             <b>Example: </b> filter.name=$not:$like:John Doe&filter.name=like:John\n          </p>\n          <h4>Available Operations</h4><ul><li>$contains</li></ul>",
              "schema": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            {
              "name": "sortBy",
              "required": false,
              "in": "query",
              "description": "Parameter to sort by.\n      <p>To sort by multiple fields, just provide query param multiple types. The order in url defines an order of sorting</p>\n      <p>\n             <b>Format: </b> fieldName:DIRECTION\n          </p>\n      <p>\n             <b>Example: </b> sortBy=id:DESC&sortBy=createdAt:ASC\n          </p>\n      <p>\n             <b>Default Value: </b> createdAt:DESC,id:DESC\n          </p>\n      <h4>Available Fields</h4><ul><li>id</li>\n<li>name</li>\n<li>createdAt</li>\n<li>updatedAt</li></ul>\n      ",
              "schema": {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "id:ASC",
                    "id:DESC",
                    "name:ASC",
                    "name:DESC",
                    "createdAt:ASC",
                    "createdAt:DESC",
                    "updatedAt:ASC",
                    "updatedAt:DESC"
                  ]
                }
              }
            },
            {
              "name": "search",
              "required": false,
              "in": "query",
              "description": "Search term to filter result values\n        <p>\n             <b>Example: </b> John\n          </p>\n        <p>\n             <b>Default Value: </b> No default value\n          </p>\n        ",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "searchBy",
              "required": false,
              "in": "query",
              "description": "List of fields to search by term to filter result values\n        <p>\n             <b>Example: </b> name,roleType\n          </p>\n        <p>\n             <b>Default Value: </b> By default all fields mentioned below will be used to search by term\n          </p>\n        <h4>Available Fields</h4><ul><li>name</li>\n<li>roleType</li></ul>\n        ",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/PaginatedDocumented"
                      },
                      {
                        "properties": {
                          "data": {
                            "type": "array",
                            "items": {
                              "$ref": "#/components/schemas/UserRoleWithoutPermission"
                            }
                          },
                          "meta": {
                            "properties": {
                              "select": {
                                "type": "array",
                                "items": {
                                  "type": "string"
                                }
                              },
                              "filter": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "oneOf": [
                                      {
                                        "type": "string"
                                      },
                                      {
                                        "type": "array",
                                        "items": {
                                          "type": "string"
                                        }
                                      }
                                    ]
                                  },
                                  "name": {
                                    "oneOf": [
                                      {
                                        "type": "string"
                                      },
                                      {
                                        "type": "array",
                                        "items": {
                                          "type": "string"
                                        }
                                      }
                                    ]
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "tags": [
            "Roles"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "post": {
          "operationId": "RolesController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateUserRole"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserRoleWithoutPermission"
                  }
                }
              }
            }
          },
          "tags": [
            "Roles"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/api/platform/v1/roles/{id}": {
        "get": {
          "operationId": "RolesController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Entity id, uuid v4 format",
              "example": "123e4567-e89b-12d3-a456-426614174000",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserRoleWithoutPermission"
                  }
                }
              }
            }
          },
          "tags": [
            "Roles"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "put": {
          "operationId": "RolesController_updateOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Entity id, uuid v4 format",
              "example": "123e4567-e89b-12d3-a456-426614174000",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateUserRole"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserRoleWithoutPermission"
                  }
                }
              }
            }
          },
          "tags": [
            "Roles"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "delete": {
          "operationId": "RolesController_softDelete",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Entity id, uuid v4 format",
              "example": "123e4567-e89b-12d3-a456-426614174000",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "version",
              "required": true,
              "in": "query",
              "description": "Version number of entity",
              "example": "1",
              "schema": {
                "minimum": 0,
                "type": "number"
              }
            }
          ],
          "responses": {
            "204": {
              "description": ""
            }
          },
          "tags": [
            "Roles"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/api/platform/v1/tenants/configuration/saml": {
        "post": {
          "operationId": "TenantsConfigurationController_setupSaml",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SetupSamlConfiguration"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SetupSamlConfigurationResponseDTO"
                  }
                }
              }
            }
          },
          "tags": [
            "Tenants"
          ]
        }
      },
      "/api/platform/health": {
        "get": {
          "operationId": "HealthController_getHealth",
          "parameters": [],
          "responses": {
            "200": {
              "description": "The Health Check is successful",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "status": {
                        "type": "string",
                        "example": "ok"
                      },
                      "info": {
                        "type": "object",
                        "example": {
                          "database": {
                            "status": "up"
                          }
                        },
                        "additionalProperties": {
                          "type": "object",
                          "properties": {
                            "status": {
                              "type": "string"
                            }
                          },
                          "additionalProperties": {
                            "type": "string"
                          }
                        },
                        "nullable": true
                      },
                      "error": {
                        "type": "object",
                        "example": {},
                        "additionalProperties": {
                          "type": "object",
                          "properties": {
                            "status": {
                              "type": "string"
                            }
                          },
                          "additionalProperties": {
                            "type": "string"
                          }
                        },
                        "nullable": true
                      },
                      "details": {
                        "type": "object",
                        "example": {
                          "database": {
                            "status": "up"
                          }
                        },
                        "additionalProperties": {
                          "type": "object",
                          "properties": {
                            "status": {
                              "type": "string"
                            }
                          },
                          "additionalProperties": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "503": {
              "description": "The Health Check is not successful",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "status": {
                        "type": "string",
                        "example": "error"
                      },
                      "info": {
                        "type": "object",
                        "example": {
                          "database": {
                            "status": "up"
                          }
                        },
                        "additionalProperties": {
                          "type": "object",
                          "properties": {
                            "status": {
                              "type": "string"
                            }
                          },
                          "additionalProperties": {
                            "type": "string"
                          }
                        },
                        "nullable": true
                      },
                      "error": {
                        "type": "object",
                        "example": {
                          "redis": {
                            "status": "down",
                            "message": "Could not connect"
                          }
                        },
                        "additionalProperties": {
                          "type": "object",
                          "properties": {
                            "status": {
                              "type": "string"
                            }
                          },
                          "additionalProperties": {
                            "type": "string"
                          }
                        },
                        "nullable": true
                      },
                      "details": {
                        "type": "object",
                        "example": {
                          "database": {
                            "status": "up"
                          },
                          "redis": {
                            "status": "down",
                            "message": "Could not connect"
                          }
                        },
                        "additionalProperties": {
                          "type": "object",
                          "properties": {
                            "status": {
                              "type": "string"
                            }
                          },
                          "additionalProperties": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "tags": [
            "Health"
          ]
        }
      }
    },
    "info": {
      "title": "Platform Application is responsible for the common things, like user, tenants, auth, management.",
      "description": "It has a common api for tenants and auth. By default designed as a multi-tenant, but you can have only one tenant and manage it like this, in case if in future you would like to expand.",
      "version": "1.0.0",
      "contact": {
        "name": "Vitalii Samofal",
        "url": "https://www.softkit.dev/",
        "email": "vitalii.samofal@softkit.dev"
      }
    },
    "tags": [],
    "servers": [
      {
        "url": "http://localhost:9999",
        "description": "local server"
      }
    ],
    "components": {
      "securitySchemes": {
        "bearer": {
          "scheme": "bearer",
          "bearerFormat": "JWT",
          "type": "http"
        }
      },
      "schemas": {
        "ErrorResponse": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "link to the docs with more details about the error"
            },
            "title": {
              "type": "string",
              "description": "title of the error, short description"
            },
            "status": {
              "type": "number",
              "description": "http status code of the error, e.g. 404"
            },
            "detail": {
              "type": "string",
              "description": "detail of the error, comprehensive message for the end user (e.g. 'customer with id 12344321 not found')"
            },
            "data": {
              "type": "object",
              "description": "additional data that can be used by the client to handle the error"
            },
            "instance": {
              "type": "string",
              "description": "error instance, unique identifier for this particular occurrence of the problem"
            },
            "errorCode": {
              "type": "string",
              "description": "A code that uniquely identifies the type of error or problem that occurred"
            }
          },
          "required": [
            "type",
            "title",
            "status",
            "detail",
            "data",
            "instance",
            "errorCode"
          ]
        },
        "SignUpByEmailRequest": {
          "type": "object",
          "properties": {
            "repeatedPassword": {
              "type": "string",
              "description": "just in case of some issues with frontend,\nwe won't save garbage to the database"
            },
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            },
            "firstName": {
              "type": "string"
            },
            "lastName": {
              "type": "string"
            }
          },
          "required": [
            "repeatedPassword",
            "email",
            "firstName",
            "lastName"
          ]
        },
        "SignUpByEmailResponseDTO": {
          "type": "object",
          "properties": {
            "message": {
              "type": "string"
            },
            "approvalId": {
              "type": "string",
              "description": "id of approval entity, for future reuse"
            }
          },
          "required": [
            "message",
            "approvalId"
          ]
        },
        "SignUpByEmailWithTenantCreationRequest": {
          "type": "object",
          "properties": {
            "companyName": {
              "type": "string"
            },
            "companyIdentifier": {
              "type": "string"
            },
            "repeatedPassword": {
              "type": "string",
              "description": "just in case of some issues with frontend,\nwe won't save garbage to the database"
            },
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            },
            "firstName": {
              "type": "string"
            },
            "lastName": {
              "type": "string"
            }
          },
          "required": [
            "companyName",
            "companyIdentifier",
            "repeatedPassword",
            "email",
            "firstName",
            "lastName"
          ]
        },
        "ApproveSignUpRequest": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "code": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "code"
          ]
        },
        "SignInRequest": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            }
          },
          "required": [
            "email"
          ]
        },
        "SignInResponseDTO": {
          "type": "object",
          "properties": {
            "message": {
              "type": "string"
            },
            "accessToken": {
              "type": "string"
            },
            "refreshToken": {
              "type": "string"
            }
          },
          "required": [
            "message",
            "accessToken",
            "refreshToken"
          ]
        },
        "InitiateSamlLoginRequest": {
          "type": "object",
          "properties": {
            "redirectUrl": {
              "type": "string"
            },
            "samlConfigurationId": {
              "type": "string"
            }
          },
          "required": [
            "redirectUrl",
            "samlConfigurationId"
          ]
        },
        "PaginatedMetaDocumented": {
          "type": "object",
          "properties": {
            "itemsPerPage": {
              "type": "number",
              "title": "Number of items per page"
            },
            "totalItems": {
              "type": "number",
              "title": "Total number of items"
            },
            "currentPage": {
              "type": "number",
              "title": "Current requested page"
            },
            "totalPages": {
              "type": "number",
              "title": "Total number of pages"
            },
            "sortBy": {
              "type": "array",
              "title": "Sorting by columns",
              "items": {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "type": "string"
                    },
                    {
                      "type": "string",
                      "enum": [
                        "ASC",
                        "DESC"
                      ]
                    }
                  ]
                }
              }
            },
            "searchBy": {
              "title": "Search by fields",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "search": {
              "type": "string",
              "title": "Search term"
            },
            "select": {
              "title": "List of selected fields",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "filter": {
              "type": "object",
              "title": "Filters that applied to the query"
            }
          },
          "required": [
            "itemsPerPage",
            "totalItems",
            "currentPage",
            "totalPages"
          ]
        },
        "PaginatedLinksDocumented": {
          "type": "object",
          "properties": {
            "first": {
              "type": "string",
              "title": "Link to first page"
            },
            "previous": {
              "type": "string",
              "title": "Link to previous page"
            },
            "current": {
              "type": "string",
              "title": "Link to current page"
            },
            "next": {
              "type": "string",
              "title": "Link to next page"
            },
            "last": {
              "type": "string",
              "title": "Link to last page"
            }
          }
        },
        "PaginatedDocumented": {
          "type": "object",
          "properties": {
            "data": {
              "title": "Array of entities",
              "type": "array",
              "items": {
                "type": "object"
              }
            },
            "meta": {
              "title": "Pagination Metadata",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PaginatedMetaDocumented"
                }
              ]
            },
            "links": {
              "title": "Links to pages",
              "allOf": [
                {
                  "$ref": "#/components/schemas/PaginatedLinksDocumented"
                }
              ]
            }
          },
          "required": [
            "data",
            "meta",
            "links"
          ]
        },
        "UserRoleWithoutPermission": {
          "type": "object",
          "properties": {
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "Created at date time in ISO format"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "Last time updated at date time in ISO format"
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "Deleted at date time in ISO format"
            },
            "version": {
              "type": "string",
              "description": "Entity version for optimistic lock handling"
            },
            "id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "roleType": {
              "enum": [
                "SUPER_ADMIN",
                "ADMIN",
                "REGULAR_USER"
              ],
              "type": "string"
            },
            "tenantId": {
              "type": "string"
            }
          },
          "required": [
            "createdAt",
            "updatedAt",
            "deletedAt",
            "version",
            "id",
            "name",
            "description"
          ]
        },
        "CreateUserRole": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "description": {
              "type": "string"
            }
          },
          "required": [
            "name",
            "description"
          ]
        },
        "PermissionCategory": {
          "type": "object",
          "properties": {
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "Created at date time in ISO format"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "Last time updated at date time in ISO format"
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "Deleted at date time in ISO format"
            },
            "version": {
              "type": "string",
              "description": "Entity version for optimistic lock handling"
            },
            "id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "permissions": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Permission"
              }
            }
          },
          "required": [
            "createdAt",
            "updatedAt",
            "deletedAt",
            "version",
            "id",
            "name",
            "description",
            "permissions"
          ]
        },
        "Permission": {
          "type": "object",
          "properties": {
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "Created at date time in ISO format"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "Last time updated at date time in ISO format"
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "Deleted at date time in ISO format"
            },
            "version": {
              "type": "string",
              "description": "Entity version for optimistic lock handling"
            },
            "id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "action": {
              "type": "string",
              "description": "action is the identifier of the permission\nusually it is the name of the permission in lowercase\ne.g. ADMIN.USER.CREATE, ADMIN.USER.READ, ADMIN.USER.UPDATE, ADMIN.USER.DELETE, ADMIN.USER.BULK_UPLOAD"
            },
            "permissionCategoryId": {
              "type": "string"
            },
            "permissionCategory": {
              "nullable": true,
              "allOf": [
                {
                  "$ref": "#/components/schemas/PermissionCategory"
                }
              ]
            }
          },
          "required": [
            "createdAt",
            "updatedAt",
            "deletedAt",
            "version",
            "id",
            "name",
            "action",
            "permissionCategoryId",
            "permissionCategory"
          ]
        },
        "UserRole": {
          "type": "object",
          "properties": {
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "Created at date time in ISO format"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "Last time updated at date time in ISO format"
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "Deleted at date time in ISO format"
            },
            "version": {
              "type": "string",
              "description": "Entity version for optimistic lock handling"
            },
            "id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "roleType": {
              "type": "string",
              "enum": [
                "SUPER_ADMIN",
                "ADMIN",
                "REGULAR_USER"
              ]
            },
            "permissions": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Permission"
              }
            },
            "tenantId": {
              "type": "string"
            },
            "tenant": {
              "nullable": true,
              "description": "Tenants can have their own roles, but they can also inherit roles from the platform.",
              "allOf": [
                {
                  "$ref": "#/components/schemas/Tenant"
                }
              ]
            }
          },
          "required": [
            "createdAt",
            "updatedAt",
            "deletedAt",
            "version",
            "id",
            "name",
            "description"
          ]
        },
        "UserTenantAccount": {
          "type": "object",
          "properties": {
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "Created at date time in ISO format"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "Last time updated at date time in ISO format"
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "Deleted at date time in ISO format"
            },
            "version": {
              "type": "string",
              "description": "Entity version for optimistic lock handling"
            },
            "tenantId": {
              "type": "string",
              "description": "Tenant identifier"
            },
            "id": {
              "type": "string"
            },
            "userProfileId": {
              "type": "string"
            },
            "userStatus": {
              "type": "string",
              "enum": [
                "ACTIVE",
                "DEACTIVATED"
              ]
            },
            "roles": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/UserRole"
              }
            },
            "userProfile": {
              "$ref": "#/components/schemas/UserProfile"
            },
            "tenant": {
              "$ref": "#/components/schemas/Tenant"
            }
          },
          "required": [
            "createdAt",
            "updatedAt",
            "deletedAt",
            "version",
            "tenantId",
            "id",
            "userProfileId",
            "userStatus"
          ]
        },
        "UserProfile": {
          "type": "object",
          "properties": {
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "Created at date time in ISO format"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "Last time updated at date time in ISO format"
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "Deleted at date time in ISO format"
            },
            "version": {
              "type": "string",
              "description": "Entity version for optimistic lock handling"
            },
            "id": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            },
            "firstName": {
              "type": "string"
            },
            "lastName": {
              "type": "string"
            },
            "status": {
              "type": "string",
              "enum": [
                "ACTIVE",
                "WAITING_FOR_EMAIL_APPROVAL",
                "DEACTIVATED"
              ]
            },
            "userTenantsAccounts": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/UserTenantAccount"
              }
            }
          },
          "required": [
            "createdAt",
            "updatedAt",
            "deletedAt",
            "version",
            "id",
            "email",
            "firstName",
            "lastName",
            "status"
          ]
        },
        "SAMLConfiguration": {
          "type": "object",
          "properties": {
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "Created at date time in ISO format"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "Last time updated at date time in ISO format"
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "Deleted at date time in ISO format"
            },
            "version": {
              "type": "string",
              "description": "Entity version for optimistic lock handling"
            },
            "tenantId": {
              "type": "string",
              "description": "Tenant identifier"
            },
            "id": {
              "type": "string"
            },
            "entryPoint": {
              "type": "string"
            },
            "certificate": {
              "type": "string"
            },
            "enabled": {
              "type": "boolean"
            },
            "tenant": {
              "nullable": true,
              "allOf": [
                {
                  "$ref": "#/components/schemas/Tenant"
                }
              ]
            }
          },
          "required": [
            "createdAt",
            "updatedAt",
            "deletedAt",
            "version",
            "tenantId",
            "id",
            "entryPoint",
            "certificate",
            "enabled"
          ]
        },
        "Tenant": {
          "type": "object",
          "properties": {
            "createdAt": {
              "format": "date-time",
              "type": "string",
              "description": "Created at date time in ISO format"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string",
              "description": "Last time updated at date time in ISO format"
            },
            "deletedAt": {
              "format": "date-time",
              "type": "string",
              "description": "Deleted at date time in ISO format"
            },
            "version": {
              "type": "string",
              "description": "Entity version for optimistic lock handling"
            },
            "id": {
              "type": "string"
            },
            "tenantFriendlyIdentifier": {
              "type": "string"
            },
            "tenantName": {
              "type": "string"
            },
            "tenantStatus": {
              "type": "string",
              "enum": [
                "ACTIVE",
                "INACTIVE"
              ]
            },
            "ownerId": {
              "type": "string"
            },
            "owner": {
              "$ref": "#/components/schemas/UserProfile"
            },
            "samlConfigurations": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SAMLConfiguration"
              }
            },
            "tenantUsersAccount": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/UserTenantAccount"
              }
            }
          },
          "required": [
            "createdAt",
            "updatedAt",
            "deletedAt",
            "version",
            "id",
            "tenantFriendlyIdentifier",
            "tenantName",
            "tenantStatus",
            "ownerId"
          ]
        },
        "UpdateUserRole": {
          "type": "object",
          "properties": {
            "version": {
              "type": "string",
              "description": "Entity version for optimistic lock handling"
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "tenant": {
              "nullable": true,
              "description": "Tenants can have their own roles, but they can also inherit roles from the platform.",
              "allOf": [
                {
                  "$ref": "#/components/schemas/Tenant"
                }
              ]
            }
          },
          "required": [
            "version",
            "name",
            "description"
          ]
        },
        "IdpMappingDto": {
          "type": "object",
          "properties": {
            "firstName": {
              "type": "string"
            },
            "lastName": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "role": {
              "type": "string"
            }
          },
          "required": [
            "firstName",
            "lastName",
            "email",
            "role"
          ]
        },
        "SetupSamlConfiguration": {
          "type": "object",
          "properties": {
            "entryPoint": {
              "type": "string"
            },
            "certificate": {
              "type": "string"
            },
            "fieldsMapping": {
              "$ref": "#/components/schemas/IdpMappingDto"
            },
            "enabled": {
              "type": "boolean"
            }
          },
          "required": [
            "entryPoint",
            "certificate",
            "fieldsMapping",
            "enabled"
          ]
        },
        "SetupSamlConfigurationResponseDTO": {
          "type": "object",
          "properties": {
            "message": {
              "type": "string"
            },
            "id": {
              "type": "string"
            }
          },
          "required": [
            "message",
            "id"
          ]
        }
      }
    }
  };

  // src/from-scheme/find.ts
  function traverseAndFlatten(currentNode, target, flattenedKey) {
    for (var key in currentNode) {
      if (currentNode.hasOwnProperty(key)) {
        var newKey;
        if (flattenedKey === void 0) {
          newKey = key;
        } else {
          newKey = flattenedKey + "." + key;
        }
        var value = currentNode[key];
        if (typeof value === "object") {
          traverseAndFlatten(value, target, newKey);
        } else {
          target[newKey] = value;
        }
      }
    }
  }
  __name(traverseAndFlatten, "traverseAndFlatten");
  function flatten(obj) {
    const flattenedObject = {};
    traverseAndFlatten(obj, flattenedObject);
    return flattenedObject;
  }
  __name(flatten, "flatten");
  var isSchema = /* @__PURE__ */ __name((value) => typeof value === "string" ? value.startsWith("#/components/schemas/") : false, "isSchema");
  var operationKeys = [["get", "show"], ["post", "create"], ["put", "edit"]];
  var getCrudSchemas = /* @__PURE__ */ __name((resourceSchema) => {
    const crudSchemas = {
      create: {
        request: void 0,
        response: void 0
      },
      edit: {
        request: void 0,
        response: void 0
      },
      show: {
        request: void 0,
        response: void 0
      }
    };
    operationKeys.forEach(([operationKey, crudKey]) => {
      if (operationKey in resourceSchema) {
        const flattenSchema = flatten(resourceSchema[operationKey]);
        const requestRef = Object.entries(flattenSchema).find(([key, value]) => key.includes("requestBody.content") && isSchema(value));
        if (requestRef) {
          const requestRefName = requestRef[1].split("/").at(-1);
          (0, import_lodash_es2.set)(crudSchemas, `${crudKey}.request`, (0, import_lodash_es2.cloneDeep)(scheme_default.components.schemas[requestRefName]));
        }
        const responseRef = Object.entries(flattenSchema).find(([key, value]) => key.includes("responses") && isSchema(value));
        if (responseRef) {
          const responseRefName = responseRef[1].split("/").at(-1);
          (0, import_lodash_es2.set)(crudSchemas, `${crudKey}.response`, (0, import_lodash_es2.cloneDeep)(scheme_default.components.schemas[responseRefName]));
        }
      }
    });
    return crudSchemas;
  }, "getCrudSchemas");
  var getSchemaByType = /* @__PURE__ */ __name((name, type) => {
    const crudSchemas = {};
    Object.keys(scheme_default.paths).filter((path) => path.includes(name)).forEach((path) => {
      const result = getCrudSchemas(scheme_default.paths[path]);
      (0, import_lodash_es2.merge)(crudSchemas, result);
      crudSchemas.list = result.show;
    });
    console.log("crudSchemas: ", crudSchemas);
    console.groupEnd();
    return crudSchemas[type];
  }, "getSchemaByType");

  // src/from-scheme/create-schema-inferencer/index.tsx
  var import_react8 = __toESM(__require("react"));
  var import_core5 = __toESM(require_dist3());

  // src/from-scheme/compose-schema-inferencers/index.ts
  var composeInferencers2 = /* @__PURE__ */ __name((inferencers) => {
    const fieldInferencer = /* @__PURE__ */ __name((key, props, infer = fieldInferencer, type) => {
      const inferences = inferencers.map(
        (inferencer) => inferencer(key, props, infer, type)
      );
      const picked = pickInferredField(inferences);
      return picked;
    }, "fieldInferencer");
    return fieldInferencer;
  }, "composeInferencers");

  // src/from-scheme/compose-transformers/index.ts
  var composeTransformers2 = /* @__PURE__ */ __name((transformers) => {
    const fieldTransformer = /* @__PURE__ */ __name((fields, resources, resource, record, infer, type) => {
      return transformers.reduce((acc, transformer) => {
        return transformer(acc, resources, resource, record, infer, type);
      }, fields);
    }, "fieldTransformer");
    return fieldTransformer;
  }, "composeTransformers");

  // src/from-scheme/field-from-schema-inferencers/array.ts
  var import_has = __toESM(__require("lodash-es/has"));
  var arrayInfer2 = /* @__PURE__ */ __name((key, props, infer, type) => {
    if ((0, import_has.default)(props, "enum")) {
      return {
        key,
        type: "text"
      };
    }
    if (props.type === "array") {
      const basicType = infer(key, props.items, infer, type) || {
        type: "text"
      };
      return {
        key,
        type: basicType.type
      };
    }
    return false;
  }, "arrayInfer");

  // src/from-scheme/field-from-schema-inferencers/boolean.ts
  var booleanInfer2 = /* @__PURE__ */ __name((key, props) => {
    if (props.type === "boolean") {
      return {
        key,
        type: "boolean"
      };
    }
    return false;
  }, "booleanInfer");

  // src/from-scheme/field-from-schema-inferencers/date.ts
  var dateSuffixRegexp2 = /(_at|_on|At|On|AT|ON)(\[\])?$/;
  var dateInfer2 = /* @__PURE__ */ __name((key, props) => {
    const isDateField = dateSuffixRegexp2.test(key);
    if (isDateField || props.format === "date-time") {
      return {
        key,
        type: "date"
      };
    }
    return false;
  }, "dateInfer");

  // src/from-scheme/field-from-schema-inferencers/email.ts
  var emailSuffixRegexp = /(email)(\[\])?$/;
  var emailInfer2 = /* @__PURE__ */ __name((key, props) => {
    const isEmailField = emailSuffixRegexp.test(key);
    if (isEmailField) {
      return {
        key,
        type: "email"
      };
    }
    return false;
  }, "emailInfer");

  // src/from-scheme/field-from-schema-inferencers/number.ts
  var numberInfer2 = /* @__PURE__ */ __name((key, props) => {
    if (props.type === "number") {
      return {
        key,
        type: "number"
      };
    }
    return false;
  }, "numberInfer");

  // src/from-scheme/field-from-schema-inferencers/object.ts
  var objectInfer2 = /* @__PURE__ */ __name((key, props, infer) => {
    return false;
  }, "objectInfer");

  // src/from-scheme/field-from-schema-inferencers/richtext.ts
  var richtextInfer2 = /* @__PURE__ */ __name((key, value) => {
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

  // src/from-scheme/field-from-schema-inferencers/text.ts
  var textInfer2 = /* @__PURE__ */ __name((key, props) => {
    const isText = props.type === "string";
    if (isText) {
      return {
        key,
        type: "text"
      };
    }
    return false;
  }, "textInfer");

  // src/from-scheme/field-from-schema-inferencers/url.ts
  var urlRegexp2 = /^(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?$/i;
  var urlInfer2 = /* @__PURE__ */ __name((key, value) => {
    const isValidURL = typeof value === "string" && urlRegexp2.test(value);
    if (isValidURL) {
      return {
        key,
        type: "url",
        priority: 1
      };
    }
    return false;
  }, "urlInfer");

  // src/from-scheme/field-from-schema-inferencers/index.ts
  var defaultElements2 = [
    arrayInfer2,
    booleanInfer2,
    dateInfer2,
    emailInfer2,
    // imageInfer,
    // nullishInfer,
    numberInfer2,
    objectInfer2,
    // relationInfer,
    richtextInfer2,
    urlInfer2,
    textInfer2
  ];

  // src/from-scheme/field-transformers/basic-to-relation.ts
  var basicToRelation2 = /* @__PURE__ */ __name((fields, resources, resource, record) => {
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

  // src/from-scheme/field-transformers/image-by-key.ts
  var imageFieldLikeRegexp2 = /(image|photo|avatar|cover|thumbnail|icon)/i;
  var imageByKey2 = /* @__PURE__ */ __name((fields) => {
    const mapped = fields.map((field) => {
      if (field.type === "url" && imageFieldLikeRegexp2.test(field.key)) {
        return {
          ...field,
          type: "image"
        };
      }
      return field;
    });
    return mapped;
  }, "imageByKey");

  // src/from-scheme/field-transformers/relation-by-resource.ts
  var relationByResource2 = /* @__PURE__ */ __name((fields, resources, resource, record, infer) => {
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

  // src/from-scheme/field-transformers/relation-to-fieldable.ts
  var relationToFieldable2 = /* @__PURE__ */ __name((fields, resources, resource, record, infer, type) => {
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

  // src/from-scheme/field-transformers/index.ts
  var defaultTransformers2 = [
    imageByKey2,
    relationByResource2,
    relationToFieldable2,
    basicToRelation2
  ];

  // src/from-scheme/create-schema-inferencer/index.tsx
  var createSchemaInferencer = /* @__PURE__ */ __name(({
    type,
    additionalScope = [],
    customElements = [],
    fieldTransformers = [],
    renderer: renderer5,
    loadingComponent: LoadingComponent2,
    errorComponent: ErrorComponent2,
    codeViewerComponent: CodeViewerComponent
  }) => {
    const infer = composeInferencers2([...defaultElements2, ...customElements]);
    const transform = composeTransformers2([
      ...defaultTransformers2,
      ...fieldTransformers
    ]);
    const Inferencer = /* @__PURE__ */ __name(({
      resourceName,
      fieldTransformer,
      meta,
      id
    }) => {
      console.log("resourceName: ", resourceName);
      const { resource, resources } = (0, import_core5.useResource)(resourceName);
      console.log("resource: ", resource);
      const { resource: resourceFromURL } = (0, import_core5.useResource)();
      console.log("resourceFromURL: ", resourceFromURL);
      const { i18nProvider } = (0, import_react8.useContext)(import_core5.TranslationContext);
      const inferSingleField = /* @__PURE__ */ __name((key, props) => {
        const inferResult = infer(key, props, infer, type);
        if (inferResult) {
          if (resource) {
            const transformed = transform(
              [inferResult],
              resources,
              resource,
              {},
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
      const inferSchema = /* @__PURE__ */ __name((schemaObject) => {
        console.log("schemaObject: ", schemaObject);
        return Object.entries(schemaObject.properties).reduce((acc, [key, props]) => {
          const inferResult = inferSingleField(key, props);
          if (inferResult) {
            acc.push(inferResult);
          }
          return acc;
        }, []);
      }, "inferSchema");
      const clearedFields = inferSchema(getSchemaByType(resource.name, type));
      console.log("clearedFields: ", clearedFields);
      const code = import_react8.default.useMemo(() => {
        if (resource) {
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
        clearedFields
      ]);
      return /* @__PURE__ */ import_react8.default.createElement(
        CodeViewerComponent,
        {
          code: removeHiddenCode(code)
        }
      );
    }, "Inferencer");
    const InferencerComponent = /* @__PURE__ */ __name(({
      name,
      resource,
      fieldTransformer,
      meta,
      id
    }) => {
      const { resource: resourceItem } = (0, import_core5.useResource)(resource ?? name);
      console.log("resourceItem: ", resourceItem);
      getSchemaByType(resourceItem.name, type);
      const key = `${(resourceItem == null ? void 0 : resourceItem.identifier) ?? (resourceItem == null ? void 0 : resourceItem.name)}-${type}-${id}`;
      return /* @__PURE__ */ import_react8.default.createElement(
        Inferencer,
        {
          fieldTransformer,
          resourceName: resource ?? name,
          meta: meta ?? {},
          key,
          id
        }
      );
    }, "InferencerComponent");
    return InferencerComponent;
  }, "createSchemaInferencer");

  // src/inferencers/antd/next/list.tsx
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
    const recordName = "tableProps?.dataSource";
    const imports = [
      ["React", "react", true],
      ["IResourceComponentsProps", "@refinedev/core"],
      ["BaseRecord", "@refinedev/core"],
      ["useTable", "@refinedev/antd"],
      ["List", "@refinedev/antd"],
      ["Table", "antd"],
      ["Space", "antd"]
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
                const { data: ${getVariableName(
          field.key,
          "Data"
        )}, isLoading: ${getVariableName(field.key, "IsLoading")} } =
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
    const renderRelationFields = /* @__PURE__ */ __name((field) => {
      var _a, _b;
      if (field.relation && field.resource) {
        const validVariableName = getVariableName(field.key, "Data");
        const variableName = `${validVariableName}?.data`;
        const variableIsLoading = getVariableName(field.key, "IsLoading");
        if (Array.isArray(field.accessor)) {
          return void 0;
        }
        const loadingCondition = `${variableIsLoading} ? <>Loading...</> : `;
        const dataIndex = field.multiple ? `dataIndex="${field.key}"` : `dataIndex={["${field.key}", ${field.accessor ? `"${field.accessor}"` : ""}]}`;
        const title = `title=${translatePrettyString({
          resource,
          field,
          i18n
        })}`;
        let render = "";
        if (field.multiple) {
          imports.push(["TagField", "@refinedev/antd"]);
          let val = "item";
          if (field == null ? void 0 : field.relationInfer) {
            const valSingle = `${variableName}?.find((resourceItems) => resourceItems.id === ${accessor(
              "item",
              void 0,
              field.accessor
            )})`;
            const valViewableSingle = accessor(
              valSingle,
              void 0,
              (_a = field == null ? void 0 : field.relationInfer) == null ? void 0 : _a.accessor
            );
            val = valViewableSingle;
          }
          render = `render={(value: any[]) => ${loadingCondition} (
                    <>
                        {${accessor(
            "value",
            void 0
            // field.accessor,
          )}?.map((item, index) => (
                            <TagField key={index} value={${val}} />
                        ))}
                    </>
                )}`;
        } else {
          if (field == null ? void 0 : field.relationInfer) {
            const valSingle = `${variableName}?.find((item) => item.id === value)`;
            const valViewableSingle = accessor(
              valSingle,
              void 0,
              (_b = field == null ? void 0 : field.relationInfer) == null ? void 0 : _b.accessor
            );
            render = `render={(value) => ${loadingCondition} ${valViewableSingle}}`;
          } else {
            render = "";
          }
        }
        return jsx`<Table.Column ${dataIndex} ${title} ${render} />`;
      }
      return void 0;
    }, "renderRelationFields");
    const imageFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "image") {
        imports.push(["ImageField", "@refinedev/antd"]);
        const dataIndex = Array.isArray(field.accessor) || field.multiple ? `dataIndex="${field.key}"` : `dataIndex={["${field.key}", ${field.accessor ? `"${field.accessor}"` : ""}]}`;
        const title = `title=${translatePrettyString({
          resource,
          field,
          i18n
        })}`;
        let render = jsx`render={(value: any) => <ImageField style={{ maxWidth: "100px" }} value={${accessor(
          "value",
          void 0,
          Array.isArray(field.accessor) ? field.accessor : void 0,
          " + "
        )}} />}`;
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor, " + ");
          render = jsx`render={(value: any[]) => (<>{value?.map((item, index) => (
                    <ImageField style={{ maxWidth: "100px" }} value={${val}} key={index} />
                ))}</>)}`;
        }
        return jsx`<Table.Column ${dataIndex} ${title} ${render} />`;
      }
      return void 0;
    }, "imageFields");
    const emailFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "email") {
        imports.push(
          ["TagField", "@refinedev/antd"],
          ["EmailField", "@refinedev/antd"]
        );
        const dataIndex = Array.isArray(field.accessor) || field.multiple ? `dataIndex="${field.key}"` : `dataIndex={["${field.key}", ${field.accessor ? `"${field.accessor}"` : ""}]}`;
        const title = `title=${translatePrettyString({
          resource,
          field,
          i18n
        })}`;
        let render = jsx`render={(value: any) => <EmailField value={${accessor(
          "value",
          void 0,
          Array.isArray(field.accessor) ? field.accessor : void 0,
          ' + " " + '
        )}} />}`;
        if (field.multiple) {
          const val = accessor(
            "item",
            void 0,
            field.accessor,
            ' + " " + '
          );
          render = jsx`render={(value: any[]) => (<>{value?.map((item, index) => (
                    <TagField value={${val}} key={index} />
                ))}</>)}`;
        }
        return jsx`<Table.Column ${dataIndex} ${title} ${render} />`;
      }
      return void 0;
    }, "emailFields");
    const urlFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "url") {
        imports.push(
          ["UrlField", "@refinedev/antd"],
          ["TagField", "@refinedev/antd"]
        );
        const dataIndex = Array.isArray(field.accessor) || field.multiple ? `dataIndex="${field.key}"` : `dataIndex={["${field.key}", ${field.accessor ? `"${field.accessor}"` : ""}]}`;
        const title = `title=${translatePrettyString({
          resource,
          field,
          i18n
        })}`;
        let render = jsx`render={(value: any) => <UrlField value={${accessor(
          "value",
          void 0,
          Array.isArray(field.accessor) ? field.accessor : void 0,
          " + "
        )}} />}`;
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor, " + ");
          render = jsx`render={(value: any[]) => (<>{value?.map((item, index) => (
                    <TagField value={${val}} key={index} />
                ))}</>)}`;
        }
        return jsx`<Table.Column ${dataIndex} ${title} ${render} />`;
      }
      return void 0;
    }, "urlFields");
    const booleanFields = /* @__PURE__ */ __name((field) => {
      if ((field == null ? void 0 : field.type) === "boolean") {
        imports.push(["BooleanField", "@refinedev/antd"]);
        const dataIndex = Array.isArray(field.accessor) || field.multiple ? `dataIndex="${field.key}"` : `dataIndex={["${field.key}", ${field.accessor ? `"${field.accessor}"` : ""}]}`;
        const title = `title=${translatePrettyString({
          resource,
          field,
          i18n
        })}`;
        let render = jsx`render={(value: any) => <BooleanField value={${accessor(
          "value",
          void 0,
          Array.isArray(field.accessor) ? field.accessor : void 0,
          " && "
        )}} />}`;
        if (field.multiple) {
          const val = accessor("item", void 0, field.accessor, " && ");
          render = jsx`render={(value: any[]) => (<>{value?.map((item, index) => (
                    <BooleanField value={${val}} key={index} />
                ))}</>)}`;
        }
        return jsx`<Table.Column ${dataIndex} ${title} ${render} />`;
      }
      return void 0;
    }, "booleanFields");
    const dateFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "date") {
        imports.push(["DateField", "@refinedev/antd"]);
        const dataIndex = Array.isArray(field.accessor) || field.multiple ? `dataIndex="${field.key}"` : `dataIndex={["${field.key}", ${field.accessor ? `"${field.accessor}"` : ""}]}`;
        const title = `title=${translatePrettyString({
          resource,
          field,
          i18n
        })}`;
        let render = jsx`render={(value: any) => <DateField value={${accessor(
          "value",
          void 0,
          Array.isArray(field.accessor) ? field.accessor : void 0,
          ' + " " + '
        )}} />}`;
        if (field.multiple) {
          const val = accessor(
            "item",
            void 0,
            field.accessor,
            ' + " " + '
          );
          render = jsx`render={(value: any[]) => (<>{value?.map((item, index) => (
                    <DateField value={${val}} key={index} />
                ))}</>)}`;
        }
        return jsx`<Table.Column ${dataIndex} ${title} ${render} />`;
      }
      return void 0;
    }, "dateFields");
    const richtextFields = /* @__PURE__ */ __name((field) => {
      if ((field == null ? void 0 : field.type) === "richtext") {
        imports.push(["MarkdownField", "@refinedev/antd"]);
        const dataIndex = Array.isArray(field.accessor) || field.multiple ? `dataIndex="${field.key}"` : field.accessor ? `dataIndex={["${field.key}", "${field.accessor}"]}` : `dataIndex="${field.key}"`;
        const title = `title=${translatePrettyString({
          resource,
          field,
          i18n
        })}`;
        let render = jsx`render={(value: any) => <MarkdownField value={(${accessor(
          "value",
          void 0,
          Array.isArray(field.accessor) ? field.accessor : void 0
        )}).slice(0, 80) + "..."} />}`;
        if (field.multiple) {
          const val = accessor(
            "item",
            void 0,
            field.accessor,
            ' + " " + '
          );
          render = jsx`render={(value: any[]) => (<>{value?.map((item, index) => (
                    <MarkdownField value={(${val})?.slice(0, 80) + "..."} key={index} />
                ))}</>)}`;
        }
        return jsx`<Table.Column ${dataIndex} ${title} ${render} />`;
      }
      return void 0;
    }, "richtextFields");
    const basicFields = /* @__PURE__ */ __name((field) => {
      if (field && (field.type === "text" || field.type === "number")) {
        const dataIndex = field.accessor && !Array.isArray(field.accessor) && !field.multiple ? `dataIndex={["${field.key}", "${field.accessor}"]}` : `dataIndex="${field.key}"`;
        const title = `title=${translatePrettyString({
          resource,
          field,
          i18n
        })}`;
        let render = "";
        if (field.multiple) {
          imports.push(["TagField", "@refinedev/antd"]);
          const val = accessor(
            "item",
            void 0,
            field.accessor,
            ' + " " + '
          );
          render = `render={(value: any[]) => (<>{value?.map((item) => (
                    <TagField value={${val}} key={${val}} />
                ))}</>)}`;
        }
        if (!field.multiple && Array.isArray(field.accessor)) {
          render = `render={(value: any) => (<>{${accessor(
            "value",
            void 0,
            field.accessor
          )}}</>)}`;
        }
        return `<Table.Column ${dataIndex} ${title} ${render} />`;
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
      imports.push(["EditButton", "@refinedev/antd"]);
    }
    if (canShow) {
      imports.push(["ShowButton", "@refinedev/antd"]);
    }
    if (canDelete) {
      imports.push(["DeleteButton", "@refinedev/antd"]);
    }
    const actionColumnTitle = i18n ? `{translate("table.actions")}` : `"Actions"`;
    const actionButtons = canEdit || canShow || canDelete ? jsx`
            <Table.Column
                title=${actionColumnTitle}
                dataIndex="actions"
                render={(_, record: BaseRecord) => (
                    <Space>
                    ${canEdit ? jsx`
                        <EditButton
                            hideText
                            size="small"
                            recordItemId={record.id}
                        />
                        ` : ""}
                    ${canShow ? jsx`
                        <ShowButton
                            hideText
                            size="small"
                            recordItemId={record.id}
                        />
                        ` : ""}
                    ${canDelete ? jsx`
                        <DeleteButton
                            hideText
                            size="small"
                            recordItemId={record.id}
                        />
                        ` : ""}
                    </Space>
                )}
            />
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
        ${printImports(imports)}

        export const ${COMPONENT_NAME}: React.FC<IResourceComponentsProps> = () => {
            ${useTranslateHook}
            const { tableProps } = useTable({
                syncWithLocation: true,
                ${isCustomPage ? ` resource: "${resource.name}",` : ""}
                ${getMetaProps(
      (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
      meta,
      "getList"
    )}
            });

            ${relationHooksCode}

            return (
                <List>
                    <Table {...tableProps} rowKey="id">
                        ${renderedFields.join("\r\n")}
                        ${actionButtons}
                    </Table>
                </List>
            );
        };
    `;
  }, "renderer");
  var ListInferencer = createSchemaInferencer({
    type: "list",
    additionalScope: [
      [
        "@refinedev/antd",
        "RefineAntd",
        {
          useTable: import_antd5.useTable,
          List: import_antd5.List,
          TagField: import_antd5.TagField,
          ImageField: import_antd5.ImageField,
          EmailField: import_antd5.EmailField,
          UrlField: import_antd5.UrlField,
          BooleanField: import_antd5.BooleanField,
          DateField: import_antd5.DateField,
          MarkdownField: import_antd5.MarkdownField,
          EditButton: import_antd5.EditButton,
          ShowButton: import_antd5.ShowButton,
          DeleteButton: import_antd5.DeleteButton
        }
      ],
      ["antd", "AntdPackage", { Table: import_antd6.Table, Space: import_antd6.Space }]
    ],
    codeViewerComponent: SharedCodeViewer,
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    renderer: renderer2
  });

  // src/inferencers/antd/next/create.tsx
  var import_antd7 = __toESM(require_dist5());
  var import_antd8 = __require("antd");
  var import_dayjs2 = __toESM(__require("dayjs"));
  var renderer3 = /* @__PURE__ */ __name(({
    resource,
    fields,
    meta,
    isCustomPage,
    i18n
  }) => {
    console.log("fields: ", fields);
    const COMPONENT_NAME = componentName(
      resource.label ?? resource.name,
      "create"
    );
    const imports = [
      ["React", "react", true],
      ["IResourceComponentsProps", "@refinedev/core"],
      ["Create", "@refinedev/antd"],
      ["Form", "antd"],
      ["useForm", "@refinedev/antd"],
      ["Input", "antd"]
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
        imports.push(["useSelect", "@refinedev/antd"]);
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
        imports.push(["Select", "antd"]);
        const variableName = getVariableName(field.key, "SelectProps");
        const name = field.accessor ? field.multiple ? `"${field.key}"` : `["${field.key}", "${field.accessor}"]` : `"${field.key}"`;
        let valueProps = "";
        let valueEvent = "";
        if (field.accessor && field.multiple) {
          const canDot = shouldDotAccess(`${field.accessor}`);
          valueEvent = `getValueFromEvent={(selected: string[]) => {
                    return selected?.map((item) => ({ ${canDot ? field.accessor : `["${field.accessor}"]`}: item }));
                }}`;
          valueProps = `getValueProps={(value: any[]) => {
                    return {
                        value: value?.map((item) => ${accessor(
            "item",
            void 0,
            field.accessor
          )}),
                    };
                }}`;
        }
        return jsx`
                <Form.Item
                    label=${translatePrettyString({
          resource,
          field,
          i18n
        })}
                    name={${name}}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    ${valueProps}
                    ${valueEvent}
                >
                    <Select ${field.multiple ? 'mode="multiple"' : ""} {...${variableName}} />
                </Form.Item>
                `;
      }
      return void 0;
    }, "renderRelationFields");
    const basicInputFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "text" || field.type === "url" || field.type === "email" || field.type === "number") {
        if (isIDKey(field.key)) {
          return void 0;
        }
        if (field.multiple) {
          return void 0;
        }
        return jsx`
                <Form.Item
                    label=${translatePrettyString({
          resource,
          field,
          i18n
        })}
                    name={["${field.key}"${field.accessor ? ', "' + field.accessor + '"' : ""}]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input  />
                </Form.Item>
            `;
      }
      return void 0;
    }, "basicInputFields");
    const imageFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "image") {
        imports.push(
          ["Upload", "antd"],
          ["getValueFromEvent", "@refinedev/antd"]
        );
        let valueProps = 'valuePropName="fileList"';
        if (field.multiple && !field.accessor) {
          valueProps = "getValueProps={(value) => ({ fileList: value?.map((item: any) => ({ url: item, name: item, uid: item }))})}";
        }
        if (!field.multiple) {
          if (field.accessor) {
            valueProps = "getValueProps={(value) => ({ fileList: value ? [value] : [] })}";
          } else {
            valueProps = "getValueProps={(value) => ({ fileList: [{ url: value, name: value, uid: value }]})}";
          }
        }
        return jsx`
                <Form.Item label=${translatePrettyString({
          resource,
          field,
          i18n
        })}>
                    <Form.Item
                        name="${field.key}"
                        ${valueProps}
                        getValueFromEvent={getValueFromEvent}
                        noStyle
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Upload.Dragger
                            listType="picture"
                            ${field.multiple ? "multiple" : ""}
                            beforeUpload={() => false}
                        >
                            <p className="ant-upload-text">
                                Drag & drop a file in this area
                            </p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
                `;
      }
      return void 0;
    }, "imageFields");
    const booleanFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "boolean") {
        imports.push(["Checkbox", "antd"]);
        if (field.multiple) {
          return void 0;
        }
        return jsx`
                <Form.Item
                    label=${translatePrettyString({
          resource,
          field,
          i18n
        })}
                    valuePropName="checked"
                    name={["${field.key}"${field.accessor ? ', "' + field.accessor + '"' : ""}]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Checkbox>${prettyString(field.key)}</Checkbox>
                </Form.Item>
            `;
      }
      return void 0;
    }, "booleanFields");
    const dateFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "date") {
        imports.push(["DatePicker", "antd"], ["dayjs", "dayjs", true]);
        if (field.multiple) {
          return void 0;
        }
        return jsx`
                <Form.Item
                    label=${translatePrettyString({
          resource,
          field,
          i18n
        })}
                    name={["${field.key}"${field.accessor ? ', "' + field.accessor + '"' : ""}]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    getValueProps={(value) => ({ value: value ? dayjs(value) : undefined })}
                >
                    <DatePicker />
                </Form.Item>
            `;
      }
      return void 0;
    }, "dateFields");
    const richtextFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "richtext") {
        return jsx`
            <Form.Item
                label=${translatePrettyString({
          resource,
          field,
          i18n
        })}
                name="${field.key}"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input.TextArea rows={5} />
            </Form.Item>
            `;
      }
      return void 0;
    }, "richtextFields");
    console.log("fields: ", fields);
    const renderedFields = fields.map((field) => {
      switch (field == null ? void 0 : field.type) {
        case "text":
        case "number":
        case "email":
        case "url":
          return basicInputFields(field);
        case "richtext":
          return richtextFields(field);
        case "image":
          return imageFields(field);
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
        const { formProps, saveButtonProps, queryResult } = useForm(${isCustomPage ? `{
                      resource: "${resource.name}",
                      action: "create",
                      ${getMetaProps(
      resource.identifier ?? resource.name,
      meta,
      "getOne"
    )}
                  }` : getMetaProps(
      (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
      meta,
      "getOne"
    ) ? `{
                  ${getMetaProps(
      (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
      meta,
      "getOne"
    )}
              }` : ""});

        ${relationHooksCode}

        return (
            <Create saveButtonProps={saveButtonProps}>
                <Form {...formProps} layout="vertical">
                    ${renderedFields.join("")}
                </Form>
            </Create>
        );
    };
    `;
  }, "renderer");
  var CreateInferencer = createSchemaInferencer({
    type: "create",
    additionalScope: [
      [
        "@refinedev/antd",
        "RefineAntd",
        { Create: import_antd7.Create, useForm: import_antd7.useForm, useSelect: import_antd7.useSelect, getValueFromEvent: import_antd7.getValueFromEvent }
      ],
      ["dayjs", "dayjs", import_dayjs2.default, true],
      [
        "antd",
        "AntdPackage",
        { Form: import_antd8.Form, Input: import_antd8.Input, Select: import_antd8.Select, Upload: import_antd8.Upload, Checkbox: import_antd8.Checkbox, DatePicker: import_antd8.DatePicker }
      ]
    ],
    codeViewerComponent: SharedCodeViewer,
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    renderer: renderer3
  });

  // src/inferencers/antd/edit.tsx
  var import_antd9 = __toESM(require_dist5());
  var import_antd10 = __require("antd");
  var import_dayjs3 = __toESM(__require("dayjs"));
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
      ["Edit", "@refinedev/antd"],
      ["Form", "antd"],
      ["useForm", "@refinedev/antd"],
      ["Input", "antd"]
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
        imports.push(["useSelect", "@refinedev/antd"]);
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
                const { selectProps: ${getVariableName(
          field.key,
          "SelectProps"
        )} } =
                useSelect({
                    resource: "${field.resource.name}",
                    defaultValue: ${val},
                    ${field.relationInfer ? field.relationInfer.accessor ? typeof field.relationInfer.accessor === "string" ? field.relationInfer.accessor !== "title" ? `optionLabel: "${field.relationInfer.accessor}",` : "" : `optionLabel: "${field.relationInfer.accessor[0]}",` : "" : ""}
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
        imports.push(["Select", "antd"]);
        const variableName = getVariableName(field.key, "SelectProps");
        const name = field.accessor ? field.multiple ? `"${field.key}"` : `["${field.key}", "${field.accessor}"]` : `"${field.key}"`;
        let valueProps = "";
        let valueEvent = "";
        if (field.accessor && field.multiple) {
          const canDot = shouldDotAccess(`${field.accessor}`);
          valueEvent = `getValueFromEvent={(selected: string[]) => {
                    return selected?.map((item) => ({ ${canDot ? field.accessor : `["${field.accessor}"]`}: item }));
                }}`;
          valueProps = `getValueProps={(value: any[]) => {
                    return {
                        value: value?.map((item) => ${accessor(
            "item",
            void 0,
            field.accessor
          )}),
                    };
                }}`;
        }
        return jsx`
                <Form.Item
                    label=${translatePrettyString({
          resource,
          field,
          i18n
        })}
                    name={${name}}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    ${valueProps}
                    ${valueEvent}
                >
                    <Select ${field.multiple ? 'mode="multiple"' : ""} {...${variableName}} />
                </Form.Item>             
                `;
      }
      return void 0;
    }, "renderRelationFields");
    const basicInputFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "text" || field.type === "url" || field.type === "email" || field.type === "number") {
        if (field.multiple) {
          const val = accessor(field.key, "index", field.accessor).split("?.").map((el) => `"${el}"`).join(", ").replace(/"index"/, "index");
          return `
                    <>
                        {(${accessor(
            recordName,
            field.key
          )} as any[])?.map((item, index) => (
                            <Form.Item
                                key={index}
                                label=${translatePrettyString({
            resource,
            field,
            i18n
          })}
                                name={[${val}]}
                            >
                                <Input
                                    type="${field.type}"
                                ${isIDKey(field.key) ? "readOnly disabled" : ""} />
                            </Form.Item>
                        ))}
                    </>
                `;
        }
        return jsx`
                <Form.Item
                    label=${translatePrettyString({
          resource,
          field,
          i18n
        })}
                    name={["${field.key}"${field.accessor ? ', "' + field.accessor + '"' : ""}]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input ${isIDKey(field.key) ? "readOnly disabled" : ""} />
                </Form.Item>
            `;
      }
      return void 0;
    }, "basicInputFields");
    const imageFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "image") {
        imports.push(
          ["Upload", "antd"],
          ["getValueFromEvent", "@refinedev/antd"]
        );
        let valueProps = 'valuePropName="fileList"';
        if (field.multiple && !field.accessor) {
          valueProps = "getValueProps={(value) => ({ fileList: value?.map((item: any) => ({ url: item, name: item, uid: item }))})}";
        }
        if (!field.multiple) {
          if (field.accessor) {
            valueProps = "getValueProps={(value) => ({ fileList: value ? [value] : [] })}";
          } else {
            valueProps = "getValueProps={(value) => ({ fileList: [{ url: value, name: value, uid: value }]})}";
          }
        }
        return jsx`
                <Form.Item label=${translatePrettyString({
          resource,
          field,
          i18n
        })}>
                    <Form.Item
                        name="${field.key}"
                        ${valueProps}
                        getValueFromEvent={getValueFromEvent}
                        noStyle
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Upload.Dragger
                            listType="picture"
                            ${field.multiple ? "multiple" : ""}
                            beforeUpload={() => false}
                        >
                            <p className="ant-upload-text">
                                Drag & drop a file in this area
                            </p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
                `;
      }
      return void 0;
    }, "imageFields");
    const booleanFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "boolean") {
        imports.push(["Checkbox", "antd"]);
        if (field.multiple) {
          const val = accessor(field.key, "index", field.accessor).split("?.").map((el) => `"${el}"`).join(", ").replace(/"index"/, "index");
          return `
                    <>
                        {(${accessor(
            recordName,
            field.key
          )} as any[])?.map((item, index) => (
                            <Form.Item
                                key={index}
                                valuePropName="checked"
                                label=${translatePrettyString({
            resource,
            field,
            i18n
          })}
                                name={[${val}]}
                            >
                                <Checkbox>${prettyString(field.key)}</Checkbox>
                            </Form.Item>
                        ))}
                    </>
                `;
        }
        return jsx`
                <Form.Item
                    label=${translatePrettyString({
          resource,
          field,
          i18n
        })}
                    valuePropName="checked"
                    name={["${field.key}"${field.accessor ? ', "' + field.accessor + '"' : ""}]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Checkbox>${prettyString(field.key)}</Checkbox>
                </Form.Item>
            `;
      }
      return void 0;
    }, "booleanFields");
    const dateFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "date") {
        imports.push(["DatePicker", "antd"], ["dayjs", "dayjs", true]);
        if (field.multiple) {
          const val = accessor(field.key, "index", field.accessor).split("?.").map((el) => `"${el}"`).join(", ").replace(/"index"/, "index");
          return jsx`
                    <>
                        {(${accessor(
            recordName,
            field.key
          )} as any[])?.map((item, index) => (
                            <Form.Item
                                key={index}
                                label=${translatePrettyString({
            resource,
            field,
            i18n
          })}
                                name={[${val}]}
                                getValueProps={(value) => ({ value: value ? dayjs(value) : undefined })}
                            >
                                <DatePicker />
                            </Form.Item>
                        ))}
                    </>
                `;
        }
        return jsx`
                <Form.Item
                    label=${translatePrettyString({
          resource,
          field,
          i18n
        })}
                    name={["${field.key}"${field.accessor ? ', "' + field.accessor + '"' : ""}]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    getValueProps={(value) => ({ value: value ? dayjs(value) : undefined })}
                >
                    <DatePicker />
                </Form.Item>
            `;
      }
      return void 0;
    }, "dateFields");
    const richtextFields = /* @__PURE__ */ __name((field) => {
      if (field.type === "richtext") {
        return jsx`
            <Form.Item
                label=${translatePrettyString({
          resource,
          field,
          i18n
        })}
                name="${field.key}"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input.TextArea rows={5} />
            </Form.Item>
            `;
      }
      return void 0;
    }, "richtextFields");
    const renderedFields = fields.map((field) => {
      switch (field == null ? void 0 : field.type) {
        case "text":
        case "number":
        case "email":
        case "url":
          return basicInputFields(field);
        case "richtext":
          return richtextFields(field);
        case "image":
          return imageFields(field);
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
        const { formProps, saveButtonProps, queryResult } = useForm(${isCustomPage ? `{
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
    ) ? `{
                    ${getMetaProps(
      (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
      meta,
      "getOne"
    )}
                }` : ""});
    
        const ${recordName} = queryResult?.data?.data;
    
        ${relationHooksCode}

        return (
            <Edit saveButtonProps={saveButtonProps}>
                <Form {...formProps} layout="vertical">
                    ${renderedFields.join("")}
                </Form>
            </Edit>
        );
    };
    `;
  }, "renderer");
  var EditInferencer = createInferencer({
    type: "edit",
    additionalScope: [
      [
        "@refinedev/antd",
        "RefineAntd",
        { Edit: import_antd9.Edit, useForm: import_antd9.useForm, useSelect: import_antd9.useSelect, getValueFromEvent: import_antd9.getValueFromEvent }
      ],
      ["dayjs", "dayjs", import_dayjs3.default, true],
      [
        "antd",
        "AntdPackage",
        { Form: import_antd10.Form, Input: import_antd10.Input, Select: import_antd10.Select, Upload: import_antd10.Upload, Checkbox: import_antd10.Checkbox, DatePicker: import_antd10.DatePicker }
      ]
    ],
    codeViewerComponent: SharedCodeViewer,
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    renderer: renderer4
  });

  // src/inferencers/antd/index.tsx
  var AntdInferencer = /* @__PURE__ */ __name(({
    action: actionFromProps,
    id: idFromProps,
    ...props
  }) => {
    const { action, id, ...rest } = (0, import_core6.useResource)();
    console.log("rest: ", rest);
    switch (actionFromProps ?? action) {
      case "show":
        return /* @__PURE__ */ import_react9.default.createElement(ShowInferencer, { ...props, id: idFromProps ?? id });
      case "create":
        return /* @__PURE__ */ import_react9.default.createElement(CreateInferencer, { ...props, id: idFromProps ?? id });
      case "edit":
        return /* @__PURE__ */ import_react9.default.createElement(EditInferencer, { ...props, id: idFromProps ?? id });
      default:
        return /* @__PURE__ */ import_react9.default.createElement(ListInferencer, { ...props, id: idFromProps ?? id });
    }
  }, "AntdInferencer");
})();
//# sourceMappingURL=antd.js.map