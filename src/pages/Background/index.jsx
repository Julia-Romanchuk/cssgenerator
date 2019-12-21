import React, { Component } from 'react'
import './styles.css'

// default

class Border extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //border: '1px solid black',
      borderRadius: '',
      borderColor: '',
      borderStyle: '',
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

  render() {
    console.log(this.state)
    return (
      <>
        <div>{this.drawItems()}</div>
        <div style={this.state}>
          This block will change when you input something
        </div>
      </>
    )
  }
}

export default Border