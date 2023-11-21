import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import Image from "next/image";
import { ForecastCardProps } from "../interfaces";
import { Skeleton } from "@/components/ui/skeleton";

const ForecastCard = ({ data, state }: ForecastCardProps) => {
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };


  const dummyData = Array.from({ length: 5 }, (_, index) => ({
    dt: Date.now() + index * 86400000,
    weather: [{ icon: "01d", description: "Clear Sky" }],
    main: { temp: 25 + index }
  }));

  const forecastData = data.length > 0 ? data : dummyData;

  return (
    <>
    <div className="flex justify-between px-5 pt-3 ">
    <p className="font-bold text-xl uppercase max-md:text-l">Weather Forecast</p>
    <p>{""}</p>
  </div>
    <div className="grid grid-cols-5 gap-4 px-5 py-3 max-sm:grid-cols-3">
      {forecastData.map((forecast, index) => (
        <Card key={index}>
          <CardHeader>
            <CardDescription className="text-center flex justify-center sm:text-sm">
              {state ? (
                <Skeleton className="h-4 w-full bg-gray-300" />
              ) : (
                formatDate(forecast.dt)
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
              {state ? (
                <Skeleton className="h-12 w-12 rounded-full bg-gray-300" />
              ) : (
                <Image
                  src={`https://openweathermap.org/img/wn/${forecast.weather[0]?.icon}@2x.png`}
                  height={100}
                  width={100}
                  alt="image"
                  className="object-cover"
                />
              )}
            </div>
          </CardContent>
          <CardFooter className="justify-center">
          {state ? (
  <Skeleton className="h-4 w-full bg-gray-300" />
) : (
  `${Math.round(forecast.main?.temp)}°C`
)}
          </CardFooter>
        </Card>
      ))}
    </div>
    </>
  );
};

export default ForecastCard;
