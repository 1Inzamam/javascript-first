// ways to declare array 

const numbers = [1, 2, 3, 4, 4, 5];
const names = ['ajam', 'basim', 'chamber', 'xander'];
const mix = ['good', 1, 'free','kick', 10];

// how to check array length
console.log(numbers.length);

// how to check a single index of an array 

console.log(numbers[2]);

// how to set value in any index of an array 

numbers[0] = 1000;
console.log(numbers)



//*********************************************************** */


// how to push and pop 

// push 
// push means adding an element to tha last of an array
// numbers.push(6);
// numbers.push(7,8);
numbers.push(6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
console.log(numbers);


// pop 
// pop works for removing an element from the last of an array 

numbers.pop();
console.log(numbers);

// shift unshift 
// shift works to removing an element to the start of an array
// unshift works to add an element to the start of an array



// *****************************************************



// how includs works
// includs checks the array list if there is any similar element available 
// if the element is available then includs returns true else false

console.log(names.includes('ajam'))

// simple conditions using includs 

if(names.includes('xander')){
    console.log('xander is under arrest');
}else{
    console.log('sorry for the disturbance');
}


//*********************************************************** */


// indexOf 
// in order to find a specific element's index the method "indexOf" is used
// example 

console.log(names.indexOf('basim'));




//*********************************************************** */


//how to check a variable if it is an array or not
// returns true or false

// console.log(Array.isArray(numbers));

// var test = 6;
// console.log(Array.isArray(test));



