"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
describe('test .indexOf', function () {
    it('should return proper index key', function () {
        expect(index_1.default.indexOf(['hi', 'there'], 'guys')).toStrictEqual(-1);
        expect(index_1.default.indexOf(['hi', 'there'], 'hi')).toStrictEqual(0);
    });
});
describe('test .pluralize', function () {
    it('should pluralize the given word', function () {
        expect(index_1.default.pluralize('people')).toStrictEqual('people');
        expect(index_1.default.pluralize('men')).toStrictEqual('men');
        expect(index_1.default.pluralize('women')).toStrictEqual('women');
        expect(index_1.default.pluralize('woman')).toStrictEqual('women');
        expect(index_1.default.pluralize('person')).toStrictEqual('people');
        expect(index_1.default.pluralize('octopus')).toStrictEqual('octopi');
        expect(index_1.default.pluralize('human')).toStrictEqual('humans');
        expect(index_1.default.pluralize('aircraft')).toStrictEqual('aircraft');
        expect(index_1.default.pluralize('luck')).toStrictEqual('luck');
        expect(index_1.default.pluralize('Hat')).toStrictEqual('Hats');
        expect(index_1.default.pluralize('life')).toStrictEqual('lives');
        expect(index_1.default.pluralize('bath')).toStrictEqual('baths');
        expect(index_1.default.pluralize('calf')).toStrictEqual('calves');
        expect(index_1.default.pluralize('foot')).toStrictEqual('feet');
        expect(index_1.default.pluralize('book')).toStrictEqual('books');
        expect(index_1.default.pluralize('goose')).toStrictEqual('geese');
        expect(index_1.default.pluralize('tooth')).toStrictEqual('teeth');
        expect(index_1.default.pluralize('teeth')).toStrictEqual('teeth');
        expect(index_1.default.pluralize('knife')).toStrictEqual('knives');
        expect(index_1.default.pluralize('half')).toStrictEqual('halves');
        expect(index_1.default.pluralize('cave')).toStrictEqual('caves');
        expect(index_1.default.pluralize('save')).toStrictEqual('saves');
        expect(index_1.default.pluralize('street')).toStrictEqual('streets');
        expect(index_1.default.pluralize('streets')).toStrictEqual('streets');
        expect(index_1.default.pluralize('data')).toStrictEqual('data');
        expect(index_1.default.pluralize('meta')).toStrictEqual('meta');
        expect(index_1.default.pluralize('summons')).toStrictEqual('summonses');
        expect(index_1.default.pluralize('whereas')).toStrictEqual('whereases');
        expect(index_1.default.pluralize('person', 'guys')).toStrictEqual('guys');
        expect(index_1.default.pluralize('index')).toStrictEqual('indices');
        expect(index_1.default.pluralize('matrix')).toStrictEqual('matrices');
        expect(index_1.default.pluralize('vertex')).toStrictEqual('vertices');
        expect(index_1.default.pluralize('canvas')).toStrictEqual('canvases');
        expect(index_1.default.pluralize('campus')).toStrictEqual('campuses');
        expect(index_1.default.pluralize('campuses')).toStrictEqual('campuses');
        expect(index_1.default.pluralize('criterion')).toStrictEqual('criteria');
        expect(index_1.default.pluralize('criteria')).toStrictEqual('criteria');
        expect(index_1.default.pluralize('genus')).toStrictEqual('genera');
        expect(index_1.default.pluralize('genera')).toStrictEqual('genera');
    });
});
describe('test .singularize', function () {
    it('should singularize the given word', function () {
        expect(index_1.default.singularize('status')).toStrictEqual('status');
        expect(index_1.default.singularize('child')).toStrictEqual('child');
        expect(index_1.default.singularize('children')).toStrictEqual('child');
        expect(index_1.default.singularize('address')).toStrictEqual('address');
        expect(index_1.default.singularize('man')).toStrictEqual('man');
        expect(index_1.default.singularize('woman')).toStrictEqual('woman');
        expect(index_1.default.singularize('women')).toStrictEqual('woman');
        expect(index_1.default.singularize('person')).toStrictEqual('person');
        expect(index_1.default.singularize('people')).toStrictEqual('person');
        expect(index_1.default.singularize('movies')).toStrictEqual('movie');
        expect(index_1.default.singularize('queries')).toStrictEqual('query');
        expect(index_1.default.singularize('octopi')).toStrictEqual('octopus');
        expect(index_1.default.singularize('Hats')).toStrictEqual('Hat');
        expect(index_1.default.singularize('lives')).toStrictEqual('life');
        expect(index_1.default.singularize('baths')).toStrictEqual('bath');
        expect(index_1.default.singularize('calves')).toStrictEqual('calf');
        expect(index_1.default.singularize('feet')).toStrictEqual('foot');
        expect(index_1.default.singularize('books')).toStrictEqual('book');
        expect(index_1.default.singularize('geese')).toStrictEqual('goose');
        expect(index_1.default.singularize('teeth')).toStrictEqual('tooth');
        expect(index_1.default.singularize('tooth')).toStrictEqual('tooth');
        expect(index_1.default.singularize('knives')).toStrictEqual('knife');
        expect(index_1.default.singularize('halves')).toStrictEqual('half');
        expect(index_1.default.singularize('caves')).toStrictEqual('cave');
        expect(index_1.default.singularize('saves')).toStrictEqual('save');
        expect(index_1.default.singularize('street')).toStrictEqual('street');
        expect(index_1.default.singularize('streets')).toStrictEqual('street');
        expect(index_1.default.singularize('data')).toStrictEqual('datum');
        expect(index_1.default.singularize('meta')).toStrictEqual('metum');
        expect(index_1.default.singularize('whereases')).toStrictEqual('whereas');
        expect(index_1.default.singularize('guys', 'person')).toStrictEqual('person');
        expect(index_1.default.singularize('matrices')).toStrictEqual('matrix');
        expect(index_1.default.singularize('vertices')).toStrictEqual('vertex');
        expect(index_1.default.singularize('canvases')).toStrictEqual('canvas');
        expect(index_1.default.singularize('campuses')).toStrictEqual('campus');
        expect(index_1.default.singularize('campus')).toStrictEqual('campus');
        expect(index_1.default.singularize('criteria')).toStrictEqual('criterion');
        expect(index_1.default.singularize('criterion')).toStrictEqual('criterion');
        expect(index_1.default.singularize('genera')).toStrictEqual('genus');
        expect(index_1.default.singularize('genus')).toStrictEqual('genus');
        expect(index_1.default.singularize('minus')).toStrictEqual('minus');
    });
});
describe('test .inflect', function () {
    it('should correctly inflect the given word based on an integer', function () {
        // zero should use plural state
        expect(index_1.default.inflect('people', 0)).toStrictEqual('people');
        expect(index_1.default.inflect('men', 0)).toStrictEqual('men');
        expect(index_1.default.inflect('person', 0)).toStrictEqual('people');
        expect(index_1.default.inflect('octopus', 0)).toStrictEqual('octopi');
        expect(index_1.default.inflect('Hat', 0)).toStrictEqual('Hats');
        expect(index_1.default.inflect('data', 0)).toStrictEqual('data');
        expect(index_1.default.inflect('meta', 0)).toStrictEqual('meta');
        expect(index_1.default.inflect('person', 0, 'guy', 'guys')).toStrictEqual('guys');
        // greater than 1 should use plural state
        expect(index_1.default.inflect('people', 2)).toStrictEqual('people');
        expect(index_1.default.inflect('men', 2)).toStrictEqual('men');
        expect(index_1.default.inflect('person', 2)).toStrictEqual('people');
        expect(index_1.default.inflect('octopus', 2)).toStrictEqual('octopi');
        expect(index_1.default.inflect('Hat', 2)).toStrictEqual('Hats');
        expect(index_1.default.inflect('data', 2)).toStrictEqual('data');
        expect(index_1.default.inflect('meta', 2)).toStrictEqual('meta');
        expect(index_1.default.inflect('person', 2, 'guy', 'guys')).toStrictEqual('guys');
        // 1 should use singular state
        expect(index_1.default.inflect('status', 1)).toStrictEqual('status');
        expect(index_1.default.inflect('child', 1)).toStrictEqual('child');
        expect(index_1.default.inflect('children', 1)).toStrictEqual('child');
        expect(index_1.default.inflect('address', 1)).toStrictEqual('address');
        expect(index_1.default.inflect('person', 1)).toStrictEqual('person');
        expect(index_1.default.inflect('people', 1)).toStrictEqual('person');
        expect(index_1.default.inflect('movies', 1)).toStrictEqual('movie');
        expect(index_1.default.inflect('queries', 1)).toStrictEqual('query');
        expect(index_1.default.inflect('octopi', 1)).toStrictEqual('octopus');
        expect(index_1.default.inflect('Hats', 1)).toStrictEqual('Hat');
        expect(index_1.default.inflect('data', 1)).toStrictEqual('datum');
        expect(index_1.default.inflect('meta', 1)).toStrictEqual('metum');
        expect(index_1.default.inflect('guys', 1, 'person', 'people')).toStrictEqual('person');
        // not a number should return original value
        expect(index_1.default.inflect('original', 'not a number')).toStrictEqual('original');
    });
});
describe('test .camelize', function () {
    it('should camelize the given word', function () {
        expect(index_1.default.camelize('message_properties')).toStrictEqual('MessageProperties');
        expect(index_1.default.camelize('message_properties', true)).toStrictEqual('messageProperties');
        expect(index_1.default.camelize('Message_Properties')).toStrictEqual('MessageProperties');
        expect(index_1.default.camelize('Message_Properties', true)).toStrictEqual('messageProperties');
        expect(index_1.default.camelize('MESSAGE_PROPERTIES')).toStrictEqual('MESSAGEProperties');
        expect(index_1.default.camelize('MESSAGE_PROPERTIES', true)).toStrictEqual('mESSAGEProperties');
        expect(index_1.default.camelize('fooBar_Baz', true)).toStrictEqual('fooBarBaz');
        expect(index_1.default.camelize('FooBar_Baz', true)).toStrictEqual('fooBarBaz');
        expect(index_1.default.camelize('fooBar_fooBaz', true)).toStrictEqual('fooBarFoobaz');
        expect(index_1.default.camelize('FooBar_FooBaz', true)).toStrictEqual('fooBarFoobaz');
        expect(index_1.default.camelize('FooBar')).toStrictEqual('FooBar');
        expect(index_1.default.camelize('FooBar', true)).toStrictEqual('fooBar');
        expect(index_1.default.camelize('Foo/Bar', true)).toStrictEqual('foo::Bar');
        expect(index_1.default.camelize('Foo/Bar')).toStrictEqual('Foo::Bar');
    });
});
describe('test .underscore', function () {
    it('should transform the given word with underscore', function () {
        expect(index_1.default.underscore('MessageProperties')).toStrictEqual('message_properties');
        expect(index_1.default.underscore('messageProperties')).toStrictEqual('message_properties');
        expect(index_1.default.underscore('MP')).toStrictEqual('m_p');
        expect(index_1.default.underscore('MP', true)).toStrictEqual('MP');
    });
});
describe('test .humanize', function () {
    it('should humanize the given word', function () {
        expect(index_1.default.humanize('message_properties')).toStrictEqual('Message properties');
        expect(index_1.default.humanize('message_properties', true)).toStrictEqual('message properties');
    });
});
describe('test .capitalize', function () {
    it('should capitalize the given word', function () {
        expect(index_1.default.capitalize('message_properties')).toStrictEqual('Message_properties');
        expect(index_1.default.capitalize('message properties')).toStrictEqual('Message properties');
    });
});
describe('test .dasherize', function () {
    it('should dasherize the given word', function () {
        expect(index_1.default.dasherize('message_properties')).toStrictEqual('message-properties');
        expect(index_1.default.dasherize('Message Properties')).toStrictEqual('Message-Properties');
    });
});
describe('test .titleize', function () {
    it('should titleize the given word', function () {
        expect(index_1.default.titleize('message_properties')).toStrictEqual('Message Properties');
        expect(index_1.default.titleize('message properties to keep')).toStrictEqual('Message Properties to Keep');
    });
});
describe('test .demodulize', function () {
    it('should demodulize the given word', function () {
        expect(index_1.default.demodulize('Message::Bus::Properties')).toStrictEqual('Properties');
    });
});
describe('test .tableize', function () {
    it('should tableize the given word', function () {
        expect(index_1.default.tableize('people')).toStrictEqual('people');
        expect(index_1.default.tableize('MessageBusProperty')).toStrictEqual('message_bus_properties');
    });
});
describe('test .kebabize', function () {
    it('should kebabize the given word', function () {
        expect(index_1.default.kebabize('people')).toStrictEqual('people');
        expect(index_1.default.kebabize('MessageBusProperty')).toStrictEqual('message-bus-property');
    });
});
describe('test .classify', function () {
    it('should classify the given word', function () {
        expect(index_1.default.classify('message_bus_properties')).toStrictEqual('MessageBusProperty');
    });
});
describe('test .foreign_key', function () {
    it('should transform the given word to foreign_key', function () {
        expect(index_1.default.foreign_key('MessageBusProperty')).toStrictEqual('message_bus_property_id');
        expect(index_1.default.foreign_key('MessageBusProperty', true)).toStrictEqual('message_bus_propertyid');
    });
});
describe('test .ordinalize', function () {
    it('should ordinalize the given word', function () {
        expect(index_1.default.ordinalize('the 1 pitch')).toStrictEqual('the 1st pitch');
    });
});
describe('test .transform', function () {
    it('should transform the given word with given methods', function () {
        expect(index_1.default.transform('all job', ['pluralize', 'dasherize'])).toStrictEqual('all-jobs');
        // @ts-ignore
        expect(index_1.default.transform('all job', ['pluralize', 'anInvalidMethod'])).toStrictEqual('all jobs');
        expect(index_1.default.transform('all job', ['capitalize', 'pluralize', 'dasherize'])).toStrictEqual('All-jobs');
    });
});
//# sourceMappingURL=inflection.spec.js.map