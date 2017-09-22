/**
 * 组件lazyload
 */
import * as React from 'react'

export default function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null
    state = {
      Component: AsyncComponent.Component
    }

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        })
      }
    }

    render() {
      const { Component } = this.state
      if (Component) {
        if (Component === 101) {
          return null
        } else {
          return <Component { ...this.props} />
        }
      }
      return null
    }
  }
}

