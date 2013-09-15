/// <reference path="flip/rich-flip.ts" />

module Q {
    
    export class RichFlipFactory {

        createRichFlip(elm: ZeptoCollection) {
            return new RichFlip(elm);
        }

    }

}
