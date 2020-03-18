import { camelize } from './camelize';
import { singularize } from './singularize';
import _apply_rules from './lib/_apply_rules';

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
export function classify(str: string)
{
	str = camelize(str);
	str = singularize(str);

	return str;
}

export default classify
