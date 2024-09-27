import { useState } from 'react'
import { createCosts } from '../../../utils/fetchsData'
import { urlServer } from '../../../utils/constantURL'

function CostsEntry({ setShowModal }) {
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
        //Aca hacer el fetch
        try {
            createCosts(urlServer, costsData)
            //Hacer el timeout para el refresh
        } catch (error) {
            console.log("Error en front al handleAddCosts", error);
        }
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
            <input onChange={(e) => handleChange(e)} type="text" name="Mes" />
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
            <button onClick={() => setShowModal(false)}>Cancelar</button>
        </div>

        <div className='costsentry-exit-button-wrapper'>
            <button onClick={() => setShowModal(false)}>Salir</button>
        </div>

    </div>
  )
}

export default CostsEntry