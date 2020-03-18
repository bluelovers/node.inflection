/**
 * This function adds tableize support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @returns {String} Return camel cased words into their underscored plural form.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.tableize( 'MessageBusProperty' ); // === 'message_bus_properties'
 */
export declare function tableize(str: string): string;
export default tableize;
