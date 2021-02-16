const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'finish the course & learn Vue!',
            courseGoalB: '<a>master Vue</a>',
            vueLink: 'https://vuejs.org'
        }
    },

    methods: {
        outputGoal() {
            const randomNumber = Math.random();

            if (randomNumber < 0.5) {
                return this.courseGoalA;
            }
            else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');