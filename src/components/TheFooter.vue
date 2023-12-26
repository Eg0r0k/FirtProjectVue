<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__contacts contacts">
        <Brend class="contacts__brand" />
        <div class="contacts__links">
          <a href="tel:+7-999-543-54-54" class="contacts__tel">+7 (999) 543-54-54</a>
          <a href="" class="link"> Мастерская</a>
        </div>
      </div>
      <div class="footer__wrapper">
        <nav class="footer__nav">
          <div>
            <h3>Репродукции</h3>
            <ul class="footer__menu">
            <li class="footer__list">
              <a class="footer__link link" href="">Франция</a>
            </li>
            <li class="footer__list">
              <a class="footer__link link" href="">Германия</a>
            </li>
            <li class="footer__list">
              <a class="footer__link link" href="">Англия</a>
            </li>
          </ul>
          </div>
          <div>
            <h3>Новинки</h3>
          <ul class="footer__menu">
            <li class="footer__list">
              <a class="footer__link link" href="">2021</a>
            </li>
            <li class="footer__list">
              <a class="footer__link link" href="">2020</a>
            </li>
          </ul>
          </div>
          <div>
            <h3>О нас</h3>
            <ul class="footer__menu">
            <li class="footer__list">
              <a class="footer__link link" href="">Художники</a>
            </li>
            <li class="footer__list">
              <a class="footer__link link" href="">Менеджеры</a>
            </li>
          </ul>
          </div>
          
        </nav>
        <nav class="footer__media">
          <ul class="footer__media-menu media">
            <li class="media__list">
              <a href="" class="media__link link" aria-label="See us in Facebook">
                <Facebook />
              </a>
            </li>
            <li class="media__list">
              <a href="" class="media__link link" aria-label="See us in Instagram">
                <Instagram />
              </a>
            </li>
            <li class="media__list">
              <a href="" class="media__link link" aria-label="See us in Youtube">
                <Youtube/>
              </a>
            </li>
          </ul>
          <div class="footer__INK">
            <dl>
              <dt class="footer__brand--name">Ink. House ®</dt>
              <dd class="all-rights-reserved">All rights reserved</dd>
            </dl>
          
          </div>
        </nav>
      </div>
    </div>
  </footer>
</template>
<script setup>
import Brend from "./icons/Brend.vue";
import Facebook from "@/components/icons/Facebook.vue";
import Instagram from "@/components/icons/Instagram.vue";
import Youtube from "@/components/icons/Youtube.vue";
</script>
<style scoped lang="scss">
@import "@/assets/_base.scss";

.footer {
  background-color: $ligth_green;

  &__container {
    display: flex;
    padding: 23px 20px;
  }

  &__wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  &__contacts {
    margin-right: 115px;
    display: flex;
    white-space: nowrap;
    flex-direction: column;
    justify-content: space-between;
  }

  &__nav {
    display: flex;
    gap: 60px;
  }

  &__media {
    display: flex;
    flex-direction: column;
  }

  &__list {
    padding: 3px 0;
  }

  &__menu {
    & h3 {
      color: $black;
      font-size: 20px;
      margin-bottom: 3px;
      font-weight: 500;
    }
  }

  .__brand--name {
    margin-bottom: 6px;
  }
}

.media {
  display: flex;
  gap: 30px;
  margin-bottom: 10px;
}

.contacts {
  &__tel {
    color: $black;
    font-size: 20px;
    font-weight: 500;
  }

  &__links {
    gap: 8px;
    display: flex;
    flex-direction: column;
  }
}

.link {
  color: $gray_green;
  transition: 0.2s ease-in-out;

  &:hover {
    color: $black;
  }
}

svg {
  fill: $black;
  transition: 0.2s ease-in-out;

  &:hover {
    fill: $gray_green;
  }
}

.footer__brand--name,
.all-rights-reserved {
  color: $gray_green;
  font-size: 12px;
}

@media screen and (max-width: $tablet-breakpoint) {
  .footer {
    &__container {
      flex-direction: column;
      gap: 30px;
    }
  }

  .contacts {
    flex-direction: row;
    margin-right: 0;
  }
}

@media screen and (max-width: $notebook-breakpoint) {
  .footer {
    &__wrapper {
      flex-wrap: wrap;
    }

    &__nav {
      width: 100%;
      justify-content: space-between;
    }

    &__media {
      width: 100%;
    }

    &__INK {
      justify-content: center;
      display: flex;
      flex-direction: row;
    }

    &__media {
      position: relative;
      margin-top: 32px;

      &:before {
        content: "";
        display: block;
        position: absolute;
        background-color: #c3d1c6;
        height: 1px;
        width: 100%;
        top: -16px;
        left: 0;
        right: 0;
      }
    }
  }
}

.media {
  justify-content: center;
}

@media screen and (max-width: 488px) {
  .footer {
    &__nav {
      flex-wrap: wrap;
    }
  }

  .contacts {
    flex-direction: column;
    gap: 26px;
  }
}
</style>
