import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./pie.css";

const CitationsLineChart = ({ data }) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 700, height: 300 });

  useEffect(() => {
    const handleResize = () => {
      const { offsetWidth } = wrapperRef.current || {};
      if (offsetWidth) {
        setDimensions({ width: offsetWidth, height: offsetWidth / 2 }); // Maintain a 2:1 aspect ratio
      }
    };

    handleResize(); // Set initial dimensions
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const { width, height } = dimensions;

    // Define margins and dimensions
    const margin = { top: 20, right: 30, bottom: 50, left: 80 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Clear previous content
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Create the main group element
    const g = svg
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`) // Add viewBox for responsiveness
      .attr("preserveAspectRatio", "xMinYMin meet") // Preserve aspect ratio
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Tooltip div
    const tooltip = d3
      .select(wrapperRef.current)
      .append("div")
      .style("position", "absolute")
      .style("background", "#fff")
      .style("border", "1px solid #ccc")
      .style("border-radius", "3px")
      .style("padding", "3px 6px")
      .style("font-size", "25px")
      .style("box-shadow", "0px 2px 5px rgba(0, 0, 0, 0.2)")
      .style("opacity", 0)
      .style("transition", "opacity 0.3s ease");

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
      .attr("stroke", "#DF9755")
      .attr("stroke-width", 5)
      .attr("d", line);

    // Add data points as circles with hover effects
    g.selectAll("circle")
      .data(data)
      .join("circle")
      .attr("cx", (d) => xScale(d.year))
      .attr("cy", (d) => yScale(d.citations))
      .attr("r", 4)
      .attr("fill", "#000036")
      .on("mouseover", (event, d) => {
        tooltip
          .style("opacity", 1)
          .html(`<strong>Year:</strong> ${d.year}<br/><strong>Citations:</strong> ${d.citations}`)
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 20}px`);

        d3.select(event.target)
          .transition()
          .duration(200)
          .attr("r", 8)
          .attr("fill", "orange");
      })
      .on("mousemove", (event) => {
        tooltip
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 20}px`);
      })
      .on("mouseout", (event) => {
        tooltip.style("opacity", 0);

        d3.select(event.target)
          .transition()
          .duration(200)
          .attr("r", 4)
          .attr("fill", "#000036");
      });

    // Add labels
    g.selectAll("text.label")
      .data(data)
      .join("text")
      .attr("class", "label")
      .attr("x", (d) => xScale(d.year))
      .attr("y", (d) => yScale(d.citations) - 10)
      .attr("text-anchor", "middle")
      .attr("fill", "#000036")
      .attr("font-size", "16px")
      .text((d) => d.citations);

    // Add axes labels
    g.append("text")
      .attr("x", innerWidth / 2)
      .attr("y", innerHeight + 40)
      .attr("text-anchor", "middle")
      .attr("fill", "#eb5a3d")
      .attr("font-size", "25px")
      .text("Year");

    g.append("text")
      .attr("x", -innerHeight / 2)
      .attr("y", -50)
      .attr("text-anchor", "middle")
      .attr("fill", "#eb5a3d")
      .attr("transform", "rotate(-90)")
      .attr("font-size", "25px")
      .text("Citations");

    return () => {
      tooltip.remove();
    };
  }, [data, dimensions]);

  return (
    <div className="graph" ref={wrapperRef} style={{ width: "100%", height: "auto" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default CitationsLineChart;
