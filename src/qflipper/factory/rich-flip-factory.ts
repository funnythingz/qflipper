/// <reference path="flip/rich-flip.ts" />

module Q {
    
    export class RichFlipFactory {

        constructor(elm: ZeptoCollection) {
            return new RichFlip(elm);
        }

    }

}
