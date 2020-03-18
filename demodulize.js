"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demodulize = void 0;
/**
 * This function adds demodulize support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @returns {String} Removes module names leaving only class names.(Ruby style)
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.demodulize( 'Message::Bus::Properties' ); // === 'Properties'
 */
function demodulize(str) {
    const str_arr = str.split('::');
    return str_arr[str_arr.length - 1];
}
exports.demodulize = demodulize;
exports.default = demodulize;
//# sourceMappingURL=demodulize.js.map