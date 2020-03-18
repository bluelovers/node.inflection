"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foreign_key = void 0;
const demodulize_1 = require("./demodulize");
const underscore_1 = require("./underscore");
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
function foreign_key(str, drop_id_ubar) {
    str = demodulize_1.demodulize(str);
    str = underscore_1.underscore(str) + ((drop_id_ubar) ? ('') : ('_')) + 'id';
    return str;
}
exports.foreign_key = foreign_key;
exports.default = foreign_key;
//# sourceMappingURL=foreign_key.js.map