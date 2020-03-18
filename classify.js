"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classify = void 0;
const camelize_1 = require("./camelize");
const singularize_1 = require("./singularize");
/**
 * This function adds classification support to every String object.
 * @public
 * @function
 * @param {String} str The subject string.
 * @returns {String} Underscored plural nouns become the camel cased singular form.
 * @example
 *
 *     var inflection = require( 'inflection' );
 *
 *     inflection.classify( 'message_bus_properties' ); // === 'MessageBusProperty'
 */
function classify(str) {
    str = camelize_1.camelize(str);
    str = singularize_1.singularize(str);
    return str;
}
exports.classify = classify;
exports.default = classify;
//# sourceMappingURL=classify.js.map