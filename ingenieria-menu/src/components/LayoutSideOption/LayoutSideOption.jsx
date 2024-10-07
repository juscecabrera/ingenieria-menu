import React from 'react'
import '../../main.css'
import { useNavigate } from "react-router-dom";

function LayoutSideOption({ svg, text }) {

  const navigate = useNavigate()
  
  const handleLayoutClick = () => { 
    if (text === "Platos") {
      //mostrar DataEntry
      navigate('/dataentry')
    } else if (text === "Costos") {
      //mostrar Costos
      navigate('/costs')
    } else {
      navigate('/informes')
      //mostrar InformesPopup
    }
  }
  
  return (
    <div onClick={() => {handleLayoutClick()}} className='layoutside-svg-wrapper'>
      <div  className='layoutside-svg-container'>
        <img src={svg} className='layoutside-svg'/>

      </div>
        <div className='layoutside-p'>
          <p>{text}</p>

        </div>
    </div>
  )
}

export default LayoutSideOption