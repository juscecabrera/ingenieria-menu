import { useState } from 'react'
import InformesCreation from '../../components/InformesCreation/InformesCreation'
import InformesResults from '../../components/InformesResults/InformesResults'

function Informes() {
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState(null)

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
            <InformesCreation setShowModal={setShowModal} setData={setData} />
            </div>
        : ""
        }

        {data ? <InformesResults data={data}/> : ""}
       
    </div>
  )
}

export default Informes