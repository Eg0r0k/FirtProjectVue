<template lang="">
    <section class="main">
       <div class="main__container ">
     
        <img src="/img/Main1.png" alt="bird" class="main__img">
        <TheMainContent/>
       
       </div>
    </section>
</template>
<script>

import TheMainContent from './TheMainContent.vue';
export default {
    components:
    {
   
        TheMainContent
    }
}
</script>
<style scoped>
.main__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}



.main 
{
    margin-bottom: 70px;
}

.main__img {

    min-width: 195px;
    ;
    min-height: 239px;
}

@media screen and (max-width:576px) {
    .main__img {
        display: none;
    }

    .main {
        margin-top: 60px;
    }

}

@media screen and (max-width: 768px) {
    .main {
        margin-top: 50px;
    }
}
</style>