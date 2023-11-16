const first5 = [];

const foundDates = [new Date().toLocaleString("lt").split(" ")[0]];

for (let i = 0; i < lists.length; i++) {
  const obj = lists[i];
  const date_txt = obj.dt_txt.split(" ")[0];
  if (!foundDates.includes(date_txt)) {
    foundDates.push(date_txt);
    first5.push(obj);
  }
}


// Get current location

if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
          },
          (error) => {
            Swal.fire(
              "GPS Needed",
              "Please enable your location in order to use this service.\nIf you have enabled it, please refresh the browser.",
              "info"
            );
          }
        );
      } else {
        Swal.fire(
          "Error",
          "Geolocation is not supported by this browser.",
          "error"
        );
      } 
