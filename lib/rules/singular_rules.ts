import { regex } from '../regex';

/**
 * @description These rules translate from the plural form of a noun to its singular form.
 * @private
 */
export const singular_rules = [

	// do not replace if its already a singular word
	[regex.singular.man],
	[regex.singular.person],
	[regex.singular.child],
	[regex.singular.ox],
	[regex.singular.axis],
	[regex.singular.octopus],
	[regex.singular.alias],
	[regex.singular.summons],
	[regex.singular.bus],
	[regex.singular.buffalo],
	[regex.singular.tium],
	[regex.singular.sis],
	[regex.singular.ffe],
	[regex.singular.hive],
	[regex.singular.aeiouyy],
	[regex.singular.x],
	[regex.singular.matrix],
	[regex.singular.mouse],
	[regex.singular.foot],
	[regex.singular.tooth],
	[regex.singular.goose],
	[regex.singular.quiz],
	[regex.singular.whereas],
	[regex.singular.criterion],
	[regex.singular.genus],

	// original rule
	[regex.plural.men, '$1an'],
	[regex.plural.people, '$1rson'],
	[regex.plural.children, '$1'],
	[regex.plural.genera, 'genus'],
	[regex.plural.criteria, '$1on'],
	[regex.plural.tia, '$1um'],
	[regex.plural.analyses, '$1$2sis'],
	[regex.plural.hives, '$1ve'],
	[regex.plural.curves, '$1'],
	[regex.plural.lrves, '$1f'],
	[regex.plural.aves, '$1ve'],
	[regex.plural.foves, '$1fe'],
	[regex.plural.movies, '$1ovie'],
	[regex.plural.aeiouyies, '$1y'],
	[regex.plural.series, '$1eries'],
	[regex.plural.xes, '$1'],
	[regex.plural.mice, '$1ouse'],
	[regex.plural.buses, '$1'],
	[regex.plural.oes, '$1'],
	[regex.plural.shoes, '$1'],
	[regex.plural.crises, '$1is'],
	[regex.plural.octopi, '$1us'],
	[regex.plural.aliases, '$1'],
	[regex.plural.summonses, '$1'],
	[regex.plural.oxen, '$1'],
	[regex.plural.matrices, '$1ix'],
	[regex.plural.vertices, '$1ex'],
	[regex.plural.feet, 'foot'],
	[regex.plural.teeth, 'tooth'],
	[regex.plural.geese, 'goose'],
	[regex.plural.quizzes, '$1'],
	[regex.plural.whereases, '$1'],

	[regex.plural.ss, 'ss'],
	[regex.plural.s, ''],
] as [RegExp, string?][];

export default singular_rules
