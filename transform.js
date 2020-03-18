"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = void 0;
/**
 * This function performs multiple inflection methods on a string
 * @public
 * @function
 * @param {String} str The subject string.
 * @param {Array} arr An array of inflection methods.
 * @returns {String}
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.transform( 'all job', [ 'pluralize', 'capitalize', 'dasherize' ]); // === 'All-jobs'
 */
const inflector_1 = __importDefault(require("./lib/inflector"));
function transform(str, arr) {
    let i = 0;
    const j = arr.length;
    for (; i < j; i++) {
        const method = arr[i];
        if (inflector_1.default.hasOwnProperty(method)) {
            str = inflector_1.default[method](str);
        }
    }
    return str;
}
exports.transform = transform;
exports.default = transform;
//# sourceMappingURL=transform.js.map