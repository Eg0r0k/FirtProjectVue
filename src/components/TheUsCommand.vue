<template>
  <section calss="UsCommand" id="about">
    <div class="UsCommand__container">
      <div class="UsCommand__picture">
        <picture role="img">
          <source srcset="/img/webp/Painting.webp" type="image/webp"  media="(max-width: 726px)" size="445">
          <img src="/img/Painting.png" alt="picture" class="UsCommand__picture--img" loading="lazy" size="445"/>
        </picture>
      </div>
      <div class="UsCommand__content">
        <h2 class="UsCommand__title">Наша команда</h2>
        <p class="UsCommand__text">
          Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение
          экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что
          консультация с широким активом.
        </p>
        <div class="UsCommand__avatars avatars">
          <picture class="avatars__avatar" role="img">
            <source srcset="/avatars/webp/avatar_2.webp" type="image/webp" media="(max-width: 726px)" size="80">
            <img src="/avatars/avatar_2.jpg" alt="avatar" class="avatars__avatar--img" loading="lazy" size="80" />
          </picture>
          <picture class="avatars__avatar" role="img">
            <source srcset="/avatars/webp/avatar_3.webp" type="image/webp" media="(max-width: 726px)" size="80">
            <img src="/avatars/avatar_3.jpg" alt="avatar" class="avatars__avatar--img" loading="lazy" size="80"/>
          </picture>
          <picture class="avatars__avatar" role="img">
            <source srcset="/avatars/webp/avatar_1.webp" type="image/webp" media="(max-width: 726px)" size="80">
            <img src="/avatars/avatar_1.jpg" alt="avatar" class="avatars__avatar--img" loading="lazy" size="80" />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style scoped lang="scss">
@import "@/assets/_base";

.UsCommand {
  &__content {
    max-width: 635px;
  }

  &__title {
    font-size: clamp(1.5rem, 0.357rem + 2.381vw, 2.5rem);
    font-weight: 500;
    margin-bottom: 20px;
  }

  &__text {
    font-size: clamp(1rem, 0.857rem + 0.298vw, 1.125rem);
    margin-bottom: 20px;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
    padding: 70px 15px;

    @media screen and (max-width: $tablet-breakpoint) {
      flex-direction: column;
      align-items: start;
    }
  }
}

.avatars {
  display: flex;
  gap: clamp(1.563rem, 1.473rem + 0.446vw, 1.875rem);

  &__avatar {
    aspect-ratio: 1/1;
    width: 80px;

    border-radius: 50%;
    overflow: hidden;
  }
}</style>
