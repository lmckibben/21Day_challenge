/*
Create a function that takes in a toggle object and will
change the value of the property isOn between true and
false and return the updated object. Using the function
twice should revert the toggle back to its original value.
*/

const someToggle = {
  name:"toggleA",
  isOn:false
}

const switchToggle = (toggle) => {
  if (toggle.isOn === false) {
    toggle.isOn = true;
    return toggle    
  }
  if (toggle.isOn === true) {
    toggle.isOn = false;
    return toggle
  }
}
console.log('before', someToggle);
console.log(switchToggle(someToggle));
console.log(switchToggle(someToggle));

