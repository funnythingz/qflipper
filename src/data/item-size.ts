module Q {

    export class ItemSize {

        private soloWidth: number;
        private totalWidth: number;
        private totalLength: number;

        constructor($el: JQuery, options: Options) {
            this.soloWidth = $(options.view.getName()).width();
            this.totalLength = $(options.item.getName(), $el).length;
            this.totalWidth = this.soloWidth * this.totalLength;
        }

        getSoloWidth(): number {
            return this.soloWidth;
        }

        getTotalWidth(): number {
            return this.totalWidth;
        }

        getTotalLength(): number {
            return this.totalLength;
        }
    }

}
