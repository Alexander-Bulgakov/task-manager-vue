<template>
  <div>
    <!-- {{ tasks }} -->
    <ul>
      <!-- <li
        v-for="task in tasks"
        v-bind:key="task.id"
      >
        {{ task.title }}
      </li> -->
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
  computed: mapState(['tasks']),
};
</script>

<style lang="scss"></style>
