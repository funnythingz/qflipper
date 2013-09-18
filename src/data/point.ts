module Q {

    export class Point {

        private point: number;

        setPoint(point: number) {
            this.point = point;
        }

        getNow(): number {
            return this.point;
        }

    }

}
