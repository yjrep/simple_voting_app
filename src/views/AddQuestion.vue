<template>
  <div class="addQuestionPage">
    <h2>Add Question</h2>
    <p class="instruction">Please enter a question (within 200 characters).</p>
    <AddQuestion />
  </div>
</template>

<script>
import AddQuestion from "@/components/AddQuestion.vue";

export default {
  name: "AddQuestionPage",
  components: { AddQuestion },
  data() {
    return {
      questions: {},
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

<style></style>
