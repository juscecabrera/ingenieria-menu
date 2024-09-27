import { useState } from 'react'
import { createCosts } from '../../../utils/fetchsData'
import { urlServer } from '../../../utils/constantURL'

function CostsEntry({ setShowModal, refreshButton }) {
    const [costsData, setCostsData] = useState({})

    //Al agregar nuevos conceptos, puedo hacer un push y se va a mover todo solo
    const costsentryTableConcepts = {
        'Sueldo Personal de Cocina': 'Sueldo_Cocina',
        'Sueldo Personal de Servicio': 'Sueldo_Servicio',
        'Sueldos Administrativos': 'Sueldo_Administrativos',
        'Alquiler (arriendo)': 'Alquiler',
        'Depreciación': 'Depreciacion',
        'Servicios básicos (luz, agua, teléfono)': 'Servicios_basicos',
        'Publicidad': 'Publicidad',
        'Internet': 'Internet',
        'Otros': 'Otros'
    }

    const handleAddCosts = () => { 
        try {
            createCosts(urlServer, costsData)
            setTimeout(() => {
                refreshButton()
            }, 400);
        } catch (error) {
            console.log("Error en front al handleAddCosts", error);
        }
    }

    const closeModal = () => {
        setShowModal(false)
        refreshButton()
    }

    const handleChange = (e) => {
        const value  = e.target.value
        const name = e.target.name

       //aqui validar campos de entrada o usar una funcion externa validateFields e ir por cada campo



       switch (name) {
        case "Mes":
            setCostsData({ ...costsData, "Mes": value });
            break;
        case "Sueldo_Cocina":
            setCostsData({ ...costsData, "Sueldo_Cocina": value });
            break;
        case "Sueldo_Servicio":
            setCostsData({ ...costsData, "Sueldo_Servicio": value });
            break;
        case "Sueldo_Administrativos":
            setCostsData({ ...costsData, "Sueldo_Administrativos": value });
            break;
        case "Alquiler":
            setCostsData({ ...costsData, "Alquiler": value });
            break;
        case "Depreciacion":
            setCostsData({ ...costsData, "Depreciacion": value });
            break;
        case "Servicios_basicos":
            setCostsData({ ...costsData, "Servicios_basicos": value }); // bool
            break;
        case "Publicidad":
            setCostsData({ ...costsData, "Publicidad": value }); // bool
            break;
        case "Internet":
            setCostsData({ ...costsData, "Internet": value });
            break;
        case "Otros":
            setCostsData({ ...costsData, "Otros": value });
            break;
        default:
            break;
    }
    


    }


  return (
    <div className='costsentry-wrapper'>
        <h1>Registro de Costos Fijos</h1>
        
        <div className='costsentry-button-wrapper'>
            <button>Nuevo concepto</button>
        </div>

        <div className='costsentry-table-wrapper'> 

        <div className='costsentry-table-p'>Mes</div>

        <div className='costsentry-table-input'>
            <select className='dataentry-input-row-2-mes' name="Mes" onChange={(e) => handleChange(e)}>
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
        {Object.entries(costsentryTableConcepts).map(([key, value]) => {
            return (
                <>
                    <div className='costsentry-table-p'>{key}</div>
                    <div className='costsentry-table-input'>
                        <input onChange={(e) => handleChange(e)} type="number" name={value} />
                    </div>
                </>
            );
        })}

        </div>

        <div className='costsentry-accept-button-wrapper'>
            {/**Al darle, se tiene que salir automaticamente */}
            <button onClick={() => handleAddCosts()}>Agregar</button>
        </div> 


        <div className='costsentry-cancel-button-wrapper'>
            <button onClick={() => closeModal()}>Cancelar</button>
        </div>

        <div className='costsentry-exit-button-wrapper'>
            <button onClick={() => closeModal()}>Salir</button>
        </div>

    </div>
  )
}

export default CostsEntry