import { useState } from 'react'
import DataEntry from '../../components/DataEntry/DataEntry'
import '../../main.css'
import MockData from '../../utils/mockData'

function Platos() {
  const [showModal, setShowModal] = useState(false)


  const handleAddPlate = () => { 
    setShowModal(!showModal)
   }
  
    return (
    <div className='platos-wrapper'>
        <h2>Platos</h2>

        <button className='platos-add-button' onClick={() => handleAddPlate()}>Agregar plato</button>

        {/* <p>Aqui mostrar todos los platos actuales de repente</p> */}


        {showModal
        ? <div className='platos-modal-wrapper'>
            <DataEntry setShowModal={setShowModal}/>
            </div>
        : ""
        }

        <p>Esta es data de ejemplo hardcodeada temporal. Aqui ira una tabla con los platos que ingresemos</p> <br></br>
        <MockData />
       
    </div>
  )
}

export default Platos