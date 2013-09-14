var Q;
(function (Q) {
    var Flick = (function () {
        function Flick() {
        }
        Flick.prototype.start = function (id) {
            console.log(id);
            console.log(Q.Size);
        };
        return Flick;
    })();
    Q.Flick = Flick;
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
