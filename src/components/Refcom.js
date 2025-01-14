import React, { Component } from 'react'

 class Refcom extends Component {
   constructor(props) {
     super(props)
   
     this.inputRef = React.createRef()
   }
componentDidMount=()=>{
    this.inputRef.current.focus()
}
  render() {

    return (
      <div>
        <input type="text" ref={this.inputRef } />
      </div>
    )
  }
}

export default Refcom