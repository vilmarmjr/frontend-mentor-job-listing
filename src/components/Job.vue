<template>
  <div class="job card">
    <img class="job__floating-logo" src="@/assets/images/insure.svg" />
    <div class="job__company">
      <span class="job__company-name">Photosnap</span>
      <div class="job__highlights">
        <span class="job__highlight">NEW!</span>
        <span class="job__highlight job__highlight--dark">FEATURED</span>
      </div>
    </div>
    <h1 class="job__position">Senior Frontend Developer</h1>
    <span class="job__information">1d ago · Full Time · USA Only</span>
    <hr class="job__hr" />
    <div class="job__languages">
      <span class="job__language">Frontend</span>
      <span class="job__language">Senior</span>
      <span class="job__language">HTML</span>
      <span class="job__language">CSS</span>
      <span class="job__language">JavaScript</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Job } from '../models/Job';
export default defineComponent({
  name: 'Job',
  props: {
    job: Object as () => Job
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/breakpoints.scss';

.job {
  display: grid;
  grid-template-rows: 1fr;
  gap: 1rem;
  padding: 3.5rem 1.5rem;
  position: relative;

  &__floating-logo {
    position: absolute;
    height: 4.5rem;
    width: 4.5rem;
    top: 0;
    left: 1.5rem;
    transform: translateY(-50%);

    @include gt-xs {
      display: none;
    }
  }

  &__company {
    display: flex;
    align-items: center;
  }

  &__company-name {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--primary);
  }

  &__highlights {
    margin-left: 0.8rem;
  }

  &__highlight {
    margin: 0 0.3rem;
    font-size: 0.8rem;
    font-weight: 700;
    padding: 0.6rem 0.6rem 0.4rem 0.6rem;
    background: var(--primary);
    color: #fff;
    border-radius: 1.2rem;

    &--dark {
      background: var(--neutral-500);
    }
  }

  &__position {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--neutral-500);
  }

  &__information {
    font-size: 1.2rem;
    color: var(--neutral-400);
  }

  &__hr {
    background: var(--neutral-400);
    height: 1px;
    border: 0;

    @include gt-xs {
      display: none;
    }
  }

  &__languages {
    display: flex;
    flex-wrap: wrap;
  }

  &__language {
    font-size: 1.2rem;
    font-weight: 700;
    padding: 0.6rem 0.6rem 0.4rem 0.6rem;
    color: var(--primary);
    background: var(--neutral-300);
    border-radius: 0.4rem;
    margin-top: 0.5rem;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
}
</style>
