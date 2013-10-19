module Q {

    export class DistancePositionCreator {

        constructor(
            private touchmovePosition: Position
        ) {}

        createPosition(startPosition: Position): Position {
            return new Position(
                startPosition.getX() - this.touchmovePosition.getX(),
                startPosition.getY() - this.touchmovePosition.getY()
            );
        }

    }

}
