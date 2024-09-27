const weight = 97;
const height = 1.80;
var formula = weight/(height*height);

if( formula < 18.5){
    console.log("You are underweight & Your BMI value is : "+ formula.toFixed(2));

}
else{
    if(formula>=18.5 && formula<=24.9){
        console.log("Your weight is normal & your BMI value is : "+ formula.toFixed(2));
    }
    else{
        if(formula>=24.9 && formula<=29.9){
            console.log("You are overweight and your BMI value is : " + formula.toFixed(2));
        }
        else{
            console.log("You are obese & your BMI value is : " + formula.toFixed(2));
        }
    }
   
}

