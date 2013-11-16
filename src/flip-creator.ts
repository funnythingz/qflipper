module Q {
    
    export class FlipCreator {

        createFlip(options: Options): Flip {

            if(options.type.getType() === FlipTypeEnum.Simple) {
                return new SimpleFlip(options);
            }
            if(options.type.getType() === FlipTypeEnum.Rich) {
                return new RichFlip(options);
            }

        }

    }

}
