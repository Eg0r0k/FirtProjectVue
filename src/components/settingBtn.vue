<template lang="">
  <button type="button" class="setting-btn" @click="handleClick" :class="{ current: isActive }">
    <slot></slot>
  </button>
</template>

<script setup>


const props = defineProps({
  setting: {
    type: Object,
    required: true,
  },
  isActive: Boolean,
});
const emit = defineEmits();
 


const handleClick = () => {
  emit("click", props.setting);
};
</script>
<style scoped lang="scss">
@import "@/assets/main.scss";
.setting-btn {
  @include button-styles;
  background-color: $ligth-green;
  border-radius: 20px;
  &:hover {
    transform: scale(0.95);
  }
}
</style>
