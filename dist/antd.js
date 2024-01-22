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

// src/inferencers/antd/index.tsx
var antd_exports = {};
__export(antd_exports, {
  AntdCreateInferencer: () => CreateInferencer,
  AntdCreateRenderer: () => renderer3,
  AntdEditInferencer: () => EditInferencer,
  AntdEditRenderer: () => renderer4,
  AntdInferencer: () => AntdInferencer,
  AntdListInferencer: () => ListInferencer,
  AntdListRenderer: () => renderer2,
  AntdShowInferencer: () => ShowInferencer,
  AntdShowRenderer: () => renderer
});
module.exports = __toCommonJS(antd_exports);
var import_react9 = __toESM(require("react"));
var import_core6 = require("@refinedev/core");

// src/inferencers/antd/show.tsx
var import_antd3 = require("@refinedev/antd");
var import_antd4 = require("antd");

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

// src/inferencers/antd/error.tsx
var import_react6 = __toESM(require("react"));
var import_antd = require("antd");
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
var import_react7 = __toESM(require("react"));
var import_antd2 = require("antd");
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
var import_antd5 = require("@refinedev/antd");
var import_antd6 = require("antd");

// src/from-scheme/find.ts
var import_lodash2 = require("lodash");

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
        (0, import_lodash2.set)(crudSchemas, `${crudKey}.request`, (0, import_lodash2.cloneDeep)(scheme_default.components.schemas[requestRefName]));
      }
      const responseRef = Object.entries(flattenSchema).find(([key, value]) => key.includes("responses") && isSchema(value));
      if (responseRef) {
        const responseRefName = responseRef[1].split("/").at(-1);
        (0, import_lodash2.set)(crudSchemas, `${crudKey}.response`, (0, import_lodash2.cloneDeep)(scheme_default.components.schemas[responseRefName]));
      }
    }
  });
  return crudSchemas;
}, "getCrudSchemas");
var getSchemaByType = /* @__PURE__ */ __name((name, type) => {
  const crudSchemas = {};
  Object.keys(scheme_default.paths).filter((path) => path.includes(name)).forEach((path) => {
    const result = getCrudSchemas(scheme_default.paths[path]);
    (0, import_lodash2.merge)(crudSchemas, result);
    crudSchemas.list = result.show;
  });
  console.log("crudSchemas: ", crudSchemas);
  console.groupEnd();
  return crudSchemas[type];
}, "getSchemaByType");

// src/from-scheme/create-schema-inferencer/index.tsx
var import_react8 = __toESM(require("react"));
var import_core5 = require("@refinedev/core");

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
var import_has = __toESM(require("lodash/has"));
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
var import_antd7 = require("@refinedev/antd");
var import_antd8 = require("antd");
var import_dayjs2 = __toESM(require("dayjs"));
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
var import_antd9 = require("@refinedev/antd");
var import_antd10 = require("antd");
var import_dayjs3 = __toESM(require("dayjs"));
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
//# sourceMappingURL=antd.js.map