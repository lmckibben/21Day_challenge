/*
Now that a crew has been selected, you need to write a new
function that will assign a job to each astronaut. Since
you’ve had some experience with updating object properties
in some of the previous challenges, this should be fairly
straightforward. Just keep in mind that you need to return
the astronaut after updating the job property.
*/

const exampleAstronaut = {
  firstName:"Chris",
  lastName: "Hadfield",
  nickname:"Space Oddity",
  prefix:"Astronaut"
}

const addJobToAstronaut = (astronaut, job) => {
  astronaut.job = job
  return astronaut
}

console.log(addJobToAstronaut(exampleAstronaut, 'Shuttle DJ'))