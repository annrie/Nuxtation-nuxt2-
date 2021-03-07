// state
export const state = () => ({
  page: "index",
});

// mutations
export const mutations = {
  updatePage(state, pageName) {
    state.page = pageName;
  },
};
