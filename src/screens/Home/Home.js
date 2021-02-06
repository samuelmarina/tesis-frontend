import React, { useEffect, useState } from "react";
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
  var state = {
    w: 2000,
    h: 2000,
    layout: {
      name: "random",
      padding: 20,
    },
    stylesheet: [
      {
        selector: "node",
        style: {
          content: "data(id)",
          width: 5,
          height: 5,
        },
      },
      {
        selector: "edge",
        style: {
          width: 2,
          content: "data(id)",
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

  const [elementos, setElementos] = useState({});
  const [load, setLoad] = useState(false);

  async function prueba() {
    const firstCall = await getElement();
    console.log("first", firstCall);
    setElementos(firstCall);
    setLoad(true);
  }

  useEffect(() => {
    const el = prueba();
    setElementos(el);
  }, []);

  return (
    <>
      {load ? (
        <CytoscapeComponent
          id="component"
          elements={CytoscapeComponent.normalizeElements(elementos)}
          style={{ width: state.w, height: state.h }}
          layout={state.layout}
          stylesheet={state.stylesheet}
          cy={(cy) => {
            getCy(cy);
          }}
        />
      ) : (
        "not"
      )}
    </>
  );
}

export default Home;
