import React from 'react' 

function Data(props) { 
  return( 
    <div> 
        <p>{props.id}</p>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>Hello from data</p>
    </div>
  )
}

export default Data