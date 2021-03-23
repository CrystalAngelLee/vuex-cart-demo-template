const state = {
  cartProducts: []
}
const getters = {}
const mutations = {
  addToCart(state, product) {
    // 1. cartProducts 中没有该商品，把该商品添加到数组，并添加 count, isChecked, totalPrices
    // 2. cartProducts 中有该商品，让该商品数量加1，选中，计算小计
    const prod = state.cartProducts.find(item => item.id === product.id)
    if (prod) {
      prod.count++
      prod.isChecked = true
      prod.totalPrices = prod.count * prod.price
    } else {
      state.cartProducts.push({
        ...product,
        count: 1,
        isChecked: true,
        totalPrices: product.price
      })
    }
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
