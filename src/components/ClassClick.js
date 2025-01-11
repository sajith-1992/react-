import React, { Component } from 'react'

export class ClassClick extends Component {

 clickHandler(){
console.log("clickHandler")
}
  render() {
    return (
      <div>
        <button  onClick={this.clickHandler} >compnentclick</button>
        
        </div>
    )
  }
}

export default ClassClick
