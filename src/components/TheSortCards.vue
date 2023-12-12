<template lang="">
    <section class="sort">
        <div class="sort__container">
            <h2 class="sort__title">
                Репродукции
            </h2>
            <nav class="sort__settings" >
                <settingBtn
                v-for="setting in settings"
                :key="setting.id"
                @click="selectCountry()"
               
                >
                {{ setting.text }}
                </settingBtn>
            </nav>
        </div>
    </section>
   <TheCards :sortedArts="sortedArts"/>
</template>
<script>
import settingBtn from './settingBtn.vue';
import TheCards from './TheCards.vue';
import { ARTINFO } from '@/constants'

export default {
    components: {
        settingBtn,
        TheCards,
        
    },
    
    setup() {
  
       
    },
    methods:
    {
        selectCountry() {
            
        }

    },
    computed:
    {
      sortedArts()
      {
        return  ARTINFO.filter(element => {
            return element.contry == "ENG" //Заменить 
        })
      
      }
    },
    props:
    {
        settings:
        {
            type:Array
        }
    }
}
</script>

<style  scoped>
.sort__container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;

}

.sort__settings {
    display: flex;

    gap: 32px;
}

@media screen and (max-width:433px) {
    .sort__settings {
        overflow-x: scroll;
    }
}

.sort {
    margin-bottom: clamp(1.25rem, 0.833rem + 1.157vw, 1.875rem);
}

/*Card */
/* .cards__container
    {
       display: flex;
       flex-wrap: wrap;
       gap: 30px;
       justify-content: center;
    } */
</style>