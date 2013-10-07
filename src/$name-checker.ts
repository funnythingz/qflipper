module Q {

    export class $NameChecker {

        get$Name(): $NameEnum {
            if(typeof jQuery === 'function') {
                return $NameEnum.jQuery;
            }
            if(typeof Zepto === 'function') {
                return $NameEnum.Zepto;
            }
        }
    }

    export enum $NameEnum {
        jQuery,
        Zepto
    }

}
