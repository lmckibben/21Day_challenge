/*
Your task is to create a function that will take in an array
representing the roster of astronauts, and return an array
containing the jobs of each astronaut as a string.
*/

const exampleRoster = [
  {
    firstName:"Chris",
    lastName: "Hadfield",
    nickname:"Space Oddity",
    prefix:"Astronaut",
    job:"Shuttle DJ"
  },
  {
    firstName:"Mark",
    lastName: "Hadfield",
    nickname:"Space Oddity",
    prefix:"Astronaut",
    job:"Space Cook"
  }
]

const listAstronautJobs = (roster) => {
  const listOfJobs = [];
  for (const astronaut of roster) {
    listOfJobs.push(astronaut.job);
  }
  return listOfJobs
}

console.log(listAstronautJobs(exampleRoster))