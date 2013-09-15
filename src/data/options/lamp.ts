module Q {

    export class Lamp {

        private name: string;

        constructor(name: string = (name)? name: 'lamp') {
            this.name = name;
        }

        getName() {
            return this.name;
        }

    }

}
