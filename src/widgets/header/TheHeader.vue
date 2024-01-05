<template lang="">
  <header class="header">
    <div class="header__container">
      <Brend class="header__brand" />
      <TheNav />
    </div>
  </header>
</template>
<script setup>
import Brend from "@/shared/icons/Brend.vue";
import TheNav from "@/features/header/navigation/TheNav.vue";
</script>
<style scoped lang="scss">
@import "@/app/_base.scss";
.header {
  background-color: $ligth-green;
  padding: 33px 0;
  position: sticky;
  left: 0;
  top: 0;
  right: 0;
  z-index: $header-z;
  &__container {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  &__brand {
    @media screen and (max-width: $notebook-breakpoint) {
      margin: 0 auto 16px;
    }
  }
  &__container {
    @media screen and (max-width: $notebook-breakpoint) {
      flex-wrap: wrap;
      padding: 0;
    }
  }
  @media screen and (max-width: $notebook-breakpoint) {
    padding-top: 22px;
    padding-bottom: 0;
    background-color: $white;
  }
}
</style>
