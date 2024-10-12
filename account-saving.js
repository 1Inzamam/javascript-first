function acc(array, num){
    let calculation = 0;
    let afterTax = 0;
    let totalAmount = 0;
    let totalSaving = 0;
    const msg1 = "Total Savings: ";
    if(Array.isArray(array) && typeof num ==='number'){
        for(let number of array){
            if(number >= 3000){
                 calculation = (number * 20)/100;
                afterTax = number - calculation;
                totalAmount = totalAmount + afterTax;
            }
            else{
                totalAmount += number; 
            }
        }
        totalSaving = totalAmount - num;
        // console.log(totalSaving);
        if(totalSaving>0)
        {
            console.log("Total Savings: " + totalSaving);
        }
        else{
            console.log("Keep earning");
        }
        return totalSaving;
    }
    else{
        console.log("Wrong Input");
    }
}

const income =[1000, 1500, 3000];
const cost = 3000;
acc(income, cost);


