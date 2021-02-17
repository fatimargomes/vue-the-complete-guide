const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },

  beforeCreate() {
    console.log('beforeCreate()')
  },

  created() {
    console.log('created()')
  },

  beforeMount() {
    console.log('beforeMount()')
  },

  mounted() {
    console.log('beforeMount()')
  },

  beforeUpdate() {
    console.log('beforeUpdate()')
  },

  updated() {
    console.log('updated()')
  },

  beforeUnmount() {
    console.log('beforeUnmount()')
  },

  unmount() {
    console.log('unmount()')
  },
});

app.mount('#app');

setTimeout(function () {
  app.unmount();
}, 3000
);

