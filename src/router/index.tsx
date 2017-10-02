import * as React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Error from 'components/Error'
import asyncComponent from './asyncComponent'
const Home = asyncComponent(() => System.import('views/Home').then(mod => mod.default).catch(err => {
  console.error(err)
  return 101
}))
const Login = asyncComponent(() => System.import('views/Login').then(mod => mod.default).catch(err => {
  console.error(err)
  return 101
}))

// 权限控制
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    true ? (
      <Component {...props} />
    ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
  )} />
)

const App = () => (
  <Router>
    <div>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  </Router>
)

export default App
