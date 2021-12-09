/*
Your task is to write a function that will take
in two position objects. Calculate the average
speed from the two positions and return the
average speed rounded to the first decimal point.
*/

const firstPosition = {
  time: 1637074462,
  altitude: 1100
}
const secondPosition = {
  time: 1637074558,
  altitude: 2200
}

const getAverageSpeed = (firstPosition, secondPosition) => {
  const changeInAltitude = Math.abs(firstPosition.altitude - secondPosition.altitude);
  const changeInTime = Math.abs(firstPosition.time - secondPosition.time);
  const averageSpeed = Math.round((changeInAltitude / changeInTime) * 10) / 10
  return averageSpeed
}

console.log(getAverageSpeed(firstPosition, secondPosition))