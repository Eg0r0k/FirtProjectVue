<template>
  <section class="sort">
    <div class="sort__container">
      <h2 class="sort__title">Репродукции</h2>
      <nav class="sort__settings">
        <settingBtn
          v-for="setting in settings"
          :key="setting.id"
          @click="selectCountry(setting)"
          :setting="setting"
          :is-active="isActive(setting)"
        >
          {{ setting.text }}
        </settingBtn>
      </nav>
    </div>
  </section>
  <TheCards :sortedArts="sortedArts"  />
</template>

<script setup>

import settingBtn from "./settingBtn.vue";
import TheCards from "./TheCards.vue";
import { ref, computed, defineProps } from "vue";
import { ARTINFO } from "@/constants";

const props = defineProps({
  settings: {
    type: Array,
    required: true,
  },
});

const selectedCountry = ref(null);
const isActiveButton = ref(null);

const selectCountry = setting => {
  selectedCountry.value = setting.country;
  isActiveButton.value = setting;
};

const isActive = setting => {
  return isActiveButton.value === setting;
};

const sortedArts = computed(() => {
  if (selectedCountry.value === null) {
    return ARTINFO;
  } else {
    return ARTINFO.filter(arts => {
      return arts.country == selectedCountry.value;
    });
  }
});
</script>

<style scoped>
.sort__container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.current {
  background-color: var(--green);
  color: var(--white);
  z-index: -1;
}

.sort__settings {
  display: flex;
  gap: 32px;
}

@media screen and (max-width: 433px) {
  .sort__settings {
    overflow-x: scroll;
  }
}

.sort {
  margin-bottom: clamp(1.25rem, 0.833rem + 1.157vw, 1.875rem);
}
</style>
