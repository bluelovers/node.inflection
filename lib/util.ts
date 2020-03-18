/**
 * @description These are regular expressions used for converting between String formats.
 * @private
 */
export const id_suffix = new RegExp('(_ids|_id)$', 'g');
export const underbar = new RegExp('_', 'g');
export const space_or_underbar = new RegExp('[\ _]', 'g');
export const uppercase = new RegExp('([A-Z])', 'g');
export const underbar_prefix = new RegExp('^_');
