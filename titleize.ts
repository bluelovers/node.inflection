import { underbar } from './lib/util';
import { indexOf } from './indexOf';
import { capitalize } from './capitalize';
import _apply_rules from './lib/_apply_rules';
import { non_titlecased_words } from './lib/non_titlecased_words';

/**
 * This function adds titleize support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @returns {String} Capitalizes words as you would for a book title.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.titleize( 'message_properties' ); // === 'Message Properties'
 *     inflection.titleize( 'message properties to keep' ); // === 'Message Properties to Keep'
 */
export function titleize(str: string)
{
	str = str.toLowerCase().replace(underbar, ' ');
	const str_arr = str.split(' ');
	let i = 0;
	const j = str_arr.length;
	let d, k, l;

	for (; i < j; i++)
	{
		d = str_arr[i].split('-');
		k = 0;
		l = d.length;

		for (; k < l; k++)
		{
			if (indexOf(non_titlecased_words, d[k].toLowerCase()) < 0)
			{
				d[k] = capitalize(d[k]);
			}
		}

		str_arr[i] = d.join('-');
	}

	str = str_arr.join(' ');
	str = str.substring(0, 1).toUpperCase() + str.substring(1);

	return str;
}

export default titleize
