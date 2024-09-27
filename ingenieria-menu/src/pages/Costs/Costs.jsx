import React, { useState, useEffect } from 'react'
import CostsEntry from '../../components/CostsEntry/CostsEntry.jsx'
import MockData from '../../utils/mockData.jsx'
import { fetchCosts } from '../../../utils/fetchsData.js'
import { urlServer } from '../../../utils/constantURL.js'
import CostsTable from '../../components/CostsTable/CostsTable.jsx'


function Costs() {
    const [showModal, setShowModal] = useState(false)   
    const [costsData, setCostsData] = useState([])
    const [loading, setLoading] = useState(true)
  

    const handleAddCosts = () => { 
        setShowModal(!showModal)
    }
    
    const refreshButton = () => {
        // setLoading(true)
        fetchCosts(urlServer, setCostsData, setLoading)
    }

    useEffect(() => {
        try {
            fetchCosts(urlServer, setCostsData, setLoading)    
        } catch (error) {
            console.log("Error en front al fetchCosts", error);   
        }
    }, [])
    
  
    return (
    <div className='costs-wrapper'>
        <h2>Costos</h2>

        <button className='costs-add-button' onClick={() => handleAddCosts()}>Registrar costos</button>

        <button className='costs-add-button' onClick={() => refreshButton()}>Actualizar</button>


        {loading 
        ? "" 
        : <CostsTable costsData={costsData}/>}

        {showModal
        ? <div className='costs-modal-wrapper'>
            <CostsEntry setShowModal={setShowModal}/>
            </div>
        : ""
        }

        
    </div>
  )
}

export default Costs