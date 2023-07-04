<template>
  <div class="col-12 col-md-6 col-xl-4 p-2">
    <div class="bg-white p-5 rounded-2 shadow h-100 d-flex flex-column justify-content-between">
      <div>
        <h6
          class="fw-bold"
          v-text="product.translated.name"
        />
        <div class="mb-6">
          <span v-text="product.translated.description" />
        </div>
      </div>
      <span
        v-if="calculatePrice"
        v-html="calculatePrice(product.calculatedPrice.unitPrice)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { Product } from '@/interfaces'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'AtomProduct',
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  },
  setup () {
    const { t } = useI18n()
    const calculatePrice = (price: number) => t('list.price', { price: price.toFixed(2) })

    return {
      calculatePrice
    }
  }
})
</script>
