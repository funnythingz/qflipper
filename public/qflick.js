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
    var PointSingleton = (function () {
        function PointSingleton() {
            if (PointSingleton._instance) {
                throw console.log('Error: Instantiation failed');
            }
            PointSingleton._instance = this;
        }
        PointSingleton.getInstance = function () {
            if (PointSingleton._instance === null) {
                PointSingleton._instance = new PointSingleton();
            }
            return PointSingleton._instance;
        };

        PointSingleton.prototype.getNow = function () {
            return this.now;
        };
        PointSingleton._instance = null;
        return PointSingleton;
    })();
    Q.PointSingleton = PointSingleton;

    Q.Point = PointSingleton.getInstance();
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var PositionSingleton = (function () {
        function PositionSingleton() {
            if (PositionSingleton._instance) {
                throw console.log('Error: Instantiation failed');
            }
            PositionSingleton._instance = this;
        }
        PositionSingleton.getInstance = function () {
            if (PositionSingleton._instance === null) {
                PositionSingleton._instance = new PositionSingleton();
            }
            return PositionSingleton._instance;
        };

        PositionSingleton.prototype.getStartY = function () {
            return this.startY;
        };

        PositionSingleton.prototype.getStartX = function () {
            return this.startX;
        };
        PositionSingleton._instance = null;
        return PositionSingleton;
    })();
    Q.PositionSingleton = PositionSingleton;

    Q.Position = PositionSingleton.getInstance();
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var SizeSingleton = (function () {
        function SizeSingleton() {
            if (SizeSingleton._instance) {
                throw console.log('Error: Instantiation failed');
            }
            SizeSingleton._instance = this;
        }
        SizeSingleton.getInstance = function () {
            if (SizeSingleton._instance === null) {
                SizeSingleton._instance = new SizeSingleton();
            }
            return SizeSingleton._instance;
        };

        SizeSingleton.prototype.getTotalWidth = function () {
            return this.totalWidth;
        };
        SizeSingleton._instance = null;
        return SizeSingleton;
    })();
    Q.SizeSingleton = SizeSingleton;

    Q.Size = SizeSingleton.getInstance();
})(Q || (Q = {}));
