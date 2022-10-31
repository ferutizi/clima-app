import './Elements.scss';

const Elements = ({ elementName, elementDescription }) => {
    return(
        <div className="element__container">
            <p className='element__name'>{elementName}</p>
            <p className='element__description'>{elementDescription}</p>
        </div>
    )
} 

export default Elements;