"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singularize = void 0;
const _apply_rules_1 = require("./lib/_apply_rules");
const uncountable_words_1 = require("./lib/uncountable_words");
const singular_rules_1 = require("./lib/rules/singular_rules");
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
function singularize(str, singular) {
    return _apply_rules_1._apply_rules(str, singular_rules_1.singular_rules, uncountable_words_1.uncountable_words, singular);
}
exports.singularize = singularize;
exports.default = singularize;
//# sourceMappingURL=singularize.js.map