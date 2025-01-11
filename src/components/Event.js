import React, { Component } from 'react'

 class Event extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:'hai'
    }
  }
  changemessage(){
    this.setState({
        message : "thankyou for connection"
    })
  }

  render() {
    return (
        
      <div>
        <hai>this  this {this.state.message}</hai>
        <br></br>

         <button onClick={()=>this.changemessage()
         } >Click</button>
        
    </div>
    )
  }
}

export default Event