import React, { Component } from 'react'

// default

class Text extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //border: '1px solid black',
      color: '',
      textAlignment: '',
      textDecoration: '',
      textTransformation: '',
      letterSpacing: '',
      textShadow: ''
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
        <div className='item'>{item}</div>
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

export default Text;