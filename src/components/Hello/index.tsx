import * as React from 'react'
import { inject, observer } from 'mobx-react'
import classNames from 'classnames'

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
    const { loginStore } = this.props
    return (
      <div className="text-center">
        <h1 className={classNames(styles.base, styles.test)}>css!</h1>
        <div>
          <h1 className={scssStyles.scss}>scss!</h1>
        </div>
        <Button type="primary" onClick={loginStore.getUserInfo}>点击请求</Button>
        <div className={scssStyles.btnContainer}>
          <Button type="danger" onClick={loginStore.getError}>点击错误的请求</Button>
        </div>
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
