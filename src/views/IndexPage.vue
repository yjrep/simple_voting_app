<template>
  <div class="indexPage">
    <div class="welcome">
      Welcome, <b>{{ username }}</b
      >!
    </div>
    <div class="menuOptions">Choose from the following options:</div>
    <ul class="indexOptions">
      <li>
        <router-link :to="{ name: 'AddQuestionPage' }">
          Create New Question
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ViewQuestionPage' }">
          View Questions and Vote
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ResultPage' }"> View Result </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "indexPage",
  data() {
    return {
      username: "",
    };
  },
  mounted() {
    const username = sessionStorage.getItem("username");
    // redirect user to add username if not found
    if (username === null) {
      this.$router.push({ name: "Authentication" });
    } else {
      this.username = username;
    }
  },
};
</script>

<style>
.welcome {
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.menuOptions {
  margin-bottom: 20px;
}

.indexOptions {
  line-height: 30px;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.indexOptions a {
  text-decoration: underline;
}
</style>
