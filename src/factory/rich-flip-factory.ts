module Q {
    
    export class RichFlipFactory extends Flip {

        private startPosition: Position;
        private distancePosition: Position;
        private animationFlag = new AnimationFlag();

        constructor(
            options: Options
        ) {
            super(options);

            this.bindTouchEvents();
        }

        private bindTouchEvents() {
            this.touchstart();
            this.touchmove();
            this.touchend();
            this.touchcancel();
        }

        private touchstart() {
            this.$el.on('touchstart', (event: any) => {
                this.startPosition = new Position(
                    event.originalEvent.touches[0].clientX,
                    event.originalEvent.touches[0].clientY
                );
            });
        }

        private touchmove() {
            this.animationFlag.disabled();

            this.$el.on('touchmove', (event: any) => {
                event.stopPropagation();

                if(!this.animationFlag.checkStatus()) {
                    this.traseDistance(event);
                }

                if(this.animationFlag.checkStatus()) {
                    var moveDistance = this.startPosition.getX() - event.originalEvent.touches[0].clientX;
                    this.snapFitAnimation(moveDistance);
                    this.delegateDistancePosition(event);
                }

            });
        }

        private touchend() {
            this.$el.on('touchend', (event: any) => {
                if(this.animationFlag.checkStatus()) {
                    this.startAnimation();
                    this.triggerEvent('flipend');
                }
                this.animationFlag.disabled();
            });
        }

        private touchcancel() {
            this.$el.on('touchcancel', (event: any) => {});
        }

        private traseDistance(touchmoveEvent: any) {
            this.delegateDistancePosition(touchmoveEvent);
            if(Math.abs(this.distancePosition.getY()) < 10 && Math.abs(this.distancePosition.getX()) > 10) {
                event.preventDefault();
                this.animationFlag.enabled();
            }
        }

        private delegateDistancePosition(event: any) {
            this.distancePosition =  new Position(
                this.startPosition.getX() - event.originalEvent.touches[0].clientX,
                this.startPosition.getY() - event.originalEvent.touches[0].clientY
            );
        }

        private startAnimation() {
            if(this.distancePosition.getX() > 0) {
                this.toNext();
            }
            if(this.distancePosition.getX() < 0) {
                this.toPrev();
            }
        }

        private snapFitAnimation(moveDistance: number = 0) {
            this.animator.noTransAnimation(- ((this.getPoint() * this.itemSize.getSoloWidth()) + moveDistance));
        }

        private triggerEvent(type: string) {
            return this.$el.trigger(
                $.Event(type)
            );
        }

    }

}
