/*
Your task is to write a function that will take
in a launch date and a mission name as strings.
Calculate the difference between two dates in
days and return an object containing the name
of the mission and a rounded day difference.
*/

const launchDate = "2021-12-12"
const fakeToday = "2021-12-01"
const missionName = "Moon visit"

const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date() // Do not alter this line!
  let currentDay = 0;
  const launchDay = parseInt(launchDate.split('-')[2]);
  if (typeof today === 'string') {
    currentDay = parseInt(today.split('-')[2]);
  }
  if (typeof today === 'object') {
    const date = today.toLocaleDateString();
    currentDay = parseInt(date.split('/')[1]);
  }

  const daysRemaining = launchDay - currentDay;
  const output = {
    missionName: missionName,
    daysRemaining: daysRemaining
  }
  return output
}

console.log(timeRemaining(launchDate, missionName));