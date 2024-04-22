import React from 'react'

export default function Person({firstname, lastname,prictureUrl,age,lenth,weight}) {
  return (
<div className='person' >
    <h2>{firstname} {lastname}</h2>
    <p> Age: {age}</p>
    <p> Lenth: {lenth} cm</p>
    <p> Weight: {weight} kg</p>
    <img src={prictureUrl} alt="Person" />
</div>
  )
}