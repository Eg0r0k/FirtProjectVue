<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component"> </component>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import AlertsMassage from './components/AlertsMassage.vue';
</script>

<style lang="scss">
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-actove {
  transition: opacity 0.4s ease-in-out;
}
</style>
