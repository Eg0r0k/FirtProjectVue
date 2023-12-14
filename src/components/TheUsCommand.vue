<template>
  <section calss="UsCommand">
    <div class="UsCommand__container">
      <div class="UsCommand__picture">
        <img src="/img/Painting.png" alt="" class="UsCommand__picture--img" />
      </div>
      <div class="UsCommand__content">
        <h2 class="UsCommand__title">Наша команда</h2>
        <p class="UsCommand__text">
          Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение
          экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что
          консультация с широким активом.
        </p>
        <div class="UsCommand__avatars avatars">
          <div class="avatars__avatar">
            <img src="/avatars/avatar_2.jpg" alt="" class="avatars__avatar--img">
          </div>
          <div class="avatars__avatar">
            <img src="/avatars/avatar_1.jpg" alt="">
          </div>
          <div class="avatars__avatar">
            <img src="/avatars/avatar_3.jpg" alt="">
          </div>
         
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style scoped>

.UsCommand__container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
  padding: 70px 15px;
}
.UsCommand__content {
  max-width: 635px;
}
.UsCommand__title {
  font-size: clamp(1.5rem, 0.357rem + 2.381vw, 2.5rem);
  font-weight: 500;

  margin-bottom: 20px;
}
.UsCommand__text {
  font-size: clamp(1rem, 0.857rem + 0.298vw, 1.125rem);
  margin-bottom: 20px;
}
@media screen and (max-width: 965px) {
  .UsCommand__container {
    flex-direction: column;
    align-items: start;
  }
}
.avatars 
{
  display: flex;
  gap: clamp(1.563rem, 1.473rem + 0.446vw, 1.875rem);
}
.avatars__avatar
{
  aspect-ratio: 1/1;
  width: 80px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
