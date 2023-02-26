function Card(props) {
    return (
        <div className="Card">
            <div className='Img-box'>
                <img className="Card-img" src={require('./bordeaux.jpg')} alt="card image"/>
            </div>
            <div className='Content-box'>
                <div className='Content-top'>
                    <img className="Location-icon" src={require('./location.png')} alt="location icon"/>
                    <h5 className='Card-country'>France</h5>
                    <a className='Card-location' href=''>View on Google Map</a>
                </div>
                <h3 className='Card-place'>
                    Bordeaux
                </h3>
                <strong><p className='Card-date'>1 September 2019 - 22 December 2019</p></strong>
                <p className='Card-story'></p>
            </div>
            
        </div>
    )
}

export default Card;