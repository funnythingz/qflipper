module Q {
    
    export class FlipCreator {

        constructor(private $el: JQuery, private options: Options) {}

        createFlip(): Flip {

            switch(this.options.type.getType()) {

                case FlipTypeEnum.Simple:
                    return new SimpleFlip(this.$el, this.options);

                case FlipTypeEnum.Rich:
                    return new RichFlip(this.$el, this.options);

            }

        }

    }

}
