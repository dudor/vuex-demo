import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import TodoMvc from './modules/todomvc'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'todo 1', done: true },
      { id: 2, text: 'todo 2', done: false }
    ]
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    addTodo(state, todo) {
      state.todos.push(todo)
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
    decrement(context) {
      context.commit('decrement')
    }
  },
  modules: {
    counter,
    TodoMvc
  }
})

export default store
