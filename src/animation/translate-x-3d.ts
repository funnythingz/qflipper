module Q {
    
    export class TranslateX3d {

        constructor(
            private movePosition: number
        ) {}

        getMovePosition(): string {
            var stringMovePosition: string = this.movePosition.toString();
            return 'translate3d(' + stringMovePosition  + 'px, 0, 0)';
        }
    }

}
