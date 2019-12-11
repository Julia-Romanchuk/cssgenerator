import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Layout extends Component{
  handleHistoryPush = (to) => () => {
    const { history } = this.props

    history.push(to)
  }
  
  render() {
    const { children } = this.props

    return (
      <div>
        <button onClick={this.handleHistoryPush('/')}>Home</button>
        <button onClick={this.handleHistoryPush('/flex-box')}>Flexbox</button>
        <button onClick={this.handleHistoryPush('/border')}>border</button>
        <button onClick={this.handleHistoryPush('/flexbox')}>flexbox</button>
        <button onClick={this.handleHistoryPush('/font')}>font</button>
        <button onClick={this.handleHistoryPush('/text')}>text</button>
        <button onClick={this.handleHistoryPush('/block')}>block</button>

        <div>
          {children}
        </div>
      </div>
    )
  }
}

export default withRouter(Layout)
