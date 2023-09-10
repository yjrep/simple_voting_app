<template>
  <div class="viewQuestionPage">
    <h2>Question</h2>
    <p class="instruction">Please cast your vote on following questions.</p>
    <VoteQuestion
      v-for="question in questions"
      :key="question.id"
      :question="question"
    />
    <div v-if="questions.length === 0">No questions to vote.</div>
  </div>
</template>

<script>
import request from "@/service/request";
import VoteQuestion from "@/components/VoteQuestion.vue";

export default {
  name: "ViewQuestionPage",
  components: { VoteQuestion },
  data() {
    return {
      questions: [],
    };
  },
  mounted() {
    // fetch not yet voted questions
    request
      .post("questions", { username: sessionStorage.getItem("username") })
      .then((response) => {
        this.questions = response.data;
      })
      .catch((error) => {
        this.error = error;
      });
  },
  methods: {},
};
</script>

<style></style>
