import { useState } from 'react'
import { fetchCreateInforms } from '../../../utils/fetchsData'
import { urlServer } from '../../../utils/constantURL'

function InformesCreation({ setShowModal, setData }) {
    const [informsData, setInformsData] = useState({})

    const handleChange = (e) => { 
        const value = e.target.value
        const name = e.target.name

        switch(name) {
            case "informes-mes":
                setInformsData({...informsData, "Informes_Mes" : value})
                break;
            case "informes-category":
                setInformsData({...informsData, "Informes_Categoria" : value})
                break;
            default:
                break;
        }
    }


    
    const createInforms = () => {
        try {
            fetchCreateInforms(urlServer, informsData, setData)
        } catch (error) {
            console.log("Error en front al createInforms", error);   
        }
    }
    
    const closeModal = () => { 
        setShowModal(false)
    }

    return (
    <div className='informescreation-wrapper'>
        <h2>Análisis</h2>


        <div className='informes-options-wrapper'>
            <div className='informes-mes-wrapper'>
                Selecciona el mes a analizar 
            </div>
            <select name="informes-mes" onChange={(e) => handleChange(e)}>
                <option value={""}>Mes</option>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
                <option value={"5"}>5</option>
                <option value={"6"}>6</option>
                <option value={"7"}>7</option>
                <option value={"8"}>8</option>
                <option value={"9"}>9</option>
                <option value={"10"}>10</option>
                <option value={"11"}>11</option>
                <option value={"12"}>12</option>
            </select>

            <div className='informes-category-wrapper'>
                Selecciona categoría de plato
            </div>

            <select className='informes-category' name="informes-category" onChange={(e) => handleChange(e)} >
                <option>Seleccione una opcion</option>
                <option value={"ENTRADAS"}>ENTRADAS</option>
                <option value={"FONDOS"}>FONDOS</option>
                <option value={"POSTRES"}>POSTRES</option>
                <option value={"BEBIDAS"}>BEBIDAS</option>
            </select>


        </div>
        


        <div className='informescreation-accept-button-wrapper' >
            <button className='informescreation-accept-button' onClick={() => {createInforms()}}>Aceptar</button>
        </div>



        <div className='informescreation-cancel-button-wrapper'>
            <button className='informescreation-cancel-button' onClick={() => {closeModal()}}>Cancelar</button>
        </div>
    </div>
  )
}

export default InformesCreation