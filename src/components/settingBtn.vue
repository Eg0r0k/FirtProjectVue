<template lang="">
  <button class="setting-btn" @click="handleClick" :class="{ current: isActive }">
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
<style scoped>
.setting-btn {
  padding: 10px 20px;
  background-color: var(--ligth-green);
  border-radius: 20px;
  border: none;
  font-size: 20px;
  font-weight: 500;
  color: var(--black);
}
.setting-btn:hover {
  transition: 0.2s ease-in-out;
  transform: scale(0.95);
}
</style>
