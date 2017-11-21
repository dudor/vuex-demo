<template>
  <div class="counter">
    clicked:{{ count }}
        <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>  
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: mapGetters('counter', ['count']),
  methods: mapActions('counter', [
    'increment',
    'decrement'
  ])
}
</script>

