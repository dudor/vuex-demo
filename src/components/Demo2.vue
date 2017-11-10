<template>
<div class="demo2">
    <p>{{count}}</p>
    <div><button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    </div>
</div>    
</template>
<script>
import Vuex from 'vuex'
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})
export default {
  name: 'Demo2',
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

