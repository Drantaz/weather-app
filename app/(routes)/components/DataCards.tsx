import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { FormatTime } from "@/helper/conver";
import Image from "next/image";
import { CurrentData } from "../interfaces";


const DataCards = ({data ,state}:CurrentData) => {
  const { visibility, main, wind, clouds, sys } = data;

  return (
    <>
    
      <div className="flex justify-between px-5 ">
        <p className="font-bold text-xl uppercase max-md:text-l">Today Highlights</p>
        <p>{""}</p>
      </div>

      <div className="grid grid-cols-3   gap-x-4 gap-y-4 max-sm:gap-2 px-5  py-4 max-md:text-sm max-sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardDescription className="max-sm:text-[12px]">{state ?  <Skeleton className="h-4 w-5/12 bg-gray-300" /> :"Wind Status"}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around  ">
                {
                    state? <Skeleton className="h-4 w-5/12 bg-gray-300" /> :<p><span className="font-bold text-xl max-md:text-sm">{ wind ?`${wind?.speed}Km/h`:"30Km/h"} </span> </p>
                }
    
              {
                state ? <Skeleton className="h-12 w-12 rounded-full bg-gray-300" />:
              <Image
                src="/images/mist.png"
                height={50}
                width={50}
                alt="cloud"
              />
}
            </div>
          </CardContent>
        
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>{state ?  <Skeleton className="h-4 w-5/12 bg-gray-300" /> :"Humidity"}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around ">
            {
                    state? <Skeleton className="h-4 w-5/12 bg-gray-300" /> :<p>
                <span className="font-bold text-xl max-md:text-sm">{main ? main?.humidity: "11"}</span>%{" "}
              </p>}
              {
                state ? <Skeleton className="h-12 w-12 rounded-full bg-gray-300" />:
              <Image
                src="/images/humidity-sensor.png"
                height={50}
                width={50}
                alt="cloud"
              />}
            </div>
          </CardContent>
         
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>{state ?  <Skeleton className="h-4 w-5/12 bg-gray-300" /> :"Visibility"}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around ">
            {
                    state? <Skeleton className="h-4 w-5/12 bg-gray-300" /> : <p>
                <span className="font-bold text-xl">{visibility ? visibility / 1000:"67"} </span>
                Km/h
              </p>}
              {
                state ? <Skeleton className="h-12 w-12 rounded-full bg-gray-300" />:
              <Image
                src="/images/view.png"
                height={50}
                width={50}
                alt="cloud"
              />}
            </div>
          </CardContent>
         
        </Card>
        
        <Card>
          <CardHeader>
            <CardDescription>{state ?  <Skeleton className="h-4 w-5/12 bg-gray-300" /> :"Sunrise & Sunset"}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between  ">
              <div className="flex items-center max-md:justify-center max-md:flex-col">
              {
                state ? <Skeleton className="h-12 w-12 rounded-full bg-gray-300" />:
                <Image
                  src="/images/sunrise.png"
                  height={60}
                  width={60}
                  alt="cloud"
                />}
               {
                    state? <Skeleton className="h-4 w-5/12 bg-gray-300" /> : <p className="text-xl max-md:text-sm font-bold">{sys ? FormatTime( sys?.sunrise):"5:30"} AM</p>}
              </div>
              <div className="flex items-center max-md:flex-col ">
              {
                state ? <Skeleton className="h-12 w-12 rounded-full bg-gray-300" />:
                <Image
                  src="/images/sunset.png"
                  height={70}
                  width={70}
                  alt="cloud"
                />}
                {
                    state? <Skeleton className="h-4 w-5/12 bg-gray-300" /> :<p className="text-xl font-bold max-md:text-sm">{sys ?FormatTime( sys?.sunset) :"7:10"} PM</p>}
              </div>
            </div>
          </CardContent>
        </Card>
       
        <Card>
          <CardHeader>
            <CardDescription>{state ?  <Skeleton className="h-4 w-5/12 bg-gray-300" /> :"Pressure"}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
            {
                    state? <Skeleton className="h-4 w-5/12 bg-gray-300" /> :<p>
                <span className="font-bold text-xl max-md:text-sm">{main ? main?.pressure:"23"} Pa</span>
              </p>}
              {
                state ? <Skeleton className="h-12 w-12 rounded-full bg-gray-300" />:
              <Image
                src="/images/barometer.png"
                height={50}
                width={50}
                alt="cloud"
              />}
            </div>
          </CardContent>
         
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>{state ?  <Skeleton className="h-4 w-5/12 bg-gray-300" /> :"Clouds"}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around ">
            {
                    state? <Skeleton className="h-4 w-5/12 bg-gray-300" /> :<p>
                <span className="font-bold text-xl max-md:text-sm">{clouds ? clouds?.all :"8"}</span>
              </p>}
              {
                state ? <Skeleton className="h-12 w-12 rounded-full bg-gray-300" />:
              <Image
                src="/images/cloud.png"
                height={50}
                width={50}
                alt="cloud"
              />}
            </div>
          </CardContent>
          
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>{state ?  <Skeleton className="h-4 w-5/12 bg-gray-300" /> :"Feels Like"}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around  max-md:justify-between">
            {
                    state? <Skeleton className="h-4 w-5/12 bg-gray-300" /> :<p>
                <span className="font-bold text-xl max-md:text-sm">{main ? main?.feels_like:"11"}°C</span>
              </p>}
              {
                state ? <Skeleton className="h-12 w-12 rounded-full bg-gray-300" />:
              <Image
                src="/images/water-temperature.png"
                height={50}
                width={50}
                alt="cloud"
              />}
            </div>
          </CardContent>
          
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>{state ?  <Skeleton className="h-4 w-5/12 bg-gray-300" /> :"Minimum Temperature"}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around ">
            {
                    state? <Skeleton className="h-4 w-5/12 bg-gray-300" /> :<p>
                <span className="font-bold text-xl max-md:text-sm">{ main ? main?.temp_min:"11.30"}°C</span>
              </p>}
              {
                state ? <Skeleton className="h-12 w-12 rounded-full bg-gray-300" />:
              <Image
                src="/images/temperature.png"
                height={50}
                width={50}
                alt="cloud"
              />}
            </div>
          </CardContent>
          
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>{state ?  <Skeleton className="h-4 w-5/12 bg-gray-300" /> :"Maximum Temperature"}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around  max-md:justify-between">
            {
                    state? <Skeleton className="h-4 w-5/12 bg-gray-300" /> : <p>
                <span className="font-bold text-xl max-md:text-sm">{ main ? main?.temp_max:"11.50"}°C</span>
              </p>}
              {
                state ? <Skeleton className="h-12 w-12 rounded-full bg-gray-300" />:
              <Image
                src="/images/thermometer.png"
                height={50}
                width={50}
                alt="cloud"
              />}
            </div>
          </CardContent>
          
        </Card>
      </div>
    </>
  );
};

export default DataCards;
