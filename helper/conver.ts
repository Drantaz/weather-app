
export const FormatTime = (time: any) => {
    const sunriseDate = time
        ? new Date(time * 1000)
        : null;

        const formattedSunrise = sunriseDate
        ? sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        : null;

    return formattedSunrise
}

export const convertEpochToTime = (epochTime:number) => {
   const date = new Date(epochTime * 1000);
 
   const hours = date.getUTCHours().toString().padStart(2, '0');
   const minutes = date.getUTCMinutes().toString().padStart(2, '0');
   const seconds = date.getUTCSeconds().toString().padStart(2, '0');
 
   return `${hours}:${minutes}:${seconds}`;
 };
