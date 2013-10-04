module Q {
    
    export class Animator {

        private transitionWithPrefix: TransitionWithPrefixDecorator;
        private transformWithPrefix:  TransformWithPrefixDecorator;

        private $el: JQuery = FLIP_ELEMENT.getElement();

        constructor() {
            this.transitionWithPrefix = new TransitionWithPrefixDecorator(new TransitionCss3Propaty());
            this.transformWithPrefix = new TransformWithPrefixDecorator(new TransformCss3Propaty());
        }

        transAnimation(movePosition: number) {
            this.setTransition();
            this.$el.css(
                this.transformWithPrefix.getCss3PropatyName(),
                'translate3d(' + movePosition + 'px, 0, 0)'
            );
        }

        noTransAnimation(movePosition: number) {
            this.unsetTransition();
            this.$el.css(
                this.transformWithPrefix.getCss3PropatyName(),
                'translate3d(' + movePosition + 'px, 0, 0)'
            );
        }

        private setTransition() {
            this.$el.css(
                this.transitionWithPrefix.getCss3PropatyName(),
                this.transformWithPrefix.getCss3PropatyNameWithEffect()
            );
        }

        private unsetTransition() {
            this.$el.css(
                this.transitionWithPrefix.getCss3PropatyName(),
                'none'
            );
        }

    }

}
