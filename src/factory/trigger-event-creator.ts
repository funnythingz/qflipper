module Q {
    
    export class TriggerEventCreator {

        createEvent(type: string) {
            var $el: JQuery = FLIP_ELEMENT.getElement();
            return $el.trigger(
                $.Event(type)
            );
        }

    }

}
