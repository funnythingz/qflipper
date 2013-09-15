/// <reference path="../../definitions/underscore.d.ts" />
/// <reference path="../../definitions/zepto.d.ts" />
/// <reference path="flipfactory.ts" />
/// <reference path="enum/start-enum.ts" />
/// <reference path="enum/fliptype-enum.ts" />

module Q {
    
    export class Flipper {

        private flipFactory: FlipFactory;
        private startEnum: StartEnum = StartEnum.Failure;
        private flipTypeEnum: FlipTypeEnum = FlipTypeEnum.Simple;

        start(id: string, option: any) {
            this.flipFactory = new FlipFactory();
            this.flipFactory.createFlip($('#' + id), this.checkFlipType(option.type));
            this.startEnum = StartEnum.Success;
        }

        refresh() {
            if(this.checkStart()) {
                flipFactory.refresh();
            }
        }

        toNext() {
            if(this.checkStart()) {
                flipFactory.toNext();
            }
        }

        toPrev() {
            if(this.checkStart()) {
                flipFactory.toPrev();
            }
        }

        moveToPoint(point: number) {
            if(this.checkStart()) {
                flipFactory.moveToPoint(point);
            }
        }

        private checkStart(): boolean {
            if(this.startEnum === StartEnum.Success) {
                return true;
            }
            if(this.startEnum === StartEnum.Failure) {
                return false;
            }
        }

        private checkFlipType(type: string): FlipTypeEnum {
            if(type === 'simple') {
                return FlipTypeEnum.Simple;
            }
            if(type === 'rich') {
                return FlipTypeEnum.Rich;
            }
        }

    }

}
