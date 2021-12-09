/*
Your task is to write a function that will take
in an array of toggle objects and a specific
toggle name. The goal is to switch only the
specific toggle, without affecting the other
toggles and then return the updated array.
*/

const toggleList = [
  {
    name: "toggleA",
    isOn: false
    }, 
  {
    name: "toggleB",
    isOn: true
  }
]
const specificToggle = "toggleA"

const switchSpecificToggle = (toggleList, specificToggle) => {
  for (const toggle of toggleList) {
    if (toggle.name === specificToggle) {
      if (toggle.isOn === true) {
        toggle.isOn = false
      } else {
        toggle.isOn = true
      }
    }
  }
  return toggleList
}

console.log(switchSpecificToggle(toggleList, specificToggle))