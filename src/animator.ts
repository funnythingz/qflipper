module Q {
    
    export class Animator {

        private transitionWithPrefix: TransitionWithPrefixDecorator;
        private transformWithPrefix: TransformWithPrefixDecorator;

        constructor(
            private $el: JQuery
        ) {
            this.transitionWithPrefix = new TransitionWithPrefixDecorator(new TransitionCss3Propaty(), this.$el);
            this.transformWithPrefix = new TransformWithPrefixDecorator(new TransformCss3Propaty(), this.$el);
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
