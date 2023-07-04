import Spinner from './Spinner.vue'
import { mount } from '@vue/test-utils'

describe('Spinner.vue', () => {
  const wrapper = mount(Spinner)

  it('Spinner render', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
