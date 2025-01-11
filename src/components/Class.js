import react, { Component } from "react";
class Class extends Component{
   render(){

      const {name}=this.props
    return (<div>
    <h1>hello word this is {name}  </h1>
    {this.props.children}
    </div>)
   }
}

export default Class

