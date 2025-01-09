import React, { Component } from 'react'

class State extends Component {
    constructor(){
        super()
        this.state= {Message:'hello sajith'}
    }
changeMessage(){
    this.setState({
        Message:"you have suscribed"
    })
}
  render() {
    return (
      <div>
       <h1>{this.state.Message}</h1>
        <button onClick={()=>{this.changeMessage()}}>suscribe</button>
      </div>
    )
  }
}

export default State