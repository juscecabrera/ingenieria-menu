import { useState } from 'react'
import MockData from '../../utils/mockData.jsx'
import InformesCreation from '../../components/InformesCreation/InformesCreation'

function Informes() {
    const [showModal, setShowModal] = useState(false)

    const handleAddPlate = () => { 
        setShowModal(!showModal)
       }
    
    return (
    <div className='informes-wrapper'>
        <h2>Informes</h2>

        <button className='informes-add-button' onClick={() => handleAddPlate()}>Crear informes</button>

        {/* <p>Aqui mostrar todos los informes actuales de repente</p> */}


        {showModal
        ? <div className='informes-modal-wrapper'>
            {/* <DataEntry setShowModal={setShowModal}/> */}
            <InformesCreation setShowModal={setShowModal} />
            </div>
        : ""
        }

        <p>Esta es data de ejemplo hardcodeada temporal. Aqui ira una tabla con los informes que ingresemos</p> <br></br>
        <MockData />
       
    </div>
  )
}

export default Informes