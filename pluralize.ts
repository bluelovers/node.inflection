import { _apply_rules } from './lib/_apply_rules';
import { plural_rules, uncountable_words } from './lib/util';

/**
 * This function adds pluralization support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @param {String} plural Overrides normal output with said String.(optional)
 * @returns {String} Singular English language nouns are returned in plural form.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.pluralize( 'person' ); // === 'people'
 *     inflection.pluralize( 'octopus' ); // === 'octopi'
 *     inflection.pluralize( 'Hat' ); // === 'Hats'
 *     inflection.pluralize( 'person', 'guys' ); // === 'guys'
 */
export function pluralize(str: string, plural?: string)
{
	return _apply_rules(str, plural_rules, uncountable_words, plural);
}

export default pluralize
