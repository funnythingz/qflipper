module Q {

    export class Point {

        private now: number;
        private max: number;

        setPoint(point: number) {
            this.now = point;
        }

        getNow(): number {
            return this.now;
        }

        getMax(): number {
            return this.max;
        }

    }

}
