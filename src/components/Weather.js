import React from 'react';
import {
  WiCelsius,
  WiCloud,
  WiCloudy,
  WiStrongWind,
  WiHumidity,
  WiDayHaze,
  WiRain,
  WiSnow
} from 'react-icons/wi';
import '../App.css';

const Weather = ({
  city,
  country,
  temperature,
  description,
  windSpeed,
  cloud,
  humidity,
  main,
  error
}) => {
  let weat;
  if (main === 'Clouds') {
    weat = <WiCloudy size={150} />;
  } else if (main === 'Rain') {
    weat = <WiRain size={150} />;
  } else if (main === 'Snow') {
    weat = <WiSnow size={150} />;
  } else {
    weat = <WiDayHaze size={150} />;
  }
  return country ? (
    <div className='weather'>
      <div className='others'>
        <div className='others-spec'>
          <WiCloud size={35} />
          <p>{cloud}%</p>
        </div>
        <div className='others-spec'>
          <WiStrongWind size={35} />
          <p>{windSpeed}</p>
        </div>
        <div className='others-spec'>
          <WiHumidity size={35} />
          <p>{humidity}</p>
        </div>
      </div>
      <div className='temp'>
        <h1 className='temp-degree'>{temperature}</h1>
        <WiCelsius size={60} />
      </div>
      <div className='city-name'>
        <h1>
          {city}, {country}
        </h1>
        <p className='description'>{description}</p>
      </div>
      <div className='weather-sit'>{weat}</div>
    </div>
  ) : (
    <div>
      <br />
      <br />
      <h1>{error}</h1>
    </div>
  );
};

export default Weather;
