<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toogleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ friend.phone }}</li>
      <li><strong>Email: </strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: true,
      friend: {
        id: 'joana',
        name: 'Joana Carvalho',
        phone: '919191919',
        email: 'joana@localhost.com'
      }
    }
  },
  methods: {
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    }
  }
}
</script>