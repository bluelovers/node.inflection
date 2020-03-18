"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleize = void 0;
const util_1 = require("./lib/util");
const indexOf_1 = require("./indexOf");
const capitalize_1 = require("./capitalize");
const non_titlecased_words_1 = require("./lib/non_titlecased_words");
/**
 * This function adds titleize support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @returns {String} Capitalizes words as you would for a book title.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.titleize( 'message_properties' ); // === 'Message Properties'
 *     inflection.titleize( 'message properties to keep' ); // === 'Message Properties to Keep'
 */
function titleize(str) {
    str = str.toLowerCase().replace(util_1.underbar, ' ');
    const str_arr = str.split(' ');
    let i = 0;
    const j = str_arr.length;
    let d, k, l;
    for (; i < j; i++) {
        d = str_arr[i].split('-');
        k = 0;
        l = d.length;
        for (; k < l; k++) {
            if (indexOf_1.indexOf(non_titlecased_words_1.non_titlecased_words, d[k].toLowerCase()) < 0) {
                d[k] = capitalize_1.capitalize(d[k]);
            }
        }
        str_arr[i] = d.join('-');
    }
    str = str_arr.join(' ');
    str = str.substring(0, 1).toUpperCase() + str.substring(1);
    return str;
}
exports.titleize = titleize;
exports.default = titleize;
//# sourceMappingURL=titleize.js.map