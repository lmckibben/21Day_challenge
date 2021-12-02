/*
Your task is write a function that will take in a list
of platforms and a date as a string. That function will
update the date property on the first platform with an
empty date and then return the platform list.
*/

const missionDate = "2021-12-12"
const platformList = [
  {
    name:"Platform A",
    bookDate:"2021-12-11"
  },
  {
    name:"Platform B",
    bookDate:undefined
  },
  {
    name:"Platform C",
    bookDate:undefined
  },
] 

const bookFreePlatform = (platformList, missionDate) => {
  for (const platform of platformList) {
    if (platform.bookDate === undefined) {
      platform.bookDate = missionDate
      return platformList
    }
  }
}

console.log(bookFreePlatform(platformList, missionDate));