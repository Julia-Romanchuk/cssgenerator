import React, { Component } from 'react'

// default

class FlexBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alignItems: '',
      // move to default
      width: 500,
      height: 500,
      display: 'flex'
    }
  }

  handleClick = event => {
    console.log(event.target.value)
    this.setState({
        alignItems: event.target.value,
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <input onChange={this.handleClick}/>
        <div style={this.state}>
          FlexBox
        </div>
      </div>
    )
  }
}

export default FlexBox
