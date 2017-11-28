<template>
  <div class="counter">
    clicked:{{ count }}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">IncrementIfOdd</button>
        <button @click="incrementAsync">IncrementAsync</button>
        <el-button @click="visible = true">按钮</el-button>
        <el-dialog :visible.sync="visible" title="Hello world">
          <p>欢迎使用 Element</p>
        </el-dialog>
  </div>  
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: function() {
    return { visible: false };
  },
  computed: mapGetters("counter", ["count"]),
  methods: mapActions("counter", [
    "increment",
    "decrement",
    "incrementIfOdd",
    "incrementAsync"
  ])
};
</script>

