import * as React from 'react'

import * as styles from './index.css'

import Hello from 'components/Hello'

export default class Login extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.test}>
        <Hello />
      </div>
    )
  }
}
