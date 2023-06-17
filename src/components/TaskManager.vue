<template>
  <div class="container">
    <h1 class="tasks-header">Список задач</h1>
    <InputGroup />
  </div>
</template>

<script>
import InputGroup from '@/components/InputGroup.vue';
export default {
  name: 'TaskManager',
  components: {
    InputGroup,
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
  background-color: #dee5fb;
  box-shadow: 1px 4px 13px 1px rgba(0, 0, 0, 0.25);
}
.tasks-header {
  color: green;
}
</style>
