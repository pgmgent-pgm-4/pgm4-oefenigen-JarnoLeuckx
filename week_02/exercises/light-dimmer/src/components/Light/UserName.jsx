import React from 'react'
import { useState } from 'react'

export default function UserName() {
    const [name, setName] = useState('') 
  return (
    <div>
        <div>{name}</div>
        <label htmlFor="username">Username</label>
        <input id='username' type="text" value={name} />
    </div>
  )
}
