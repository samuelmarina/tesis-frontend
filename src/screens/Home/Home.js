import React from "react";
import CytoscapeComponent from "react-cytoscapejs";
//import axios from "axios";
//import cytoscape from "cytoscape";
import getElement from "../../services/getElement";
//import Sidebar from '../../components/Sidebar/Sidebar';

//const dummydata = ["Grafo 1", "Grafo 2", "Grafo 3"];

/** Componente que representa la página
 *  principal de navegación
 */
function Home() {
  let cyto;

  let elements = {
    edges: [
      {
        data: {
          source: "one",
          target: "two",
          label: "Edge from Node1 to Node2",
        },
      },
    ],
    nodes: [
      { data: { id: "one", label: "Node 1" } },
      { data: { id: "two", label: "Node 2" } },
    ],
  };

  var state = {
    w: 800,
    h: 600,
    layout: {
      name: "random",
    },
    stylesheet: [
      {
        selector: "node",
        style: {
          content: "data(id)",
          width: 20,
          height: 20,
        },
      },
      {
        selector: "edge",
        style: {
          width: 5,
          content: "data(label)",
          "curve-style": "bezier",
          "target-arrow-shape": "triangle",
          "line-color": "#ddd",
          "target-arrow-color": "#ddd",
        },
      },
    ],
  };

  function getCy(cy) {
    cyto = cy;
    cyto.style().selector("node").style("background-color", "magenta").update(); // indicate the end of your new stylesheet so that it can be updated on elements
  }

  async function prueba() {
    const firstCall = await getElement();
    //console.log("first", firstCall);
    return firstCall;
  }

  return (
    <>
      <CytoscapeComponent
        id="component"
        elements={CytoscapeComponent.normalizeElements(prueba())} 
        style={{ width: state.w, height: state.h }}
        layout={state.layout}
        stylesheet={state.stylesheet}
        cy={(cy) => {
        getCy(cy);
        }}
      />
    </>
  );
}

export default Home;
