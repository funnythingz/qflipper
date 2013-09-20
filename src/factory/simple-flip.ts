module Q {
    
    export class SimpleFlip extends Flip {

        constructor(
            $el: JQuery,
            options: Options
        ) {
            super($el, options);
        }

        // @override
        setTouchEvent() {
            this.$el.on('touchstart', (event) => {
                console.log(event.type);
                console.log(event.originalEvent.touches);
            });
            this.$el.on('touchmove', (event) => {
                console.log(event.type);
            });
            this.$el.on('touchend', (event) => {
                console.log(event.type);
            });
            this.$el.on('touchcancel', (event) => {
                console.log(event.type);
            });
        }

    }

}
