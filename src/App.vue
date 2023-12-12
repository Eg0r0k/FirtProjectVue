

<template>
    <TheHeader />
    <TheMain />
    <TheSortCards :settings="settings"/>
    <TheCollectionInfo  />
</template>


<script >
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue'
import TheSortCards from './components/TheSortCards.vue'
import TheCollectionInfo from './components/TheCollectionInfo.vue';
import { SETTINGS_BTN } from '@/constants'
export default {
    components:
    {
        TheHeader, TheMain, TheSortCards, TheCollectionInfo
    },
    data() {
        return { settings: SETTINGS_BTN }
    }
}

</script>

<style scoped></style>
