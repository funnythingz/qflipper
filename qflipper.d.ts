/**
* qflipper.d.ts
* @version 1.3
* @author: Hiroki Oiwa;
* @url: http://funnythingz.github.com/qflipper/
* @license MIT (http://www.opensource.org/licenses/mit-license.php)
*/

declare module Q {

    export class Flipper {

        constructor(id: string,
                    args: any);

        refresh();
        toNext();
        toPrev();
        moveToPoint(point: number);
        hasNext(): boolean;
        hasPrev(): boolean;
        getPoint(): number;
        getMaxPoint(): number;
        flipElement(): JQuery;

    }

}
