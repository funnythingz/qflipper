/// <reference path="../enum/transition-enum.ts" />
/// <reference path="../enum/transform-enum.ts" />
/// <reference path="../enum/prefix-enum.ts" />

module Q {
    
    export class Animater {

        private $el: JQuery;

        constructor($el: JQuery) {
            this.$el = $el;
        }

        transAnimation(movePosition: number) {
            this.setTransition();
            this.$el.css('-' + this.getPrefix(TransformEnum) + '-transform', 'translate3d(' + movePosition + 'px, 0, 0)');
        }

        noTransAnimation(movePosition: number) {
            this.unsetTransition();
            this.$el.css('-' + this.getPrefix(TransformEnum) + '-transform', 'translate3d(' + movePosition + 'px, 0, 0)');
        }

        private setTransition() {
            this.$el.css('-' + this.getPrefix(TransitionEnum) + '-transition',
                         '-' + this.getPrefix(TransformEnum) + '-transform .3s ease-in-out');
        }

        private unsetTransition() {
            this.$el.css('-' + this.getPrefix(TransitionEnum) + '-transition', 'none');
        }

        private getPrefix(list): string {
            var _$el = this.$el;
            var _prefix: string;

            _.each(list, function(val, key){
                if(parseInt(val, 10) >= 0 && _$el.css(key) !== undefined) {
                    _prefix = PrefixEnum[val];
                }
            });

            return _prefix;
        }
    }

}
