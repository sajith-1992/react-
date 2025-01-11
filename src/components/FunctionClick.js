import React from 'react'

 function FunctionClick() {
  function evenHandling(){
    console.log("this is evenhandling funtion")
  }
 
  return (

    <div><button onClick={evenHandling}> click</button></div>
  )
}
export default FunctionClick