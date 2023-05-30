import React from 'react'
import "./textArea.scss"

export default function TextArea({...rest}) {
  return (
    <div>
        <textarea className='textArea' {...rest}></textarea>
    </div>
  )
}
