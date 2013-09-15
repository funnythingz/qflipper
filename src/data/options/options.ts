/// <reference path="type.ts" />
/// <reference path="item.ts" />
/// <reference path="lamp.ts" />

module Q {

    export class Options {

        type: Type;
        item: Item;
        lamp: Lamp;

        createType(type: string) {
            this.type = new Type(type);
        }

        createItem(item: string) {
            this.item = new Item(item);
        }

        createLamp(lamp: string) {
            this.lamp = new Lamp(lamp);
        }

    }

}
