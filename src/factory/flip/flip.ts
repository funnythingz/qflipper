/// <reference path="../../interface/iflip.ts" />
/// <reference path="../../data/item-size.ts" />
/// <reference path="../../data/point.ts" />
/// <reference path="../../animation/animater.ts" />

module Q {
    
    export class Flip implements IFlip {

        point: Point;
        itemSize: ItemSize;
        animater: Animater;

        constructor(public $el: JQuery,
                    public options: Options) {
            this.init();
        }

        refresh() {
            this.resetPoint();
            console.log(this.point.getNow());
            this.transAnimation();
        }

        toNext() {
            if(this.hasNext()) {
                this.point.setPoint(this.point.getNow() + 1);
                console.log(this.point.getNow());
                this.transAnimation();
            }
        }

        toPrev() {
            if(this.hasPrev()) {
                this.point.setPoint(this.point.getNow() - 1);
                console.log(this.point.getNow());
                this.transAnimation();
            }
        }

        moveToPoint(point: number) {
            if(point < this.itemSize.getTotalLength()) {
                this.point.setPoint(point);
            } else if (point >= this.itemSize.getTotalLength()) {
                this.point.setPoint(this.itemSize.getTotalLength() - 1);
            }
            console.log(this.point.getNow());
            this.transAnimation();
        }

        setTouchEvent() {
            this.$el.on('touchstart', (event) => {
                console.log('touchstart');
            });
        }

        private init() {
            this.point = new Point();
            this.resetPoint();
            this.itemSize = new ItemSize(this.$el, this.options);
            this.animater = new Animater(this.$el);
            this.setFlipView();
            this.setTouchEvent();
        }

        private hasNext(): boolean {
            if(this.point.getNow() < this.itemSize.getTotalLength() - 1) {
                return true;
            }
            return false;
        }

        private hasPrev(): boolean {
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
