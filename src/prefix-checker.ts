module Q {

    const Prefixes = [
        'webkit',
        'moz',
        'o',
        'ms'
    ];

    export class PrefixChecker {

        private _prefix: string;

        constructor($el: JQuery, property: ICss3Propaty) {
            var _prefix: string;
            var _$el: JQuery = $el;
            var $nameChecker = new $NameChecker();
            var $name = $nameChecker.get$Name();

            $.each(Prefixes, (index, prefix) => {
                const propertyWithPrefix = this.mergePrefixWithProperty(prefix, property);

                // FIXME: jQueryとzeptoで`.css()`の挙動が違うっぽい
                // jQuery: _$el.css(val) !== undefined
                // zepto:  _$el.css(val) !== null
                // あとzeptoだと`WebkitTransitionPropaty`みたいなのがとれないっぽい

                if($name === $NameEnum.jQuery) {
                    if(_$el.css(propertyWithPrefix) !== undefined) {
                        _prefix = prefix;
                    }
                }

                if($name === $NameEnum.Zepto) {
                    if(_$el.css(propertyWithPrefix)) {
                        _prefix = prefix;
                    }
                }

            });

            this._prefix = _prefix;
        }

        private mergePrefixWithProperty(prefix: string, property: ICss3Propaty): string {
            return "-" + prefix + "-" + property.getCss3PropatyName();
        }

        getPrefix(): string {
            return this._prefix;
        }

    }

}
