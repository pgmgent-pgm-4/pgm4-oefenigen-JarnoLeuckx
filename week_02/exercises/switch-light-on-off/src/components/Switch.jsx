import React from 'react'
import { useState } from 'react'
export default function Switch() {
    const [lightOn, setLightOn] = useState(false)
    const toggleLight = () => {
        setLightOn(!lightOn)
        document.body.style.backgroundColor= lightOn ? '#fff' : '#000'
    } 
  return (
    <div>
        <label htmlFor="">
            <input type="checkbox" checked={lightOn} onChange={toggleLight} />
            {lightOn ? 'ON' : 'OFF'}
        </label>
    </div>
  )
}
