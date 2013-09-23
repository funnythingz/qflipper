module Q {
    
    export class Flip {

        private point = new Point();
        private itemSize: ItemSize;
        private animater: Animater;

        constructor(
            public $el: JQuery,
            public options: Options
        ) {
            this.resetPoint();

            this.itemSize = new ItemSize(this.$el, this.options);
            this.animater = new Animater(this.$el);

            this.setFlipView();
        }

        refresh() {
            this.resetPoint();
            this.transAnimation();
        }

        toNext() {
            if(this.hasNext()) {
                this.point.setPoint(this.point.getNow() + 1);
                this.transAnimation();
            }
        }

        toPrev() {
            if(this.hasPrev()) {
                this.point.setPoint(this.point.getNow() - 1);
                this.transAnimation();
            }
        }

        moveToPoint(point: number) {
            if(point < this.itemSize.getTotalLength()) {
                this.point.setPoint(point);
            }
            if (point >= this.itemSize.getTotalLength()) {
                this.point.setPoint(this.itemSize.getTotalLength() - 1);
            }
            this.transAnimation();
        }

        hasNext(): boolean {
            if(this.point.getNow() < this.itemSize.getTotalLength() - 1) {
                return true;
            }
            return false;
        }

        hasPrev(): boolean {
            if(0 < this.point.getNow() && this.point.getNow() <= this.itemSize.getTotalLength() - 1) {
                return true;
            }
            return false;
        }

        private resetPoint() {
            this.point.setPoint(0);
        }

        private setFlipView() {
            this.$el.css({width: this.itemSize.getTotalWidth().toString() + 'px'});
        }

        private transAnimation() {
            this.animater.transAnimation(- (this.point.getNow() * this.itemSize.getSoloWidth()));
        }

        private noTransAnimation() {
            this.animater.noTransAnimation(- (this.point.getNow() * this.itemSize.getSoloWidth()));
        }

    }

}
