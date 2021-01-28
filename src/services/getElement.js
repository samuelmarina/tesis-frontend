import axios from 'axios';

const URL = "https://prueba-backends.herokuapp.com/" 

async function getElement( ) {
  
    
      let response = await axios.get(URL);
      console.log("respuesta", response.data.elements);
      return (response.data.elements);
    

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

    //return elements;
  
}

export default getElement;