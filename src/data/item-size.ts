module Q {

    export class ItemSize {

        private soloWidth: number;
        private totalWidth: number;
        private totalLength: number;

        constructor($el: JQuery, options: Options) {
            var items = $(options.item.getName(), $el);
            this.soloWidth = items.width();
            this.totalWidth = $el.width();
            this.totalLength = items.length;
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
