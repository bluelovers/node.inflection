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
export declare function transform(str: string, arr: (keyof typeof inflector | ((str: string, ...argv: any[]) => string) | ((str: string) => string))[]): string;
export default transform;
