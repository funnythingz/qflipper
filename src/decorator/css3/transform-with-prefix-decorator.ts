module Q {

    export class TransformWithPrefixDecorator implements ICss3Propaty {

        private prefixChecker: PrefixChecker;

        constructor(
            private css3PropatyName: ICss3Propaty,
            private $el: JQuery
        ) {
            this.prefixChecker = new PrefixChecker(this.$el, TransformEnum);
        }

        getCss3PropatyName(): string {
            return '-' + this.prefixChecker.getPrefix() + '-' + this.css3PropatyName.getCss3PropatyName();
        }

        getCss3PropatyNameWithEffect(): string {
            return this.getCss3PropatyName() + ' .3s ease-in-out';
        }

    }

}
