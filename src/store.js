import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      recipes: [],
      apiUrl: 'https://api.edamam.com/search'
  },
  mutations: {
      setRecipes(state, payload) {
          state.recipes = payload;
      }
  },
  actions: {
      async getRecipes({ state, commit }, plan) {
          try {
              let response = await axios.get(`${state.apiUrl}`, {
                  params: {
                      q: plan,
                      app_id: '7dd56afd',
                      app_key: '5d9f39a162df61fe03bad99fdf60e2b5',
                      from: 0,
                      to: 9
                  }
              });
              commit('setRecipes', response.data.hits);
          } catch (error) {
              commit('setRecipes', []);
          }
      }
  }
});