<template>
  <div class="task-container">
    <p
      class="task-text"
      v-if="!editing"
    >
      {{ task.text }}
    </p>
    <input
      type="text"
      v-else
      v-bind:value="taskText"
      @change="handleChangeText"
    />
    <button @click="handleEditTask(task)">{{ editing ? 'Сохранить' : 'Редактировать' }}</button>
    <button @click="deleteTask(task.id)">Удалить</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Task',
  props: ['task'],
  data() {
    return {
      editing: false,
      taskText: '',
    };
  },
  methods: {
    ...mapActions(['deleteTask', 'editTask']),
    handleChangeText(e) {
      this.taskText = e.target.value;
    },
    handleEditTask(task) {
      this.editing = !this.editing;
      console.log(this.editing);
      if (this.editing) {
        this.taskText = task.text;
      } else {
        task.text = this.taskText;
        this.$store.dispatch('editTask', task);
      }
    },
  },
};
</script>

<style lang="scss">
.task-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0.5em;
  font-weight: 400;
  .task-text {
    width: 100%;
  }
}
</style>
