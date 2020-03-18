"use strict";
/*!
 * inflection
 * Copyright(c) 2011 Ben Lin <ben@dreamerslab.com>
 * MIT Licensed
 *
 * @fileoverview
 * A port of inflection-js to node.js module.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = exports.ordinalize = exports.foreign_key = exports.classify = exports.kebabize = exports.tableize = exports.demodulize = exports.titleize = exports.dasherize = exports.capitalize = exports.humanize = exports.underscore = exports.camelize = exports.inflect = exports.singularize = exports.pluralize = exports.indexOf = exports._apply_rules = void 0;
const dasherize_1 = __importDefault(require("./dasherize"));
exports.dasherize = dasherize_1.default;
const ordinalize_1 = __importDefault(require("./ordinalize"));
exports.ordinalize = ordinalize_1.default;
const indexOf_1 = __importDefault(require("./indexOf"));
exports.indexOf = indexOf_1.default;
const _apply_rules_1 = __importDefault(require("./lib/_apply_rules"));
exports._apply_rules = _apply_rules_1.default;
const pluralize_1 = __importDefault(require("./pluralize"));
exports.pluralize = pluralize_1.default;
const singularize_1 = __importDefault(require("./singularize"));
exports.singularize = singularize_1.default;
const inflect_1 = __importDefault(require("./inflect"));
exports.inflect = inflect_1.default;
const camelize_1 = __importDefault(require("./camelize"));
exports.camelize = camelize_1.default;
const underscore_1 = __importDefault(require("./underscore"));
exports.underscore = underscore_1.default;
const capitalize_1 = __importDefault(require("./capitalize"));
exports.capitalize = capitalize_1.default;
const titleize_1 = __importDefault(require("./titleize"));
exports.titleize = titleize_1.default;
const tableize_1 = __importDefault(require("./tableize"));
exports.tableize = tableize_1.default;
const kebabize_1 = __importDefault(require("./kebabize"));
exports.kebabize = kebabize_1.default;
const classify_1 = __importDefault(require("./classify"));
exports.classify = classify_1.default;
const demodulize_1 = __importDefault(require("./demodulize"));
exports.demodulize = demodulize_1.default;
const humanize_1 = __importDefault(require("./humanize"));
exports.humanize = humanize_1.default;
const foreign_key_1 = __importDefault(require("./foreign_key"));
exports.foreign_key = foreign_key_1.default;
const transform_1 = __importDefault(require("./transform"));
exports.transform = transform_1.default;
exports.default = {
    _apply_rules: _apply_rules_1.default,
    indexOf: indexOf_1.default,
    pluralize: pluralize_1.default,
    singularize: singularize_1.default,
    inflect: inflect_1.default,
    camelize: camelize_1.default,
    underscore: underscore_1.default,
    humanize: humanize_1.default,
    capitalize: capitalize_1.default,
    dasherize: dasherize_1.default,
    titleize: titleize_1.default,
    demodulize: demodulize_1.default,
    tableize: tableize_1.default,
    kebabize: kebabize_1.default,
    classify: classify_1.default,
    foreign_key: foreign_key_1.default,
    ordinalize: ordinalize_1.default,
    transform: transform_1.default,
};
//# sourceMappingURL=index.js.map