// const tinderUser = new Object() // singleton object
const tinderUser={} //Non-singleton object

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn="false"

console.log(tinderUser);//{ id: '123abc', name: 'Sammy', isLoggedIn: 'false' }

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Aman",
            lastname:"somvanshi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);//Aman
const obj1 ={
    1:"a",
    2:"b"
}
const obj2 ={
    3:"a",
    2:"c"
}

// const obj3={obj1,obj2}
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'c', '3': 'a' } }

// const returnedTarget = Object.assign(target, source);
// const obj3=Object.assign({},      obj1, obj2)
// console.log(obj3);////{ '1': 'a', '2': 'c', '3': 'a' }

const obj3={...obj1,...obj2} //spread operator same as in array
console.log(obj3);//{ '1': 'a', '2': 'c', '3': 'a' }

const users = [
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    },
    {
        id:4,
        email:"d@gmail.com"
    },
]

console.log(users[1].email)//b@gmail.com
console.log(tinderUser);//{ id: '123abc', name: 'Sammy', isLoggedIn: 'false' }

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//[ '123abc', 'Sammy', 'false' ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', 'false' ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true



const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Aman"
}

// console.log(course.courseInstructor)//Aman

//Object destructuring
const {courseInstructor: instructor} = course
console.log(instructor);//Aman // note that we are able to access the value otside the object scope since insructor is declared outside the object

//json
// {
//     "name":"Aman",
//     "coursename": "js in hindi",
//     "price": "free"

// }

// [
//     {},
//     {},
//     {}
// ]


// Random User API on randomuser.me