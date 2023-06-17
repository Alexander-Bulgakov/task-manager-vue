<template>
  <div class="input-group">
    <Input />
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
};
</script>

<style lang="scss">
.input-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  min-height: 60px;
}
</style>
