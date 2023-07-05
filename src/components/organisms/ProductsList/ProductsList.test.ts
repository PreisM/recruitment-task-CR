import ProductsList from './ProductsList.vue'
import { mount } from '@vue/test-utils'
import i18n from '@plugins/i18n'

describe('ProductsList.vue', () => {
  const products = [
    {
      id: 1,
      translated: {
        name: 'Test Name',
        description: 'Test description'
      },
      calculatedPrice: {
        unitPrice: 5
      }
    },
    {
      id: 2,
      translated: {
        name: 'Test2 Name',
        description: 'Test2 description'
      },
      calculatedPrice: {
        unitPrice: 52
      }
    }
  ]
  const wrapper = mount(ProductsList, {
    props: {
      products,
      isLoading: true
    },
    global: {
      plugins: [i18n]
    }
  })
  
  it('ProductsList render', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('Gets props', () => {
    expect(wrapper.props().products).toStrictEqual(products)
    expect(wrapper.props().isLoading).toBe(true)
  })
  it('Renders list', async () => {
    await wrapper.setProps({ isLoading: false })
    const items = wrapper.findAll('[data-test="product"]')
    expect(items).toHaveLength(2)
  })
})
