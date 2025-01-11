import React from 'react'

function Child(props) {
  return (
    <div>
        <button onClick={props.parentmethod}>Great</button>
    </div>
  )
}

export default Child
