<template>
  <section class="collectionInfo" id="new">
    <div class="collectionInfo__container">
      <div class="collectionInfo__header">
        <svg
          class="collectionInfo__star"
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="79"
          viewBox="0 0 80 79"
          fill="none"
        >
          <path
            d="M46.6407 21.9227L58.5227 11.1781L53.685 26.4498L52.9462 28.782L55.3599 28.3827L71.1646 25.7676L58.8384 35.9995L56.956 37.5621L59.2023 38.531L73.9119 44.8758L58.0107 46.8194L55.5823 47.1162L56.9482 49.1458L65.8925 62.436L51.4647 55.4741L49.2614 54.4109L49.3132 56.8568L49.6523 72.8729L41.2788 59.2159L40 57.1303L38.7212 59.2159L30.3477 72.8729L30.6868 56.8568L30.7386 54.4109L28.5353 55.4741L14.1075 62.436L23.0518 49.1458L24.4177 47.1162L21.9893 46.8194L6.08807 44.8758L20.7977 38.531L23.044 37.5621L21.1616 35.9995L8.83541 25.7676L24.6401 28.3827L27.0538 28.782L26.315 26.4498L21.4773 11.1781L33.3593 21.9227L35.1738 23.5636L35.8132 21.2022L40 5.73935L44.1868 21.2022L44.8262 23.5636L46.6407 21.9227Z"
            stroke="#EEDB6D"
            stroke-width="3"
          />
        </svg>
        <h2 class="collectionInfo__title">
          Новая коллекция <br />
          французских авторов
        </h2>
      </div>
      <div class="collectionInfo__content">
        <p class="collectionInfo__text">
          Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою
          очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений. <br />
          <br />
          Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность
          направлений прогрессивного развития.
        </p>

        <CommonBtn class="btn--outline--yellow collectionInfo__btn"> Ознакомиться</CommonBtn>
      </div>
    </div>
  </section>
</template>
<script setup>
import CommonBtn from '@/shared/buttons/CommonBtn.vue';
</script>
<style scoped lang="scss">
@import "@/app/_base";

.collectionInfo {
  background-image: image-set(url("/img/webp/pic_background.webp") 2x, url("/img/pic_background.jpg") 1x);
  background-image: -webkit-image-set(url("/img/webp/pic_background.webp") 2x, url("/img/pic_background.jpg") 1x);

  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
  &__container {
    padding: clamp(3.125rem, 2.292rem + 2.315vw, 4.375rem) 15px;
    color: $white;
  }
  &__header {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    margin-bottom: 20px;
  }
  &__text {
    max-width: 540px;
    margin-bottom: 60px;
  }
  &__title {
    font-size: clamp(1.5rem, 1.25rem + 0.694vw, 1.875rem);

    font-weight: 500;
  }
  &__star {
    height: clamp(3.125rem, 2.589rem + 2.679vw, 5rem);
    margin-right: clamp(0.625rem, 0.152rem + 1.22vw, 1.25rem);
  }
}

/* ПРЕПИСАТЬ! */

@media screen and (max-width: $small-tablet-breakpoint) {
  .collectionInfo {
    &__text {
      max-width: 100%;
      margin-bottom: 30px;
    }
  }
}
@media screen and (max-width: 576px) {
  .collectionInfo {
    &__text {
      margin-bottom: 20px;
    }
  }
}
@media screen and (max-width: 320px) {
  .collectionInfo {
    &__text {
      margin-bottom: 30px;
    }
    &__btn {
      width: 100%;
    }
  }
}
</style>
