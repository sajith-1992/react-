import React, { Component } from 'react'

class IfElse extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      LogedIn : false
   }
 }
 
    render() {
     return this.state.LogedIn ? (
        <div>this is sajith</div>
     ):(
     <div>this is welcome guest</div>
    
    )
}}

export default IfElse