/// <reference path="./reference.ts" />

module Q {
    
    export class Flipper implements IFlipper {

        private flipService: any;

        constructor(id: string, args: any) {
            var options = new Options();
            options.createType((args.type)? args.type: 'simple');
            options.createView((args.view)? args.view: '.view');
            options.createItem((args.item)? args.item: '.item');
            options.createLamp((args.lamp)? args.lamp: '.lamp');

            this.flipService = new FlipService($(id), options);
            this.refresh();
        }

        refresh() {
            this.flipService.refresh();
        }

        toNext() {
            this.flipService.toNext();
        }

        toPrev() {
            this.flipService.toPrev();
        }

        moveToPoint(point: number) {
            this.flipService.moveToPoint(point);
        }

        hasNext(): boolean {
            return this.flipService.hasNext();
        }

        hasPrev(): boolean {
            return this.flipService.hasPrev();
        }

        getPoint(): number {
            return this.flipService.getPoint();
        }

        getMaxPoint(): number {
            return this.flipService.getMaxPoint();
        }

    }

}
