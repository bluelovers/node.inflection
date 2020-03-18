"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.underbar_prefix = exports.uppercase = exports.space_or_underbar = exports.underbar = exports.id_suffix = void 0;
/**
 * @description These are regular expressions used for converting between String formats.
 * @private
 */
exports.id_suffix = new RegExp('(_ids|_id)$', 'g');
exports.underbar = new RegExp('_', 'g');
exports.space_or_underbar = new RegExp('[\ _]', 'g');
exports.uppercase = new RegExp('([A-Z])', 'g');
exports.underbar_prefix = new RegExp('^_');
//# sourceMappingURL=util.js.map