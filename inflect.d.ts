/**
 * This function will pluralize or singularlize a String appropriately based on an integer value
 * @public
 * @function
 * @param {String} str The subject string.
 * @param {Number} count The number to base pluralization off of.
 * @param {String} singular Overrides normal output with said String.(optional)
 * @param {String} plural Overrides normal output with said String.(optional)
 * @returns {String} English language nouns are returned in the plural or singular form based on the count.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.inflect( 'people' 1 ); // === 'person'
 *     inflection.inflect( 'octopi' 1 ); // === 'octopus'
 *     inflection.inflect( 'Hats' 1 ); // === 'Hat'
 *     inflection.inflect( 'guys', 1 , 'person' ); // === 'person'
 *     inflection.inflect( 'person', 2 ); // === 'people'
 *     inflection.inflect( 'octopus', 2 ); // === 'octopi'
 *     inflection.inflect( 'Hat', 2 ); // === 'Hats'
 *     inflection.inflect( 'person', 2, null, 'guys' ); // === 'guys'
 */
export declare function inflect(str: string, count?: number | string, singular?: string, plural?: string): string;
export default inflect;
