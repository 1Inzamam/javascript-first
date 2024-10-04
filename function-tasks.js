//////////////////////////multiple function parameter//////////////////////////

// function multiply(num, num1, num2, num3){
//     multiply = num * num1 * num2 * num3;
//     return multiply;
// }
// const result = multiply(2, 2 , 2, 2);
// console.log(result);



//////////////////////////conditions of multiplication and division if the number is even or odd///////////////////////////////////

// function conditions(num){
//     if(num % 2 == 0){
//         num= num/2;
//         return num;
//     }
//     return num*2;

// }

// const num = conditions(3);
// console.log(num);



////////////////////////////Average of an array with function ////////////////////////////////
function average(num){
    let i=0;
    let sum = 0;
    for(const number of num){
        i++;
        sum = sum + number;
    }
    return sum/i;
}

const num = [2, 2, 2, 2 ,2];
const avg = average(num);
console.log(avg);