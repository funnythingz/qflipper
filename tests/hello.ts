/// <reference path="../definitions/jasmine.d.ts" />

describe("Hello test", function() {

    it("test.say() equals `hello`", function() {
        var test = {
            say: function(): string {
                return 'hello';
            }
        }

        expect(test.say()).toEqual('hello');
    });

});
