import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Main from './main'
import { RequireImport } from 'types/interface'

ReactDOM.render(
  <Main />,
  document.getElementById('app') as HTMLElement
)

// Hot Module Replacement API
if (module.hot) {
  (async() => {
    const { AppContainer } = await System.import('react-hot-loader')
    module.hot.accept(['./main'], () => {
      const NextMain = require<RequireImport>('./main').default
      ReactDOM.render(
        <AppContainer>
          <NextMain />
        </AppContainer>,
        document.getElementById('app') as HTMLElement
      )
    })
  })()
}
