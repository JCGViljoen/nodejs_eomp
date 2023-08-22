import { createStore } from 'vuex'
import axios from 'axios'

const url = 'https://nodejs-eomp-1fgg.onrender.com/'

export default createStore({
  state: {
    homedecor: null
  },
  getters: {
  },
  mutations: {
    setHomedecor(state, data){
      state.homedecor = data
    }
  },
  actions: {
    async fetchHomedecor({commit}){
      const fetchedData = await axios.get( `${url}products`)
      commit(`setHomedecor`,fetchedData.data.results)
    }
  },
  modules: {
  }
})
