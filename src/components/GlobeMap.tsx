import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import './GlobeMap.css'; // Adjust the path if necessary

interface GlobeMapProps {
  geojson: any; 
}

const GlobeMap: React.FC<GlobeMapProps> = ({ geojson }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  let isRotationStopped = false; // Flag to track if rotation should be stopped

  useEffect(() => {
    if (!svgRef.current || !tooltipRef.current || !geojson) return;

    const svg = d3.select(svgRef.current);
    const tooltip = d3.select(tooltipRef.current);
    const width = 800;
    const height = 800;
    const sensitivity = 75;
    const minZoom = 0.3;

    let projection = d3.geoOrthographic()
      .scale(width / 2)
      .center([0, 0])
      .rotate([0, -30])
      .translate([width / 2, height / 2]);

    const initialScale = projection.scale();
    const path = d3.geoPath().projection(projection);

    svg.attr("width", width).attr("height", height);

    // Light blue sea
    svg.append("circle")
      .attr("fill", "#d0e7f9")
      .attr("stroke", "#000")
      .attr("stroke-width", 3)
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("r", initialScale)
      .attr("class", "globe");

    // Drag behavior
    const dragBehavior = d3.drag<SVGSVGElement, unknown>()
      .on('start', () => {
        isRotationStopped = true; // Stop the globe from rotating permanently after first interaction
      })
      .on('drag', (event: d3.D3DragEvent<SVGSVGElement, unknown, unknown>) => {
        const rotate = projection.rotate();
        const k = sensitivity / projection.scale();
        projection.rotate([
          rotate[0] + event.dx * k,
          rotate[1] - event.dy * k
        ]);

        // Update map paths
        svg.selectAll("path").attr("d", (d: any) => path(d));

        // Update circle and pin positions
        svg.selectAll("circle").attr("transform", (d: any) => {
          if (d && d.geometry && d.geometry.coordinates) {
            const coords = projection(d.geometry.coordinates);
            return `translate(${coords})`;
          }
        });
        updatePins();
      });

    // Zoom behavior
    const zoomBehavior = d3.zoom<SVGSVGElement, unknown>()
      .on('zoom', (event: d3.D3ZoomEvent<SVGSVGElement, unknown>) => {
        if (event.transform.k > minZoom) {
          // Update projection scale
          projection.scale(initialScale * event.transform.k);

          // Update map paths
          svg.selectAll("path").attr("d", (d: any) => path(d));

          // Update globe circle radius
          svg.select(".globe").attr("r", projection.scale());

          // Update circle and pin positions
          svg.selectAll("circle").attr("transform", (d: any) => {
            if (d && d.geometry && d.geometry.coordinates) {
              const coords = projection(d.geometry.coordinates);
              return `translate(${coords})`;
            }
          });  
          updatePins();
        }
      });

    svg.call(dragBehavior).call(zoomBehavior);

    // Load and render map data
    const loadData = async () => {
      const mapResponse = await fetch("/earth-coastlines-10km.geojson");
      const mapData = await mapResponse.json();
      const geometries = mapData.geometries.filter((d: any) => d.type === "MultiPolygon")
      svg.append("g")
        .attr("class", "multipolygons")
        .selectAll("path")
        .data(geometries)
        .enter().append("path")
        .attr("d", (d: any) => path(d))
        .attr("fill", "lightgray")
        .style('stroke', 'black')
        .style('stroke-width', 1)
        .style("opacity", 0.8);
    };

    // Render the geojson data
    const loadGeojsonData = async () => {
      if (geojson.features) {
        const polygons = geojson.features.filter((d: any) => d.geometry.type === "Polygon");

        svg.append("g")
          .attr("class", "polygons")
          .selectAll("path")
          .data(polygons)
          .enter().append("path")
          .attr("d", (d: any) => path(d))
          .attr("fill", "none")
          .attr("stroke", "blue")
          .style('stroke-width', 2)
          .attr("stroke-dasharray", "5,5")
          .style("opacity", 1);

        const points = geojson.features.filter((d: any) => d.geometry.type === "Point");

        svg.append("g")
          .selectAll("circle")
          .data(points)
          .enter()
          .append("circle")
          .attr("r", 5)
          .attr("fill", "red")
          .attr("stroke", "black")
          .attr("transform", (d: any) => `translate(${projection(d.geometry.coordinates)})`)
          .on("mouseover", function(event, d) {
            const [mouseX, mouseY] = d3.pointer(event);
            d3.select(this).attr("fill", "yellow");
            tooltip.transition().duration(200).style("opacity", .9);
            tooltip.html("sample")
              .style("left", `${mouseX + 300}px`)
              .style("top", `${mouseY + 500}px`);
          })
          .on("mouseout", function() {
            d3.select(this).attr("fill", "red");
            tooltip.transition().duration(500).style("opacity", 0);
          });

        const pinWidth = 20;  // Width of the pin image
        const pinHeight = 20; // Height of the pin image
          
        // Add pins
        svg.selectAll("image.point-pin")
          .data(points)
          .enter()
          .append("image")
          .attr("class", "point-pin")
          .attr("href", "/pin.svg")
          .attr("width", pinWidth)
          .attr("height", pinHeight)
          .attr("transform", (d: any) => {
            const [x, y] = projection(d.geometry.coordinates);
            return `translate(${x - pinWidth / 2}, ${y - pinHeight})`;  
          });

        svg.selectAll("image.polygon-pin")
          .data(polygons)
          .enter()
          .append("image")
          .attr("class", "polygon-pin")
          .attr("href", "/pin.svg")
          .attr("width", pinWidth)
          .attr("height", pinHeight)
          .attr("transform", (d: any) => {
            const [x, y] = projection(d3.geoCentroid(d));  
            return `translate(${x - pinWidth / 2}, ${y - pinHeight})`;  
          });
      }
    };

    // Function to update circles and pins positions
    const updatePins = () => {
      svg.selectAll("image.point-pin")
        .attr("transform", (d: any) => `translate(${projection(d.geometry.coordinates)})`);

      svg.selectAll("image.polygon-pin")
        .attr("transform", (d: any) => `translate(${projection(d3.geoCentroid(d))})`);
    };

    loadGeojsonData();
    loadData();

    // Optional rotation function
    const rotateGlobe = () => {
      if (!isRotationStopped) {
        const rotate = projection.rotate();
        const k = sensitivity / projection.scale();
        projection.rotate([rotate[0] - 1 * k, rotate[1]]);

        // Update the map paths
        svg.selectAll("path").attr("d", (d: any) => path(d));

        // Update circles and pins positions
        svg.selectAll("circle").attr("transform", (d: any) => {
          if (d && d.geometry && d.geometry.coordinates) {
            const coords = projection(d.geometry.coordinates);
            return `translate(${coords})`;
          }
        });
        updatePins();
      }
    };

    const timer = d3.timer(rotateGlobe, 200);

    // Stop rotation on first user interaction
    const stopRotationOnFirstInteraction = () => {
      svg.on("mousedown touchstart", () => {
        isRotationStopped = true;
        timer.stop(); // Stop rotation permanently after first interaction
      });
    };

    stopRotationOnFirstInteraction();

  }, [geojson]);

  return (
    <div className="globe-container">
      <header className="header">
        <h1>Interactive Globe Visualization</h1>
      </header>
      <div className="map-container">
        <svg ref={svgRef}></svg>
        <div className="tooltip" ref={tooltipRef}></div>
      </div>
    </div>
  );
};

export default GlobeMap;
