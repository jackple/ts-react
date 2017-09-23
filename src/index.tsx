// import 'styles/app.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'mobx-react'

import App from 'router'
import { RequireImport } from 'types/interface'
import store from 'store'

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('app') as HTMLElement
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('router', () => {
    const NextApp = require<RequireImport>('router').default
    ReactDOM.render(
      <AppContainer>
        <Provider {...store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      document.getElementById('app') as HTMLElement
    )
  })
}
