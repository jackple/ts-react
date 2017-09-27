import 'styles/app.scss'

import * as React from 'react'
import { Provider, observer } from 'mobx-react'

import App from 'router'
import store from 'store'

@observer
export default class Main extends React.Component<{}, {}> {
  render() {
    return (
      <Provider {...store}>
        <App />
      </Provider>
    )
  }
}
