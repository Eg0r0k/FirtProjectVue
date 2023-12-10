<template lang="">
    <header class="header">
        <div class="header__container">
        <Brend/>
          <TheNav/>
        </div>
      </header>
</template>
<script>
import Brend from './icons/Brend.vue';
import TheNav from './TheNav.vue';
export default {
    components: {
        Brend,
        TheNav,
    },
}
</script>
<style scoped>    .header {
        background-color: var(--ligth-green);
        padding: 33px 0;

    }



    .header__container {
      
        align-items: center;
        display: flex;
        justify-content: space-between;


    }
    @media screen and (max-width:656px) {
        .header__container {
          
            flex-wrap: wrap;
        }
        .header 
        {
            padding-top: 22px;
            padding-bottom: 0;
        }
    }
</style>