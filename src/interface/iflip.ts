module Q {

    export interface IFlip {
        refresh();
        toNext();
        toPrev();
        moveToPoint(point: number);
    }

}
