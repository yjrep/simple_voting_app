<template>
  <div class="viewResultPage">
    <h2>Result</h2>
    <p class="instruction">Here are the results of the vote.</p>
    <VoteResult
      v-for="question in questions"
      :key="question.id"
      :question="question"
    />
    <div v-if="questions.length === 0">Question does not exist.</div>
  </div>
</template>

<script>
import request from "@/service/request";
import VoteResult from "@/components/VoteResult.vue";

export default {
  name: "ResultPage",
  components: { VoteResult },
  data() {
    return {
      questions: [],
    };
  },
  mounted() {
    request
      .get("results")
      .then((response) => {
        this.questions = response.data;
      })
      .catch((error) => {
        this.error = error;
      });
  },
};
</script>

<style></style>
