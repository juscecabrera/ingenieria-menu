import { useState } from 'react'
import FilterIcon from '../../assets/svg/FilterIcon.svg'
import FilterArrow from '../../assets/svg/FilterArrow.svg'
import ResetIcon from '../../assets/svg/ResetIcon.svg'
import FilterPopUp from './FilterPopUp'
import FechaPopUp from '../FechaPopUp/FechaPopUp'


/*
Me falta agregar toda la logica en el front y en el back de los filtros
Me falta agregar los filtros como tal 
*/ 

function Filter() {
    const [filter, setFilter] = useState({
        'month' : null,
        'year' : null,
        'category': null,
        'precio' : null
    })
    const [filtersView, setFiltersView] = useState(null)

    const handleCategoryFilter = (name) => { 
        if (filtersView === name) {
            setFiltersView(null)
        } else {
            setFiltersView(name)
        }
    }

  return (
    <div className='filter-wrapper'>
        <div className='filter-div'>
            <img src={FilterIcon} alt="filter-icon" />
        </div>

        {/* <div className='filter-div'>
            <p>
                Filtrar por
            </p>
        </div> */}

        <div className='filter-div' onClick={() => handleCategoryFilter('date')}>
            <p>Fecha</p>
            <img src={FilterArrow} alt="filter-arrow" />
        </div>
            {filtersView === 'date'
            ? <FechaPopUp setFilter={setFilter} filter={filter} setFiltersView={setFiltersView} />
            : ""}

            



        <div className='filter-div' onClick={() => handleCategoryFilter('category')}>
            <p>Categoría</p>
            <img src={FilterArrow} alt="filter-arrow"/>
        </div>
            {filtersView === 'category' 
            ? <FilterPopUp setFilter={setFilter} filter={filter} setFiltersView={setFiltersView} />  
            : ''
            }
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