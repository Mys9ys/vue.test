<template>
  <li>{{ todo.text }}</li>
</template>

<script>
export default {
  name: "LiItem",
  props: {
    todo: Array
  },
}
</script>

<style scoped>

</style>