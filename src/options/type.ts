module Q {

    export class Type {

        private type: FlipTypeEnum;

        constructor(type: string = (type)? type: 'simple') {
            if(type === 'simple') {
                this.type = FlipTypeEnum.Simple;
            }
            if(type === 'rich') {
                this.type = FlipTypeEnum.Rich;
            }
        }

        getType(): FlipTypeEnum {
            return this.type;
        }

    }

}
