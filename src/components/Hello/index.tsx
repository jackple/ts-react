import * as React from 'react'
import { ComponentExt } from 'util/reactExt'
import { inject, observer } from 'mobx-react'
import { observable, action, runInAction, computed } from 'mobx'
import classNames from 'classnames'

import * as styles from './index.css'
import * as scssStyles from './index.scss'
import { HelloStore } from 'store/helloStore'
import SvgIcon from 'components/Icons'
import { Button, Icon } from 'antd'

interface Props {
  helloStore?: HelloStore
}

@inject('helloStore')
@observer
export default class Hello extends ComponentExt<Props, {}> {
  // 同props一样, state也应交由mobx管理
  @observable
  private helleState: string = 'helleState'

  @action
  private changeHelleState = (): void => {
    this.helleState = 'changeHelleState'
  }

  render() {
    const store = this.props.helloStore
    return (
      <div className="text-center">
        <h1 className={classNames(styles.base, styles.test)} onClick={this.changeHelleState}>Hello...{this.helleState}</h1>
        <div>
          <h1 className={scssStyles.scss}>scss!!{store.computedTest}</h1>
        </div>
        <Button type="primary" onClick={store.getUserInfo} loading={store.loading}>点击请求</Button>
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
        <SvgIcon kind="stage" color="red" />
      </div>
    )
  }
}
