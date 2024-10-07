import { useState, useEffect } from 'react'
import DataEntry from '../../components/DataEntry/DataEntry'
import '../../main.css'
import { urlServer } from '../../../utils/constantURL.js'
import { fetchPlates } from '../../../utils/fetchsData'
import SpinnerSVG from '../../assets/svg/spinnerSVG.svg'
import PlatosTable from '../../components/PlatosTable/PlatosTable.jsx'
import Filter from '../../components/Filter/Filter.jsx'
import TableArrowButton from '../../assets/svg/TableArrowButton.svg' 

function Platos() {
  const [showModal, setShowModal] = useState(false)
  const [platesData, setPlatesData] = useState([])
  const [loading, setLoading] = useState(true)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  

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

   // Calcular los platos a mostrar en la página actual
  const indexOfLastPlate = currentPage * itemsPerPage
  const indexOfFirstPlate = indexOfLastPlate - itemsPerPage
  const currentPlates = platesData.slice(indexOfFirstPlate, indexOfLastPlate)

  // Funciones para manejar la paginación
  const totalPages = Math.ceil(platesData.length / itemsPerPage)

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  
    return (
    <div className='platos-wrapper'>
        <h2>Platos</h2>

        <Filter />

        <button className='platos-add-button' onClick={() => handleAddPlate()}>Agregar plato</button>

        <button className='platos-add-button' onClick={() => refreshButton()}>Actualizar</button>
        
        <div className='platos-table-wrapper'>
        {loading 
        ? <img src={SpinnerSVG} className='users-spinner' />
        :  <PlatosTable platesData={currentPlates} />
        }
        
        </div>
        

      <div className='platos-options-wrapper'>
        <p>Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, platesData.length)} of {platesData.length}</p>

        <div className='platos-options-buttons-wrapper'>
          <button className='prev-button' onClick={handlePrevPage} disabled={currentPage === 1}>
              <img src={TableArrowButton} alt="table-arrow-button" className='prev-button-arrow' />
          </button>

          <button className='next-button' onClick={handleNextPage} disabled={currentPage === totalPages}>
            <img src={TableArrowButton} alt="table-arrow-button" />

          </button>

        </div>

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