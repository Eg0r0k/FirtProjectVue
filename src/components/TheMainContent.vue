<template>
    <main class="main__content">
        <h1 class="main__title">Реплики картин <br> от <span class="fill-green"> Ink. House</span></h1>
        <p class="main__about">Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
        <CommonBtn class="btn--outline">Продукция</CommonBtn>
    </main>
</template>

<script>
import CommonBtn from './CommonBtn.vue';
export default {
 components:
 {
    CommonBtn
 }
}
</script>
<style scoped>

.main__content {
    max-width: 540px;
    

}
.main__title {
    color: var(--black);

    font-size: clamp(1.875rem, 1.339rem + 2.679vw, 3.75rem);
}


.main__about {
    margin-top: 20px;
    margin-bottom: 60px;
    font-size: clamp(0.875rem, 0.804rem + 0.357vw, 1.125rem);
    color: var(--gray-green);
    font-style: normal;
    font-weight: 500;
}
</style>