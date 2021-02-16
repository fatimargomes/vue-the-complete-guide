Vue.createApp({

    data() {
        return {
            name: "Fátima Gomes",
            age: 28,
            image: "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp"
        }
    },

    methods: {
        ageAdded() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }

}).mount('#assignment');