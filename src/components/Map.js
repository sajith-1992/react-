import React from 'react'

function Map() {
    const name =['saji','abi','hello']
    const nameList =   name.map((name)=><h2>{name}</h2>)
  return (

    <div>
     {
        nameList
     }
        
    </div>
  )
}

export default Map