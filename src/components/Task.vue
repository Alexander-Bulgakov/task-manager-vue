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
      class="input"
      v-else
      v-bind:value="taskText"
      @change="handleChangeText"
    />
    <div class="button-group">
      <button
        class="button-group__button"
        @click="handleEditTask(task)"
      >
        {{ editing ? 'Сохранить' : 'Редактировать' }}
      </button>
      <button
        class="button-group__button red"
        @click="handleDeleteTask(task.id)"
      >
        Удалить
      </button>
    </div>
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
    // ...mapActions(['deleteTask', 'editTask']),
    handleChangeText(e) {
      this.taskText = e.target.value;
    },
    handleDeleteTask(id) {
      this.$store.dispatch('deleteTask', id);
    },
    handleEditTask(task) {
      this.editing = !this.editing;
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

<style scoped lang="scss">
.task-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 2.5em;
  width: 100%;
  padding: 0.5em;
  border-bottom: solid 1px grey;
  font-weight: 400;
  .task-text {
    width: 100%;
    text-align: start;
  }
  .button-group {
    display: flex;
    justify-content: space-around;
    gap: 0.5em;
    padding: 0.2em;
    &__button {
      padding: 0.3em 0.5em;
      background-color: #88a6eb;
      border-radius: 3px;
    }
    .red {
      background-color: #ec5645;
    }
  }
  .input {
    width: 100%;
    height: 100%;
    padding: 0.3em;
    border: solid 1px #c7c7c7;
    border-radius: 3px;
    font-size: 1rem;
    &:focus {
      border: solid 1px grey;
    }
  }
}
</style>
