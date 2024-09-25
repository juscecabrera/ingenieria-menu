import React from 'react'
import '../../main.css'

function DataEntry() {
  return (
    <div className='dataentry-wrapper'>
        <h1>Agregar registro</h1>
        <div className='dataentry-text-row-1'>Cod. Int.</div>
        <div className='dataentry-input-row-1-wrapper'>
            <input className='dataentry-input-row-1' type="number" />
            
        </div>

        <div className='dataentry-text-row-2-mes'>Mes</div>
        <div className='dataentry-input-row-2-mes-wrapper'>
            <select className='dataentry-input-row-2-mes' name="dataentry-mes" id="">
                <option>Mes</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
                <option value="">11</option>
                <option value="">12</option>
            </select>

        </div>

        <div className='dataentry-text-row-2-cat'>Categoria</div>
        <div className='dataentry-input-row-2-cat-wrapper'>
            <select className='dataentry-input-row-2-cat' name="dataentry-mes" id="">
                <option>Seleccione una opcion</option>
                <option value="">ENTRADAS</option>
                <option value="">FONDOS</option>
                <option value="">POSTRES</option>
                <option value="">BEBIDAS</option>
            </select>
            
        </div>

        <div className='dataentry-text-row-2-button-wrapper'>
            <button className='dataentry-text-row-2-button'>Nueva Cat.</button>
        </div>

        <div className='dataentry-text-row-3'>Plato</div>
        <div className='dataentry-input-row-3-wrapper'>
            <select className='dataentry-input-row-3' name="dataentry-plato" id="">
                <option></option>
                <option>Plato 1</option>
            </select>

        </div>

        <div className='dataentry-text-row-3-button-wrapper'>
            <button className='dataentry-text-row-3-button'>Nuevo Plato</button>
        </div>


        <div className='dataentry-text-row-4'>Cant. Vendida</div>
        <div className='dataentry-input-row-4-wrapper'>
            <input className='dataentry-input-row-4' type="number" />
        </div>


        <div className='dataentry-text-row-5'>Precio de Vta.</div>
        <div className='dataentry-input-row-5-wrapper'>
            <input className='dataentry-input-row-5' type="number" />
        </div>

        <div className='dataentry-text-row-5-iva'>
            IVA (IGV)
            <input className='dataentry-input-row-5-iva' type="checkbox" />
        </div>
        
            <div className='dataentry-div-row-5'>

                <p className='dataentry-text-row-5-rec'>Rec. al consumo</p>
                <input className='dataentry-input-row-5-rec' type="checkbox" />
            </div>


        <div className='dataentry-text-row-6'>Costo Variable</div>
        <div className='dataentry-input-row-6-wrapper'>
            <input className='dataentry-input-row-6' type="number" />
        </div>

        <div className='dataentry-text-row-6-valor'>
            Valor Vta.(%)
            <input className='dataentry-input-row-6-valor' type="checkbox" />
        </div>
        {/* <div className='dataentry-input-row-6-valor-wrapper'>
        </div> */}

        
        <div className='dataentry-text-row-7'>Presentacion</div>
        <div className='dataentry-input-row-7-wrapper' >
            <input className='dataentry-input-row-7' type="number" />dias
        </div>
        
        <div className='dataentry-accept-button-wrapper'>
            <button className='dataentry-accept-button'>Aceptar</button>
        </div>

        <div className='dataentry-cancel-button-wrapper'>
            <button className='dataentry-cancel-button'>Cancelar</button>
        </div>
    </div>
  )
}

export default DataEntry