<template>
  <div class="tasks">
    <TaskManager />
  </div>
</template>

<script>
import TaskManager from '@/components/TaskManager.vue';
export default {
  name: 'TasksView',
  components: {
    TaskManager,
  },
};
</script>
<style scoped lang="scss">
.tasks {
}
</style>
