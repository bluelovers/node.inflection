/**
 * This function adds camelization support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @param {Boolean} low_first_letter Default is to capitalize the first letter of the results.(optional)
 *                                 Passing true will lowercase it.
 * @returns {String} Lower case underscored words will be returned in camel case.
 *                  additionally '/' is translated to '::'
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.camelize( 'message_properties' ); // === 'MessageProperties'
 *     inflection.camelize( 'message_properties', true ); // === 'messageProperties'
 */
export declare function camelize(str: string, low_first_letter?: boolean): string;
export default camelize;
