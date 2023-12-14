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
          <ul class="footer__menu">
            <h3>Репродукции</h3>
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
          <ul class="footer__menu">
            <h3>Новинки</h3>
            <li class="footer__list">
              <a class="footer__link link" href="">2021</a>
            </li>
            <li class="footer__list">
              <a class="footer__link link" href="">2020</a>
            </li>
          </ul>
          <ul class="footer__menu">
            <h3>О нас</h3>
            <li class="footer__list">
              <a class="footer__link link" href="">Художники</a>
            </li>
            <li class="footer__list">
              <a class="footer__link link" href="">Менеджеры</a>
            </li>
          </ul>
        </nav>
        <nav class="footer__media">
          <ul class="footer__media-menu media">
            <li class="media__list">
              <a href="" class="media__link link">
                <Facebook />
              </a>
            </li>
            <li class="media__list">
              <a href="" class="media__link link">
                <Instagram />
              </a>
            </li>
            <li class="media__list">
              <a href="" class="media__link link">
                <Youtube />
              </a>
            </li>
          </ul>
          <div class="footer__INK">
            <dd class="footer__brand--name">Ink. House ®</dd>
            <dd class="all-rights-reserved">All rights reserved</dd>
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
<style scoped>
.footer {
  background-color: var(--ligth-green);
}
.footer__container {
  display: flex;
  padding: 23px 20px;
}
.footer__wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.footer__contacts {
  margin-right: 115px;
  display: flex;
  white-space: nowrap;
  flex-direction: column;
  justify-content: space-between;
}
.footer__nav {
  display: flex;
  gap: 60px;
}
.footer__media {
  display: flex;
  flex-direction: column;
}
.footer__media-menu {
  display: flex;
  gap: 30px;
  margin-bottom: 10px;
}
.footer__list {
  padding: 3px 0;
}
.footer__menu h3 {
  color: var(--black);
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 3px;
}
.contacts__tel {
  color: var(--black);
  font-size: 20px;
  font-weight: 500;
}
.contacts__links {
  gap: 8px;
  display: flex;
  flex-direction: column;
}
.link {
  color: var(--gray-green);
  transition: 0.2s ease-in-out;
}
.link:hover {
  color: var(--black);
}
svg {
  fill: var(--black);
  transition: 0.2s ease-in-out;
}
svg:hover {
  fill: var(--gray-green);
}
.footer__brand--name,
.all-rights-reserved {
  color: var(--gray-green);
  font-size: 12px;
}
.footer__brand--name {
  margin-bottom: 6px;
}
@media screen and (max-width: 968px) {
  .footer__container {
    flex-direction: column;
    gap: 30px;
  }
  .contacts {
    flex-direction: row;
    margin-right: 0;
  }
}
@media screen and (max-width: 650px) {
  .footer__wrapper {
    flex-wrap: wrap;
  }
  .footer__nav {
    width: 100%;
    justify-content: space-between;
  }
  .footer__media {
    width: 100%;
  }
  .footer__INK {
    justify-content: center;
  }
  .footer__INK {
    display: flex;
    flex-direction: row;
  }
  .media {
    justify-content: center;
  }
  .footer__media {
    position: relative;
    margin-top: 32px;
  }
  .footer__media::before {
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
@media screen and (max-width: 488px) {
  .footer__nav {
    flex-wrap: wrap;
  }
  .contacts {
    flex-direction: column;
    gap: 26px;
  }
}
</style>
