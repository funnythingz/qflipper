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
                var fptouchstartEventCreator = new TriggerEventCreator();

                var startPositionCreator = new PositionCreator();
                this.startPosition = startPositionCreator.createPosition(event);

                fptouchstartEventCreator.createEvent('fptouchstart');
            });
        }

        private touchmove() {
            this.animationFlag.disabled();

            var fptouchmoveEventCreator = new TriggerEventCreator();

            this.$el.on('touchmove', (event: any) => {
                event.stopPropagation();

                if(!this.animationFlag.checkStatus()) {
                    this.traseDistance(event);
                }

                if(this.animationFlag.checkStatus()) {
                    var moveDistanceHelper = new MoveDistanceHelper(this.startPosition.getX(), event)
                    var moveDistance = moveDistanceHelper.getMoveDistance();
                    this.snapFitAnimation(moveDistance);
                    this.delegateDistancePosition(event);
                }

                fptouchmoveEventCreator.createEvent('fptouchmove');
            });
        }

        private touchend() {
            this.$el.on('touchend', (event: any) => {
                var fptouchendEventCreator =  new TriggerEventCreator();

                if(this.animationFlag.checkStatus()) {
                    this.startAnimation();
                    fptouchendEventCreator.createEvent('fptouchend');
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

        private delegateDistancePosition(touchmoveEvent: any) {
            var touchmovePositionCreator = new PositionCreator();
            var touchmovePosition = touchmovePositionCreator.createPosition(touchmoveEvent);

            var distancePositionCreator = new DistancePositionCreator(touchmovePosition);
            this.distancePosition = distancePositionCreator.createPosition(this.startPosition);
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

    }

}
