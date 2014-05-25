module Q {
    
    export class Animator {

        private transitionWithPrefix: TransitionWithPrefixDecorator;
        private transformWithPrefix: TransformWithPrefixDecorator;

        constructor(private $el: JQuery) {

            this.transitionWithPrefix = new TransitionWithPrefixDecorator(this.$el, new TransitionCss3Propaty());
            this.transformWithPrefix = new TransformWithPrefixDecorator(this.$el, new TransformCss3Propaty());
        }

        transAnimation(movePosition: number) {
            this.setTransition();

            var translateX3d = new TranslateX3d(movePosition);

            this.$el.css(
                this.transformWithPrefix.getCss3PropatyName(),
                translateX3d.getMovePosition()
            );
        }

        noTransAnimation(movePosition: number) {
            this.unsetTransition();

            var translateX3d = new TranslateX3d(movePosition);

            this.$el.css(
                this.transformWithPrefix.getCss3PropatyName(),
                translateX3d.getMovePosition()
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
