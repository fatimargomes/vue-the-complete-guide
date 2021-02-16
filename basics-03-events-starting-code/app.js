const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },

  methods: {
    confirmedInput() {
      this.confirmedName = this.name;
    },

    submitForm(event) {
      event.preventDefault();
      alert('Submitted');
    },

    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },

    add(num) {
      this.counter = this.counter + num;
    },

    decrement(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
