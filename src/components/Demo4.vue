<template>
<div class="demo4">
    <p>{{count}}</p>
    <div><button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    </div>
</div>    
</template>
<script>
export default {
  name: "Demo4",
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.dispatch("decrement");
    }
  }
};
</script>

