/*
Your task is to create a function that will take
in an array of weather objects and will return a
rounded average of the wind speed.
*/

const exampleEntries = [
  { 
    temperature:0, 
    weather:"sunny", 
    windDirection: "NNE", 
    windSpeed:24
  },
  { 
    temperature:10, 
    weather:"cloudy", 
    windDirection: "NNE", 
    windSpeed:9 
  }
]

const averageWindSpeed = (weatherEntries) => {
  let totalWindSpeeds = 0;
  for (const day of weatherEntries) {
    totalWindSpeeds += day.windSpeed
  }

  const averageWindSpeed = Math.round(totalWindSpeeds / weatherEntries.length)
  return averageWindSpeed
}

console.log(averageWindSpeed(exampleEntries));