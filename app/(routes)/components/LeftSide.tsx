import { Separator } from "@/components/ui/separator";
import { Cloud, LocateIcon, Rainbow } from "lucide-react";
import Image from "next/image";
import moment from "moment"
import { convertEpochToTime } from "@/helper/conver";

export const LeftSide = (data: any) => {
  const { name, main, weather, dt,sys } = data.data;
  const now_time=convertEpochToTime(dt);
  console.log(now_time);

  return (
    <div>
      <div className="">
        {weather && weather.length > 0 ? (
          <Image
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            width={270}
            height={270}
            alt="gambia"
            className="rounded-2xl"
          />
        ) : (
          <Image
            src="/images/clear.png"
            width={300}
            height={300}
            alt="gambia"
            className="rounded-2xl"
          />
        )}
      </div>
      <h1 className="text-4xl font-extrabold text-center mx-5 text-blue-600">
        {main ? `${main.temp}°C` : "38°C"}
      </h1>
      <div className="mt-12 max-sm:hidden">
        <h2 className="text-center flex justify-center bold text-2xl">
          {dt ? (
            <>
               {moment(dt).format('dddd')}

            </>
          ) : (
            "Monday 6:30AM"
          )}
        </h2>
      </div>
      <div className="px-8  ">
        <Separator className="mt-[30px] bg-gray-200 max-md:hidden" />
        <div className="flex flex-col gap-y-5 m-8 max-md:flex-row max-md:gap-x-6 ">
          <div className="flex gap-x-3">
            <Cloud />
            {weather && weather.length > 0 ? (
              <span>{weather[0]?.description}</span>
            ) : (
              "Cloudy"
            )}
          </div>
          <div className="flex gap-x-3">
            <Rainbow />
            {weather && weather.length > 0 ? (
              <span>{weather[0]?.main}</span>
            ) : (
              "Rainy"
            )}
          </div>
        </div>
      </div>
      <div className="relative  max-sm:hidden">
        <div className="flex justify-center mt-[50px]">
          <Image
            src="/images/gambia.jpg"
            width={300}
            height={300}
            alt="gambia"
            className="rounded-2xl"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-l font-bold">
         {name},{sys?.country}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
