<template>
  <section class="cards">
    <div class="cards__container ">
      <div class="card animate__animated animate__fadeIn " v-for="{ artName, artAuthor, artPrice, artType, artUrlImage } in sortedArts" :key="artUrlImage">
        <div class="card__picture">
          <img :src="`/img/paint_${artUrlImage}.jpg`" alt="" />
        </div>
        <div class="card__content">
          <div class="card__info">
            <h3 class="card__author">{{ artAuthor }}</h3>
            <dl>
              <dt class="card__name-art">{{ artName }}</dt>
              <dd class="card__type-art">{{ artType }}</dd>
              <dd class="card__price-art">
                <span class="fill-green">{{ artPrice }} </span>
              </dd>
            </dl>
          </div>
          <CommonBtn class="btn--outline card__btn"> В корзину </CommonBtn>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CommonBtn from "./CommonBtn.vue";
const props = defineProps({
  sortedArts: {
    type: Array,
  },
});
</script>

<style scoped>
.card {

  background-color: var(--ligth-green);
  padding: 20px 20px 30px;
  max-width: 350px;
  min-width: 290px;
}

@media screen and (max-width: 768px) {
  .card {
    max-width: 330px;
  }
}

@media screen and (max-width: 576px) {
  .card {
    max-width: 240px;
  }
}

@media screen and (max-width: 320px) {
  .card {
    max-width: 290px;
  }
}

.card__btn {
  width: 100%;

}
.cards {
  margin-bottom: 70px;
}
dl {
  color: var(--black);
}

.cards__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  justify-items: center;
  gap: 30px;
}

.card__author {
  color: var(--gray-green);
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 10px;
}

.card__name-art {
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 8px;
}

.card__type-art {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 30px;
}

.card__picture {
  margin-bottom: 20px;
}

.card__price-art {
  margin-bottom: 20px;
}
</style>
