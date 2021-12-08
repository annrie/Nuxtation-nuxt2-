export const actions = {
  nuxtClientInit({ commit }) {
    const data = JSON.parse(localStorage.getItem("auth-key")) || [];
    if (data.userId) {
      commit("auth/setKey", data.auth.key);
    }
  },
};
