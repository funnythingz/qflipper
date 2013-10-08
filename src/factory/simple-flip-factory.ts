module Q {
    
    export class SimpleFlipFactory extends Flip {

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
                var flipstartEventCreator = new TriggerEventCreator();

                this.startPosition = new Position(
                    event.originalEvent.touches[0].clientX,
                    event.originalEvent.touches[0].clientY
                );

                flipstartEventCreator.createEvent('flipstart');
            });
        }

        private touchmove() {
            this.animationFlag.disabled();

            var flipmoveEventCreator = new TriggerEventCreator();
            var flipendEventCreator =  new TriggerEventCreator();

            this.$el.on('touchmove', (event: any) => {
                event.stopPropagation();

                if(!this.animationFlag.checkStatus()) {
                    this.traseDistance(event);

                    flipmoveEventCreator.createEvent('flipmove');

                    if(this.animationFlag.checkStatus()) {
                        this.startAnimation();

                        flipendEventCreator.createEvent('flipend');
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
            this.distancePosition = new Position(
                this.startPosition.getX() - touchmoveEvent.originalEvent.touches[0].clientX,
                this.startPosition.getY() - touchmoveEvent.originalEvent.touches[0].clientY
            );

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
