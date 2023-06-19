import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    add_Task(state, task) {
      console.log('tasks');
      console.log('taskText store >>>', task);
      state.tasks.push(task);
      console.log(state.tasks);
    },
  },
  actions: {
    addTask({ commit }, task) {
      commit('add_Task', task);
    },
  },
  modules: {},
});
