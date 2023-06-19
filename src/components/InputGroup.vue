<template>
  <div class="input-group">
    <Input v-model="taskText" />
    <SubmitButton v-on:addTask="addTask()" />
    <!-- @click="addTask(taskText)" -->
  </div>
</template>
<script>
import Input from '@/components/Input';
import SubmitButton from '@/components/SubmitButton';
export default {
  name: 'InputGroup',
  components: {
    Input,
    SubmitButton,
  },
  data: () => {
    return {
      taskText: '',
    };
  },
  methods: {
    addTask: function (event) {
      console.log('clicked');
      this.$store.dispatch('addTask', 'task text');
      // console.log('0 tsk >> ', this.$store.state.tasks[0]);
      console.log('0 tsk getter >> ', this.$store.getters.allTasks[0]);
    },
  },
};
</script>

<style lang="scss">
.input-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  min-height: 60px;
  padding: 0.5em;
  border-bottom: solid 2px black;
}
</style>
