const marvel_heros = ["Thor", "IronMan", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);//[ 'Thor', 'IronMan', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);//flash

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);//[ 'Thor', 'IronMan', 'Spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros]; //Spread operator
console.log(all_new_heros);//[ 'Thor', 'IronMan', 'Spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); //all values of the array are spread out
console.log(real_another_array);/*
[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]
*/
console.log(Array.isArray("Aman"));//false
console.log(Array.from("Aman"));//[ 'A', 'm', 'a', 'n' ]
console.log(Array.from({ name: "Aman" })); //[]

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
