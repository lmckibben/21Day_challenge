/*
Your task is to write a function that will take
in an array of objects containing switches. The
function will change the value of the isOn property
to true for every switch in the list, and then
return the updated array.
*/

const toggleList = [
	{
		name:"Air",
		isOn:true
	},
	{
		name:"Radio",
		isOn:false
	},
]

const switchAllTogglesOn = (toggleList) => {
  for (const toggle of toggleList) {
    if (toggle.isOn === false) {
      toggle.isOn = true
    }
  }
  return toggleList
}

console.log(switchAllTogglesOn(toggleList))