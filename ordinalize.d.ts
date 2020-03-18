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
export declare function ordinalize(str: string): string;
export default ordinalize;
