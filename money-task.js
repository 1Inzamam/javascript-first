function calculation(num){
   const income = num *120;
   leftMoney = income - 900;
   return leftMoney;
}
const totalTicket = 12;
const totalIncome = calculation(totalTicket);
console.log(totalIncome);
