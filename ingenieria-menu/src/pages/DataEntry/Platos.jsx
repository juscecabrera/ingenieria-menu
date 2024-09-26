import React from 'react'

function Platos() {
  
  const handleAddPlate = () => { 
    alert("agregar plato")
   }
  
    return (
    <div className='platos-wrapper'>
        <h2>Platos</h2>

        <button className='platos-add-button' onClick={() => handleAddPlate()}>Agregar plato</button>

        {/* <p>Aqui mostrar todos los platos actuales de repente</p> */}

        <table>
            <thead>
                <th>Nombre</th>
                <th>Categoria</th>
                <th>Cantidad Vendida</th>
            </thead>
            <tbody>
                <tr>1</tr>
                <tr>1</tr>
                <tr>1</tr>
            </tbody>
        </table>
    </div>
  )
}

export default Platos