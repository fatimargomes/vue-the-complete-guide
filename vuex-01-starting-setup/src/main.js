import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0,
            isLoggedIn: false
        };
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        },
        setAuth(state, payload) {
            state.isLoggedIn = payload.isLoggedIn;
        }
    },
    actions: {
        increment(context) {
            setTimeout(function () {
                context.commit('increment')
            }, 2000);
        },
        increase(context, payload) {
            context.commit('increase', payload)
        },
        login(context) {
            console.log("passou no login")
            context.commit('setAuth', { isLoggedIn: true })
        },
        logout(context) {
            context.commit('setAuth', { isLoggedIn: false })
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter;
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter;
            if (finalCounter < 0) {
                return 0
            }
            if (finalCounter > 100) {
                return 100
            }
            return finalCounter
        },
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        }
    }
});
const app = createApp(App);

app.use(store);

app.mount('#app');
