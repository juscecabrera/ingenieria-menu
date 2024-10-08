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

function Filter({ setLoading, fetchPlates, setPlatesData, urlServer }) {
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

    const handleReset = () => { 
        setFilter({
            'month' : null,
            'year' : null,
            'category': null,
            'precio' : null
        })

        setFiltersView(null)
        setLoading(true)
        fetchPlates(urlServer, setPlatesData, setLoading)
    }

    const applyFilter = () => { 
        const mesPlato = filter.month
        const yearPlato = filter.year
        const categoryFilter = filter.category

        setLoading(true)
        fetchPlates(urlServer, setPlatesData, setLoading, mesPlato, yearPlato, categoryFilter)
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
            <p>
                {filter.year
                ? (
                    filter.month ? `${filter.month}-${filter.year}` : filter.year
                )
                : (
                    filter.month ? filter.month : 'Fecha'
                )}
                

            </p>
            <img src={FilterArrow} alt="filter-arrow" />
        </div>
            {filtersView === 'date'
            ? <FechaPopUp setFilter={setFilter} filter={filter} setFiltersView={setFiltersView} applyFilter={applyFilter}/>
            : ''
            }

            



        <div className='filter-div' onClick={() => handleCategoryFilter('category')}>
            <p>
                {filter.category
                ? filter.category
                : 'Categoría'
                }
            </p>
            <img src={FilterArrow} alt="filter-arrow"/>
        </div>
            {filtersView === 'category' 
            ? <FilterPopUp setFilter={setFilter} filter={filter} setFiltersView={setFiltersView} applyFilter={applyFilter}/>  
            : ''
            }
        <div className='filter-div'>
            
            <p>Precio venta</p>

        </div>
        <div className='filter-div' onClick={() => handleReset()}>
            
            <img src={ResetIcon} alt="filter-reset-icon" />
            <p>Resetear filtro</p>

        </div>
    </div>
  )
}

export default Filter