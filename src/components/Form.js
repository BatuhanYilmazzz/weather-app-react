import React, { useState } from 'react';
import axios from 'axios';
import Weather from './Weather';



const Form = () => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const fetchData = e => {
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`
      )
      .then(res =>
        setWeather({
          city: res.data.name,
          country: res.data.sys.country,
          temperature: Math.round(res.data.main.temp - 273.15),
          description: res.data.weather[0].description,
          windSpeed: res.data.wind.speed,
          cloud: res.data.clouds.all,
          humidity: res.data.main.humidity,
          main: res.data.weather[0].main,
          error: ''
        })
      )
      .catch(error =>
        setWeather({
          error: 'Please Type Correctly'
        })
      );
    setCity('');
    setCountry('');
  };

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
        main={weather.main}
        error={weather.error}
      />
    </React.Fragment>
  );
};

export default Form;
