import React from 'react'

function InformesCreation({ setShowModal }) {
    
    const closeModal = () => { 
        setShowModal(false)
     }
    return (
    <div className='informescreation-wrapper'>

        <div className='informescreation-cancel-button-wrapper'>
            <button className='informescreation-cancel-button' onClick={() => {closeModal()}}>Cancelar</button>
        </div>
    </div>
  )
}

export default InformesCreation