<template>
  <div class="error-content">
    <div class="error-content__content">
      <h1 class="error-content__title">
        Страница не найдена!
      </h1>
      <nuxt-link to="/">
        Вернуться на главную
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style lang="scss" scoped>
.error-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.error-content__content {
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  justify-content: center;
}

.error-content__title {
  color: #ff0048;
}
</style>
