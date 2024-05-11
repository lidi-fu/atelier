<template>
  <div class="navigation">
    <NavBar class="nav-item "/>
  </div>
  <div id="app">
    <router-view class="routers"/>
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
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap');
body {
  	margin: 0; 
    line-height: normal;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  margin: auto;
  padding-top: 30px;
}

body::-webkit-scrollbar {
  width: 0;
}

</style>
