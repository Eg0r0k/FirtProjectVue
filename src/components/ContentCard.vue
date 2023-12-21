<template>
    <div class="contentCard">
        <div class="contentCard__header">
            <a href="">К картинам
                <ArrowRigth />
            </a>
        </div>
        <div class="contentCard__container">
            <div class="contentCard__picture">
                <img src="/img/paint_1.jpg" alt="" class="contentCard__img" />
            </div>
            <div class="contentCard__info">
                <dl class="contentCard__discriptionList discriptionList">
                    <dt class="discriptionList__artName">Дама с собачкой</dt>
                    <dd class="discriptionList__author">Анри Селин</dd>

                    <CommonBtn class="btn--outline discriptionList__btn"> В корзину</CommonBtn>

                    <dt class="discriptionList__info informationList">Информация </dt>
                    <dd class="informationList__discription">
                        <ul class="informationList__list">
                            <li class="informationList__item">Тип: Акрил, бумага (50х80) </li>
                            <li class="informationList__item">Доставка: Бесплатная</li>
                        </ul>
                    </dd>
                    <dt class="discriptionList__discription--title">Описание</dt>
                    <dd class="discriptionList__discription--about">
                        "Репродукция 'Дама с собачкой' от известного художника Анри Селина — воплощение изыска и
                        элегантности. Это произведение искусства, выполненное акрилом на бумаге, призвано внести атмосферу
                        стиля и тепла в ваш интерьер. Размеры (50х80 см) позволяют полностью погрузиться в детали этого
                        удивительного произведения. Картина подчеркнет ваш вкус и станет изысканным украшением для любого
                        помещения. Цена этой репродукции составляет 16 500 рублей, предоставляя отличную возможность
                        обогатить ваш дом уникальным произведением искусства."
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<script setup>
import ArrowRigth from "./icons/Arrow-rigth.vue";
import CommonBtn from "./CommonBtn.vue";

</script>
<style lang="scss" scoped >
@import "@/assets/_base.scss";



.contentCard {
    display: block;
    font-weight: 500;
    position:fixed;
    left: 0;
    top: 0;
    bottom: 0;
    height: fit-content;
    min-height: 100vh;
    background-color: $white;
    z-index: 102;
    width: 100%;

    &__container {
        display: flex;
        height: 100%;
        max-width: 1130px;
        margin: 0 auto;
        padding:  15px;
    }
    &__info 
    {
        max-width: 792px;
        
    }
    &__header 
    {
        max-width: 1350px;
        padding: 30px 15px;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    &__picture 
    {
        margin: 0 30px 30px 0 ;
        min-width: 220px;
        
    }
    .discriptionList
    {
     
        &__artName 
        {
            color:$black;
            font-size: 36px; //Мб поменять
            margin-bottom: 10px;

        }
        &__author
        {
            font-size: 24px; //Мб поменять
            margin-bottom: 25px;
        }
        &__btn 
        {
            min-width: 264px;
            margin-bottom: 25px;
        }
        &__discription
        {
            &--title 
            {
                   color:$gray_green;
            margin-bottom: 24px;
            font-size: 24px;
            }
            &--about 
            {
                line-height: 140%; 
            }

        }
    }
    .informationList
    {
        color:$gray_green;
        font-size: 24px;
        margin-bottom: 30px;
        &__list 
        {
            font-size: 20px;

        }
        &__item
        {
            color:$black;
           position: relative;
           margin-left: 20px;
           margin-bottom: 30px;
           &:last-child
           {
            margin-bottom: 50px;
           }
           &::before
           {
            content: "";
            position: absolute;
            aspect-ratio: 1/1;
            width:4px;
            border-radius:50%;
            background-color:$black;
            left: -15px;
            top: 50%;
            transform: translate(-50%);
           }
        }
       
    }
}
@media screen and (max-width:$small-tablet-breakpoint) {
    .contentCard
    {
        &__container
        {
            flex-direction: column;
            justify-content: center;
            align-items:center;
        }
        &__picture
        {
            margin-bottom: 30px;
            margin-right: 0;
        }
    }
}
</style>
