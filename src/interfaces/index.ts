export interface Product {
  id: number
  translated: {
    name: string
    description: string
  },
  calculatedPrice: {
    unitPrice: number
  }
}
