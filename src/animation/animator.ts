module Q {
    
    export class Animator {

        private transitionWithPrefix = new TransitionWithPrefixDecorator(new TransitionCss3Propaty());
        private transformWithPrefix = new TransformWithPrefixDecorator(new TransformCss3Propaty());

        private $el: JQuery = FLIP_ELEMENT.getElement();

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
