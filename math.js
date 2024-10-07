////////////////////FINDING MAX USING MATH OBJECT /////////////////////////////////

const max = Math.max(1,2,3,4,5,6);
console.log(max)



/////////////////////////FINDING MINIMUM VALUE CREATING A FUNCTION////////////////

const array = [11, 12, 1, 2, 3, 4, 0, 5, 6, 7, 8, 9, 10];
function min(num){
    let out = num[0];
    for(let number of num){
        if(number < out){
            out = number;
        }
    }
    return out;
}

const minimum = min(array);
console.log(minimum);