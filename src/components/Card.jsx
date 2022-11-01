import './Card.scss'; 
import Elements from './Elements';

const Card = ({ location }) => {
    return(
        <div className="city__results">
            <h3>{location.name} - {location.sys?.country}</h3>
            <div className='elements'>
                <Elements
                    elementName={'min'}
                    elementDescription={`${location.main?.temp_min} °C`} 
                />
                <Elements
                    elementName={'max'}
                    elementDescription={`${location.main?.temp_max} °C`} 
                />
                <Elements
                    elementName={''}
                    elementDescription={location.weather[0]?.description} 
                />
                <Elements
                    elementName={'wind'}
                    elementDescription={`${location.wind?.speed} Km/h`} 
                />
            </div>
        </div>
    )
}

export default Card;