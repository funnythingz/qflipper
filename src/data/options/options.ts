module Q {

    export class Options {

        type: Type;
        view: View;
        item: Item;

        createType(type: string) {
            this.type = new Type(type);
        }

        createView(view: string) {
            this.view = new View(view);
        }

        createItem(item: string) {
            this.item = new Item(item);
        }

    }

}
