import { createStore } from 'vuex'
import axios from 'axios'

const url = 'https://nodejs-eomp-1fgg.onrender.com/'

export default createStore({
  state: {
    homedecor: null,
    users: null
  },
  getters: {
  },
  mutations: {
    setHomedecor(state, data){
      state.homedecor = data
    },
    setUsers(state, users){
      state.users = users
    }
  },
  actions: {
    async fetchHomedecor({commit}){
      const fetchedData = await axios.get( `${url}products`)
      commit(`setHomedecor`,fetchedData.data.results)
    },
    async fetchUsers({commit}){
      const fetchedData = await axios.get( `${url}users`)
      commit(`setUsers`,fetchedData.data.results)
    }
},
  modules: {
  }
})