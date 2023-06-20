<template>
  <div class="input-group">
    <Input v-model="taskText" />
    <SubmitButton v-on:addTask="addTask()" />
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
      if (this.taskText !== '') {
        this.$store.dispatch('addTask', this.taskText);
        this.taskText = '';
      }
    },
  },
};
</script>

<style scoped lang="scss">
.input-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  min-height: 60px;
  padding: 0.5em;
}
</style>
