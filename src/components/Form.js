import React, { useState } from 'react';
import Weather from './Weather';

const API_KEY = 'a019bdabf006a82f9325c183cfe1eb84';

const Form = () => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  async function fetchData(e) {
    e.preventDefault();
    setCity('');
    setCountry('');
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`
    )
      .then(res => res.json())
      .then(data =>
        setWeather({
          city: data.name,
          country: data.sys.country,
          temperature: Math.round(data.main.temp - 273.15),
          description: data.weather[0].description,
          windSpeed: data.wind.speed,
          cloud: data.clouds.all,
          humidity: data.main.humidity,
          error: ''
        })
      )
      .catch(error =>
        setWeather({
          error: 'Please Type Correctly'
        })
      );
  }

  return (
    <React.Fragment>
      <form className='form' onSubmit={fetchData} autoComplete='off'>
        <input
          type='text'
          placeholder='City'
          className='city'
          required
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <input
          value={country}
          onChange={e => setCountry(e.target.value)}
          type='text'
          placeholder='Country'
          className='country'
          required
        />
        <button type='submit'>Submit</button>
      </form>
      <Weather
        city={weather.city}
        country={weather.country}
        temperature={weather.temperature}
        description={weather.description}
        windSpeed={weather.windSpeed}
        cloud={weather.cloud}
        humidity={weather.humidity}
        error={weather.error}
      />
    </React.Fragment>
  );
};

export default Form;
