module Q {
    
    export class FlipCreator {

        createFlip($el: JQuery, options: Options): Flip {

            if(options.type.getType() === FlipTypeEnum.Simple) {
                return new SimpleFlipFactory($el, options);
            }
            if(options.type.getType() === FlipTypeEnum.Rich) {
                return new RichFlipFactory($el, options);
            }

        }

    }

}
