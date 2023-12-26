<template lang="">
  <nav class="header__nav nav">
    <CommonBtn class="nav__burger" @click="toggleNavVisibility" id="burgerMenu" title='block' >
      <Menu />
    </CommonBtn>
    <Transition name="slide-fade" >
      <ul class="nav__menu" v-if="isNavVisible" >
        <NavItem v-for="item in navItems" :key="item.id">
          <router-link @click="toggleNavVisibility" :to="`/#${item.link}`"> {{ item.text }}</router-link>
        </NavItem>
      </ul>
    </Transition>
    <CommonBtn class="nav__cart" @click="toggleCartVisibility">
      <Cart class="nav__cart--icon" />
      <span class="nav__cart--inCart"> {{ artsStore.totalInCart }} </span>
    </CommonBtn>
  </nav>
  <Transition name="slide-left">
    <TheCart v-if="isCartVisible" :showCart="isCartVisible" @update:showCart="toggleCartVisibility" />
  </Transition>
</template>
<script setup>
import Cart from "./icons/Cart.vue";
import CommonBtn from "./CommonBtn.vue";
import Menu from "./icons/Menu.vue";
import NavItem from "./NavItem.vue";
import TheCart from "./TheCart.vue";
import { NAV_ITEMS } from "@/constants";
import { useArtsStore } from "@/stores/CartStore";
import { ref, reactive, watchEffect } from "vue";

const isNavVisible = ref(false);
const userWindowWidth = reactive({ width: window.innerWidth });
const isCartVisible = ref(false);
const artsStore = useArtsStore();
const toggleNavVisibility = () => {
  isNavVisible.value = !isNavVisible.value;
  if (userWindowWidth.width > 450) {
    isNavVisible.value = true;
  }
};
const toggleCartVisibility = () => {
  isCartVisible.value = !isCartVisible.value;
};
watchEffect(() => {
  isNavVisible.value = userWindowWidth.width > 450;
});
const handleResize = () => {
  userWindowWidth.width = window.innerWidth;
};
window.addEventListener("resize", handleResize);

const navItems = reactive(NAV_ITEMS);
</script>
<style scoped lang="scss">
@import "@/assets/main.scss";

.nav {
  display: flex;
  position: relative;
  &__cart {
    position: relative;
    &--inCart {
      position: absolute;
      right: -5px;
      top: -5px;
      background-color: $green;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      font-weight: 700;

      font-size: 16px;
      text-align: center;
      color: $white;
    }
  }
  &__burger {
    display: none;
  }
  &__cart {
    aspect-ratio: 1/1;
  }
  &__menu {
    display: flex;
    gap: 59px;
    margin-right: 60px;
  }
  &__list {
    display: flex;

    align-items: center;
    & a {
      color: $black;
      font-weight: 500;
      white-space: nowrap;
      transition: 0.2s ease-in-out;
      &:hover {
        color: $green;
      }
    }
  }
}

@media screen and (max-width: 450px) {
  .nav {
    &__menu {
      position: absolute;
      display: flex;
      top: 100%;
      flex-direction: column;
      padding: 15px 15px;
      left: 0px;
      right: -5px;
      background-color: $ligth-green;
      z-index: 100;
      height: 100vh;
    }
    &__burger {
      display: inline-block;
    }
  }
}

@media screen and (max-width: $notebook-breakpoint) {
  .nav {
    width: 100%;
    padding: 17px 15px;
    background-color: $ligth-green;
    &::before {
      content: "";
      display: block;
      position: absolute;
      background-color: #c3d1c6;
      height: 1px;
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
    }
    &__cart {
      margin-left: auto;
    }
    &__menu {
      margin-right: 5px !important;
    }
  }
}
</style>
