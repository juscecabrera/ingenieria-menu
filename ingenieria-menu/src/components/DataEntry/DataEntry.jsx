import React, { useState } from 'react'
import '../../main.css'
import { createPlate } from '../../../utils/fetchsData'
import { urlServer } from '../../../utils/constantURL'

/**
 * Falta agregar el Tiempo de preparacion
 */


function DataEntry({ setShowModal, refreshButton }) {
    const [plateData, setPlateData] = useState({})  

    const handleAcceptButton = () => {
        try {
            createPlate(urlServer, plateData)
            setTimeout(() => {
                refreshButton()
            }, 200);
        } catch (error) {
            console.log("Error en front al fetchPlates", error);
        }
    }


    const closeModal = () => { 
        setShowModal(false)
        refreshButton()
    }


    const handleChange = (e) => { 
        const value = e.target.value
        const name = e.target.name

        //aqui validar campos de entrada o usar una funcion externa validateFields e ir por cada campo



        switch (name) {
            case "plate-mes":
                setPlateData({ ...plateData, "Mes_plato": value });
                break;
            case "plate-category":
                setPlateData({ ...plateData, "Categoria_plato": value });
                break;
            case "plate-name":
                setPlateData({ ...plateData, "Nombre_plato": value });
                break;
            case "plate-salesnumber":
                setPlateData({ ...plateData, "Cantidad_vendida_plato": value });
                break;
            case "plate-price":
                setPlateData({ ...plateData, "Precio_plato": value });
                break;
            case "plate-iva":
                setPlateData({ ...plateData, "IVA_plato": value }); // bool
                break;
            case "plate-recargo":
                setPlateData({ ...plateData, "Recargo_plato": value }); // bool
                break;
            case "plate-cost":
                setPlateData({ ...plateData, "Costo_plato": value });
                break;
            case "plate-valorvta":
                setPlateData({ ...plateData, "Valor_vta_plato": value });
                break;
            case "plate-days":
                setPlateData({ ...plateData, "Dias_plato": value });
                break;
            default:
                break;
        }        
    }

  return (
    <div className='dataentry-wrapper'>
        <h1>Agregar registro</h1>
        <div className='dataentry-text-row-1'>Cod. Int.</div>
        <div className='dataentry-input-row-1-wrapper'>
            {/* No deja ingresar data no se porque pero esta bien porque no se deberia poder cambiar */}
            <input className='dataentry-input-row-1' type="number" name='plate-id' disabled /> 
        </div>

        <div className='dataentry-text-row-2-mes'>Mes</div>
        <div className='dataentry-input-row-2-mes-wrapper'>
            <select className='dataentry-input-row-2-mes' name="plate-mes" onChange={(e) => handleChange(e)}>
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

        </div>

        <div className='dataentry-text-row-2-cat'>Categoría</div>
        <div className='dataentry-input-row-2-cat-wrapper'>
            <select className='dataentry-input-row-2-cat' name="plate-category" onChange={(e) => handleChange(e)}>
                <option>Seleccione una opción</option>
                <option value={"ENTRADAS"}>ENTRADAS</option>
                <option value={"FONDOS"}>FONDOS</option>
                <option value={"POSTRES"}>POSTRES</option>
                <option value={"BEBIDAS"}>BEBIDAS</option>
            </select>
            
        </div>

        <div className='dataentry-text-row-2-button-wrapper'>
            <button className='dataentry-text-row-2-button'>Nueva Categoría</button>
            {/* Al agregarla, tiene que agregarlo a los filtros, al select de arriba para seleccionar opcion, al crear informes */}
            {/* En DataEntry.jsx line 109, en FilterPopUp.jsx line 29-32, en InformesCreation.jsx line 70 */}
        </div>

        <div className='dataentry-text-row-3'>Plato</div>
        <div className='dataentry-input-row-3-wrapper'>
            <select className='dataentry-input-row-3' name="plate-name" onChange={(e) => handleChange(e)}>
                <option>Seleccione un plato</option>
                <option value={"Plato 1"}>Plato 1</option>
                <option value={"Plato 2"}>Plato 2</option>
                <option value={"Plato 3"}>Plato 3</option>
                <option value={"Plato 4"}>Plato 4</option>
                <option value={"Plato 5"}>Plato 5</option>
            </select>

        </div>

        <div className='dataentry-text-row-3-button-wrapper'>
            <button className='dataentry-text-row-3-button'>Nuevo Plato</button>
        </div>


        <div className='dataentry-text-row-4'>Cant. Vendida</div>
        <div className='dataentry-input-row-4-wrapper'>
            <input 
                className='dataentry-input-row-4'
                type="number" 
                name='plate-salesnumber'
                onChange={(e) => {handleChange(e)}} />
        </div>


        <div className='dataentry-text-row-5'>Precio de Venta</div>
        <div className='dataentry-input-row-5-wrapper'>
            <input 
                className='dataentry-input-row-5' 
                type="number"
                name='plate-price'
                onChange={(e) => {handleChange(e)}} />
        </div>

        {/* Estoy pensando sacar estos dos porque asumimos que siempre esta incluido */}
        {/* <div className='dataentry-text-row-5-iva'>
            IVA (IGV)
            <input 
                className='dataentry-input-row-5-iva' 
                type="checkbox" 
                name='plate-iva'
                onChange={(e) => {handleChange(e)}}
            />
        </div>
        
        <div className='dataentry-div-row-5'>
            <p className='dataentry-text-row-5-rec'>Rec. al consumo</p>
            <input 
                className='dataentry-input-row-5-rec' 
                type="checkbox" 
                name='plate-recargo'
                onChange={(e) => {handleChange(e)}}    
            />
        </div> */}


        <div className='dataentry-text-row-6'>Costo Variable</div>
        <div className='dataentry-input-row-6-wrapper'>
            <input 
                className='dataentry-input-row-6' 
                type="number" 
                name='plate-cost'
                onChange={(e) => {handleChange(e)}}    
            />
        </div>

        {/* <div className='dataentry-text-row-6-valor'>
            Valor Vta.(%)
            
            <input 
                className='dataentry-input-row-6-valor' 
                type="number" 
                name='plate-valorvta'
                onChange={(e) => {handleChange(e)}}    
            />
        </div> */}
        
        {/* <div className='dataentry-input-row-6-valor-wrapper'>
        </div> */}

        
        <div className='dataentry-text-row-7'>
            Dias en carta
            <input 
                className='dataentry-input-row-7' 
                type="number" 
                name='plate-days'
                onChange={(e) => {handleChange(e)}}    
            />
        </div>
        
        
        <div className='dataentry-accept-button-wrapper'>
            <button className='dataentry-accept-button' onClick={() => {handleAcceptButton()}}>Agregar</button>
        </div>

        <div className='dataentry-cancel-button-wrapper'>
            <button className='dataentry-cancel-button' onClick={() => {closeModal()}}>Cancelar</button>
        </div>

        <div className='dataentry-exit-button-wrapper'>
            <button className='dataentry-exit-button' onClick={() => {closeModal()}}>Salir</button>
        </div>

    </div>
  )
}

export default DataEntry