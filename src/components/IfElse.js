import React, { Component } from 'react'

class IfElse extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      LogedIn : true
   }
 }
 
    render() {
     let message    
    if(this.state.LogedIn){
        
      message= <div>Welcome sajith</div>
    } else{
       
      message = <div>Welocme guest</div>

    }
    return(<div>{message}</div>)
  }
}

export default IfElse