module Q {
    
    export class SimpleFlip extends Flip {

        constructor(
            $el: JQuery,
            options: Options
        ) {
            super($el, options);

            this.setTouchEvent();
        }

        private setTouchEvent() {
            var startPosition: Position;
            var distancePosition: Position;

            this.$el.on('touchstart', (event) => {
                console.log(event.type);
                startPosition = new Position(
                    event.originalEvent.touches[0].clientX,
                    event.originalEvent.touches[0].clientY
                );
                console.log(startPosition.getX());
                console.log(startPosition.getY());
            });
            this.$el.on('touchmove', (event) => {
                console.log(event.type);
                distancePosition = new Position(
                    startPosition.getX() - event.originalEvent.touches[0].clientX,
                    startPosition.getY() - event.originalEvent.touches[0].clientY
                );
                console.log(distancePosition.getX());
                console.log(distancePosition.getY());
            });
            this.$el.on('touchend', (event) => {
                console.log(event.type);
            });
            this.$el.on('touchcancel', (event) => {
                console.log(event.type);
            });

            //var simpleTouchEventer = new SimpleTouchEventer();
            //simpleTouchEventer.createSimpleTouchEvent(this.$el);
        }

    }

}
