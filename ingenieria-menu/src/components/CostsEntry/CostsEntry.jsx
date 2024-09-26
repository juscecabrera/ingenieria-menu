import React from 'react'

function CostsEntry() {

    //Al agregar nuevos conceptos, puedo hacer un push y se va a mover todo solo
    const costsentryTableConcepts = [
        'Sueldo Personal de Cocina',
        'Sueldo Personal de Servicio',
        'Sueldos Administrativos',
        'Alquiler (arriendo)',
        'Depreciación',
        'Servicios básicos (luz, agua, teléfono)',
        'Publicidad',
        'Internet',
        'Otros'
    ]


  return (
    <div className='costsentry-wrapper'>
        <h1>Registro de Costos Fijos</h1>
        
        <div className='costsentry-button-wrapper'>
            <button>Nuevo concepto</button>
        </div>

        <div className='costsentry-table-wrapper'> 

            {costsentryTableConcepts.map((elem) => {
                return (
                    <>
                        <div className='costsentry-table-p'>{elem}</div>
                        <div className='costsentry-table-input'><input type="number" /></div>
                    </>
                )
            })}
        </div>

        <div className='costsentry-accept-button-wrapper'>
            {/**Al darle, se tiene que salir automaticamente */}
            <button>Aceptar</button>
        </div> 


        <div className='costsentry-cancel-button-wrapper'>
            <button>Cancelar</button>
        </div>

    </div>
  )
}

export default CostsEntry