module Q {

    export class TransitionWithPrefixDecorator implements ICss3Propaty {

        private prefixChecker: PrefixChecker;

        constructor(
            private css3PropatyName: ICss3Propaty,
            private $el: JQuery
        ) {
            this.prefixChecker = new PrefixChecker(this.$el, TransitionEnum);
        }

        getCss3PropatyName(): string {
            return '-' + this.prefixChecker.getPrefix() + '-' + this.css3PropatyName.getCss3PropatyName();
        }

    }

}
