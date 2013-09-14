module Q {

    export class PointSingleton {

        private now: number;

        private static _instance:PointSingleton = null;

        constructor() {
            if(PointSingleton._instance) {
                throw console.log('Error: Instantiation failed');
            }
            PointSingleton._instance = this;
        }

        static getInstance(): PointSingleton {
            if(PointSingleton._instance === null) {
                PointSingleton._instance = new PointSingleton();
            }
            return PointSingleton._instance;
        }

        getNow(): number {
            return this.now;
        }

    }

    export var Point = PointSingleton.getInstance();

}
