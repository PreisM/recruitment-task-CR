import Product from './Product.vue'
import { mount } from '@vue/test-utils'
import i18n from '@plugins/i18n'

describe('Product.vue', () => {
  const wrapper = mount(Product, {
    props: {
      product:
      {
        id: 1,
        translated: {
          name: 'Test name',
          description: 'Test description'
        },
        calculatedPrice: {
          unitPrice: 5
        }
      }
    },
    global: {
      plugins: [i18n]
    }
  })
  
  it('Product render', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('renders name', async () => {
    expect(wrapper.text()).toContain('Test name')
  })
  it('renders description', async () => {
    expect(wrapper.text()).toContain('Test description')
  })
  it('renders price', async () => {
    expect(wrapper.text()).toContain('5.00')
  })
})
