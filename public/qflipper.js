var Q;
(function (Q) {
    var Animater = (function () {
        function Animater($el) {
            this.$el = $el;
        }
        Animater.prototype.transAnimation = function (movePosition) {
            this.setTransition();
            this.$el.css('-' + this.getPrefix(Q.TransformEnum) + '-transform', 'translate3d(' + movePosition + 'px, 0, 0)');
        };

        Animater.prototype.noTransAnimation = function (movePosition) {
            this.unsetTransition();
            this.$el.css('-' + this.getPrefix(Q.TransformEnum) + '-transform', 'translate3d(' + movePosition + 'px, 0, 0)');
        };

        Animater.prototype.setTransition = function () {
            this.$el.css('-' + this.getPrefix(Q.TransitionEnum) + '-transition', '-' + this.getPrefix(Q.TransformEnum) + '-transform .3s ease-in-out');
        };

        Animater.prototype.unsetTransition = function () {
            this.$el.css('-' + this.getPrefix(Q.TransitionEnum) + '-transition', 'none');
        };

        Animater.prototype.getPrefix = function (list) {
            var _$el = this.$el;
            var _prefix;

            _.each(list, function (val, key) {
                if (parseInt(val, 10) >= 0 && _$el.css(key) !== undefined) {
                    _prefix = Q.PrefixEnum[val];
                }
            });

            return _prefix;
        };
        return Animater;
    })();
    Q.Animater = Animater;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var ItemSize = (function () {
        function ItemSize($el, options) {
            this.soloWidth = $(options.view.getName()).width();
            this.totalLength = $(options.item.getName(), $el).length;
            this.totalWidth = this.soloWidth * this.totalLength;
        }
        ItemSize.prototype.getSoloWidth = function () {
            return this.soloWidth;
        };

        ItemSize.prototype.getTotalWidth = function () {
            return this.totalWidth;
        };

        ItemSize.prototype.getTotalLength = function () {
            return this.totalLength;
        };
        return ItemSize;
    })();
    Q.ItemSize = ItemSize;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Item = (function () {
        function Item(name) {
            this.name = name;
        }
        Item.prototype.getName = function () {
            return this.name;
        };
        return Item;
    })();
    Q.Item = Item;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Lamp = (function () {
        function Lamp(name) {
            this.name = name;
        }
        Lamp.prototype.getName = function () {
            return this.name;
        };
        return Lamp;
    })();
    Q.Lamp = Lamp;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Options = (function () {
        function Options() {
        }
        Options.prototype.createType = function (type) {
            this.type = new Q.Type(type);
        };

        Options.prototype.createView = function (view) {
            this.view = new Q.View(view);
        };

        Options.prototype.createItem = function (item) {
            this.item = new Q.Item(item);
        };

        Options.prototype.createLamp = function (lamp) {
            this.lamp = new Q.Lamp(lamp);
        };
        return Options;
    })();
    Q.Options = Options;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Type = (function () {
        function Type(type) {
            if (typeof type === "undefined") { type = (type) ? type : 'simple'; }
            if (_.isEqual(type, 'simple')) {
                this.type = Q.FlipTypeEnum.Simple;
            }
            if (_.isEqual(type, 'rich')) {
                this.type = Q.FlipTypeEnum.Rich;
            }
        }
        Type.prototype.getType = function () {
            return this.type;
        };
        return Type;
    })();
    Q.Type = Type;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var View = (function () {
        function View(name) {
            this.name = name;
        }
        View.prototype.getName = function () {
            return this.name;
        };
        return View;
    })();
    Q.View = View;
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
        return Point;
    })();
    Q.Point = Point;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Position = (function () {
        function Position() {
        }
        Position.prototype.setY = function (y) {
            this.y = y;
        };

        Position.prototype.setX = function (x) {
            this.x = x;
        };

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
    (function (FlipTypeEnum) {
        FlipTypeEnum[FlipTypeEnum["Simple"] = 0] = "Simple";
        FlipTypeEnum[FlipTypeEnum["Rich"] = 1] = "Rich";
    })(Q.FlipTypeEnum || (Q.FlipTypeEnum = {}));
    var FlipTypeEnum = Q.FlipTypeEnum;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    (function (PrefixEnum) {
        PrefixEnum[PrefixEnum["webkit"] = 0] = "webkit";
        PrefixEnum[PrefixEnum["moz"] = 1] = "moz";
        PrefixEnum[PrefixEnum["o"] = 2] = "o";
        PrefixEnum[PrefixEnum["ms"] = 3] = "ms";
    })(Q.PrefixEnum || (Q.PrefixEnum = {}));
    var PrefixEnum = Q.PrefixEnum;
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
    (function (TransformEnum) {
        TransformEnum[TransformEnum["WebkitTransform"] = 0] = "WebkitTransform";
        TransformEnum[TransformEnum["MozTransform"] = 1] = "MozTransform";
        TransformEnum[TransformEnum["OTransform"] = 2] = "OTransform";
        TransformEnum[TransformEnum["msTransform"] = 3] = "msTransform";
    })(Q.TransformEnum || (Q.TransformEnum = {}));
    var TransformEnum = Q.TransformEnum;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    (function (TransitionEnum) {
        TransitionEnum[TransitionEnum["WebkitTransitionProperty"] = 0] = "WebkitTransitionProperty";
        TransitionEnum[TransitionEnum["MozTransitionProperty"] = 1] = "MozTransitionProperty";
        TransitionEnum[TransitionEnum["OTransitionProperty"] = 2] = "OTransitionProperty";
        TransitionEnum[TransitionEnum["msTransitionProperty"] = 3] = "msTransitionProperty";
    })(Q.TransitionEnum || (Q.TransitionEnum = {}));
    var TransitionEnum = Q.TransitionEnum;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Flip = (function () {
        function Flip($el, options) {
            this.$el = $el;
            this.options = options;
            this.init();
        }
        Flip.prototype.refresh = function () {
            this.resetPoint();
            console.log(this.point.getNow());
            this.transAnimation();
        };

        Flip.prototype.toNext = function () {
            if (this.hasNext()) {
                this.point.setPoint(this.point.getNow() + 1);
                console.log(this.point.getNow());
                this.transAnimation();
            }
        };

        Flip.prototype.toPrev = function () {
            if (this.hasPrev()) {
                this.point.setPoint(this.point.getNow() - 1);
                console.log(this.point.getNow());
                this.transAnimation();
            }
        };

        Flip.prototype.moveToPoint = function (point) {
            if (point < this.itemSize.getTotalLength()) {
                this.point.setPoint(point);
            } else if (point >= this.itemSize.getTotalLength()) {
                this.point.setPoint(this.itemSize.getTotalLength() - 1);
            }
            console.log(this.point.getNow());
            this.transAnimation();
        };

        Flip.prototype.init = function () {
            this.point = new Q.Point();
            this.resetPoint();
            this.itemSize = new Q.ItemSize(this.$el, this.options);
            this.animater = new Q.Animater(this.$el);
            this.setFlipView();
        };

        Flip.prototype.hasNext = function () {
            if (this.point.getNow() < this.itemSize.getTotalLength() - 1) {
                return true;
            }
            return false;
        };

        Flip.prototype.hasPrev = function () {
            if (0 < this.point.getNow() && this.point.getNow() <= this.itemSize.getTotalLength() - 1) {
                return true;
            }
            return false;
        };

        Flip.prototype.resetPoint = function () {
            this.point.setPoint(0);
        };

        Flip.prototype.setFlipView = function () {
            this.$el.css({ width: this.itemSize.getTotalWidth().toString() + 'px' });
        };

        Flip.prototype.transAnimation = function () {
            this.animater.transAnimation(-(this.point.getNow() * this.itemSize.getSoloWidth()));
        };

        Flip.prototype.noTransAnimation = function () {
            this.animater.noTransAnimation(-(this.point.getNow() * this.itemSize.getSoloWidth()));
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
        function RichFlip($el, options) {
            _super.call(this, $el, options);
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
        function SimpleFlip($el, options) {
            _super.call(this, $el, options);
        }
        return SimpleFlip;
    })(Q.Flip);
    Q.SimpleFlip = SimpleFlip;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var RichFlipFactory = (function () {
        function RichFlipFactory() {
        }
        RichFlipFactory.prototype.createRichFlip = function ($el, options) {
            return new Q.RichFlip($el, options);
        };
        return RichFlipFactory;
    })();
    Q.RichFlipFactory = RichFlipFactory;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var SimpleFlipFactory = (function () {
        function SimpleFlipFactory() {
        }
        SimpleFlipFactory.prototype.createSimpleFlip = function ($el, options) {
            return new Q.SimpleFlip($el, options);
        };
        return SimpleFlipFactory;
    })();
    Q.SimpleFlipFactory = SimpleFlipFactory;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Flipper = (function () {
        function Flipper() {
            this.startEnum = Q.StartEnum.Failure;
        }
        Flipper.prototype.start = function (id, options) {
            this.options = new Q.Options();
            this.options.createType(options.type);
            this.options.createView((options.view) ? options.view : '.view');
            this.options.createItem((options.item) ? options.item : '.item');
            this.options.createLamp((options.lamp) ? options.lamp : '.lamp');

            this.flipService = new Q.FlipService($(id), this.options);
            this.startEnum = Q.StartEnum.Success;
            this.refresh();
        };

        Flipper.prototype.refresh = function () {
            if (this.checkStart()) {
                this.flipService.refresh();
            }
        };

        Flipper.prototype.toNext = function () {
            if (this.checkStart()) {
                this.flipService.toNext();
            }
        };

        Flipper.prototype.toPrev = function () {
            if (this.checkStart()) {
                this.flipService.toPrev();
            }
        };

        Flipper.prototype.moveToPoint = function (point) {
            if (this.checkStart()) {
                this.flipService.moveToPoint(point);
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
        return Flipper;
    })();
    Q.Flipper = Flipper;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var FlipService = (function () {
        function FlipService($el, options) {
            if (_.isEqual(options.type.getType(), Q.FlipTypeEnum.Simple)) {
                var simpleFlipFactory = new Q.SimpleFlipFactory();
                return simpleFlipFactory.createSimpleFlip($el, options);
            }
            if (_.isEqual(options.type.getType(), Q.FlipTypeEnum.Rich)) {
                var richFlipFactory = new Q.RichFlipFactory();
                return richFlipFactory.createRichFlip($el, options);
            }
        }
        return FlipService;
    })();
    Q.FlipService = FlipService;
})(Q || (Q = {}));
