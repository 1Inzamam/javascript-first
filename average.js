// average of five person's salary 
var firstPerson = 0.3;
var secondPerson = 0.2;
var thirdPerson = 6;
var fourthPerson = 3.5;
var fifthPerson = 5.7;
var sixthPerson = 0.1;

console.log("First person's salary = " + "$" + firstPerson +"K")
console.log("Second person's salary = " + "$" + secondPerson + "K")
console.log("Third person's salary = " + "$" + thirdPerson + "K")
console.log("Fourth person's salary = "  + "$" + fourthPerson + "k")
console.log("Fifth person's salary = " + "$" + fifthPerson + "K")
console.log("Sixth person's salary = " + "$" + sixthPerson + "K")

var average = (firstPerson + secondPerson + thirdPerson + fourthPerson + fifthPerson)/6;
console.log("Average of their salary's = " + "$" + average.toFixed(2) + "K")