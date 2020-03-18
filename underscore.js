"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.underscore = void 0;
const util_1 = require("./lib/util");
/**
 * This function adds underscore support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @param {Boolean} all_upper_case Default is to lowercase and add underscore prefix.(optional)
 *                  Passing true will return as entered.
 * @returns {String} Camel cased words are returned as lower cased and underscored.
 *                  additionally '::' is translated to '/'.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.underscore( 'MessageProperties' ); // === 'message_properties'
 *     inflection.underscore( 'messageProperties' ); // === 'message_properties'
 *     inflection.underscore( 'MP', true ); // === 'MP'
 */
function underscore(str, all_upper_case) {
    if (all_upper_case && str === str.toUpperCase())
        return str;
    const str_path = str.split('::');
    let i = 0;
    const j = str_path.length;
    for (; i < j; i++) {
        str_path[i] = str_path[i].replace(util_1.uppercase, '_$1');
        str_path[i] = str_path[i].replace(util_1.underbar_prefix, '');
    }
    return str_path.join('/').toLowerCase();
}
exports.underscore = underscore;
exports.default = underscore;
//# sourceMappingURL=underscore.js.map