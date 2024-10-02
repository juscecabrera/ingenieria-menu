import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ADLMatrixChart = ({ adlResults }) => {
  const chartRef = useRef();

  const formatADLData = (adlResults) => {
    return Object.entries(adlResults).map(([plato, categorias]) => {
      return {
        name: plato,
        cantidadVendida: categorias.cantidadVendidaPuntaje, // Usar el puntaje de cantidad vendida
        rentabilidad: categorias.rentabilidadPuntaje // Usar el puntaje de rentabilidad
      };
    });
  };

  const firstKey = Object.keys(adlResults)[0];
  const firstItem = adlResults[firstKey];

  const { rentabilidadNiveles, cantidadVendidaNiveles } = firstItem;

  console.log(rentabilidadNiveles, cantidadVendidaNiveles);
  //[9.06, 9.92, 10.78, 11.64, 12.5], [400, 440, 480, 520, 560, 600]

  const rentabilidadCategorias = ['Declinacion', 'Madurez', 'Introduccion', 'Crecimiento']
  const cantidadVendidaCategorias = ['Marginal', 'Debil', 'Favorable', 'Fuerte', 'Dominante']


  useEffect(() => {
    // Formatear los datos
    const data = formatADLData(adlResults);

    // Definir dimensiones del gráfico
    const margin = { top: 40, right: 40, bottom: 40, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Crear SVG
    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Definir escalas
    const xScale = d3.scaleLinear()
      .domain([rentabilidadNiveles[0], rentabilidadNiveles[4]+ 0.25]) // Eje X para rentabilidad
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([cantidadVendidaNiveles[0], cantidadVendidaNiveles[5] + 20]) // Eje Y para cantidadVendida
      .range([height, 0]);

    // // Definir escalas para los ejes secundarios
    const xScaleSecondary = d3.scalePoint()
      .domain(rentabilidadCategorias)  
      .range([0, width])
      .padding(0.5)

    const yScaleSecondary = d3.scalePoint()
      .domain(cantidadVendidaCategorias)  
      .range([height, 0])
      .padding(0.5);

    // Ejes
    svg.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale)
      .tickValues(rentabilidadNiveles) // Establecer los ticks en las posiciones específicas
      .tickFormat(d3.format(".2f")) // Formatear los ticks para mostrar dos decimales
    );

    svg.append('g')
      .call(d3.axisLeft(yScale)
        .tickValues(cantidadVendidaNiveles)
        .tickFormat(d3.format(".0f"))
      ); // Eje Y

    // // Eje X secundario en la parte superior
    svg.append('g')
      .attr('transform', `translate(0, 0)`) // Mover el eje X secundario a la parte superior
      .call(d3.axisTop(xScaleSecondary)
        .tickFormat(d3.format(""))
      );

    // Eje Y secundario a la derecha
    svg.append('g')
      .attr('transform', `translate(${width}, 0)`) // Mover el eje Y secundario a la derecha
      .call(d3.axisRight(yScaleSecondary)
        .tickFormat(d3.format(""))  
      );


    // Dibujar puntos
    svg.selectAll('.dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cy', d => yScale(d.cantidadVendida))
      .attr('cx', d => xScale(d.rentabilidad))
      .attr('r', 5)
      .attr('fill', '#69b3a2');

    // Etiquetas de los puntos
    svg.selectAll('.label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('y', d => yScale(d.cantidadVendida))
      .attr('x', d => xScale(d.rentabilidad))
      .attr('dy', -10) // Ajustar la posición vertical de la etiqueta
      .attr('text-anchor', 'middle')
      .text(d => d.name); // Cambia 'name' por el atributo que quieras mostrar

    // Función para dibujar líneas
    const drawLine = (x1, y1, x2, y2, color) => {
      svg.append('line')
        .attr('x1', xScale(x1))
        .attr('y1', yScale(y1))
        .attr('x2', xScale(x2))
        .attr('y2', yScale(y2))
        .attr('stroke', color) // Color de la línea
        .attr('stroke-width', 2);
    };

    // Lineas Horizontales
    drawLine(rentabilidadNiveles[0], cantidadVendidaNiveles[1], rentabilidadNiveles[4] + 0.25 , cantidadVendidaNiveles[1], 'red')
    drawLine(rentabilidadNiveles[0], cantidadVendidaNiveles[2], rentabilidadNiveles[4] + 0.25 , cantidadVendidaNiveles[2], 'red')
    drawLine(rentabilidadNiveles[0], cantidadVendidaNiveles[3], rentabilidadNiveles[4] + 0.25 , cantidadVendidaNiveles[3], 'red')
    drawLine(rentabilidadNiveles[0], cantidadVendidaNiveles[4], rentabilidadNiveles[4] + 0.25 , cantidadVendidaNiveles[4], 'red')
    drawLine(rentabilidadNiveles[0], cantidadVendidaNiveles[5], rentabilidadNiveles[4] + 0.25 , cantidadVendidaNiveles[5], 'red')
    
    // Lineas Verticales
    // drawLine(rentabilidadNiveles[0], cantidadVendidaNiveles[0], rentabilidadNiveles[0], cantidadVendidaNiveles[5], 'blue')
    drawLine(rentabilidadNiveles[1], cantidadVendidaNiveles[0], rentabilidadNiveles[1], cantidadVendidaNiveles[5], 'blue')
    drawLine(rentabilidadNiveles[2], cantidadVendidaNiveles[0], rentabilidadNiveles[2], cantidadVendidaNiveles[5], 'blue')
    drawLine(rentabilidadNiveles[3], cantidadVendidaNiveles[0], rentabilidadNiveles[3], cantidadVendidaNiveles[5], 'blue')
    drawLine(rentabilidadNiveles[4], cantidadVendidaNiveles[0], rentabilidadNiveles[4], cantidadVendidaNiveles[5], 'blue')
    // drawLine(rentabilidadNiveles[5], cantidadVendidaNiveles[0], rentabilidadNiveles[5], cantidadVendidaNiveles[5], 'blue')

    // Limpiar el gráfico al desmontar el componente
    return () => {
      d3.select(chartRef.current).select('svg').remove();
    };
  }, [adlResults]);

  return <div ref={chartRef}></div>;
};

export default ADLMatrixChart;
