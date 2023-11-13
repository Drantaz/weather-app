"use client";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import DataCards from "./components/DataCards";
import LeftSide from "./components/LeftSide";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const { setTheme } = useTheme();

  const [weather,setWeather]=useState([])

  const [data, setData] = useState({
    city: ""
  });
  
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const response =
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&units=metric&appid=f596a83a4816492eddc424cd3362fc0e
        `);
    setWeather(response.data);
  };

  // console.log(weather);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  return (
    <div>
      <div className="grid grid-cols-5 ">
        <div className="border-gray-400 border-r col-span-1">
          <div className="col-span-1 mt-7">
            <div className="px-10">
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
            <LeftSide data={weather} />
          </div>
        </div>
        <div className="col-span-4 dark:bg-background bg-gray-200">
          <div className="flex justify-between items-center w-full px-10 py-3 ">
            <h3 className="font-bold text-2xl uppercase">Weather App</h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <DataCards data={weather} />
        </div>
      </div>
    </div>
  );
}
