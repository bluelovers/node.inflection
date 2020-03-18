/*!
 * inflection
 * Copyright(c) 2011 Ben Lin <ben@dreamerslab.com>
 * MIT Licensed
 *
 * @fileoverview
 * A port of inflection-js to node.js module.
 */
import dasherize from './dasherize';
import ordinalize from './ordinalize';
import indexOf from './indexOf';
import _apply_rules from './lib/_apply_rules';
import pluralize from './pluralize';
import singularize from './singularize';
import inflect from './inflect';
import camelize from './camelize';
import underscore from './underscore';
import capitalize from './capitalize';
import titleize from './titleize';
import tableize from './tableize';
import kebabize from './kebabize';
import classify from './classify';
import demodulize from './demodulize';
import humanize from './humanize';
import foreign_key from './foreign_key';
import transform from './transform';
export { _apply_rules, indexOf, pluralize, singularize, inflect, camelize, underscore, humanize, capitalize, dasherize, titleize, demodulize, tableize, kebabize, classify, foreign_key, ordinalize, transform, };
declare const _default: {
    _apply_rules: typeof _apply_rules;
    indexOf: typeof indexOf;
    pluralize: typeof pluralize;
    singularize: typeof singularize;
    inflect: typeof inflect;
    camelize: typeof camelize;
    underscore: typeof underscore;
    humanize: typeof humanize;
    capitalize: typeof capitalize;
    dasherize: typeof dasherize;
    titleize: typeof titleize;
    demodulize: typeof demodulize;
    tableize: typeof tableize;
    kebabize: typeof kebabize;
    classify: typeof classify;
    foreign_key: typeof foreign_key;
    ordinalize: typeof ordinalize;
    transform: typeof transform;
};
export default _default;
