import { useState } from 'react'
import FilterIcon from '../../assets/svg/FilterIcon.svg'
import FilterArrow from '../../assets/svg/FilterArrow.svg'
import ResetIcon from '../../assets/svg/ResetIcon.svg'
import FilterPopUp from './FilterPopUp'


/*
Me falta agregar toda la logica en el front y en el back de los filtros
Me falta agregar los filtros como tal 
*/ 

function Filter() {
    const [filter, setFilter] = useState({
        'date' : null,
        'category': null,
        'precio' : null
    })
    const [filtersView, setFiltersView] = useState({
        'date' : null,
        'category' : null,
        'precio' : null
    })

    const handleCategoryFilter = () => { 
        setFiltersView({...filtersView, 'category' : !filtersView.category})
    }

  return (
    <div className='filter-wrapper'>
        <div className='filter-div'>
            <img src={FilterIcon} alt="filter-icon" />
        </div>

        <div className='filter-div'>
            <p>
                Filtrar por
            </p>
        </div>

        <div className='filter-div'>
            <p>Fecha</p>
            <img src={FilterArrow} alt="filter-arrow" />
        </div>
        
        <div className='filter-div'>
            <p>Categoría</p>
            <img src={FilterArrow} alt="filter-arrow" onClick={() => handleCategoryFilter()}/>
            {filtersView.category 
            ? <FilterPopUp setFilter={setFilter} filter={filter} setFiltersView={setFiltersView}/>  
            : ''
            }
        </div>
        <div className='filter-div'>
            
            <p>Precio venta</p>

        </div>
        <div className='filter-div'>
            
            <img src={ResetIcon} alt="filter-reset-icon" />
            <p>Resetear filtro</p>

        </div>
    </div>
  )
}

export default Filter