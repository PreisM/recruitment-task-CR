<template>
  <div class="pt-20 pb-20 bg-white">
    <div class="container">
      <input
        class="form-control form-control-sm m-auto"
        type="search"
        style="max-width: 25rem;"
        :placeholder="$t('list.search.placeholder')"
        @input="changeInput"
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AtomSearch',
  emits: ['input'],
  setup (_, { emit }) {
    const changeInput = (ev: Event) => {
      const val = (ev.target as HTMLInputElement).value
      emit('input', val.length > 1 ? val : '')
    }

    return {
      changeInput
    }
  }
})
</script>
