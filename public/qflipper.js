var Q;
(function (Q) {
    var Animater = (function () {
        function Animater($el) {
            this.$el = $el;
            var transformPrefixChecker = new Q.PrefixChecker($el, Q.TransformEnum);
            this.transformPrefix = transformPrefixChecker.getPrefix();

            var transitionPrefixChecker = new Q.PrefixChecker($el, Q.TransitionEnum);
            this.transitionPrefix = transitionPrefixChecker.getPrefix();
        }
        Animater.prototype.transAnimation = function (movePosition) {
            this.setTransition();
            this.$el.css('-' + this.transformPrefix + '-transform', 'translate3d(' + movePosition + 'px, 0, 0)');
        };

        Animater.prototype.noTransAnimation = function (movePosition) {
            this.unsetTransition();
            this.$el.css('-' + this.transformPrefix + '-transform', 'translate3d(' + movePosition + 'px, 0, 0)');
        };

        Animater.prototype.setTransition = function () {
            this.$el.css('-' + this.transitionPrefix + '-transition', '-' + this.transformPrefix + '-transform .3s ease-in-out');
        };

        Animater.prototype.unsetTransition = function () {
            this.$el.css('-' + this.transitionPrefix + '-transition', 'none');
        };
        return Animater;
    })();
    Q.Animater = Animater;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var AnimationFlag = (function () {
        function AnimationFlag(flag) {
            if (typeof flag === "undefined") { flag = false; }
            this.flag = flag;
        }
        AnimationFlag.prototype.enabled = function () {
            this.flag = true;
        };

        AnimationFlag.prototype.disabled = function () {
            this.flag = false;
        };

        AnimationFlag.prototype.checkStatus = function () {
            return this.flag;
        };
        return AnimationFlag;
    })();
    Q.AnimationFlag = AnimationFlag;
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
            if (type === 'simple') {
                this.type = Q.FlipTypeEnum.Simple;
            }
            if (type === 'rich') {
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
            this.point = point;
        };

        Point.prototype.getNow = function () {
            return this.point;
        };
        return Point;
    })();
    Q.Point = Point;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Position = (function () {
        function Position(x, y) {
            this.x = x;
            this.y = y;
        }
        Position.prototype.getX = function () {
            return this.x;
        };

        Position.prototype.getY = function () {
            return this.y;
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
            this.point = new Q.Point();
            this.resetPoint();

            this.itemSize = new Q.ItemSize(this.$el, this.options);
            this.animater = new Q.Animater(this.$el);

            this.setFlipView();
        }
        Flip.prototype.refresh = function () {
            this.resetPoint();
            this.transAnimation();
        };

        Flip.prototype.toNext = function () {
            if (this.hasNext()) {
                this.point.setPoint(this.getPoint() + 1);
                this.transAnimation();
            }
        };

        Flip.prototype.toPrev = function () {
            if (this.hasPrev()) {
                this.point.setPoint(this.getPoint() - 1);
                this.transAnimation();
            }
        };

        Flip.prototype.moveToPoint = function (point) {
            if (point < this.getMaxPoint()) {
                this.point.setPoint(point);
            }
            if (point >= this.getMaxPoint()) {
                this.point.setPoint(this.getMaxPoint() - 1);
            }
            this.transAnimation();
        };

        Flip.prototype.hasNext = function () {
            if (this.getPoint() < this.getMaxPoint() - 1) {
                return true;
            }
            return false;
        };

        Flip.prototype.hasPrev = function () {
            if (0 < this.getPoint() && this.getPoint() <= this.getMaxPoint() - 1) {
                return true;
            }
            return false;
        };

        Flip.prototype.getPoint = function () {
            return this.point.getNow();
        };

        Flip.prototype.getMaxPoint = function () {
            return this.itemSize.getTotalLength();
        };

        Flip.prototype.resetPoint = function () {
            this.point.setPoint(0);
        };

        Flip.prototype.setFlipView = function () {
            this.$el.css({ width: this.itemSize.getTotalWidth().toString() + 'px' });
        };

        Flip.prototype.transAnimation = function () {
            this.animater.transAnimation(-(this.getPoint() * this.itemSize.getSoloWidth()));
        };

        Flip.prototype.noTransAnimation = function () {
            this.animater.noTransAnimation(-(this.getPoint() * this.itemSize.getSoloWidth()));
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
    var RichFlipFactory = (function (_super) {
        __extends(RichFlipFactory, _super);
        function RichFlipFactory($el, options) {
            _super.call(this, $el, options);
        }
        return RichFlipFactory;
    })(Q.Flip);
    Q.RichFlipFactory = RichFlipFactory;
})(Q || (Q = {}));
;var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Q;
(function (Q) {
    var SimpleFlipFactory = (function (_super) {
        __extends(SimpleFlipFactory, _super);
        function SimpleFlipFactory($el, options) {
            _super.call(this, $el, options);
            this.animationFlag = new Q.AnimationFlag();

            this.bindTouchEvents();
        }
        SimpleFlipFactory.prototype.bindTouchEvents = function () {
            this.touchstart();
            this.touchmove();
            this.touchend();
            this.touchcancel();
        };

        SimpleFlipFactory.prototype.touchstart = function () {
            var _this = this;
            this.$el.on('touchstart', function (event) {
                _this.startPosition = new Q.Position(event.originalEvent.touches[0].clientX, event.originalEvent.touches[0].clientY);
            });
        };

        SimpleFlipFactory.prototype.touchmove = function () {
            var _this = this;
            this.animationFlag.disabled();

            this.$el.on('touchmove', function (event) {
                event.stopPropagation();

                if (!_this.animationFlag.checkStatus()) {
                    _this.traseDistance(event);

                    if (_this.animationFlag.checkStatus()) {
                        _this.startAnimation();
                        _this.triggerEvent('flipend');
                    }
                }
            });
        };

        SimpleFlipFactory.prototype.touchend = function () {
            var _this = this;
            this.$el.on('touchend', function (event) {
                _this.animationFlag.disabled();
            });
        };

        SimpleFlipFactory.prototype.touchcancel = function () {
            this.$el.on('touchcancel', function (event) {
            });
        };

        SimpleFlipFactory.prototype.traseDistance = function (touchmoveEvent) {
            this.distancePosition = new Q.Position(this.startPosition.getX() - touchmoveEvent.originalEvent.touches[0].clientX, this.startPosition.getY() - touchmoveEvent.originalEvent.touches[0].clientY);

            if (Math.abs(this.distancePosition.getY()) < 10 && Math.abs(this.distancePosition.getX()) > 10) {
                event.preventDefault();
                this.animationFlag.enabled();
            }
        };

        SimpleFlipFactory.prototype.startAnimation = function () {
            if (this.distancePosition.getX() > 0) {
                this.toNext();
            }
            if (this.distancePosition.getX() < 0) {
                this.toPrev();
            }
        };

        SimpleFlipFactory.prototype.triggerEvent = function (type) {
            return this.$el.trigger($.Event(type));
        };
        return SimpleFlipFactory;
    })(Q.Flip);
    Q.SimpleFlipFactory = SimpleFlipFactory;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var FlipCreator = (function () {
        function FlipCreator() {
        }
        FlipCreator.prototype.createFlip = function ($el, options) {
            if (options.type.getType() === Q.FlipTypeEnum.Simple) {
                return new Q.SimpleFlipFactory($el, options);
            }
            if (options.type.getType() === Q.FlipTypeEnum.Rich) {
                return new Q.RichFlipFactory($el, options);
            }
        };
        return FlipCreator;
    })();
    Q.FlipCreator = FlipCreator;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Flipper = (function () {
        function Flipper(id, args) {
            var options = new Q.Options();
            options.createType((args.type) ? args.type : 'simple');
            options.createView((args.view) ? args.view : '.view');
            options.createItem((args.item) ? args.item : '.item');
            options.createLamp((args.lamp) ? args.lamp : '.lamp');

            var flipCreator = new Q.FlipCreator();
            this.flip = flipCreator.createFlip($(id), options);

            this.refresh();
        }
        Flipper.prototype.refresh = function () {
            this.flip.refresh();
        };

        Flipper.prototype.toNext = function () {
            this.flip.toNext();
        };

        Flipper.prototype.toPrev = function () {
            this.flip.toPrev();
        };

        Flipper.prototype.moveToPoint = function (point) {
            this.flip.moveToPoint(point);
        };

        Flipper.prototype.hasNext = function () {
            return this.flip.hasNext();
        };

        Flipper.prototype.hasPrev = function () {
            return this.flip.hasPrev();
        };

        Flipper.prototype.getPoint = function () {
            return this.flip.getPoint();
        };

        Flipper.prototype.getMaxPoint = function () {
            return this.flip.getMaxPoint();
        };
        return Flipper;
    })();
    Q.Flipper = Flipper;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var PrefixChecker = (function () {
        function PrefixChecker($el, checkList) {
            this.prefixEnum = Q.PrefixEnum;
            var _prefix;
            var _self = this;

            $.each(checkList, function (val, key) {
                if (parseInt(key, 10) >= 0 && $el.css(val) !== undefined) {
                    _prefix = _self.prefixEnum[key];
                }
            });

            this._prefix = _prefix;
        }
        PrefixChecker.prototype.getPrefix = function () {
            return this._prefix;
        };
        return PrefixChecker;
    })();
    Q.PrefixChecker = PrefixChecker;
})(Q || (Q = {}));
