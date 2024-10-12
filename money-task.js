function calculation(num){
   if(num < 0){
      console.log("Incorrect value");
   }
   else{
      const income = num *120;
      leftMoney = income - 900;
      return leftMoney;
   }
}
const totalTicket = 12;
const totalIncome = calculation(totalTicket);
console.log(totalIncome);
