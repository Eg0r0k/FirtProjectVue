<template>
  <section class="cart">
    <div class="cart__container">
      <div class="cart__header">
        <CommonBtn class="" @click="closeCart">
          <Xmark />
        </CommonBtn>

        <div class="cart__header--left">
          Корзина

          <Cart />
        </div>
      </div>
      <div class="cart__content">
        <div class="cart__empty" v-if="false">В вашей корщине пусто ;'(</div>
        <div class="cart__item itemArt">
          <img src="/img/paint_1.jpg" alt="" />
          <div class="itemArt__content">
            <dl class="itemArt__about">
              <dt class="itemArt__name">Дикий зверь</dt>
              <dd class="itemArt__author">Пол Смит</dd>
              <dd class="itemArt__price"><span class="fill-green">19 500 руб</span></dd>
            </dl>
          </div>
          <CommonBtn class="itemArt__delete">
            <Trashbag class="itemArt__delete--icon" />
          </CommonBtn>
        </div>
      </div>
      <div class="cart__footer">
        <div class="cart__offer">
          <p class="cart__offer--text">Итого:</p>
          <p class="cart__offer--text">102 400 руб</p>
        </div>
        <CommonBtn class="btn--fill cart__footer--btn"> Оформить заказ </CommonBtn>
      </div>
    </div>
  </section>
</template>
<script setup>
import Cart from "./icons/Cart.vue";
import CommonBtn from "./CommonBtn.vue";
import Xmark from "./icons/Xmark.vue";
import Trashbag from "./icons/Trashbag.vue";

const props = defineProps({
  showCart: {
    type: Boolean,
    required: true,
  },
});
const emits = defineEmits(["update:showCart"]);
const closeCart = () => {
  emits("update:showCart", !props.showCart);
};
</script>
<style scoped lang="scss">
@import "@/assets/_base";

.cart {
  position: absolute;
  z-index: $cart-z;
  right: 0;
  top: 0;

  min-width: 40%;
  background-color: $ligth_green;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 17px;
    padding-bottom: 17px;

    &--left {
      display: flex;
      gap: 6px;
    }
  }

  &__delete {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
  }

  &__offer {
    margin-bottom: 10px;
    font-weight: 500;
    color: $black;
    font-size: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__footer {
    display: flex;
    flex-direction: column;
    padding: 10px 0;

    &--btn {
      width: 100%;
    }
  }
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }
  &__content {
    align-items: center;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap: 9px;
  }
}

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

@media screen and (max-width: 578px) {
  .cart {
    left: 0;
    width: 100%;
  }
}
</style>
