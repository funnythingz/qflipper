module Q {

    export class PrefixChecker {

        private prefixEnum = PrefixEnum;
        private _prefix: string;

        constructor(checkList: any) {
            var _prefix: string;
            var _self = this;
            var _$el: JQuery = FLIP_ELEMENT.getElement();

            $.each(checkList, (val, key) => {
                if(parseInt(key, 10) >= 0 && _$el.css(val) !== undefined) {
                    _prefix = _self.prefixEnum[key];
                }
            });

            this._prefix = _prefix;
        }

        getPrefix(): string {
            return this._prefix;
        }

    }

}
