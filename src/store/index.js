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
    _addTasks(state, tasks) {
      state.tasks = tasks;
    },
    _addTask(state, taskText) {
      const task = {
        id: Date.now(),
        text: taskText.trim(),
        status: 'active',
      };
      state.tasks.push(task);
    },
    _deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
      if (state.tasks.length === 0) {
        localStorage.clear();
      }
    },
    _editTask(state, task) {
      state.tasks = state.tasks.map((item) => {
        if (item.id === task.id) {
          item.text = task.text;
        }
        return item;
      });
      this.dispatch('_updateLocalStorage');
    },
  },
  actions: {
    addTasks({ commit }, tasks) {
      commit('_addTasks', tasks);
    },
    addTask({ commit }, task) {
      commit('_addTask', task);
      this.dispatch('_updateLocalStorage');
    },
    deleteTask({ commit }, id) {
      commit('_deleteTask', id);
      this.dispatch('_updateLocalStorage');
    },
    editTask({ commit }, task) {
      commit('_editTask', task);
      this.dispatch('_updateLocalStorage');
    },
    _updateLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    },
  },
  modules: {},
});
