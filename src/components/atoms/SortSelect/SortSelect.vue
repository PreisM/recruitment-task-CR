<template>
  <div class="col-12 col-sm-6 col-md-3">
    <select
      class="form-select bg-transparent text-secondary border-secondary pr-4"
      @change="updateValue"
    >
      <option
        v-for="option in options"
        :key="option.value" 
        class="text-black"
        :value="option.value"
        v-text="option.title"
      />
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { useSortStore } from '@stores/sort'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'AtomSortSelect',
  setup () {
    const { t } = useI18n()
    const useSort = useSortStore()

    const options = [
      {
        value: 'price-asc',
        title: t('navbar.options.cheap')
      },
      {
        value: 'price-desc',
        title: t('navbar.options.expensive')
      }
    ]
    const selectedOption = ref(1)
    const updateValue = (ev: Event) => {
      useSort.updateSort((ev.target as HTMLSelectElement).value)
    }

    return {
      options,
      selectedOption,
      updateValue
    }
  }
})
</script>

<style scoped>
  select {
    background-image: 
      linear-gradient(45deg,  transparent 50%, #6c757d 50% calc(50% + 1px), transparent calc(50% + 2px)), 
      linear-gradient(-45deg, transparent 50%, #6c757d 50% calc(50% + 1px), transparent calc(50% + 2px));
    background-position:
      calc(100% - 30px) 14px,
      calc(100% - 20px) 14px,
      100% 0;
    background-size:
      10px 10px,
      10px 10px;
    background-repeat: no-repeat;
  }
</style>