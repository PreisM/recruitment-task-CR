import Navbar from './Navbar.vue'
import { shallowMount } from '@vue/test-utils'

describe('Navbar.vue', () => {
  const wrapper = shallowMount(Navbar, {
    global: {
      mocks: {
        $t: (msg: string) => msg
      }
    }
  })

  it('Navbar render', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
