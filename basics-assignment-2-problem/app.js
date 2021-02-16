Vue.createApp({

    data() {
        return {
            userInput: "",
            confirmedInput: "",
        }
    },

    methods: {
        showAlert() {
            alert("ALERT!")
        },

        setUserInput(event) {
            this.userInput = event.target.value;
        },

        setUserInputOnEnter(event) {
            this.confirmedInput = event.target.value;

        }
    }
}).mount("#assignment")