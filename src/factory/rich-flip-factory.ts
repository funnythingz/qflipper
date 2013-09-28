module Q {
    
    export class RichFlipFactory {

        createFlip($el: JQuery, options: Options): Flip {
            return new RichFlip($el, options);
        }

    }

}
