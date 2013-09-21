module Q {
    
    export class SimpleFlip extends Flip {

        private startPosition: Position;
        private distancePosition: Position;
        private animationFlag = new AnimationFlag();

        constructor(
            $el: JQuery,
            options: Options
        ) {
            super($el, options);

            this.touchstart();
            this.touchmove();
            this.touchend();
            this.touchcancel();
        }

        private touchstart() {
            this.$el.on('touchstart',  (event: any) => {
                this.startPosition = new Position(
                    event.originalEvent.touches[0].clientX,
                    event.originalEvent.touches[0].clientY
                );
            });
        }

        private touchmove() {
            var self: SimpleFlip = this;
            this.animationFlag.disabled();

            this.$el.on('touchmove', (event: any) => {
                event.stopPropagation();

                if(!this.animationFlag.checkStatus()) {
                    this.distancePosition = new Position(
                        this.startPosition.getX() - event.originalEvent.touches[0].clientX,
                        this.startPosition.getY() - event.originalEvent.touches[0].clientY
                    );

                    if(Math.abs(this.distancePosition.getY()) < 10 && Math.abs(this.distancePosition.getX()) > 10) {
                        event.preventDefault();
                        this.animationFlag.enabled();
                    }

                    if(this.animationFlag.checkStatus()) {
                        if(this.distancePosition.getX() > 0) {
                            this.toNext();
                        }
                        if(this.distancePosition.getX() < 0) {
                            this.toPrev();
                        }
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
            this.$el.on('touchcancel', (event: any) => {
            });
        }


    }

}
