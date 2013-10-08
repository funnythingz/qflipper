describe("Hello test", function () {
    it("test.say() equals `hello`", function () {
        var test = {
            say: function () {
                return 'hello';
            }
        };

        expect(test.say()).toEqual('hello');
    });
});
