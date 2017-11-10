import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {id: 1, text: 'todo 1', done: true},
      {id: 2, text: 'todo 2', done: false}
    ]
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    addTodo (state, todo) {
      console.log(todo)
      state.todos.push(todo)
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})

export default store
