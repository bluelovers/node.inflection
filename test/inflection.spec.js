"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
describe('test .indexOf', function () {
    it('should return proper index key', function () {
        let actual;
        actual = index_1.default.indexOf(['hi', 'there'], 'guys');
        expect(actual).toStrictEqual(-1);
        expect(actual).toMatchSnapshot();
        actual = index_1.default.indexOf(['hi', 'there'], 'hi');
        expect(actual).toStrictEqual(0);
        expect(actual).toMatchSnapshot();
    });
});
describe('test .pluralize', function () {
    it('should pluralize the given word', function () {
        let actual;
        actual = index_1.default.pluralize('people');
        expect(actual).toStrictEqual('people');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('men');
        expect(actual).toStrictEqual('men');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('women');
        expect(actual).toStrictEqual('women');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('woman');
        expect(actual).toStrictEqual('women');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('person');
        expect(actual).toStrictEqual('people');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('octopus');
        expect(actual).toStrictEqual('octopi');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('human');
        expect(actual).toStrictEqual('humans');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('aircraft');
        expect(actual).toStrictEqual('aircraft');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('luck');
        expect(actual).toStrictEqual('luck');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('Hat');
        expect(actual).toStrictEqual('Hats');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('life');
        expect(actual).toStrictEqual('lives');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('bath');
        expect(actual).toStrictEqual('baths');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('calf');
        expect(actual).toStrictEqual('calves');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('foot');
        expect(actual).toStrictEqual('feet');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('book');
        expect(actual).toStrictEqual('books');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('goose');
        expect(actual).toStrictEqual('geese');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('tooth');
        expect(actual).toStrictEqual('teeth');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('teeth');
        expect(actual).toStrictEqual('teeth');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('knife');
        expect(actual).toStrictEqual('knives');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('half');
        expect(actual).toStrictEqual('halves');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('cave');
        expect(actual).toStrictEqual('caves');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('save');
        expect(actual).toStrictEqual('saves');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('street');
        expect(actual).toStrictEqual('streets');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('streets');
        expect(actual).toStrictEqual('streets');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('data');
        expect(actual).toStrictEqual('data');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('meta');
        expect(actual).toStrictEqual('meta');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('summons');
        expect(actual).toStrictEqual('summonses');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('whereas');
        expect(actual).toStrictEqual('whereases');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('person', 'guys');
        expect(actual).toStrictEqual('guys');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('index');
        expect(actual).toStrictEqual('indices');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('matrix');
        expect(actual).toStrictEqual('matrices');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('vertex');
        expect(actual).toStrictEqual('vertices');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('canvas');
        expect(actual).toStrictEqual('canvases');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('campus');
        expect(actual).toStrictEqual('campuses');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('campuses');
        expect(actual).toStrictEqual('campuses');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('criterion');
        expect(actual).toStrictEqual('criteria');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('criteria');
        expect(actual).toStrictEqual('criteria');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('genus');
        expect(actual).toStrictEqual('genera');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.pluralize('genera');
        expect(actual).toStrictEqual('genera');
        expect(actual).toMatchSnapshot();
    });
});
describe('test .singularize', function () {
    it('should singularize the given word', function () {
        let actual;
        actual = index_1.default.singularize('status');
        expect(actual).toStrictEqual('status');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('child');
        expect(actual).toStrictEqual('child');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('children');
        expect(actual).toStrictEqual('child');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('address');
        expect(actual).toStrictEqual('address');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('man');
        expect(actual).toStrictEqual('man');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('woman');
        expect(actual).toStrictEqual('woman');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('women');
        expect(actual).toStrictEqual('woman');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('person');
        expect(actual).toStrictEqual('person');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('people');
        expect(actual).toStrictEqual('person');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('movies');
        expect(actual).toStrictEqual('movie');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('queries');
        expect(actual).toStrictEqual('query');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('octopi');
        expect(actual).toStrictEqual('octopus');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('Hats');
        expect(actual).toStrictEqual('Hat');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('lives');
        expect(actual).toStrictEqual('life');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('baths');
        expect(actual).toStrictEqual('bath');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('calves');
        expect(actual).toStrictEqual('calf');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('feet');
        expect(actual).toStrictEqual('foot');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('books');
        expect(actual).toStrictEqual('book');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('geese');
        expect(actual).toStrictEqual('goose');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('teeth');
        expect(actual).toStrictEqual('tooth');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('tooth');
        expect(actual).toStrictEqual('tooth');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('knives');
        expect(actual).toStrictEqual('knife');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('halves');
        expect(actual).toStrictEqual('half');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('caves');
        expect(actual).toStrictEqual('cave');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('saves');
        expect(actual).toStrictEqual('save');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('street');
        expect(actual).toStrictEqual('street');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('streets');
        expect(actual).toStrictEqual('street');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('data');
        expect(actual).toStrictEqual('datum');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('meta');
        expect(actual).toStrictEqual('metum');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('whereases');
        expect(actual).toStrictEqual('whereas');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('guys', 'person');
        expect(actual).toStrictEqual('person');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('matrices');
        expect(actual).toStrictEqual('matrix');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('vertices');
        expect(actual).toStrictEqual('vertex');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('canvases');
        expect(actual).toStrictEqual('canvas');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('campuses');
        expect(actual).toStrictEqual('campus');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('campus');
        expect(actual).toStrictEqual('campus');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('criteria');
        expect(actual).toStrictEqual('criterion');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('criterion');
        expect(actual).toStrictEqual('criterion');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('genera');
        expect(actual).toStrictEqual('genus');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('genus');
        expect(actual).toStrictEqual('genus');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.singularize('minus');
        expect(actual).toStrictEqual('minus');
        expect(actual).toMatchSnapshot();
    });
});
describe('test .inflect', function () {
    it('should correctly inflect the given word based on an integer', function () {
        let actual;
        // zero should use plural state
        actual = index_1.default.inflect('people', 0);
        expect(actual).toStrictEqual('people');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('men', 0);
        expect(actual).toStrictEqual('men');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('person', 0);
        expect(actual).toStrictEqual('people');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('octopus', 0);
        expect(actual).toStrictEqual('octopi');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('Hat', 0);
        expect(actual).toStrictEqual('Hats');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('data', 0);
        expect(actual).toStrictEqual('data');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('meta', 0);
        expect(actual).toStrictEqual('meta');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('person', 0, 'guy', 'guys');
        expect(actual).toStrictEqual('guys');
        expect(actual).toMatchSnapshot();
        // greater than 1 should use plural state
        actual = index_1.default.inflect('people', 2);
        expect(actual).toStrictEqual('people');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('men', 2);
        expect(actual).toStrictEqual('men');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('person', 2);
        expect(actual).toStrictEqual('people');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('octopus', 2);
        expect(actual).toStrictEqual('octopi');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('Hat', 2);
        expect(actual).toStrictEqual('Hats');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('data', 2);
        expect(actual).toStrictEqual('data');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('meta', 2);
        expect(actual).toStrictEqual('meta');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('person', 2, 'guy', 'guys');
        expect(actual).toStrictEqual('guys');
        expect(actual).toMatchSnapshot();
        // 1 should use singular state
        actual = index_1.default.inflect('status', 1);
        expect(actual).toStrictEqual('status');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('child', 1);
        expect(actual).toStrictEqual('child');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('children', 1);
        expect(actual).toStrictEqual('child');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('address', 1);
        expect(actual).toStrictEqual('address');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('person', 1);
        expect(actual).toStrictEqual('person');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('people', 1);
        expect(actual).toStrictEqual('person');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('movies', 1);
        expect(actual).toStrictEqual('movie');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('queries', 1);
        expect(actual).toStrictEqual('query');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('octopi', 1);
        expect(actual).toStrictEqual('octopus');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('Hats', 1);
        expect(actual).toStrictEqual('Hat');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('data', 1);
        expect(actual).toStrictEqual('datum');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('meta', 1);
        expect(actual).toStrictEqual('metum');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.inflect('guys', 1, 'person', 'people');
        expect(actual).toStrictEqual('person');
        expect(actual).toMatchSnapshot();
        // not a number should return original value
        actual = index_1.default.inflect('original', 'not a number');
        expect(actual).toStrictEqual('original');
        expect(actual).toMatchSnapshot();
    });
});
describe('test .camelize', function () {
    it('should camelize the given word', function () {
        let actual;
        actual = index_1.default.camelize('message_properties');
        expect(actual).toStrictEqual('MessageProperties');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.camelize('message_properties', true);
        expect(actual).toStrictEqual('messageProperties');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.camelize('Message_Properties');
        expect(actual).toStrictEqual('MessageProperties');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.camelize('Message_Properties', true);
        expect(actual).toStrictEqual('messageProperties');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.camelize('MESSAGE_PROPERTIES');
        expect(actual).toStrictEqual('MESSAGEProperties');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.camelize('MESSAGE_PROPERTIES', true);
        expect(actual).toStrictEqual('mESSAGEProperties');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.camelize('fooBar_Baz', true);
        expect(actual).toStrictEqual('fooBarBaz');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.camelize('FooBar_Baz', true);
        expect(actual).toStrictEqual('fooBarBaz');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.camelize('fooBar_fooBaz', true);
        expect(actual).toStrictEqual('fooBarFoobaz');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.camelize('FooBar_FooBaz', true);
        expect(actual).toStrictEqual('fooBarFoobaz');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.camelize('FooBar');
        expect(actual).toStrictEqual('FooBar');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.camelize('FooBar', true);
        expect(actual).toStrictEqual('fooBar');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.camelize('Foo/Bar', true);
        expect(actual).toStrictEqual('foo::Bar');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.camelize('Foo/Bar');
        expect(actual).toStrictEqual('Foo::Bar');
        expect(actual).toMatchSnapshot();
    });
});
describe('test .underscore', function () {
    it('should transform the given word with underscore', function () {
        let actual;
        actual = index_1.default.underscore('MessageProperties');
        expect(actual).toStrictEqual('message_properties');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.underscore('messageProperties');
        expect(actual).toStrictEqual('message_properties');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.underscore('MP');
        expect(actual).toStrictEqual('m_p');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.underscore('MP', true);
        expect(actual).toStrictEqual('MP');
        expect(actual).toMatchSnapshot();
    });
});
describe('test .humanize', function () {
    it('should humanize the given word', function () {
        let actual;
        actual = index_1.default.humanize('message_properties');
        expect(actual).toStrictEqual('Message properties');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.humanize('message_properties', true);
        expect(actual).toStrictEqual('message properties');
        expect(actual).toMatchSnapshot();
    });
});
describe('test .capitalize', function () {
    it('should capitalize the given word', function () {
        let actual;
        actual = index_1.default.capitalize('message_properties');
        expect(actual).toStrictEqual('Message_properties');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.capitalize('message properties');
        expect(actual).toStrictEqual('Message properties');
        expect(actual).toMatchSnapshot();
    });
});
describe('test .dasherize', function () {
    it('should dasherize the given word', function () {
        let actual;
        actual = index_1.default.dasherize('message_properties');
        expect(actual).toStrictEqual('message-properties');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.dasherize('Message Properties');
        expect(actual).toStrictEqual('Message-Properties');
        expect(actual).toMatchSnapshot();
    });
});
describe('test .titleize', function () {
    it('should titleize the given word', function () {
        let actual;
        actual = index_1.default.titleize('message_properties');
        expect(actual).toStrictEqual('Message Properties');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.titleize('message properties to keep');
        expect(actual).toStrictEqual('Message Properties to Keep');
        expect(actual).toMatchSnapshot();
    });
});
describe('test .demodulize', function () {
    it('should demodulize the given word', function () {
        let actual;
        actual = index_1.default.demodulize('Message::Bus::Properties');
        expect(actual).toStrictEqual('Properties');
        expect(actual).toMatchSnapshot();
    });
});
describe('test .tableize', function () {
    it('should tableize the given word', function () {
        let actual;
        actual = index_1.default.tableize('people');
        expect(actual).toStrictEqual('people');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.tableize('MessageBusProperty');
        expect(actual).toStrictEqual('message_bus_properties');
        expect(actual).toMatchSnapshot();
    });
});
describe('test .kebabize', function () {
    it('should kebabize the given word', function () {
        let actual;
        actual = index_1.default.kebabize('people');
        expect(actual).toStrictEqual('people');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.kebabize('MessageBusProperty');
        expect(actual).toStrictEqual('message-bus-property');
        expect(actual).toMatchSnapshot();
    });
});
describe('test .classify', function () {
    it('should classify the given word', function () {
        let actual;
        actual = index_1.default.classify('message_bus_properties');
        expect(actual).toStrictEqual('MessageBusProperty');
        expect(actual).toMatchSnapshot();
    });
});
describe('test .foreign_key', function () {
    it('should transform the given word to foreign_key', function () {
        let actual;
        actual = index_1.default.foreign_key('MessageBusProperty');
        expect(actual).toStrictEqual('message_bus_property_id');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.foreign_key('MessageBusProperty', true);
        expect(actual).toStrictEqual('message_bus_propertyid');
        expect(actual).toMatchSnapshot();
    });
});
describe('test .ordinalize', function () {
    it('should ordinalize the given word', function () {
        let actual;
        actual = index_1.default.ordinalize('the 1 pitch');
        expect(actual).toStrictEqual('the 1st pitch');
        expect(actual).toMatchSnapshot();
    });
});
describe('test .transform', function () {
    it('should transform the given word with given methods', function () {
        let actual;
        actual = index_1.default.transform('all job', ['pluralize', 'dasherize']);
        expect(actual).toStrictEqual('all-jobs');
        expect(actual).toMatchSnapshot();
        // @ts-ignore
        actual = index_1.default.transform('all job', ['pluralize', 'anInvalidMethod']);
        expect(actual).toStrictEqual('all jobs');
        expect(actual).toMatchSnapshot();
        actual = index_1.default.transform('all job', ['capitalize', 'pluralize', 'dasherize']);
        expect(actual).toStrictEqual('All-jobs');
        expect(actual).toMatchSnapshot();
    });
    it('transform allow use function in methods', function () {
        let actual;
        actual = index_1.default.transform('all job', ['capitalize', 'pluralize', 'dasherize', (s) => s + '99']);
        expect(actual).toStrictEqual('All-jobs99');
        expect(actual).toMatchSnapshot();
    });
});
//# sourceMappingURL=inflection.spec.js.map