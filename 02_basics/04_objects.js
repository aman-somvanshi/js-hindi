// const tinderUser = new Object() // singleton object
const tinderUser={} //Non-singleton object

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn="false"

// console.log(tinderUser);

const regularUser={
    email:"some@gamil.com",
    fullname:{
        userfullname:{
            firstname:"Aman",
            lastname:"somvanshi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
const obj1 ={
    1:"a",
    2:"b"
}
const obj2 ={
    3:"a",
    2:"c"
}

// const obj3={obj1,obj2}
// const returnedTarget = Object.assign(target, source);
// const obj3=Object.assign({},obj1, obj2)
const obj3={...obj1,...obj2} //spread operator same as in array
// console.log(obj3);

const users = [
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

