"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dasherize = void 0;
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
const util_1 = require("./lib/util");
function dasherize(str) {
    return str.replace(util_1.space_or_underbar, '-');
}
exports.dasherize = dasherize;
exports.default = dasherize;
//# sourceMappingURL=dasherize.js.map