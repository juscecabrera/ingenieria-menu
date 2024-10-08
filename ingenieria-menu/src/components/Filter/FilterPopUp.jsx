import React from 'react'

function FilterPopUp({ setFilter, filter, setFiltersView, applyFilter }) {

    const handleFilterSelection = (e) => { 
        setFilter({...filter, 'category': e.target.value})
    }
    
    const handleApplyButton = () => { 
        setFiltersView(null)
        applyFilter()
        // alert('triggerear el fetch otra vez')
    }

    return (
    <div className='filter-popup-wrapper'>
        <p>Seleccione categoría</p>

        <div className='options-wrapper'>
            <button 
                onClick={(e) => handleFilterSelection(e)} 
                value='FONDOS' 
                className={filter.category === 'FONDOS' ? 'options-button active' : 'options-button'}
            >Fondos
            </button>
        
            <button
            onClick={(e) => handleFilterSelection(e)}
            value='ENTRADAS'
            className={filter.category === 'ENTRADAS' ? 'options-button active' : 'options-button'}
            >
            Entradas
            </button>

            <button
            onClick={(e) => handleFilterSelection(e)}
            value='POSTRES'
            className={filter.category === 'POSTRES' ? 'options-button active' : 'options-button'}
            >
            Postres
            </button>

            <button
            onClick={(e) => handleFilterSelection(e)}
            value='BEBIDAS'
            className={filter.category === 'BEBIDAS' ? 'options-button active' : 'options-button'}
            >
            Bebidas
            </button>

        </div>

        <div className='filter-popup-line' />

        <div className='filter-apply-button-wrapper'>
            <button className='apply-button' onClick={() => handleApplyButton()}>Aplicar</button>
        </div>

    </div>
  )
}

export default FilterPopUp