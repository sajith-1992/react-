import React from 'react'
import './Style.css'

function Style(props) {
    const primary = props.primary? 'primary':"" 
  return (
    <div >
        
       <h1 className= {`${primary} font `}   >Style</h1> 
        
        </div>
  )
}

export default Style