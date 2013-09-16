/// <reference path="../definitions/underscore.d.ts" />
/// <reference path="../definitions/jquery.d.ts" />
/// <reference path="service/flip-service.ts" />
/// <reference path="data/options/options.ts" />
/// <reference path="enum/start-enum.ts" />

module Q {
    
    export class Flipper {

        private flipService: any;
        private options: Options;
        private startEnum: StartEnum = StartEnum.Failure;

        start(id: string, options: any) {
            this.options = new Options();
            this.options.createType(options.type);
            this.options.createView((options.view)? options.view: '.view');
            this.options.createItem((options.item)? options.item: '.item');
            this.options.createLamp((options.lamp)? options.lamp: '.lamp');

            this.flipService = new FlipService($(id), this.options);
            this.startEnum = StartEnum.Success;
            this.refresh();
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

    }

}
