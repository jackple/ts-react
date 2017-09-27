import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Main from './main'
import { RequireImport } from 'types/interface'

ReactDOM.render(
  <Main />,
  document.getElementById('app') as HTMLElement
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept(['./main'], () => {
    const NextApp = require<RequireImport>('./main').default
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app') as HTMLElement
    )
  })
}
