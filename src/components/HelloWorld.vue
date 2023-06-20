<template>
  <div class="hello">
    <h1 class="header">Добро пожаловать в мое первое приложение на VueJS</h1>
    <p>
      Это ссылка на мой
      <a
        href="https://github.com/Alexander-Bulgakov"
        target="_blank"
        rel="noopener"
        >профиль на GitHub</a
      >.
    </p>
    <p>А здесь Вы можете накидать мне новых задач в таск-менеджере</p>
    <ArrowDown class="arrow" />
    <div class="image-wrapper">
      <router-link to="/tasks"
        ><img
          src="../assets/burlaki.jpg"
          alt="Бурлаки на Волге"
      /></router-link>
    </div>
  </div>
</template>

<script>
import ArrowDown from '@/components/double-down-arrow-4854.vue';
export default {
  name: 'HelloWorld',
  components: { ArrowDown },
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.header {
  padding: 1em;
  font-size: 1.5rem;
}
.arrow {
  height: 60px;
  width: 60px;
}
.image-wrapper {
  width: 600px;
  img {
    max-width: 100%;
    cursor: pointer;
    transition: transform 0.5s;
    &:hover {
      transform: scale(0.97);
      box-shadow: 0 0 10px #a4aaab;
    }
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
