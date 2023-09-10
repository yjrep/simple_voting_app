<template>
  <div class="addQuestion">
    <label for="question">Question</label>
    <input
      type="text"
      id="question"
      placeholder="Add question (limit 200 characters)"
      @keyup="checkQuestion"
      v-model="question"
    />
    <div v-if="error" class="alert">
      {{ error }}
    </div>
    <div>
      <button
        type="submit"
        :class="isDisabled ? '' : 'selected'"
        :disabled="isDisabled"
        @click="persist"
      >
        Add
      </button>
    </div>
    <div v-if="successful" class="successful">{{ successfulMessage }}</div>
  </div>
</template>

<script>
import request from "@/service/request";

export default {
  data() {
    return {
      questions: [],
      question: "",
      error: "",
      successful: false,
      successfulMessage: "",
    };
  },
  computed: {
    isDisabled() {
      return !this.isValidQuestion();
    },
  },
  mounted() {
    // fetch questions
    request
      .get("questions")
      .then((response) => {
        this.questions = response.data;
      })
      .catch((error) => {
        this.error = error;
      });
  },
  methods: {
    questionExists() {
      // checks if question exists in `questions` (case insensitive)
      return this.questions.some((e) => e.question === this.question);
    },
    isValidQuestion() {
      return (
        this.question !== "" &&
        this.question.length <= 200 &&
        !this.questionExists()
      );
    },
    checkQuestion() {
      // constraints: questions should not be empty and less than 200 characters and should not exist in `questions`
      if (this.question === "") {
        this.error = "Question is empty";
      } else if (this.question.length > 200) {
        this.error = "Question cannot be longer than 200 characters";
      } else if (this.questionExists()) {
        this.error = "Question already exists";
      } else {
        this.error = "";
      }
    },
    persist() {
      if (this.isValidQuestion()) {
        const newQuestion = {
          question: this.question,
          username: sessionStorage.getItem("username"),
        };

        request
          .post("/questions/add", newQuestion)
          .then((response) => {
            this.question = "";
            this.successful = true;
            this.successfulMessage = response.data.message;
          })
          .catch((error) => {
            this.error = error;
            this.successful = false;
          });

        // reset form
        this.question = "";

        this.successful = true;
      }
    },
  },
};
</script>

<style>
.addQuestion {
  margin-top: 20px;
}

input {
  display: block;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #b3b3b3;
  width: 100%;
}

button {
  margin-top: 10px;
}

.alert {
  color: red;
  font-size: 12px;
}
</style>
