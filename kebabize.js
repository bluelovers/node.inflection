"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kebabize = void 0;
const underscore_1 = require("./underscore");
const dasherize_1 = __importDefault(require("./dasherize"));
/**
 * This function adds kebabize support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @returns {String} Return camel cased words into kebab-case form.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.kebabize( 'MessageBusProperty' ); // === 'message-bus-property'
 */
function kebabize(str) {
    str = underscore_1.underscore(str);
    str = dasherize_1.default(str);
    return str;
}
exports.kebabize = kebabize;
exports.default = kebabize;
//# sourceMappingURL=kebabize.js.map