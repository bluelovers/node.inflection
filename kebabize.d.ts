/**
 * This function adds kebabize support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @returns {String} Return camel cased words into kebab-case form.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.kebabize( 'MessageBusProperty' ); // === 'message-bus-property'
 */
export declare function kebabize(str: string): string;
export default kebabize;
