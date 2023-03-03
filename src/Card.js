function Card(props) {
    return (
        <div className="Card">
            <div className='Img-box'>
                <img className="Card-img" src={`./${props.item.img}`} alt="card image"/>
            </div>
            <div className='Content-box'>
                <div className='Content-top'>
                    <img className="Location-icon" src={require('./location.png')} alt="location icon"/>
                    <h5 className='Card-country'>{props.item.location.country}</h5>
                    <a className='Card-location' href={props.item.location.map}>View on Google Map</a>
                </div>
                <h3 className='Card-place'>
                    {props.item.location.place}
                </h3>
                <strong><p className='Card-date'>{props.item.date}</p></strong>
                <p className='Card-story'>{props.item.story}</p>
            </div> 
        </div>
    );
}

export default Card;