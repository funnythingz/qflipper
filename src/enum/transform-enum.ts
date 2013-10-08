module Q {

    // FIXME: zeptoに対応するためにハイフン区切りにした
    // ほんとはこうしたい
    /*
    export enum TransformEnum {
        WebkitTransform,
        MozTransform,
        OTransform,
        msTransform
    }*/

    export enum TransformEnum {
        '-webkit-transform',
        '-moz-transform',
        '-o-transform',
        '-ms-transform'
    }

}
