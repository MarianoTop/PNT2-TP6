<template>
 
    <div id="app">
      <Navbar />
    </div>
 
</template>

<script>
import Navbar from "./componentes/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  font-family: "Montserrat", "Avenir";
}
body{
  background: #232323;
}

</style>
