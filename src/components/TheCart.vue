<template>
  <div class="cart__wrapper">
    <div class="cart__background" @click="closeCart"></div>
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
          <div class="cart__empty" v-if="artsStore.totalInCart === 0">В вашей корзине пусто 😉</div>

          <CartItem :CartStore="artsStore.сartStore" v-else />
        </div>
        <div class="cart__footer">
          <div class="cart__offer">
            <p class="cart__offer--text">Итого:</p>
            <p class="cart__offer--text">{{ artsStore.totalPrice.toLocaleString("ru-RU") }} руб</p>
          </div>
          <CommonBtn class="btn--fill cart__footer--btn"> Оформить заказ </CommonBtn>
        </div>

      </div>

    </section>
  </div>
</template>
<script setup>
import Cart from "./icons/Cart.vue";
import CommonBtn from "./CommonBtn.vue";
import Xmark from "./icons/Xmark.vue";
import Trashbag from "./icons/Trashbag.vue";
import CartItem from "./CartItem.vue";
import { useArtsStore } from "@/stores/CartStore";

const artsStore = useArtsStore();

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
&__wrapper 
{
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  top: 0;
}
  &__background {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.329);
    z-index: $cart-z ; // Adjust the z-index here
  }

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
    min-height: 300px;

    display: flex;
    flex-direction: column;
    gap: 9px;
  }

  &__empty {
    margin: auto 0;
  }
}

@media screen and (max-width: 578px) {
  .cart {
    left: 0;
    width: 100%;
  }
}
</style>
