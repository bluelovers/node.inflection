"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inflector = void 0;
const pluralize_1 = __importDefault(require("../pluralize"));
const singularize_1 = __importDefault(require("../singularize"));
const inflect_1 = __importDefault(require("../inflect"));
const camelize_1 = __importDefault(require("../camelize"));
const underscore_1 = __importDefault(require("../underscore"));
const humanize_1 = __importDefault(require("../humanize"));
const capitalize_1 = __importDefault(require("../capitalize"));
const dasherize_1 = __importDefault(require("../dasherize"));
const titleize_1 = __importDefault(require("../titleize"));
const demodulize_1 = __importDefault(require("../demodulize"));
const tableize_1 = __importDefault(require("../tableize"));
const kebabize_1 = __importDefault(require("../kebabize"));
const classify_1 = __importDefault(require("../classify"));
const foreign_key_1 = __importDefault(require("../foreign_key"));
const ordinalize_1 = __importDefault(require("../ordinalize"));
exports.inflector = {
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
};
exports.default = exports.inflector;
//# sourceMappingURL=inflector.js.map