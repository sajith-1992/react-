import React, { Component } from 'react'

class IfElse extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      LogedIn : true
   }
 }
 
    render() {
     le    
    if(this.state.LogedIn){
        return (
      <div>Welcome sajith</div>
    )} else{
        return (
            <div>Welocme guest</div>

   ) }
  }
}

export default IfElse