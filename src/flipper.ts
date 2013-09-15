/// <reference path="../definitions/underscore.d.ts" />
/// <reference path="../definitions/zepto.d.ts" />
/// <reference path="flip-creater.ts" />
/// <reference path="enum/start-enum.ts" />
/// <reference path="enum/fliptype-enum.ts" />

module Q {
    
    export class Flipper {

        private flipCreater: any;
        private startEnum: StartEnum = StartEnum.Failure;
        private flipTypeEnum: FlipTypeEnum = FlipTypeEnum.Simple;

        start(id: string, option: any) {
            this.flipCreater = new FlipCreater($(id), this.checkFlipType(option.type));
            this.startEnum = StartEnum.Success;
            this.refresh();
            console.log(this.flipCreater);
        }

        refresh() {
            if(this.checkStart()) {
                this.flipCreater.refresh();
            }
        }

        toNext() {
            if(this.checkStart()) {
                this.flipCreater.toNext();
            }
        }

        toPrev() {
            if(this.checkStart()) {
                this.flipCreater.toPrev();
            }
        }

        moveToPoint(point: number) {
            if(this.checkStart()) {
                this.flipCreater.moveToPoint(point);
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
