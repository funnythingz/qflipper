module Q {
    
    export class SimpleFlipFactory {

        createFlip($el: JQuery, options: Options): Flip {
            return new SimpleFlip($el, options);
        }

    }

}
