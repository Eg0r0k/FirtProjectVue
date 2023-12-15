<template lang="">
  <nav class="header__nav nav">
    <CommonBtn class="nav__burger" @click="openNav">
      <Menu />
    </CommonBtn>
    <Transition name="slide-fade">
      <ul class="nav__menu" v-if="showNav">
        <NavItem v-for="item in navItems" :key="item.id">
          <a :href="`#${item.link}`"> {{ item.text }}</a>
        </NavItem>
      </ul>
    </Transition>
    <CommonBtn class="nav__cart" @click="openCart">
      <Cart />
    </CommonBtn>
  </nav>
  <Transition name="slide-fade">
    <TheCart v-if="showCart" :showCart="showCart" @update:showCart="updateShowCart" />
  </Transition>
</template>
<script setup>
import Cart from "./icons/Cart.vue";
import CommonBtn from "./CommonBtn.vue";
import Menu from "./icons/Menu.vue";
import NavItem from "./NavItem.vue";
import TheCart from "./TheCart.vue";
import { ref, reactive, watchEffect } from "vue";

const showNav = ref(false);
const userWindowWidth = reactive({ width: window.innerWidth });
const showCart = ref(false);

const openCart = () => {
  showCart.value = !showCart.value;
};
const openNav = () => {
  showNav.value = !showNav.value;
};

watchEffect(() => {
  showNav.value = userWindowWidth.width > 450;
});

const handleResize = () => {
  userWindowWidth.width = window.innerWidth;
};

const updateShowCart = value => {
  showCart.value = value;
};

window.addEventListener("resize", handleResize);

const navItems = ref([
  { id: 1, text: "Репродукции", link: "reproduction" },
  { id: 2, text: "Новинки", link: "new" },
  { id: 3, text: "О нас", link: "about" },
]);
</script>
<style scoped lang="scss">
@import "@/assets/main.scss";

.nav {
  display: flex;
  position: relative;
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
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);

  opacity: 0;
}
</style>
