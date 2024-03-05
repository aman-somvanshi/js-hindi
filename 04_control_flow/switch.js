// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = `April`
switch (month) {
    case `January`:
        console.log('January');
        break;
    case `February`:
        console.log('February');
        break;
    case `March`:
        console.log('March');
        break;
    case `April`:
        console.log('April');
        break;     // If break is not present in cases, then after the case matches , the entire code below it is executed except the default case

    default:
        console.log(`default case match`);
        break;
}