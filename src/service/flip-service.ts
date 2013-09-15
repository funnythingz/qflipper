/// <reference path="../factory/simple-flip-factory.ts" />
/// <reference path="../factory/rich-flip-factory.ts" />

module Q {
    
    export class FlipService {

        constructor($elm: ZeptoCollection,
                    options: Options)
        {
            if(_.isEqual(options.type.getType(), FlipTypeEnum.Simple)) {
                var simpleFlipFactory = new SimpleFlipFactory();
                return simpleFlipFactory.createSimpleFlip($elm, options);
            }
            if(_.isEqual(options.type.getType(), FlipTypeEnum.Rich)) {
                var richFlipFactory =  new RichFlipFactory();
                return richFlipFactory.createRichFlip($elm, options);
            }
        }

    }

}
