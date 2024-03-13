// Dates

let myDate = new Date();
console.log(myDate);//2024-03-13T13:09:46.390Z
console.log(myDate.toString());//Wed Mar 13 2024 18:40:34 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//Wed Mar 13 2024
console.log(myDate.toISOString());//2024-03-13T13:10:34.347Z
console.log(myDate.toJSON());//2024-03-13T13:10:34.347Z
console.log(myDate.toLocaleDateString());//13/3/2024
console.log(myDate.toLocaleString());//13/3/2024, 6:40:34 pm
console.log(typeof myDate);//object

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toLocaleString());//23/1/2023, 12:00:00 am
// let myCreatedDate = new Date(2023, 0, 23, 5 , 3) // notice that months start from 0, january has index = 0
// console.log(myCreatedDate.toLocaleString());//23/1/2023, 5:03:00 am
// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());//14/1/2023, 5:30:00 am
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());//14/1/2023, 12:00:00 am

let myTimeStamp = Date.now()
console.log(myTimeStamp)//1710336006334
console.log(myCreatedDate.getTime());//1673634600000 //basically it gives TimeStamp which is in milliseconds measured from 1 jan 1970
console.log(Math.floor(Date.now()/1000));//1710336086 // now it is in seconds

let newDate = new Date()
console.log(newDate);//2024-03-13T13:49:10.504Z
console.log(newDate.getMonth()+1);//3
console.log(newDate.getDay());//3 since it was Wednesday when this code was written

console.log(`The dAY IS ${newDate.getDay()} AND THE TIME IS ${newDate.getTime()}`);//The dAY IS 3 AND THE TIME IS 1710337907230

console.log(newDate.toLocaleString('default',{ 
    weekday:"long",
}))
//The first parameter 'default' specifies that the method should use the default locale settings, which typically correspond to the user's preferred language and region.
// The second parameter is an object containing options for formatting the date. In this case, it specifies the weekday option set to "long", which means that the full name of the day of the week will be returned.

