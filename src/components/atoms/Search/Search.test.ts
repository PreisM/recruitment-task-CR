import Search from './Search.vue'
import { mount } from '@vue/test-utils'

describe('Search.vue', () => {
  const wrapper = mount(Search, {
    global: {
      mocks: {
        $t: (msg: string) => msg
      }
    }
  })

  it('Search render', () => {
    expect(wrapper.exists()).toBe(true)
  })
  
  it('Input works', async () => {
    const input = wrapper.find('input')

    await input.setValue('Test')
    expect(wrapper.emitted('input')).toHaveLength(1)
  })
})
