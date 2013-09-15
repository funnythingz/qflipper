/// <reference path="../../interface/iflip.ts" />
/// <reference path="../../data/point.ts" />

module Q {
    
    export class Flip implements IFlip {

        private point: Point;
        private $el: ZeptoCollection;

        constructor(elm: ZeptoCollection) {
            this.point = new Point();
            this.resetPoint();
            this.$el = elm;
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

        private resetPoint() {
            this.point.setPoint(0);
        }

    }

}
