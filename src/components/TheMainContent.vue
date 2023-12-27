<template>
  <main class="main__content">
    <h1 class="main__title">
      Реплики картин <br />
      от <span class="fill-green"> Ink. House</span>
    </h1>
    <p class="main__about">
      Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.
    </p>
    <router-link to="#reproduction"><CommonBtn class="btn--outline">Продукция</CommonBtn></router-link>
  </main>
</template>

<script setup>
import CommonBtn from "./CommonBtn.vue";
</script>
<style scoped lang="scss">
@import "@/assets/_base";
.main {
  &__content {
    max-width: 540px;
  }
  &__title {
    color: $black;
    font-size: clamp(1.875rem, 1.339rem + 2.679vw, 3.75rem);
  }
  &__about {
    margin-top: 20px;
    margin-bottom: 60px;
    font-size: clamp(0.875rem, 0.804rem + 0.357vw, 1.125rem);
    color: $gray_green;
    font-style: normal;
    font-weight: 500;
  }
}
</style>
