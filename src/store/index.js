import Vue from 'vue'
import Vuex from 'vuex'
import admin from './modules/admin'
Vue.use(Vuex)

const store =new Vuex.Store({
  modules:{
    admin
  },
})

export default store
 

