<template>
  <div class="home">
    <header class="home__header"></header>
    <main class="home__content">
      <Filters
        class="home__job"
        v-if="activeFilters.length"
        v-on:remove="onFilterRemove"
        v-on:clear="onFiltersClear"
        :activeFilters="activeFilters"
      />
      <Job class="home__job" v-for="job in jobs" :key="job.id" :job="job" v-on:tag-click="onTagClick" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Job from './Job.vue';
import { Job as JobModel } from '../models/job';
import Filters from './Filters.vue';
import jobsService from '../services/job';

type ComponentData = {
  jobs: JobModel[];
  activeFilters: string[];
};

export default defineComponent({
  name: 'Home',
  components: { Job, Filters },
  data(): ComponentData {
    return {
      jobs: [],
      activeFilters: []
    };
  },
  mounted() {
    this.loadJobs();
  },
  methods: {
    onTagClick(value: string): void {
      const filterAlreadyExists = this.activeFilters.some(f => f === value);

      if (!filterAlreadyExists) {
        this.activeFilters = [value, ...this.activeFilters];
        this.loadJobs();
      }
    },

    onFiltersClear(): void {
      this.activeFilters = [];
      this.loadJobs();
    },

    onFilterRemove(filter: string): void {
      this.activeFilters = this.activeFilters.filter(f => f !== filter);
      this.loadJobs();
    },

    loadJobs(): void {
      jobsService.getJobs(this.activeFilters).then(jobs => {
        this.jobs = jobs;
      });
    }
  }
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
