module Q {
    
    export class FlipCreator {

        createFlip(options: Options): Flip {

            if(options.type.getType() === FlipTypeEnum.Simple) {
                return new SimpleFlipFactory(options);
            }
            if(options.type.getType() === FlipTypeEnum.Rich) {
                return new RichFlipFactory(options);
            }

        }

    }

}
