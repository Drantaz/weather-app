import React from 'react';
import { PiThermometerBold } from "react-icons/pi";
import { FaWind } from "react-icons/fa6";
import { FaGauge } from "react-icons/fa6";
import { BsDropletHalf } from "react-icons/bs";

const AirCon = ({ weatherData, setWeatherData, currentCity, setCurrentCity, isCelsius }) => {
  const realFeelCelsius = Math.round(weatherData.main.feels_like);
  const realFeelFahrenheit = Math.round((realFeelCelsius * 9) / 5 + 32);

  return (
    <div className="flex flex-col gap-12 px-[100px] sm:px-[50px] mt-5 py-6">
      <div className="flex w-full justify-between items-center flex-wrap max-sm:justify-center sm:gap-4">
        <div className="flex gap-3 max-sm:mb-6">
          <PiThermometerBold size={50} />
          <div>
            <h4 className='text-3xl text-gray-400 sm:text-2xl'>Real feel</h4>
            <h2 className='text-2xl'>
              {isCelsius ? `${realFeelCelsius}°C` : `${realFeelFahrenheit}°F`}
            </h2>
          </div>
        </div>
        <div className="flex gap-3 max-sm:mb-6">
          <FaWind size={50} />
          <div>
            <h4 className='text-3xl text-gray-400 sm:text-2xl'>Wind</h4>
            <h2 className='text-2xl'>{weatherData.wind.speed} km/h</h2>
          </div>
        </div>
        <div className="flex gap-3">
          <FaGauge size={50} />
          <div>
            <h4 className='text-3xl text-gray-400 sm:text-2xl'>Pressure</h4>
            <h2 className='text-2xl'>{weatherData.main.pressure}Pa</h2>
          </div>
        </div>
        <div className="flex gap-3">
          <BsDropletHalf size={50} />
          <div>
            <h4 className='text-3xl text-gray-400 sm:text-2xl'>Humidity</h4>
            <h2 className='text-2xl'>{weatherData.main.humidity}%</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirCon;
