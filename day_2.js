/*
Registering new astronauts was handled manually in previous missions but it's taking too much time.
Knowing that the astronaut information is already listed in a data set, you propose to optimize that
 job with programming.

Your task is to automate that process by creating a function that will take in an astronaut object as
 a parameter and return a string using the properties of the astronaut.

 output:
 Astronaut: Neil "Steps" Armstrong
*/

const exampleAstronaut = {
  firstName: "Neil",
  lastName: "Armstrong",
  nickname: "Steps",
  prefix: "Astronaut"
}

const generateAstronautTag = (astronaut) => {
  return `${astronaut.prefix}: ${astronaut.firstName} "${astronaut.nickname}" ${astronaut.lastName}`
}

console.log(generateAstronautTag(exampleAstronaut))