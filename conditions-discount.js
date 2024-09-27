const price = 8000;
if(price>= 7000)
{
    const discount = price*10/100;
    const amount = price - discount;
    console.log(amount);
}
else{
    console.log(price);
}