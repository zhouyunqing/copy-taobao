export default {
  state: {
    priceData: {
      price: 20,       // 单价
      multiple: 10    // 倍数
    }
  },
  mutations: {
    // 接收点击传过来的数据
    updateOrder: (state, data) => {
      // console.log(data)
      state.priceData = data
    }
  },

  actions: {
    updateOrder (context, data) {
      context.commit('updateOrder', data)
    }
  },

  getters: {
    // 计算购物车的金额
    getTotalPrice: state => {
			return state.priceData.multiple * state.priceData.price
		}
  }
}