import React, { Component } from 'react'

// default

const Item = (props) => {
  let number = 0;
  return Object.keys(props.items).map((item) => (
      <div>
        <div>{props.correctNames[`${number++}`]}</div>
        <input value={props.items[item]} onChange={props.handleChange(item)}/>
      </div>))
}

class CodeArea extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
        }

   

    render () {
      let number = 0;
        console.log(this.props.items)
        let propArr = [];
        for (let key in this.props.items){
            if (!(this.props.items[key] === '')){
            propArr.push(<p>{this.props.correctNames[number]}: {this.props.items[key]}</p>);
            } number++
        }
        return (propArr) }    

}



class Outline extends Component {
  constructor(props) {
    super(props)
    this.state = {
        outlineStyle: '',
        outlineColor: '',
        ouilineWidth: '',
        outlineOffset: '',
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
      arr[7] = '-' + arr[7].toLowerCase();
      item = arr.join('');
      truePropArr.push(item);}
    )
  return truePropArr;
 }

      
  render() {
    console.log(this.state)
    return (
      <>
      <Item items = {this.state} handleChange = {this.handleChange} correctNames={this.makeCorrectValue()}/>
        <div style={this.state}>
          This block will change when you input something
        </div>
        <div>
            <CodeArea items={this.state}  correctNames={this.makeCorrectValue()}/>
        </div>
      </>
    )
  }
}

export default Outline
