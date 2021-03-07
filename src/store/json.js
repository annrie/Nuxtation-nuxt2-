import jsonData from "../assets/json/menu.json";

export const state = () => ({
  data: jsonData,
});

export const getters = {
  getAll: (state) => {
    return state.data;
  },
};
