import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface RevenueData {
    year: string;
    revenue: number;
}

function D3BarChart() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    svg.selectAll("*").remove();


    const data: RevenueData[] = [
        { year: "2019", revenue: 42 },
        { year: "2020", revenue: 58 },
        { year: "2021", revenue: 75 },
        { year: "2022", revenue: 63 },
        { year: "2023", revenue: 91 },
        { year: "2024", revenue: 110 }
    ];

    // We'll gradually move your old D3 code here

    const margin = { top: 30, right: 30, bottom: 60, left: 60 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    svg
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

    const chart = svg
        .append("g")
        .attr(
            "transform",
            `translate(${margin.left}, ${margin.top})`
        );

    const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d.year))
        .range([0, width])
        .padding(0.25);


    const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.revenue)! * 1.1])
        .range([height, 0]);

    chart
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", (d) => xScale(d.year)!)
        .attr("y", (d) => yScale(d.revenue))
        .attr("width", xScale.bandwidth())
        .attr("height", (d) => height - yScale(d.revenue))
        .attr("fill", "#26428b");


    chart
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -45)
        .attr("text-anchor", "middle")
        .text("Revenue ($ millions)");

    chart
        .append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(xScale));

    chart
        .append("g")
        .call(d3.axisLeft(yScale).ticks(6));


  }, []);

  return (
    <div>
      <h2>My D3 Visualization Chart:</h2>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default D3BarChart;