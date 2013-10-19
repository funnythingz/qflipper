/**
* qflipper.js
* @version 1.3
* @author: Hiroki Oiwa;
* @url: http://funnythingz.github.com/qflipper/
* @license MIT (http://www.opensource.org/licenses/mit-license.php)
*/
;var Q;
(function (Q) {
    var $NameChecker = (function () {
        function $NameChecker() {
        }
        $NameChecker.prototype.get$Name = function () {
            if (typeof jQuery === 'function') {
                return $NameEnum.jQuery;
            }
            if (typeof Zepto === 'function') {
                return $NameEnum.Zepto;
            }
        };
        return $NameChecker;
    })();
    Q.$NameChecker = $NameChecker;

    (function ($NameEnum) {
        $NameEnum[$NameEnum["jQuery"] = 0] = "jQuery";
        $NameEnum[$NameEnum["Zepto"] = 1] = "Zepto";
    })(Q.$NameEnum || (Q.$NameEnum = {}));
    var $NameEnum = Q.$NameEnum;
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
    var Animator = (function () {
        function Animator() {
            this.transitionWithPrefix = new Q.TransitionWithPrefixDecorator(new Q.TransitionCss3Propaty());
            this.transformWithPrefix = new Q.TransformWithPrefixDecorator(new Q.TransformCss3Propaty());
            this.$el = Q.FLIP_ELEMENT.getElement();
        }
        Animator.prototype.transAnimation = function (movePosition) {
            this.setTransition();

            var translateX3d = new Q.TranslateX3d(movePosition);

            this.$el.css(this.transformWithPrefix.getCss3PropatyName(), translateX3d.getMovePosition());
        };

        Animator.prototype.noTransAnimation = function (movePosition) {
            this.unsetTransition();

            var translateX3d = new Q.TranslateX3d(movePosition);

            this.$el.css(this.transformWithPrefix.getCss3PropatyName(), translateX3d.getMovePosition());
        };

        Animator.prototype.setTransition = function () {
            this.$el.css(this.transitionWithPrefix.getCss3PropatyName(), this.transformWithPrefix.getCss3PropatyNameWithEffect());
        };

        Animator.prototype.unsetTransition = function () {
            this.$el.css(this.transitionWithPrefix.getCss3PropatyName(), 'none');
        };
        return Animator;
    })();
    Q.Animator = Animator;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var TransformCss3Propaty = (function () {
        function TransformCss3Propaty() {
        }
        TransformCss3Propaty.prototype.getCss3PropatyName = function () {
            return 'transform';
        };
        return TransformCss3Propaty;
    })();
    Q.TransformCss3Propaty = TransformCss3Propaty;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var TransformWithPrefixDecorator = (function () {
        function TransformWithPrefixDecorator(css3PropatyName) {
            this.css3PropatyName = css3PropatyName;
            this.prefixChecker = new Q.PrefixChecker(Q.TransformEnum);
        }
        TransformWithPrefixDecorator.prototype.getCss3PropatyName = function () {
            return '-' + this.prefixChecker.getPrefix() + '-' + this.css3PropatyName.getCss3PropatyName();
        };

        TransformWithPrefixDecorator.prototype.getCss3PropatyNameWithEffect = function () {
            return this.getCss3PropatyName() + ' .3s ease-in-out';
        };
        return TransformWithPrefixDecorator;
    })();
    Q.TransformWithPrefixDecorator = TransformWithPrefixDecorator;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var TransitionCss3Propaty = (function () {
        function TransitionCss3Propaty() {
        }
        TransitionCss3Propaty.prototype.getCss3PropatyName = function () {
            return 'transition';
        };
        return TransitionCss3Propaty;
    })();
    Q.TransitionCss3Propaty = TransitionCss3Propaty;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var TransitionWithPrefixDecorator = (function () {
        function TransitionWithPrefixDecorator(css3PropatyName) {
            this.css3PropatyName = css3PropatyName;
            this.prefixChecker = new Q.PrefixChecker(Q.TransitionEnum);
        }
        TransitionWithPrefixDecorator.prototype.getCss3PropatyName = function () {
            return '-' + this.prefixChecker.getPrefix() + '-' + this.css3PropatyName.getCss3PropatyName();
        };
        return TransitionWithPrefixDecorator;
    })();
    Q.TransitionWithPrefixDecorator = TransitionWithPrefixDecorator;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var TranslateX3d = (function () {
        function TranslateX3d(movePosition) {
            this.movePosition = movePosition;
        }
        TranslateX3d.prototype.getMovePosition = function () {
            var stringMovePosition = this.movePosition.toString();
            return 'translate3d(' + stringMovePosition + 'px, 0, 0)';
        };
        return TranslateX3d;
    })();
    Q.TranslateX3d = TranslateX3d;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var ItemSize = (function () {
        function ItemSize(options) {
            var $el = Q.FLIP_ELEMENT.getElement();

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
    var Point = (function () {
        function Point(point) {
            this.point = point;
        }
        Point.prototype.getPoint = function () {
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
    var DistancePositionCreator = (function () {
        function DistancePositionCreator(touchmovePosition) {
            this.touchmovePosition = touchmovePosition;
        }
        DistancePositionCreator.prototype.createPosition = function (startPosition) {
            return new Q.Position(startPosition.getX() - this.touchmovePosition.getX(), startPosition.getY() - this.touchmovePosition.getY());
        };
        return DistancePositionCreator;
    })();
    Q.DistancePositionCreator = DistancePositionCreator;
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
        TransformEnum[TransformEnum['-webkit-transform'] = 0] = '-webkit-transform';
        TransformEnum[TransformEnum['-moz-transform'] = 1] = '-moz-transform';
        TransformEnum[TransformEnum['-o-transform'] = 2] = '-o-transform';
        TransformEnum[TransformEnum['-ms-transform'] = 3] = '-ms-transform';
    })(Q.TransformEnum || (Q.TransformEnum = {}));
    var TransformEnum = Q.TransformEnum;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    (function (TransitionEnum) {
        TransitionEnum[TransitionEnum['-webkit-transition'] = 0] = '-webkit-transition';
        TransitionEnum[TransitionEnum['-moz-transition'] = 1] = '-moz-transition';
        TransitionEnum[TransitionEnum['-o-transition'] = 2] = '-o-transition';
        TransitionEnum[TransitionEnum['-ms-transition'] = 3] = '-ms-transition';
    })(Q.TransitionEnum || (Q.TransitionEnum = {}));
    var TransitionEnum = Q.TransitionEnum;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Flip = (function () {
        function Flip(options) {
            this.options = options;
            this.$el = Q.FLIP_ELEMENT.getElement();
            this.resetPoint();

            this.itemSize = new Q.ItemSize(this.options);
            this.animator = new Q.Animator();

            this.setFlipView();
        }
        Flip.prototype.refresh = function () {
            this.resetPoint();
            this.transAnimation();
        };

        Flip.prototype.toNext = function () {
            if (this.hasNext()) {
                this.point = new Q.Point(this.getPoint() + 1);
            }
            this.transAnimation();
        };

        Flip.prototype.toPrev = function () {
            if (this.hasPrev()) {
                this.point = new Q.Point(this.getPoint() - 1);
            }
            this.transAnimation();
        };

        Flip.prototype.moveToPoint = function (point) {
            if (point < this.getMaxPoint()) {
                this.point = new Q.Point(point);
            }
            if (point >= this.getMaxPoint()) {
                this.point = new Q.Point(this.getMaxPoint() - 1);
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
            return this.point.getPoint();
        };

        Flip.prototype.getMaxPoint = function () {
            return this.itemSize.getTotalLength();
        };

        Flip.prototype.resetPoint = function () {
            this.point = new Q.Point(0);
        };

        Flip.prototype.setFlipView = function () {
            this.$el.css({ width: this.itemSize.getTotalWidth().toString() + 'px' });
        };

        Flip.prototype.transAnimation = function () {
            this.animator.transAnimation(-(this.getPoint() * this.itemSize.getSoloWidth()));
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
        function RichFlipFactory(options) {
            _super.call(this, options);
            this.animationFlag = new Q.AnimationFlag();

            this.bindTouchEvents();
        }
        RichFlipFactory.prototype.bindTouchEvents = function () {
            this.touchstart();
            this.touchmove();
            this.touchend();
            this.touchcancel();
        };

        RichFlipFactory.prototype.touchstart = function () {
            var _this = this;
            this.$el.on('touchstart', function (event) {
                var fptouchstartEventCreator = new Q.TriggerEventCreator();

                var startPositionCreator = new Q.PositionCreator();
                _this.startPosition = startPositionCreator.createPosition(event);

                fptouchstartEventCreator.createEvent('fptouchstart');
            });
        };

        RichFlipFactory.prototype.touchmove = function () {
            var _this = this;
            this.animationFlag.disabled();

            var fptouchmoveEventCreator = new Q.TriggerEventCreator();

            this.$el.on('touchmove', function (event) {
                event.stopPropagation();

                if (!_this.animationFlag.checkStatus()) {
                    _this.traseDistance(event);
                }

                if (_this.animationFlag.checkStatus()) {
                    var moveDistanceHelper = new Q.MoveDistanceHelper(_this.startPosition.getX(), event);
                    var moveDistance = moveDistanceHelper.getMoveDistance();
                    _this.snapFitAnimation(moveDistance);
                    _this.delegateDistancePosition(event);
                }

                fptouchmoveEventCreator.createEvent('fptouchmove');
            });
        };

        RichFlipFactory.prototype.touchend = function () {
            var _this = this;
            this.$el.on('touchend', function (event) {
                var fptouchendEventCreator = new Q.TriggerEventCreator();

                if (_this.animationFlag.checkStatus()) {
                    _this.startAnimation();
                    fptouchendEventCreator.createEvent('fptouchend');
                }
                _this.animationFlag.disabled();
            });
        };

        RichFlipFactory.prototype.touchcancel = function () {
            this.$el.on('touchcancel', function (event) {
            });
        };

        RichFlipFactory.prototype.traseDistance = function (touchmoveEvent) {
            this.delegateDistancePosition(touchmoveEvent);
            if (Math.abs(this.distancePosition.getY()) < 10 && Math.abs(this.distancePosition.getX()) > 10) {
                event.preventDefault();
                this.animationFlag.enabled();
            }
        };

        RichFlipFactory.prototype.delegateDistancePosition = function (touchmoveEvent) {
            var touchmovePositionCreator = new Q.PositionCreator();
            var touchmovePosition = touchmovePositionCreator.createPosition(touchmoveEvent);

            var distancePositionCreator = new Q.DistancePositionCreator(touchmovePosition);
            this.distancePosition = distancePositionCreator.createPosition(this.startPosition);
        };

        RichFlipFactory.prototype.startAnimation = function () {
            if (this.distancePosition.getX() > 0) {
                this.toNext();
            }
            if (this.distancePosition.getX() < 0) {
                this.toPrev();
            }
        };

        RichFlipFactory.prototype.snapFitAnimation = function (moveDistance) {
            if (typeof moveDistance === "undefined") { moveDistance = 0; }
            this.animator.noTransAnimation(-((this.getPoint() * this.itemSize.getSoloWidth()) + moveDistance));
        };
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
        function SimpleFlipFactory(options) {
            _super.call(this, options);
            this.animationFlag = new Q.AnimationFlag();
            this.$nameChecker = new Q.$NameChecker();

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
                var fpstarttouchEventCreator = new Q.TriggerEventCreator();
                var $name = _this.$nameChecker.get$Name();

                var startPositionCreator = new Q.PositionCreator();
                _this.startPosition = startPositionCreator.createPosition(event);

                fpstarttouchEventCreator.createEvent('fptouchstart');
            });
        };

        SimpleFlipFactory.prototype.touchmove = function () {
            var _this = this;
            this.animationFlag.disabled();

            var fptouchmoveEventCreator = new Q.TriggerEventCreator();
            var fptouchendEventCreator = new Q.TriggerEventCreator();

            this.$el.on('touchmove', function (event) {
                event.stopPropagation();

                if (!_this.animationFlag.checkStatus()) {
                    _this.traseDistance(event);

                    fptouchmoveEventCreator.createEvent('fptouchmove');

                    if (_this.animationFlag.checkStatus()) {
                        _this.startAnimation();

                        fptouchendEventCreator.createEvent('fptouchend');
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
            var touchmovePositionCreator = new Q.PositionCreator();
            var touchmovePosition = touchmovePositionCreator.createPosition(touchmoveEvent);

            var distancePositionCreator = new Q.DistancePositionCreator(touchmovePosition);
            this.distancePosition = distancePositionCreator.createPosition(this.startPosition);

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
        return SimpleFlipFactory;
    })(Q.Flip);
    Q.SimpleFlipFactory = SimpleFlipFactory;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var TriggerEventCreator = (function () {
        function TriggerEventCreator() {
        }
        TriggerEventCreator.prototype.createEvent = function (type) {
            var $el = Q.FLIP_ELEMENT.getElement();
            return $el.trigger($.Event(type));
        };
        return TriggerEventCreator;
    })();
    Q.TriggerEventCreator = TriggerEventCreator;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var FlipCreator = (function () {
        function FlipCreator() {
        }
        FlipCreator.prototype.createFlip = function (options) {
            if (options.type.getType() === Q.FlipTypeEnum.Simple) {
                return new Q.SimpleFlipFactory(options);
            }
            if (options.type.getType() === Q.FlipTypeEnum.Rich) {
                return new Q.RichFlipFactory(options);
            }
        };
        return FlipCreator;
    })();
    Q.FlipCreator = FlipCreator;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var FlipElementSingleton = (function () {
        function FlipElementSingleton() {
            if (FlipElementSingleton._instance) {
                throw console.log('Error: Instantiation failed');
            }
            FlipElementSingleton._instance = this;
        }
        FlipElementSingleton.getInstance = function () {
            if (FlipElementSingleton._instance === null) {
                FlipElementSingleton._instance = new FlipElementSingleton();
            }
            return FlipElementSingleton._instance;
        };

        FlipElementSingleton.prototype.setElement = function ($el) {
            this.$el = $el;
        };

        FlipElementSingleton.prototype.getElement = function () {
            return this.$el;
        };
        FlipElementSingleton._instance = null;
        return FlipElementSingleton;
    })();
    Q.FlipElementSingleton = FlipElementSingleton;

    Q.FLIP_ELEMENT = FlipElementSingleton.getInstance();
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Flipper = (function () {
        function Flipper(id, args) {
            if (typeof args === "undefined") { args = {
                type: 'simple',
                view: '.view',
                item: '.item'
            }; }
            var options = new Q.Options();

            options.createType((args.type) ? args.type : 'simple');
            options.createView((args.view) ? args.view : '.view');
            options.createItem((args.item) ? args.item : '.item');

            Q.FLIP_ELEMENT.setElement($(id));

            var flipCreator = new Q.FlipCreator();
            this.flip = flipCreator.createFlip(options);

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

        Flipper.prototype.flipElement = function () {
            return Q.FLIP_ELEMENT.getElement();
        };
        return Flipper;
    })();
    Q.Flipper = Flipper;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var MoveDistanceHelper = (function () {
        function MoveDistanceHelper(startPositionX, touchmoveEvent) {
            this.startPositionX = startPositionX;
            this.touchmoveEvent = touchmoveEvent;
        }
        MoveDistanceHelper.prototype.getMoveDistance = function () {
            var $nameChecker = new Q.$NameChecker();
            var $name = $nameChecker.get$Name();

            if ($name === Q.$NameEnum.jQuery) {
                return this.startPositionX - this.touchmoveEvent.originalEvent.touches[0].clientX;
            }

            if ($name === Q.$NameEnum.Zepto) {
                return this.startPositionX - this.touchmoveEvent.changedTouches[0].clientX;
            }
        };
        return MoveDistanceHelper;
    })();
    Q.MoveDistanceHelper = MoveDistanceHelper;
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
        return Options;
    })();
    Q.Options = Options;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var Type = (function () {
        function Type(type) {
            if (typeof type === "undefined") { type = 'simple'; }
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
    var PositionCreator = (function () {
        function PositionCreator() {
        }
        PositionCreator.prototype.createPosition = function (event) {
            var $nameChecker = new Q.$NameChecker();
            var $name = $nameChecker.get$Name();

            if ($name === Q.$NameEnum.jQuery) {
                return new Q.Position(event.originalEvent.touches[0].clientX, event.originalEvent.touches[0].clientY);
            }

            if ($name === Q.$NameEnum.Zepto) {
                return new Q.Position(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
            }
        };
        return PositionCreator;
    })();
    Q.PositionCreator = PositionCreator;
})(Q || (Q = {}));
;var Q;
(function (Q) {
    var PrefixChecker = (function () {
        function PrefixChecker(checkList) {
            this.prefixEnum = Q.PrefixEnum;
            var _prefix;
            var _self = this;
            var _$el = Q.FLIP_ELEMENT.getElement();
            var $nameChecker = new Q.$NameChecker();
            var $name = $nameChecker.get$Name();

            $.each(checkList, function (val, key) {
                if ($name === Q.$NameEnum.jQuery) {
                    if (parseInt(key, 10) >= 0 && _$el.css(val) !== undefined) {
                        _prefix = _self.prefixEnum[key];
                    }
                }

                if ($name === Q.$NameEnum.Zepto) {
                    if (parseInt(key, 10) >= 0 && _$el.css(val) !== null) {
                        _prefix = _self.prefixEnum[key];
                    }
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
