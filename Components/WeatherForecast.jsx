import React from 'react';
import Image from 'next/image';
import moment from 'moment';

const Forecast = ({ weatherForecastData, isCelsius }) => {
  const first5Forecast = weatherForecastData
    ? weatherForecastData.list.reduce((acc, current) => {
        const date_txt = current.dt_txt.split(" ")[0];
        if (!acc.foundDates.includes(date_txt)) {
          acc.foundDates.push(date_txt);
          acc.first5.push(current);
        }
        return acc;
      }, { foundDates: [new Date().toLocaleString("lt").split(" ")[0]], first5: [] }).first5
    : [];

  return (
    <div className="flex flex-col gap-4 lg:px-10 sm:px-8 md:px-8 px-2 py-6 bg-blue-300 justify-center items-center">
      <h2 className='text-3xl font-bold text-gray-600 pb-3 sm:text-center'>5-Day Weather Forecast</h2>
      <div className='flex w-full justify-between items-center flex-wrap text-center'>
        {first5Forecast.map((forecast, index) => (
          <div key={index} className="font-bold max-sm:w-[50%] max-sm:h-[310px] max-sm:ring-2 max-sm:ring-white max-sm:mb-6 p-2">
            <p className='text-2xl'>{moment(forecast.dt_txt).format('dddd')}</p>
            <Image width={150} height={150} className='max-sm:mx-auto' src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt='' />
            <p className='forecast-text'>{isCelsius ? `${Math.round(forecast.main.temp)}°C` : `${Math.round((forecast.main.temp * 9) / 5 + 32)}°F`}</p>
            <p className='forecast-text'>{forecast.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
