import { uppercase, underbar_prefix } from './lib/util';
import _apply_rules from './lib/_apply_rules';

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
export function underscore(str: string, all_upper_case?: boolean)
{
	if (all_upper_case && str === str.toUpperCase()) return str;

	var str_path = str.split('::');
	var i = 0;
	var j = str_path.length;

	for (; i < j; i++)
	{
		str_path[i] = str_path[i].replace(uppercase, '_$1');
		str_path[i] = str_path[i].replace(underbar_prefix, '');
	}

	return str_path.join('/').toLowerCase();
}

export default underscore
