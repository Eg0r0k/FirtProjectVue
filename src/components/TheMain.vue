<template lang="">
  <section class="main">
    <div class="main__container">
      <img src="/img/Main1.png" alt="bird" class="main__img" />
      <TheMainContent />
    </div>
  </section>
</template>
<script setup>
import TheMainContent from "./TheMainContent.vue";
</script>
<style scoped lang="scss">
@import "@/assets/_base";

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
