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


//////////////////////////SUM OF OBJECT'S ELEMENTS ////////////////////////////////


const array2 = [
    {name: 'egg', price: 320},
    {name: 'oil', price: 200},
    {name: 'rice', price: 120},
];

let grandtotal = 0;
function total(num){
    for(let number of num){
        grandtotal = grandtotal + number.price;
    }
    return grandtotal;
}
const shopping = total(array2);
console.log(shopping);