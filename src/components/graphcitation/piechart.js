import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const PieChart = ({ data, width = 300, height = 300 }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Set up dimensions
    const radius = Math.min(width, height) / 2;

    // Create color scale
    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.name))
      .range(d3.schemeCategory10);

    // Create pie generator
    const pie = d3.pie()
      .value(d => d.value);

    // Create arc generator for the pie slices
    const arc = d3.arc()
      .innerRadius(0) // Full pie chart
      .outerRadius(radius);

    // Create arc generator for label positioning
    const labelArc = d3.arc()
      .innerRadius(radius + 20) // Position labels slightly outside the pie
      .outerRadius(radius + 20);

    // Select SVG and set dimensions
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Clear previous content
    svg.selectAll("*").remove();

    // Bind data and create pie chart
    const arcs = pie(data);
    svg.selectAll("path")
      .data(arcs)
      .join("path")
      .attr("d", arc)
      .attr("fill", d => color(d.data.name))

    // Add labels outside the pie chart
    svg.selectAll("text")
      .data(arcs)
      .join("text")
      .attr("transform", d => `translate(${labelArc.centroid(d)})`) // Position outside
      .attr("text-anchor", d => (d.endAngle + d.startAngle) / 2 > Math.PI ? "end" : "start") // Adjust text alignment
      .attr("font-size", "12px")
      .attr("fill", "black")
      .text(d => `${d.data.name} (${d.data.value})`);

    // Add optional leader lines connecting slices to labels
    svg.selectAll("polyline")
      .data(arcs)
      .join("polyline")
      .attr("points", d => {
        const pos = labelArc.centroid(d);
        const midAngle = (d.startAngle + d.endAngle) / 2;
        const lineEnd = arc.centroid(d); // Position inside the slice
        return [lineEnd, pos];
      })
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .attr("fill", "none");
  }, [data, width, height]);

  return <svg ref={svgRef}></svg>;
};

export default PieChart;
