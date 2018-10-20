import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url:null,
    type:"Country",
  },
  mutations: {
    changeType(state,newType){
      state.type = newType;
    },
    updateUrl(state,newUrl){
      state.url = newUrl
    }
  }
})
