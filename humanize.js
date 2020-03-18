"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanize = void 0;
const util_1 = require("./lib/util");
const capitalize_1 = require("./capitalize");
/**
 * This function adds humanize support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @param {Boolean} low_first_letter Default is to capitalize the first letter of the results.(optional)
 *                                 Passing true will lowercase it.
 * @returns {String} Lower case underscored words will be returned in humanized form.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.humanize( 'message_properties' ); // === 'Message properties'
 *     inflection.humanize( 'message_properties', true ); // === 'message properties'
 */
function humanize(str, low_first_letter) {
    str = str.toLowerCase();
    str = str.replace(util_1.id_suffix, '');
    str = str.replace(util_1.underbar, ' ');
    if (!low_first_letter) {
        str = capitalize_1.capitalize(str);
    }
    return str;
}
exports.humanize = humanize;
exports.default = humanize;
//# sourceMappingURL=humanize.js.map