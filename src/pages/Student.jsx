import React from 'react'

export default function Student(props) {
  return (

    //multiple props
    <div>
      <h1>student Name:{props.name}</h1>
{props.age &&<p>age:{props.age}</p>}
{props.course && <p>course:{props.course}</p>}
      
    </div>
  )
}
