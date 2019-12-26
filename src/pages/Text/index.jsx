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



class Text extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textAlign: '',
      textDecorationLine: '',
      textDecorationStyle: '',
      textDecorationColor: '',
      textUnderlinePosition: '',
      color: ''
    }
  }

  handleChange = style => event => {
    console.log(event.target.value)
    this.setState({
      [style]: event.target.value,
    })
  }

  

  makeValue = () => {
    let truePropArr = [];
    Object.keys(this.state).forEach((item) => {
      let arr = item.split('');
      if(arr.length>6){ 
      arr[4]='-'+arr[4].toLowerCase();
      if (arr[3]=='U')
      {arr[15]='-'+arr[15].toLowerCase();
    }else if (arr.length>15)
      arr[14]='-'+arr[14].toLowerCase();}
         
      item = arr.join('');
      truePropArr.push(item);}
    )
  return truePropArr;
 }

      
  render() {
    console.log(this.state)
    return (
      <div className='gb'>
        <div className='items'>      
          <Item items = {this.state} handleChange = {this.handleChange} correctNames={this.makeValue()}/>
        </div>
        <div className='block' style={this.state}>
          This block will change when you input something
        </div>
        <div className='code'>
            <CodeArea items={this.state}  correctNames={this.makeValue()}/>
        </div>
      </div>
    )
  }
}

export default Text