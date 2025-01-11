import React, { Component } from 'react'

import Child from './Child'

class Parentcomp extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         parent:"this is parent methoed"
      }

      this.parentmethod = this.parentmethod.bind(this)
    }
    parentmethod(){

        alert(`hello ${this.state.parent}`)
    }
  render() {
    return (
      <div>
        <Child parentmethod={this.parentmethod} ></Child>
        
      </div>
    )
  }
}

export default Parentcomp

