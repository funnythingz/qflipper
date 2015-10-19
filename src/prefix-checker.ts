module Q {

    export class PrefixChecker {

        private prefixEnum = PrefixEnum;
        private _prefix: string;

        constructor($el: JQuery, checkList: any) {
            var _prefix: string;
            var _self = this;
            var _$el: JQuery = $el;
            var $nameChecker = new $NameChecker();
            var $name = $nameChecker.get$Name();

            $.each(checkList, (val, key) => {

                // FIXME: jQueryとzeptoで`.css()`の挙動が違うっぽい
                // jQuery: _$el.css(val) !== undefined
                // zepto:  _$el.css(val) !== null
                // あとzeptoだと`WebkitTransitionPropaty`みたいなのがとれないっぽい

                if($name === $NameEnum.jQuery) {
                    if(parseInt(key, 10) >= 0 && _$el.css(val) !== undefined) {
                        _prefix = _self.prefixEnum[key];
                    }
                }

                if($name === $NameEnum.Zepto) {
                    if(parseInt(key, 10) >= 0 && _$el.css(val)) {
                        _prefix = _self.prefixEnum[key];
                    }
                }

            });

            this._prefix = _prefix;
        }

        getPrefix(): string {
            return this._prefix;
        }

    }

}
