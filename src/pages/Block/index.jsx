import React, { Component } from 'react'

const Item = (props) => {
  return Object.keys(props.items).map((item) => (
    <form>
      <div>{item}</div>
      <input value={props.items[item]} onChange={props.handleChange(item)} />
    </form>))
}

class CodeArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    console.log(this.props.items)
    let propArr = [];
    for (let key in this.props.items) {
      if (!(this.props.items[key] === '')) {
        propArr.push(<p>{key}: {this.props.items[key]}</p>);
      }
    }
    return (propArr)
  }
}

class Border extends Component {
  constructor(props) {
    super(props)
    this.state = {
      padding: '',
      margin: '',
      height: '',
      width: '',
    }
  }

  handleChange = style => event => {
    console.log(event.target.value)
    this.setState({
      [style]: event.target.value,
    })
  }

  makeCorrectValue = () => {
    let truePropArr = [];
    Object.keys(this.state).forEach((item) => {
      let arr = item.split('');
      arr[6] = '-' + arr[6].toLowerCase();
      item = arr.join('');
      truePropArr.push(item);
    }
    )
    return truePropArr;
  }

  render() {
    console.log(this.state)
    return (
      <div className='gb'>
        <div className='items' >
          <Item items={this.state} handleChange={this.handleChange} />
        </div>
        <div className='block'  style={this.state}>
          This block will change when you input something
        </div>
        <div className='code'>
          <CodeArea items={this.state} />
        </div>
      </div>
    )
  }
}

export default Border