import React, { useState, useEffect } from 'react'
import CostsEntry from '../../components/CostsEntry/CostsEntry.jsx'
import { fetchCosts } from '../../../utils/fetchsData.js'
import { urlServer } from '../../../utils/constantURL.js'
import CostsTable from '../../components/CostsTable/CostsTable.jsx'
import SpinnerSVG from '../../assets/svg/spinnerSVG.svg'


function Costs() {
    const [showModal, setShowModal] = useState(false)   
    const [costsData, setCostsData] = useState([])
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
        try {
            fetchCosts(urlServer, setCostsData, setLoading)    
        } catch (error) {
            console.log("Error en front al fetchCosts", error);   
        }
    }, [])


    const refreshButton = () => {
        setLoading(true)
        fetchCosts(urlServer, setCostsData, setLoading)
    }

    const handleAddCosts = () => { 
        setShowModal(!showModal)
    }    
  
    return (
    <div className='costs-wrapper'>
        <h2>Costos</h2>

        <button className='costs-add-button' onClick={() => handleAddCosts()}>Registrar costos</button>

        <button className='costs-add-button' onClick={() => refreshButton()}>Actualizar</button>

        <div className='costs-table-wrapper'>
            {loading 
            ?  <img src={SpinnerSVG} className='users-spinner' />
            : <CostsTable costsData={costsData}/>}

        </div>

        {showModal
        ? <div className='costs-modal-wrapper'>
            <CostsEntry setShowModal={setShowModal} refreshButton={refreshButton}/>
            </div>
        : ""
        }

        
    </div>
  )
}

export default Costs