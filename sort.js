const numbers = [1, 32, 65, 64, 33, 22, 11, 19];
const numbers_a = numbers.sort(function(a,b){return a-b});
console.log(numbers_a);
const numbers_d = numbers.sort(function(a,b){return b-a});
console.log(numbers_d);