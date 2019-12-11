import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class FlexBoxTest extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    const { history, match } = this.props

    history.push(`/flex-box/${parseInt(match.params.number, 10) + 1}`)
  }

  render() {
    console.log('FlexBoxTest', this.props)

    return (
      <button onClick={this.handleClick}>{this.props.match.params.number}</button>
    )
  }
}

export default withRouter(FlexBoxTest)
