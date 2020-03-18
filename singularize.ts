import { _apply_rules } from './lib/_apply_rules';
import { uncountable_words } from './lib/uncountable_words';
import { singular_rules } from './lib/rules/singular_rules';

/**
 * This function adds singularization support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @param {String} singular Overrides normal output with said String.(optional)
 * @returns {String} Plural English language nouns are returned in singular form.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.singularize( 'people' ); // === 'person'
 *     inflection.singularize( 'octopi' ); // === 'octopus'
 *     inflection.singularize( 'Hats' ); // === 'Hat'
 *     inflection.singularize( 'guys', 'person' ); // === 'person'
 */
export function singularize(str: string, singular?: string)
{
	return _apply_rules(str, singular_rules, uncountable_words, singular);
}

export default singularize
