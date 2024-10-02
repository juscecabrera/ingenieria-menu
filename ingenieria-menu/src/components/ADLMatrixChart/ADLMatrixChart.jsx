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

  useEffect(() => {
    // Formatear los datos
    const data = formatADLData(adlResults);

    // Definir dimensiones del gráfico
    const margin = { top: 40, right: 40, bottom: 40, left: 40 };
    const width = 600 - margin.left - margin.right;
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
      .domain([0, d3.max(data, d => d.rentabilidad)]) // Eje X para rentabilidad
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.cantidadVendida)]) // Eje Y para cantidadVendida
      .range([height, 0]);

    // Ejes
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).ticks(5).tickFormat(d3.format(".0f"))); // Eje X

    svg.append('g')
      .call(d3.axisLeft(yScale).ticks(5).tickFormat(d3.format(".0f"))); // Eje Y

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

    // Limpiar el gráfico al desmontar el componente
    return () => {
      d3.select(chartRef.current).select('svg').remove();
    };
  }, [adlResults]);

  return <div ref={chartRef}></div>;
};

export default ADLMatrixChart;
