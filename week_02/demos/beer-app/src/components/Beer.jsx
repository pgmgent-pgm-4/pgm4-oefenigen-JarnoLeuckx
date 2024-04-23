import React from 'react'

export default function beer({beer}) {
  return (
   <li>
    <h3>{beer.title}-{beer.alchool}</h3>
    <p>{beer.description}</p>
   </li>
  )
}
