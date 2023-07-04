<template>
  <div class="bg-dark position-fixed container min-vw-100 top-0">
    <div class="container">
      <div class="row justify-content-center justify-content-md-between pt-2 pb-2">
        <h1
          class="text-white text-center text-md-start fs-4 mb-0 col-12 col-md-9 mb-2 mb-md-0 pt-1"
          v-text="$t('title')"
        />
        <sort-select />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SortSelect from '@atoms/SortSelect'

export default defineComponent({
  name: 'MoleculeNavbar',
  components: {
    SortSelect
  }
})
</script>
