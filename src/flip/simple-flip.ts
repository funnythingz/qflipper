module Q {
    
    export class SimpleFlip extends Flip {

        private startPosition: Position;
        private distancePosition: Position;
        private animationFlag = new AnimationFlag();
        private $nameChecker = new $NameChecker();

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
                var fpstarttouchEventCreator = new TriggerEventCreator();
                var $name = this.$nameChecker.get$Name();

                var startPositionCreator = new PositionCreator();
                this.startPosition = startPositionCreator.createPosition(event);

                fpstarttouchEventCreator.createEvent('fptouchstart');
            });
        }

        private touchmove() {
            this.animationFlag.disabled();

            var fptouchmoveEventCreator = new TriggerEventCreator();
            var fptouchendEventCreator =  new TriggerEventCreator();

            this.$el.on('touchmove', (event: any) => {
                event.stopPropagation();

                if(!this.animationFlag.checkStatus()) {
                    this.traseDistance(event);

                    fptouchmoveEventCreator.createEvent('fptouchmove');

                    if(this.animationFlag.checkStatus()) {
                        this.startAnimation();

                        fptouchendEventCreator.createEvent('fptouchend');
                    }
                }

            });
        }

        private touchend() {
            this.$el.on('touchend', (event: any) => {
                this.animationFlag.disabled();
            });
        }

        private touchcancel() {
            this.$el.on('touchcancel', (event: any) => {});
        }

        private traseDistance(touchmoveEvent: any) {
            var touchmovePositionCreator = new PositionCreator();
            var touchmovePosition = touchmovePositionCreator.createPosition(touchmoveEvent);

            var distancePositionCreator = new DistancePositionCreator(touchmovePosition);
            this.distancePosition = distancePositionCreator.createPosition(this.startPosition);

            if(Math.abs(this.distancePosition.getY()) < 10 && Math.abs(this.distancePosition.getX()) > 10) {
                event.preventDefault();
                this.animationFlag.enabled();
            }
        }

        private startAnimation() {
            if(this.distancePosition.getX() > 0) {
                this.toNext();
            }
            if(this.distancePosition.getX() < 0) {
                this.toPrev();
            }
        }

    }

}
