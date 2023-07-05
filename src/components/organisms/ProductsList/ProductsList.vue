<template>
  <div class="bg-light">
    <div class="container">
      <spinner v-if="isLoading" />
      <div
        v-else
        class="row pt-12 pb-12"
      >
        <list-item
          v-for="product in products"
          :key="product.id"
          data-test="product"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import Spinner from '@atoms/Spinner'
import ListItem from '@atoms/Product'

import { Product } from '@/interfaces'

export default defineComponent({
  name: 'OrganismProductsList',
  components: {
    Spinner,
    ListItem
  },
  props: {
    products: {
      type: Array as PropType<Product[]>,
      required: true
    },
    isLoading: {
      type: Boolean
    }
  }
})
</script>
