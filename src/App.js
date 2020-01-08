import React from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {
  return (
    <div className='App'>
      <div className='app-wrapper'>
        <Form />
        <Weather />
      </div>
    </div>
  );
}

export default App;
