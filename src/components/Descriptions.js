import React from 'react';
import "./Descriptions.css";


function Descriptions({ weather }) {

    const cards = [
        {
            id: 1,
            icon: <i class="uil uil-temperature-half"></i>,
            title: "Real-felt",
            data: weather.feels_like.toFixed(),
            unit: "°C",
        },
        {
            id: 2,
            icon: <i class="uil uil-tear"></i>,
            title: "Humidity",
            data: weather.humidity,
            unit: "%",
        },
        {
            id: 3,
            icon: <i class="uil uil-wind"></i>,
            title: "Wind",
            data: weather.speed.toFixed(),
            unit: "m/s",
        },
        {
            id: 4,
            icon: <i class="uil uil-cloud-showers"></i>,
            title: "Pressure",
            data: weather.pressure,
            unit: "hPa",
        },
    ];


    return (
        <>
            <div className='description'>
                <div className='description-card'>
                    {cards.map(item => (
                        <div key={item.id} className='card-icon'>
                            {item.icon}
                            <br />
                            <small>{item.title}</small>
                            <br />
                            <h2>{`${item.data}${item.unit}`}</h2>
                        </div>
                    ))
                    }

                </div>
            </div>
        </>
    );
}

export default Descriptions;