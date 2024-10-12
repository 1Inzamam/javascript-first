function arrayDeletion(num){
    const newArray =[];
    if(Array.isArray(num)){
        for(const i of num){
            if(typeof i === 'number' && !isNaN(i)){
             newArray.push(i);
            }
        }
        console.log(newArray);
    }
    else{
        console.log("NOT an array");
    }
    
    
}

const array = [ NaN , -1, 1, 2, 43, 4, "aaaa"];
// const array = {num:[1,2,3,4]};
arrayDeletion(array);