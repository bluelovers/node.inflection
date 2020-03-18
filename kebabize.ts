import { underscore } from './underscore';
import dasherize from './dasherize';
import _apply_rules from './lib/_apply_rules';

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
export function kebabize(str: string)
{
	str = underscore(str);
	str = dasherize(str);

	return str;
}

export default kebabize
