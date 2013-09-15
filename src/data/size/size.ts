module Q {

    export class Size {

        private total: number;

        constructor(totalSize: number) {
            this.total = totalSize;
        }

        getTotal(): number {
            return this.total;
        }

    }

}
