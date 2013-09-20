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
                console.log(event);
            });
        }

    }

}
