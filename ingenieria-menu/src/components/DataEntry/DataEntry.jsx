import React from 'react'
import '../../main.css'

function DataEntry() {
  return (
    <div className='dataentry-wrapper'>
        <h1>Agregar registro</h1>
        <div className='dataentry-text-row-1'>Cod. Int.</div>
        <input className='dataentry-input-row-1' type="number" />

        <div className='dataentry-text-row-2-mes'>Mes</div>
        <select className='dataentry-input-row-2-mes' name="dataentry-mes" id="">
            <option>Seleccione mes</option>
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

        <div className='dataentry-text-row-2-cat'>Categoria</div>
        <select className='dataentry-input-row-2-cat' name="dataentry-mes" id="">
            <option>Seleccione una opcion</option>
            <option value="">ENTRADAS</option>
            <option value="">FONDOS</option>
            <option value="">POSTRES</option>
            <option value="">BEBIDAS</option>
        </select>

        <button className='dataentry-text-row-2-button'>Nueva Cat.</button>

        <div className='dataentry-text-row-3'>Plato</div>
        <select className='dataentry-input-row-3' name="dataentry-plato" id="">
            <option></option>
        </select>

        <button className='dataentry-text-row-3-button'>Nuevo Plato</button>


        <div className='dataentry-text-row-4'>Cant. Vendida</div>
            <input className='dataentry-input-row-4' type="number" />


        <div className='dataentry-text-row-5'>Precio de Vta.</div>
            <input className='dataentry-input-row-5' type="number" />

        <div className='dataentry-text-row-5-iva'>IVA (IGV)</div>
        
            <div className='dataentry-div-row-5'>
                <input className='dataentry-input-row-5-iva' type="checkbox" />

                <p className='dataentry-text-row-5-rec'>Rec. al consumo</p>
                <input className='dataentry-input-row-5-rec' type="checkbox" />
            </div>


        <div className='dataentry-text-row-6'>Costo Variable</div>
            <input className='dataentry-input-row-6' type="number" />

        <div className='dataentry-text-row-6-valor'>Valor Vta. (%)</div>
            <input className='dataentry-input-row-6-valor' type="checkbox" />

        
        <div className='dataentry-text-row-7'>Presentacion</div>
            <input className='dataentry-input-row-7' type="number" />
            <div className='dataentry-text-row-7-dias'>días</div>

    </div>
  )
}

export default DataEntry