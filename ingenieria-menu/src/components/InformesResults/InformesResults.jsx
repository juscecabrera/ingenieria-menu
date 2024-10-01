import React from 'react'

function InformesResults({ data }) {
  // const dataTable = data.multiCriterioResults


  const dataomnes = data.omnesResult
  const dataBCG = data.BCGResults
  const dataADL = data.ADLResults 
  const dataIRP = data.IRPResults
  const dataIndexPopularidad = data.IndexPopularidadResults
  const dataCMA = data.CostoMargenAnalysisResults
  const dataMiller = data.MillerResults
  const datauman = data.umanResults
  const datamerrick = data.merrickResults 
  const datamultiCriterioFinal = data.multiCriterioFinal



  return (
    <div className='informesresults-wrapper'>
    
    <div className='informesresults-1'>
        <h3>Omnes</h3>
        <br />
          <table >
            <thead>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
            </thead>
            <tbody>
              <td>{dataomnes["1 principio"]?.toString()}</td>
              <td>{dataomnes["2 principio"]?.toString()}</td>
              <td>{dataomnes["3 principio"]?.toString()}</td>
              <td>{dataomnes["4 principio"]}</td>
            </tbody>
          </table>
      </div>
      
      <div className='informesresults-2'>
        <h3>BCG</h3>
          <br />

        <table>
          <thead>
            <tr>
              <th>Plato</th>
              <th>Rentabilidad</th>
              <th>Popularidad</th>
              <th>BCGCategoria</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(dataBCG).map((plato) => (
              <tr key={plato}>
                <td>{plato}</td>
                <td>{dataBCG[plato].rentabilidad}</td>
                <td>{dataBCG[plato].popularidad}</td>
                <td>{dataBCG[plato].BCGCategory}</td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>
      
      
      <div className='informesresults-3'>
      <h3>ADL</h3>
      <br />
        <table>
          <thead>
            <tr>
              <th>Plato</th>
              <th>Rentabilidad Categoría</th>
              <th>Cantidad Vendida Categoría</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(dataADL).map((plato) => (
              <tr key={plato}>
                <td>{plato}</td>
                <td>{dataADL[plato].rentabilidadCategoria}</td>
                <td>{dataADL[plato].cantidadVendidaCategoria}</td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>
      
      <div className='informesresults-4'>
        <h3>IRP</h3>
        <br />
        <table >
          <thead>
            <th>Plato</th>
            <th>IRP</th>
          </thead>
          <tbody>
          {Object.keys(dataIRP).map((plato) => (
              <tr key={plato}>
                <td>{plato}</td>
                <td>{dataIRP[plato]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='informesresults-5'>
      <h3>Index de Popularidad</h3>
        <br />
        <table >
          <thead>
            <th>Plato</th>
            <th>Index de Popularidad</th>
          </thead>
          <tbody>
          {Object.keys(dataIndexPopularidad).map((plato) => (
              <tr key={plato}>
                <td>{plato}</td>
                <td>{dataIndexPopularidad[plato]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className='informesresults-6'>
        <h3>Análisis Costo Margen</h3>
        <br />
        <table>
          <thead>
            <th>Plato</th>
            <th>Costo Ponderado</th>
            <th>Margen Contribucion Ponderado</th>
            <th>Categoría Costo-Margen</th>
          </thead>
          <tbody>
          {Object.keys(dataCMA).map((plato) => (
              <tr key={plato}>
                <td>{plato}</td>
                <td>{dataCMA[plato].costoPonderado}</td>
                <td>{dataCMA[plato].margenContribucionPonderado}</td>
                <td>{dataCMA[plato].costoMargen}</td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>

      <div className='informesresults-7'>
        Miller
        <table >
          <thead>
            <th>Plato</th>
            <th>Costo de Alimentos</th>
            <th>Cantidad Vendida</th>
            <th>Categoría Miller</th>
          </thead>
          <tbody>
          {Object.keys(dataMiller).map((plato) => (
              <tr key={plato}>
                <td>{plato}</td>
                <td>{dataMiller[plato].costoAlimentos}</td>
                <td>{dataMiller[plato].cantidadVendidaAtributo}</td>
                <td>{dataMiller[plato].millerMatrix}</td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>


    {/* 
      
      
      <div className='informesresults-8'></div>
      <div className='informesresults-9'></div> */}
      {/* <table className='informesresults-table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>BCG Category</th>
            <th>Costo Margen</th>
            <th>Miller</th>
            <th>IRP</th>
            <th>Index Popularidad</th>
            <th>Puntaje Multicriterio</th>
          </tr>
        </thead>
        <tbody>
          {dataTable ? dataTable.map((plato, index) => (
            <tr key={index}>
              <td>{plato.nombre}</td>
              <td>{plato.resultados[0].BCGCategory[0]}</td>
              <td>{plato.resultados[1].costoMargen[0]}</td>
              <td>{plato.resultados[2].miller[0]}</td>
              <td>{plato.resultados[3].IRP[0]}</td>
              <td>{plato.resultados[4].IndexPopularidad[0]}</td>
              <td>{plato.Puntaje_Multicriterio}</td>
            </tr>
          )) : ""}
        </tbody>
      </table> */}


    </div>
  )
}

export default InformesResults