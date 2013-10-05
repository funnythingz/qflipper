module Q {

    export class TransitionWithPrefixDecorator implements ICss3Propaty {

        private prefixChecker: PrefixChecker;

        constructor(
            private css3PropatyName: ICss3Propaty
        ) {
            this.prefixChecker = new PrefixChecker(TransitionEnum);
        }

        getCss3PropatyName(): string {
            return '-' + this.prefixChecker.getPrefix() + '-' + this.css3PropatyName.getCss3PropatyName();
        }

    }

}
