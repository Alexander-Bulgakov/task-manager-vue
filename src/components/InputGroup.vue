<template>
  <div class="input-group">
    <Input v-model="taskText" />
    <SubmitButton />
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
