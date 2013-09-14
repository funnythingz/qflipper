var TYPOS;
(function (TYPOS) {
    var Age = (function () {
        function Age(count) {
            this.count = count;
        }
        return Age;
    })();
    TYPOS.Age = Age;
})(TYPOS || (TYPOS = {}));
;var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TYPOS;
(function (TYPOS) {
    var Human = (function () {
        function Human(first, last, age) {
            this.name = new TYPOS.Name(first, last);
            this.age = new TYPOS.Age(age);
        }
        Human.prototype.sayName = function () {
            return this.name;
        };

        Human.prototype.sayAge = function () {
            return this.age;
        };
        return Human;
    })();
    TYPOS.Human = Human;

    var M = (function (_super) {
        __extends(M, _super);
        function M() {
            _super.apply(this, arguments);
        }
        return M;
    })(Human);
    TYPOS.M = M;
    var F = (function (_super) {
        __extends(F, _super);
        function F() {
            _super.apply(this, arguments);
        }
        return F;
    })(Human);
    TYPOS.F = F;
})(TYPOS || (TYPOS = {}));
;var TYPOS;
(function (TYPOS) {
    var Name = (function () {
        function Name(first, last) {
            this.first = first;
            this.last = last;
        }
        return Name;
    })();
    TYPOS.Name = Name;
})(TYPOS || (TYPOS = {}));
