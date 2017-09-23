import * as React from 'react'
import { inject, observer } from 'mobx-react'

import * as styles from './index.css'
import * as scssStyles from './index.scss'
import { LoginStore } from 'store/loginStore'
import Icon from 'components/Icons'
import { Button } from 'antd'

interface Props {
  loginStore?: LoginStore
}

@inject('loginStore')
@observer
export default class Hello extends React.Component<Props, {}> {
  render() {
    console.log(styles, scssStyles)
    const { loginStore } = this.props
    return (
      <div className="text-center">
        <h1 className={styles.test}>css!</h1>
        <div>
          <h1 className={scssStyles.scss}>scss!</h1>
        </div>
        <Button type="primary" onClick={loginStore.getUserInfo}>点击请求</Button>
        <Button type="danger" onClick={loginStore.getError}>点击错误的请求</Button>
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
