module Q {

    export class PositionCreator {

        createPosition(event: any): Position {

            var $nameChecker = new $NameChecker();
            var $name: $NameEnum = $nameChecker.get$Name();

            if($name === $NameEnum.jQuery) {
                return new Position(
                    event.originalEvent.touches[0].clientX,
                    event.originalEvent.touches[0].clientY
                );
            }

            if($name === $NameEnum.Zepto) {
                return new Position(
                    event.changedTouches[0].clientX,
                    event.changedTouches[0].clientY
                );
            }

        }
        
    }

}
