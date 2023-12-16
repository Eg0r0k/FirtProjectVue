<template>
  <section class="cards" id="reproduction">
    <div class="cards__container">
      <div class="cards__empty" v-if="isArtCollectionEmpty">К сожалению мы ничего не нашли... 😫</div>
      <div
        class="card animate__animated animate__fadeIn"
        v-for="{ artName, artAuthor, artPrice, artType, artUrlImage, id } of sortedArts"
        :key="id"
        v-else
      >
        <div class="card__picture">
          <img :src="`/img/paint_${artUrlImage}.jpg`" :alt="`Картина: ${artName}`" />
        </div>
        <div class="card__content">
          <div class="card__info">
            <h3 class="card__author">{{ artAuthor }}</h3>
            <dl>
              <dt class="card__name-art">{{ artName }}</dt>
              <dd class="card__type-art">{{ artType }}</dd>
              <dd class="card__price-art">
                <span class="fill-green">{{ artPrice.toLocaleString("ru-RU") }} руб </span>
              </dd>
            </dl>
          </div>
          <CommonBtn class="btn--outline card__btn" @click="artsStore.addToCart(id)"> В корзину </CommonBtn>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import CommonBtn from "./CommonBtn.vue";
import { useArtsStore } from "@/stores/CartStore";

const artsStore = useArtsStore();
const props = defineProps({
  sortedArts: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const test = id => {
  console.log(id);
};

const checkArtCollection = () => {
  isArtCollectionEmpty.value = props.sortedArts.length === 0;
};
const isArtCollectionEmpty = computed(() => props.sortedArts.length === 0);
</script>

<style scoped lang="scss">
@import "@/assets/_base";
.card {
  background-color: $ligth-green;
  padding: 20px 20px 30px;
  max-width: 350px;
  min-width: 290px;
  &__btn {
    width: 100%;
  }
  &__info {
    & dl {
      color: $black;
    }
  }
  &__author {
    color: $gray-green;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 10px;
  }
  &__name-art {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  &__type-art {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 30px;
  }
  &__picture {
    margin-bottom: 20px;
  }
  &__price-art {
    margin-bottom: 20px;
  }
}
.cards {
  margin-bottom: 70px;
  &__container {
    min-height: 400px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    gap: 30px;
  }
  &__empty {
    align-self: center;
    font-size: 30px;
  }
}

@media screen and (max-width: $small-tablet-breakpoint) {
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
</style>
