import React, { Component } from 'react'

 class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
       username:'',
       Topic:''

    }
  }
  usernamechange=(event)=>{
    
   this.setState({
    username:event.target.value,
   
  })}


  
  tpusernamechange=(event)=>{
    
    this.setState({
     Topic:event.target.value,
    
   })}
handleSubmit=(event)=>{
     alert(`${this.state.user} hfdsh ${this.state.Topic}`)

     }
  

  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>username</label>
          <input type='text' value={this.state.username}  onChange={this.usernamechange} /> 
          <select  value={this.State.Topic} onChange={this.tpusernamechange} >
          
          <option>First Value</option>
          <option>Second Value</option>
          <option >Third Value</option>
          </select>

          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default Form