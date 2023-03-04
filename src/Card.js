function Card(props) {
    return (
        <div className="Card">
            <div className='Img-box'>
                <img className="Card-img" src={`../imgs/${props.item.img}`} alt="card image" />
            </div>
            <div className='Content-box'>
                <div className='Content-top'>
                    <img className="Location-icon" src={require('./location.png')} alt="location icon" />
                    <h4 className='Card-country'>{props.item.location.country}</h4>
                    <a className='Card-location' href={props.item.location.map}>View on Google Map</a>
                </div>
                <h1 className='Card-place'>
                    {props.item.location.place}
                </h1>
                <strong><p className='Card-date'>{props.item.date}</p></strong>
                <p className='Card-story'>{props.item.story}</p>
            </div> 
        </div>
    );
}

export default Card;