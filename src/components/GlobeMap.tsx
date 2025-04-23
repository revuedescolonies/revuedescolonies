import React, { useRef, useEffect, useState, useContext } from "react";
import * as d3 from "d3";
import './GlobeMap.css'; 
import { Routes } from "gatsby-theme-ceteicean/src/components/Ceteicean";
import Graphic from "../gatsby-theme-ceteicean/components/Graphic";
import { Ref, SafeUnchangedNode } from "gatsby-theme-ceteicean/src/components/DefaultBehaviors";
import { Grid2, Box, Typography, Grid, useTheme } from "@mui/material";
import Renderer from "gatsby-theme-ceteicean/src/components/Renderer";
import Q from "../gatsby-theme-ceteicean/components/Q";
import { DisplayContext, EntityContext, IOptions, TEntity } from "../gatsby-theme-ceteicean/components/Context";
import EntitySimple from "../gatsby-theme-ceteicean/components/EntitySimple";
import useMediaQuery from "@mui/material/useMediaQuery"

interface GlobeMapProps {
  geojson: any; 
  language: "en" | "fr";
  elements: string[];
  prefixed: string;
}

const GlobeMap: React.FC<GlobeMapProps> = ({ geojson, elements, prefixed, language }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  let isRotationStopped = false; 
  const [entity, setEntity] = useState<TEntity | null>(null); 
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('lg'));

  useEffect(() => {
    if (!svgRef.current || !geojson) return;

    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 800;
    const sensitivity = 75;
    const minZoom = 0.3;

    let projection = d3.geoOrthographic()
      .scale(isScreenSmall ? width / 2.5 : width / 2)    
      .center([0, 0])
      .rotate([30, -30])
      .translate([width / 2, height / 2]);

    const initialScale = projection.scale();
    const path = d3.geoPath().projection(projection);

    svg.attr("viewBox", `0 0 ${width} ${height}`).attr("preserveAspectRatio", "xMidYMid meet");

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

          // Update pin positions
          updatePins();
        }
      });

      const handleKeyPress = (event: KeyboardEvent) => {
      const rotate = projection.rotate();
      const rotationStep = 5; // Adjust rotation step size
      const currentScale = projection.scale();
      const zoomStep = 1.2; // Zoom multiplier
      
      const updateGlobe = () => {
        svg.selectAll("path").attr("d", (d: any) => path(d));
        svg.select(".globe").attr("r", projection.scale());
        updatePins();
      }
      
      if (event.key === "ArrowLeft") {
          projection.rotate([rotate[0] - rotationStep, rotate[1]]);
          event.preventDefault();
          updateGlobe();
       } else if (event.key === "ArrowRight") {
          projection.rotate([rotate[0] + rotationStep, rotate[1]]);
          event.preventDefault();
          updateGlobe();
      } else if (event.key === "ArrowUp") {
          projection.rotate([rotate[0], rotate[1] - rotationStep]);
          event.preventDefault();
          updateGlobe();
      } else if (event.key === "ArrowDown") {
          projection.rotate([rotate[0], rotate[1] + rotationStep]);
          event.preventDefault();
          updateGlobe();
      } else if (event.key === "+" || event.key === "=") {
          // Zoom In
          const newScale = Math.min(currentScale * zoomStep, width);
          projection.scale(newScale);
          event.preventDefault();
          updateGlobe();
      } else if (event.key === "-") {
          // Zoom Out
          const newScale = Math.max(currentScale / zoomStep, initialScale * minZoom);
          projection.scale(newScale);
          event.preventDefault();
          updateGlobe();
      } else if (event.key === "r" || event.key === "R") {
          // Reset view
          projection.rotate([30, -30])
            .scale(initialScale);
          event.preventDefault();
          updateGlobe();
          isRotationStopped = false;
      }
    };   

    svg.call(dragBehavior).call(zoomBehavior);
    document.addEventListener("keydown", handleKeyPress);

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

    const pinWidth = 40;  
    const pinHeight = 40; 

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
      }
    };
    const renderPins = () => {
    if (geojson.features) {
        const polygons = geojson.features.filter((d: any) => d.geometry.type === "Polygon");
        const points = geojson.features.filter((d: any) => d.geometry.type === "Point");

    // Add pins with keyboard accessibility
    svg.selectAll("image.point-pin")
      .data(points)
      .enter()
      .append("image")
      .attr("class", "point-pin")
      .attr("href", "/pin.svg")
      .attr("width", pinWidth)
      .attr("height", pinHeight)
      .attr("transform", (d: any) => {
        return `translate(${projection(d.geometry.coordinates)})`;
      })
      .attr("role", "button")
      .attr("tabindex", "0")
      .attr("aria-label", (d: any) => `Location: ${d.properties.id || "Unknown"}`) 
      .on("click", (event, d) => {
        setEntity({ id: d.properties.id });
      })
      .on("keydown", (event, d) => {
        if (event.key === "Enter" || event.key === " ") {
          setEntity({ id: d.properties.id });
        }
      })
      .raise();        

    svg.selectAll("image.polygon-pin")
      .data(polygons)
      .enter()
      .append("image")
      .attr("class", "polygon-pin")
      .attr("href", "/pin.svg")
      .attr("width", pinWidth)
      .attr("height", pinHeight)
      .attr("transform", (d: any) => {
        let coords = d3.polygonCentroid(d.geometry.coordinates[0]);
        return `translate(${projection(coords)})`
      })
      .attr("role", "button")
      .attr("tabindex", "0")
      .attr("aria-label", (d: any) => `Location: ${d.properties.id || "Unknown"}`)
      .on("click", (event, d) => {
        setEntity({ id: d.properties.id });
      })
      .on("keydown", (event, d) => {
        if (event.key === "Enter" || event.key === " ") {
          setEntity({ id: d.properties.id });
        }
      }).raise(); 
  }
  };
    
    // Add zoom buttons rendering after renderPins()
    
    const renderZoomButtons = () => {
      // Determine button size based on screen width
      const buttonWidth = isScreenSmall ? 70 : 40;
      const buttonHeight = isScreenSmall ? 70 : 40;
      const margin = isScreenSmall ? 25 : 10;
    
      // Reset View Button
      svg.append("rect")
        .attr("class", "zoom-button reset-view")
        .attr("x", width - buttonWidth - margin)
        .attr("y", height - 3 * buttonHeight - 3 * margin)
        .attr("width", buttonWidth)
        .attr("height", buttonHeight)
        .attr("rx", 10)
        .attr("ry", 10).raise()
        .on("click", () => {
          // Reset rotation and scale
          projection.rotate([30, -30])
            .scale(initialScale);
          
          // Update all elements
          svg.selectAll("path").attr("d", (d: any) => path(d));
          svg.select(".globe").attr("r", initialScale);
          updatePins();
          
          // Resume rotation
          isRotationStopped = false;
          
          // Raise buttons to keep them clickable
          svg.selectAll(".zoom-button").raise();
          svg.selectAll(".zoom-button-text").raise();
        }).raise();
    
      // Reset icon (↻)
      svg.append("text")
        .attr("class", "zoom-button-text")
        .attr("x", width - buttonWidth/2 - margin)
        .attr("y", height - 3 * buttonHeight - 3 * margin + buttonHeight/2 + (isScreenSmall ? 12 : 7))
        .attr("text-anchor", "middle")
        .attr("font-size", isScreenSmall ? "24px" : "16px")
        .text("↻").raise();
    
      // Zoom In Button
      svg.append("rect")
        .attr("class", "zoom-button zoom-in")
        .attr("x", width - buttonWidth - margin)
        .attr("y", height - 2 * buttonHeight - 2 * margin)
        .attr("width", buttonWidth)
        .attr("height", buttonHeight)
        .attr("rx", 10)
        .attr("ry", 10)
        .on("click", (e) => {
          const currentScale = projection.scale();
          const newScale = Math.min(currentScale * 1.2, width);
          
          projection.scale(newScale);
          svg.selectAll("path").attr("d", (d: any) => path(d));
          svg.select(".globe").attr("r", newScale);
          updatePins();
          svg.selectAll(".zoom-button").raise();
          svg.selectAll(".zoom-button-text").raise();
        });
    
      svg.append("text")
        .attr("class", "zoom-button-text")
        .attr("x", width - buttonWidth/2 - margin)
        .attr("y", height - 2 * buttonHeight - 2 * margin + buttonHeight/2 + (isScreenSmall ? 12 : 7))
        .attr("text-anchor", "middle")
        .attr("font-size", isScreenSmall ? "24px" : "16px")
        .text("+");
    
      // Zoom Out Button
      svg.append("rect")
        .attr("class", "zoom-button zoom-out")
        .attr("x", width - buttonWidth - margin)
        .attr("y", height - buttonHeight - margin)
        .attr("width", buttonWidth)
        .attr("height", buttonHeight)
        .attr("rx", 10)
        .attr("ry", 10)
        .on("click", () => {
          const currentScale = projection.scale();
          const newScale = Math.max(currentScale / 1.2, initialScale * minZoom);
          
          projection.scale(newScale);
          svg.selectAll("path").attr("d", (d: any) => path(d));
          svg.select(".globe").attr("r", newScale);
          updatePins();
          svg.selectAll("rect").raise();
          svg.selectAll("text").raise();
        });
    
      svg.append("text")
        .attr("class", "zoom-button-text")
        .attr("x", width - buttonWidth/2 - margin)
        .attr("y", height - buttonHeight - margin + buttonHeight/2 + (isScreenSmall ? 12 : 7))
        .attr("text-anchor", "middle")
        .attr("font-size", isScreenSmall ? "24px" : "16px")
        .text("-");

    };
  
    
    loadData();
    loadGeojsonData();
    renderPins();
    renderZoomButtons();
    
    
    const updatePins = () => {
      svg.selectAll("image.point-pin")
        .attr("transform", (d: any) => {
          const coords = projection(d.geometry.coordinates);
          
          // Hide pins on the far side of the globe
          const visible = d3.geoDistance(projection.invert([width / 2, height / 2]), d.geometry.coordinates) < Math.PI / 2;
          
          if (visible && coords) {
            // If visible, show the pin and place it correctly
            return `translate(${coords[0] - pinWidth / 2}, ${coords[1] - pinHeight})`;
          } else {
            // Hide the pin by translating it far off-screen
            return `translate(-9999, -9999)`;
          }
        }).raise();

        svg.selectAll("image.polygon-pin")
        .attr("transform", (d: any) => {
          const coords = projection(d3.polygonCentroid(d.geometry.coordinates[0]));
          
          // Hide pins on the far side of the globe
          const visible = d3.geoDistance(projection.invert([width / 2, height / 2]), d3.polygonCentroid(d.geometry.coordinates[0])) < Math.PI / 2;
          
          if (visible && coords) {
            // If visible, show the pin and place it correctly
            return `translate(${coords[0] - pinWidth / 2}, ${coords[1] - pinHeight})`;
          } else {
            // Hide the pin by translating it far off-screen
            return `translate(-9999, -9999)`;
          }
        }).raise();
    };
    
    // Optional rotation function
    const rotateGlobe = () => {
      if (!isRotationStopped) {
        const rotate = projection.rotate();
        const k = sensitivity / projection.scale();
        projection.rotate([rotate[0] - 1 * k, rotate[1]]);

        // Update the map paths
        svg.selectAll("path").attr("d", (d: any) => path(d));

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

  // Stop rotation on first Tab key press
  const stopRotationOnTabPress = (event: KeyboardEvent) => {
    if (event.key === "Tab" && !isRotationStopped) {
      isRotationStopped = true;
      timer.stop(); // Stop rotation permanently
    }
  };

  // Add event listener for Tab key press
  document.addEventListener("keydown", stopRotationOnTabPress);
  stopRotationOnFirstInteraction();

  return () => {
    document.removeEventListener("keydown", stopRotationOnTabPress);
    document.removeEventListener("keydown", handleKeyPress);
    timer.stop();
  };

  }, [geojson]);

  type TEIProps = {
    teiNode: Node,
    availableRoutes?: string[],
  }
  const lang = language as Lang
  const startOpts: IOptions = {annosLang: lang, originalSpelling: false}
  const [displayOpts, setDisplayOpts] = React.useState(startOpts)
  
  const Title = (props: TEIProps) => <Typography variant="h3" component="h1" gutterBottom={false} sx={{
    marginBottom: "2rem"
  }}><SafeUnchangedNode {...props}/></Typography>
  const routes: Routes = {
    "tei-graphic": (props) => <Box sx={{textAlign: "center"}}><Graphic {...props}/></Box>,
    "tei-ref": Ref,
    "tei-q": (props) => <Q {...props} curLang={language}/>,
    "tei-placename": Title,
    "tei-title": (props) => {
      const el = props.teiNode as Element
      return el.parentElement?.getAttribute("type") === "periodical" ? <Title {...props}/>
      : <SafeUnchangedNode {...props}/>
    },
    // "tei-note": (props) => {
    //   const el = props.teiNode as Element
    //   if (el.getAttribute("xml:lang") === language) {
    //     return <SafeUnchangedNode {...props}/>
    //   }
    //   return null
    // },
    "tei-place": (props) => <EntitySimple isSynoptic={false} entityType={"tei-placeName"} {...props} />,
  }

  return (

    <>
    {isScreenSmall ? (
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4" component="h2" gutterBottom={false} sx={{
          marginBottom: "2rem", 
          marginTop: "2rem"
        }}>
          {language === "fr" ? "Carte du monde" : "Global Map Visualization"}
        </Typography>     
        <svg ref={svgRef}></svg>
        <DisplayContext.Provider value={{
              contextOpts: displayOpts,
              setContextOpts: setDisplayOpts
            }}>
              <EntityContext.Provider value={{ entity, setEntity }}>
                <Renderer name="mapnote" prefixed={prefixed} elements={elements} routes={routes} />
              </EntityContext.Provider>
            </DisplayContext.Provider>
      </div>
    ) : (
      <Grid2 container spacing={1}>
        <Grid2 size={3}>
        </Grid2>

        <Grid2 size={6} sx={{ textAlign: "center" }}>
          <Typography variant="h4" component="h2" gutterBottom={false} sx={{
            marginBottom: "2rem", 
            marginTop: "2rem"
          }}>
            {language === "fr" ? "Carte du monde" : "Global Map Visualization"}
          </Typography>     
          <svg ref={svgRef}></svg>
        </Grid2>

        <Grid2 size={3}>
          <div className="map-note-container">
            <DisplayContext.Provider value={{
              contextOpts: displayOpts,
              setContextOpts: setDisplayOpts
            }}>
              <EntityContext.Provider value={{ entity, setEntity }}>
                <Renderer name="mapnote" prefixed={prefixed} elements={elements} routes={routes} />
              </EntityContext.Provider>
            </DisplayContext.Provider>
          </div>
        </Grid2>
      </Grid2>
    )}
  </>
  );
};

export default GlobeMap;


