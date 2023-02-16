<template>
  <NavBar></NavBar>
<router-view></router-view>
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  <FirstTest msg="Test Message" />-->
<!--  <video-test />-->
</template>

<script>

// import VideoTest from "@/components/VideoTest";

export default {
  name: 'App',
  components: {
    // VideoTest
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
