import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Image from "next/image";
import { Convert } from "../../../helper/conver";

const DataCards = (data: any) => {
  const { visibility, main, wind, rain, clouds, sys } = data.data;
  return (
    <>
      <div className="grid grid-cols-5  gap-x-2 gap-y-2 px-6">
        <Card>
          <CardHeader>
            <CardDescription className="text-center">Monday</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
            <Image
                src="/images/humidity-sensor.png"
                height={80}
                width={80}
                alt="cloud"
              />
            </div>
          </CardContent>
          <CardFooter className="justify-center">
           77
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription className="text-center">Tuesday</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
            <Image
                src="/images/cloud.png"
                height={80}
                width={80}
                alt="cloud"
              />
            </div>
          </CardContent>
          <CardFooter className="justify-center">
           
             30C
           
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription className="text-center">Wensday</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
            <Image
                src="/images/clear.png"
                height={80}
                width={80}
                alt="cloud"
              />
            </div>
          </CardContent>
          <CardFooter className="justify-center">
           21
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription className="text-center">Thursday</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
            <Image
                src="/images/rain.png"
                height={80}
                width={80}
                alt="cloud"
              />
            </div>
          </CardContent>
          <CardFooter className="justify-center">32
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription className="text-center">Friday</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
            <Image
                src="/images/mist.png"
                height={80}
                width={80}
                alt="cloud"
              />
            </div>
          </CardContent>
          <CardFooter className="justify-center">
           28
          </CardFooter>
        </Card>
      </div>
      
      
      
      
      
      
      
      <div className="grid grid-cols-3  gap-x-2 gap-y-2 px-6 py-2">
        <Card>
          <CardHeader>
            {/* <CardTitle>Card Title</CardTitle> */}
            <CardDescription>Wind Status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
              <p>
                <span className="font-bold text-2xl">{wind?.speed} </span>Km/h{" "}
              </p>
              <Image
                src="/images/mist.png"
                height={80}
                width={80}
                alt="cloud"
              />
            </div>
          </CardContent>
          <CardFooter>
            <p className="font-bold">
              Status: <span className="text-yellow-500">Average</span>{" "}
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            {/* <CardTitle>Card Title</CardTitle> */}
            <CardDescription>Humidity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
              <p>
                <span className="font-bold text-2xl">{main?.humidity}</span>%{" "}
              </p>
              <Image
                src="/images/humidity-sensor.png"
                height={80}
                width={80}
                alt="cloud"
              />
            </div>
          </CardContent>
          <CardFooter>
            <p className="font-bold">
              Status: <span className="text-blue-700">Good Quality</span>{" "}
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            {/* <CardTitle>Card Title</CardTitle> */}
            <CardDescription>Visibility</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
              <p>
                <span className="font-bold text-2xl">{visibility} </span>
              </p>
              <Image
                src="/images/thunderstorm.png"
                height={80}
                width={80}
                alt="cloud"
              />
            </div>
          </CardContent>
          <CardFooter>
            <p className="font-bold">
              Status: <span className="text-green-700">Excellent</span>{" "}
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            {/* <CardTitle>Card Title</CardTitle> */}
            <CardDescription>Air Quality</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
              <p>
                <span className="font-bold text-2xl">128 </span>
              </p>
              <Image
                src="/images/air-quality.png"
                height={80}
                width={80}
                alt="cloud"
              />
            </div>
          </CardContent>
          <CardFooter>
            <p className="font-bold">
              Status: <span className="text-blue-700">Good Quality</span>{" "}
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            {/* <CardTitle>Card Title</CardTitle> */}
            <CardDescription>Sunrise & Sunset</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
              <div className="flex justify-around">
                {/* <p><span className="font-bold text-2xl">{Convert(sys?.sunrise)}</span> AM </p> */}
                <Image
                  src="/images/sunrise.png"
                  height={50}
                  width={40}
                  alt="cloud"
                />
              </div>
              <div className="flex justify-around">
                {/* <p><span className="font-bold text-2xl">{Convert(sys?.sunset)}</span> PM </p> */}
                <Image
                  src="/images/sunset.png"
                  height={50}
                  width={40}
                  alt="cloud"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p className="font-bold">
              Status: <span className="text-blue-700">Average</span>{" "}
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            {/* <CardTitle>Card Title</CardTitle> */}
            <CardDescription>UV index</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
              <p>
                <span className="font-bold text-2xl">8 </span>
              </p>
              <Image src="/images/uv.png" height={80} width={80} alt="cloud" />
            </div>
          </CardContent>
          <CardFooter>
            <p className="font-bold">
              Status: <span className="text-yellow-500">Average</span>{" "}
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            {/* <CardTitle>Card Title</CardTitle> */}
            <CardDescription>Pressure</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
              <p>
                <span className="font-bold text-2xl">{main?.pressure} </span>
              </p>
              <Image
                src="/images/barometer.png"
                height={80}
                width={80}
                alt="cloud"
              />
            </div>
          </CardContent>
          <CardFooter>
            <p className="font-bold">
              Status: <span className="text-green-700">Excellenct</span>{" "}
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            {/* <CardTitle>Clouds</CardTitle> */}
            <CardDescription>Clouds</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
              <p>
                <span className="font-bold text-2xl">{clouds?.all}</span>
              </p>
              <Image
                src="/images/cloud.png"
                height={80}
                width={80}
                alt="cloud"
              />
            </div>
          </CardContent>
          <CardFooter>
            <p className="font-bold">
              Status: <span className="text-blue-700">Good Quality</span>{" "}
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            {/* <CardTitle>Card Title</CardTitle> */}
            <CardDescription>Precipitation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around">
              <p>
                <span className="font-bold text-2xl">128</span>
              </p>
              <Image
                src="/images/rain.png"
                height={80}
                width={80}
                alt="cloud"
              />
            </div>
          </CardContent>
          <CardFooter>
            <p className="font-bold">
              Status: <span className="text-blue-700">Good Quality</span>{" "}
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default DataCards;
