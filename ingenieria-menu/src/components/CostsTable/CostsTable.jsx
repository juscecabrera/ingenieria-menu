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
                <th className='noshow'>Suel. Cocina</th>
                <th className='noshow'>Suel. Servicio</th>
                <th className='noshow'>Suel. Admin.</th>
                <th className='noshow'>Alquiler</th>
                <th className='noshow'>Depreciación</th>
                <th className='noshow'>Serv. Básicos</th>
                <th className='noshow'>Publicidad</th>
                <th className='noshow'>Internet</th>
                <th className='noshow'>Otros</th>
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
                <td className='noshow'>{costs.Sueldo_Cocina}</td>
                <td className='noshow'>{costs.Sueldo_Servicio}</td>
                <td className='noshow'>{costs.Sueldo_Administrativos}</td>
                <td className='noshow'>{costs.Alquiler}</td>
                <td className='noshow'>{costs.Depreciacion}</td>
                <td className='noshow'>{costs.Servicios_basicos}</td>
                <td className='noshow'>{costs.Publicidad}</td>
                <td className='noshow'>{costs.Internet}</td>
                <td className='noshow'>{costs.Otros}</td>
                <td>{totalCosts}</td>
                <td>
                    <div className='buttons-wrapper'>
                        <TableDeleteIcon deleteButton={deleteButton} />
                        <TableEditIcon updateButton={updateButton} />
                        <button className='more-button'>Ver</button>

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