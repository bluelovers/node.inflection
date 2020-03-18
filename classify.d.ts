/**
 * This function adds classification support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @returns {String} Underscored plural nouns become the camel cased singular form.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.classify( 'message_bus_properties' ); // === 'MessageBusProperty'
 */
export declare function classify(str: string): string;
export default classify;
