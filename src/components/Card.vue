<template lang="">
    <div class="card">
        <div class="card__picture">
            <img src="../../public/img/03.png" alt="">
        </div>
        <div class="card__content">
            <div class="card__info">
                <h3 class="card__author">Франсуа Дюпон</h3>
                <dl>
                    <dt class="card__name-art">Процедура</dt>
                    <dd class="card__type-art">Цветная литография (40х60) </dd>
                    <dd class="card__price-art"> <span class="fill-green">20 000 руб </span></dd>
                </dl>

            </div>
            <CommonBtn class="btn--outline card__btn">
                В корзину
            </CommonBtn>
        </div>
    </div>
</template>
<script>
import CommonBtn from './CommonBtn.vue';
export default {
    components:
    {
        CommonBtn,
    }
}
</script>
<style  scoped>
.card 
{
    background-color:var(--ligth-green);
    padding:20px 20px 30px;
    max-width: 350px;

}
@media screen and (max-width:768px) {
    .card
    {
        max-width:330px ;
    }
}
@media screen and (max-width:576px) {
    .card
    {
        max-width:240px ;
    }
}
@media screen and (max-width:320px) {
    .card
    {
        max-width:290px ;
    }
}
.card__btn 
{
    width: 100%;

}
dl 
{
    color:var(--black);
}
.card__author
{
    color:var(--gray-green);
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 10px;
}
.card__name-art
{
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 8px;
}
.card__type-art
{
    font-size: 18px;
font-style: normal;
font-weight: 500;
margin-bottom: 30px;
}
.card__picture
{
    margin-bottom: 20px;
}
.card__price-art
{
    margin-bottom: 20px;
}
</style>