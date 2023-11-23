import React from 'react';
import Image from 'next/image';
import moment from 'moment';

const MainTemp = ({ weatherData, setWeatherData, location, setLocation, setError, error, setIsLoading, isCelsius, setIsCelsius }) => {
  const temperatureInCelsius = Math.round(weatherData.main.temp);
  const temperatureInFahrenheit = Math.round((temperatureInCelsius * 9) / 5 + 32);

  const getTemperature = () => {
    return isCelsius ? temperatureInCelsius : temperatureInFahrenheit;
  };

  const getTemperatureUnit = () => {
    return isCelsius ? '°C' : '°F';
  };

  return (
    <div className='flex flex-col md:flex-row gap-4  md:px-6 items-center bg-blue-300 justify-between'>
      <div className='flex flex-col justify-start items-center max-sm:mt-6'>
        <h2 className="main-city text-gray-950 lg:text-8xl md:text-5xl pb-3 font-bold max-sm:mb-3 text-center max-sm:text-4xl max-md:mb-3">{weatherData.name}, {weatherData.sys.country}</h2>
        <p className="date-time pb-4 md:text-2xl text-center text-2xl">
          {moment(weatherData.dt).format('dddd')}</p>
        <h4 className="weather lg:text-4xl w-[400px] px-4 md:text-2xl md:text-center md:mt-2 max-sm:text-center bg-blue-400 rounded-2xl max-sm:mt-6 text-white font-semibold">{weatherData.weather[0].description}</h4>
      </div>
      <div className=''>
        <Image width={300} height={300} className='weather-icon lg:w-[350px] md:w-[200px]' src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt='' />
      </div>
      <div className='flex flex-col items-center'>
        <h1 className="main-temp text-4xl max-sm:text-6xl max-sm:bg-blue-400 max-sm:rounded-full py-1 px-4 text-white">{getTemperature()}{getTemperatureUnit()}</h1>
      </div>
    </div>
  );
};

export default MainTemp;
