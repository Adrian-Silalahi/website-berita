import React from 'react'
import "./link.scss"

export default function Link({title,onClick}) {
  return (
    <div className='link' onClick={onClick}>{title}</div>
  )
}
