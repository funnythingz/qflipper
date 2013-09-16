module Q {
    
    export class TransAnimater {

        private $el: JQuery;

        constructor($el: JQuery) {
            this.$el = $el;
            this.$el.css('webkitTransition', '-webkit-transform 0.3s ease-in-out');
        }

        loadAnimation(movePosition: number) {
            this.$el.css('webkitTransform', 'translate3d(' + movePosition + 'px, 0, 0)');
        }
    }

}
