import React from 'react'

function FilterPopUp({ setFilter, filter, setFiltersView, applyFilter }) {

    const handleFilterSelection = (e) => { 
        setFilter({...filter, 'category': e.target.value})
    }
    
    const handleApplyButton = () => { 
        setFiltersView(null)
        applyFilter()
    }

    return (
    <div className='filter-popup-wrapper'>
        <p>Seleccione categoría</p>

        <div className='options-wrapper'>
            {['FONDOS', 'ENTRADAS', 'POSTRES', 'BEBIDAS'].map((elem) => {
                return (
                    <button 
                    onClick={(e) => handleFilterSelection(e)} 
                    value={elem} 
                    className={filter.category === elem ? 'options-button active' : 'options-button'}
                    > {elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase()}
                    </button>        
                )
            })}

        </div>

        <div className='filter-popup-line' />

        <div className='filter-apply-button-wrapper'>
            <button className='apply-button' onClick={() => handleApplyButton()}>Aplicar</button>
        </div>

    </div>
  )
}

export default FilterPopUp