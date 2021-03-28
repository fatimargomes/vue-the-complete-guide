<template>
  <button @click="login" v-if="!isAuth">User login</button>
  <button @click="logout" v-if="isAuth">User logout</button>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    lougout() {
      this.$store.dispatch('logout');
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
};
</script>
