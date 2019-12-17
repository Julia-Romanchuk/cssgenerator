import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import FlexBox from './pages/FlexBox'
import Home from './pages/Home'
import Border from './pages/Border'

import './index.scss'
import './index.css'



const App = () => (
  <div className = 'container'>
    <BrowserRouter>
    <div className = 'title'><p>Welcome to CSS Generator</p></div>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/flex-box' component={FlexBox}/>
          <Route exact path='/border' component={Border}/>
          {/*<Route exact path='/flexbox' component={Flexbox}/>*/}
          {/*<Route exact path='/font' component={Font}/>*/}
          {/*<Route exact path='/text' component={Text}/>*/}
          {/*<Route exact path='/block' component={Block}/>*/}
        </Switch>
      </Layout>
    </BrowserRouter>
    </div>
)

export default App
