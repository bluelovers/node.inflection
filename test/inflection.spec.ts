import inflection from '../index';

describe('test .indexOf', function ()
{
	it('should return proper index key', function ()
	{
		expect(inflection.indexOf(['hi', 'there'], 'guys')).toStrictEqual(-1)
		expect(inflection.indexOf(['hi', 'there'], 'hi')).toStrictEqual(0)
	});
});

describe('test .pluralize', function ()
{
	it('should pluralize the given word', function ()
	{
		expect(inflection.pluralize('people')).toStrictEqual('people')
		expect(inflection.pluralize('men')).toStrictEqual('men')
		expect(inflection.pluralize('women')).toStrictEqual('women')
		expect(inflection.pluralize('woman')).toStrictEqual('women')
		expect(inflection.pluralize('person')).toStrictEqual('people')
		expect(inflection.pluralize('octopus')).toStrictEqual('octopi')
		expect(inflection.pluralize('human')).toStrictEqual('humans')
		expect(inflection.pluralize('aircraft')).toStrictEqual('aircraft')
		expect(inflection.pluralize('luck')).toStrictEqual('luck')
		expect(inflection.pluralize('Hat')).toStrictEqual('Hats')
		expect(inflection.pluralize('life')).toStrictEqual('lives')
		expect(inflection.pluralize('bath')).toStrictEqual('baths')
		expect(inflection.pluralize('calf')).toStrictEqual('calves')
		expect(inflection.pluralize('foot')).toStrictEqual('feet')
		expect(inflection.pluralize('book')).toStrictEqual('books')
		expect(inflection.pluralize('goose')).toStrictEqual('geese')
		expect(inflection.pluralize('tooth')).toStrictEqual('teeth')
		expect(inflection.pluralize('teeth')).toStrictEqual('teeth')
		expect(inflection.pluralize('knife')).toStrictEqual('knives')
		expect(inflection.pluralize('half')).toStrictEqual('halves')
		expect(inflection.pluralize('cave')).toStrictEqual('caves')
		expect(inflection.pluralize('save')).toStrictEqual('saves')
		expect(inflection.pluralize('street')).toStrictEqual('streets')
		expect(inflection.pluralize('streets')).toStrictEqual('streets')
		expect(inflection.pluralize('data')).toStrictEqual('data')
		expect(inflection.pluralize('meta')).toStrictEqual('meta')
		expect(inflection.pluralize('summons')).toStrictEqual('summonses')
		expect(inflection.pluralize('whereas')).toStrictEqual('whereases')
		expect(inflection.pluralize('person', 'guys')).toStrictEqual('guys')
		expect(inflection.pluralize('index')).toStrictEqual('indices')
		expect(inflection.pluralize('matrix')).toStrictEqual('matrices')
		expect(inflection.pluralize('vertex')).toStrictEqual('vertices')
		expect(inflection.pluralize('canvas')).toStrictEqual('canvases')
		expect(inflection.pluralize('campus')).toStrictEqual('campuses')
		expect(inflection.pluralize('campuses')).toStrictEqual('campuses')
		expect(inflection.pluralize('criterion')).toStrictEqual('criteria')
		expect(inflection.pluralize('criteria')).toStrictEqual('criteria')
		expect(inflection.pluralize('genus')).toStrictEqual('genera')
		expect(inflection.pluralize('genera')).toStrictEqual('genera')
	});
});

describe('test .singularize', function ()
{
	it('should singularize the given word', function ()
	{
		expect(inflection.singularize('status')).toStrictEqual('status')
		expect(inflection.singularize('child')).toStrictEqual('child')
		expect(inflection.singularize('children')).toStrictEqual('child')
		expect(inflection.singularize('address')).toStrictEqual('address')
		expect(inflection.singularize('man')).toStrictEqual('man')
		expect(inflection.singularize('woman')).toStrictEqual('woman')
		expect(inflection.singularize('women')).toStrictEqual('woman')
		expect(inflection.singularize('person')).toStrictEqual('person')
		expect(inflection.singularize('people')).toStrictEqual('person')
		expect(inflection.singularize('movies')).toStrictEqual('movie')
		expect(inflection.singularize('queries')).toStrictEqual('query')
		expect(inflection.singularize('octopi')).toStrictEqual('octopus')
		expect(inflection.singularize('Hats')).toStrictEqual('Hat')
		expect(inflection.singularize('lives')).toStrictEqual('life')
		expect(inflection.singularize('baths')).toStrictEqual('bath')
		expect(inflection.singularize('calves')).toStrictEqual('calf')
		expect(inflection.singularize('feet')).toStrictEqual('foot')
		expect(inflection.singularize('books')).toStrictEqual('book')
		expect(inflection.singularize('geese')).toStrictEqual('goose')
		expect(inflection.singularize('teeth')).toStrictEqual('tooth')
		expect(inflection.singularize('tooth')).toStrictEqual('tooth')
		expect(inflection.singularize('knives')).toStrictEqual('knife')
		expect(inflection.singularize('halves')).toStrictEqual('half')
		expect(inflection.singularize('caves')).toStrictEqual('cave')
		expect(inflection.singularize('saves')).toStrictEqual('save')
		expect(inflection.singularize('street')).toStrictEqual('street')
		expect(inflection.singularize('streets')).toStrictEqual('street')
		expect(inflection.singularize('data')).toStrictEqual('datum')
		expect(inflection.singularize('meta')).toStrictEqual('metum')
		expect(inflection.singularize('whereases')).toStrictEqual('whereas')
		expect(inflection.singularize('guys', 'person')).toStrictEqual('person')
		expect(inflection.singularize('matrices')).toStrictEqual('matrix')
		expect(inflection.singularize('vertices')).toStrictEqual('vertex')
		expect(inflection.singularize('canvases')).toStrictEqual('canvas')
		expect(inflection.singularize('campuses')).toStrictEqual('campus')
		expect(inflection.singularize('campus')).toStrictEqual('campus')
		expect(inflection.singularize('criteria')).toStrictEqual('criterion')
		expect(inflection.singularize('criterion')).toStrictEqual('criterion')
		expect(inflection.singularize('genera')).toStrictEqual('genus')
		expect(inflection.singularize('genus')).toStrictEqual('genus')
		expect(inflection.singularize('minus')).toStrictEqual('minus')

	});
});

describe('test .inflect', function ()
{
	it('should correctly inflect the given word based on an integer', function ()
	{
		// zero should use plural state
		expect(inflection.inflect('people', 0)).toStrictEqual('people')
		expect(inflection.inflect('men', 0)).toStrictEqual('men')
		expect(inflection.inflect('person', 0)).toStrictEqual('people')
		expect(inflection.inflect('octopus', 0)).toStrictEqual('octopi')
		expect(inflection.inflect('Hat', 0)).toStrictEqual('Hats')
		expect(inflection.inflect('data', 0)).toStrictEqual('data')
		expect(inflection.inflect('meta', 0)).toStrictEqual('meta')
		expect(inflection.inflect('person', 0, 'guy', 'guys')).toStrictEqual('guys')
		// greater than 1 should use plural state
		expect(inflection.inflect('people', 2)).toStrictEqual('people')
		expect(inflection.inflect('men', 2)).toStrictEqual('men')
		expect(inflection.inflect('person', 2)).toStrictEqual('people')
		expect(inflection.inflect('octopus', 2)).toStrictEqual('octopi')
		expect(inflection.inflect('Hat', 2)).toStrictEqual('Hats')
		expect(inflection.inflect('data', 2)).toStrictEqual('data')
		expect(inflection.inflect('meta', 2)).toStrictEqual('meta')
		expect(inflection.inflect('person', 2, 'guy', 'guys')).toStrictEqual('guys')
		// 1 should use singular state
		expect(inflection.inflect('status', 1)).toStrictEqual('status')
		expect(inflection.inflect('child', 1)).toStrictEqual('child')
		expect(inflection.inflect('children', 1)).toStrictEqual('child')
		expect(inflection.inflect('address', 1)).toStrictEqual('address')
		expect(inflection.inflect('person', 1)).toStrictEqual('person')
		expect(inflection.inflect('people', 1)).toStrictEqual('person')
		expect(inflection.inflect('movies', 1)).toStrictEqual('movie')
		expect(inflection.inflect('queries', 1)).toStrictEqual('query')
		expect(inflection.inflect('octopi', 1)).toStrictEqual('octopus')
		expect(inflection.inflect('Hats', 1)).toStrictEqual('Hat')
		expect(inflection.inflect('data', 1)).toStrictEqual('datum')
		expect(inflection.inflect('meta', 1)).toStrictEqual('metum')
		expect(inflection.inflect('guys', 1, 'person', 'people')).toStrictEqual('person')
		// not a number should return original value
		expect(inflection.inflect('original', 'not a number')).toStrictEqual('original')
	});
});

describe('test .camelize', function ()
{
	it('should camelize the given word', function ()
	{
		expect(inflection.camelize('message_properties')).toStrictEqual('MessageProperties')
		expect(inflection.camelize('message_properties', true)).toStrictEqual('messageProperties')
		expect(inflection.camelize('Message_Properties')).toStrictEqual('MessageProperties')
		expect(inflection.camelize('Message_Properties', true)).toStrictEqual('messageProperties')
		expect(inflection.camelize('MESSAGE_PROPERTIES')).toStrictEqual('MESSAGEProperties')
		expect(inflection.camelize('MESSAGE_PROPERTIES', true)).toStrictEqual('mESSAGEProperties')
		expect(inflection.camelize('fooBar_Baz', true)).toStrictEqual('fooBarBaz')
		expect(inflection.camelize('FooBar_Baz', true)).toStrictEqual('fooBarBaz')
		expect(inflection.camelize('fooBar_fooBaz', true)).toStrictEqual('fooBarFoobaz')
		expect(inflection.camelize('FooBar_FooBaz', true)).toStrictEqual('fooBarFoobaz')
		expect(inflection.camelize('FooBar')).toStrictEqual('FooBar')
		expect(inflection.camelize('FooBar', true)).toStrictEqual('fooBar')
		expect(inflection.camelize('Foo/Bar', true)).toStrictEqual('foo::Bar')
		expect(inflection.camelize('Foo/Bar')).toStrictEqual('Foo::Bar')
	});
});

describe('test .underscore', function ()
{
	it('should transform the given word with underscore', function ()
	{
		expect(inflection.underscore('MessageProperties')).toStrictEqual('message_properties')
		expect(inflection.underscore('messageProperties')).toStrictEqual('message_properties')
		expect(inflection.underscore('MP')).toStrictEqual('m_p')
		expect(inflection.underscore('MP', true)).toStrictEqual('MP')
	});
});

describe('test .humanize', function ()
{
	it('should humanize the given word', function ()
	{
		expect(inflection.humanize('message_properties')).toStrictEqual('Message properties')
		expect(inflection.humanize('message_properties', true)).toStrictEqual('message properties')
	});
});

describe('test .capitalize', function ()
{
	it('should capitalize the given word', function ()
	{
		expect(inflection.capitalize('message_properties')).toStrictEqual('Message_properties')
		expect(inflection.capitalize('message properties')).toStrictEqual('Message properties')
	});
});

describe('test .dasherize', function ()
{
	it('should dasherize the given word', function ()
	{
		expect(inflection.dasherize('message_properties')).toStrictEqual('message-properties')
		expect(inflection.dasherize('Message Properties')).toStrictEqual('Message-Properties')
	});
});

describe('test .titleize', function ()
{
	it('should titleize the given word', function ()
	{
		expect(inflection.titleize('message_properties')).toStrictEqual('Message Properties')
		expect(inflection.titleize('message properties to keep')).toStrictEqual('Message Properties to Keep')
	});
});

describe('test .demodulize', function ()
{
	it('should demodulize the given word', function ()
	{
		expect(inflection.demodulize('Message::Bus::Properties')).toStrictEqual('Properties')
	});
});

describe('test .tableize', function ()
{
	it('should tableize the given word', function ()
	{
		expect(inflection.tableize('people')).toStrictEqual('people')
		expect(inflection.tableize('MessageBusProperty')).toStrictEqual('message_bus_properties')
	});
});

describe('test .kebabize', function ()
{
	it('should kebabize the given word', function ()
	{
		expect(inflection.kebabize('people')).toStrictEqual('people')
		expect(inflection.kebabize('MessageBusProperty')).toStrictEqual('message-bus-property')
	});
});

describe('test .classify', function ()
{
	it('should classify the given word', function ()
	{
		expect(inflection.classify('message_bus_properties')).toStrictEqual('MessageBusProperty')
	});
});

describe('test .foreign_key', function ()
{
	it('should transform the given word to foreign_key', function ()
	{
		expect(inflection.foreign_key('MessageBusProperty')).toStrictEqual('message_bus_property_id')
		expect(inflection.foreign_key('MessageBusProperty', true)).toStrictEqual('message_bus_propertyid')
	});
});

describe('test .ordinalize', function ()
{
	it('should ordinalize the given word', function ()
	{
		expect(inflection.ordinalize('the 1 pitch')).toStrictEqual('the 1st pitch')
	});
});

describe('test .transform', function ()
{
	it('should transform the given word with given methods', function ()
	{
		expect(inflection.transform('all job', ['pluralize', 'dasherize'])).toStrictEqual('all-jobs')
		// @ts-ignore
		expect(inflection.transform('all job', ['pluralize', 'anInvalidMethod'])).toStrictEqual('all jobs')
		expect(inflection.transform('all job', ['capitalize', 'pluralize', 'dasherize'])).toStrictEqual('All-jobs')
	});
});
