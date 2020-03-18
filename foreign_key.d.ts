/**
 * This function adds foreign key support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @param {Boolean} drop_id_ubar Default is to seperate id with an underbar at the end of the class name,
you can pass true to skip it.(optional)
 * @returns {String} Underscored plural nouns become the camel cased singular form.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.foreign_key( 'MessageBusProperty' ); // === 'message_bus_property_id'
 *     inflection.foreign_key( 'MessageBusProperty', true ); // === 'message_bus_propertyid'
 */
export declare function foreign_key(str: string, drop_id_ubar?: boolean): string;
export default foreign_key;
