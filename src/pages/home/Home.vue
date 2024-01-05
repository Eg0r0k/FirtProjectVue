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
<script setup >
import ContentCard from "@/widgets/ContentCard/ContentCard.vue";
import "animate.css";
import { reactive } from "vue";
import TheHeader from "@/widgets/header/TheHeader.vue";
import TheMain from "@/widgets/main/TheMain.vue";
import TheSortCards from "@/features/sort/TheSortCards.vue";
import TheCollectionInfo from "@/widgets/collection/TheCollectionInfo.vue";
import { SETTINGS_BTN } from "@/constants";
import TheFooter from "@/widgets/footer/TheFooter.vue";
import TheUsCommand from "@/widgets/about comand/TheUsCommand.vue";
const settings = reactive(SETTINGS_BTN);
</script>
