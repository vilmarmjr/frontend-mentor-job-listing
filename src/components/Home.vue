<template>
  <div class="home">
    <header class="home__header"></header>
    <main class="home__content">
      <Job class="home__job" />
      <Job class="home__job" />
      <Job class="home__job" />
      <Job class="home__job" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Job from './Job.vue';
export default defineComponent({
  name: 'Home',
  components: { Job }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/breakpoints.scss';

.home {
  height: 100vh;
  display: grid;
  grid-template-rows: 20rem 1fr;

  @include gt-xs {
    grid-template-rows: 12rem 1fr;
  }

  &__header {
    background-image: url('~@/assets/images/bg-header-mobile.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-color: var(--primary);

    @include gt-xs {
      background-image: url('~@/assets/images/bg-header-desktop.svg');
    }
  }

  &__content {
    padding: 5.5rem 2.5rem;
    background: var(--neutral-300);

    @include gt-xs {
      padding: 3rem 5rem;
    }
  }

  &__job {
    margin-bottom: 4rem;
  }
}
</style>
