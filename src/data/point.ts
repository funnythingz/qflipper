module Q {

    export class Point {

        private now: number;

        setPoint(point: number) {
            this.now = point;
        }

        getNow(): number {
            return this.now;
        }

    }

}
