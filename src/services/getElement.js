import axios from 'axios';

const URL = "https://prueba-backends.herokuapp.com/" 

async function getElement() {

  //console.log("dummy", element);
    
      let response = await axios.get(URL);
      console.log("respuesta", response.data.elements.nodes);
      return (response.data.elements);
    


    //return elements;
  
}

export default getElement;