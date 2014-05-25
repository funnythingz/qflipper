module Q {
    
    export class TriggerEventCreator {

        createEvent($el: JQuery, type: string) {

            return $el.trigger($.Event(type));

        }

    }

}
