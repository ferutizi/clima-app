import './Card.scss'; 
import Elements from './Elements';

const Card = ({ location }) => {

    const speedWind = (speedMeters) => {
        const speedKilometres = speedMeters * 3.6;
        return speedKilometres.toFixed(1).replace(/\.0+$/,'');
    }

    const speed = speedWind(location.wind?.speed);
    const tempMin = location.main?.temp_min.toFixed(1);
    const tempMax = location.main?.temp_min.toFixed(1);

    return(
        <div className="city__results">
            <h3>{location.name} - {location.sys?.country}</h3>
            <div className='elements'>
                <Elements
                    elementName={'min'}
                    elementDescription={`${tempMin} °C`} 
                />
                <Elements
                    elementName={'max'}
                    elementDescription={`${tempMax} °C`} 
                />
                <Elements
                    elementName={''}
                    elementDescription={location.weather[0]?.description} 
                />
                <Elements
                    elementName={'wind'}
                    elementDescription={`${speed} Km/s`} 
                />
            </div>
        </div>
    )
}

export default Card;