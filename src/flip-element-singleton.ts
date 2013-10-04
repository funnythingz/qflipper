module Q {

    export class FlipElementSingleton {

        private $el: JQuery;

        private static _instance:FlipElementSingleton = null;

        constructor() {
            if(FlipElementSingleton._instance) {
                throw console.log('Error: Instantiation failed');
            }
            FlipElementSingleton._instance = this;
        }

        static getInstance(): FlipElementSingleton {
            if(FlipElementSingleton._instance === null) {
                FlipElementSingleton._instance = new FlipElementSingleton();
            }
            return FlipElementSingleton._instance;
        }

        setElement($el: JQuery) {
            this.$el = $el;
        }

        getElement(): JQuery {
            return this.$el;
        }

    }

    export var FLIP_ELEMENT = FlipElementSingleton.getInstance();

}
