import { underscore } from './underscore';
import { pluralize } from './pluralize';
import _apply_rules from './lib/_apply_rules';

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
export function tableize(str: string)
{
	str = underscore(str);
	str = pluralize(str);

	return str;
}

export default tableize
