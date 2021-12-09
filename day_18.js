/*
Your task is to write a function that will take in
an array of lunch choices (strings) and return the
choice as a string with the most votes.
*/

const listOfChoices = [
  "Chicken Dinner",
  "Chicken Dinner",
  "Chicken Dinner",
  "Ice Cream Sandwich", 
  "Ice Cream Sandwich"
]

const chooseLunchWinner = (listOfChoices) => {
  const counts = {};
  for (let i = 0; i < listOfChoices.length; i++) {
    counts[listOfChoices[i]] = 1 + (counts[listOfChoices[i]] || 0)
  }
  return Object.keys(counts).reduce((a, b) => (counts[a] > counts[b]) ? a : b)
}

console.log(chooseLunchWinner(listOfChoices))