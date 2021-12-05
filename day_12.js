/*
Your task is to write a function that will take
in an array of objects containing a sender and
a message as a parameter. The function will
then parse a message from each object, add it
to an array then return the built array.
*/

const messages = [
  {origin:"MC", message:"Hello!"},
  {origin:"Shuttle", message:"Hey!"},
]

const parseTranscripts = (messages) => {
  const output = [];
  for (const message of messages) {
    output.push(`${message.origin}: ${message.message}`)
  }
  return output
}

console.log(parseTranscripts(messages));