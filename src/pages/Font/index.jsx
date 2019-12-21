import React, { Component } from 'react'

// default

class Font extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fontFamily: '',
      fontStyle: '',
      fontSize: '',
      fontWeight: '',
      fontVariant: ''
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

  makeCorrectValue = () => {
    let truePropArr = [];
    Object.keys(this.state).forEach((item) => {
      let arr = item.split('');
      arr[4] = '-' + arr[4].toLowerCase();
      item = arr.join('');
      truePropArr.push(item);}
    )
        return truePropArr;}

  render() {
    console.log(this.state)
    return (
      <>
        <div>{this.drawItems()}</div>
        <div style={this.state}>
          This block will change when you input something
        </div>
        <div>
            {this.makeCorrectValue()}
        </div>
      </>
    )
  }
}

export default Font