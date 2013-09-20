module Q {
    
    export class SimpleTouchEventer {

        private startPosition: Position;
        private distancePosition: Position;

        constructor(public $el: JQuery) {}

        attachEvent() {
            this.$el.on('touchstart',  this.touchstart);
            this.$el.on('touchmove',   this.touchmove);
            this.$el.on('touchend',    this.touchend);
            this.$el.on('touchcancel', this.touchcansel);
        }

        private touchstart(event: any) {
            console.log(event.type);
            this.startPosition = new Position(
                event.originalEvent.touches[0].clientX,
                event.originalEvent.touches[0].clientY
            );
            console.log(this.startPosition.getX());
            console.log(this.startPosition.getY());
        }

        private touchmove(event: any) {
            console.log(event.type);
            this.distancePosition = new Position(
                this.startPosition.getX() - event.originalEvent.touches[0].clientX,
                this.startPosition.getY() - event.originalEvent.touches[0].clientY
            );
            console.log(this.distancePosition.getX());
            console.log(this.distancePosition.getY());
        }

        private touchend(event: any) {
            console.log(event.type);
        }

        private touchcansel(event: any) {
            console.log(event.type);
        }

    }

}
