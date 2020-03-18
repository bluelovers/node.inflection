/**
 * This function replaces underscores with dashes in the string.
 * @public
 * @function
 * @param {String} str The subject string.
 * @returns {String} Replaces all spaces or underscores with dashes.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.dasherize( 'message_properties' ); // === 'message-properties'
 *     inflection.dasherize( 'Message Properties' ); // === 'Message-Properties'
 */
import { space_or_underbar } from './lib/util';

export function dasherize(str: string)
{
	return str.replace(space_or_underbar, '-');
}

export default dasherize
