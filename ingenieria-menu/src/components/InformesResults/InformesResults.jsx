import React from 'react'

function InformesResults({ data }) {
  const dataTable = data.multiCriterioResults
  const dataOmnes = data.omnesResult

  return (
    <div className='informesresults-wrapper'>
    
    <div className='informesresults-1'>
        <h3>Omnes</h3>
        <br />
        {/* {JSON.stringify(dataOmnes, null, 2)} */}
          <table >
            <thead>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
            </thead>
            <tbody>
              <td>{dataOmnes["1 principio"]?.toString()}</td>
              <td>{dataOmnes["2 principio"]?.toString()}</td>
              <td>{dataOmnes["3 principio"]?.toString()}</td>
              <td>{dataOmnes["4 principio"]}</td>
            </tbody>
          </table>
      </div>
    
    {/* 
      <div className='informesresults-2'>
        BCG
        <table >
          <thead>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </thead>
          <tbody>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tbody>
        </table>


      </div>
      <div className='informesresults-3'>
        ADL
        <table >
          <thead>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </thead>
          <tbody>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tbody>
        </table>


      </div>
      <div className='informesresults-4'>
        IRP
        <table >
          <thead>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </thead>
          <tbody>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tbody>
        </table>


      </div>
      <div className='informesresults-5'>
        IndexPopularidad
        <table >
          <thead>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </thead>
          <tbody>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tbody>
        </table>


      </div>
      <div className='informesresults-6'>Costo-
        Margen
        <table >
          <thead>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </thead>
          <tbody>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tbody>
        </table>


      </div>
      <div className='informesresults-7'>
        Miller
        <table >
          <thead>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </thead>
          <tbody>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tbody>
        </table>


      </div>
      <div className='informesresults-8'></div>
      <div className='informesresults-9'></div> */}
      <table className='informesresults-table'>
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
      </table>


    </div>
  )
}

export default InformesResults