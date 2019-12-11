import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import FlexBox from './pages/FlexBox'
import Home from './pages/Home'

import './index.scss'
import './index.css'

// class StartButton extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       mainArr: ['background', 'border', 'font', 'text', 'flexbox', 'block'],
//     }
//   }
//   render(){
//     let componentArr = this.state.mainArr.map((elem) => <button>{elem}</button>)
//     return this.state.mainArr.map((elem) => <button>{elem}</button>);
//   }
//   }

const App = () => (
  <>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/flex-box' component={FlexBox}/>
          {/*<Route exact path='/border' component={Border}/>*/}
          {/*<Route exact path='/flexbox' component={Flexbox}/>*/}
          {/*<Route exact path='/font' component={Font}/>*/}
          {/*<Route exact path='/text' component={Text}/>*/}
          {/*<Route exact path='/block' component={Block}/>*/}
        </Switch>
      </Layout>
    </BrowserRouter>
  </>
)

export default App
