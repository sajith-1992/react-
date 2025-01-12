import React, { Component } from 'react'

class IfElse extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      LogedIn : true
   }
 }
 
    render() {
    return this.state.LogedIn && <div>this is sjaith</div>
}}

export default IfElse