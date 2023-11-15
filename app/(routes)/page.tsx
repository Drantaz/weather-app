"use client";
import DataCards from "./components/DataCards";
import LeftSide from "./components/LeftSide";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import ForecastCard from "./components/ForecastCard";
import { CurrentData, Data, ForecastData } from "./interfaces";
import ThemeData from "./components/Theme";

export default function Home() {
  const [weather, setWeather] = useState<Data[]>([]);
  const [forecast, setForcast] = useState<ForecastData[]>([]);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    city: ""
  });

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (data.city.trim()) {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=29917a3810e9bd49c7f25d0c905eaa18&units=metric`
      );
      setWeather(response.data);
      forcastData();
    } catch (error) {
        console.log("Something went wrong");
    } finally {
      setLoading(false);
    }}
  };

  const forcastData = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${data.city}&appid=29917a3810e9bd49c7f25d0c905eaa18&units=metric`
    );

    const lists = response.data.list;
    const foundDates = [new Date().toLocaleString("lt").split(" ")[0]];
    const first5 = [];

    for (let i = 0; i < lists.length; i++) {
      const obj = lists[i];
      const date_txt = obj.dt_txt.split(" ")[0];
      if (!foundDates.includes(date_txt)) {
        foundDates.push(date_txt);
        first5.push(obj);
        if (first5.length === 5) {
          break;
        }
      }
    }

    setForcast(first5);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center w-full px-10 py-3 ">
        <h3 className="font-bold text-2xl uppercase dark:text-yellow-500">
          Weather Wise
        </h3>
        <ThemeData />
      </div>
      <div className="grid grid-cols-5 max-sm:flex-col max-sm:flex  justify-center items-center">
        <div className="border-gray-200 border-r col-span-1 max-sm:border-none max-md:col-span-2">
          <div className="mt-2 px-9 max-sm:px-2">
            <form onSubmit={onSubmit}>
              <Input
                type="search"
                placeholder="Banjul, The Gambia"
                name="city"
                value={data.city}
                onChange={handleChange}
              />
            </form>
          </div>
          <LeftSide data={weather}  state={loading}/>
        </div>

        <div className="col-span-4 max-md:col-span-3 max-w-md:gri  dark:bg-background bg-gray-200 max-sm:bg-white">
          
          <ForecastCard data={forecast} state={loading} />
          <DataCards data={weather} state={loading} />
        </div>
      </div>
    </div>
  );
}
