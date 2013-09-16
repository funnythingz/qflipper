module Q {

    export class View {

        private name: string;

        constructor(name: string) {
            this.name = name;
        }

        getName() {
            return this.name;
        }

    }

}
