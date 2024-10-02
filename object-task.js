const c = {
    red : "#ff00",
    green: "#00ff00",
    blue:"#000ff",
    brown:{
        dark:'#5C4033',
        light:'#C4A484',
        normal:'#A52A2A',
        'extra-dark': '#5C4033',
    },
    number: 99, 
}

// const c = {
//     red : "#ff00",
//     green: "#00ff00",
//     blue:"#000ff",
//     number: 99, 
// }
// console.log(c.blue);


// /////////////////////////////////////////////////////////////////

// adding a property in an object 

// Object.defineProperty(c, "yellow",{value:"#FFFF00"});
// console.log(c)


////////////////////////////////////////////////

// console.log(c.brown["extra-dark"]);


////////////////////////////////////////////////////////

// getting the number of properties 


// const k = Object.keys(c);
// console.log(k);
// let i=1;
// for(const z of k){
//      i++;
// }
// console.log(i);



/////////////////////////////////////////////////////////

// printing type of data of the values in object 

// const myObject = {
//     name: "Alice",
//     age: 30,
//     isStudent: false,
//     scores: [90, 85, 88],
//     details: { height: 160, weight: 55 },
//     greet: function() { return "Hello!"; }
// };

// for (const key in c) {
//     if (c.hasOwnProperty(key)) {
//         console.log(`key: ${key} | Type: ${typeof c[key]}`);
//     }
// }


//////////////////////////////////////////////////////////////////

// finding how many same letter is there in the string 

// const string = 'my no mY o yo no loco';

// function countA(str){
//     const matches = string.match(/y/gi);
//     return matches ? matches.length : 0;
// }
// console.log(countA(string));



////////////////////////////////////////////////////

// getting the first letter of each words as capital letter in a string full of words 

// function capitalizeWords(str){
// return str
// .split(' ')
// .map(word =>{
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// })
// .join(' ');
// }
// const string = 'my no mY o yo no loco';
// const capitalizedString = capitalizeWords(string);
// console.log(capitalizedString);
