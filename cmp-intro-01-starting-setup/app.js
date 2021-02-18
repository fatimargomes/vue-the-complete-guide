const app = Vue.createApp({

  data() {
    return {
      friends: [
        {
          id: 'joana',
          name: 'Joana Carvalho',
          phone: '919191919',
          email: 'joana@localhost.com'
        },
        {
          id: 'joao',
          name: 'João Pereira',
          phone: '919191918',
          email: 'joao@localhost.com'
        },
      ]
    }
  }
});

app.component('friend-contact', {
  template: `
    <li v-for="friend in friends" :key="friend.id">
    <h2>{{ friend.name }}</h2>
    <button>Show Details</button>
    <ul>
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
  `,

  props: {

  },

  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: 'joana',
          name: 'Joana Carvalho',
          phone: '919191919',
          email: 'joana@localhost.com'
        },
      ]
    }
  },

  methods: {
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});

app.mount('#app');