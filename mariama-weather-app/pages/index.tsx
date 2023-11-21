import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "@/styles/Home.module.css";
import { CurrentWeather, FiveDaysWeather, NextHoursData } from "@/Types";
import Image from "next/image";
import moment from "moment";
import Swal from "sweetalert2";
import Loader from "@/components/Loader";
export default function Home() {
  const [searchCity, setSearchCity] = useState("serrekunda");
  const [currentWeatherData, setCurrentWeatherData] =
    useState<CurrentWeather>();
  const [fiveDaysWeatherData, setFiveDaysWeatherData] =
    useState<Array<FiveDaysWeather>>();
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [nextHoursData, setNextHoursData] = useState<Array<NextHoursData>>();
  const [weatherDescription, setWeatherDescription] = useState("");

  const fetchWeatherData = async () => {
    try {
      setIsLoading(true);
      const apiCalls = [
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=23ed9db8277bbc103bc03928c1cd2c33`
        ),
        axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=23ed9db8277bbc103bc03928c1cd2c33`
        ),
      ];

      const [currentWeather, nextDaysWeather] = await Promise.all(apiCalls);
      setCurrentWeatherData(currentWeather.data);
      const description = currentWeatherData?.weather[0].description.toString();

      const lists = nextDaysWeather.data.list;
      const hoursData = lists.slice(0, 6);
      setWeatherDescription(currentWeatherData?.weather[0].description || "");
      setNextHoursData(hoursData);
      console.log(nextHoursData);
      const first5: FiveDaysWeather[] = [];
      const foundDates: string[] = [
        new Date().toLocaleString("lt").split(" ")[0],
      ];

      for (let i = 0; i < lists.length; i++) {
        const obj = lists[i];
        const date_txt = obj.dt_txt.split(" ")[0];
        if (!foundDates.includes(date_txt)) {
          foundDates.push(date_txt);
          first5.push(obj);
        }
        if (first5.length === 5) break;
      }

      setFiveDaysWeatherData(first5);
      setIsLoading(false);
      setNotFound(false);
    } catch (error) {
      setNotFound(true);
      Swal.fire({
        title: "Error!",
        text: "City Not found",
        icon: "error",
      });
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const tempratureConvert = (temperatureInFahrenheit: any) => {
    return Math.round(temperatureInFahrenheit - 273.15);
  };

  const keyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchWeatherData();
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.container}>
        <div className={styles.firstContainer}>
          <div className={styles.first_one}>
            <div className={styles.search}>
              <input
                className={styles.custom_input}
                type="text"
                name="searchCity"
                id="searchCity"
                required
                autoFocus
                placeholder="Search City Name"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                onKeyPress={keyPress}
              />
            </div>
            <div className={styles.imageContainer}>
              {" "}
              <Image
                alt={`${currentWeatherData?.weather[0]?.description}`}
                src={`https://openweathermap.org/img/w/${currentWeatherData?.weather[0]?.icon}.png`}
                height={200}
                width={200}
              />
            </div>
            <div className={styles.currentWeather_one}>
              <h2>
                {" "}
                <i className="fas fa-map-marker-alt"></i>
                {currentWeatherData?.name}
              </h2>
              <div className={styles.temperatureContainer}>
                <p className={styles.temperature}>
                  {tempratureConvert(currentWeatherData?.main?.temp)}°C
                </p>
              </div>
              <p className={styles.date}>
                {currentWeatherData?.dt &&
                  moment.unix(currentWeatherData.dt).format("dddd, h:mm A")}
              </p>
            </div>
          </div>
          <div className={styles.highlight}>
            <h2>Today's Highlight</h2>
            <div className={styles.highlight_data}>
              <p>
                <i className="fas fa-tint"></i> Humidity:{" "}
                {currentWeatherData?.main.humidity} %
              </p>
              <p>
                <i className="fas fa-wind"></i> Wind:{" "}
                {currentWeatherData?.wind.speed} km/hr
              </p>
              <p>
                <i className="fas fa-cloud-sun"></i> Sunrise:{" "}
                {currentWeatherData?.sys.sunrise &&
                  moment.unix(currentWeatherData.sys.sunrise).format("h:mm A")}
              </p>
              <p>
                <i className="fas fa-cloud-sun"></i> Sunset:{" "}
                {currentWeatherData?.sys.sunset &&
                  moment.unix(currentWeatherData.sys.sunset).format("h:mm A")}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.second_container}>
          <div className={styles.hours_container}>
            {/* <div className={styles.hours_heading_text}> */}
            <h2>{currentWeatherData?.weather[0].description}</h2>
            {/* </div> */}
            <div>
              {" "}
              {nextHoursData?.map((day, index) => (
                <div className={styles.hours_info} key={index}>
                  <p>{moment(day.dt_txt).format("h:mm A")}</p>
                  <i className="fas fa-cloud"></i>
                  <p> {tempratureConvert(day.main.temp)}°C</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.next_days_container}>
            <div className={styles.next_days_heading}>
              <h1>Next Days Forcast</h1>
            </div>
            <div className={styles.next_days}>
              <div className={styles.next_days_data}>
                {fiveDaysWeatherData?.map((day, index) => (
                  <div className={styles.dayContainer} key={index}>
                    <div className={styles.weatherInfo}>
                      <h2>{moment(day.dt_txt).format("dddd")}</h2>
                      <div className={styles.imageContainer}>
                        <img
                          src={`https://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                          alt={day.weather[0].description}
                          width={100}
                          height={100}
                        />
                      </div>
                      <p>{day.weather[0].description}</p>
                      <p>
                        {tempratureConvert(day.main.temp_min)}°C -{" "}
                        {tempratureConvert(day.main.temp_max)}°C
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
