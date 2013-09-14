module Q {

    export class PositionSingleton {

        private startY: number;
        private startX: number;

        private static _instance:PositionSingleton = null;

        constructor() {
            if(PositionSingleton._instance) {
                throw console.log('Error: Instantiation failed');
            }
            PositionSingleton._instance = this;
        }

        static getInstance(): PositionSingleton {
            if(PositionSingleton._instance === null) {
                PositionSingleton._instance = new PositionSingleton();
            }
            return PositionSingleton._instance;
        }

        getStartY(): number {
            return this.startY;
        }

        getStartX(): number {
            return this.startX;
        }

    }

    export var Position = PositionSingleton.getInstance();

}
