<template>
  <section class="error">
    <TheHeader />
    <div class="error__container">
      <div class="error__content">
        <h1 class="error__title">4<span class="fill-green">0</span>4</h1>
        <h2 class="error__subtitle"><span class="fill-green">Страница не найдена </span></h2>
        <p class="error__text">
          Возможно вы не нашли то что искали, но мы надеемся мы найдем ключик от вашего средца 💖
        </p>
        <router-link class="error__back" to="/">Вернуться</router-link>
      </div>
    </div>
    <TheFooter />
  </section>
</template>
<script setup>
import TheHeader from "@/widgets/header/TheHeader.vue";
import TheFooter from "@/widgets/footer/TheFooter.vue";
</script>
<style lang="scss" scoped>
@import "@/app/_base.scss";

.error {
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: 100%;

  &__container {
    min-height: 50%;
    flex: 1;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
  }
  &__back {
    font-weight: 600;
    &:active {
      color: $green;
    }
  }
  &__content {
    max-width: 600px;
    font-weight: 500;
    color: $black;
  }

  &__title {
    font-size: 128px;
    margin: 0;
    margin-bottom: 15px;
  }

  &__subtitle {
    font-size: 36px;
    margin-bottom: 20px;
  }

  &__text {
    font-size: 24px;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 300px) {
}
</style>
