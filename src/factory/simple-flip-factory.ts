/// <reference path="flip/simple-flip.ts" />

module Q {
    
    export class SimpleFlipFactory {

        createSimpleFlip($elm: ZeptoCollection, options: Options) {
            return new SimpleFlip($elm, options);
        }

    }

}
