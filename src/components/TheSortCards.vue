<template lang="">
    <section class="sort">
        <div class="sort__container">
            <h2 class="sort__title">
                Репродукции
            </h2>
            <nav class="sort__settings" >
                <settingBtn
                v-for="setting in settingsBtn"
                :key="setting.id"
                @click="selectCountry(setting)"
                :class="{'current':currentSetting === true }"
                >
                {{ setting.text }}
                </settingBtn>
            </nav>
        </div>
    </section>
   <TheCards/>
</template>
<script>
import settingBtn from './settingBtn.vue';
import TheCards from './TheCards.vue';
import { settingsBtn } from '@/constants'
export default {
    components: {
        settingBtn,
        TheCards,
    },
    setup() {
        const currentSetting = true;
        
        return {
            settingsBtn,currentSetting
        };
    },
    methods:
    {
        selectCountry( setting ) {

            const currentContry = setting.country
            
            console.log(setting,currentContry)
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