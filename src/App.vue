<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>

<script>
import navbar from "./components/NavBar.vue";
export default {
  components: { navbar },
};
</script>

<style>
body {
  background-color: beige;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: darkblue;
}
nav {
  padding: 30px;
  font-size: 25px;
}
nav a {
  font-weight: bold;
}
a {
  display: inline-block;
  text-decoration: none;
  color: inherit;
}
</style>
