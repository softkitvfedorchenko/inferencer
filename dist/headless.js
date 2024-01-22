var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/inferencers/headless/index.tsx
var headless_exports = {};
__export(headless_exports, {
  HeadlessCreateInferencer: () => CreateInferencer,
  HeadlessCreateRenderer: () => renderer3,
  HeadlessEditInferencer: () => EditInferencer,
  HeadlessEditRenderer: () => renderer4,
  HeadlessInferencer: () => HeadlessInferencer,
  HeadlessListInferencer: () => ListInferencer,
  HeadlessListRenderer: () => renderer2,
  HeadlessShowInferencer: () => ShowInferencer,
  HeadlessShowRenderer: () => renderer
});
module.exports = __toCommonJS(headless_exports);
var import_react8 = __toESM(require("react"));
var import_core5 = require("@refinedev/core");

// src/create-inferencer/index.tsx
var import_react5 = __toESM(require("react"));
var import_core4 = require("@refinedev/core");

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
var import_core = require("@refinedev/core");
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
var import_standalone = __toESM(require("prettier/standalone"));
var import_parser_typescript = __toESM(require("prettier/parser-typescript"));
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
var import_pluralize = __toESM(require("pluralize"));
var toSingular = /* @__PURE__ */ __name((str = "") => {
  return import_pluralize.default.isSingular(str) ? str : import_pluralize.default.singular(str);
}, "toSingular");

// src/utilities/to-plural/index.ts
var import_pluralize2 = __toESM(require("pluralize"));
var toPlural = /* @__PURE__ */ __name((str = "") => {
  return import_pluralize2.default.isPlural(str) ? str : import_pluralize2.default.plural(str);
}, "toPlural");

// src/utilities/translate-action-title/index.ts
var translateActionTitle = /* @__PURE__ */ __name((payload) => {
  var _a;
  const { resource, action, i18n, noBraces } = payload;
  if (i18n) {
    const translateKey = `translate("${resource.name}.titles.${action}")`;
    if (noBraces) {
      return translateKey;
    }
    return `{${translateKey}}`;
  }
  if (action === "list") {
    return prettyString(
      toPlural(resource.label ?? ((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.label) ?? resource.name)
    );
  }
  return `${prettyString(toSingular(resource.name))} ${prettyString(action)}`;
}, "translateActionTitle");

// src/utilities/translate-button-title/index.ts
var translateButtonTitle = /* @__PURE__ */ __name((payload) => {
  const { action, i18n, noQuotes } = payload;
  if (i18n) {
    return `{translate("buttons.${action}")}`;
  }
  if (noQuotes) {
    return prettyString(action);
  }
  return `"${prettyString(action)}"`;
}, "translateButtonTitle");

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
var import_pluralize3 = __toESM(require("pluralize"));
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
var import_pluralize4 = __toESM(require("pluralize"));
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
  const byModule = imports.reduce((acc, [element, module2, isDefault]) => {
    if (!acc[module2]) {
      acc[module2] = [];
    }
    if (!acc[module2].includes(element)) {
      if (isDefault) {
        acc[module2].push([element, true]);
      } else {
        acc[module2].push(element);
      }
    }
    return acc;
  }, {});
  const lines = Object.entries(byModule).map(([module2, elements]) => {
    const defaultImport = elements.find((e) => Array.isArray(e) && e[1]);
    const named = elements.filter((e) => typeof e === "string");
    const defaultStr = defaultImport ? `${defaultImport[0]}` : "";
    const namedStr = named.length ? `{ ${named.join(", ")} }` : "";
    return `import ${defaultStr}${defaultStr && namedStr ? ", " : ""}${namedStr} from "${module2}";`;
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
var import_dayjs = __toESM(require("dayjs"));
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
var import_react = __toESM(require("react"));
var RefineCore = __toESM(require("@refinedev/core"));
var import_react_live = require("@aliemir/react-live");
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
var import_react2 = __toESM(require("react"));
var import_prism_react_renderer = __toESM(require("prism-react-renderer"));
var import_vsDark = __toESM(require("prism-react-renderer/themes/vsDark"));
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
var import_react3 = __toESM(require("react"));
var import_core2 = require("@refinedev/core");
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
var import_react4 = __toESM(require("react"));
var import_core3 = require("@refinedev/core");
var import_lodash = require("lodash");
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
                  return field.accessor ? (0, import_lodash.get)(el, field.accessor) : el;
                }
              )[0] : field.accessor ? (0, import_lodash.get)(record[field.key], field.accessor) : record[field.key];
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

// src/inferencers/headless/error.tsx
var import_react6 = __toESM(require("react"));
var ErrorComponent = /* @__PURE__ */ __name(({
  error
}) => {
  if (error) {
    return /* @__PURE__ */ import_react6.default.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "300px",
          position: "relative"
        }
      },
      /* @__PURE__ */ import_react6.default.createElement(
        "div",
        {
          style: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }
        },
        /* @__PURE__ */ import_react6.default.createElement(
          "div",
          {
            style: {
              fontSize: "1.5rem",
              fontWeight: "bold"
            },
            dangerouslySetInnerHTML: { __html: error ?? "" }
          }
        )
      )
    );
  }
  return null;
}, "ErrorComponent");

// src/inferencers/headless/loading.tsx
var import_react7 = __toESM(require("react"));
var LoadingComponent = /* @__PURE__ */ __name(() => {
  const [dots, setDots] = import_react7.default.useState(0);
  import_react7.default.useEffect(() => {
    if (typeof window !== "undefined") {
      const interval = setInterval(() => {
        setDots((dots2) => {
          if (dots2 === 3) {
            return 0;
          }
          return dots2 + 1;
        });
      }, 300);
      return () => {
        clearInterval(interval);
      };
    }
    return () => void 0;
  }, []);
  return /* @__PURE__ */ import_react7.default.createElement(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "120px",
        position: "relative"
      }
    },
    /* @__PURE__ */ import_react7.default.createElement(
      "div",
      {
        style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }
      },
      /* @__PURE__ */ import_react7.default.createElement(
        "span",
        {
          style: {
            fontSize: "1rem",
            fontWeight: 600
          }
        },
        "loading",
        ".".repeat(dots)
      )
    )
  );
}, "LoadingComponent");

// src/inferencers/headless/show.tsx
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
    ["useShow", "@refinedev/core"],
    ["useResource", "@refinedev/core"],
    ["useNavigation", "@refinedev/core"],
    ["IResourceComponentsProps", "@refinedev/core"]
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
        return jsx`
                <div style={{ marginTop: "6px" }}>
                    <h5>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</h5>
                    <ul>
                    {${variableIsLoading} && ${variableDataLength} ? <>Loading...</> : (
                        <>
                        ${(() => {
          var _a;
          if (field.relationInfer) {
            if ((_a = field.relationInfer) == null ? void 0 : _a.accessor) {
              if (Array.isArray(
                field.relationInfer.accessor
              )) {
                return "";
              } else {
                const mapItemName = getVariableName(
                  field.key
                );
                const val = accessor(
                  mapItemName,
                  void 0,
                  field.relationInfer.accessor
                );
                return jsx`
                                            {record?.${field.key}?.length ? ${variableName}?.data?.map((${mapItemName}: any) => <li key={${val}}>{${val}}</li>) : <></>}
                                        `;
              }
            } else {
              return "";
            }
          } else {
            return "";
          }
        })()}
                        </>
                    )}
                    </ul>
                </div>
                `;
      }
      if (field.fieldable) {
        return jsx`
                <div style={{ marginTop: "6px" }}>
                    <h5>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</h5>
                    <div>{${accessor(
          recordName,
          field.key,
          field.accessor
        )}}</div>
                </div>
                `;
      }
      return jsx`
                <div style={{ marginTop: "6px" }}>
                    <h5>${translatePrettyString({
        resource,
        field,
        i18n,
        noQuotes: true
      })}</h5>
                    <div>
                    {${variableIsLoading} ? <>Loading...</> : (
                        <>
                        ${(() => {
        var _a;
        if (field.relationInfer) {
          if ((_a = field.relationInfer) == null ? void 0 : _a.accessor) {
            if (Array.isArray(
              field.relationInfer.accessor
            )) {
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
                    </div>
                </div>
                `;
    }
    return void 0;
  }, "renderRelationFields");
  const textFields = /* @__PURE__ */ __name((field) => {
    if (field.type === "text") {
      if (field.multiple) {
        const val = accessor("item", void 0, field.accessor);
        return jsx`
                <div style={{ marginTop: "6px" }}>
                    <h5>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</h5>
                    <ul>
                        {${accessor(
          recordName,
          field.key
        )}?.map((item: any) => (
                            <li key={${val}}>
                                {${val}}
                            </li>
                        ))}
                    </ul>
                </div>
            `;
      }
      return jsx`
                <div style={{ marginTop: "6px" }}>
                    <h5>${translatePrettyString({
        resource,
        field,
        i18n,
        noQuotes: true
      })}</h5>
                    <div>
                    {${accessor(recordName, field.key, field.accessor)}}
                    </div>
                </div>
            `;
    }
    return void 0;
  }, "textFields");
  const imageFields = /* @__PURE__ */ __name((field) => {
    if (field.type === "image") {
      if (field.multiple) {
        const val = accessor("item", void 0, field.accessor);
        return jsx`
                <div style={{ marginTop: "6px" }}>
                    <h5>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</h5>
                    <ul>
                    {${accessor(recordName, field.key)}?.map((item: any) => (
                        <li key={${val}}>
                            <img style={{ maxWidth: 200 }} src={${val}}/>
                        </li>
                    ))}
                    </ul>
                </div>
            `;
      }
      return jsx`
                <div style={{ marginTop: "6px" }}>
                    <h5>${translatePrettyString({
        resource,
        field,
        i18n,
        noQuotes: true
      })}</h5>
                    <img src={{ maxWidth: 200 }} src={${accessor(
        recordName,
        field.key,
        field.accessor,
        " + "
      )}} />
                </div>
                `;
    }
    return void 0;
  }, "imageFields");
  const emailFields = /* @__PURE__ */ __name((field) => {
    if (field.type === "email") {
      if (field.multiple) {
        const val = accessor("item", void 0, field.accessor);
        return jsx`
                <div style={{ marginTop: "6px" }}>
                    <h5>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</h5>
                    <ul>
                        {${accessor(
          recordName,
          field.key
        )}?.map((item: any) => (
                            <li key={${val}}>
                                <a href={"mailto:" + ${val}}>{${val}}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            `;
      }
      return jsx`
                <div style={{ marginTop: "6px" }}>
                    <h5>${translatePrettyString({
        resource,
        field,
        i18n,
        noQuotes: true
      })}</h5>
                    <div>
                        <a href={"mailto:" + ${accessor(
        recordName,
        field.key,
        field.accessor,
        " + "
      )}}>
                            {${accessor(
        recordName,
        field.key,
        field.accessor,
        " + "
      )}}
                        </a>
                    </div>
                </div>
            `;
    }
    return void 0;
  }, "emailFields");
  const urlFields = /* @__PURE__ */ __name((field) => {
    if (field.type === "url") {
      if (field.multiple) {
        const val = accessor("item", void 0, field.accessor);
        return jsx`
                <div style={{ marginTop: "6px" }}>
                    <h5>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</h5>
                    <ul>
                        {${accessor(
          recordName,
          field.key
        )}?.map((item: any) => (
                            <li key={${val}}>
                                <a href={${val}}>{${val}}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            `;
      }
      return jsx`
            <div style={{ marginTop: "6px" }}>
                <h5>${translatePrettyString({
        resource,
        field,
        i18n,
        noQuotes: true
      })}</h5>
                <div>
                    <a href={${accessor(
        recordName,
        field.key,
        field.accessor,
        " + "
      )}} target="_blank" rel="noreferrer">
                        {${accessor(
        recordName,
        field.key,
        field.accessor,
        " + "
      )}}
                    </a>
                </div>
            </div>
            `;
    }
    return void 0;
  }, "urlFields");
  const booleanFields = /* @__PURE__ */ __name((field) => {
    if (field.type === "boolean") {
      if (field.multiple) {
        const val = accessor("item", void 0, field.accessor);
        return jsx`
                <div style={{ marginTop: "6px" }}>
                    <h5>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</h5>
                    <ul>
                        {${accessor(
          recordName,
          field.key
        )}?.map((item: any) => (
                            <li key={${val}}>
                                {${val} ? "Yes" : "No"}
                            </li>
                        ))}
                    </ul>
                </div>
            `;
      }
      return jsx`
            <div style={{ marginTop: "6px" }}>
                <h5>${translatePrettyString({
        resource,
        field,
        i18n,
        noQuotes: true
      })}</h5>
                <div>
                {${accessor(
        recordName,
        field.key,
        field.accessor,
        " && "
      )} ? "Yes" : "No"}
                </div>
            </div>
            `;
    }
    return void 0;
  }, "booleanFields");
  const dateFields = /* @__PURE__ */ __name((field) => {
    if (field.type === "date") {
      if (field.multiple) {
        const val = accessor("item", void 0, field.accessor);
        return jsx`
                <div style={{ marginTop: "6px" }}>
                    <h5>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</h5>
                    <ul>
                    {${accessor(recordName, field.key)}?.map((item: any) => (
                        <li key={${val}}>
                            {(new Date(${val})).toLocaleString(undefined, { timeZone: "UTC" })}
                        </li>
                    ))}
                    </ul>
                </div>
            `;
      }
      return jsx`
            <div style={{ marginTop: "6px" }}>
                <h5>${translatePrettyString({
        resource,
        field,
        i18n,
        noQuotes: true
      })}</h5>
                <div>
                    {(new Date(${accessor(
        recordName,
        field.key,
        field.accessor,
        " + ' ' + "
      )})).toLocaleString(undefined, { timeZone: "UTC" })}
                </div>
            </div>
            `;
    }
    return void 0;
  }, "dateFields");
  const richtextFields = /* @__PURE__ */ __name((field) => {
    if (field.type === "richtext") {
      return jsx`
            <div style={{ marginTop: "6px" }}>
                <h5>${translatePrettyString({
        resource,
        field,
        i18n,
        noQuotes: true
      })}</h5>
                <p>
                {${accessor(
        recordName,
        field.key,
        field.accessor,
        ' + " " + '
      )}}
                </p>
            </div>
            `;
    }
    return void 0;
  }, "richtextFields");
  const numberFields = /* @__PURE__ */ __name((field) => {
    if (field.type === "number") {
      if (field.multiple) {
        const val = accessor("item", void 0, field.accessor);
        return jsx`
                <div style={{ marginTop: "6px" }}>
                    <h5>${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}</h5>
                    <ul>
                        {${accessor(
          recordName,
          field.key
        )}?.map((item: any) => (
                        <li key={${val}}>
                            {${val}}
                        </li>
                        ))}
                    </ul>
                </div>
                `;
      }
      return jsx`
                <div style={{ marginTop: "6px" }}>
                    <h5>${translatePrettyString({
        resource,
        field,
        i18n,
        noQuotes: true
      })}</h5>
                    <div>
                    {${accessor(
        recordName,
        field.key,
        field.accessor,
        ' + " " + '
      )} ?? ""}
                    </div>
                </div>
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
  const { canEdit, list } = resource ?? {};
  const canList = !!list;
  noOp(imports);
  const useTranslateHook = i18n && `const translate = useTranslate();`;
  return jsx`
    ${printImports(imports)}
    
    export const ${COMPONENT_NAME}: React.FC<IResourceComponentsProps> = () => {
        ${useTranslateHook}
        const { edit, list } = useNavigation();
        ${isCustomPage ? "" : `const { id } = useResource();`}
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
            <div style={{ padding: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h1>${translateActionTitle({
    resource,
    action: "show",
    i18n
  })}</h1>
                <div style={{ display: "flex", gap: "8px" }}>
                ${canList ? jsx`<button onClick={() => list("${resource.name}")}>${translateActionTitle({
    resource,
    action: "list",
    i18n
  })}</button>` : ""}
                ${canEdit ? jsx`<button onClick={() => edit("${resource.name}", ${isCustomPage ? `"${id}"` : "id ?? ''"})}>${translateButtonTitle({
    action: "edit",
    i18n,
    noQuotes: true
  })}</button>` : ""}
                </div>
            </div>
                <div>
                    ${renderedFields.join("")}
                </div>
            </div>
        );
    };
    `;
}, "renderer");
var ShowInferencer = createInferencer({
  type: "show",
  additionalScope: [],
  codeViewerComponent: SharedCodeViewer,
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  renderer
});

// src/inferencers/headless/list.tsx
var import_react_table = require("@refinedev/react-table");
var import_react_table2 = require("@tanstack/react-table");
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
    ["React", "react", true],
    ["IResourceComponentsProps", "@refinedev/core"],
    ["useNavigation", "@refinedev/core"],
    ["useTable", "@refinedev/react-table"],
    ["ColumnDef", "@tanstack/react-table"],
    ["flexRender", "@tanstack/react-table"]
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

                    ${(field == null ? void 0 : field.accessor) ? "try {" : ""}

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
                        <ul>
                            {${getVariableName(
          field.key,
          ""
        )}?.map((item, index) => (
                                <li key={index}>
                                    {${val}}
                                </li>
                            ))}
                        </ul>
                    )
                    ${(field == null ? void 0 : field.accessor) ? " } catch (error) { return null; }" : ""}
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

                        ${(field == null ? void 0 : field.accessor) ? "try {" : ""}

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

                        ${(field == null ? void 0 : field.accessor) ? " } catch (error) { return null; }" : ""}
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
                        return <img style={{ maxWidth: "100px" }} src={${accessor(
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
                                <ul>
                                    {getValue<any[]>()?.map((item, index) => (
                                        <li key={index}><img src={${val}} style={{ height: "50px", maxWidth: "100px" }} /></li>
                                    ))}
                                </ul>
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
                    return <a href={"mailto:" + ${accessor(
        "getValue<any>()",
        void 0,
        Array.isArray(field.accessor) ? field.accessor : void 0,
        ' + " " + '
      )}}>{${accessor(
        "getValue<any>()",
        void 0,
        Array.isArray(field.accessor) ? field.accessor : void 0,
        ' + " " + '
      )}}</a>
                }
            `;
      if (field.multiple) {
        const val = accessor("item", void 0, field.accessor, " + ");
        cell = `
                    cell: function render({ getValue }) {
                        return (
                            <ul>
                                {getValue<any[]>()?.map((item, index) => (
                                    <li key={index}>
                                        {${val}}
                                    </li>
                                ))}
                            </ul>
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
                    return <a href={${accessor(
        "getValue<any>()",
        void 0,
        Array.isArray(field.accessor) ? field.accessor : void 0,
        " + "
      )}}>{${accessor(
        "getValue<any>()",
        void 0,
        Array.isArray(field.accessor) ? field.accessor : void 0,
        " + "
      )}}</a>
                }
            `;
      if (field.multiple) {
        const val = accessor("item", void 0, field.accessor, " + ");
        cell = `
                    cell: function render({ getValue }) {
                        return (
                            <ul>
                                {getValue<any[]>()?.map((item, index) => (
                                    <li key={index}>
                                        {${val}}
                                    </li>
                                ))}
                            </ul>
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
                    return ${accessor(
        "getValue<any>()",
        void 0,
        Array.isArray(field.accessor) ? field.accessor : void 0,
        " + "
      )} ? "yes" : "no"
                }
            `;
      if (field.multiple) {
        const val = accessor("item", void 0, field.accessor, " + ");
        cell = `
                    cell: function render({ getValue }) {
                        return (
                            <ul>
                                {getValue<any[]>()?.map((item, index) => (
                                    <li key={index}>
                                        {${val} ? "yes" : "no"}
                                    </li>
                                ))}
                            </ul>
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
  }, "booleanFields");
  const dateFields = /* @__PURE__ */ __name((field) => {
    if (field.type === "date") {
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
                    return (new Date(${accessor(
        "getValue<any>()",
        void 0,
        Array.isArray(field.accessor) ? field.accessor : void 0,
        ' + " " + '
      )})).toLocaleString(undefined, { timeZone: "UTC" })
                }
            `;
      if (field.multiple) {
        const val = accessor("item", void 0, field.accessor, " + ");
        cell = `
                    cell: function render({ getValue }) {
                        return (
                            <ul>
                                {getValue<any[]>()?.map((item, index) => (
                                    <li key={index}>
                                    {(new Date(${val})).toLocaleString(undefined, { timeZone: "UTC" })}
                                    </li>
                                ))}
                            </ul>
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
  const basicFields = /* @__PURE__ */ __name((field) => {
    if (field && (field.type === "text" || field.type === "number" || field.type === "richtext")) {
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
        const val = accessor(
          "item",
          void 0,
          field.accessor,
          ' + " " + '
        );
        cell = `
                    cell: function render({ getValue }) {
                        return (
                            <ul>
                                {getValue<any[]>()?.map((item, index) => (
                                    <li key={index}>
                                        {${val}}
                                    </li>
                                ))}
                            </ul>
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
  const { canEdit, canShow, canCreate } = resource ?? {};
  const actionColumnTitle = i18n ? `translate("table.actions")` : `"Actions"`;
  const actionButtons = canEdit || canShow ? jsx`
    {
        id: "actions",
        accessorKey: "id",
        header: ${actionColumnTitle},
        cell: function render({ getValue }) {
            return (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "4px",
                    }}
                >
                ${canShow ? jsx`
                    <button
                        onClick={() => {
                            show("${resource.name}", getValue() as string);
                        }}
                    >
                        ${translateButtonTitle({
    action: "show",
    i18n,
    noQuotes: true
  })}
                    </button>
                    ` : ""}
                    ${canEdit ? jsx`
                            <button
                            onClick={() => {
                                edit("${resource.name}", getValue() as string);
                            }}
                        >
                            ${translateButtonTitle({
    action: "edit",
    i18n,
    noQuotes: true
  })}
                        </button>
                    ` : ""}
                </div>
            );
        },
    },
        ` : "";
  const renderedFields = fields.map((field) => {
    switch (field == null ? void 0 : field.type) {
      case "text":
      case "number":
      case "richtext":
        return basicFields(field);
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
        const columns = React.useMemo<ColumnDef<any>[]>(() => [
            ${[...renderedFields, actionButtons].filter(Boolean).join(",")}
        ], [${i18n ? "translate" : ""}]);

        ${canEdit || canShow ? jsx`
        const { ${canEdit ? "edit," : ""} ${canShow ? "show," : ""} ${canCreate ? "create," : ""} } = useNavigation();
        ` : ""}

        const {
            getHeaderGroups,
            getRowModel,
            setOptions,
            refineCore: {
                tableQueryResult: { data: tableData },
            },
            getState,
            setPageIndex,
            getCanPreviousPage,
            getPageCount,
            getCanNextPage,
            nextPage,
            previousPage,
            setPageSize,
            getColumn,
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
            <div style={{ padding: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h1>${translateActionTitle({
    resource,
    action: "list",
    i18n
  })}</h1>
                ${canCreate ? jsx`<button onClick={() => create("${resource.name}")}>${translateButtonTitle({
    action: "create",
    i18n,
    noQuotes: true
  })}</button>` : ""}
            </div>
                <div style={{ maxWidth: "100%", overflowY: "scroll" }}>
                    <table>
                        <thead>
                            {getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th key={header.id}>
                                            {!header.isPlaceholder && (
                                                flexRender(
                                                    header.column.columnDef
                                                        .header,
                                                    header.getContext(),
                                                )
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {getRowModel().rows.map((row) => (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div style={{ marginTop: "12px" }}>
                    <button
                        onClick={() => setPageIndex(0)}
                        disabled={!getCanPreviousPage()}
                    >
                        {"<<"}
                    </button>
                    <button
                        onClick={() => previousPage()}
                        disabled={!getCanPreviousPage()}
                    >
                        {"<"}
                    </button>
                    <button onClick={() => nextPage()} disabled={!getCanNextPage()}>
                        {">"}
                    </button>
                    <button
                        onClick={() => setPageIndex(getPageCount() - 1)}
                        disabled={!getCanNextPage()}
                    >
                        {">>"}
                    </button>
                    <span>
                        <strong>
                            {" "} {getState().pagination.pageIndex + 1} / {" "} {getPageCount()} {" "}
                        </strong>
                    </span>
                    <span>
                        | ${i18n ? `{translate("pagination.go")}` : "Go to Page"}:{" "}
                        <input
                            type="number"
                            defaultValue={getState().pagination.pageIndex + 1}
                            onChange={(e) => {
                                const page = e.target.value
                                    ? Number(e.target.value) - 1
                                    : 0;
                                setPageIndex(page);
                            }}
                        />
                    </span>{" "}
                    <select
                        value={getState().pagination.pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                        }}
                    >
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                ${i18n ? `{translate("pagination.show")}` : "Show"} {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
            </div>   
        );
    };
    `;
}, "renderer");
var ListInferencer = createInferencer({
  type: "list",
  additionalScope: [
    ["@refinedev/react-table", "RefineReactTable", { useTable: import_react_table.useTable }],
    ["@tanstack/react-table", "TanstackReactTable", { flexRender: import_react_table2.flexRender }]
  ],
  codeViewerComponent: SharedCodeViewer,
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  renderer: renderer2
});

// src/inferencers/headless/create.tsx
var import_react_hook_form = require("@refinedev/react-hook-form");
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
    ["React", "react", true],
    ["useNavigation", "@refinedev/core"],
    ["IResourceComponentsProps", "@refinedev/core"],
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
      const variableName = getVariableName(field.key, "Options");
      return jsx`
            <label>
                <span style={{ marginRight: "8px" }}>
                    ${translatePrettyString({
        resource,
        field,
        i18n,
        noQuotes: true
      })}
                </span>
                <select
                    placeholder="Select ${toSingular(field.resource.name)}"
                    {...register("${dotAccessor(
        field.key,
        void 0,
        field.accessor
      )}", {
                        required: ${field.multiple ? "false" : '"This field is required"'},
                    })}
                >
                    {${variableName}?.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <span style={{ color: "red" }}>
                    {${accessor(
        "(errors as any)",
        field.key,
        field.accessor,
        false
      )}?.message as string}
                </span>
            </label>
            `;
    }
    return void 0;
  }, "renderRelationFields");
  const basicInputFields = /* @__PURE__ */ __name((field) => {
    if (field.type === "text" || field.type === "url" || field.type === "email" || field.type === "number" || field.type === "date" || field.type === "richtext") {
      if (isIDKey(field.key)) {
        return void 0;
      }
      if (field.multiple) {
        return void 0;
      }
      const inp = field.type === "richtext" ? "textarea" : "input";
      return jsx`
                <label>
                    <span style={{ marginRight: "8px" }}>
                        ${translatePrettyString({
        resource,
        field,
        i18n,
        noQuotes: true
      })}
                    </span>
                    <${inp}
                        ${field.type !== "date" && field.type !== "richtext" ? `type="${field.type}"` : ""}
                        ${inp === "textarea" ? `
                            rows={5}
                            cols={33}
                            style={{ verticalAlign: "top" }}
                        ` : ""}
                        {...register("${dotAccessor(
        field.key,
        void 0,
        field.accessor
      )}", {
                            required: "This field is required",
                            ${field.type === "number" ? "valueAsNumber: true," : ""}
                        })}

                    />
                    <span style={{ color: "red" }}>
                        {${accessor(
        "(errors as any)",
        field.key,
        field.accessor,
        false
      )}?.message as string}
                    </span>
                </label>
            `;
    }
    return void 0;
  }, "basicInputFields");
  const booleanFields = /* @__PURE__ */ __name((field) => {
    if (field.type === "boolean") {
      if (field.multiple) {
        return void 0;
      }
      return jsx`
                <label>
                    <span style={{ marginRight: "8px" }}>
                        ${translatePrettyString({
        resource,
        field,
        i18n,
        noQuotes: true
      })}
                    </span>
                    <input
                        type="checkbox"
                        {...register("${dotAccessor(
        field.key,
        void 0,
        field.accessor
      )}", {
                            required: "This field is required",
                        })}
                    />
                    <span style={{ color: "red" }}>
                        {${accessor(
        "errors",
        field.key,
        field.accessor,
        false
      )}?.message as string}
                    </span>
                </label>
            `;
    }
    return void 0;
  }, "booleanFields");
  const renderedFields = fields.map((field) => {
    switch (field == null ? void 0 : field.type) {
      case "text":
      case "number":
      case "email":
      case "url":
      case "richtext":
      case "date":
        return basicInputFields(field);
      case "boolean":
        return booleanFields(field);
      case "relation":
        return renderRelationFields(field);
      default:
        return void 0;
    }
  });
  const canList = !!resource.list;
  noOp(imports);
  const useTranslateHook = i18n && `const translate = useTranslate();`;
  return jsx`
    ${printImports(imports)}
    
    export const ${COMPONENT_NAME}: React.FC<IResourceComponentsProps> = () => {
        ${useTranslateHook}
        ${canList ? `
        const { list } = useNavigation();
        ` : ""}
        const {
            refineCore: { onFinish, formLoading },
            register,
            handleSubmit,
            resetField,
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
            <div style={{ padding: "16px" }}>
                <div style={{ display: "flex", justifyContent: ${canList ? '"space-between"' : '"flex-start"'} }}>
                    <h1>${translateActionTitle({
    resource,
    action: "create",
    i18n
  })}</h1>
                    ${canList ? jsx`
                            <div>
                        <button
                                onClick={() => {
                                    list("${resource.name}");
                                }}
                        >
                            ${translateActionTitle({
    resource,
    action: "list",
    i18n
  })}
                        </button>
                        </div>
                    ` : ""}
                </div>
                <form onSubmit={handleSubmit(onFinish)}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        ${renderedFields.join("")}
                        <div>
                            <input type="submit" value=${translateButtonTitle({
    action: "save",
    i18n
  })} />
                        </div>
                    </div>
                </form>
            </div>
        );
    };
    `;
}, "renderer");
var CreateInferencer = createInferencer({
  type: "create",
  additionalScope: [
    ["@refinedev/react-hook-form", "RefineReactHookForm", { useForm: import_react_hook_form.useForm }]
  ],
  codeViewerComponent: SharedCodeViewer,
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  renderer: renderer3
});

// src/inferencers/headless/edit.tsx
var import_react_hook_form2 = require("@refinedev/react-hook-form");
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
    ["useNavigation", "@refinedev/core"],
    ["IResourceComponentsProps", "@refinedev/core"],
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
      const variableName = getVariableName(field.key, "Options");
      return jsx`
            <label>
                <span style={{ marginRight: "8px" }}>${translatePrettyString({
        resource,
        field,
        i18n,
        noQuotes: true
      })}</span>
                <select
                    placeholder="Select ${toSingular(field.resource.name)}"
                    {...register("${dotAccessor(
        field.key,
        void 0,
        field.accessor
      )}", {
                        required: ${field.multiple ? "false" : '"This field is required"'},
                    })}
                >
                    {${variableName}?.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <span style={{ color: "red" }}>
                    {${accessor(
        "(errors as any)",
        field.key,
        field.accessor,
        false
      )}?.message as string}
                </span>
            </label>
            `;
    }
    return void 0;
  }, "renderRelationFields");
  const basicInputFields = /* @__PURE__ */ __name((field) => {
    if (field.type === "text" || field.type === "url" || field.type === "email" || field.type === "number" || field.type === "date" || field.type === "richtext") {
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
                            <label key={index}>
                                <span style={{ marginRight: "8px" }}>
                                    ${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}
                                </span>
                                <input ${field.type !== "richtext" ? `
                                type="${field.type !== "date" ? field.type : "text"}"
                                ` : ""} {...register(\`${val}\`, { required: "This field is required", ${field.type === "number" ? "valueAsNumber: true," : ""} })} />
                                <span style={{color: "red"}}>
                                {${accessor(valError, "message")} as string}
                                </span>
                            </label>
                        ))}
                    </>
                `;
      }
      const inp = field.type === "richtext" ? "textarea" : "input";
      return jsx`
            <label>
                <span style={{ marginRight: "8px" }}>${translatePrettyString({
        resource,
        field,
        i18n,
        noQuotes: true
      })}</span>
                <${inp}
                ${isIDKey(field.key) ? "disabled" : ""}
                ${field.type !== "date" && field.type !== "richtext" ? `type="${field.type}"` : ""}
                ${inp === "textarea" ? `
                    rows={5}
                    cols={33}
                    style={{ verticalAlign: "top" }}
                ` : ""}
                {...register("${dotAccessor(
        field.key,
        void 0,
        field.accessor
      )}", {
                    required: "This field is required",
                    ${field.type === "number" ? "valueAsNumber: true," : ""}
                })}
                />
                <span style={{ color: "red" }}>
                {${accessor(
        "(errors as any)",
        field.key,
        field.accessor,
        false
      )}?.message as string}
                </span>
            </label>
            `;
    }
    return void 0;
  }, "basicInputFields");
  const booleanFields = /* @__PURE__ */ __name((field) => {
    if (field.type === "boolean") {
      if (field.multiple) {
        const val = dotAccessor(field.key, void 0, field.accessor);
        const errorVal = accessor("(errors as any)", field.key, void 0, false) + "?.[index]";
        return `
                    <>
                        {${accessor(
          recordName,
          field.key
        )}?.map((item: any, index: number) => (
                            <label key={index}>
                            <span style={{ marginRight: "8px" }}>
                            ${translatePrettyString({
          resource,
          field,
          i18n,
          noQuotes: true
        })}
                            </span>
                            <input
                                type="checkbox"
                                {...register(\`${val}.\${index}\`, {
                                    required: "This field is required",
                                })}
                            />
                            <span style={{ color: "red" }}>
                                {${errorVal}?.message as string}
                            </span>
                        ))}
                    </>
                `;
      }
      return jsx`
            <label>
                <span style={{ marginRight: "8px" }}>${translatePrettyString({
        resource,
        field,
        i18n,
        noQuotes: true
      })}</span>
                <input type="checkbox" {...register("${dotAccessor(
        field.key,
        void 0,
        field.accessor
      )}", {
                    required: "This field is required",
                })} />
                <span style={{ color: "red" }}>
                    {${accessor(
        "errors",
        field.key,
        field.accessor,
        false
      )}?.message as string}
                </span>
            </label>
            `;
    }
    return void 0;
  }, "booleanFields");
  const renderedFields = fields.map((field) => {
    switch (field == null ? void 0 : field.type) {
      case "text":
      case "number":
      case "email":
      case "url":
      case "richtext":
      case "date":
        return basicInputFields(field);
      case "boolean":
        return booleanFields(field);
      case "relation":
        return renderRelationFields(field);
      default:
        return void 0;
    }
  });
  const canList = !!resource.list;
  noOp(imports);
  const useTranslateHook = i18n && `const translate = useTranslate();`;
  return jsx`
    ${printImports(imports)}
    
    export const ${COMPONENT_NAME}: React.FC<IResourceComponentsProps> = () => {
        ${useTranslateHook}
        ${canList ? `
        const { list } = useNavigation();
        ` : ""}
        const {
            refineCore: { onFinish, formLoading, queryResult },
            register,
            handleSubmit,
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
  ) ? `{ refineCoreProps: {
                        ${getMetaProps(
    (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
    meta,
    "getOne"
  )}
                    } }` : ""}
        );
    
        const ${recordName} = queryResult?.data?.data;
    
        ${relationHooksCode}

        return (
            <div style={{ padding: "16px" }}>
                <div style={{ display: "flex", justifyContent: ${canList ? '"space-between"' : '"flex-start"'} }}>
                    <h1>${translateActionTitle({
    resource,
    action: "edit",
    i18n
  })}</h1>
                    ${canList ? jsx`
                    <div>
                        <button
                                onClick={() => {
                                    list("${resource.name}");
                                }}
                        >
                            ${translateActionTitle({
    resource,
    action: "list",
    i18n
  })}
                        </button>
                    </div>
                    ` : ""}
                </div>
                <form onSubmit={handleSubmit(onFinish)}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        ${renderedFields.join("")}
                        <div>
                            <input type="submit" value=${translateButtonTitle({
    action: "save",
    i18n
  })} />
                        </div>
                    </div>
                </form>
            </div>
        );
    };
    `;
}, "renderer");
var EditInferencer = createInferencer({
  type: "edit",
  additionalScope: [
    ["@refinedev/react-hook-form", "RefineReactHookForm", { useForm: import_react_hook_form2.useForm }]
  ],
  codeViewerComponent: SharedCodeViewer,
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  renderer: renderer4
});

// src/inferencers/headless/index.tsx
var HeadlessInferencer = /* @__PURE__ */ __name(({
  action: actionFromProps,
  id: idFromProps,
  ...props
}) => {
  const { action, id } = (0, import_core5.useResource)();
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
}, "HeadlessInferencer");
//# sourceMappingURL=headless.js.map