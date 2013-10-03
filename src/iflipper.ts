module Q {

    export interface IFlipper {
        refresh();
        toNext();
        toPrev();
        moveToPoint(point: number);
        hasNext(): boolean;
        hasPrev(): boolean;
        getPoint(): number;
        getMaxPoint(): number;
    }

}
