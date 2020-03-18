"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableize = void 0;
const underscore_1 = require("./underscore");
const pluralize_1 = require("./pluralize");
/**
 * This function adds tableize support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @returns {String} Return camel cased words into their underscored plural form.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.tableize( 'MessageBusProperty' ); // === 'message_bus_properties'
 */
function tableize(str) {
    str = underscore_1.underscore(str);
    str = pluralize_1.pluralize(str);
    return str;
}
exports.tableize = tableize;
exports.default = tableize;
//# sourceMappingURL=tableize.js.map