/// <reference path="../definitions/fixtures.d.ts" />
/// <reference path="../definitions/mocha.d.ts" />
/// <reference path="../definitions/chai.d.ts" />

var expect = chai.expect;

describe("Hello test", function() {

    it("should be test.say() equal `hello`", function() {

        var test = {
            say: function(): string {
                return 'hello';
            }
        }

        expect(test.say()).be.equal('hello');
    });

});
