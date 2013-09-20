module Q {
    
    export class AnimationFlag {

        constructor(
            private flag: boolean = false
        ) {}

        enabled() {
            this.flag = true;
        }

        disabled() {
            this.flag = false;
        }

        checkStatus(): boolean {
            return this.flag;
        }

    }

}
