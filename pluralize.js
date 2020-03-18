"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluralize = void 0;
const _apply_rules_1 = require("./lib/_apply_rules");
const uncountable_words_1 = require("./lib/uncountable_words");
const plural_rules_1 = require("./lib/rules/plural_rules");
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
function pluralize(str, plural) {
    return _apply_rules_1._apply_rules(str, plural_rules_1.plural_rules, uncountable_words_1.uncountable_words, plural);
}
exports.pluralize = pluralize;
exports.default = pluralize;
//# sourceMappingURL=pluralize.js.map