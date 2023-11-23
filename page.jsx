"use client"
import React, { useState, useEffect } from 'react';
import TopNav from './Components/TopNav';
import MainTemp from './Components/MainTemp';
import AirCon from './Components/AirCon';
import Loading from './Components/Loading';
import axios from 'axios';
import Forecast from './Components/WeatherForecast';
import Modal from './Components/ErrorModal';

export default function Home() {
  const [currentCity, setCurrentCity] = useState('banjul');
  const [weatherData, setWeatherData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);
  const [weatherForecastData, setWeatherForecastData] = useState(null);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const apiKey = '1e76f4166e7ac1e5f82edde1a9d5433b';

  async function getCurrentLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject('Geolocation is not supported by this browser.');
      }
    });
  }

  //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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const location = await getCurrentLocation();
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
        setModalOpen(false);
      } catch (error) {
        console.log("There is a error")
        setError('City not found. Please check the city name.');
        setModalOpen(true);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=${apiKey}&units=metric`
        );
        setWeatherForecastData(response.data);
        setModalOpen(false);
    }

    fetchData();
  }, [currentCity]);

  return (
    <main className="flex flex-col">
      <TopNav
        weatherData={weatherData}
        setWeatherData={setWeatherData}
        currentCity={currentCity}
        setCurrentCity={setCurrentCity}
        isCelsius={isCelsius}
        setIsCelsius={setIsCelsius}
      />
      <div>
        {weatherData && weatherForecastData ? (
          <div className="flex flex-col">
            <MainTemp
              currentCity={currentCity}
              setCurrentCity={setCurrentCity}
              weatherData={weatherData}
              setWeatherData={setWeatherData}
              isCelsius={isCelsius}
              setIsCelsius={setIsCelsius}
            />
            <AirCon
              weatherData={weatherData}
              setWeatherData={setWeatherData}
              currentCity={currentCity}
              setCurrentCity={setCurrentCity}
              isCelsius={isCelsius}
              setIsCelsius={setIsCelsius}
            />
            <Forecast
              currentCity={currentCity}
              weatherForecastData={weatherForecastData}
              isCelsius={isCelsius}
              setIsCelsius={setIsCelsius}
            />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </main>
  );
}
