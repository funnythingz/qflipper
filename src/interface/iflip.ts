module Q {

    export interface IFlipper {
        toNext();
        toPrev();
        moveToPoint(point: number);
        hasNext(): boolean;
        hasPrev(): boolean;
        getPoint(): number;
        getMaxPoint(): number;
    }

}
