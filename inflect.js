"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inflect = void 0;
const _apply_rules_1 = require("./lib/_apply_rules");
const uncountable_words_1 = require("./lib/uncountable_words");
const plural_rules_1 = require("./lib/rules/plural_rules");
const singular_rules_1 = require("./lib/rules/singular_rules");
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
function inflect(str, count, singular, plural) {
    count = parseInt(count, 10);
    if (isNaN(count))
        return str;
    if (count === 0 || count > 1) {
        return _apply_rules_1._apply_rules(str, plural_rules_1.plural_rules, uncountable_words_1.uncountable_words, plural);
    }
    else {
        return _apply_rules_1._apply_rules(str, singular_rules_1.singular_rules, uncountable_words_1.uncountable_words, singular);
    }
}
exports.inflect = inflect;
exports.default = inflect;
//# sourceMappingURL=inflect.js.map