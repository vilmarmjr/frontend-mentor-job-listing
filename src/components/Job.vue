<template>
  <div class="job card" v-bind:class="job.featured ? 'job--featured' : ''">
    <div class="job__main">
      <img class="job__logo" :src="logo" :alt="job.company" />
      <div class="job__details">
        <div class="job__company">
          <span class="job__company-name">{{ job.company }}</span>
          <div class="job__highlights">
            <span class="job__highlight" v-if="job.new">NEW!</span>
            <span class="job__highlight job__highlight--featured" v-if="job.featured">FEATURED</span>
          </div>
        </div>
        <h1 class="job__position">{{ job.position }}</h1>
        <span class="job__information">{{ job.postedAt }} · {{ job.contract }} · {{ job.location }}</span>
      </div>
    </div>
    <hr class="job__hr" />
    <div class="job__tags">
      <span class="job__tag" v-on:click="() => onTagClick(job.role)">{{ job.role }}</span>
      <span class="job__tag" v-on:click="() => onTagClick(job.level)">{{ job.level }}</span>
      <span class="job__tag" v-on:click="() => onTagClick(language)" v-for="language in job.languages" :key="language">{{ language }}</span>
      <span class="job__tag" v-on:click="() => onTagClick(tool)" v-for="tool in job.tools" :key="tool">{{ tool }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Job } from '../models/job';
export default defineComponent({
  name: 'Job',
  props: {
    job: {
      type: Object as PropType<Job>,
      required: true
    }
  },
  methods: {
    onTagClick(value: string): void {
      this.$emit('tag-click', value);
    }
  },
  data() {
    return {
      logo: require(`@/assets/images/${this.job.logo}`)
    };
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/breakpoints.scss';

.job {
  display: grid;
  gap: 1rem;
  padding: 3.5rem 1.5rem;
  position: relative;

  @include gt-xs {
    grid-template-columns: 1fr 1fr;
    padding: 3.5rem;
  }

  &--featured {
    border-left: 4px solid var(--primary);
  }

  &__main {
    display: flex;
    align-items: center;
  }

  &__details {
    display: grid;
    grid-template-rows: 1fr;
    gap: 1rem;
  }

  &__logo {
    position: absolute;
    height: 4.5rem;
    width: 4.5rem;
    top: 0;
    left: 1.5rem;
    transform: translateY(-50%);

    @include gt-xs {
      height: 7rem;
      width: 7rem;
      position: static;
      transform: none;
      margin-right: 2rem;
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

    &--featured {
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

  &__tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @include gt-xs {
      justify-content: flex-end;
    }
  }

  &__tag {
    font-size: 1.2rem;
    font-weight: 700;
    padding: 0.8rem 0.6rem 0.6rem 0.6rem;
    color: var(--primary);
    background: var(--neutral-300);
    border-radius: 0.4rem;
    margin-top: 0.5rem;
    cursor: pointer;

    &:hover {
      background: var(--primary);
      color: #fff;
    }

    @include gt-xs {
      margin-top: 0;
      margin-left: 1rem;
    }

    &:not(:last-child) {
      margin-right: 1rem;

      @include gt-xs {
        margin-right: 0;
      }
    }
  }
}
</style>
