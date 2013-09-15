var Q;
(function (Q) {
    var Flipper = (function () {
        function Flipper() {
        }
        Flipper.prototype.start = function (id) {
        };

        Flipper.prototype.refresh = function () {
        };

        Flipper.prototype.toNext = function () {
        };

        Flipper.prototype.toPrev = function () {
        };

        Flipper.prototype.moveToPoint = function (point) {
        };

        Flipper.prototype.hasNext = function () {
        };

        Flipper.prototype.hasPrev = function () {
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
