import _apply_rules from './lib/_apply_rules';

/**
 * This function adds ordinalize support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @returns {String} Return all found numbers their sequence like '22nd'.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.ordinalize( 'the 1 pitch' ); // === 'the 1st pitch'
 */
export function ordinalize(str: string)
{
	var str_arr = str.split(' ');
	var i = 0;
	var j = str_arr.length;

	for (; i < j; i++)
	{
		var k = parseInt(str_arr[i], 10);

		if (!isNaN(k))
		{
			var ltd = str_arr[i].substring(str_arr[i].length - 2);
			var ld = str_arr[i].substring(str_arr[i].length - 1);
			var suf = 'th';

			if (ltd != '11' && ltd != '12' && ltd != '13')
			{
				if (ld === '1')
				{
					suf = 'st';
				}
				else if (ld === '2')
				{
					suf = 'nd';
				}
				else if (ld === '3')
				{
					suf = 'rd';
				}
			}

			str_arr[i] += suf;
		}
	}

	return str_arr.join(' ');
}

export default ordinalize
