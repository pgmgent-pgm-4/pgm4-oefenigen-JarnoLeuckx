import React from 'react'

export default function post({title,synopsis,story,author}) {
  return (
    <div className='post'>
        <h1>{title}</h1>
        <p>{synopsis}</p>
        <p>{story}</p>
        <p>{author}</p>
    </div>
  )
}
