module Q {
    
    export class Flip implements IFlipper {

        point: Point;
        itemSize: ItemSize;
        animator: Animator;

        constructor(public $el: JQuery, public options: Options) {

            this.resetPoint();

            this.itemSize = new ItemSize(this.$el, this.options);
            this.animator = new Animator(this.$el);

            this.setFlipView();
        }

        refresh() {
            this.resetPoint();
            this.transAnimation();
        }

        toNext() {
            if(this.hasNext()) {
                this.point = new Point(this.getPoint() + 1);
            }
            this.transAnimation();
        }

        toPrev() {
            if(this.hasPrev()) {
                this.point = new Point(this.getPoint() - 1);
            }
            this.transAnimation();
        }

        moveToPoint(point: number) {
            if(point < this.getMaxPoint()) {
                this.point = new Point(point);
            }
            if (point >= this.getMaxPoint()) {
                this.point = new Point(this.getMaxPoint() - 1);
            }
            this.transAnimation();
        }

        hasNext(): boolean {
            if(this.getPoint() < this.getMaxPoint() - 1) {
                return true;
            }
            return false;
        }

        hasPrev(): boolean {
            if(0 < this.getPoint() && this.getPoint() <= this.getMaxPoint() - 1) {
                return true;
            }
            return false;
        }

        getPoint(): number {
            return this.point.getPoint();
        }

        getMaxPoint(): number {
            return this.itemSize.getTotalLength();
        }

        private resetPoint() {
            this.point = new Point(0);
        }

        private setFlipView() {
            this.$el.css({width: this.itemSize.getTotalWidth().toString() + 'px'});
        }

        private transAnimation() {
            this.animator.transAnimation(- (this.getPoint() * this.itemSize.getSoloWidth()));
        }
        
    }

}
