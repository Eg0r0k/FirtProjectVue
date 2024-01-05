<template>
  <section class="sort" id="sort">
    <div class="sort__container">
      <h2 class="sort__title">Репродукции</h2>
      <nav class="sort__settings">
        <SettingBtn
          v-for="setting in settings"
          :key="setting.id"
          @click="selectCountry(setting)"
          :setting="setting"
          :is-active="isActive(setting)"
        >
          {{ setting.text }}
        </SettingBtn>
      </nav>
    </div>
  </section>
  <TheCards
    :sortedArts="artsStore.sortedArts.length > 0 ? artsStore.sortedArts : artsStore.arts"
    v-if="shouldRenderCards"
  />
</template>

<script setup>
import SettingBtn from "@/shared/buttons/SettingBtn.vue";
import TheCards from "@/widgets/cards/TheCards.vue";
import { ref, onMounted } from "vue";
import { useArtsStore } from "@/app/stores/CartStore";

const artsStore = useArtsStore();

const props = defineProps({
  settings: {
    type: Array,
    required: true,
  },
});
const shouldRenderCards = ref(false);

onMounted(() => {
  shouldRenderCards.value = true;
});
const selectedCountry = ref("");
const isActiveButton = ref(null);

const selectCountry = (setting) => {
  selectedCountry.value = setting.country;
  isActiveButton.value = setting;
  artsStore.setCurrentCountry(setting);
};

const isActive = (setting) => {
  return isActiveButton.value === setting;
};
</script>

<style scoped lang="scss">
@import "@/app/_base.scss";
.sort {
  margin-bottom: 20px;
  &__container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  }
  &__title {
    font-size: clamp(1.5rem, 1.214rem + 1.429vw, 2.5rem);
    color: $black;

    font-weight: 500;
  }
  .current {
    background-color: $green;
    color: $white;
  }

  &__settings {
    display: flex;
    gap: 32px;

    @media screen and (max-width: 520px) {
      overflow-x: scroll;
    }
  }

  &__item {
    margin-bottom: clamp(1.25rem, 0.833rem + 1.157vw, 1.875rem);
  }
}
</style>
