import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_API_SERVER
axios.defaults.headers.common['sw-access-key'] = import.meta.env.VITE_SW_ACCESS_KEY

export class ApiProducts {
  public getProducts (order: string) {
    return axios.post('product-listing/e435c9763b0d44fcab67ea1c0fdb3fa0', { order })
  }
  public searchProducts (data: Record<string, unknown>) {
    return axios.post('search', data)
  }
}

const apiProducts = new ApiProducts()
export default apiProducts
