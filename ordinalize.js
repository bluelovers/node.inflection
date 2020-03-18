"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordinalize = void 0;
/**
 * This function adds ordinalize support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @returns {String} Return all found numbers their sequence like '22nd'.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.ordinalize( 'the 1 pitch' ); // === 'the 1st pitch'
 */
function ordinalize(str) {
    const str_arr = str.split(' ');
    let i = 0;
    const j = str_arr.length;
    for (; i < j; i++) {
        let k = parseInt(str_arr[i], 10);
        if (!isNaN(k)) {
            let ltd = str_arr[i].substring(str_arr[i].length - 2);
            let ld = str_arr[i].substring(str_arr[i].length - 1);
            let suf = 'th';
            if (ltd != '11' && ltd != '12' && ltd != '13') {
                if (ld === '1') {
                    suf = 'st';
                }
                else if (ld === '2') {
                    suf = 'nd';
                }
                else if (ld === '3') {
                    suf = 'rd';
                }
            }
            str_arr[i] += suf;
        }
    }
    return str_arr.join(' ');
}
exports.ordinalize = ordinalize;
exports.default = ordinalize;
//# sourceMappingURL=ordinalize.js.map