import React, { useState } from 'react'
import CostsEntry from '../../components/CostsEntry/CostsEntry.jsx'
import MockData from '../../utils/mockData.jsx'


function Costs() {
    const [showModal, setShowModal] = useState(false)   

    const handleAddCosts = () => { 
        setShowModal(!showModal)
    }
    
  
  
    return (
    <div className='costs-wrapper'>
        <h2>Costos</h2>

        <button className='costs-add-button' onClick={() => handleAddCosts()}>Registrar costos</button>

        {/* <p>Aqui mostrar todos los costos actuales de repente</p> */}


        {showModal
        ? <div className='costs-modal-wrapper'>
            <CostsEntry setShowModal={setShowModal}/>
            </div>
        : ""
        }

    <p>Esta es data de ejemplo hardcodeada temporal. Aqui ira una tabla con los costos que ingresemos</p> <br></br>
    <MockData />
    </div>
  )
}

export default Costs