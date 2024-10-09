import React from 'react'
import TableDeleteIcon from '../../assets/svg/TableDeleteIcon.jsx'
import TableEditIcon from '../../assets/svg/TableEditIcon.jsx'

function CostsTable({ costsData }) {
    const deleteButton = () => { 
        alert('pum')
    }

    const updateButton = () => { 
        alert('pam')
    }
    
    return (
    <>
        <table className='costs-table'>
        <thead>
            <tr>
                <th>ID</th> 
                <th>Mes</th> 
                <th>Suel. Cocina</th>
                <th>Suel. Servicio</th>
                <th>Suel. Admin.</th>
                <th>Alquiler</th>
                <th>Depreciación</th>
                <th>Serv. Básicos</th>
                <th>Publicidad</th>
                <th>Internet</th>
                <th>Otros</th>
                <th>Total</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {costsData?.map((costs, index) => {

            const totalCosts = (
                (Number(costs.Sueldo_Cocina) || 0) +
                (Number(costs.Sueldo_Servicio) || 0) +
                (Number(costs.Sueldo_Administrativos) || 0) +
                (Number(costs.Alquiler) || 0) +
                (Number(costs.Depreciacion) || 0) +
                (Number(costs.Servicios_basicos) || 0) +
                (Number(costs.Publicidad) || 0) +
                (Number(costs.Internet) || 0) +
                (Number(costs.Otros) || 0)
            ).toFixed(2)

            //Lo mejor seria crear una nueva columna con los costos totales

            return (
            <tr key={index}>
                {/* <td>{costs.Codigo}</td> */}
                <td>{index + 1}</td> {/*Este es el id artificial solamente para aspectos esteticos, NO es el mismo que en las tablas de MySQL */}
                <td>{costs.Mes}</td>
                <td>{costs.Sueldo_Cocina}</td>
                <td>{costs.Sueldo_Servicio}</td>
                <td>{costs.Sueldo_Administrativos}</td>
                <td>{costs.Alquiler}</td>
                <td>{costs.Depreciacion}</td>
                <td>{costs.Servicios_basicos}</td>
                <td>{costs.Publicidad}</td>
                <td>{costs.Internet}</td>
                <td>{costs.Otros}</td>
                <td>{totalCosts}</td>
                <td>
                    <div className='buttons-wrapper'>
                        <TableDeleteIcon deleteButton={deleteButton} />
                        <TableEditIcon updateButton={updateButton} />
                    </div>
                </td>
            </tr>
        )})}
        </tbody>
    </table>
    </>
  )
}

export default CostsTable