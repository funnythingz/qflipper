module Q {

    export class MoveDistanceHelper {

        constructor(
            private startPositionX: number,
            private touchmoveEvent: any
        ) {}

        getMoveDistance(): number {
            var $nameChecker = new $NameChecker();
            var $name: $NameEnum = $nameChecker.get$Name();

            if($name === $NameEnum.jQuery) {
                return this.startPositionX - this.touchmoveEvent.originalEvent.touches[0].clientX;
            }

            if($name === $NameEnum.Zepto) {
                return this.startPositionX - this.touchmoveEvent.changedTouches[0].clientX;
            }
        }

    }

}
