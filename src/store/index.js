import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const API = "category.json";

export default new Vuex.Store({
  state: {
    categories: []
  },
  getters: {
    categories(state) {
      return state.categories;
    }
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      console.log("categories", categories);
      return (state.categories = categories);
    }
  },
  actions: {
    async fetchCategory({ commit }) {
      return await axios.get(API).then(({ data }) => {
        commit("SET_CATEGORIES", data);
      });
    }
  }
});
