import React from 'react';

const Form = ({ getWeather }) => {
  return (
    <form className='form' onSubmit={getWeather} autoComplete='off'>
      <input
        type='text'
        name='city'
        placeholder='Enter City'
        className='city'
        required
      />
      <input
        type='text'
        name='country'
        placeholder='Enter Country'
        className='country'
        required
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
