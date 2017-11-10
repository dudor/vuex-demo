<template>
  <div class='demo3' style="text-align:left;">
    <ol>
      <li v-for="item in doneTodos" :key="item.id">
        {{item.text}}
      </li>
    </ol>

    <div>
      <label>text:</label><input type="text" v-model="text"/>
      <button @click="add">add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo3',
  data () {
    return {
      text: ''
    }
  },
  computed: {
    doneTodos () {
      return this.$store.getters.doneTodos
    }
  },
  methods: {
    add () {
      this.$store.commit('addTodo', {
        id: this.$store.state.todos.length + 1,
        text: this.text,
        done: true
      })
      this.text = ''
    }
  }
}
</script>

