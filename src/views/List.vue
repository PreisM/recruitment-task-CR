<template>
  <div>
    <search @input="searchValue" />
    <productsList
      :products="products"
      :is-loading="isLoading"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'

import Search from '@atoms/Search'
import apiProducts from '@api/products'
import ProductsList from '@organisms/ProductsList'

import { Product } from '@/interfaces'
import { useSortStore } from '@stores/sort'

export default defineComponent({
  name: 'ListView',
  components: {
    Search,
    ProductsList
  },
  setup () {
    const products = ref([] as Product[])
    const useSort = useSortStore()
    const isLoading = ref(true)
    const sort = computed(() => useSort.getSort)
    const phrase = ref('')

    watch(() => sort.value, () => {
      phrase.value ? searchValue(phrase.value) : getProducts()
    })

    const getProducts = async () => {
      await apiProducts.getProducts(sort.value)
        .then((res) => {
          products.value = res.data.elements
          isLoading.value = false
        })
        .catch((err) => {
          console.error(err)
        })
    }
    
    const searchValue = async (search: string) => {
      phrase.value = search
      if (search) {
        await apiProducts.searchProducts({ search, order: sort.value })
          .then((res) => {
            products.value = res.data.elements
          })
          .catch((err) => {
            console.error(err)
          })
      } else {
        await getProducts()
      }
    }

    onMounted(async () => {
      await getProducts()
    })

    return {
      searchValue,
      products,
      isLoading
    }
  }
})
</script>
