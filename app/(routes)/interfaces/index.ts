

export interface Weather {
    icon: string;
    description: string;
}

export interface Main {
    temp: number;
}



export interface ForecastData {
    dt: number;
    main: Main;
    weather: Weather[];
}


export interface ForecastCardProps {
    data: ForecastData[];
    state: boolean
}



export interface Data {
    visibility: number
        main: {
            temp: number;
            feels_like: number;
            temp_max: number;
            temp_min: number;
            humidity:number;
            pressure:number;
        };
        wind: { speed: number; };
        clouds: { all: number };
        sys: {
            sunrise: number;
            sunset: number;
        }


}

export interface CurrentData {
    data:{ visibility: number
        main: {
            temp: number;
            feels_like: number;
            temp_max: number;
            temp_min: number;
            humidity:number;
            pressure:number;
        };
        wind: { speed: number; };
        clouds: { all: number };
        sys: {
            sunrise: number;
            sunset: number;
        }};
    state: boolean;
}