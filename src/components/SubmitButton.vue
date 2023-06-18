<template>
  <button
    class="submit-button"
    @click="addTask"
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
  methods: {
    addTask: function (event) {
      console.log('clicked');
    },
  },
};
</script>

<style lang="scss">
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
