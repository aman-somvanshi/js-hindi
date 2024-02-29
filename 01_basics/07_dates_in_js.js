// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5 , 3) // notice that months start from 0, jan index =0
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime()); //also gives TimeStamp which is in milliseconds from 1 jan 1970
// console.log(Math.floor(Date.now()/1000)); // now it is in seconds

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

// `The dAY IS ${newDate.getDay} AND THE TIME IS ${newDate.getTime}`

newDate.toLocaleString('default',{
    weekday:"long",
})
