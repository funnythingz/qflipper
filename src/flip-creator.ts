module Q {
    
    export class FlipCreator {

        createFlipFactory($el: JQuery, options: Options): Flip {

            if(options.type.getType() === FlipTypeEnum.Simple) {
                var simpleFlipFactory = new SimpleFlipFactory();
                return simpleFlipFactory.createFlip($el, options);
            }
            if(options.type.getType() === FlipTypeEnum.Rich) {
                var richFlipFactory =  new RichFlipFactory();
                return richFlipFactory.createFlip($el, options);
            }

        }

    }

}
