
export const fetchPlates = (urlServer, setPlatesData, setLoading) => {
    fetch(`${urlServer}/api/plates`)
    .then(response => {
      if (!response.ok) {
          throw new Error('Error en la solicitud');
      }
      return response.json(); 
    })
    .then(data => {
        setPlatesData(data)
        setLoading(false)
    })
    .catch(error => {
    console.error('Hubo un problema con la solicitud en fetchData:', error);
    }); 
}

export const createPlate = (urlServer, plateData) => {
    const payload = {
        CodInt : 1,
        Mes_plato : plateData.Mes_plato,
        Categoria_plato : plateData.Categoria_plato,
        Nombre_plato : plateData.Nombre_plato,
        Cantidad_vendida_plato: plateData.Cantidad_vendida_plato,
        Precio_plato : plateData.Precio_plato,
        Costo_plato : plateData.Costo_plato,
        Dias_plato : plateData.Dias_plato
    }

    const urlCreatePlate = `${urlServer}/api/plates`
    
    fetch(urlCreatePlate, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
            },
        body: JSON.stringify(payload),     
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json(); 
    })
    .then(data => {
        console.log(data)

    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud en fetchData:', error);
    }); 
  
}