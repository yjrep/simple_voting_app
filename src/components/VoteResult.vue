<template>
  <div class="voteResult" v-bind:id="'view-' + question.id">
    <div class="questionVotes">
      <h3>{{ question.question }}</h3>
      <div class="votes">
        <div>
          <span class="vote-total">Total votes: {{ question.total_vote }}</span>
        </div>
        <div>
          <span class="material-icons">thumb_up</span>:
          <span class="vote-yes">{{ question.voted_yes }}</span>
        </div>
        <div>
          <span class="material-icons">thumb_down</span>:
          <span class="vote-no">{{ question.voted_no }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["question"],
  data() {
    return {};
  },
};
</script>

<style>
.voteResult {
  margin: 20px auto;
  background-color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 10px solid green;
}

.votes {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.material-icons {
  font-size: 15px;
  cursor: pointer;
  color: #bbb;
  position: relative;
  top: 5px;
}
</style>
