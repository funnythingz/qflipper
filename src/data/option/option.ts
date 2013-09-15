/// <reference path="item.ts" />
/// <reference path="lamp.ts" />

module Q {

    export class Options {

        private item: Item;
        private lamp: Lamp;

        constructor(item: Item = new Item(), lamp: Lamp = new Lamp()) {
            this.item = item;
            this.lamp = lamp;
        }

    }

}
