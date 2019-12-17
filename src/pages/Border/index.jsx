import React, { Component } from 'react'
import './styles.css'

// default

class Border extends Component {
  constructor (props){
    super(props);
    this.state = {
      border: '1px solid black',
      borderRadius:''
    }
}

handleClick = event => {
  console.log(event.target.value)
  this.setState({
      borderRadius: event.target.value,
  })
}
//!!!!!!!!!!
drawItems(){
  const arr = ['border-radius', 'border-width', 'border-color', 'border-style'];
  const elementsArr = buttonArr.map(function(item) {return <div>
    <div className='item'>{item}</div>
    <input onChange={this.handleClick}></input> 
    </div>})
  return elementsArr;
}
//!!!!!!!!!!!

  render() {
    return (
      <>
        <div>{this.drawItems()}</div>
        <div style={this.state.borderRadius}>This block will change when you input something</div>
      </>
    )
  }
}



export default Border