/// <reference path="../../interface/iflip.ts" />
/// <reference path="../../data/item-size.ts" />
/// <reference path="../../data/point.ts" />

module Q {
    
    export class Flip implements IFlip {

        private point: Point;
        private $el: JQuery;
        private options: Options;

        private itemSize: ItemSize;

        constructor($el: JQuery, options: Options) {
            this.$el = $el;
            this.options = options;
            this.init();
        }

        refresh() {
            this.resetPoint();
        }

        toNext() {
            if(this.hasNext()) {
                this.point.setPoint(this.point.getNow() + 1);
            }
        }

        toPrev() {
            if(this.hasPrev()) {
                this.point.setPoint(this.point.getNow() - 1);
            }
        }

        moveToPoint(point: number) {
            this.point.setPoint(point);
        }

        private hasNext(): boolean {
            if(this.point.getNow() < this.point.getMax()) {
                return true;
            }
            return false;
        }

        private hasPrev(): boolean {
            if(0 < this.point.getNow() && this.point.getNow() <= this.point.getMax()) {
                return true;
            }
            return false;
        }

        private init() {
            this.point = new Point();
            this.resetPoint();
            this.itemSize = new ItemSize(this.$el, this.options);
        }

        private resetPoint() {
            this.point.setPoint(0);
        }

    }

}
