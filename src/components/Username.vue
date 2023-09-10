<template>
  <div class="username">
    <label for="username">Username</label>
    <input
      type="text"
      id="username"
      @keyup="checkUsername"
      v-model="username"
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
        Register
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      error: "",
    };
  },
  mounted() {
    const username = sessionStorage.getItem("username");
    // redirect user to index page if username is found
    if (username !== null) {
      this.$router.push({ name: "IndexPage" });
    }
  },
  computed: {
    isDisabled() {
      return !this.isValidUsername();
    },
  },
  methods: {
    isValidUsername() {
      return (
        this.username.length >= 5 &&
        this.username.length <= 20 &&
        !/[^a-zA-Z0-9]/.test(this.username)
      );
    },
    checkUsername() {
      // constraints: username should be between 5 and 20 alphanumeric characters
      if (this.username.length < 5) {
        this.error =
          "Username should be greater than 5 alphanumeric characters";
      } else if (this.username.length > 20) {
        this.error =
          "Username cannot be longer than 20 alphanumeric characters";
      } else if (/[^a-zA-Z0-9]/.test(this.username)) {
        this.error = "Username can only contain letters and numbers";
      } else {
        this.error = "";
      }
    },
    persist() {
      if (this.isValidUsername()) {
        sessionStorage.setItem("username", this.username);
        this.$router.push({ name: "IndexPage" });
      }
    },
  },
};
</script>

<style>
.username {
  margin-top: 20px;
}

input {
  display: block;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #b3b3b3;
  width: 300px;
}

button {
  margin-top: 10px;
}

.alert {
  color: red;
  font-size: 12px;
}
</style>
