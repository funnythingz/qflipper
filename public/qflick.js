var Q;
(function (Q) {
    var Flick = (function () {
        function Flick() {
        }
        Flick.prototype.start = function (id) {
        };

        Flick.prototype.refresh = function () {
        };

        Flick.prototype.toNext = function () {
        };

        Flick.prototype.toPrev = function () {
        };

        Flick.prototype.moveToPoint = function (point) {
        };

        Flick.prototype.hasNext = function () {
        };

        Flick.prototype.hasPrev = function () {
        };
        return Flick;
    })();
    Q.Flick = Flick;
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
