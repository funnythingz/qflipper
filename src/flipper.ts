/// <reference path="./reference.ts" />

module Q {
    
    export class Flipper implements IFlipper {

        private $el: JQuery;
        private flip: Flip;

        constructor(id: string,
                    args: any = {
                        type: 'simple',
                        view: '.view',
                        item: '.item'
                    }) {

            var options = new Options();

            options.createType((args.type)? args.type: 'simple');
            options.createView((args.view)? args.view: '.view');
            options.createItem((args.item)? args.item: '.item');

            this.$el = $(id);

            var flipCreator = new FlipCreator(this.$el, options);
            this.flip = flipCreator.createFlip();

            this.refresh();

        }

        refresh() {
            this.flip.refresh();
        }

        toNext() {
            this.flip.toNext();
        }

        toPrev() {
            this.flip.toPrev();
        }

        moveToPoint(point: number) {
            this.flip.moveToPoint(point);
        }

        hasNext(): boolean {
            return this.flip.hasNext();
        }

        hasPrev(): boolean {
            return this.flip.hasPrev();
        }

        getPoint(): number {
            return this.flip.getPoint();
        }

        getMaxPoint(): number {
            return this.flip.getMaxPoint();
        }

        flipElement(): JQuery {
            return this.$el;
        }

    }

}
