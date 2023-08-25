import { createStore } from 'vuex'
import axios from 'axios'

const url = 'https://nodejs-eomp-1fgg.onrender.com/'

export default createStore({
  state: {
    homedecor: null,
    users: null,
    addProduct: null,
    addUser: null
  },
  getters: {
  },
  mutations: {
    setHomedecor(state, data) {
      state.homedecor = data
    },
    setUsers(state, users) {
      state.users = users
    },
    setDeleteProd(state, data) {
      state.homedecor = data
    },
    setDeleteUser(state, data) {
      state.users = data
    },
    setAddProduct(state, data) {
      state.addProduct = data
    },
    setAddUser(state, data) {
      state.addUser = data
    },
  },
  actions: {
    async fetchHomedecor({ commit }) {
      const fetchedData = await axios.get(`${url}products`)
      commit('setHomedecor', fetchedData.data.results)
    },
    async fetchUsers({ commit }) {
      const fetchedData = await axios.get(`${url}users`)
      commit('setUsers', fetchedData.data.results)
    },
    async deleteProduct({ commit }, prodID) { 
      const response = await axios.delete(`${url}product/${prodID}`)
      location.reload()
      commit('setDeleteProd', response)
    },
    async deleteUser({ commit }, userID) { 
      const response = await axios.delete(`${url}user/${userID}`)
      location.reload()
      commit('setDeleteUser', response)
    },
    async addProduct(context, productdata) {
      const response = await axios.post(`${url}product`, productdata)
      location.reload()
      context.commit('setAddProduct', response.data)
    },
    async addUser(context, userdata) {
      const response = await axios.post(`${url}register`, userdata)
      location.reload()
      context.commit('setAddUser', response.data)
    }
  },
  modules: {
  }
})
