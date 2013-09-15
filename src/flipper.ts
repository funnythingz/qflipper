/// <reference path="../definitions/underscore.d.ts" />
/// <reference path="../definitions/zepto.d.ts" />
/// <reference path="service/flip-service.ts" />
/// <reference path="enum/start-enum.ts" />
/// <reference path="enum/fliptype-enum.ts" />

module Q {
    
    export class Flipper {

        private flipService: any;
        private startEnum: StartEnum = StartEnum.Failure;
        private flipTypeEnum: FlipTypeEnum = FlipTypeEnum.Simple;

        start(id: string, option: any) {
            this.flipService = new FlipService($(id), this.checkFlipType(option.type));
            this.startEnum = StartEnum.Success;
            this.refresh();
            console.log(this.flipService);
        }

        refresh() {
            if(this.checkStart()) {
                this.flipService.refresh();
            }
        }

        toNext() {
            if(this.checkStart()) {
                this.flipService.toNext();
            }
        }

        toPrev() {
            if(this.checkStart()) {
                this.flipService.toPrev();
            }
        }

        moveToPoint(point: number) {
            if(this.checkStart()) {
                this.flipService.moveToPoint(point);
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
