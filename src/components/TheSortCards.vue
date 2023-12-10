<template lang="">
    <section class="sort">
        <div class="sort__container">
            <h2 class="sort__title">
                Репродукции
            </h2>
            <nav class="sort__settings" >
                <settingBtn v-for="setting in settingsBtn" :key="setting.id" >
                    {{ setting.text }}
                </settingBtn>
            </nav>
        </div>
    </section>
    <section class="cards">
        <div class="cards__container">
            <Card/>
        </div>
    </section>
</template>
<script>
import settingBtn from './settingBtn.vue';
import Card from './Card.vue';
export default {
    components: {
        settingBtn,
        Card,
    },
    setup() {
        const settingsBtn = [
            { id: 1, text: "Франция" },
            { id: 2, text: "Германия" },
            { id: 3, text: "Англия" },
        ];

        return {
            settingsBtn
        };
    }
}
</script>

<style  scoped>
    .sort__container
    {
        display:flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
     
    }
    .sort__settings
    {
    display: flex;
    overflow-x: scroll;
    gap: 32px;
    }
</style>