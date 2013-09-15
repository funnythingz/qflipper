/// <reference path="factory/simple-flip-factory.ts" />
/// <reference path="factory/rich-flip-factory.ts" />

module Q {
    
    export class FlipCollection {

        constructor(elm: ZeptoCollection, type: FlipTypeEnum) {
            if(type === FlipTypeEnum.Simple) {
                return new SimpleFlipFactory(elm);
            }
            if(type === FlipTypeEnum.Rich) {
                return new RichFlipFactory(elm);
            }
        }

    }

}
