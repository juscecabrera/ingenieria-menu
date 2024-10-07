import React from 'react'
import FilterIcon from '../../assets/svg/FilterIcon.svg'
import FilterArrow from '../../assets/svg/FilterArrow.svg'
import ResetIcon from '../../assets/svg/ResetIcon.svg'


function Filter() {
  return (
    <div className='filter-wrapper'>
        <div>
            <img src={FilterIcon} alt="filter-icon" />
        </div>

        <div>
            <p>
                Filtrar por
            </p>
        </div>

        <div>
            <p>Fecha</p>
            <img src={FilterArrow} alt="filter-arrow" />

        </div>
        
        <div>
            
            <p>Categoría</p>
            <img src={FilterArrow} alt="filter-arrow" />

        </div>
        <div>
            
            <p>Precio venta</p>

        </div>
        <div>
            
            <img src={ResetIcon} alt="filter-reset-icon" />
            <p>Resetear filtro</p>

        </div>
    </div>
  )
}

export default Filter