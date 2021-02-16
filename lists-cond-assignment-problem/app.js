const app = Vue.createApp({
    data() {
        return {
            enteredTaskValue: '',
            tasks: [],
            visible: true
        };
    },

    methods: {
        addTask() {
            this.tasks.push(this.enteredTaskValue)

            this.enteredTaskValue = '';
        },

        toogleVisibility() {
            this.visible = !this.visible;
        }
    }
});

app.mount('#assignment');