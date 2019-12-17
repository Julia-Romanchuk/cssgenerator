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

  renderItemButtons(){
  const buttonArr = this.state.items.map((item) => <button className = "itemButton">item</button>)
    return <div>{buttonArr}</div>
  
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
        {this.renderItemButtons()}
        <input onChange={this.handleClick}/>
        <div >
          FlexBox
        </div>
      </div>
    )
  }
}

export default FlexBox
