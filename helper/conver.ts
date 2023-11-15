
export const FormatTime = (time: any) => {
    const sunriseDate = time
        ? new Date(time * 1000)
        : null;

        const formattedSunrise = sunriseDate
        ? sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        : null;

    return formattedSunrise
}

export const  converDay=(timestamp:any)=> {
    const date = new Date(timestamp * 1000);
    const dayOfWeek = date.getDay();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[dayOfWeek];
  }
  

  export const convertTimeZone=(timestamp:any, timezoneOffset:any)=> {
    const date = new Date(timestamp * 1000);
    date.setUTCSeconds(date.getUTCSeconds() + timezoneOffset);
  
    const timeString = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    });
  
    return timeString;
  }
