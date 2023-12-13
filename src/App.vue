

<template>
    <TheHeader />
    <TheMain />
    <TheSortCards :settings="settings"/>
    <TheCollectionInfo  />
    <TheUsCommand/>
    <TheFooter/>
</template>


<script >
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue'
import TheSortCards from './components/TheSortCards.vue'
import TheCollectionInfo from './components/TheCollectionInfo.vue';
import { SETTINGS_BTN } from '@/constants'
import TheFooter from './components/TheFooter.vue';
import TheUsCommand from './components/TheUsCommand.vue';
export default {
    components:
    {
        TheHeader, TheMain, TheSortCards, TheCollectionInfo,TheFooter,TheUsCommand
    },
    data() {
        return { settings: SETTINGS_BTN }
    }
}

</script>

<style scoped></style>
