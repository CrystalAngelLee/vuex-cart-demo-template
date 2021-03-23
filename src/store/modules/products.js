import axios from 'axios'
const state = {
  products: [] // 存储所有的商品
}
const getters = {}
const mutations = {
  setProducts(state, payload) {
    // 给products 赋值
    state.products = payload
  }
}
const actions = {
  // 请求接口获取数据
  async getProducts({ commit }) {
    const { data } = await axios({
      methods: 'GET',
      url: 'http://127.0.0.1:3000/products'
    })
    commit('setProducts', data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
