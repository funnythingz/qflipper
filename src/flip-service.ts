module Q {
    
    export class FlipService {

        constructor($el: JQuery, options: Options){
            if(options.type.getType() === FlipTypeEnum.Simple) {
                var simpleFlipFactory = new SimpleFlipFactory();
                return simpleFlipFactory.createSimpleFlip($el, options);
            }
            if(options.type.getType() === FlipTypeEnum.Rich) {
                var richFlipFactory =  new RichFlipFactory();
                return richFlipFactory.createRichFlip($el, options);
            }
        }

    }

}
