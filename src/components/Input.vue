<template>
  <input
    class="task-input"
    type="text"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'Input',
  props: ['value'],
};
</script>

<style lang="scss">
.task-input {
  height: 100%;
  width: 100%;
  padding: 0.5em;
  border: solid 1px #dee5fb;
  border-radius: 5px;
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 400;
  &:focus {
    border-color: black;
  }
}
</style>
