export default {
    login(context) {
        console.log("passou no login")
        context.commit('setAuth', { isLoggedIn: true })
    },
    logout(context) {
        context.commit('setAuth', { isLoggedIn: false })
    }
};