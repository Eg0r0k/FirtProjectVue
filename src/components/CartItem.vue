<template>
  <transition-group name="fade-cart">
    <div
      class="cart__item itemArt"
      v-for="{ artUrlImage, artName, artAuthor, artPrice, id, quantity } in CartStore"
      :key="id"
    >
      <img :src="`/img/paint_${artUrlImage}.jpg`" :alt="`Картина ${artName}`" loading="lazy" />
      <div class="itemArt__content">
        <dl class="itemArt__about">
          <dt class="itemArt__name">{{ artName }}</dt>
          <dd class="itemArt__author">{{ artAuthor }}</dd>
          <dd class="itemArt__price">
            <span class="fill-green">{{ artPrice.toLocaleString("ru-Ru") }} руб</span>
          </dd>
        </dl>
      </div>
      <div class="itemArt__quantity quantity">
        <button class="quantity__btn" @click.stop="decrementQuantity(id)"><Minus /></button>{{ quantity }}
        <button class="quantity__btn" @click.stop="incrementQuantity(id)"><Plus /></button>
      </div>
      <CommonBtn class="itemArt__delete">
        <Trashbag class="itemArt__delete--icon" @click="artsStore.deleteFromCart(id)" />
      </CommonBtn>
    </div>
  </transition-group>
</template>
<script setup>
import CommonBtn from "./CommonBtn.vue";
import Trashbag from "./icons/Trashbag.vue";
import Plus from "./icons/Plus.vue";
import Minus from "./icons/Minus.vue";
import { useArtsStore } from "@/stores/CartStore";

const artsStore = useArtsStore();
const props = defineProps({
  CartStore: {
    type: Array,
    required: true,
  },
});

const incrementQuantity = (id) => {
  const artItem = artsStore.сartStore && artsStore.сartStore.find((el) => el.id === id);
  if (artItem) {
    artItem.quantity += 1;
  }
};
const decrementQuantity = (id) => {
  const artItem = artsStore.сartStore && artsStore.сartStore.find((el) => el.id === id);
  if (artItem) {
    artItem.quantity -= 1;
  }
  if (artItem.quantity < 1) {
    artsStore.сartStore = artsStore.сartStore.filter((item) => item.id !== id);
  }
};
</script>
<style scoped lang="scss">
@import "@/assets/_base";
@import "@/assets/main";
.itemArt {
  align-items: center;
  display: flex;
  margin-bottom: 10px;
  background-color: $white;

  padding: 9px;
  width: auto;
  &__delete {
    margin-left: 10px;

    &--icon {
      width: 35px;
      height: 35px;
    }
  }

  &__about {
    width: 125px;
  }
  &__name {
    color: $black;
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 500;
  }

  &__price {
    font-weight: 500;
    white-space: nowrap;
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
    min-width: 50px;
  }
}
.quantity {
  max-width: 95px;
  margin: 0 auto;
  display: flex;
  gap: 10px;
  align-items: center;
  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    background-color: $green;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    border: none;
    transition: 0;
    transition: $transition-duration;
    & svg {
      fill: $white;
    }
    &:active {
      background-color: $white;
      box-shadow: 0 0 0 1px $green;
      & svg {
        fill: $green;
      }
    }
  }
}
@media screen and (max-width: 370px) {
  .itemArt {
    flex-direction: column;

    gap: 10px;
    &__delete {
      margin-left: auto;
    }
    &__about {
      max-width: 100%;
    }
  }
  .quantity {
    margin-left: auto;
    margin-right: 0;
  }
}
</style>
