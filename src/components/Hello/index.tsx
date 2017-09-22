import * as React from 'react'
import { inject, observer } from 'mobx-react'

import * as styles from './index.css'
import { LoginStore } from 'store/loginStore'
import Icon from 'components/Icons'

interface Props {
  loginStore?: LoginStore
}

@inject('loginStore')
@observer
export default class Hello extends React.Component<Props, {}> {
  render() {
    const { loginStore } = this.props

    return (
      <div>
        <h1 className={styles.test}>Hello!</h1>
        <button onClick={loginStore.getUserInfo}>点击请求</button>
        {
          loginStore.loading
            ?
            <div>loading...</div>
            :
            <div>{JSON.stringify(loginStore.userInfo)}</div>
        }
        <Icon kind="stage" />
      </div>
    )
  }
}
