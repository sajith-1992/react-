import React, { Component } from 'react'

 class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
       username:''
    }
  }
  usernamechange=(event)=>{
    
   this.setState({
    username:event.target.value
  })

  }
  render() {
    return (
      <div>
        <form>
          <label>username</label>
          <input type='text' value={this.state.username}  onChange={this.usernamechange} /> 
        </form>
      </div>
    )
  }
}

export default Form