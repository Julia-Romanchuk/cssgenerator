import React, { Component } from 'react'

// default

class Border extends Component {
  constructor(props) {
    super(props)
    this.state = {
      borderRadius: '',
      borderColor: '',
      borderStyle: '',
      borderWidth: '',
    }
  }

  handleChange = style => event => {
    console.log(event.target.value)
    this.setState({
      [style]: event.target.value,
    })
  }

  drawItems = () => {
    return Object.keys(this.state).map((item) => (
      <div>
        <div>{item}</div>
        <input value={this.state[item]} onChange={this.handleChange(item)}/>
      </div>
    ))
  }


  generateCode = () => {
    return Object.keys(this.state).map((item) => (
      <div>
        <div>{item}: {this.state[item]}; </div>
      </div>
    ))
  }

  makeCorrectValue = () => {
    let truePropArr = [];
    Object.keys(this.state).forEach((item) => {
      let arr = item.split('');
      arr[6] = '-' + arr[6].toLowerCase();
      item = arr.join('');
      truePropArr.push(item);}
    )
  return truePropArr;
 }

      
  render() {
    console.log(this.state)
    return (
      <>
        <div>{this.drawItems()}</div>
        <div style={this.state}>
          This block will change when you input something
        </div>
    <div>{this.generateCode()}</div>
      </>
    )
  }
}

export default Border
