
// 定义一个状态树
const state = {
  count: 0
}
// 定义一些可以修改状态树的mutations
const mutations = {
  increment (state) {
    state.count ++
  },
  decrement (state) {
    state.count --
  }
}

const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
  count: state => state.count
}

const actions = {
  increment: context => context.commit('increment'),
  decrement: context => context.commit('decrement')
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
