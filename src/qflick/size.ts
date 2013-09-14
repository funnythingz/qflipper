module Q {

    export class SizeSingleton {

        private totalWidth: number;

        private static _instance:SizeSingleton = null;

        constructor() {
            if(SizeSingleton._instance) {
                throw console.log('Error: Instantiation failed');
            }
            SizeSingleton._instance = this;
        }

        static getInstance(): SizeSingleton {
            if(SizeSingleton._instance === null) {
                SizeSingleton._instance = new SizeSingleton();
            }
            return SizeSingleton._instance;
        }

        getTotalWidth(): number {
            return this.totalWidth;
        }

    }

    export var Size = SizeSingleton.getInstance();

}
