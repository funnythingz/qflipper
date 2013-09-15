module Q {

    export class Item {

        private name: string;

        constructor(name: string = (name)? name: 'item') {
            this.name = name;
        }

        getName() {
            return this.name;
        }

    }

}
