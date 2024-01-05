<template lang="">
  <main class="main">
    <div class="main__container">
      <picture>
        <source srcset="/img/webp/Main1.webp" type="image/webp" media="(max-width: 1024px)" width="540" height="621" />
        <img src="/img/Main1.png" alt="bird" class="main__img" width="540" height="621" />
      </picture>
      <div class="main__content">
        <h1 class="main__title">
          Реплики картин <br />
          от <span class="fill-green"> Ink. House</span>
        </h1>
        <p class="main__about">
          Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.
        </p>
        <router-link to="#reproduction"><CommonBtn class="btn--outline">Продукция</CommonBtn></router-link>
      </div>
    </div>
  </main>
</template>
<script setup>
import CommonBtn from '@/shared/buttons/CommonBtn.vue';
</script>
<style scoped lang="scss">
@import "@/app/_base.scss";

.main {
  margin-bottom: 70px;
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__img {
    min-width: 195px;
    min-height: 239px;
  }
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

@media screen and (max-width: $notebook-breakpoint) {
  .main {
    margin-top: 60px;
    &__img {
      display: none;
    }
  }
}

@media screen and (max-width: 576px) {
  .main__img {
    display: none;
  }

  .main {
    margin-top: 60px;
  }
}

@media screen and (max-width: $small-tablet-breakpoint) {
  .main {
    margin-top: 50px;
  }
}
</style>
