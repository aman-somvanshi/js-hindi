// ForEach loop

// forEach loop values does not return anything. Here , Output - undefined
const coding = ["js", "ruby", "java", "python", "cpp"];
// coding.forEach(function (item) {  //kyuki ye callback function h , toh iska naam nhi hota
//   console.log(item);
// });

// coding.forEach( (i) => {
//     console.log(i);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index , arr);

// })

const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})
