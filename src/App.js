import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'a019bdabf006a82f9325c183cfe1eb84';

function App() {
  const [weather, setWeather] = useState([]);

  async function fetchData(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`
    )
      .then(res => res.json())
      .then(data => data);

    setWeather({
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(300 - data.main.temp),
      description: data.weather[0].description,
      error: ''
    });
  }

  return (
    <div className='App'>
      <div className='app-wrapper'>
        <Form getWeather={fetchData} />
        <Weather
          city={weather.city}
          country={weather.country}
          temperature={weather.temperature}
          description={weather.description}
          error={weather.error}
        />
      </div>
    </div>
  );
}

export default App;
