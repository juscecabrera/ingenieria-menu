import React from 'react';

const MockData = () => {
  const platos = [
    { nombre: 'Spaghetti Bolognese', categoria: 'Pasta', precio: '$12.50', cantidadVendida: 200, costo: '$8.00', iva: '21%', diasDisponible: 7 },
    { nombre: 'Pizza Margherita', categoria: 'Pizza', precio: '$10.00', cantidadVendida: 150, costo: '$6.50', iva: '21%', diasDisponible: 6 },
    { nombre: 'Ensalada César', categoria: 'Ensalada', precio: '$8.00', cantidadVendida: 180, costo: '$4.50', iva: '21%', diasDisponible: 5 },
    { nombre: 'Hamburguesa Clásica', categoria: 'Hamburguesa', precio: '$11.00', cantidadVendida: 220, costo: '$7.00', iva: '21%', diasDisponible: 7 },
    { nombre: 'Pollo a la Parrilla', categoria: 'Plato Principal', precio: '$14.00', cantidadVendida: 130, costo: '$9.00', iva: '21%', diasDisponible: 6 },
    { nombre: 'Tacos al Pastor', categoria: 'Tacos', precio: '$9.50', cantidadVendida: 210, costo: '$5.50', iva: '21%', diasDisponible: 4 },
    { nombre: 'Sushi Roll', categoria: 'Sushi', precio: '$15.00', cantidadVendida: 140, costo: '$10.00', iva: '21%', diasDisponible: 7 },
    { nombre: 'Ravioles de Espinaca', categoria: 'Pasta', precio: '$13.00', cantidadVendida: 170, costo: '$7.50', iva: '21%', diasDisponible: 5 },
    { nombre: 'Filete de Salmón', categoria: 'Plato Principal', precio: '$18.00', cantidadVendida: 90, costo: '$12.00', iva: '21%', diasDisponible: 3 },
    { nombre: 'Papas Fritas', categoria: 'Acompañamiento', precio: '$4.00', cantidadVendida: 300, costo: '$2.00', iva: '21%', diasDisponible: 7 },
  ];

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Nombre del Plato</th>
          <th>Categoría</th>
          <th>Precio</th>
          <th>Cantidad Vendida</th>
          <th>Costo</th>
          <th>IVA</th>
          <th>Días Disponible</th>
        </tr>
      </thead>
      <tbody>
        {platos.map((plato, index) => (
          <tr key={index}>
            <td>{plato.nombre}</td>
            <td>{plato.categoria}</td>
            <td>{plato.precio}</td>
            <td>{plato.cantidadVendida}</td>
            <td>{plato.costo}</td>
            <td>{plato.iva}</td>
            <td>{plato.diasDisponible}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MockData;
