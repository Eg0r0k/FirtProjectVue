<template>
    <section class="cards">
      <div class="cards__container">
        <div class="card" v-for="{ artName, artAuthor, artPrice, artType, artUrlImage } in sortedArtInfo" :key="artUrlImage">
          <div class="card__picture">
            <img :src="`/img/paint_${artUrlImage}.jpg`" alt="">
          </div>
          <div class="card__content">
            <div class="card__info">
              <h3 class="card__author">{{ artAuthor }}</h3>
              <dl>
                <dt class="card__name-art">{{ artName }}</dt>
                <dd class="card__type-art">{{ artType }} </dd>
                <dd class="card__price-art"><span class="fill-green">{{ artPrice }} </span></dd>
              </dl>
            </div>
            <CommonBtn class="btn--outline card__btn">
              В корзину
            </CommonBtn>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
import CommonBtn from './CommonBtn.vue';
import { computed, ref } from 'vue';
import { artInfo } from '@/constants';

export default {
  components: {
    CommonBtn,
  },
  setup() {
    const sortCriteria = ref('contry'); // Default sorting criteria

    const customSortOrder = ['FR', 'DE', 'ENG']; // Define your custom sorting order

    const sortedArtInfo = computed(() => {
      const artInfoWithCountryFR = artInfo.filter(item => item.contry === 'ENG');

      return artInfoWithCountryFR.sort((a, b) => {
        const valueA = a[sortCriteria];
        const valueB = b[sortCriteria];

        // Check if the values are defined before using localeCompare
        if (valueA !== undefined && valueB !== undefined) {
          if (sortCriteria === 'contry') {
            // Custom sorting order for the 'contry' property
            const indexA = customSortOrder.indexOf(valueA);
            const indexB = customSortOrder.indexOf(valueB);
            return indexA - indexB;
          } else {
            // Default sorting for other criteria
            return valueA.localeCompare(valueB);
          }
        } else {
          // Handle the case where either value is undefined
          return 0; // You may adjust this based on your requirements
        }
      });
    });

    return {
      sortedArtInfo,
      sortCriteria,
    };
  },
};
</script>

  
  
<style  scoped>
.card {
    background-color: var(--ligth-green);
    padding: 20px 20px 30px;
    max-width: 350px;
    min-width: 290px;

}

@media screen and (max-width:768px) {
    .card {
        max-width: 330px;
    }
}

@media screen and (max-width:576px) {
    .card {
        max-width: 240px;
    }
}

@media screen and (max-width:320px) {
    .card {
        max-width: 290px;
    }
}

.card__btn {
    width: 100%;

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