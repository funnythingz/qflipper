/// <reference path="../definitions/mocha.d.ts" />
/// <reference path="../definitions/chai.d.ts" />

chai.should();

describe("Hello test", function() {

    it("should be test.say() equal `hello`", function() {
        var test = {
            say: function(): string {
                return 'hello';
            }
        }

        test.say().should.be.equal('hello');
    });

});
