import React from 'react'

function TableEditIcon({ updateButton }) {
  return (
    <svg 
        width="72" 
        height="72" 
        viewBox="0 0 72 72" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className='update-button'
        onClick={() => updateButton()}
    >
        <g id="edit-01">
            <path id="Icon" d="M45 19.5L52.5 27M12 60V52.5L50.25 14.25C52.3211 12.1789 55.6789 12.1789 57.75 14.25V14.25C59.8211 16.3211 59.8211 19.6789 57.75 21.75L19.5 60H12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
    </svg>

  )
}

export default TableEditIcon