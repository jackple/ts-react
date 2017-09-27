import * as React from 'react'
import { inject, observer } from 'mobx-react'
import classNames from 'classnames'

import * as styles from './../Hello/index.css'
import * as scssStyles from './index.scss'
import { WorldStore } from 'store/worldStore'
import Icon from 'components/Icons'
import { Button } from 'antd'

interface Props {
  worldStore?: WorldStore
}

@inject('worldStore')
@observer
export default class World extends React.Component<Props, {}> {
  render() {
    const store = this.props.worldStore
    return (
      <div className="text-center">
        <h1 className={classNames(styles.base, styles.test)}>World...</h1>
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
            <div>loading......</div>
            :
            <div>{JSON.stringify(store.userInfo)}</div>
        }
        <Icon kind="stage" />
      </div>
    )
  }
}
