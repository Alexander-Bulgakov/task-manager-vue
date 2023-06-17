<template>
  <button class="submit-button">Добавить задачу</button>
</template>

<script>
export default {
  name: 'SubmitButton',
};
</script>

<style lang="scss">
.submit-button {
  cursor: pointer;
  height: 100%;
  background-color: #88a6eb;
  border-radius: 5px;
  font-size: 1rem;
  color: white;
  &:hover {
    background-color: #6b92ed;
  }
}
</style>
