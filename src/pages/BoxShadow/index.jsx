import React, { Component } from 'react'

const InputValues = (props) => {
 return Object.keys(props.propNames).map((item) => (
   <div>
      <div>{item}</div>
      <input value={props.propNames[item]} onChange={props.handleChange(item)}/>
    </div>
 ))
}

const ChangeBlock = (props) => {
  return <div className='block' style={{boxShadow: props.shadowStr}}>
    This block will change when you input something
  </div>
}

const CodeBlock = (props) => {
     let shadowString= '';
  
    for (let key in props.propList){
        shadowString= shadowString + ' ' + props.propList[key]
    }
  
    return <div>
      BoxShadow: {shadowString}
  </div>
  
}

class BoxShadow extends Component {
  constructor(props){
  super(props)
  this.state = {
    right: '',
    down: '',
    blur: '',
    spread: '',
    color: '',
  }
  }

  createValue(){
    let value = '';
    for(let key in this.state){
        value += this.state[key] + ' ';
    }
    console.log(value)
    return value
  }

  handleChange = style => event => {
    console.log(event.target.value)
    this.setState({
      [style]: event.target.value,
    })
  }

render(){
  return <div className='gb'>
    <div className='items'>
    <InputValues propNames = {this.state} handleChange={this.handleChange}/>
    </div>
    <div>
    <ChangeBlock shadowStr={this.createValue()}/>
    </div>
    <div className='code'>
    <CodeBlock className='code' propList={this.state}/>
    </div>
  </div>
}
}
export default BoxShadow