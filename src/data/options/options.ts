module Q {

    export class Options {

        type: Type;
        view: View;
        item: Item;
        lamp: Lamp;

        createType(type: string) {
            this.type = new Type(type);
        }

        createView(view: string) {
            this.view = new View(view);
        }

        createItem(item: string) {
            this.item = new Item(item);
        }

        createLamp(lamp: string) {
            this.lamp = new Lamp(lamp);
        }

    }

}
