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
                this.point.setPoint(this.getPoint() + 1);
                this.transAnimation();
            }
        }

        toPrev() {
            if(this.hasPrev()) {
                this.point.setPoint(this.getPoint() - 1);
                this.transAnimation();
            }
        }

        moveToPoint(point: number) {
            if(point < this.getMaxPoint()) {
                this.point.setPoint(point);
            }
            if (point >= this.getMaxPoint()) {
                this.point.setPoint(this.getMaxPoint() - 1);
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
            return this.point.getNow();
        }

        getMaxPoint(): number {
            return this.itemSize.getTotalLength();
        }

        private resetPoint() {
            this.point.setPoint(0);
        }

        private setFlipView() {
            this.$el.css({width: this.itemSize.getTotalWidth().toString() + 'px'});
        }

        private transAnimation() {
            this.animater.transAnimation(- (this.getPoint() * this.itemSize.getSoloWidth()));
        }

        private noTransAnimation() {
            this.animater.noTransAnimation(- (this.getPoint() * this.itemSize.getSoloWidth()));
        }

    }

}
