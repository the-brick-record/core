import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import testing from './pages/testing'



export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/testing" component={testing} />
      <Route path="/:id" component={UserPage} />
    </Switch>
  )
}
