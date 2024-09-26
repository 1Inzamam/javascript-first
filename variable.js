
// basic variable declaration
// / var name = value
var height = 6;
var price = 200;
var balance = 2000;
var days = 15; 

 var carname;
 carname = 'GT-R';
 console.log(carname)
 console.log(balance)
 
 console.log(typeof price)
 
//  to convert a string to number 
// use perseInt()

var dance = parseInt("69")
 console.log(dance)
 console.log(typeof dance)

 dance = "69";
 console.log(dance)
 console.log(typeof dance)

//  to convert a string to floating number
// use perseFloat()

var dance = parseFloat("0.69")
console.log(dance)
console.log(typeof dance)

// to fix the infinity or unlimited decimal number after calculation of decimal values 
// use toFixed()

var f = 0.1;
var s = 0.2;
var t = f + s;
console.log(t)  //example of not using fixed decimal values//

// after using fixed values 

console.log(t.toFixed(2))