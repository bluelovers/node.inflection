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

export function transform(str: string, arr: (keyof typeof inflector | ((str: string, ...argv: any[]) => string) | ((str: string) => string))[])
{
	for (const method of arr)
	{
		if (typeof method === 'function')
		{
			str = method(str);
		}
		else if (inflector.hasOwnProperty(method))
		{
			str = inflector[method](str);
		}
	}

	return str;
}

export default transform
