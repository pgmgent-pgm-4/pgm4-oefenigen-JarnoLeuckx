import React,{useState} from 'react'

export default function ToggleMessage({message}) {
  const handleClickShow = () => {
    setShowMessage(!showMessage)
  }
    const {showMessage, setShowMessage} = useState(true)
  return (
    <div>
    <button onClick={handleClickShow}> Show/hide message</button>
        {showMessage&& <p> 
          {message}
          </p>}

    </div>
  )
}

