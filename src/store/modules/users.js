const state = {
    users: [],
};

const mutations = {
    SET_USERS(state, users) {
      state.users = users;
      console.log(state.users);
    },
};

const actions = {
    async fetchUsers({ commit }) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        commit('SET_USERS', data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
  };
  
  export default {
    namespaced: true,
    actions,
    mutations,
    state
  };
  