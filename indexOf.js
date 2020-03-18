"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexOf = void 0;
/**
 * This lets us detect if an Array contains a given element.
 * @public
 * @function
 * @param {Array} arr The subject array.
 * @param {Object} item Object to locate in the Array.
 * @param {Number} from_index Starts checking from this position in the Array.(optional)
 * @param {Function} compare_func Function used to compare Array item vs passed item.(optional)
 * @returns {Number} Return index position in the Array of the passed item.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.indexOf([ 'hi','there' ], 'guys' ); // === -1
 *     inflection.indexOf([ 'hi','there' ], 'hi' ); // === 0
 */
function indexOf(arr, item, from_index, compare_func) {
    if (!from_index) {
        from_index = -1;
    }
    let index = -1;
    let i = from_index;
    const j = arr.length;
    for (; i < j; i++) {
        if (arr[i] === item || compare_func && compare_func(arr[i], item)) {
            index = i;
            break;
        }
    }
    return index;
}
exports.indexOf = indexOf;
exports.default = indexOf;
//# sourceMappingURL=indexOf.js.map