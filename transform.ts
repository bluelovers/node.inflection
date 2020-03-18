/**
 * This function performs multiple inflection methods on a string
 * @public
 * @function
 * @param {String} str The subject string.
 * @param {Array} arr An array of inflection methods.
 * @returns {String}
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.transform( 'all job', [ 'pluralize', 'capitalize', 'dasherize' ]); // === 'All-jobs'
 */
import inflector from './lib/inflector';

export function transform(str, arr: (keyof typeof inflector)[])
{
	let i = 0;
	const j = arr.length;

	for (; i < j; i++)
	{
		var method = arr[i];

		if (inflector.hasOwnProperty(method))
		{
			str = inflector[method](str);
		}
	}

	return str;
}

export default transform
