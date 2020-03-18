import { id_suffix, underbar } from './lib/util';
import { capitalize } from './capitalize';
import _apply_rules from './lib/_apply_rules';

/**
 * This function adds humanize support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @param {Boolean} low_first_letter Default is to capitalize the first letter of the results.(optional)
 *                                 Passing true will lowercase it.
 * @returns {String} Lower case underscored words will be returned in humanized form.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.humanize( 'message_properties' ); // === 'Message properties'
 *     inflection.humanize( 'message_properties', true ); // === 'message properties'
 */
export function humanize(str: string, low_first_letter?: boolean)
{
	str = str.toLowerCase();
	str = str.replace(id_suffix, '');
	str = str.replace(underbar, ' ');

	if (!low_first_letter)
	{
		str = capitalize(str);
	}

	return str;
}

export default humanize
