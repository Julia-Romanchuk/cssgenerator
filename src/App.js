import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './style.sass' ;
import './index.css';
import Background from './background';
import Border from './border';
import Flexbox from './flexbox';
import Text from './text';
import Font from './font';
import Block from './block';

class StartButton extends Component{
  constructor(props){
    super(props);
    this.state = {
      mainArr: ['background', 'border', 'font', 'text', 'flexbox', 'block'],
    }
  }
  render(){
    let componentArr = this.state.mainArr.map((elem) => <button>{elem}</button>)
    return this.state.mainArr.map((elem) => <button>{elem}</button>);
  }
  }


class App extends Component {
  render() {
    return (
      <div className='root'>
      <StartButton />

      <Router>
          <Route exact path='/background' component = {Background}/>
          <Route exact path='/border' component = {Border}/>
          <Route exact path='/flexbox' component = {Flexbox}/>
          <Route exact path='/font' component = {Font}/>
          <Route exact path='/text' component = {Text}/>
          <Route exact path='/block' component = {Block}/>
        </Router>
      </div>
    );
  }
}

export default App;
