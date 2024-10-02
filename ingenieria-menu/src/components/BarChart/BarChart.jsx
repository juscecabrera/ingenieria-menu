import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ inputData, type }) => {
  const chartRef = useRef();


    //Creo que la mejor manera de manejar la data es cambiarla directamente desde el controlador (informesFunctions) para no tener que transformarla inncesariamente. Hacerla Chart driven


    function transformData(inputData, fixedCategories, categoryField) {
        const categoryCounts = Object.fromEntries(fixedCategories.map(category => [category, 0]));
    
        // Contar la cantidad de platos en cada categoría
        Object.values(inputData).forEach((item) => {
        const category = item[categoryField];
        if (categoryCounts[category] !== undefined) {
            categoryCounts[category]++;
        }
        });
    
        // Convertir el objeto categoryCounts a un array compatible con D3.js
        return fixedCategories.map((category) => ({
        name: category,
        value: categoryCounts[category]
        }));
    }

    function BCG(inputData) {
        return transformData(inputData, ["Estrella", "Impopular", "Popular", "Perdedor"], "BCGCategory");
    }

    function CostoMargen(inputData) {
        return transformData(inputData, ["Selecto", "Estandar", "Durmiente", "Problema"], "costoMargen");
    }

    function Miller(inputData) {
        return transformData(inputData, ["Ganador", "Marginal Alto", "Marginal Bajo", "Perdedor"], "millerMatrix");
    }

    function Uman(inputData) {
        return transformData(inputData, ["Bandera", "Potencial", "Difícil de vender", "Perdedor"], "Uman");
    }

    function Merrick(inputData) {
        return transformData(inputData, ["Grupo A", "Grupo B", "Grupo C", "Grupo D"], "Merrick");
    }

    function IRP(inputData) {
        // Inicializamos los contadores para los platos > 1 y <= 1
        let greaterThanOneCount = 0;
        let lessThanOrEqualOneCount = 0;

        // Iteramos sobre el objeto para contar los platos que cumplen cada condición
        Object.values(inputData).forEach((value) => {
        if (value > 1) {
            greaterThanOneCount++;
        } else {
            lessThanOrEqualOneCount++;
        }
        });

        // Devolvemos el array con el formato adecuado para D3
        return [
            { name: 'Menor o igual a 1', value: lessThanOrEqualOneCount },
            { name: 'Mayor a 1', value: greaterThanOneCount }
        ];
    }

  useEffect(() => {


    let data
    if (type === 'BCG') {
        data = inputData ? BCG(inputData) : []
    } else if (type === 'IRP') {
        data = inputData ? IRP(inputData) : []
    } else if (type === 'CMA') {
        data = inputData ? CostoMargen(inputData) : []
    } else if (type === 'Miller') {
        data = inputData ? Miller(inputData) : []
    } else if (type === 'Uman') {
        data = inputData ? Uman(inputData) : []
    } else if (type === 'Merrick') {
        data = inputData ? Merrick(inputData) : []
    }

    // Seleccionamos el div donde insertaremos el gráfico
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", 500)
      .attr("height", 300)
      .style("background-color", "#f0f0f0");

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    // Configuración del área del gráfico
    const chartArea = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Crear escalas para los ejes
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, width])
      .padding(0.2);

    const yScale = d3.scaleLinear().domain([0, d3.max(data, (d) => d.value)]).range([height, 0]);

    // Eje X
    chartArea
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    // Eje Y
    chartArea.append("g").call(d3.axisLeft(yScale));

    // Dibujar las barras
    chartArea
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.name))
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.value))
      .attr("fill", "#69b3a2");

    chartArea
      .selectAll(".label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", (d) => xScale(d.name) + xScale.bandwidth() / 2) // Centrar el texto sobre la barra
      .attr("y", (d) => yScale(d.value) - 5) // Posicionar el texto justo encima de la barra
      .attr("text-anchor", "middle") // Alinear el texto en el centro
      .text((d) => d.value) // Mostrar el valor de cada barra
      .attr("fill", "black");

    return () => {
      // Limpiar el gráfico al desmontar el componente
      d3.select(chartRef.current).select("svg").remove();
    };
  }, [inputData]);

  return <div ref={chartRef}></div>;
};

export default BarChart;

/**
 * Formato esperado de la data (array de objetos):
 * data = [
 *   { name: 'A', value: 30 },
 *   { name: 'B', value: 80 },
 *   { name: 'C', value: 45 },
 *   { name: 'D', value: 60 }
 * ];
 * 
 * - 'name': El nombre de cada categoría que aparecerá en el eje X.
 * - 'value': El valor numérico para cada categoría que se usará para la altura de la barra.
 */
