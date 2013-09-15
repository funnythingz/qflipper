/// <reference path="../definitions/underscore.d.ts" />
/// <reference path="../definitions/zepto.d.ts" />
/// <reference path="flip-collection.ts" />
/// <reference path="enum/start-enum.ts" />
/// <reference path="enum/fliptype-enum.ts" />

module Q {
    
    export class Flipper {

        private flipCollection: any;
        private startEnum: StartEnum = StartEnum.Failure;
        private flipTypeEnum: FlipTypeEnum = FlipTypeEnum.Simple;

        start(id: string, option: any) {
            this.flipCollection = new FlipCollection($(id), this.checkFlipType(option.type));
            this.startEnum = StartEnum.Success;
            console.log(this.flipCollection);
            this.refresh();
        }

        refresh() {
            if(this.checkStart()) {
                this.flipCollection.refresh();
            }
        }

        toNext() {
            if(this.checkStart()) {
                this.flipCollection.toNext();
            }
        }

        toPrev() {
            if(this.checkStart()) {
                this.flipCollection.toPrev();
            }
        }

        moveToPoint(point: number) {
            if(this.checkStart()) {
                this.flipCollection.moveToPoint(point);
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
