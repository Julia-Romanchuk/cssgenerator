import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Layout extends Component{
  handleHistoryPush = (to) => () => {
    const { history } = this.props;
    history.push(to)
  }
  
  render() {
    const  {children}  = this.props;

    return (
      <div>
        <button onClick={this.handleHistoryPush('/')}>HOME</button>
        <button onClick={this.handleHistoryPush('/text')}>Text</button>
        <button onClick={this.handleHistoryPush('/boxShadow')}>BoxShadow</button>
        <button onClick={this.handleHistoryPush('/border')}>Border</button>
        <button onClick={this.handleHistoryPush('/font')}>Font</button>
        <button onClick={this.handleHistoryPush('/block')}>Block</button>

        <div>
          {children}
        </div>
      </div>
    )
  }
}

export default withRouter(Layout)



