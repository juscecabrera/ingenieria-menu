import React from 'react'
import '../../main.css'

function LayoutSideOption({ svg, text }) {
  return (
    <div className='layoutside-svg-2-wrapper'>
        <img src={svg} className='layoutside-svg-2'/>
        <p>{text}</p>
    </div>
  )
}

export default LayoutSideOption