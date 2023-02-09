import React from 'react';
import LocationData from '../../data/contact/LocationData.json';

const allData = LocationData;

const ContactLocation = () => {
    return (
        <>{allData.map((data, index) => (
                <div className="col-lg-12 col-sm-6" key={index}>
                    <div className="office-location">
                        <div className="thumbnail">
                            <img src={process.env.PUBLIC_URL + data.thumb} alt="Office" />
                        </div>
                        <div className="content">
                            <h4 className="title">{data.title}</h4>
                            <p>{data.address} <br></br> {data.ville} <br></br> {data.phone}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ContactLocation;