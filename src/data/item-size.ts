module Q {

    export class ItemSize {

        private totalWidth: number;
        private totalLength: number;

        constructor($el: ZeptoCollection) {
            console.log($el.html());
        }

        getTotalWidth(): number {
            return this.totalWidth;
        }

        getTotalLength(): number {
            return this.totalLength;
        }
    }

}
