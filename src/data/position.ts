module Q {

    export class Position {

        private y: number;
        private x: number;

        setY(y: number) {
            this.y = y;
        }

        setX(x: number) {
            this.x = x;
        }

        getY(): number {
            return this.y;
        }

        getX(): number {
            return this.x;
        }

    }

}
