import React from 'react'

function FilterPopUp({ setFilter, filter, setFiltersView, filtersView }) {

    const handleFilterSelection = (e) => { 
        setFilter({...filter, 'category': e.target.value})
    }
    
    const handleApplyButton = () => { 
        setFiltersView({...filtersView, 'category' : false})
        alert('triggerear el fetch otra vez')
    }

    return (
    <div className='filter-popup-wrapper'>
        <p>Seleccione categoría</p>

        <div className='options-wrapper'>
            <button 
                onClick={(e) => handleFilterSelection(e)} 
                value={'Fondos'} 
                className={filter.category === 'Fondos' ? 'options-button active' : 'options-button'}
            >Fondos
            </button>
        
            <button
            onClick={(e) => handleFilterSelection(e)}
            value='Entradas'
            className={filter.category === 'Entradas' ? 'options-button active' : 'options-button'}
            >
            Entradas
            </button>

            <button
            onClick={(e) => handleFilterSelection(e)}
            value='Postres'
            className={filter.category === 'Postres' ? 'options-button active' : 'options-button'}
            >
            Postres
            </button>

            <button
            onClick={(e) => handleFilterSelection(e)}
            value='Bebidas'
            className={filter.category === 'Bebidas' ? 'options-button active' : 'options-button'}
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