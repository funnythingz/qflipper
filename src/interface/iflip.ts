module Q {

    export interface IFlip {

        point: Point;
        $el: JQuery;
        options: Options;
        itemSize: ItemSize;
        animater: Animater;

        refresh();
        toNext();
        toPrev();
        moveToPoint(point: number);
        setTouchEvent();

    }

}
