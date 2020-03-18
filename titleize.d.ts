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
export declare function titleize(str: string): string;
export default titleize;
