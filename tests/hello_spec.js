var expect = chai.expect;

describe("Hello test", function () {
    it("should be test.say() equal `hello`", function () {
        var test = {
            say: function () {
                return 'hello';
            }
        };

        expect(test.say()).be.equal('hello');
    });
});
