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
export declare function demodulize(str: string): string;
export default demodulize;
