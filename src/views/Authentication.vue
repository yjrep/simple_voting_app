<template>
  <div class="authenticationPage">
    <h2>Username</h2>
    <p class="instruction">
      Please enter your username to use the simple voting application. Your
      username should be at least <b>5</b> alphanumerical characters long but
      not greater than <b>20</b>.
    </p>
    <Username />
  </div>
</template>

<script>
import Username from "@/components/Username.vue";

export default {
  name: "AuthenticationPage",
  components: { Username },
  data() {
    return {};
  },
};
</script>

<style></style>
