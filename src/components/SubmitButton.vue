<template>
  <button
    class="submit-button"
    v-on:click="$emit('addTask')"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'SubmitButton',
  data() {
    return {
      title: 'Добавить задачу',
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.submit-button {
  height: 100%;
  padding: 0.2em 0.7em;
  border: 1px solid #dee5fb;
  border-radius: 5px;
  background-color: #88a6eb;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #6b92ed;
  }
}
</style>
