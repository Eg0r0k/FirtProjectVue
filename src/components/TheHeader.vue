<template lang="">
  <header class="header">
    <div class="header__container">
      <Brend class="header__brand" />
      <TheNav />
    </div>
  </header>
</template>
<script setup>
import Brend from "./icons/Brend.vue";
import TheNav from "./TheNav.vue";
</script>
<style scoped>
.header {
  background-color: var(--ligth-green);
  padding: 33px 0;
  position: sticky;
  left: 0;
  top: 0;
  right: 0;
  z-index: 100;
}

@media screen and (max-width: 656px) {
  .header__brand {
    margin: 0 auto 16px;
  }
}

.header__container {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 656px) {
  .header__container {
    flex-wrap: wrap;
    padding: 0;
  }

  .header {
    padding-top: 22px;
    padding-bottom: 0;
    background-color: var(--white);
  }
}
</style>
