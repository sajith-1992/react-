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
        return (
      message= <div>Welcome sajith</div>
    )} else{
        return (
      message = <div>Welocme guest</div>

   ) }
  }
}

export default IfElse