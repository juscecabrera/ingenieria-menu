import React from 'react'
import SpinnerSVG from '../../assets/svg/spinnerSVG.svg'
import DeleteIcon from '../../assets/svg/TableDeleteIcon.svg'
import UpdateIcon from '../../assets/svg/TableEditIcon.svg'

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
                <th>ID</th> 
                <th>NOMBRE</th>
                <th>CATEGORÍA</th>
                <th>FECHA</th>
                <th>VENTAS</th>
                <th>VALOR VTA.</th>
                <th>PRECIO VTA.</th>
                <th>COSTO</th>
                <th>DÍAS</th>
                {/* <th>Con IVA</th>
                <th>Con Rec</th> */}
                <th></th>
            </tr>
        </thead>
        <tbody>
            {platesData?.map((plate, index) => (
            <tr key={index}>
                {/* <td>{plate.Codigo}</td> */}
                <td>{index + 1}</td> {/*Este es el id artificial solamente para aspectos esteticos, NO es el mismo que en las tablas de MySQL */}
                <td>{plate.Nombre}</td>
                <td>{plate.Categoria}</td>
                <td>{plate.Mes_plato}</td>
                <td>{plate.Cantidad_vendida}</td>
                <td>{plate.Valor_Venta}</td>
                <td>{plate.Precio}</td>
                <td>{plate.Costo}</td>
                <td>{plate.Dias_en_carta}</td>
                {/* <td>{plate.Con_IVA ? 'Sí' : 'No'}</td>
                <td>{plate.Con_Rec ? 'Sí' : 'No'}</td> */}
                <td>
                    <div className='buttons-wrapper'>
                        <img onClick={() => deleteButton()} src={DeleteIcon} alt="delete-icon" className='delete-button'/>
                        
                        <img onClick={() => updateButton()} src={UpdateIcon} alt="update-icon" className='update-button'/>

                    </div>
                </td>
            </tr>
            ))}
        </tbody>
    </table>

    </>
  )
}

export default PlatosTable