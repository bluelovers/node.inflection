"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singular_rules = void 0;
const regex_1 = require("../regex");
/**
 * @description These rules translate from the plural form of a noun to its singular form.
 * @private
 */
exports.singular_rules = [
    // do not replace if its already a singular word
    [regex_1.regex.singular.man],
    [regex_1.regex.singular.person],
    [regex_1.regex.singular.child],
    [regex_1.regex.singular.ox],
    [regex_1.regex.singular.axis],
    [regex_1.regex.singular.octopus],
    [regex_1.regex.singular.alias],
    [regex_1.regex.singular.summons],
    [regex_1.regex.singular.bus],
    [regex_1.regex.singular.buffalo],
    [regex_1.regex.singular.tium],
    [regex_1.regex.singular.sis],
    [regex_1.regex.singular.ffe],
    [regex_1.regex.singular.hive],
    [regex_1.regex.singular.aeiouyy],
    [regex_1.regex.singular.x],
    [regex_1.regex.singular.matrix],
    [regex_1.regex.singular.mouse],
    [regex_1.regex.singular.foot],
    [regex_1.regex.singular.tooth],
    [regex_1.regex.singular.goose],
    [regex_1.regex.singular.quiz],
    [regex_1.regex.singular.whereas],
    [regex_1.regex.singular.criterion],
    [regex_1.regex.singular.genus],
    // original rule
    [regex_1.regex.plural.men, '$1an'],
    [regex_1.regex.plural.people, '$1rson'],
    [regex_1.regex.plural.children, '$1'],
    [regex_1.regex.plural.genera, 'genus'],
    [regex_1.regex.plural.criteria, '$1on'],
    [regex_1.regex.plural.tia, '$1um'],
    [regex_1.regex.plural.analyses, '$1$2sis'],
    [regex_1.regex.plural.hives, '$1ve'],
    [regex_1.regex.plural.curves, '$1'],
    [regex_1.regex.plural.lrves, '$1f'],
    [regex_1.regex.plural.aves, '$1ve'],
    [regex_1.regex.plural.foves, '$1fe'],
    [regex_1.regex.plural.movies, '$1ovie'],
    [regex_1.regex.plural.aeiouyies, '$1y'],
    [regex_1.regex.plural.series, '$1eries'],
    [regex_1.regex.plural.xes, '$1'],
    [regex_1.regex.plural.mice, '$1ouse'],
    [regex_1.regex.plural.buses, '$1'],
    [regex_1.regex.plural.oes, '$1'],
    [regex_1.regex.plural.shoes, '$1'],
    [regex_1.regex.plural.crises, '$1is'],
    [regex_1.regex.plural.octopi, '$1us'],
    [regex_1.regex.plural.aliases, '$1'],
    [regex_1.regex.plural.summonses, '$1'],
    [regex_1.regex.plural.oxen, '$1'],
    [regex_1.regex.plural.matrices, '$1ix'],
    [regex_1.regex.plural.vertices, '$1ex'],
    [regex_1.regex.plural.feet, 'foot'],
    [regex_1.regex.plural.teeth, 'tooth'],
    [regex_1.regex.plural.geese, 'goose'],
    [regex_1.regex.plural.quizzes, '$1'],
    [regex_1.regex.plural.whereases, '$1'],
    [regex_1.regex.plural.ss, 'ss'],
    [regex_1.regex.plural.s, ''],
];
exports.default = exports.singular_rules;
//# sourceMappingURL=singular_rules.js.map