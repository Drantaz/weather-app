import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Cloud, CloudCog, Rainbow } from "lucide-react";
import Image from "next/image";

export const LeftSide = () => {
  return (
    <div className="col-span-1 mt-7">
      <div className="px-10">
        <Input type="search" placeholder="Banjul, The Gambia" />
      </div>
      <div className="flex justify-center mt-8">
        <Image
          src="/images/clear.png"
          alt="sun"
          width={200}
          height={200}
          className="fill object-cover"
        />
      </div>
      <h1 className="text-5xl font-extrabold text-center mt-8">86°C</h1>
      <div className="mt-8">
        <h2 className="text-center flex justify-center bold text-2xl">
          Monday 12:30PM
        </h2>
      </div>
     <div className="px-12">
     <Separator className="mt-10 bg-gray-400" />
     <div className="flex flex-col gap-3 mt-12">
        <div className="flex gap-x-3">
            <Cloud/>
            <span>Monstly Cloudy</span>
        </div>
        <div className="flex gap-x-3">
            <Rainbow/>
            <span>Rain-24%</span>
        </div>

     </div>
     </div>
      <div className="flex justify-center mt-[50px] mb-[5px]">
        <Image
          src="/images/gambia.jpg"
          width={450}
          height={450}
          alt="gambia"
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

export default LeftSide;
