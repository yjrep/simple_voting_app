<template>
  <nav class="main-nav">
    <h1>Simple Voting Application</h1>
    <div class="menu">
      <router-link :to="{ name: 'IndexPage' }">Home</router-link> |
      <router-link :to="{ name: 'AddQuestionPage' }">Question</router-link> |
      <router-link :to="{ name: 'ViewQuestionPage' }">Vote</router-link> |
      <router-link :to="{ name: 'ResultPage' }">Result</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.main-nav {
  text-align: center;
  margin: 40px auto;
}

.main-nav .menu {
  text-align: right;
  font-size: 15px;
}

.nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: darkslategray;
  font-size: 15px;
}

a.router-link-active {
  border-bottom: 3px solid indigo;
  padding-bottom: 4px;
  color: darkslateblue;
}
</style>
