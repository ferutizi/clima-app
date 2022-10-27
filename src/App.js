import { useState } from "react";
import Formulario from "./components/Formulario";

function App() {
  const ApiKey = '8e528f7d99d090ddff876a4c57f4ea74';
  const [city, setCity] = useState('');

  const ConsumirApi = async () => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`)
      const data = await res.json();
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }

/*   ConsumirApi(); */
  return (
    <div className="App">
      <Formulario setCity={setCity}></Formulario>
    </div>
  );
}

export default App;
