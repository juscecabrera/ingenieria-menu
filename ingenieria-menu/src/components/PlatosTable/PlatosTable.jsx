import React from 'react'
import SpinnerSVG from '../../assets/svg/spinnerSVG.svg'

function PlatosTable({ platesData }) {

    const updateButton = () => {
        alert("Actualizar")
    }

    const deleteButton = () => {
        alert("Eliminar")
    }

  return (
    <>  
    <table className='platos-table'>
        <thead>
            <tr>
                <th>Código</th> 
                <th>Mes Plato</th>
                <th>Categoría</th>
                <th>Nombre</th>
                <th>Cantidad Vendida</th>
                <th>Valor Venta</th>
                <th>Precio Venta</th>
                <th>Costo Unitario</th>
                <th>Días en Carta</th>
                <th>Con IVA</th>
                <th>Con Rec</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {platesData?.map((plate, index) => (
            <tr key={index}>
                {/* <td>{plate.Codigo}</td> */}
                <td>{index + 1}</td> {/*Este es el id artificial solamente para aspectos esteticos, NO es el mismo que en las tablas de MySQL */}
                <td>{plate.Mes_plato}</td>
                <td>{plate.Categoria}</td>
                <td>{plate.Nombre}</td>
                <td>{plate.Cantidad_vendida}</td>
                <td>{plate.Valor_Venta}</td>
                <td>{plate.Precio}</td>
                <td>{plate.Costo}</td>
                <td>{plate.Dias_en_carta}</td>
                <td>{plate.Con_IVA ? 'Sí' : 'No'}</td>
                <td>{plate.Con_Rec ? 'Sí' : 'No'}</td>
                <td><button onClick={() => updateButton()}>Actualizar</button></td>
                <td><button onClick={() => deleteButton()}>Eliminar</button></td>
            </tr>
            ))}
        </tbody>
    </table>

     
      
    </>
  )
}

export default PlatosTable