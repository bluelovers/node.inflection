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
export declare function pluralize(str: string, plural?: string): string;
export default pluralize;
