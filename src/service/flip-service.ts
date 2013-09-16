/// <reference path="../factory/simple-flip-factory.ts" />
/// <reference path="../factory/rich-flip-factory.ts" />

module Q {
    
    export class FlipService {

        constructor($el: JQuery, options: Options){
            if(_.isEqual(options.type.getType(), FlipTypeEnum.Simple)) {
                var simpleFlipFactory = new SimpleFlipFactory();
                return simpleFlipFactory.createSimpleFlip($el, options);
            }
            if(_.isEqual(options.type.getType(), FlipTypeEnum.Rich)) {
                var richFlipFactory =  new RichFlipFactory();
                return richFlipFactory.createRichFlip($el, options);
            }
        }

    }

}
