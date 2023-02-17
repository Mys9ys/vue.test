<template>
  <div class="navbar">
    <div>Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/')">Main</my-button>
      <my-button @click="$router.push('/users')">Users</my-button>
      <my-button @click="$router.push('/about')">About</my-button>
      <my-button @click="$router.push('/store')">Store</my-button>
      <my-button @click="$router.push('/composition')">Composition</my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped>
.navbar{
  height: 50px;
  background: cornflowerblue;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns{
  margin-left: auto;
}
</style>