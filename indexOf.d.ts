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
export declare function indexOf<T, S = T>(arr: T[], item: S | any, from_index?: number, compare_func?: (value: T, item: S) => boolean): number;
export default indexOf;
