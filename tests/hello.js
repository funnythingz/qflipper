chai.should();

describe("Hello test", function () {
    it("should be test.say() equal `hello`", function () {
        var test = {
            say: function () {
                return 'hello';
            }
        };

        test.say().should.be.equal('hello');
    });
});
