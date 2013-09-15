/// <reference path="../../enum/fliptype-enum.ts" />

module Q {

    export class Type {

        private type: FlipTypeEnum;

        constructor(type: string = (type)? type: 'simple') {
            if(_.isEqual(type, 'simple')) {
                this.type = FlipTypeEnum.Simple;
            }
            if(_.isEqual(type, 'rich')) {
                this.type = FlipTypeEnum.Rich;
            }
        }

        getType(): FlipTypeEnum {
            return this.type;
        }

    }

}
