"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
/**
 * This function adds capitalization support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @returns {String} All characters will be lower case and the first will be upper.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.capitalize( 'message_properties' ); // === 'Message_properties'
 *     inflection.capitalize( 'message properties', true ); // === 'Message properties'
 */
function capitalize(str) {
    str = str.toLowerCase();
    return str.substring(0, 1).toUpperCase() + str.substring(1);
}
exports.capitalize = capitalize;
exports.default = capitalize;
//# sourceMappingURL=capitalize.js.map