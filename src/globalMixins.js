import Vue from 'vue'

const miGlobalMixin = {
    methods: {
        changePickedColor(colorToChange) {
            //this.contador--
            //console.warn('------------------------------------')
            //console.warn('dispatch -> changePickedColor', new Date().toLocaleString())
            this.$store.dispatch('changeColor', colorToChange)
        },
        changeIsWonValue(valueToChange) {
            //this.contador--
            //console.warn('------------------------------------')
            //console.warn('dispatch -> changeIsWonValue', new Date().toLocaleString())
            this.$store.dispatch('changeIsWon', valueToChange)
        },
    },
    computed: {
        getPickedColor() {
            let color = this.$store.state.pickedColor
            //console.log('getPickedColor mixin', color)
            return color
        },
        getIsWonValue() {
            let value = this.$store.state.isGameWon
           // console.log('getIsWonValue mixin', value)
            return value
        }
    }
}

Vue.mixin(miGlobalMixin)