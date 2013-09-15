/// <reference path="interface/iflip.ts" />
/// <reference path="point.ts" />

module Q {
    
    export class Flip implements IFlip {

        private point = new Point();

        refresh() {
        }

        toNext() {
            if(this.hasNext()) {
            }
        }

        toPrev() {
            if(this.hasPrev()) {
            }
        }

        moveToPoint(point: number) {
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

    }

}
