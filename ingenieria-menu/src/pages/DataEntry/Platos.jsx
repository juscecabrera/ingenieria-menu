import { useState, useEffect } from 'react'
import DataEntry from '../../components/DataEntry/DataEntry'
import '../../main.css'
// import MockData from '../../utils/mockData.jsx'
import { urlServer } from '../../../utils/constantURL.js'
import { fetchPlates } from '../../../utils/fetchsData'
import SpinnerSVG from '../../assets/svg/spinnerSVG.svg'
import PlatosTable from '../../components/PlatosTable/PlatosTable.jsx'

function Platos() {
  const [showModal, setShowModal] = useState(false)
  const [platesData, setPlatesData] = useState([])
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    try {
      fetchPlates(urlServer, setPlatesData, setLoading)
    } catch (error) {
      console.log("Error en front al fetchPlates", error);
    }
  }, [])
  
  const refreshButton = () => {
    setLoading(true)
    fetchPlates(urlServer, setPlatesData, setLoading)
  }

  const handleAddPlate = () => { 
    setShowModal(!showModal)
   }
  
    return (
    <div className='platos-wrapper'>
        <h2>Platos</h2>

        <button className='platos-add-button' onClick={() => handleAddPlate()}>Agregar plato</button>

        <button className='platos-add-button' onClick={() => refreshButton()}>Actualizar</button>
        
        <div className='platos-table-wrapper'>
        {loading 
        ? <img src={SpinnerSVG} className='users-spinner' />
        :  <PlatosTable platesData={platesData} />
        }
        
        </div>
        

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