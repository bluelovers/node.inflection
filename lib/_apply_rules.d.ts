/**
 * A helper method that applies rules based replacement to a String.
 * @private
 * @function
 * @param {String} str String to modify and return based on the passed rules.
 * @param {Array: [RegExp, String]} rules Regexp to match paired with String to use for replacement
 * @param {Array: [String]} skip Strings to skip if they match
 * @param {String} override String to return as though this method succeeded (used to conform to APIs)
 * @returns {String} Return passed String modified by passed rules.
 * @example
 *
 *     this._apply_rules( 'cows', singular_rules ); // === 'cow'
 */
export declare function _apply_rules(str: string, rules: [RegExp, string?][], skip: string[], override: string): string;
export default _apply_rules;
