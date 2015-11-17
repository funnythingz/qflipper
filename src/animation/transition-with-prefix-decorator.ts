module Q {

    export class TransitionWithPrefixDecorator implements ICss3Propaty {

        private prefixChecker: PrefixChecker;

        constructor($el: JQuery, private css3PropatyName: ICss3Propaty) {
            this.prefixChecker = new PrefixChecker($el, css3PropatyName);
        }

        getCss3PropatyName(): string {
            return '-' + this.prefixChecker.getPrefix() + '-' + this.css3PropatyName.getCss3PropatyName();
        }

    }

}
