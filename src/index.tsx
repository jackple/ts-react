import 'styles/app.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { rehydrate, hotRehydrate, store as rfxStore } from 'rfx-core'

import App from 'router'
import store from 'store'
import { RequireImport } from 'types/interface'

rfxStore.setup(store)
const rStore = rehydrate()

// Hot Module Replacement API
if (module.hot) {
  (async() => {
    const { AppContainer } = await System.import('react-hot-loader')
    module.hot.accept(['router'], () => {
      const NextApp = require<RequireImport>('router').default
      render(NextApp, true)
    })
  })()
}

const render = (Component, hot: boolean) => {
  const _store = hot ? hotRehydrate() : rStore
  console.log(_store)
  ReactDOM.render(
    <Provider {..._store}>
      <Component />
    </Provider>,
    document.getElementById('app') as HTMLElement
  )
}

render(App, false)
