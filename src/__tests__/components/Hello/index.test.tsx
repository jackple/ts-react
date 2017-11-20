import React from 'react'

import { HelloStore } from './../../../store/helloStore'
import Hello from './../../../components/Hello'

describe('Hello.functional', () => {

  it('loading exits', () => {
    const store = new HelloStore()
    store.setLoading(true)

    const wrapper = EnzymeRender(<Hello helloStore={store} />)
    expect(wrapper.find('#loading').length).toBe(1)
    expect(wrapper.find('#user-info').length).toBe(0)
  })
})
