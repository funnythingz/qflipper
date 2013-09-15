/// <reference path="flip/rich-flip.ts" />

module Q {
    
    export class RichFlipFactory {

        createRichFlip($elm: ZeptoCollection, options: Options) {
            return new RichFlip($elm, options);
        }

    }

}
