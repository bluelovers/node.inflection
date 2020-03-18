/**
 * This function adds underscore support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @param {Boolean} all_upper_case Default is to lowercase and add underscore prefix.(optional)
 *                  Passing true will return as entered.
 * @returns {String} Camel cased words are returned as lower cased and underscored.
 *                  additionally '::' is translated to '/'.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.underscore( 'MessageProperties' ); // === 'message_properties'
 *     inflection.underscore( 'messageProperties' ); // === 'message_properties'
 *     inflection.underscore( 'MP', true ); // === 'MP'
 */
export declare function underscore(str: string, all_upper_case?: boolean): string;
export default underscore;
