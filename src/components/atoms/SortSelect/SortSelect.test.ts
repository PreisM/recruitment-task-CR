import SortSelect from './SortSelect.vue'
import { mount } from '@vue/test-utils'
import i18n from '@plugins/i18n'
import { createTestingPinia } from '@pinia/testing'
import { useSortStore } from '@stores/sort'

describe('SortSelect.vue', () => {
  const wrapper = mount(SortSelect, {
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
      plugins: [
        i18n, 
        createTestingPinia({
          createSpy: vi.fn
        })
      ]
    }
  })
  
  it('SortSelect render', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Select works', async () => {
    const useSort = useSortStore()
    const input = wrapper.find('select')
    await input.trigger('change')
    expect(useSort.updateSort).toHaveBeenCalled()
  })
})
