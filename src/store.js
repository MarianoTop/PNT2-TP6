import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pickedColor: null,
        isGameWon:false,
        messageDisplay:"",
        restartMessage:""
        

    },
    actions: {
        changeColor({commit},color) {
            //console.warn('actions -> changeColor', color, new Date().toLocaleString())
            commit('changePickedColor', color)
        }, 
        changeIsWon({commit},value) {
            //console.warn('actions -> changeIsWon', value, new Date().toLocaleString())
            commit('changeIsWon', value)
        },
        changeMessageDisplay({commit},value) {
            //console.warn('actions -> changeMessageDisplay', value, new Date().toLocaleString())
            commit('changeMessageDisplay', value)
        },
        changeRestartMessage({commit},value) {
            //console.warn('actions -> changeMessageDisplay', value, new Date().toLocaleString())
            commit('changeRestartMessage', value)
        }            
    },
    mutations: {
        changePickedColor(state, color) {
            //console.warn('mutations -> changePickedColor', state, color, new Date().toLocaleString())
            state.pickedColor = color
        },    
        changeIsWon(state,value) {
            //console.warn('mutations -> changeIsWon', state, value, new Date().toLocaleString())
            state.isGameWon = value
        },  
        changeMessageDisplay(state,value) {
            //console.warn('mutations -> changeIsWon', state, value, new Date().toLocaleString())
            state.messageDisplay = value
        },  
        changeRestartMessage(state,value) {
            //console.warn('mutations -> changeIsWon', state, value, new Date().toLocaleString())
            state.restartMessage = value
        } 
    }
})