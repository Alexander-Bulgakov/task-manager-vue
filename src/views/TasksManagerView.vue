<template>
  <div class="container">
    <h1 class="tasks-header">{{ title }}</h1>
    <InputGroup />
    <TasksList />
  </div>
</template>

<script>
import InputGroup from '@/components/InputGroup.vue';
import TasksList from '@/components/TasksList.vue';
export default {
  name: 'TaskManager',
  data() {
    return {
      title: 'Список задач',
    };
  },
  components: {
    InputGroup,
    TasksList,
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
  padding: 0.5em;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 4px 13px 1px rgba(0, 0, 0, 0.25);
}
.tasks-header {
  padding: 0.5em;
  font-size: 2rem;
}
</style>
