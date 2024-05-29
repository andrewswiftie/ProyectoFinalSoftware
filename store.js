import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isAdmin: JSON.parse(localStorage.getItem('isAdmin')) || false
  },
  mutations: {
    setUser(state, user) {
        state.user = user;
        state.isAdmin = user.isAdmin || false;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isAdmin', JSON.stringify(state.isAdmin));
    },
    clearUser(state) {
        state.user = null;
        state.isAdmin = false;
        localStorage.removeItem('user');
        localStorage.removeItem('isAdmin');
    }
},

  actions: {
    loginUser({ commit }, user) {
      commit('setUser', user);
      if (user.username === 'admin' && user.password === 'adminpassword') {
        commit('setAdmin', true);
      } else {
        commit('setAdmin', false);
      }
    },
    logoutUser({ commit }) {
      commit('clearUser');
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    currentUser: state => state.user,
    isAdmin: state => state.isAdmin
  }
});

export default store;