module Q {

    export class TransformWithPrefixDecorator implements ICss3Propaty {

        private prefixChecker: PrefixChecker;

        constructor(
            private css3PropatyName: ICss3Propaty
        ) {

            this.prefixChecker = new PrefixChecker(TransformEnum);
        }

        getCss3PropatyName(): string {
            return '-' + this.prefixChecker.getPrefix() + '-' + this.css3PropatyName.getCss3PropatyName();
        }

        getCss3PropatyNameWithEffect(): string {
            return this.getCss3PropatyName() + ' .3s ease-in-out';
        }

    }

}
