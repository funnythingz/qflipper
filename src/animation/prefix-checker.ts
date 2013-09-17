/// <reference path="../enum/prefix-enum.ts" />

module Q {

    export class PrefixChecker {

        private prefixEnum = PrefixEnum;
        private _prefix: string;

        constructor(_$el: JQuery, checkList: any) {
            var _prefix: string;
            var _self = this;

            $.each(checkList, (val, key) => {
                if(parseInt(key, 10) >= 0 && _$el.css(val) !== undefined) {
                    _prefix = _self.prefixEnum[key];
                }
            });

            return _prefix;
        }

        getPrefix(): string {
            return this._prefix;
        }

    }

}
