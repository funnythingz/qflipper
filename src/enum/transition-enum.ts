module Q {

    // TODO: zeptoに対応するためにハイフン区切りにした
    // ほんとはこうしたい
    /*
    export enum TransitionEnum {
        WebkitTransitionProperty,
        MozTransitionProperty,
        OTransitionProperty,
        msTransitionProperty
    }*/

    export enum TransitionEnum {
        '-webkit-transition',
        '-moz-transition',
        '-o-transition',
        '-ms-transition'
    }

}
