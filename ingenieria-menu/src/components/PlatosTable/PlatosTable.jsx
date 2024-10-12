import React from 'react'
import SpinnerSVG from '../../assets/svg/spinnerSVG.svg'
import DeleteIcon from '../../assets/svg/TableDeleteIcon.svg'
import DeleteIconRed from '../../assets/svg/TableDeleteIconRed.svg'
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
                <th className='platos-table-th'>ID</th> 
                <th className='platos-table-th'>NOMBRE</th>
                <th className='platos-table-th'>CATEGORÍA</th>
                <th className='platos-table-th'>FECHA</th>
                <th className='platos-table-th'>VENTAS</th>
                <th className='platos-table-th noshow'>VALOR VTA.</th>
                <th className='platos-table-th noshow'>PRECIO VTA.</th>
                <th className='platos-table-th noshow'>COSTO</th>
                <th className='platos-table-th noshow'>DÍAS</th>
                {/* <th>Con IVA</th>
                <th className='platos-table-th'>Con Rec</th> */}
                <th className='platos-table-th'></th>
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
                <td className='noshow'>{plate.Valor_Venta}</td>
                <td className='noshow'>{plate.Precio}</td>
                <td className='noshow'>{plate.Costo}</td>
                <td className='noshow'>{plate.Dias_en_carta}</td>
                {/* <td>{plate.Con_IVA ? 'Sí' : 'No'}</td>
                <td>{plate.Con_Rec ? 'Sí' : 'No'}</td> */}
                <td>
                    <div className='buttons-wrapper'>
                        <svg 
                            onClick={() => deleteButton()}
                            className='delete-button noshow'
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 9.00004L9 15M15 15L9 9.00004M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>


                        <svg 
                            onClick={() => updateButton()}
                            className='update-button noshow'
                            width="72" 
                            height="72" 
                            viewBox="0 0 72 72" 
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="edit-01">
                                <path id="Icon" d="M45 19.5L52.5 27M12 60V52.5L50.25 14.25C52.3211 12.1789 55.6789 12.1789 57.75 14.25V14.25C59.8211 16.3211 59.8211 19.6789 57.75 21.75L19.5 60H12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>

                        <button className='more-button'>Ver</button>

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