<template>
  <div class='demo3'>
    <ul>
      <li v-for="item in doneTodos">
        {{item.text}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'demo3',
  computed: {
    doneTodos () {
      return this.$store.getters.doneTodos
    }
  }
}
</script>

