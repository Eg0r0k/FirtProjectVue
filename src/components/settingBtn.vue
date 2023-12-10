<template lang="">
    <button class="setting-btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name:"settingBtn"
}
</script>
<style scoped>
.setting-btn
{
    padding: 10px 20px;
    background-color:var(--ligth-green);
    border-radius: 20px;
    border: none;
    font-size: 20px;
    font-weight: 500;
    color:var(--black);
   
}
.setting-btn:hover{
transition: 0.2s ease-in-out;
    transform: scale(0.95);
}
</style>