import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Border from './pages/Border'
import Font from './pages/Font'
import Block from './pages/Block'
import Text from './pages/Text'
import BoxShadow from './pages/BoxShadow'

import './index.css'

const App = () => (
  <div className = 'cont'>
    <BrowserRouter>
    <div className = 'title'><p>Welcome to CSS Generator</p></div>
      <Layout>
        <Switch>
        <Route exact path='/text' component={Text}/>
          <Route exact path='/boxShadow' component={BoxShadow}/>
          <Route exact path='/border' component={Border}/>
          <Route exact path='/'/>
          <Route exact path='/font' component={Font}/>
          <Route exact path='/block' component={Block}/>
        </Switch>
      </Layout>
    </BrowserRouter>
    </div>
)

export default App


