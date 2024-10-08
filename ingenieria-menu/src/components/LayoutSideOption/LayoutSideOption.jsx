import React from 'react'
import '../../main.css'
import { useNavigate, useLocation } from "react-router-dom";

function LayoutSideOption({ svg, svgActive, text }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLayoutClick = () => { 
    if (text === "Platos") {
      navigate('/platos')
    } else if (text === "Costos") {
      navigate('/costs')
    } else {
      navigate('/informes')
    }
  }

  const isActive = (text === 'Platos' && location.pathname === '/platos') ||
                   (text === 'Costos' && location.pathname === '/costs') ||
                   (text === 'Informes' && location.pathname === '/informes');
  
  return (
    <div 
      onClick={() => {handleLayoutClick()}} 
      // className='layoutside-svg-wrapper'
      className={`${isActive ? 'layoutside-svg-wrapper-active' : 'layoutside-svg-wrapper'}`}
    >
      
      <div className='layoutside-svg-container'>
        <img 
          src={isActive ? svgActive : svg} 
          className='layoutside-svg'
        />
      </div>

      <div className='layoutside-p'>
        <p>{text}</p>
      </div>

    </div>
  )
}

export default LayoutSideOption