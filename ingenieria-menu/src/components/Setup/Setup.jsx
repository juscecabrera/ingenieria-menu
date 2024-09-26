import React from 'react'
import '../../main.css'


function Setup() {
  return (
    <div className='setup-wrapper'>
        <h1 className='setup-h1-row-1'>Datos de Empresa</h1>

        <div className='setup-name-wrapper'>
            <p>Nombre Restaurante</p>
            <input placeholder='Nombre del restaurante'></input>
        </div>

        
        <div className='setup-year-wrapper'>
            <p>Año vigente</p>
            <input type='number'></input>
        </div>

        <div className='setup-iva-p-wrapper'>
            <p className='setup-iva-p'>IVA (IGV) %</p>
        </div>
        
        <div className='setup-iva-input-wrapper'>
            <input className='setup-iva-input' type='number'></input>

        </div>

        <div className='setup-rec-p-wrapper'>
            <p>Recargo al consumo (%)</p>
        </div>

        <div className='setup-rec-input-wrapper'>
            <input type='number'></input>
        </div>

        <div className='setup-sign-p-wrapper'>
            <p>Signo monetario</p>

        </div>
        
        <div className='setup-sign-input-wrapper'>
            <select name="setup-sign">
                <option value="Soles">S/ (SOLES)</option>
                <option value="Dolares">$ (USD)</option>
                <option value="Peso_chile">$ (CLP)</option>
            </select>
        </div>

        <div className='setup-accept-button'>
            <button>Guardar</button>
        </div>
        
        <div className='setup-cancel-button'>
            <button>Cancelar</button>
        </div>

    </div>
  )
}

export default Setup