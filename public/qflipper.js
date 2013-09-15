var Q;
(function (Q) {
    (function (FlipTypeEnum) {
        FlipTypeEnum[FlipTypeEnum["Simple"] = 0] = "Simple";
        FlipTypeEnum[FlipTypeEnum["Rich"] = 1] = "Rich";
    })(Q.FlipTypeEnum || (Q.FlipTypeEnum = {}));
    var FlipTypeEnum = Q.FlipTypeEnum;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    (function (StartEnum) {
        StartEnum[StartEnum["Success"] = 0] = "Success";
        StartEnum[StartEnum["Failure"] = 1] = "Failure";
    })(Q.StartEnum || (Q.StartEnum = {}));
    var StartEnum = Q.StartEnum;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Flip = (function () {
        function Flip(elm) {
            this.point = new Q.Point();
            this.$el = elm;
        }
        Flip.prototype.refresh = function () {
            this.point.setPoint(0);
        };

        Flip.prototype.toNext = function () {
            if (this.hasNext()) {
                this.point.setPoint(this.point.getNow() + 1);
            }
        };

        Flip.prototype.toPrev = function () {
            if (this.hasPrev()) {
                this.point.setPoint(this.point.getNow() - 1);
            }
        };

        Flip.prototype.moveToPoint = function (point) {
            this.point.setPoint(point);
        };

        Flip.prototype.hasNext = function () {
            if (this.point.getNow() < this.point.getMax()) {
                return true;
            }
            return false;
        };

        Flip.prototype.hasPrev = function () {
            if (0 < this.point.getNow() && this.point.getNow() <= this.point.getMax()) {
                return true;
            }
            return false;
        };
        return Flip;
    })();
    Q.Flip = Flip;
})(Q || (Q = {}));
;var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Q;
(function (Q) {
    var RichFlip = (function (_super) {
        __extends(RichFlip, _super);
        function RichFlip(elm) {
            _super.call(this, elm);
        }
        return RichFlip;
    })(Q.Flip);
    Q.RichFlip = RichFlip;
})(Q || (Q = {}));
;var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Q;
(function (Q) {
    var SimpleFlip = (function (_super) {
        __extends(SimpleFlip, _super);
        function SimpleFlip(elm) {
            _super.call(this, elm);
        }
        return SimpleFlip;
    })(Q.Flip);
    Q.SimpleFlip = SimpleFlip;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var RichFlipFactory = (function () {
        function RichFlipFactory(elm) {
            return new Q.RichFlip(elm);
        }
        return RichFlipFactory;
    })();
    Q.RichFlipFactory = RichFlipFactory;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var SimpleFlipFactory = (function () {
        function SimpleFlipFactory(elm) {
            return new Q.SimpleFlip(elm);
        }
        return SimpleFlipFactory;
    })();
    Q.SimpleFlipFactory = SimpleFlipFactory;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var FlipCollection = (function () {
        function FlipCollection(elm, type) {
            if (type === Q.FlipTypeEnum.Simple) {
                return new Q.SimpleFlipFactory(elm);
            }
            if (type === Q.FlipTypeEnum.Rich) {
                return new Q.RichFlipFactory(elm);
            }
        }
        return FlipCollection;
    })();
    Q.FlipCollection = FlipCollection;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Flipper = (function () {
        function Flipper() {
            this.startEnum = Q.StartEnum.Failure;
            this.flipTypeEnum = Q.FlipTypeEnum.Simple;
        }
        Flipper.prototype.start = function (id, option) {
            this.flipCollection = new Q.FlipCollection($(id), this.checkFlipType(option.type));
            this.startEnum = Q.StartEnum.Success;
            console.log(this.flipCollection);
            this.refresh();
        };

        Flipper.prototype.refresh = function () {
            if (this.checkStart()) {
                this.flipCollection.refresh();
            }
        };

        Flipper.prototype.toNext = function () {
            if (this.checkStart()) {
                this.flipCollection.toNext();
            }
        };

        Flipper.prototype.toPrev = function () {
            if (this.checkStart()) {
                this.flipCollection.toPrev();
            }
        };

        Flipper.prototype.moveToPoint = function (point) {
            if (this.checkStart()) {
                this.flipCollection.moveToPoint(point);
            }
        };

        Flipper.prototype.checkStart = function () {
            if (this.startEnum === Q.StartEnum.Success) {
                return true;
            }
            if (this.startEnum === Q.StartEnum.Failure) {
                return false;
            }
        };

        Flipper.prototype.checkFlipType = function (type) {
            if (type === 'simple') {
                return Q.FlipTypeEnum.Simple;
            }
            if (type === 'rich') {
                return Q.FlipTypeEnum.Rich;
            }
        };
        return Flipper;
    })();
    Q.Flipper = Flipper;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Point = (function () {
        function Point() {
        }
        Point.prototype.setPoint = function (point) {
            this.now = point;
        };

        Point.prototype.getNow = function () {
            return this.now;
        };

        Point.prototype.getMax = function () {
            return this.max;
        };
        return Point;
    })();
    Q.Point = Point;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Position = (function () {
        function Position() {
        }
        Position.prototype.getY = function () {
            return this.y;
        };

        Position.prototype.getX = function () {
            return this.x;
        };
        return Position;
    })();
    Q.Position = Position;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Size = (function () {
        function Size() {
        }
        Size.prototype.getTotalWidth = function () {
            return this.totalWidth;
        };
        return Size;
    })();
    Q.Size = Size;
})(Q || (Q = {}));
