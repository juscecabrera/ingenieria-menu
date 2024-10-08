import React from 'react'

function FechaPopUp({ setFilter, filter, setFiltersView }) {
    const handleFilterSelection = (e, type) => {
        if (type === 'year') {
            setFilter({...filter, 'year': e.target.value})
        } else {
            setFilter({...filter, 'month': e.target.value})
        }
        
    }
    
    const handleApplyButton = () => { 
        setFiltersView(null)
        alert('triggerear el fetch otra vez')
    }
  
  
    return (
    <div className='fecha-popup-wrapper'>
        <p>Seleccione fecha</p>

        <div className='fecha-popup-cols-wrapper'>
    
            {/* Columna de años */}
            <div className='fecha-popup-col1'>
                {['2021', '2022', '2023', '2024'].map((year) => (
                    <button
                        key={year}
                        onClick={(e) => handleFilterSelection(e, 'year')} 
                        value={year}
                        className={filter.year === year ? 'active' : ''}
                    >
                        {year}
                    </button>
                ))}
            </div>

            <div className='fecha-popup-vline'></div>

            {/* Columna de meses 1 */}
            <div className='fecha-popup-col3'>
                {['Ene', 'Feb', 'Mar', 'Abr'].map((month) => (
                    <button
                        key={month}
                        onClick={(e) => handleFilterSelection(e, 'month')} 
                        value={month}
                        className={filter.month === month ? 'active' : ''}
                    >
                        {month}
                    </button>
                ))}
            </div>

            {/* Columna de meses 2 */}
            <div className='fecha-popup-col4'>
                {['May', 'Jun', 'Jul', 'Ago'].map((month) => (
                    <button
                        key={month}
                        onClick={(e) => handleFilterSelection(e, 'month')} 
                        value={month}
                        className={filter.month === month ? 'active' : ''}
                    >
                        {month}
                    </button>
                ))}
            </div>

            {/* Columna de meses 3 */}
            <div className='fecha-popup-col5'>
                {['Sep', 'Oct', 'Nov', 'Dic'].map((month) => (
                    <button
                        key={month}
                        onClick={(e) => handleFilterSelection(e, 'month')} 
                        value={month}
                        className={filter.month === month ? 'active' : ''}
                    >
                        {month}
                    </button>
                ))}
            </div>

        </div>



        <div className='fecha-apply-button-wrapper'>
            <button className='apply-button' onClick={() => handleApplyButton()}>Aplicar</button>
        </div>

    </div>
  )
}

export default FechaPopUp