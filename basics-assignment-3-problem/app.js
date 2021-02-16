const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            value: ''
        };
    },

    watch: {
        counter(value) {
            if (value > 37) {
                const that = this;
                setTimeout(function () {
                    that.counter = 0
                }, 5000);
            }
        }
    },

    computed: {
        result() {
            if (this.counter < 37)
                return this.counter + '- Not there yet';
            else if (this.counter === 37) {
                return this.counter + ' - you did it!';
            }
            return this.counter + '- Too much!';
        }
    },

    methods: {

        add(num) {
            this.counter = this.counter + num;
        }
    }
});

app.mount('#assignment');
