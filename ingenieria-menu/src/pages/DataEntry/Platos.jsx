import { useState, useEffect } from 'react'
import DataEntry from '../../components/DataEntry/DataEntry'
import '../../main.css'
import MockData from '../../utils/mockData'
import { urlServer } from '../../../utils/constantURL.js'
import { fetchPlates } from '../../../utils/fetchsData'

function Platos() {
  const [showModal, setShowModal] = useState(false)
  const [dataEx, setDataEx] = useState({})

  useEffect(() => {
    try {
      fetchPlates(urlServer, setDataEx)
    } catch (error) {
      console.log("Error en front al fetchPlates", error);
    }
  }, [])
  

  const handleAddPlate = () => { 
    setShowModal(!showModal)
   }
  
    return (
    <div className='platos-wrapper'>
        <h2>Platos</h2>

        <button className='platos-add-button' onClick={() => handleAddPlate()}>Agregar plato</button>

        {/* <p>Aqui mostrar todos los platos actuales de repente</p> */}
        <p>Esta es data de ejemplo hardcodeada temporal. Aqui ira una tabla con los platos que ingresemos</p> <br></br>
        {/* <MockData /> */}

        {dataEx ? JSON.stringify(dataEx) : ''}

        {showModal
        ? <div className='platos-modal-wrapper'>
            <DataEntry setShowModal={setShowModal}/>
            </div>
        : ""
        }

        
       
    </div>
  )
}

export default Platos