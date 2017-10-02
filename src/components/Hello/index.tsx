import * as React from 'react'
import { inject, observer } from 'mobx-react'
import classNames from 'classnames'

import * as styles from './index.css'
import * as scssStyles from './index.scss'
import HelloStore from 'store/helloStore'
import Icon from 'components/Icons'
import { Button } from 'antd'

interface Props {
  HelloStore?: HelloStore
}

@inject('HelloStore')
@observer
export default class Hello extends React.Component<Props, {}> {
  render() {
    const store = this.props.HelloStore
    return (
      <div className="text-center">
        <h1 className={classNames(styles.base, styles.test)}>Hello...</h1>
        <div>
          <h1 className={scssStyles.scss}>scss!!</h1>
        </div>
        <Button type="primary" onClick={store.getUserInfo}>点击请求</Button>
        <div className={scssStyles.btnContainer}>
          <Button type="danger" onClick={store.getError}>点击错误的请求</Button>
        </div>
        {
          store.loading
            ?
            <div>loading...</div>
            :
            <div>{JSON.stringify(store.userInfo)}</div>
        }
        <Icon kind="stage" />
      </div>
    )
  }
}
