const Card = ({ location }) => {
    return(
        <div className="city__card">
            <h3>{location.name} - {location.sys?.country}</h3>
            <div>
                <p>minima:{location.main?.temp_min}</p>
                <p>maxima:{location.main?.temp_max}</p>
                <p>nubes:{location.weather[0]?.description}</p>
                <p>viento:{location.wind?.speed}</p>
            </div>
        </div>
    )
}

export default Card;