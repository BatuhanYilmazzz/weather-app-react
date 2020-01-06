import React from 'react';
import {
  WiCelsius,
  WiDayLightWind,
  WiCloud,
  WiStrongWind,
  WiHumidity
} from 'react-icons/wi';

const Weather = ({ city, country, temperature, description, error }) => {
  return country ? (
    <div className='weather'>
      <div className='others'>
        <div className='others-spec'>
          <WiCloud size={25} />
          <p>5</p>
        </div>
        <div className='others-spec'>
          <WiStrongWind />
          <p>6</p>
        </div>
        <div className='others-spec'>
          <WiHumidity />
          <p>6</p>
        </div>
      </div>
      <div className='temp'>
        <h1 className='temp-degree'>{temperature}</h1>
        <WiCelsius size={60} />
      </div>
      <div className='city-name'>
        <h2>
          {city}, {country}
        </h2>
      </div>

      <div>
        <h1>{description}</h1>
        <WiDayLightWind size={100} />
      </div>
    </div>
  ) : null;
};

export default Weather;
