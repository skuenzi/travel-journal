import {MdLocationOn} from 'react-icons/md'

export default function Card ({title,location,googleMapsUrl,startDate,endDate,description,imagePath}) {
    return (
        <article className='card'>
            <img src={imagePath} alt={title} className="card-img"/>
            <div className='card-info'>
                <div className="location-info">
                    <MdLocationOn className='location-icon'/>
                    <h6 className='location'>{location}</h6>
                    <a href={googleMapsUrl} className='maps-link'>View On Google Maps</a>
                    
                </div>

                <h2 className='card-title'>{title}</h2>
                
                <div className='card-text'>
                    <p className="card-date"><strong>
                        {startDate}
                        {endDate && ' - '}
                        {endDate}
                    </strong></p>
                    <p className="card-description">{description}</p>
                </div>
                
            
            </div>
            
        </article>
    )
}