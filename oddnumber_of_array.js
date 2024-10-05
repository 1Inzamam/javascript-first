let odds = 0;
let i = 0;
function odd(num){
    for(let number of num){
        if(number % 2 !== 0){
            odds = odds + number;
            i++;
        }
    }
    return odds / i;
}

const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const average = odd(number);
console.log(average);