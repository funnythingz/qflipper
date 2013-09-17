/// <reference path="../enum/transition-enum.ts" />
/// <reference path="../enum/transform-enum.ts" />
/// <reference path="prefix-checker.ts" />

module Q {
    
    export class Animater {

        private $el: JQuery;
        private transformPrefix: string;
        private transitionPrefix: string;

        constructor($el: JQuery) {
            this.$el = $el;

            var transformPrefixChecker = new PrefixChecker($el, TransformEnum);
            this.transformPrefix = transformPrefixChecker.getPrefix();

            var transitionPrefixChecker = new PrefixChecker($el, TransitionEnum);
            this.transitionPrefix = transitionPrefixChecker.getPrefix();

        }

        transAnimation(movePosition: number) {
            this.setTransition();
            this.$el.css('-' + this.transformPrefix + '-transform', 'translate3d(' + movePosition + 'px, 0, 0)');
        }

        noTransAnimation(movePosition: number) {
            this.unsetTransition();
            this.$el.css('-' + this.transformPrefix + '-transform', 'translate3d(' + movePosition + 'px, 0, 0)');
        }

        private setTransition() {
            this.$el.css('-' + this.transitionPrefix + '-transition',
                         '-' + this.transformPrefix + '-transform .3s ease-in-out');
        }

        private unsetTransition() {
            this.$el.css('-' + this.transitionPrefix + '-transition', 'none');
        }

    }

}
