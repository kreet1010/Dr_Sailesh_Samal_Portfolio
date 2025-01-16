import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const CitationsLineChart = ({ data }) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 700, height: 300 });

  useEffect(() => {
    const handleResize = () => {
      const { offsetWidth } = wrapperRef.current || {};
      if (offsetWidth) {
        setDimensions({ width: offsetWidth, height: 300 });
      }
    };

    // Add resize listener
    handleResize(); // Set initial dimensions
    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup listener on unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const { width, height } = dimensions;

    // Define margins and dimensions
    const margin = { top: 20, right: 30, bottom: 50, left: 65 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Clear previous content
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Create the main group element
    const g = svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Define scales
    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.year))
      .range([0, innerWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.citations)])
      .nice()
      .range([innerHeight, 0]);

    // Create and add the x-axis
    g.append("g")
      .attr("transform", `translate(0, ${innerHeight})`)
      .call(d3.axisBottom(xScale).ticks(data.length).tickFormat(d3.format("d")))
      .selectAll("text")
      .attr("transform", "rotate(45)")
      .style("text-anchor", "start");

    // Create and add the y-axis
    g.append("g").call(d3.axisLeft(yScale));

    // Create the line generator
    const line = d3
      .line()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.citations))
      .curve(d3.curveMonotoneX);

    // Add the line path
    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#69b3a2")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Add data points as circles
    g.selectAll("circle")
      .data(data)
      .join("circle")
      .attr("cx", (d) => xScale(d.year))
      .attr("cy", (d) => yScale(d.citations))
      .attr("r", 4)
      .attr("fill", "blue");

    // Add labels
    g.selectAll("text.label")
      .data(data)
      .join("text")
      .attr("class", "label")
      .attr("x", (d) => xScale(d.year))
      .attr("y", (d) => yScale(d.citations) - 10)
      .attr("text-anchor", "middle")
      .attr("fill", "black")
      .attr("font-size", "12px")
      .text((d) => d.citations);

    // Add axes labels
    g.append("text")
      .attr("x", innerWidth / 2)
      .attr("y", innerHeight + 40)
      .attr("text-anchor", "middle")
      .attr("fill", "black")
      .attr("font-size", "16px")
      .text("Year");

    g.append("text")
      .attr("x", -innerHeight / 2)
      .attr("y", -50)
      .attr("text-anchor", "middle")
      .attr("fill", "black")
      .attr("transform", "rotate(-90)")
      .attr("font-size", "16px")
      .text("Citations");
  }, [data, dimensions]);

  return (
    <div ref={wrapperRef} style={{ width: "90%", height: "90%" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default CitationsLineChart;
