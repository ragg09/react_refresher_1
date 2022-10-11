import React from 'react'

export default function Another(props) {
  return (
    <div>
       <p> My name is {props.name}. </p>
       <p> I am {props.age} y/o. </p>
       <p> I just started working in {props.company} </p>
    </div>
    
  )
}
