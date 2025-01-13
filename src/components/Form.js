import React, { Component } from 'react'

 class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
       username:'',
       Topic:'volvo'

    }
  }
  usernamechange=(event)=>{
    
   this.setState({
    username:event.target.value,
   
  })}


  
  selectusernamechange=(event)=>{
    
    this.setState({
     Topic:event.target.value,
    
   })}
// handleSubmit=(event)=>{
//      alert(`${this.state.user} hfdsh ${this.state.Topic}`)

//      }
selectOnchange=(event)=>{
  this.setState({
    Topic:event.target.value
  })
}
submitform=(event)=>{
  alert( `$this.state.username $this.state.Topic`)
}
  

  
  render() {
    return (
      <div>
        <form onSubmit={this.submitform} >
          <label>username</label>
          <input type='text' value={this.state.username}  onChange={this.usernamechange} /> 
          <label for="cars">Choose a car:</label>

<select value={this.state.Topic} onChange={this.selectOnchange} >
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>

          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default Form