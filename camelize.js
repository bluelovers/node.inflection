"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelize = void 0;
/**
 * This function adds camelization support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @param {Boolean} low_first_letter Default is to capitalize the first letter of the results.(optional)
 *                                 Passing true will lowercase it.
 * @returns {String} Lower case underscored words will be returned in camel case.
 *                  additionally '/' is translated to '::'
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.camelize( 'message_properties' ); // === 'MessageProperties'
 *     inflection.camelize( 'message_properties', true ); // === 'messageProperties'
 */
function camelize(str, low_first_letter) {
    const str_path = str.split('/');
    let i = 0;
    const j = str_path.length;
    let str_arr, init_x, k, l, first;
    for (; i < j; i++) {
        str_arr = str_path[i].split('_');
        k = 0;
        l = str_arr.length;
        for (; k < l; k++) {
            if (k !== 0) {
                str_arr[k] = str_arr[k].toLowerCase();
            }
            first = str_arr[k].charAt(0);
            first = low_first_letter && i === 0 && k === 0
                ? first.toLowerCase() : first.toUpperCase();
            str_arr[k] = first + str_arr[k].substring(1);
        }
        str_path[i] = str_arr.join('');
    }
    return str_path.join('::');
}
exports.camelize = camelize;
exports.default = camelize;
//# sourceMappingURL=camelize.js.map