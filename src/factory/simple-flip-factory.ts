/// <reference path="flip/simple-flip.ts" />

module Q {
    
    export class SimpleFlipFactory {

        createSimpleFlip(elm: ZeptoCollection) {
            return new SimpleFlip(elm);
        }

    }

}
