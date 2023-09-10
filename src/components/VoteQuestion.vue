<template>
  <div class="viewQuestion" v-bind:id="'view-' + question.id">
    <div class="question">
      <h3>{{ question.question }}</h3>
      <div class="icons" v-bind:data-id="question.id">
        <span @click="voteYes" class="material-icons">thumb_up</span>
        <span @click="voteNo(question.id)" class="material-icons"
          >thumb_down</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/service/request";

export default {
  props: ["question"],
  data() {
    return {};
  },
  methods: {
    voteYes(event) {
      this.vote(event, true);
    },

    voteNo(event) {
      this.vote(event, false);
    },

    vote(e, value) {
      const id = e.target.parentNode.getAttribute("data-id");
      const questionDiv = e.target.parentNode.parentNode.parentNode;

      request
        .post("/vote", {
          username: sessionStorage.getItem("username"),
          question_id: id,
          vote: +value,
        })
        .then(() => {
          questionDiv.animate(
            {
              opacity: 0,
            },
            300,
          );
          setTimeout(() => {
            questionDiv.parentNode.removeChild(questionDiv);
          }, 300);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.viewQuestion {
  margin: 20px auto;
  background-color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 10px solid green;
}

.question {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.material-icons {
  font-size: 25px;
  margin-left: 10px;
  font-weight: bold;
  cursor: pointer;
  color: #bbb;
}

.material-icons:hover {
  color: #777;
}
</style>
