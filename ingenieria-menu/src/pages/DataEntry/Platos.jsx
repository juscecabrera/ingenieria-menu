import { useState, useEffect } from 'react'
import DataEntry from '../../components/DataEntry/DataEntry'
import '../../main.css'
import MockData from '../../utils/mockData'
import { urlServer } from '../../../utils/constantURL.js'
import { fetchPlates } from '../../../utils/fetchsData'

function Platos() {
  const [showModal, setShowModal] = useState(false)
  const [platesData, setPlatesData] = useState([])

  useEffect(() => {
    try {
      fetchPlates(urlServer, setPlatesData)
    } catch (error) {
      console.log("Error en front al fetchPlates", error);
    }
  }, [])
  
  const refreshButton = () => {
    fetchPlates(urlServer, setPlatesData)
  }

  const handleAddPlate = () => { 
    setShowModal(!showModal)
   }
  
    return (
    <div className='platos-wrapper'>
        <h2>Platos</h2>

        <button className='platos-add-button' onClick={() => handleAddPlate()}>Agregar plato</button>

        <button className='platos-add-button' onClick={() => refreshButton()}>Actualizar</button>

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
                </tr>
                ))}
            </tbody>
        </table>

        {showModal
        ? <div className='platos-modal-wrapper'>
            <DataEntry setShowModal={setShowModal} refreshButton={refreshButton}/>
            </div>
        : ""
        }

        
       
    </div>
  )
}

export default Platos