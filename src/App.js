import './App.scss';
import { useState } from "react";
import Formulario from "./components/Formulario";
import PintarDatos from "./components/PintarDatos";

function App() {
  const [city, setCity] = useState();
  
  return (
    <div className="App">
      <img className="fondo" src={require('./img/sky.jpg')}></img>
      <div className="card__container">
        <div className='card'>
          <Formulario setCity={setCity}></Formulario>
          <PintarDatos city={city} />
        </div>
      </div>
    </div>
  );
}

export default App;
