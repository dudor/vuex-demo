<template>
  <button @click="clickMe">clickMe</button>  
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});

export default {
  name: "demo1",
  data() {
    return {};
  },
  methods: {
    clickMe() {
      store.commit("increment");
      console.log(store.state.count);
    }
  }
};
</script>
