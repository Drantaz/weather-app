import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Cloud, CloudCog, Rainbow } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import axios from 'axios'

export const LeftSide = (data:any) => {

    const {name,main}=data.data
    

  return (
    <div>
      <div className="flex justify-center mt-8">
        <Image
          src="/images/clear.png"
          alt="sun"
          width={170}
          height={170}
          className="fill object-cover"
        />
      </div>
      <h1 className="text-4xl font-extrabold text-center mt-12">{main?.temp}°C</h1>
      <div className="mt-12">
        <h2 className="text-center flex justify-center bold text-2xl">
          Monday 12:30PM
        </h2>
      </div>
      <div className="px-8">
        <Separator className="mt-10 bg-gray-400" />
        <div className="flex flex-col gap-3 mt-[120px]">
          <div className="flex gap-x-3">
            <Cloud />
            <span>Monstly Cloudy</span>
          </div>
          <div className="flex gap-x-3">
            <Rainbow />
            <span>Rain-24%</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-center mt-[80px] mb-[5px]">
          <Image
            src="/images/gambia.jpg"
            width={300}
            height={300}
            alt="gambia"
            className="rounded-2xl"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">
          {name}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
