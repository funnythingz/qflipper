module Q {
    
    export class SimpleFlip extends Flip {

        constructor(
            $el: JQuery,
            options: Options
        ) {
            super($el, options);

            var simpleTouchEventer = new SimpleTouchEventer(this.$el);
            simpleTouchEventer.attachEvent();
        }

    }

}
