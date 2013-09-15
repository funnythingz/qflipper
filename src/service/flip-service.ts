/// <reference path="../factory/simple-flip-factory.ts" />
/// <reference path="../factory/rich-flip-factory.ts" />

module Q {
    
    export class FlipService {

        constructor(elm: ZeptoCollection, type: FlipTypeEnum) {
            if(type === FlipTypeEnum.Simple) {
                var simpleFlipFactory = new SimpleFlipFactory();
                return simpleFlipFactory.createSimpleFlip(elm);
            }
            if(type === FlipTypeEnum.Rich) {
                var richFlipFactory =  new RichFlipFactory();
                return richFlipFactory.createRichFlip(elm);
            }
        }

    }

}
