import 'styles/app.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { useStrict } from 'mobx'

import App from 'router'
import store from 'store'
import { RequireImport } from 'types/interface'

useStrict(true)

const render = (Component) => {
  ReactDOM.render(
    <Provider {...store}>
      <Component />
    </Provider>,
    document.getElementById('app') as HTMLElement
  )
}

render(App)

// Hot Module Replacement API
if (module.hot) {
  (async() => {
    const { AppContainer } = await System.import('react-hot-loader')
    module.hot.accept(['router'], () => {
      const NextApp = require<RequireImport>('router').default
      render(NextApp)
    })
    module.hot.accept(['store'], () => {
      window.location.reload()
    })
  })()
}
