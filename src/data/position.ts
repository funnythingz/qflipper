module Q {

    export class Position {

        constructor(
            private x: number,
            private y: number
        ) {}

        getX(): number {
            return this.x;
        }

        getY(): number {
            return this.y;
        }

    }

}
