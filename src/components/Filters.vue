<template>
  <div class="filters card">
    <div class="filters__list">
      <div v-for="filter in activeFilters" :key="filter" class="filters__item">
        <span class="filters__text">{{ filter }}</span>
        <button type="button" class="filters__button" v-on:click="() => onRemove(filter)">
          <img :src="iconRemove" alt="Remove icon" />
        </button>
      </div>
    </div>
    <a class="filters__clear" v-on:click="onClear">Clear</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
export default defineComponent({
  name: 'Filters',
  props: {
    activeFilters: {
      type: Array as PropType<string[]>,
      required: true
    }
  },
  methods: {
    onClear(): void {
      this.$emit('clear');
    },

    onRemove(filter: string): void {
      this.$emit('remove', filter);
    }
  },
  data() {
    return {
      iconRemove: require('@/assets/icons/icon-remove.svg')
    };
  }
});
</script>

<style scoped lang="scss">
.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3.5rem;

  &__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &__item {
    background: var(--neutral-300);
    border-radius: 0.4rem;
    display: grid;
    grid-template-columns: 1fr min-content;
    overflow: hidden;
    margin: 0.5rem 0;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }

  &__text {
    font-size: 1.3rem;
    color: var(--primary);
    font-weight: 700;
    padding: 0.8rem 0.8rem 0.6rem 0.8rem;
    display: inline-block;
  }

  &__button {
    background: var(--primary);
    border: none;
    height: 100%;
    padding: 0 0.8rem;
    cursor: pointer;
    transition: background 0.1s;

    &:active {
      background: var(--neutral-500);
    }
  }

  &__clear {
    font-size: 1.3rem;
    color: var(--primary);
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
