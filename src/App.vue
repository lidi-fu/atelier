<template>
  <NavBar />
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import NavBar from './views/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  margin: auto;
}

body::-webkit-scrollbar {
  width: 0;
}
</style>
