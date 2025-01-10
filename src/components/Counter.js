import React, { Component } from 'react'

  class Counter extends Component {
constructor(props) {
  super(props)

  this.state = {
    count:0
  }
}
increment(){
    this.setState((prevState)=>({
        count:prevState.count +1
    }))
}
incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()

}

  render() {
    return (
      <div>
          <h1>count {this.state.count}</h1>
           <button onClick={()=>this.incrementFive()}>click me</button>
       
   
        </div>
    )
  }
}

export default Counter