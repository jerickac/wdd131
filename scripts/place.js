const temperature = document.querySelector("#temperature");
const windSpeed = document.querySelector("#wind-speed");
const windChill = document.querySelector("#wind-chill")

let tempStr = "10";
temperature.textContent = tempStr;
let tempNum = Number(tempStr);

let wSpeedStr = "5";
windSpeed.textContent = wSpeedStr;
let wSpeedNum = Number(wSpeedStr);


function calculateWindChill(temp, wSpeed) {
    const windChill = 13.12 + 0.6215 * temp - 11.37 * wSpeed ** 0.16 + 0.3965 * temp * wSpeed ** 0.16;

    return windChill.toFixed(1);
}

if (tempNum <= 10 && wSpeedNum > 4.8) {
    let wChill = calculateWindChill(tempNum, wSpeedNum);
    windChill.textContent = wChill;
    } else {
        wChill = "N/A"
        windChill.textContent = wChill;
    }