import './PintarDatos.scss';
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const PintarDatos = ({ city }) => {
    const ApiKey = '8e528f7d99d090ddff876a4c57f4ea74';
    const [location, setLocation] = useState({});

    useEffect(() => {
        ConsumirApi(city);
    },[city]);

    const ConsumirApi = async (city) => {
        if(city)
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`)
            const data = await res.json();
            setLocation(data);
            if(!res.ok) {
                return alert('la ciudad especificada no se ha encontrado')
            }
        } catch (error) {
            console.log(error);
        } finally {

        }
    }

    return(
        <div className="city__card" >
        <img className="card__img" src={require('../img/sky.jpg')} />
            {location.name
                ? <Card location={location} />
                : null
            }
        </div>
    )
}

export default PintarDatos;