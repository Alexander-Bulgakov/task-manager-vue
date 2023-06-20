<template>
  <div>
    <ul>
      <Task
        v-for="task in tasks"
        v-bind:task="task"
        v-bind:key="task.id"
      />
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Task from '@/components/Task.vue';
export default {
  name: 'TaskList',
  components: { Task },
  mounted: function () {
    const tasks = localStorage.getItem('tasks');
    console.log('tasks', JSON.parse(tasks));
    tasks ? this.$store.dispatch('addTasks', JSON.parse(tasks)) : null;
  },
  computed: mapState(['tasks']),
};
</script>

<style lang="scss"></style>
