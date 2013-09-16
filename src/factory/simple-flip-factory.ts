/// <reference path="flip/simple-flip.ts" />

module Q {
    
    export class SimpleFlipFactory {

        createSimpleFlip($el: JQuery, options: Options) {
            return new SimpleFlip($el, options);
        }

    }

}
