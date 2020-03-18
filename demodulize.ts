import _apply_rules from './lib/_apply_rules';

/**
 * This function adds demodulize support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @returns {String} Removes module names leaving only class names.(Ruby style)
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.demodulize( 'Message::Bus::Properties' ); // === 'Properties'
 */
export function demodulize(str: string)
{
	const str_arr = str.split('::');

	return str_arr[str_arr.length - 1];
}

export default demodulize
