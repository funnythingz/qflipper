/// <reference path="flip/rich-flip.ts" />

module Q {
    
    export class RichFlipFactory {

        createRichFlip($el: JQuery, options: Options) {
            return new RichFlip($el, options);
        }

    }

}
