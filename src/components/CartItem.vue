<template lang="">
  <div class="cart__item itemArt" v-for="{ artUrlImage, artName, artAuthor, artPrice, id } in CartStore">
    <img :src="`/img/paint_${artUrlImage}.jpg`" :alt="`Здесь должен быть арт #${artUrlImage}`" />
    <div class="itemArt__content">
      <dl class="itemArt__about">
        <dt class="itemArt__name">{{ artName }}</dt>
        <dd class="itemArt__author">{{ artAuthor }}</dd>
        <dd class="itemArt__price">
          <span class="fill-green">{{ artPrice.toLocaleString("ru-Ru") }} руб</span>
        </dd>
      </dl>
    </div>
    <CommonBtn class="itemArt__delete">
      <Trashbag class="itemArt__delete--icon" @click="artsStore.deleteFromCart(id)" />
    </CommonBtn>
  </div>
</template>
<script setup>
import CommonBtn from "./CommonBtn.vue";
import Trashbag from "./icons/Trashbag.vue";
import { useArtsStore } from "@/stores/CartStore";

const artsStore = useArtsStore();
const props = defineProps({
  CartStore: {
    type: Array,
    required: true,
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/_base";
.itemArt {
  align-items: center;
  display: flex;

  width: calc(100% - 18px);
  background-color: $white;
  padding: 9px;
  &__delete {
    margin-left: auto;
    &--icon {
      width: 35px;
      height: 35px;
    }
  }

  &__name {
    color: $black;
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 500;
  }
  &__price {
    font-weight: 500;
  }
  &__content {
    margin-left: 9px;
  }
  &__author {
    font-weight: 500;
    margin-bottom: 10px;
    font-size: 16px;
    color: $gray_green;
  }
  & img {
    aspect-ratio: 1/1;
    width: 120px;
    min-width: 100px;
  }
}
</style>
