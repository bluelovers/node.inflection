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
export declare function singularize(str: string, singular?: string): string;
export default singularize;
