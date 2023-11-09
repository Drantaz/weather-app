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
