<template>
<div>
    <TheHeader />
    <TheMain />
    <TheSortCards :settings="settings" />
    <TheCollectionInfo />
    <TheUsCommand />
    <TheFooter />
</div>
</template>
<script setup>
import ContentCard from "@/components/ContentCard.vue";
import "animate.css";
import { ref } from "vue";
import TheHeader from "@/components/TheHeader.vue";
import TheMain from "@/components/TheMain.vue";
import TheSortCards from "@/components/TheSortCards.vue";
import TheCollectionInfo from "@/components/TheCollectionInfo.vue";
import { SETTINGS_BTN } from "@/constants";
import TheFooter from "@/components/TheFooter.vue";
import TheUsCommand from "@/components/TheUsCommand.vue";
const settings = ref(SETTINGS_BTN);
</script>