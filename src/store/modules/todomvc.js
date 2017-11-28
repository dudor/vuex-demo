
const TODO_KEY = "todo_vuejs"

const state = {
  todos: JSON.parse(window.localStorage.getItem(TODO_KEY) || "[]")
}

const mutations = {
  addTodo(state, { text }) {
    state.todos.push({ text, done: false })
  },
  deleteTodo(state, { todo }) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },
  toggleTodo(state, { todo }) {
    todo.done = !todo.done
  },
  editTodo(state, { todo, title }) {
    let tmp = state.todos.filter(c => c.date === todo.date && c.title === todo.title)
    tmp.title = title
  }
}


export default {
  namespaced: true,
  state,
  mutations
}