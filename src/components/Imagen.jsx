import './Imagen.scss';

const Imagen = ({ sky }) => {

    const Img = (sky) => {
        console.log(sky)
        if(sky == 'clear sky') {
            return 'sun';
        } else if(sky == 'overcast cloud' || sky == 'broken clouds'){
            return 'clouds';
        } else if(sky == 'rain' || sky == 'moderate rain') {
            return 'rain';
        } else {
            return 'cloudy';
        }
    }    
    
    const tiempo = Img(sky);

    return(
        <img src={require(`../img/${tiempo}.png`)} className="img"/>
    )
}

export default Imagen;