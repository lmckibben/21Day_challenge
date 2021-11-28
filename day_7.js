/*
Write a function that takes in temperature,
weather condition, wind speed, and direction
as parameters and store them inside a object.
Convert the temperature fahrenheit to celsius.
Convert wind speed from miles/hour to meters/second.
*/

const temperature = 32;
const condition = "Sunny with small clouds";
const windSpeed = 20;
const windDirection = "NNE";

const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  const tempInCelsius = Math.round((temperature - 32) * (5/9));
  const metersPerSecond = Math.round(windSpeed / 2.237);
  const output = {
    temperature: tempInCelsius,
    windSpeed: metersPerSecond,
    windDirection: windDirection,
    condition: condition
  }
  return output
}

console.log(storeWeatherConditions(temperature, condition, windSpeed, windDirection));