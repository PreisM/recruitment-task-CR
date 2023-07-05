import { defineStore } from 'pinia'

export const useSortStore = defineStore('sort', {
  state: () => ({
    sort: 'price-asc'
  }),
  getters: {
    getSort (state) {
      return state.sort
    }
  },
  actions: {
    async updateSort (val: string) {
      this.sort = val
    }
  }
})
