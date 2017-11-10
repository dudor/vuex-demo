<template>
<div class="demo2">
    <p>{{count}}</p>
    <div><button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    </div>
</div>    
</template>
<script>
export default {
  name: 'Demo2',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  }
}
</script>

