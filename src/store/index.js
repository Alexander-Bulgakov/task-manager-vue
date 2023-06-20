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
    add_Task(state, taskText) {
      console.log('taskText store >>>', taskText);
      const task = {
        id: Date.now(),
        title: taskText.trim(),
        status: 'active',
      };
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
