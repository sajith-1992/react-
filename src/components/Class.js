import react, { Component } from "react";
class Class extends Component{
   render(){
    return (<div>
    <h1>hello word this is {this.props.name}  </h1>
    {this.props.children}
    </div>)
   }
}

export default Class

